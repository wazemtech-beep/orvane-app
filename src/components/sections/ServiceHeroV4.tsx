"use client";
import { useRef } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { useReferenceAnimations } from "@/hooks/useReferenceAnimations";
import { useHeroAnimation } from "@/hooks/useHeroAnimation";

export default function ServiceHeroV4() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useReferenceAnimations(sectionRef);
  useHeroAnimation(sectionRef);

  const content = siteConfig.sections.serviceHeroV4;
  return (
    <section className="rt-hero-v4 rt-position-relative" ref={sectionRef}>
      <div className="w-layout-blockcontainer rt-container rt-full-height rt-z-index w-container">
        <div className="w-layout-vflex rt-hero-v4-content-wrap">
          <div className="w-layout-hflex rt-flex-center-space-between rt-full-width">
            <h1 hero-four="large-text" className="rt-large-text rt-top-no-gap">
              {content.title}
            </h1>
            <div className="rt-grid-wrap-3">
              <div
                hero-four="content"
                className="rt-text-style-h4 rt-grid-wrap-3"
              >
                {content.premiumDesignForModernHomes}
              </div>
            </div>
          </div>
          <div className="rt-hero-v4-border"></div>
          <div className="w-layout-hflex rt-flex-center-space-between rt-full-width">
            <div hero-four="content" className="rt-text-style-h6">
              {content.architectureExhibitions2026}
            </div>
            <div
              hero-four="content"
              className="rt-text-style-h6 rt-grid-wrap-3"
            >
              {content.value35ArchitectsAndDesignersOnStaff}
            </div>
          </div>
        </div>
      </div>
      <div className="rt-hero-v4-image-wrap">
        <Image
          src={content.homeTwoHeroBannerImageImage}
          alt={content.homeTwoHeroBannerImageAlt}
          className="rt-hero-v4-image"
          width={3840}
          height={2298}
          sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
        />
        <div className="rt-hero-v4-image-overlay"></div>
      </div>
    </section>
  );
}
