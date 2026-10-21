"use client";
import { useEffect, useRef, useState } from "react";

import { siteConfig } from "@/data/siteConfig";
import { reducedMotion, type ContainerProps } from "./shared";
export function BackgroundVideo({ children, ...props }: ContainerProps) {
  const root = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    const video = root.current?.querySelector("video");
    if (!video) return;
    video.muted = true;
    video.playsInline = true;
    const sync = () => setPaused(video.paused);
    video.addEventListener("play", sync);
    video.addEventListener("pause", sync);
    if (reducedMotion()) {
      video.pause();
      setPaused(true);
    } else if (video.autoplay) void video.play().catch(() => setPaused(true));
    return () => {
      video.removeEventListener("play", sync);
      video.removeEventListener("pause", sync);
      video.pause();
    };
  }, []);
  return (
    <div
      {...props}
      ref={root}
      data-paused={paused}
      onClick={(event) => {
        const button = (event.target as Element).closest("button");
        if (!button) return;
        const video = root.current?.querySelector("video");
        if (!video) return;
        if (video.paused) void video.play().catch(() => {});
        else video.pause();
      }}
    >
      {children}
    </div>
  );
}
