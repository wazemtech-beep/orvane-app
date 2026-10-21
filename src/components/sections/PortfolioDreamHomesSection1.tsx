"use client";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";
export default function PortfolioDreamHomesSection1() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useRevealAnimation(sectionRef);

  const content = siteConfig.sections.portfolioDreamHomesSection1;
  return (
    <section className="rt-section-gap-top-bottom" ref={sectionRef}>
      <div className="w-layout-blockcontainer rt-container w-container">
        <div>
          <div className="rt-sub-text">{content.eyebrow}</div>
          <h2
            {...{ text: "apearance" }}
            className="rt-text-style-h1 rt-bottom-no-gap"
          >
            {content.heading}
          </h2>
        </div>
        <div className="rt-flex-top-space-between-2 rt-section-gap-top">
          <div className="w-layout-vflex rt-grid-wrap-6 rt-details-info-list-wrap rt-sticky-wrap">
            <div
              {...{ scroll: "fade-up" }}
              className="rt-details-info-wrap rt-details-info-wrap-v2"
            >
              <div className="rt-grid-wrap-2">
                <div className="rt-text-style-h6">
                  {content.projectFeatures}
                </div>
              </div>
              <div className="rt-grid-wrap-4 w-richtext">
                <p>{content.description}</p>
              </div>
            </div>
            <div
              {...{ scroll: "fade-up" }}
              className="rt-details-info-wrap rt-details-info-wrap-v2"
            >
              <div className="rt-grid-wrap-2">
                <div className="rt-text-style-h6">
                  {content.projectOverview}
                </div>
              </div>
              <div className="rt-grid-wrap-4 w-richtext">
                <p>{content.description2}</p>
              </div>
            </div>
            <div className="w-layout-vflex rt-blog-details-list-block-wrap rt-grid-wrap-4 rt-full-width">
              <div className="rt-blog-details-list-block">
                <div className="rt-text-style-h6">{content.date}</div>
                <div className="rt-light-text">{content.february92026}</div>
              </div>
              <div className="rt-border-horizental"></div>
              <div className="rt-blog-details-list-block">
                <div className="rt-text-style-h6">{content.industry}</div>
                <div className="rt-light-text">
                  {content.architectureStudio}
                </div>
              </div>
              <div className="rt-border-horizental"></div>
              <div className="rt-blog-details-list-block">
                <div className="rt-text-style-h6">
                  {content.projectDuration}
                </div>
                <div className="rt-light-text">{content.value120Days}</div>
              </div>
              <div className="rt-border-horizental"></div>
              <div className="rt-wrap-top-gap-small">
                <Link
                  button-wrap="main"
                  href={content.backToPortfoliobackToPortfolioHref}
                  className="rt-navbar-btn-v1 rt-position-relative rt-overflow-hidden w-inline-block"
                >
                  <div className="rt-z-index rt-position-relative rt-overflow-hidden">
                    <div button-text="letters" className="rt-button-text">
                      {content.backToPortfolio}
                    </div>
                    <div
                      button-text="letters-hover"
                      className="rt-button-text rt-button-text-hover"
                    >
                      {content.backToPortfolio}
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
          </div>
          <div className="w-layout-vflex rt-portfolio-image-wrap rt-grid-wrap-5">
            <div className="rt-image-wrapper rt-overflow-hidden rt-full-height">
              <Image
                src={content.dreamHomesImage}
                alt={content.dreamHomesAlt}
                className="rt-image"
                width={1272}
                height={1184}
                sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
              />
            </div>
            <div className="rt-image-wrapper rt-overflow-hidden rt-full-height">
              <Image
                src={content.dreamHomesImage2}
                alt={content.dreamHomesAlt}
                className="rt-image"
                width={1272}
                height={1184}
                sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
              />
            </div>
            <div className="rt-image-wrapper rt-overflow-hidden rt-full-height">
              <Image
                src={content.dreamHomesImage3}
                alt={content.dreamHomesAlt}
                className="rt-image"
                width={1272}
                height={1184}
                sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
              />
            </div>
            <div className="rt-image-wrapper rt-overflow-hidden rt-full-height">
              <Image
                src={content.dreamHomesImage4}
                alt={content.dreamHomesAlt}
                className="rt-image"
                width={1272}
                height={1184}
                sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
