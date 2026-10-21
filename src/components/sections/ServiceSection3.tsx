"use client";
import { useRef } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";
export default function ServiceSection3() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useRevealAnimation(sectionRef);

  const content = siteConfig.sections.serviceSection3;
  return (
    <section className="rt-section-gap-top-bottom" ref={sectionRef}>
      <div className="w-layout-blockcontainer rt-container w-container">
        <div className="rt-grid-wrap-6">
          <div title={content.apearanceTitle} className="rt-large-text-v1">
            {content.ourService}
          </div>
        </div>
        <div className="rt-wrap-top-gap-medium">
          <div className="rt-border-horizental rt-wrap-top-gap-small"></div>
          <div
            service-two="card-list"
            className="w-layout-hflex rt-flex-top-space-between rt-top-gap-medium-v2"
          >
            <div className="w-layout-vflex rt-grid-wrap-4 rt-flex-gap-v1">
              <div className="w-layout-vflex rt-flex-gap-v1">
                <div
                  title={content.apearanceTitle}
                  className="rt-text-style-h3"
                >
                  {content.interiorArchitecture}
                </div>
                <p text-scrub="apear">{content.description}</p>
              </div>
              <ul
                {...{ scroll: "fade-up" }}
                role="list"
                className="rt-service-v2-list"
              >
                <li>{content.spacePlanningAndLayoutDesign}</li>
                <li>{content.customFurnitureSelection}</li>
                <li>{content.lightingDesign}</li>
                <li>{content.colorAndMaterialConcepts}</li>
                <li>{content.stylingAndFinalDetailing}</li>
              </ul>
            </div>
            <div className="w-layout-vflex rt-grid-wrap-7 rt-overflow-hidden rt-height-stretch">
              <div className="w-layout-hflex rt-service-v2-image">
                <Image
                  src={content.serviceListImage1Image}
                  alt={content.serviceListImage1Alt}
                  className="rt-radius-small"
                  width={1800}
                  height={1022}
                  sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                />
              </div>
            </div>
          </div>
          <div className="rt-border-horizental rt-top-gap-medium-v2"></div>
          <div
            service-two="card-list"
            className="w-layout-hflex rt-flex-top-space-between rt-top-gap-medium-v2"
          >
            <div className="w-layout-vflex rt-grid-wrap-4 rt-flex-gap-v1">
              <div className="w-layout-vflex rt-flex-gap-v1">
                <div
                  title={content.apearanceTitle}
                  className="rt-text-style-h3"
                >
                  {content.residentialDesign}
                </div>
                <p text-scrub="apear">{content.description2}</p>
              </div>
              <ul role="list" className="rt-service-v2-list">
                <li>{content.residentialSpacePlanning}</li>
                <li>{content.kitchenAndLivingDesign}</li>
                <li>{content.furnitureAndFinishSelection}</li>
                <li>{content.lightingAndColorStrategy}</li>
                <li>{content.customJoineryAndDetailing}</li>
              </ul>
            </div>
            <div className="w-layout-vflex rt-grid-wrap-7 rt-overflow-hidden rt-height-stretch">
              <div className="w-layout-hflex rt-service-v2-image">
                <Image
                  src={content.serviceListImage2Image}
                  alt={content.serviceListImage2Alt}
                  className="rt-radius-small"
                  width={1800}
                  height={1022}
                  sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                />
              </div>
            </div>
          </div>
          <div className="rt-border-horizental rt-top-gap-medium-v2"></div>
          <div
            service-two="card-list"
            className="w-layout-hflex rt-flex-top-space-between rt-top-gap-medium-v2"
          >
            <div className="w-layout-vflex rt-grid-wrap-4 rt-flex-gap-v1">
              <div className="w-layout-vflex rt-flex-gap-v1">
                <div
                  title={content.apearanceTitle}
                  className="rt-text-style-h3"
                >
                  {content.commercialInteriors}
                </div>
                <p text-scrub="apear">{content.description3}</p>
              </div>
              <ul role="list" className="rt-service-v2-list">
                <li>{content.workplaceAndRetailPlanning}</li>
                <li>{content.brandFocusedInteriorConcepts}</li>
                <li>{content.customerExperienceDesign}</li>
                <li>{content.materialAndLightingStrategy}</li>
                <li>{content.furnitureAndFixtureSelection}</li>
              </ul>
            </div>
            <div className="w-layout-vflex rt-grid-wrap-7 rt-overflow-hidden rt-height-stretch">
              <div className="w-layout-hflex rt-service-v2-image">
                <Image
                  src={content.serviceListImage3Image}
                  alt={content.serviceListImage3Alt}
                  className="rt-radius-small"
                  width={1800}
                  height={1022}
                  sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
