"use client";
import { useRef } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";
export default function ServiceSection1() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useRevealAnimation(sectionRef);

  const content = siteConfig.sections.serviceSection1;
  return (
    <section className="rt-section-gap-top-bottom" ref={sectionRef}>
      <div className="w-layout-blockcontainer rt-container w-container">
        <div className="w-layout-hflex rt-flex-top-space-between">
          <div className="w-layout-vflex rt-grid-wrap-4 rt-flex-gap-v2">
            <div className="rt-grid-wrap-3">
              <p {...{ text: "apearance" }}>{content.description}</p>
            </div>
            <div {...{ scroll: "fade-up" }}>
              <Image
                src={content.structureModelImage}
                alt={content.structureModelAlt}
                width={1110}
                height={658}
                sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
              />
            </div>
          </div>
          <div className="w-layout-vflex rt-grid-wrap-7 rt-height-stretch rt-flex-top-space-between">
            <h2 title={content.apearanceTitle} className="rt-top-no-gap">
              {content.heading}
              <span className="rt-text-underline">{content.precision}</span>
              {content.heading2}
            </h2>
            <div className="w-layout-hflex rt-flex-top-space-between">
              <div
                {...{ scroll: "fade-up" }}
                className="w-layout-vflex rt-grid-wrap-3 rt-flex-gap-v3"
              >
                <div className="rt-text-style-h6">{content.smartBuildings}</div>
                <p className="rt-bottom-no-gap">{content.description2}</p>
              </div>
              <div
                {...{ scroll: "fade-up" }}
                className="w-layout-vflex rt-grid-wrap-3 rt-flex-gap-v3"
              >
                <div className="rt-text-style-h6">
                  {content.greenArchitecture}
                </div>
                <p className="rt-bottom-no-gap">{content.description3}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
