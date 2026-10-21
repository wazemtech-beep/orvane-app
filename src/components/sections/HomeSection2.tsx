"use client";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";
import { useInteractiveSections } from "@/hooks/useInteractiveSections";
import { useMarqueeAnimation } from "@/hooks/useMarqueeAnimation";

export default function HomeSection2() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useRevealAnimation(sectionRef);
  useInteractiveSections(sectionRef);
  useMarqueeAnimation(sectionRef);

  const content = siteConfig.sections.homeSection2;
  return (
    <section
      service-one="wrapper"
      className="rt-section-gap-bottom"
      ref={sectionRef}
    >
      <div className="w-layout-blockcontainer rt-container w-container">
        <div className="rt-grid-wrap-6 rt-margin-auto rt-text-center">
          <div className="rt-sub-text">{content.eyebrow}</div>
          <h2>{content.heading}</h2>
        </div>
        <div className="w-layout-hflex rt-flex-top-space-between-2 rt-wrap-top-gap-medium">
          <div
            service-one="block-one"
            className="w-layout-vflex rt-service-v1-block flex-center-center rt-flex-gap-v1 rt-sticky-wrap"
          >
            <div className="rt-service-v1-image-wrap rt-position-relative">
              <div className="rt-service-v1-image">
                <Image
                  src={content.serviceImageChange1Image}
                  alt={content.serviceImageChange1Alt}
                  className="rt-radius-small"
                  width={1800}
                  height={1680}
                  sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                />
              </div>
              <div className="rt-service-v1-image-apear rt-service-v1-image-apear-v1">
                <Image
                  src={content.serviceImageChange2Image}
                  alt={content.serviceImageChange2Alt}
                  className="rt-radius-small"
                  width={1800}
                  height={1680}
                  sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                />
              </div>
              <div className="rt-service-v1-image-apear rt-service-v1-image-apear-v2">
                <Image
                  src={content.serviceImageChange3Image}
                  alt={content.serviceImageChange3Alt}
                  className="rt-radius-small"
                  width={1800}
                  height={1680}
                  sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                />
              </div>
              <div className="rt-service-v1-image-apear rt-service-v1-image-apear-v3">
                <Image
                  src={content.serviceImageChange4Image}
                  alt={content.serviceImageChange4Alt}
                  className="rt-radius-small"
                  width={1800}
                  height={1680}
                  sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                />
              </div>
            </div>
            <div className="rt-grid-wrap-5 rt-text-center">
              <p {...{ text: "apearance" }}>{content.description}</p>
            </div>
            <div {...{ scroll: "fade-up" }}>
              <Link
                button-wrap="main"
                href={content.ourApproachourApproachHref}
                className="rt-navbar-btn-v1 rt-position-relative rt-overflow-hidden w-inline-block"
              >
                <div className="rt-z-index rt-position-relative rt-overflow-hidden">
                  <div button-text="letters" className="rt-button-text">
                    {content.ourApproach}
                  </div>
                  <div
                    button-text="letters-hover"
                    className="rt-button-text rt-button-text-hover"
                  >
                    {content.ourApproach}
                  </div>
                </div>
                <div
                  button-one="icon-wrap"
                  className="w-layout-hflex flex-center-center rt-overflow-hidden rt-position-relative rt-z-index"
                >
                  <svg
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="rt-navbar-btn-v1-icon rt-hover"
                  >
                    <path
                      d="M11.5 3.88672L6.5 7.77344V4.38672H0V3.38672H6.5V0L11.5 3.88672Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <svg
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="rt-navbar-btn-v1-icon"
                  >
                    <path
                      d="M11.5 3.88672L6.5 7.77344V4.38672H0V3.38672H6.5V0L11.5 3.88672Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <div className="rt-navbar-btn-v1-overlay"></div>
              </Link>
            </div>
          </div>
          <div
            service-one="block-two"
            className="w-layout-vflex rt-service-v1-block rt-service-v1-block-v2"
          >
            <div
              {...{ scroll: "fade-up" }}
              className="w-layout-vflex rt-flex-gap-v3"
            >
              <div className="rt-overflow-hidden rt-position-relative rt-radius-small">
                <Image
                  src={content.serviceImageSide1Image}
                  alt={content.serviceImageSide1Alt}
                  width={1012}
                  height={542}
                  sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                />
              </div>
              <div className="w-layout-hflex rt-flex-center-space-between rt-full-width">
                <div className="rt-text-style-h6">{content.renovation}</div>
                <div>{content.value92}</div>
              </div>
              <div className="rt-border-horizental"></div>
              <div className="w-layout-hflex rt-flex-center-space-between rt-full-width">
                <div className="rt-text-style-h6">{content.structure}</div>
                <div>{content.rebuiltWallsForTheOpenPlanLayout}</div>
              </div>
            </div>
            <div className="w-layout-vflex rt-flex-gap-v3">
              <div className="rt-overflow-hidden rt-position-relative rt-radius-small">
                <Image
                  src={content.serviceImageSide3Image}
                  alt={content.serviceImageSide3Alt}
                  width={1012}
                  height={542}
                  sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                />
              </div>
              <div className="w-layout-hflex rt-flex-center-space-between rt-full-width">
                <div className="rt-text-style-h6">{content.renovation}</div>
                <div>{content.value78}</div>
              </div>
              <div className="rt-border-horizental"></div>
              <div className="w-layout-hflex rt-flex-center-space-between rt-full-width">
                <div className="rt-text-style-h6">{content.structure}</div>
                <div>{content.reinforcedFoundationForTheCantilever}</div>
              </div>
            </div>
            <div className="w-layout-vflex rt-flex-gap-v3">
              <div className="rt-overflow-hidden rt-position-relative rt-radius-small">
                <Image
                  src={content.serviceImageSide2Image}
                  alt={content.serviceImageSide2Alt}
                  width={1012}
                  height={542}
                  sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                />
              </div>
              <div className="w-layout-hflex rt-flex-center-space-between rt-full-width">
                <div className="rt-text-style-h6">{content.renovation}</div>
                <div>{content.location}</div>
              </div>
              <div className="rt-border-horizental"></div>
              <div className="w-layout-hflex rt-flex-center-space-between rt-full-width">
                <div className="rt-text-style-h6">{content.structure}</div>
                <div>{content.restoredStoneworkUpgradedSupports}</div>
              </div>
            </div>
            <div className="w-layout-vflex rt-flex-gap-v3">
              <div className="rt-overflow-hidden rt-position-relative rt-radius-small">
                <Image
                  src={content.serviceImageSide4Image}
                  alt={content.serviceImageSide4Alt}
                  width={1012}
                  height={542}
                  sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                />
              </div>
              <div className="w-layout-hflex rt-flex-center-space-between rt-full-width">
                <div className="rt-text-style-h6">{content.renovation}</div>
                <div>{content.value65}</div>
              </div>
              <div className="rt-border-horizental"></div>
              <div className="w-layout-hflex rt-flex-center-space-between rt-full-width">
                <div className="rt-text-style-h6">{content.structure}</div>
                <div>{content.upgradedFramingBehindOriginalFacade}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="rt-service-v1-train-wrap rt-overflow-hidden rt-wrap-top-gap-medium">
          <div
            {...{ train: "" }}
            className="w-layout-hflex rt-service-v1-train"
          >
            <div
              {...{ scroll: "fade-up" }}
              className="w-layout-vflex rt-service-v1-card rt-flex-gap-v3 rt-no-shrinks"
            >
              <div className="rt-overflow-hidden rt-position-relative rt-radius-small">
                <Image
                  src={content.serviceImageSide1Image}
                  alt={content.serviceImageSide1Alt}
                  width={1012}
                  height={542}
                  sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                />
              </div>
              <div className="w-layout-hflex rt-flex-center-space-between rt-full-width">
                <div className="rt-text-style-h6">{content.renovation}</div>
                <div>{content.value92}</div>
              </div>
              <div className="rt-border-horizental"></div>
              <div className="w-layout-hflex rt-flex-center-space-between rt-full-width">
                <div className="rt-text-style-h6">{content.structure}</div>
                <div>{content.rebuiltWallsForTheOpenPlanLayout}</div>
              </div>
            </div>
            <div className="w-layout-vflex rt-service-v1-card rt-flex-gap-v3 rt-no-shrinks">
              <div className="rt-overflow-hidden rt-position-relative rt-radius-small">
                <Image
                  src={content.serviceImageSide3Image}
                  alt={content.serviceImageSide3Alt}
                  width={1012}
                  height={542}
                  sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                />
              </div>
              <div className="w-layout-hflex rt-flex-center-space-between rt-full-width">
                <div className="rt-text-style-h6">{content.renovation}</div>
                <div>{content.value78}</div>
              </div>
              <div className="rt-border-horizental"></div>
              <div className="w-layout-hflex rt-flex-center-space-between rt-full-width">
                <div className="rt-text-style-h6">{content.structure}</div>
                <div>{content.reinforcedFoundationForTheCantilever}</div>
              </div>
            </div>
            <div className="w-layout-vflex rt-service-v1-card rt-flex-gap-v3 rt-no-shrinks">
              <div className="rt-overflow-hidden rt-position-relative rt-radius-small">
                <Image
                  src={content.serviceImageSide2Image}
                  alt={content.serviceImageSide2Alt}
                  width={1012}
                  height={542}
                  sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                />
              </div>
              <div className="w-layout-hflex rt-flex-center-space-between rt-full-width">
                <div className="rt-text-style-h6">{content.renovation}</div>
                <div>{content.location}</div>
              </div>
              <div className="rt-border-horizental"></div>
              <div className="w-layout-hflex rt-flex-center-space-between rt-full-width">
                <div className="rt-text-style-h6">{content.structure}</div>
                <div>{content.restoredStoneworkUpgradedSupports}</div>
              </div>
            </div>
            <div className="w-layout-vflex rt-service-v1-card rt-flex-gap-v3 rt-no-shrinks">
              <div className="rt-overflow-hidden rt-position-relative rt-radius-small">
                <Image
                  src={content.serviceImageSide4Image}
                  alt={content.serviceImageSide4Alt}
                  width={1012}
                  height={542}
                  sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                />
              </div>
              <div className="w-layout-hflex rt-flex-center-space-between rt-full-width">
                <div className="rt-text-style-h6">{content.renovation}</div>
                <div>{content.value65}</div>
              </div>
              <div className="rt-border-horizental"></div>
              <div className="w-layout-hflex rt-flex-center-space-between rt-full-width">
                <div className="rt-text-style-h6">{content.structure}</div>
                <div>{content.upgradedFramingBehindOriginalFacade}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
