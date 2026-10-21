"use client";

import { useEffect, type RefObject } from "react";
import { gsap } from "gsap";

export function useShowcaseSlider(sectionRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const time = (value: number) => (reduced ? 0 : value);
    const cleanups: (() => void)[] = [];

    const ctx = gsap.context(() => {
      const trains = Array.from(
        root.querySelectorAll<HTMLElement>(".rt-design-v1-slider-train"),
      );

      trains.forEach((train) => {
        const original = Array.from(
          train.querySelectorAll<HTMLElement>(".rt-design-v1-slider-block"),
        );
        const viewport = train.parentElement;
        if (!original.length || !viewport) return;

        const clones: HTMLElement[] = [];
        original
          .slice()
          .reverse()
          .forEach((el) => {
            const clone = el.cloneNode(true) as HTMLElement;
            train.prepend(clone);
            clones.push(clone);
          });
        original.forEach((el) => {
          const clone = el.cloneNode(true) as HTMLElement;
          train.append(clone);
          clones.push(clone);
        });

        cleanups.push(() => clones.forEach((clone) => clone.remove()));

        const slides = Array.from(
          train.querySelectorAll<HTMLElement>(".rt-design-v1-slider-block"),
        );
        let current = original.length;
        let busy = false;
        let paused = false;

        const position = (index: number) =>
          viewport.clientWidth / 2 -
          slides[index].offsetLeft -
          slides[index].offsetWidth / 2;

        const states = (animate: boolean) =>
          slides.forEach((slide, i) => {
            slide.inert = i !== current;
            gsap.to(slide, {
              scale: i === current ? 1 : 0.72,
              opacity: i === current ? 1 : 0.4,
              duration: animate ? time(0.6) : 0,
              overwrite: true,
            });
            gsap.to(slide.querySelectorAll(".rt-design-v1-slider-content"), {
              opacity: i === current ? 1 : 0,
              duration: animate ? time(0.45) : 0,
              overwrite: true,
            });
          });

        const go = (direction: number) => {
          if (busy) return;
          busy = true;
          current += direction;
          states(true);

          gsap.to(train, {
            x: position(current),
            duration: time(0.8),
            ease: "power3.inOut",
            onComplete: () => {
              if (current >= original.length * 2) current = original.length;
              if (current < original.length) current = original.length * 2 - 1;
              gsap.set(train, { x: position(current) });
              states(false);
              busy = false;
            },
          });
        };

        gsap.set(train, { x: position(current), opacity: 1 });
        states(false);

        const onResize = () => {
          gsap.set(train, { x: position(current) });
        };
        const onMouseEnter = () => {
          paused = true;
        };
        const onMouseLeave = () => {
          paused = false;
        };

        window.addEventListener("resize", onResize);
        viewport.addEventListener("mouseenter", onMouseEnter);
        viewport.addEventListener("mouseleave", onMouseLeave);

        let touchStartX = 0;
        const onTouchStart = (e: TouchEvent) => {
          touchStartX = e.touches[0].clientX;
        };
        const onTouchEnd = (e: TouchEvent) => {
          const delta = e.changedTouches[0].clientX - touchStartX;
          if (Math.abs(delta) > 45) go(delta < 0 ? 1 : -1);
        };

        viewport.addEventListener("touchstart", onTouchStart, {
          passive: true,
        });
        viewport.addEventListener("touchend", onTouchEnd, { passive: true });

        viewport.tabIndex = 0;
        viewport.setAttribute("aria-label", "Design showcase");

        const onKeyDown = (e: KeyboardEvent) => {
          if (["ArrowLeft", "ArrowRight"].includes(e.key)) {
            e.preventDefault();
            go(e.key === "ArrowRight" ? 1 : -1);
          }
        };
        viewport.addEventListener("keydown", onKeyDown);

        cleanups.push(() => {
          window.removeEventListener("resize", onResize);
          viewport.removeEventListener("mouseenter", onMouseEnter);
          viewport.removeEventListener("mouseleave", onMouseLeave);
          viewport.removeEventListener("touchstart", onTouchStart);
          viewport.removeEventListener("touchend", onTouchEnd);
          viewport.removeEventListener("keydown", onKeyDown);
        });

        if (!reduced) {
          const timer = window.setInterval(() => {
            if (!paused && !document.hidden) go(1);
          }, 3000);
          cleanups.push(() => clearInterval(timer));
        }
      });
      // Scroll-driven heading parallax: text-one and text-two slide horizontally in opposite directions
      const headingWrapper = root.matches('[design-slider-one="wrapper"]')
        ? root
        : root.querySelector<HTMLElement>('[design-slider-one="wrapper"]');
      if (headingWrapper) {
        const textOne = headingWrapper.querySelector<HTMLElement>(
          '[design-slider-one="text-one"]',
        );
        const textTwo = headingWrapper.querySelector<HTMLElement>(
          '[design-slider-one="text-two"]',
        );

        if (textOne && textTwo && !reduced) {
          gsap
            .timeline({
              scrollTrigger: {
                trigger: headingWrapper,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.8,
              },
            })
            .fromTo(
              textOne,
              { xPercent: 12 },
              { xPercent: -12, ease: "none" },
              0,
            )
            .fromTo(
              textTwo,
              { xPercent: -12 },
              { xPercent: 12, ease: "none" },
              0,
            );
        }
      }
    }, root);

    return () => {
      cleanups.reverse().forEach((fn) => fn());
      ctx.revert();
    };
  }, [sectionRef]);
}
