"use client";

import { useEffect, type RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const select = (root: HTMLElement, selector: string) => [
  ...(root.matches(selector) ? [root] : []),
  ...Array.from(root.querySelectorAll<HTMLElement>(selector)),
];

function scrollTimeline(
  trigger: HTMLElement,
  start: string,
  end: string,
  minimumDuration = 1,
) {
  const timeline = gsap.timeline({
    defaults: { ease: "none" },
    scrollTrigger: {
      trigger,
      start: `clamp(${start})`,
      end: `clamp(${end})`,
      scrub: 0.8,
    },
  });
  // Short tracks must retain the reference timeline's full scroll duration.
  timeline.to({}, { duration: minimumDuration }, 0);
  return timeline;
}

export function useReferenceAnimations(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    let disposed = false;
    let context: gsap.Context | undefined;
    let width = window.innerWidth;
    let resizeTimer: ReturnType<typeof setTimeout>;

    const mount = () => {
      if (disposed) return;
      context?.revert();
      context = gsap.context(() => {
        const media = gsap.matchMedia();
        media.add(
          {
            desktop: "(min-width: 992px)",
            wide: "(min-width: 768px)",
            motion: "(prefers-reduced-motion: no-preference)",
          },
          (mediaContext) => {
            if (!mediaContext.conditions?.motion) return;
            const desktop = Boolean(mediaContext.conditions.desktop);
            const wide = Boolean(mediaContext.conditions.wide);
            const splits: SplitText[] = [];
            const listeners: (() => void)[] = [];
            const split = (
              element: HTMLElement,
              type: "chars" | "lines",
              mask = false,
            ) => {
              const instance = SplitText.create(element, {
                type,
                ...(mask ? { mask: "lines" as const } : {}),
                aria: "auto",
              });
              splits.push(instance);
              return type === "chars" ? instance.chars : instance.lines;
            };
            const hover = (
              element: HTMLElement,
              timeline: gsap.core.Timeline,
            ) => {
              const enter = () =>
                mediaContext.add(() => {
                  timeline.play();
                });
              const leave = (event: Event) => {
                if (
                  event.type === "focusout" &&
                  element.contains(
                    (event as FocusEvent).relatedTarget as Node | null,
                  )
                )
                  return;
                mediaContext.add(() => {
                  timeline.reverse();
                });
              };
              element.addEventListener("mouseenter", enter);
              element.addEventListener("mouseleave", leave);
              element.addEventListener("focusin", enter);
              element.addEventListener("focusout", leave);
              listeners.push(() => {
                element.removeEventListener("mouseenter", enter);
                element.removeEventListener("mouseleave", leave);
                element.removeEventListener("focusin", enter);
                element.removeEventListener("focusout", leave);
              });
            };

            // Original heading and masked paragraph appearances.
            for (const title of select(root, '[title="apearance"]')) {
              gsap.fromTo(
                split(title, "chars"),
                { rotationX: 60, opacity: 0 },
                {
                  rotationX: 0,
                  opacity: 1,
                  duration: 0.24,
                  stagger: 0.02,
                  ease: "none",
                  scrollTrigger: {
                    trigger: title,
                    start: "clamp(top 70%)",
                    end: "clamp(bottom top)",
                    once: true,
                  },
                },
              );
            }
            for (const text of select(
              root,
              '[text="apearance"], [text-scrub="apear"]',
            )) {
              const lines = split(text, "lines", true);
              if (text.matches('[text-scrub="apear"]')) {
                scrollTimeline(text, "top 80%", "bottom top").fromTo(
                  lines,
                  { opacity: 0.3, yPercent: 70 },
                  { opacity: 1, yPercent: 0, duration: 0.3, stagger: 0.05 },
                  0,
                );
              } else {
                gsap.fromTo(
                  lines,
                  { opacity: 0, yPercent: 70 },
                  {
                    opacity: 1,
                    yPercent: 0,
                    duration: 0.3,
                    stagger: 0.05,
                    ease: "none",
                    scrollTrigger: {
                      trigger: text,
                      start: "clamp(top 70%)",
                      end: "clamp(bottom top)",
                      once: true,
                    },
                  },
                );
              }
            }
            for (const element of select(root, '[scroll="scale-up"]')) {
              gsap.fromTo(
                element,
                { scale: 0.9, opacity: 0 },
                {
                  scale: 1,
                  opacity: 1,
                  duration: 1,
                  ease: "none",
                  scrollTrigger: {
                    trigger: element,
                    start: "clamp(top bottom)",
                    end: "clamp(bottom 30%)",
                    once: true,
                  },
                },
              );
            }
            for (const tag of select(root, '[scroll-tag="fade-in"]')) {
              gsap.fromTo(
                tag,
                { opacity: 0 },
                {
                  opacity: 1,
                  duration: 0.5,
                  ease: "power1.out",
                  scrollTrigger: {
                    trigger: tag,
                    start: "clamp(top 70%)",
                    once: true,
                  },
                },
              );
            }

            if (wide)
              for (const border of select(root, ".rt-border-horizental")) {
                gsap.fromTo(
                  border,
                  { scaleX: 0, transformOrigin: "0% 50%" },
                  {
                    scaleX: 1,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                      trigger: border,
                      start: "top 80%",
                      once: true,
                    },
                  },
                );
              }
            for (const line of select(
              root,
              ".rt-vertical-line, .rt-service-border-fill",
            )) {
              const horizontal = line.matches(".rt-service-border-fill");
              scrollTimeline(line, "top bottom", "bottom 60%").fromTo(
                line,
                horizontal
                  ? { scaleX: 0, opacity: 0.3, transformOrigin: "0% 50%" }
                  : { scaleY: 0 },
                horizontal
                  ? { scaleX: 1, opacity: 1, duration: 1 }
                  : { scaleY: 1, duration: 1 },
                0,
              );
            }
            for (const footer of select(root, '[footer="large-text"]')) {
              scrollTimeline(footer, "top bottom", "bottom top").fromTo(
                split(footer, "chars"),
                { yPercent: 30 },
                {
                  yPercent: 0,
                  duration: 0.3,
                  stagger: { each: 0.07, from: "center" },
                },
                0,
              );
            }

            for (const button of select(root, '[button-wrap="main"]')) {
              const timeline = gsap.timeline({ paused: true });
              const overlay = button.querySelector(".rt-navbar-btn-v1-overlay");
              const hoverIcon = button.querySelector(
                ".rt-navbar-btn-v1-icon.rt-hover",
              );
              const icon = button.querySelector(
                ".rt-navbar-btn-v1-icon:not(.rt-hover)",
              );
              const letters = button.querySelectorAll(
                '[button-text="letters"], [button-text="letters-hover"]',
              );
              if (overlay)
                timeline.fromTo(
                  overlay,
                  { xPercent: -100 },
                  { xPercent: 0, duration: 0.3, ease: "none" },
                  0,
                );
              if (hoverIcon)
                timeline.fromTo(
                  hoverIcon,
                  { x: 0, xPercent: -100 },
                  { x: 0, xPercent: 0, duration: 0.29, ease: "power1.out" },
                  0.05,
                );
              if (icon)
                timeline.fromTo(
                  icon,
                  { xPercent: 0 },
                  { xPercent: 100, duration: 0.29, ease: "power1.out" },
                  0.05,
                );
              if (letters.length)
                timeline.fromTo(
                  letters,
                  { yPercent: 0 },
                  { yPercent: -100, duration: 0.29, ease: "power1.out" },
                  0.05,
                );
              hover(button, timeline);
            }
            for (const card of select(
              root,
              '[scale="portfolio"], .rt-blog-listing-card-v1, .rt-portfolio-list-block',
            )) {
              const timeline = gsap.timeline({ paused: true });
              const image = card.querySelector(
                card.matches(".rt-blog-listing-card-v1")
                  ? '[blog-image="effect"]'
                  : ".rt-portfolio-image",
              );
              if (
                image &&
                card.matches('[scale="portfolio"], .rt-blog-listing-card-v1')
              )
                timeline.to(
                  image,
                  {
                    scale: card.matches(".rt-blog-listing-card-v1") ? 1.2 : 1.1,
                    ...(card.matches(".rt-blog-listing-card-v1")
                      ? { rotation: 5 }
                      : {}),
                    duration: 0.5,
                    ease: card.matches(".rt-blog-listing-card-v1")
                      ? "power1.out"
                      : "none",
                  },
                  0,
                );
              const lens = card.querySelector(".rt-portfolio-lens-overlay");
              if (lens)
                timeline.fromTo(
                  lens,
                  { opacity: 0 },
                  { opacity: 1, duration: 0.5, ease: "power1.out" },
                  0,
                );
              hover(card, timeline);
            }

            for (const element of select(root, '[up-down="movement"]')) {
              gsap
                .timeline({ repeat: -1 })
                .fromTo(
                  element,
                  { yPercent: 5 },
                  { yPercent: 0, duration: 2, ease: "power1.out" },
                  0,
                )
                .to(
                  element,
                  { yPercent: 5, duration: 2, ease: "power1.out" },
                  1.98,
                );
            }
            for (const line of select(root, ".rt-hero-v1-scroll-line")) {
              gsap
                .timeline({ repeat: -1, defaults: { ease: "none" } })
                .fromTo(line, { yPercent: 0 }, { yPercent: 100, duration: 1 })
                .fromTo(line, { yPercent: -100 }, { yPercent: 0, duration: 1 });
            }

            if (wide)
              for (const showcase of select(
                root,
                ".rt-showcase-v1.rt-z-index",
              )) {
                const home = showcase.closest<HTMLElement>(
                  ".rt-home-top-wrapper",
                );
                if (!home) continue;
                const timeline = scrollTimeline(
                  showcase,
                  "top bottom",
                  "bottom bottom",
                );
                const title = home.querySelector(
                  '[hero-one="title-main-wrap"]',
                );
                const hero = home.querySelector('[hero-one="main-wrapper"]');
                const image = showcase.querySelector(
                  '[showcase-one="main-image"]',
                );
                const loop = showcase.querySelector('[image-loop="wrap"]');
                if (title)
                  timeline.fromTo(
                    title,
                    { opacity: 1 },
                    { opacity: 0, duration: 0.1 },
                    0,
                  );
                if (hero)
                  timeline
                    .fromTo(
                      hero,
                      { scale: 1 },
                      { scale: 0.4, duration: 0.23 },
                      0.04,
                    )
                    .fromTo(
                      hero,
                      { yPercent: 0 },
                      { yPercent: 20, duration: 0.28 },
                      0.13,
                    );
                if (image)
                  timeline.fromTo(
                    image,
                    { opacity: 0, yPercent: -200, scale: 0 },
                    { opacity: 1, yPercent: 0, scale: 1, duration: 0.36 },
                    0.18,
                  );
                for (const content of select(
                  showcase,
                  '[showcase-one="content"]',
                ))
                  timeline.fromTo(
                    split(content, "lines"),
                    { opacity: 0, yPercent: 50 },
                    { opacity: 1, yPercent: 0, duration: 0.42, stagger: 0.02 },
                    0.3,
                  );
                if (loop)
                  timeline.fromTo(
                    loop,
                    { opacity: 0, scale: 0 },
                    { opacity: 1, scale: 1, duration: 0.47 },
                    0.3,
                  );
              }
            for (const wrap of select(root, '[about-card="counter"]')) {
              const timeline = scrollTimeline(wrap, "top 60%", "bottom 90%");
              const columns = [
                {
                  column: 3,
                  yPercent: 30,
                  opacity: 0.3,
                  position: 0,
                  divider: 0.71,
                },
                {
                  column: 2,
                  yPercent: 50,
                  opacity: 0.2,
                  position: 0.06,
                  divider: 0.76,
                },
                {
                  column: 1,
                  yPercent: 70,
                  opacity: 0.05,
                  position: 0.09,
                  divider: 0.79,
                },
              ];
              for (const pose of columns) {
                const column = wrap.querySelector(
                  `.rt-milestone-card-col${pose.column}-v1`,
                );
                const divider = wrap.querySelector(
                  `.rt-milestone-divider-inner-v${4 - pose.column}`,
                );
                if (column)
                  timeline.fromTo(
                    column,
                    { yPercent: pose.yPercent, opacity: pose.opacity },
                    { yPercent: 0, opacity: 1, duration: 1 },
                    pose.position,
                  );
                if (divider)
                  timeline.fromTo(
                    divider,
                    { scale: 0 },
                    { scale: 1, duration: 0.29 },
                    pose.divider,
                  );
              }
            }
            if (wide)
              for (const wrap of select(root, '[service-one="wrapper"]')) {
                const timeline = scrollTimeline(wrap, "top 50%", "bottom top");
                const one = wrap.querySelector('[service-one="block-one"]');
                const two = wrap.querySelector('[service-one="block-two"]');
                if (one)
                  timeline.fromTo(
                    one,
                    { width: "50%" },
                    { width: "55%", duration: 0.15 },
                    0.03,
                  );
                if (two)
                  timeline.fromTo(
                    two,
                    { width: "50%" },
                    { width: "40%", duration: 0.15 },
                    0.03,
                  );
                ["v1", "v2", "v3"].forEach((variant, index) => {
                  const image = wrap.querySelector(
                    `.rt-service-v1-image-apear-${variant}`,
                  );
                  if (image)
                    timeline.fromTo(
                      image,
                      { opacity: 0 },
                      { opacity: 1, duration: 0.05 },
                      0.25 + index * 0.08,
                    );
                });
              }

            for (const map of select(root, ".rt-map-v1")) {
              const pulses = map.querySelectorAll('[map-pointer="pop-up"]');
              if (pulses.length)
                gsap
                  .timeline({ repeat: -1 })
                  .fromTo(
                    pulses,
                    { opacity: 0.6, scale: 0.6 },
                    { opacity: 1, scale: 1, duration: 1.5, ease: "power1.out" },
                    0,
                  )
                  .to(
                    pulses,
                    {
                      opacity: 0.6,
                      scale: 0.6,
                      duration: 1.5,
                      ease: "power1.out",
                    },
                    1.24,
                  );
              const timeline = gsap.timeline({
                repeat: -1,
                defaults: { ease: "none" },
              });
              ["one", "two", "three", "four", "five"].forEach((key, index) => {
                const pointer = map.querySelector(`[map-pointer="${key}"]`);
                if (!pointer) return;
                const start = [0, 1.63, 3.26, 4.91, 6.54][index];
                const end = [1.63, 3.26, 4.91, 6.54, 8.17][index];
                timeline
                  .fromTo(
                    pointer,
                    { opacity: 0, scale: 0, yPercent: 50 },
                    { opacity: 1, scale: 1, yPercent: 0, duration: 1.5 },
                    start,
                  )
                  .to(
                    pointer,
                    { opacity: 0, scale: 0, yPercent: 50, duration: 1.5 },
                    end,
                  );
              });
              const first = map.querySelector('[map-pointer="one"]');
              if (first)
                timeline.fromTo(
                  first,
                  { opacity: 0, scale: 0, yPercent: 50 },
                  {
                    opacity: 1,
                    scale: 1,
                    yPercent: 0,
                    duration: 1.52,
                    immediateRender: false,
                  },
                  8.51,
                );
            }

            if (desktop)
              for (const wrap of select(
                root,
                '[design-slider-one="wrapper"]',
              )) {
                const timeline = scrollTimeline(
                  wrap,
                  "top bottom",
                  "bottom 70%",
                );
                const one = wrap.querySelector(
                  '[design-slider-one="text-one"]',
                );
                const two = wrap.querySelector(
                  '[design-slider-one="text-two"]',
                );
                if (one)
                  timeline.fromTo(
                    one,
                    { xPercent: -50 },
                    { xPercent: 0, duration: 0.5 },
                    0,
                  );
                if (two)
                  timeline
                    .fromTo(
                      two,
                      { xPercent: 80 },
                      { xPercent: 0, duration: 0.5 },
                      0,
                    )
                    .to(two, { opacity: 0.3, duration: 0.25 }, 0.34);
              }
            if (desktop)
              for (const wrap of select(
                root,
                '[stage-cards-wrap="card-wrapper"]',
              )) {
                const timeline = scrollTimeline(
                  wrap,
                  "top 20%",
                  "bottom bottom",
                );
                const poses = [
                  { key: "one", xPercent: 159, rotation: -20 },
                  { key: "two", xPercent: 50, rotation: -12 },
                  { key: "three", xPercent: -59, rotation: -5 },
                  { key: "four", xPercent: -167, rotation: -1 },
                ];
                for (const pose of poses) {
                  const card = wrap.querySelector(
                    `[stage-card="${pose.key}-box"]`,
                  );
                  if (card)
                    timeline.fromTo(
                      card,
                      { xPercent: pose.xPercent, rotation: pose.rotation },
                      { xPercent: 0, rotation: 0, duration: 1 },
                      0,
                    );
                }
              }
            for (const wrap of select(root, '[achivement-one="wrap"]')) {
              const timeline = scrollTimeline(wrap, "top 60%", "bottom bottom");
              const image = wrap.querySelector('[achivement-one="main-image"]');
              if (image)
                timeline.fromTo(
                  image,
                  { scale: 1.2 },
                  { scale: 1, duration: 2.51 },
                  0,
                );
              ["one", "two", "three"].forEach((key, index) => {
                const card = wrap.querySelector(
                  `[achivement-one="card-${key}"]`,
                );
                if (card)
                  timeline.fromTo(
                    card,
                    { opacity: 0, scale: 0.7, yPercent: 10 },
                    { opacity: 1, scale: 1, yPercent: 0, duration: 1 },
                    index,
                  );
              });
            }
            if (wide)
              for (const wrap of select(root, '[pricing-card="main-wrap"]')) {
                const timeline = scrollTimeline(
                  wrap,
                  "top bottom",
                  "80% bottom",
                );
                const one = wrap.querySelector('[pricing-card="one-main"]');
                const two = wrap.querySelector('[pricing-card="two-main"]');
                if (one)
                  timeline.fromTo(
                    one,
                    { xPercent: 60 },
                    { xPercent: 0, duration: 1 },
                    0,
                  );
                if (two)
                  timeline.fromTo(
                    two,
                    { xPercent: -60 },
                    { xPercent: 0, duration: 1 },
                    0,
                  );
              }
            for (const wrap of select(root, ".rt-innovation-v1")) {
              const timeline = scrollTimeline(wrap, "top 50%", "bottom bottom");
              const image = wrap.querySelector('[innovation-one="image-wrap"]');
              const marquee = wrap.querySelector(
                '[innovation-one="marque-wrap"]',
              );
              const content = wrap.querySelector(
                '[innovation-one="content-wrap"]',
              );
              if (image)
                timeline.fromTo(
                  image,
                  { opacity: 0.8, scale: 1.3 },
                  { opacity: 1, scale: 1, duration: 2.34, ease: "power1.out" },
                  0,
                );
              if (marquee)
                timeline.fromTo(
                  marquee,
                  { opacity: 0, yPercent: 50 },
                  { opacity: 1, yPercent: 0, duration: 1 },
                  0.61,
                );
              if (content)
                timeline.fromTo(
                  content,
                  { opacity: 0, yPercent: 50 },
                  { opacity: 1, yPercent: 0, duration: 1 },
                  1.34,
                );
            }
            for (const card of select(root, '[service-two="card-list"]')) {
              const timeline = scrollTimeline(
                card,
                "top bottom",
                "bottom 65%",
              ).fromTo(card, { opacity: 0 }, { opacity: 1, duration: 1 }, 0);
              const image = card.querySelector(".rt-service-v2-image");
              if (image)
                timeline.fromTo(
                  image,
                  { scale: 0.7, transformOrigin: "100% 50%" },
                  { scale: 1, duration: 1 },
                  0,
                );
            }
            for (const feature of select(
              root,
              ".rt-feature-v1.rt-position-relative",
            )) {
              const timeline = scrollTimeline(feature, "top 70%", "bottom top");
              timeline.fromTo(
                feature,
                { "--_animation-variables---curtain-effect-filter": "100%" },
                {
                  "--_animation-variables---curtain-effect-filter": "10%",
                  duration: 0.29,
                },
                0.22,
              );
              const cards = feature.querySelectorAll(
                '[features-one="card-block"]',
              );
              if (cards.length)
                timeline.fromTo(
                  cards,
                  { opacity: 0, scale: 1.2 },
                  { opacity: 1, scale: 1, duration: 0.26 },
                  0.23,
                );
            }
            for (const hero of select(root, ".rt-hero-v4")) {
              const timeline = scrollTimeline(hero, "top top", "50% top");
              timeline.fromTo(
                hero,
                { "--_animation-variables---service-hero-inset": "50%" },
                {
                  "--_animation-variables---service-hero-inset": "0%",
                  duration: 0.92,
                },
                0,
              );
              const overlay = hero.querySelector(".rt-hero-v4-image-overlay");
              if (overlay)
                timeline.fromTo(
                  overlay,
                  { opacity: 0 },
                  { opacity: 1, duration: 0.54 },
                  0.02,
                );
            }

            return () => {
              listeners.reverse().forEach((dispose) => dispose());
              splits.reverse().forEach((instance) => instance.revert());
            };
          },
        );
      }, root);
      ScrollTrigger.refresh();
    };
    const refresh = () => ScrollTrigger.refresh();
    const resize = () => {
      if (width === window.innerWidth) return;
      width = window.innerWidth;
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(mount, 150);
    };
    void document.fonts.ready.then(mount);
    root.addEventListener("load", refresh, true);
    window.addEventListener("resize", resize);
    return () => {
      disposed = true;
      clearTimeout(resizeTimer);
      root.removeEventListener("load", refresh, true);
      window.removeEventListener("resize", resize);
      context?.revert();
    };
  }, [ref]);
}
