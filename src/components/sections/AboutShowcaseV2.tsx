"use client";
import { useRef } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { useReferenceAnimations } from "@/hooks/useReferenceAnimations";
import { useGalleryAnimation } from "@/hooks/useGalleryAnimation";

export default function AboutShowcaseV2() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useReferenceAnimations(sectionRef);
  useGalleryAnimation(sectionRef);

  const content = siteConfig.sections.aboutShowcaseV2;
  return (
    <section className="rt-showcase-v2" ref={sectionRef}>
      <div className="w-layout-blockcontainer rt-full-container rt-full-height w-container">
        <div
          {...{ gallery: "wrapper" }}
          className="w-layout-grid rt-gallery-v1-image-wrapper rt-position-relative rt-overflow-hidden rt-full-height"
        >
          <div
            gallery-image="one"
            className="rt-gallery-v1-image rt-full-height rt-position-relative"
          >
            <Image
              src={content.homeTwoGalleryImage1Image}
              alt={content.homeTwoGalleryImage1Alt}
              width={1188}
              height={2000}
              sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
            />
          </div>
          <div
            gallery-image="two"
            className="rt-gallery-v1-image rt-full-height rt-position-relative"
          >
            <Image
              src={content.homeTwoGalleryImage2Image}
              alt={content.homeTwoGalleryImage2Alt}
              width={1362}
              height={2000}
              sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
            />
          </div>
          <div
            gallery-image="three"
            className="rt-gallery-v1-image rt-full-height rt-position-relative"
          >
            <Image
              src={content.homeTwoGalleryImage3Image}
              alt={content.homeTwoGalleryImage3Alt}
              width={1290}
              height={2000}
              sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
            />
          </div>
          <div className="w-layout-vflex rt-gallery-v1-text-wrap flex-center-center rt-flex-gap-v1 rt-z-index">
            <div {...{ gallery: "title" }} className="rt-large-text">
              {content.architecture}
            </div>
            <div
              {...{ gallery: "title" }}
              className="rt-text-style-h4 rt-text-center"
            >
              {content.theJourneyBehindEveryProject}
            </div>
          </div>
          <div className="rt-galary-overlay"></div>
        </div>
      </div>
    </section>
  );
}
