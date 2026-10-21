"use client";
import { useRef } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { useReferenceAnimations } from "@/hooks/useReferenceAnimations";
import { useHeroAnimation } from "@/hooks/useHeroAnimation";

export default function HomeHeroV1() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useReferenceAnimations(sectionRef);
  useHeroAnimation(sectionRef);

  const content = siteConfig.sections.homeHeroV1;
  return (
    <section className="rt-hero-v1" ref={sectionRef}>
      <div
        hero-one="main-wrapper"
        className="rt-hero-v1-wrapper rt-position-relative rt-overflow-hidden rt-full-height"
      >
        <div hero-one="image-one" className="rt-hero-v1-image-wrap">
          <Image
            src={content.heroBannerImage2Image}
            preload
            alt={content.heroBannerImage2Alt}
            width={3840}
            height={2000}
            sizes="100vw"
          />
        </div>
        <div className="rt-hero-v1-image-overlay"></div>
        <div className="rt-hero-v1-content-wrap rt-full-height">
          <div className="w-layout-blockcontainer rt-container rt-full-height w-container">
            <div className="w-layout-vflex rt-full-height rt-flex-top-space-between-2">
              <div className="w-layout-vflex rt-grid-wrap-6 rt-full-width">
                <div
                  hero-one="title-main-wrap"
                  className="w-layout-vflex rt-hero-v1-title-wrap"
                >
                  <h1
                    hero-one-bottom="title-one"
                    className="rt-large-text rt-no-gap rt-large-text-hero"
                  >
                    {content.title}
                  </h1>
                  <div className="rt-right-align-self rt-wrap-top-gap-small">
                    <div
                      hero-one-bottom="title-two"
                      className="rt-large-text rt-large-text-hero"
                    >
                      {content.space}
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-layout-hflex rt-hero-v1-bottom-text-wrapper rt-full-width">
                <div
                  hero-one-bottom="text-wrap"
                  className="w-layout-hflex rt-grid-wrap-4 rt-no-shrinks rt-flex-gap-v1"
                >
                  <div className="rt-text-style-h6">{content.creative}</div>
                  <div className="rt-text-style-h6">{content.title2}</div>
                  <div className="rt-text-style-h6">{content.exhibitions}</div>
                  <div className="rt-text-style-h6">{content.title2}</div>
                  <div className="rt-text-style-h6">{content.value2026}</div>
                </div>
                <div
                  hero-one-scroll="trigger"
                  id="w-node-_0129ba7e-4bb8-c9a2-0510-9ba69150109e-e01bc1b2"
                  className="w-layout-vflex rt-hero-v1-scroll-wrapper flex-center-center rt-responsive-display-none"
                >
                  <div className="text-block">{content.scroll}</div>
                  <div className="rt-hero-v1-scroll-line-wrap rt-position-relative rt-overflow-hidden">
                    <div className="rt-hero-v1-scroll-line"></div>
                  </div>
                </div>
                <div
                  hero-one-bottom="text-wrap"
                  className="w-layout-hflex rt-grid-wrap-4 rt-no-shrinks"
                >
                  <div className="rt-text-style-h6">
                    {content.total200ProjectsCompleted}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
