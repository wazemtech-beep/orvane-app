"use client";

import { useEffect, type RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useReferenceAnimations } from "./useReferenceAnimations";

gsap.registerPlugin(ScrollTrigger, SplitText);

export function useRevealAnimation(
  containerRef: RefObject<HTMLElement | null>,
) {
  useReferenceAnimations(containerRef);
  useEffect(() => {
    const root = containerRef ? containerRef.current : document.body;
    if (!root) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced) return;

    const splits: SplitText[] = [];
    const cleanups: (() => void)[] = [];

    const chars = (element: HTMLElement) => {
      const split = SplitText.create(element, {
        type: "words,chars",
        aria: "auto",
      });
      splits.push(split);
      return split.chars;
    };

    const ctx = gsap.context(() => {
      // 1. Text reveals: title-top appearance with blur and stagger
      const titles = Array.from(
        root.querySelectorAll<HTMLElement>('[title-top="apearance"]'),
      );
      titles.forEach((title) => {
        gsap.fromTo(
          chars(title),
          { opacity: 0, filter: "blur(16px)", y: 20 },
          {
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
            duration: 0.5,
            stagger: 0.02,
            ease: "power3.out",
            scrollTrigger: { trigger: title, start: "top 85%", once: true },
          },
        );
      });

      // 2. Text reveals: top fade-in
      const topFades = Array.from(
        root.querySelectorAll<HTMLElement>('[top="fade-in"]'),
      );
      if (topFades.length) {
        gsap.fromTo(
          topFades,
          { opacity: 0, y: 15 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: topFades[0],
              start: "top 85%",
              once: true,
            },
          },
        );
      }

      // 3. Scroll fade-up reveals
      const fadeUps = Array.from(
        root.querySelectorAll<HTMLElement>('[scroll="fade-up"]'),
      );
      fadeUps.forEach((element, index) => {
        gsap.fromTo(
          element,
          { opacity: 0, y: 50, filter: "blur(16px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1,
            delay: index * 0.08,
            ease: "expo.out",
            scrollTrigger: { trigger: element, start: "top 80%", once: true },
          },
        );
      });

      // 4. Image reveals & parallax
      const imageWrappers = Array.from(
        root.querySelectorAll<HTMLElement>(".rt-image-wrapper"),
      );
      imageWrappers.forEach((wrapper) => {
        const image = wrapper.querySelector<HTMLElement>(".rt-image");
        if (!image) return;

        gsap.fromTo(
          image,
          {
            scale: 1.2,
            filter: "blur(18px)",
            clipPath:
              "inset(45% round var(--_sizes---border-radius--border-radius-v1))",
          },
          {
            scale: 1,
            filter: "blur(0px)",
            clipPath:
              "inset(0% round var(--_sizes---border-radius--border-radius-v1))",
            duration: 1.4,
            ease: "expo.out",
            scrollTrigger: { trigger: wrapper, start: "top 60%", once: true },
          },
        );

        gsap.fromTo(
          image,
          { yPercent: -8 },
          {
            yPercent: 8,
            ease: "none",
            scrollTrigger: {
              trigger: wrapper,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.5,
            },
          },
        );
      });

      // 5. Flip entry 3D cards
      const flipEntries = Array.from(
        root.querySelectorAll<HTMLElement>("[flip-entry]"),
      );
      flipEntries.forEach((element, index) => {
        gsap.fromTo(
          element,
          {
            rotationY: index % 2 ? -90 : 90,
            rotationX: 4,
            scale: 0.94,
            opacity: 0,
            transformPerspective: 1400,
          },
          {
            rotationY: 0,
            rotationX: 0,
            scale: 1,
            opacity: 1,
            duration: 1.15,
            delay: index * 0.14,
            ease: "expo.out",
            scrollTrigger: {
              trigger: element.parentElement || element,
              start: "top 82%",
              once: true,
            },
          },
        );
      });

      // 6. Numeric counters
      const counters = Array.from(
        root.querySelectorAll<HTMLElement>("[data-counter]"),
      );
      counters.forEach((element) => {
        const original = element.textContent;
        const text =
          element.getAttribute("data-counter") || element.textContent || "0";
        const suffix = text.replace(/[0-9.,]/g, "");
        const rawNum = parseFloat(text.replaceAll(",", "")) || 0;
        const state = { value: 0 };

        gsap.to(state, {
          value: rawNum,
          duration: 2,
          ease: "power1.out",
          scrollTrigger: { trigger: element, start: "top 85%", once: true },
          onUpdate: () => {
            element.textContent =
              Math.floor(state.value).toLocaleString() + suffix;
          },
        });

        cleanups.push(() => {
          element.textContent = original;
        });
      });
    }, root);

    return () => {
      cleanups.reverse().forEach((fn) => fn());
      ctx.revert();
      splits.forEach((split) => split.revert());
    };
  }, [containerRef]);
}
