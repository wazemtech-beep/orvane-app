"use client";

import {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  type SourceHTMLAttributes,
  type VideoHTMLAttributes,
} from "react";

export default function DeferredVideo({
  autoPlay,
  children,
  src,
  ...props
}: Omit<VideoHTMLAttributes<HTMLVideoElement>, "src"> & { src?: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const preference = matchMedia("(prefers-reduced-motion: reduce)");
    const videoSource = (value: string) => {
      const mobileCloudVideo =
        value.startsWith("https://res.cloudinary.com/") &&
        value.includes("/video/upload/") &&
        matchMedia("(max-width: 767px)").matches;
      return mobileCloudVideo ? value.replace("w_1280", "w_720") : value;
    };
    let visible = false;
    let loaded = false;
    const sync = () => {
      if (visible && !document.hidden && autoPlay && !preference.matches) {
        void video.play().catch(() => {});
      } else if (!visible || document.hidden || preference.matches) {
        video.pause();
      }
    };
    const load = () => {
      if (loaded) return;
      loaded = true;
      if (src) video.src = videoSource(src);
      video.querySelectorAll<HTMLSourceElement>("source[data-src]").forEach((source) => {
        source.src = videoSource(source.dataset.src || "");
      });
      video.autoplay = Boolean(autoPlay && !preference.matches);
      video.load();
    };
    const observer = new IntersectionObserver(
      (entries) => {
        visible = entries[0].isIntersecting;
        if (visible) load();
        sync();
      },
      { rootMargin: "150px" },
    );
    observer.observe(video);
    document.addEventListener("visibilitychange", sync);
    preference.addEventListener("change", sync);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", sync);
      preference.removeEventListener("change", sync);
      video.pause();
    };
  }, [autoPlay, src]);

  return (
    <video {...props} ref={ref} preload="none" autoPlay={false} data-src={src}>
      {Children.map(children, (child) => {
        if (!isValidElement<SourceHTMLAttributes<HTMLSourceElement>>(child) || child.type !== "source") {
          return child;
        }
        const deferred: SourceHTMLAttributes<HTMLSourceElement> & { "data-src"?: string } = {
          src: undefined,
          "data-src": child.props.src,
        };
        return cloneElement(child, deferred);
      })}
    </video>
  );
}
