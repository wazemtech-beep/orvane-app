"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";

export default function HomeSection1() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useRevealAnimation(sectionRef);

  const [activeProcess, setActiveProcess] = useState(1);
  const content = siteConfig.sections.homeSection1;
  const cards = content.cards || [];

  return (
    <section className="rt-section-gap-top-bottom" ref={sectionRef}>
      <div className="w-layout-blockcontainer rt-container w-container">
        <div className="w-layout-hflex rt-flex-top-space-between-2">
          <div className="rt-grid-wrap-4">
            <div className="rt-sub-text">{content.eyebrow}</div>
            <h2 title={content.apearanceTitle} className="rt-bottom-no-gap">
              {content.heading}
            </h2>
          </div>
          <div className="w-layout-hflex rt-grid-wrap-3">
            <p {...{ text: "apearance" }} className="rt-bottom-no-gap">
              {content.description}
            </p>
          </div>
        </div>
        <div
          about-card="counter"
          className="rt-grid-3 rt-between-gaps rt-wrap-top-gap-medium"
        >
          {cards.map((card, index) => {
            const isActive = activeProcess === index;
            return (
              <div
                key={index}
                flip-entry=""
                process-card={isActive ? "active" : "deactive"}
                className="rt-process-card-v1 rt-position-relative rt-overflow-hidden rt-radius-v1"
                role="button"
                tabIndex={0}
                aria-pressed={isActive}
                onMouseEnter={() => setActiveProcess(index)}
                onFocus={() => setActiveProcess(index)}
                onClick={() => setActiveProcess(index)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActiveProcess(index);
                  }
                }}
                style={{ cursor: "pointer" }}
              >
                <div
                  process-image={isActive ? "active" : "deactive"}
                  className="rt-process-card-v1-image rt-full-height rt-radius-v1"
                  style={{
                    transform: isActive ? "scale(1)" : "scale(1.2)",
                    transition: "transform 0.8s ease",
                  }}
                >
                  <Image
                    src={card.image}
                    alt={card.imageAlt || card.title}
                    width={1008}
                    height={782}
                    sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                  />
                </div>
                <div
                  process-text-overlay={
                    isActive ? "active-one" : "deactive-one"
                  }
                  className="w-layout-vflex rt-process-card-v1-overlay-1"
                  style={{
                    opacity: isActive ? 0 : 1,
                    transition: "opacity 0.4s ease",
                  }}
                >
                  <div className="rt-uppercase">{card.num}</div>
                  <div className="w-layout-vflex">
                    <div className="rt-process-icon">
                      <Image
                        src={card.icon}
                        alt=""
                        width={44}
                        height={39}
                        sizes="44px"
                      />
                    </div>
                    <div className="rt-text-style-h6 rt-title-gap-v1">
                      {card.title}
                    </div>
                    <p className="rt-bottom-no-gap">{card.description}</p>
                  </div>
                </div>
                <div
                  process-text-overlay={
                    isActive ? "active-two" : "deactive-two"
                  }
                  className="w-layout-vflex rt-process-card-v1-overlay-1 rt-process-card-v1-overlay-text"
                  style={{
                    opacity: isActive ? 1 : 0,
                    transition: "opacity 0.4s ease",
                  }}
                >
                  <div>
                    <Image
                      src={content.milestonePlusIconImage}
                      alt={content.milestonePlusIconAlt || ""}
                      width={73}
                      height={73}
                      sizes="73px"
                    />
                  </div>
                  <div className="rt-text-style-h6 rt-text-white">
                    {card.title}
                  </div>
                </div>
                <div
                  process-overlay={isActive ? "active-dark" : "deactive dark"}
                  className="rt-process-card-v1-overlay-dark"
                  style={{
                    opacity: isActive ? 0 : 1,
                    transform: isActive ? "scale(0.92)" : "scale(1)",
                    transition: "opacity 0.55s ease, transform 0.55s ease",
                  }}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
