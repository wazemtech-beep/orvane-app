"use client";
import { useRef } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";

export default function AboutSection1() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useRevealAnimation(sectionRef);

  const content = siteConfig.sections.aboutSection1;
  return (
    <section className="rt-section-gap-top-bottom" ref={sectionRef}>
      <div className="w-layout-blockcontainer rt-container w-container">
        <div className="rt-flex-center-space-between rt-mobile-flex-gap-for-large">
          <div className="rt-grid-wrap-5">
            <div className="rt-sub-text">{content.eyebrow}</div>
            <div title={content.apearanceTitle} className="rt-title-gap-v1">
              <h2>{content.heading}</h2>
            </div>
            <p {...{ text: "apearance" }}>{content.description}</p>
            <div className="w-layout-vflex rt-about-v1-list-wrap rt-wrap-top-gap-medium">
              <div {...{ scroll: "fade-up" }} className="rt-statics-item-wrap">
                <div className="rt-text-style-h6">{content.disciplines}</div>
                <div className="rt-text-style-h6">
                  {content.designStructureMep}
                </div>
              </div>
              <div className="rt-border-horizental"></div>
              <div {...{ scroll: "fade-up" }} className="rt-statics-item-wrap">
                <div className="rt-text-style-h6">
                  {content.designReviewCadence}
                </div>
                <div className="rt-text-style-h6">{content.weekly}</div>
              </div>
              <div className="rt-border-horizental"></div>
              <div {...{ scroll: "fade-up" }} className="rt-statics-item-wrap">
                <div className="rt-text-style-h6">
                  {content.projectDelivery}
                </div>
                <div className="rt-text-style-h6">{content.onSchedule}</div>
              </div>
            </div>
            <div className="rt-about-v1-counter-wrapper">
              <div scale-in="" className="rt-about-v1-counter-wrap">
                <h2 data-counter="41%">{content.heading2}</h2>
                <p className="rt-highlighted-text">{content.description2}</p>
              </div>
              <div className="rt-vertical-line"></div>
              <div className="rt-about-v1-counter-wrap">
                <h2 data-counter="35+">{content.heading3}</h2>
                <p className="rt-highlighted-text">{content.description3}</p>
              </div>
            </div>
          </div>
          <div className="rt-grid-wrap-6 rt-height-stretch">
            <div className="rt-image-wrapper rt-overflow-hidden rt-full-height">
              <Image
                src={content.aboutStatisticsImageImage}
                alt={content.aboutStatisticsImageAlt}
                className="rt-image"
                width={1536}
                height={1640}
                sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
