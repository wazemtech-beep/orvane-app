"use client";

import { useEffect, type RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

export function useHeroAnimation(sectionRef: RefObject<HTMLElement | null>) {
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
      // ----------------------------------------------------
      // VARIANT 1: Home Hero V1 ([hero-one="image-one"])
      // ----------------------------------------------------
      const hero = root.querySelector<HTMLElement>('[hero-one="image-one"]');
      if (hero) {
        const one = root.querySelector<HTMLElement>(
          '[hero-one-bottom="title-one"]',
        );
        const two = root.querySelector<HTMLElement>(
          '[hero-one-bottom="title-two"]',
        );
        const textWrap = root.querySelectorAll<HTMLElement>(
          '[hero-one-bottom="text-wrap"]',
        );
        const scrollBtn = root.querySelector<HTMLElement>(
          '[hero-one-scroll="trigger"]',
        );
        const scrollLine = root.querySelector<HTMLElement>(
          ".rt-hero-v1-scroll-line",
        );

        const isMobile = window.matchMedia("(max-width: 479px)").matches;
        const isTablet = window.matchMedia("(max-width: 991px)").matches;
        const imageBlur = isMobile ? "14px" : isTablet ? "18px" : "25px";
        const letterBlur = isMobile ? "10px" : "18px";
        const imageDuration = isMobile ? 1.8 : 2.6;
        const letterStagger = isMobile ? 0.05 : 0.08;

        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.fromTo(
          hero,
          { scale: 1.35, filter: `blur(${imageBlur})`, opacity: 0 },
          {
            scale: 1.05,
            filter: "blur(0px)",
            opacity: 1,
            duration: imageDuration,
            ease: "power2.out",
          },
          0,
        );

        if (one) {
          tl.fromTo(
            chars(one),
            { opacity: 0, filter: `blur(${letterBlur})`, y: 30 },
            {
              opacity: 1,
              filter: "blur(0px)",
              y: 0,
              duration: 1.4,
              stagger: { each: letterStagger, ease: "power1.in" },
              ease: "power3.out",
            },
            isMobile ? 0.5 : 1.3,
          );
        }

        if (two) {
          tl.fromTo(
            chars(two),
            { opacity: 0, filter: `blur(${letterBlur})`, y: 30 },
            {
              opacity: 1,
              filter: "blur(0px)",
              y: 0,
              duration: 1.4,
              stagger: { each: letterStagger, ease: "power1.in" },
              ease: "power3.out",
            },
            isMobile ? 1.3 : 2.2,
          );
        }

        if (textWrap.length) {
          tl.fromTo(
            textWrap,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
            "-=0.4",
          );
        }

        if (scrollBtn) {
          tl.fromTo(
            scrollBtn,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
            "-=0.3",
          );
        }

        // Ambient idle zoom on hero image
        tl.call(() => {
          gsap.to(hero, {
            scale: 1.15,
            duration: 8,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
          });
        });

        // Looping scroll indicator line
        if (scrollLine) {
          gsap.fromTo(
            scrollLine,
            { yPercent: -100 },
            { yPercent: 100, duration: 1.6, ease: "power1.inOut", repeat: -1 },
          );
        }
      }

      // ----------------------------------------------------
      // VARIANT 2: About Hero V2 ([about-hero="first-image"])
      // ----------------------------------------------------
      const aboutHeroImg1 = root.querySelector<HTMLElement>(
        '[about-hero="first-image"]',
      );
      if (aboutHeroImg1) {
        const aboutHeroImg2 = root.querySelector<HTMLElement>(
          '[about-hero="second-image"]',
        );
        const lines = root.querySelectorAll<HTMLElement>(
          ".rt-hero-v2-overlay-lines",
        );
        const card = root.querySelector<HTMLElement>(".rt-hero-v2-card");
        const textBlock = root.querySelector<HTMLElement>(
          '[about-hero="text-block"]',
        );
        const largeText = root.querySelector<HTMLElement>(
          '[about-hero="large-text"]',
        );

        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.fromTo(
          aboutHeroImg1,
          { opacity: 0, scale: 1.15, filter: "blur(20px)" },
          {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 1.6,
            ease: "power2.out",
          },
        );

        if (aboutHeroImg2) {
          tl.fromTo(
            aboutHeroImg2,
            { clipPath: "inset(100% 0% 0% 0%)", scale: 1.15 },
            {
              clipPath: "inset(0% 0% 0% 0%)",
              scale: 1,
              duration: 1.4,
              ease: "power4.out",
            },
            "-=0.7",
          );
        }

        if (lines.length) {
          tl.fromTo(
            lines,
            { scaleY: 0, transformOrigin: "top center" },
            { scaleY: 1, duration: 1.1, ease: "power3.inOut" },
            "-=0.4",
          );
        }

        if (card) {
          tl.fromTo(
            card,
            { opacity: 0, scale: 0.85, filter: "blur(18px)" },
            {
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
              duration: 1.1,
              ease: "power2.out",
            },
            "<",
          );
        }

        if (textBlock) {
          tl.fromTo(
            textBlock,
            { yPercent: 60, opacity: 0 },
            { yPercent: 0, opacity: 1, duration: 1, ease: "power3.out" },
            "-=0.5",
          );
        }

        if (largeText) {
          tl.fromTo(
            chars(largeText),
            { opacity: 0, scale: 1.6, filter: "blur(16px)" },
            {
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
              duration: 1.2,
              stagger: { each: 0.045, ease: "power1.in" },
              ease: "power3.out",
            },
            "-=0.6",
          );
        }

        tl.call(() => {
          gsap.to(aboutHeroImg1, {
            scale: 1.06,
            duration: 10,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
          });
          if (aboutHeroImg2)
            gsap.to(aboutHeroImg2, {
              scale: 1.05,
              duration: 12,
              ease: "sine.inOut",
              yoyo: true,
              repeat: -1,
            });
          if (card)
            gsap.to(card, {
              y: -8,
              duration: 3.5,
              ease: "sine.inOut",
              yoyo: true,
              repeat: -1,
            });
        });
      }

      // ----------------------------------------------------
      // VARIANT 3: Service Hero V4 ([hero-four="large-text"])
      // ----------------------------------------------------
      const heroFourLargeText = root.querySelector<HTMLElement>(
        '[hero-four="large-text"]',
      );
      if (heroFourLargeText) {
        const contentEls = root.querySelectorAll<HTMLElement>(
          '[hero-four="content"]',
        );
        const border = root.querySelector<HTMLElement>(".rt-hero-v4-border");
        const image = root.querySelector<HTMLElement>(".rt-hero-v4-image");

        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.fromTo(
          chars(heroFourLargeText),
          { opacity: 0, filter: "blur(16px)", y: 20 },
          {
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
            duration: 1.1,
            stagger: { each: 0.05, ease: "power1.in" },
            ease: "power3.out",
          },
        );

        if (contentEls.length) {
          tl.fromTo(
            contentEls,
            { opacity: 0, y: 12 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.1,
              ease: "power2.out",
            },
            "-=0.4",
          );
        }

        if (border) {
          tl.fromTo(
            border,
            { scaleX: 0, transformOrigin: "left center" },
            { scaleX: 1, duration: 1, ease: "power3.inOut" },
            "-=0.3",
          );
        }

        if (image) {
          tl.fromTo(
            image,
            { opacity: 0 },
            { opacity: 1, duration: 1, ease: "power2.out" },
            "<",
          );
        }
      }

      // ----------------------------------------------------
      // Universal top text reveals in heroes
      // ----------------------------------------------------
      const topTitles = root.querySelectorAll<HTMLElement>(
        '[title-top="apearance"]',
      );
      topTitles.forEach((title) => {
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
          },
        );
      });

      const topFades = root.querySelectorAll<HTMLElement>('[top="fade-in"]');
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
          },
        );
      }
    }, root);

    return () => {
      ctx.revert();
      splits.forEach((split) => split.revert());
    };
  }, [sectionRef]);
}
