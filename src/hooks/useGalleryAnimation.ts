"use client";

import { useEffect, type RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

export function useGalleryAnimation(sectionRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced) return;

    const splits: SplitText[] = [];
    const chars = (element: HTMLElement) => {
      const split = SplitText.create(element, {
        type: "words,chars",
        aria: "auto",
      });
      splits.push(split);
      return split.chars;
    };

    const ctx = gsap.context(() => {
      const wrappers = root.hasAttribute("gallery")
        ? [root]
        : Array.from(root.querySelectorAll<HTMLElement>('[gallery="wrapper"]'));

      wrappers.forEach((wrapper) => {
        const images = wrapper.querySelectorAll("[gallery-image]");
        const titles =
          wrapper.querySelectorAll<HTMLElement>('[gallery="title"]');

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: wrapper,
            start: "top bottom",
            end: "bottom 30%",
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });

        if (images.length) {
          tl.fromTo(
            images,
            { clipPath: "inset(100% 0% 0% 0%)", scale: 1.08 },
            {
              clipPath: "inset(0%)",
              scale: 1,
              duration: 1,
              stagger: 0.16,
              ease: "expo.inOut",
            },
          );
        }

        titles.forEach((title) => {
          tl.fromTo(
            chars(title),
            { yPercent: 110, opacity: 0 },
            {
              yPercent: 0,
              opacity: 1,
              duration: 0.7,
              stagger: 0.035,
              ease: "expo.out",
            },
            "-=0.55",
          );
        });
      });
    }, root);

    return () => {
      ctx.revert();
      splits.forEach((split) => split.revert());
    };
  }, [sectionRef]);
}
