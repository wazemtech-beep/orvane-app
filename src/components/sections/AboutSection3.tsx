"use client";
import { useRef } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";
export default function AboutSection3() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useRevealAnimation(sectionRef);

  const content = siteConfig.sections.aboutSection3;
  return (
    <section
      achivement-one="wrap"
      className="rt-section-gap-bottom"
      ref={sectionRef}
    >
      <div className="w-layout-blockcontainer rt-container w-container">
        <div className="w-layout-hflex rt-flex-center-space-between-copy">
          <div className="w-layout-vflex rt-grid-wrap-5 rt-flex-gap-v3 rt-full-width rt-mobile-flex-gap-for-large">
            <div
              achivement-one="card-one"
              className="w-layout-hflex rt-achivement-v1-list-wrap rt-full-width"
            >
              <div className="rt-grid-wrap-2 rt-height-stretch">
                <Image
                  src={content.achivementImage1Image}
                  alt={content.achivementImage1Alt}
                  className="rt-radius-small"
                  width={480}
                  height={507}
                  sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                />
              </div>
              <div className="w-layout-vflex rt-grid-wrap-3 rt-flex-gap-v2">
                <div className="w-layout-vflex rt-flex-gap-v3">
                  <div className="rt-text-style-h5">
                    {content.sustainableDesign}
                  </div>
                  <p className="rt-bottom-no-gap">{content.description}</p>
                </div>
                <div className="w-layout-hflex rt-flex-gap-v3 rt-flex-wrap">
                  <div className="rt-sub-text">{content.eyebrow}</div>
                  <div className="rt-sub-text">{content.eyebrow2}</div>
                  <div className="rt-sub-text">{content.eyebrow3}</div>
                  <div className="rt-sub-text">{content.eyebrow2}</div>
                  <div className="rt-sub-text">{content.eyebrow4}</div>
                </div>
              </div>
            </div>
            <div className="rt-border-horizental"></div>
            <div
              achivement-one="card-two"
              className="w-layout-hflex rt-achivement-v1-list-wrap rt-full-width"
            >
              <div className="rt-grid-wrap-2 rt-height-stretch">
                <Image
                  src={content.achivementImage2Image}
                  alt={content.achivementImage2Alt}
                  className="rt-radius-small"
                  width={480}
                  height={507}
                  sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                />
              </div>
              <div className="w-layout-vflex rt-grid-wrap-3 rt-flex-gap-v2">
                <div className="w-layout-vflex rt-flex-gap-v3">
                  <div className="rt-text-style-h5">{content.renovation}</div>
                  <p className="rt-bottom-no-gap">{content.description2}</p>
                </div>
                <div className="w-layout-hflex rt-flex-gap-v3 rt-flex-wrap">
                  <div className="rt-sub-text">{content.eyebrow5}</div>
                  <div className="rt-sub-text">{content.eyebrow2}</div>
                  <div className="rt-sub-text">{content.eyebrow6}</div>
                  <div className="rt-sub-text">{content.eyebrow2}</div>
                  <div className="rt-sub-text">{content.eyebrow4}</div>
                </div>
              </div>
            </div>
            <div className="rt-border-horizental"></div>
            <div
              achivement-one="card-three"
              className="w-layout-hflex rt-achivement-v1-list-wrap rt-full-width"
            >
              <div className="rt-grid-wrap-2 rt-height-stretch">
                <Image
                  src={content.achivementImage3Image}
                  alt={content.achivementImage3Alt}
                  className="rt-radius-small"
                  width={480}
                  height={507}
                  sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                />
              </div>
              <div className="w-layout-vflex rt-grid-wrap-3 rt-flex-gap-v2">
                <div className="w-layout-vflex rt-flex-gap-v3">
                  <div className="rt-text-style-h5">
                    {content.interiorDesign}
                  </div>
                  <p className="rt-bottom-no-gap">{content.description3}</p>
                </div>
                <div className="w-layout-hflex rt-flex-gap-v3 rt-flex-wrap">
                  <div className="rt-sub-text">{content.eyebrow7}</div>
                  <div className="rt-sub-text">{content.eyebrow2}</div>
                  <div className="rt-sub-text">{content.eyebrow8}</div>
                  <div className="rt-sub-text">{content.eyebrow2}</div>
                  <div className="rt-sub-text">{content.eyebrow4}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="rt-grid-wrap-6 rt-height-stretch rt-position-relative">
            <div className="rt-full-height rt-overflow-hidden">
              <Image
                src={content.achivementBackgroundImageImage}
                achivement-one="main-image"
                alt={content.achivementBackgroundImageAlt}
                className="rt-radius-small"
                width={1536}
                height={1620}
                sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
              />
            </div>
            <div className="w-layout-vflex rt-achivement-v1-image-wrap rt-flex-gap-v3">
              <div className="rt-achivement-v1-border-line"></div>
              <div
                {...{ scroll: "fade-up" }}
                className="w-layout-vflex rt-achivement-v1-card flex-center-center rt-flex-gap-v3"
              >
                <div>
                  <Image
                    src={content.achivementRoundImageImage}
                    alt={content.achivementRoundImageAlt}
                    className="rt-radius-fifty"
                    width={116}
                    height={116}
                    sizes="116px"
                  />
                </div>
                <p className="rt-dark-text rt-bottom-no-gap rt-text-center">
                  {content.description4}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
