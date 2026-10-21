"use client";

import { useEffect, type RefObject } from "react";
import { gsap } from "gsap";

export function useMarqueeAnimation(sectionRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced) return;

    const cleanups: (() => void)[] = [];
    const ctx = gsap.context(() => {
      // 1. Horizontal ticker train
      const trains = Array.from(root.querySelectorAll<HTMLElement>("[train]"));
      trains.forEach((train) => {
        const clones = Array.from(train.children).map((element) => {
          const clone = element.cloneNode(true) as HTMLElement;
          clone.setAttribute("aria-hidden", "true");
          clone.inert = true;
          train.append(clone);
          return clone;
        });

        cleanups.push(() => clones.forEach((clone) => clone.remove()));

        const width = train.scrollWidth / 2;
        if (!width) return;

        const right = train.getAttribute("train") === "right";
        const tween = gsap.fromTo(
          train,
          { x: right ? -width : 0 },
          { x: right ? 0 : -width, duration: 40, ease: "none", repeat: -1 },
        );

        const container = train.parentElement || train;
        const pause = () => tween.pause();
        const resume = () => tween.resume();

        container.addEventListener("mouseenter", pause);
        container.addEventListener("mouseleave", resume);

        cleanups.push(() => {
          container.removeEventListener("mouseenter", pause);
          container.removeEventListener("mouseleave", resume);
        });
      });

      // 2. Vertical image floating loop
      const loopImages = Array.from(
        root.querySelectorAll<HTMLElement>('[image-loop="image"]'),
      );
      loopImages.forEach((image) => {
        const distance = gsap.utils.random(220, 340);
        const state = { y: gsap.utils.random(0, distance) };

        gsap.to(state, {
          y: `+=${distance}`,
          duration: gsap.utils.random(3, 5),
          repeat: -1,
          ease: "none",
          modifiers: { y: (value) => String(parseFloat(value) % distance) },
          onUpdate: () => {
            const progress = state.y / distance;
            const fade = Math.sin(progress * Math.PI);
            gsap.set(image, {
              y: distance / 2 - state.y,
              opacity: fade,
              scale: 0.75 + fade * 0.25,
            });
          },
        });
      });
    }, root);

    return () => {
      cleanups.reverse().forEach((fn) => fn());
      ctx.revert();
    };
  }, [sectionRef]);
}
