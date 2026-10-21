"use client";
import { useState, useRef } from "react";
import { siteConfig } from "@/data/siteConfig";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";
import AccordionAnswer from "@/components/ui/AccordionAnswer";

export default function HomeSection7() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useRevealAnimation(sectionRef);

  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const content = siteConfig.sections.homeSection7;
  const faqs = content.faqs || [];

  return (
    <section className="rt-section-gap-bottom" ref={sectionRef}>
      <div className="w-layout-blockcontainer rt-container w-container">
        <div className="w-layout-hflex rt-flex-top-space-between-2">
          <div
            {...{ scroll: "fade-up" }}
            className="rt-grid-wrap-4 rt-sticky-wrap rt-gap-bottom-md"
          >
            <div className="rt-sub-text">{content.eyebrow}</div>
            <h2 title={content.apearanceTitle} className="rt-bottom-no-gap">
              {content.heading}
            </h2>
          </div>
          <div className="w-layout-vflex rt-faq-v1-wrapper rt-overflow-hidden rt-grid-wrap-6">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div faq-wrap="block" key={index}>
                  <div
                    className={
                      index === 0
                        ? "rt-border-horizental"
                        : "rt-border-horizental-no-animation"
                    }
                  ></div>
                  <div className={`rt-faq-v1-wrap ${isOpen ? "active" : ""}`}>
                    <div
                      className="w-layout-hflex rt-faq-v1-top-wrap"
                      role="button"
                      tabIndex={0}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-home-${index}`}
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setOpenFaq(isOpen ? null : index);
                        }
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      <div className="rt-text-style-h6">{faq.question}</div>
                      <div className="rt-faq-v1-icon">
                        <div
                          {...{ faq: "icon-one" }}
                          className="rt-faq-minus"
                        ></div>
                        <div
                          className={`rt-faq-plus ${isOpen ? "rt-faq-plus-active" : ""}`}
                          style={{
                            opacity: isOpen ? 0 : 1,
                            transform: isOpen
                              ? "rotate(90deg)"
                              : "rotate(0deg)",
                            transition:
                              "transform 0.3s ease, opacity 0.3s ease",
                          }}
                        ></div>
                      </div>
                    </div>
                    <AccordionAnswer
                      id={`faq-answer-home-${index}`}
                      open={isOpen}
                      className={`rt-faq-v1-bottom-wrap ${index > 0 ? "rt-faq-v1-bottom-wrap-v2" : ""}`}
                    >
                      <div className="rt-faq-v1-content rt-grid-wrap-4-2">
                        <p className="rt-bottom-no-gap rt-light-text">
                          {faq.answer}
                        </p>
                      </div>
                    </AccordionAnswer>
                  </div>
                  {index === faqs.length - 1 && (
                    <div className="rt-border-horizental-no-animation"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
