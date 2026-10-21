"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AccordionAnswerProps {
  id: string;
  open: boolean;
  className?: string;
  children: ReactNode;
}

export default function AccordionAnswer({
  id,
  open,
  className,
  children,
}: AccordionAnswerProps) {
  const answerRef = useRef<HTMLDivElement>(null);
  const mounted = useRef(false);

  useLayoutEffect(() => {
    const answer = answerRef.current;
    if (!answer) return;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const tween = gsap.to(answer, {
      height: open ? "auto" : 0,
      opacity: open ? 1 : 0,
      duration: !mounted.current || reduced ? 0 : 0.4,
      ease: "power2.out",
      overwrite: true,
      onComplete: () => ScrollTrigger.refresh(),
    });
    mounted.current = true;
    return () => {
      tween.kill();
    };
  }, [open]);

  return (
    <div
      id={id}
      ref={answerRef}
      className={className}
      aria-hidden={!open}
      inert={!open}
      style={{ height: 0, opacity: 0, overflow: "hidden" }}
    >
      {children}
    </div>
  );
}
