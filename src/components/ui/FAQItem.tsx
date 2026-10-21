"use client";
import { useEffect, useId, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteConfig } from "@/data/siteConfig";
import { reducedMotion } from "./shared";
export interface FAQContent {
  number: string;
  question: string;
  answer: string;
}

export function FAQItem({
  item,
  className,
}: {
  item: FAQContent;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const answer = useRef<HTMLDivElement>(null);
  const id = useId();
  useEffect(() => {
    const tween = gsap.to(answer.current, {
      height: open ? "auto" : 0,
      opacity: open ? 1 : 0,
      duration: reducedMotion() ? 0 : 0.5,
      ease: "power1.inOut",
      overwrite: true,
      onComplete: () => ScrollTrigger.refresh(),
    });
    return () => {
      tween.kill();
    };
  }, [open]);
  return (
    <div className={className}>
      <div className="w-layout-hflex rt-faq-question-top">
        <div className="w-layout-hflex rt-faq-question-wrap">
          <div className="rt-text-style-h6">{item.number}</div>
          <div className="rt-faq-v1-content-wrap">
            <button
              type="button"
              className="rt-text-style-h6 clean-faq-question"
              aria-expanded={open}
              aria-controls={id}
              onClick={() => setOpen(!open)}
            >
              {item.question}
            </button>
            <div
              id={id}
              ref={answer}
              className="rt-faq-answer-wrap rt-overflow-hidden"
              style={{ height: 0 }}
              inert={!open}
            >
              <div className="rt-faq-answer">{item.answer}</div>
            </div>
          </div>
        </div>
        <button
          type="button"
          tabIndex={-1}
          aria-label={item.question}
          aria-expanded={open}
          aria-controls={id}
          className="rt-faq-toggle-icon rt-position-relative clean-faq-icon"
          onClick={() => setOpen(!open)}
        >
          <span className="rt-faq-toggle-icon-line rt-1" />
          <span
            className="rt-faq-toggle-icon-line rt-2"
            style={{
              transform: `rotate(${open ? 0 : 90}deg)`,
              transition: "transform .3s",
            }}
          />
        </button>
      </div>
    </div>
  );
}
