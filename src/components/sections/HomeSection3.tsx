"use client";
import { useRef } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";
import { useShowcaseSlider } from "@/hooks/useShowcaseSlider";

export default function HomeSection3() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useRevealAnimation(sectionRef);
  useShowcaseSlider(sectionRef);

  const content = siteConfig.sections.homeSection3;
  return (
    <section
      design-slider-one="wrapper"
      className="rt-section-gap-bottom"
      ref={sectionRef}
    >
      <div className="w-layout-blockcontainer rt-container w-container">
        <div className="w-layout-vflex rt-grid-wrap-6 rt-margin-auto flex-center-center">
          <div design-slider-one="text-one" className="rt-large-text-v1">
            {content.spacesThat}
          </div>
          <div className="rt-position-relative">
            <div design-slider-one="text-two" className="rt-large-text-v1">
              {content.inspire}
            </div>
          </div>
          <div className="rt-grid-wrap-4 rt-text-center rt-wrap-top-gap-small">
            <p {...{ text: "apearance" }}>{content.description}</p>
          </div>
        </div>
        <div className="rt-overflow-hidden">
          <div
            design-slider="train"
            className="w-layout-hflex rt-design-v1-slider-train rt-wrap-top-gap-medium"
          >
            <div className="w-layout-vflex rt-design-v1-slider-block">
              <div className="rt-design-v1-slider-image-wrapper rt-position-relative">
                <div className="rt-design-v1-slider-image">
                  <Image
                    src={content.sliderImage2Image}
                    alt={content.sliderImage2Alt}
                    width={1306}
                    height={1084}
                    sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                  />
                </div>
                <div className="rt-design-v1-slider-frame"></div>
              </div>
              <div className="w-layout-vflex rt-design-v1-slider-content rt-text-center flex-center-center rt-grid-wrap-4">
                <h3 className="rt-design-v1-slider-title">{content.heading}</h3>
                <p className="rt-design-v1-slider-text rt-bottom-no-gap rt-highlighted-text">
                  {content.description2}
                </p>
              </div>
            </div>
            <div className="w-layout-vflex rt-design-v1-slider-block">
              <div className="rt-design-v1-slider-image-wrapper rt-position-relative">
                <div className="rt-design-v1-slider-image">
                  <Image
                    src={content.sliderImage1Image}
                    alt={content.sliderImage1Alt}
                    width={1306}
                    height={1084}
                    sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                  />
                </div>
                <div className="rt-design-v1-slider-frame"></div>
              </div>
              <div className="w-layout-vflex rt-design-v1-slider-content rt-text-center flex-center-center rt-grid-wrap-4">
                <h3 className="rt-design-v1-slider-title">
                  {content.heading2}
                </h3>
                <p className="rt-design-v1-slider-text rt-bottom-no-gap rt-highlighted-text">
                  {content.description3}
                </p>
              </div>
            </div>
            <div className="w-layout-vflex rt-design-v1-slider-block">
              <div className="rt-design-v1-slider-image-wrapper rt-position-relative">
                <div className="rt-design-v1-slider-image">
                  <Image
                    src={content.sliderImage03Image}
                    alt={content.sliderImage03Alt}
                    width={1306}
                    height={1084}
                    sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                  />
                </div>
                <div className="rt-design-v1-slider-frame"></div>
              </div>
              <div className="w-layout-vflex rt-design-v1-slider-content rt-text-center flex-center-center rt-grid-wrap-4">
                <h3 className="rt-design-v1-slider-title">
                  {content.heading3}
                </h3>
                <p className="rt-design-v1-slider-text rt-bottom-no-gap rt-highlighted-text">
                  {content.description4}
                </p>
              </div>
            </div>
            <div className="w-layout-vflex rt-design-v1-slider-block">
              <div className="rt-design-v1-slider-image-wrapper rt-position-relative">
                <div className="rt-design-v1-slider-image">
                  <Image
                    src={content.sliderImage2Image}
                    alt={content.sliderImage2Alt}
                    width={1306}
                    height={1084}
                    sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                  />
                </div>
                <div className="rt-design-v1-slider-frame"></div>
              </div>
              <div className="w-layout-vflex rt-design-v1-slider-content rt-text-center flex-center-center rt-grid-wrap-4">
                <h3 className="rt-design-v1-slider-title">{content.heading}</h3>
                <p className="rt-design-v1-slider-text rt-bottom-no-gap rt-highlighted-text">
                  {content.description2}
                </p>
              </div>
            </div>
            <div className="w-layout-vflex rt-design-v1-slider-block">
              <div className="rt-design-v1-slider-image-wrapper rt-position-relative">
                <div className="rt-design-v1-slider-image">
                  <Image
                    src={content.sliderImage1Image}
                    alt={content.sliderImage1Alt}
                    width={1306}
                    height={1084}
                    sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                  />
                </div>
                <div className="rt-design-v1-slider-frame"></div>
              </div>
              <div className="w-layout-vflex rt-design-v1-slider-content rt-text-center flex-center-center rt-grid-wrap-4">
                <h3 className="rt-design-v1-slider-title">
                  {content.heading4}
                </h3>
                <p className="rt-design-v1-slider-text rt-bottom-no-gap rt-highlighted-text">
                  {content.description5}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
