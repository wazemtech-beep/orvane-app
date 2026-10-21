"use client";
import { useRef } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";
export default function ServiceSection2() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useRevealAnimation(sectionRef);

  const content = siteConfig.sections.serviceSection2;
  return (
    <section ref={sectionRef}>
      <div className="w-layout-blockcontainer rt-container w-container">
        <div className="w-layout-hflex rt-flex-center-space-between">
          <div className="rt-grid-wrap-6 rt-height-stretch">
            <div className="rt-image-wrapper rt-overflow-hidden rt-full-height">
              <Image
                src={content.serviceImageChange3Image}
                alt={content.serviceImageChange3Alt}
                className="rt-image"
                width={1800}
                height={1680}
                sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
              />
            </div>
          </div>
          <div className="rt-grid-wrap-5">
            <div className="rt-sub-text">{content.eyebrow}</div>
            <h2 title={content.apearanceTitle}>{content.heading}</h2>
            <p {...{ text: "apearance" }}>{content.description}</p>
            <p {...{ text: "apearance" }}>{content.description2}</p>
            <p {...{ text: "apearance" }} className="rt-wrap-top-gap-medium">
              {content.description3}
            </p>
            <div className="w-layout-hflex rt-about-v1-icon-wrap rt-wrap-top-gap-large">
              <div>
                <Image
                  src={content.serviceAboutIconImage}
                  {...{ scroll: "scale-up" }}
                  alt={content.serviceAboutIconAlt}
                  width={120}
                  height={72}
                  sizes="120px"
                />
              </div>
              <div className="rt-grid-wrap-3">
                <p {...{ scroll: "fade-up" }} className="rt-bottom-no-gap">
                  {content.description4}
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
