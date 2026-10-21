"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.config({ nullTargetWarn: false });
    const preference = matchMedia("(prefers-reduced-motion: reduce)");

    const lenis = new Lenis({
      autoRaf: false,
      lerp: 0.12,
      smoothWheel: !preference.matches,
      syncTouch: false,
      wheelMultiplier: 1.2,
      touchMultiplier: 1.5,
    });

    // GSAP ticker gives time in SECONDS → Lenis.raf() needs MILLISECONDS
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    // Keep ScrollTrigger in sync with Lenis scroll position
    lenis.on("scroll", ScrollTrigger.update);

    // Resize handler — recalculate scroll positions on viewport change
    const resize = () => {
      lenis.resize();
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", resize, { passive: true });

    // Recalculate all scroll trigger positions after Lenis takes over
    ScrollTrigger.refresh();

    const changePreference = () => {
      lenis.options.smoothWheel = !preference.matches;
    };
    const anchor = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      )
        return;
      const link = (event.target as Element).closest<HTMLAnchorElement>(
        "a[href]",
      );
      if (!link || link.target === "_blank" || link.hasAttribute("download"))
        return;
      const url = new URL(link.href, location.href);
      if (
        url.origin !== location.origin ||
        url.pathname !== location.pathname ||
        !url.hash
      )
        return;
      const target = document.getElementById(
        decodeURIComponent(url.hash.slice(1)),
      );
      if (!target) return;
      event.preventDefault();
      lenis.scrollTo(target, {
        offset: -90,
        duration: 1.2,
        immediate: preference.matches,
      });
      history.replaceState(null, "", url.hash);
    };
    document.addEventListener("click", anchor);
    preference.addEventListener("change", changePreference);
    return () => {
      document.removeEventListener("click", anchor);
      preference.removeEventListener("change", changePreference);
      window.removeEventListener("resize", resize);
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);
  return children;
}
