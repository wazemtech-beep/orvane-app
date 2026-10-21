"use client";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";
export default function HomeSection5() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useRevealAnimation(sectionRef);

  const content = siteConfig.sections.homeSection5;
  return (
    <section className="rt-section-gap-top-bottom" ref={sectionRef}>
      <div className="w-layout-blockcontainer rt-container w-container">
        <div className="w-layout-hflex rt-flex-top-space-between">
          <div className="w-layout-vflex rt-portfolio-wrap rt-grid-wrap-5">
            <div scroll-tag="fade-in" className="w-dyn-list">
              <div role="list" className="w-dyn-items">
                <div role="listitem" className="w-dyn-item">
                  <div {...{ flip: "from-left" }}>
                    <a
                      aria-label={content.portfolioLinkAriaLabel}
                      {...{ scale: "portfolio" }}
                      href={content.Href}
                      className="rt-position-relative rt-overflow-hidden rt-radius-small w-inline-block"
                    >
                      <Image
                        src={content.portfolioThumbnail1Image}
                        alt={content.Alt}
                        className="rt-portfolio-image"
                        width={1536}
                        height={1152}
                        sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                      />
                    </a>
                    <div className="w-layout-hflex rt-flex-center-space-between rt-wrap-top-gap-small">
                      <a
                        aria-label={content.portfolioLinkAriaLabel}
                        href={content.Href}
                        className="rt-text-style-h6"
                      >
                        {content.greenLivingArea}
                      </a>
                      <div>{content.santaMonicaCa}</div>
                    </div>
                    <div className="rt-border-horizental rt-wrap-top-gap-small"></div>
                  </div>
                </div>
              </div>
            </div>
            <div scroll-tag="fade-in" className="w-dyn-list">
              <div role="list" className="w-dyn-items">
                <div role="listitem" className="w-dyn-item">
                  <div {...{ flip: "from-left" }}>
                    <a
                      aria-label={content.portfolioLinkAriaLabel}
                      {...{ scale: "portfolio" }}
                      href={content.Href2}
                      className="rt-position-relative rt-overflow-hidden rt-radius-small w-inline-block"
                    >
                      <Image
                        src={content.portfolioThumbnail2Image}
                        alt={content.Alt}
                        className="rt-portfolio-image"
                        width={1536}
                        height={1152}
                        sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                      />
                    </a>
                    <div className="w-layout-hflex rt-flex-center-space-between rt-wrap-top-gap-small">
                      <a
                        aria-label={content.portfolioLinkAriaLabel}
                        href={content.Href2}
                        className="rt-text-style-h6"
                      >
                        {content.waitingArea}
                      </a>
                      <div>{content.longBeachCa}</div>
                    </div>
                    <div className="rt-border-horizental rt-wrap-top-gap-small"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-layout-vflex rt-grid-wrap-4 rt-flex-gap-v1">
              <p {...{ text: "apearance" }} className="rt-bottom-no-gap">
                {content.description}
              </p>
              <Link
                button-wrap="main"
                href={content.viewAllWorkviewAllWorkHref}
                className="rt-navbar-btn-v1 rt-position-relative rt-overflow-hidden w-inline-block"
              >
                <div className="rt-z-index rt-position-relative rt-overflow-hidden">
                  <div button-text="letters" className="rt-button-text">
                    {content.viewAllWork}
                  </div>
                  <div
                    button-text="letters-hover"
                    className="rt-button-text rt-button-text-hover"
                  >
                    {content.viewAllWork}
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
            id="w-node-_99fdc3d3-861c-97ac-f2ab-6704cd9d0785-e01bc1b2"
            className="w-layout-vflex rt-portfolio-wrap rt-grid-wrap-6"
          >
            <div className="rt-grid-wrap-5">
              <div className="rt-sub-text">{content.eyebrow}</div>
              <h2 title={content.apearanceTitle} className="rt-bottom-no-gap">
                {content.heading}
              </h2>
            </div>
            <div
              {...{ flip: "from-left" }}
              className="rt-grid-wrap-5 rt-right-align-self rt-position-relative"
            >
              <div
                up-down="movement"
                className="w-layout-vflex rt-portfolio-v1-tag-arrow rt-z-index"
              >
                <div className="rt-text-style-h2">{content.modern}</div>
                <div className="rt-right-align-self">
                  <Image
                    src={content.mordernArrowImage}
                    alt={content.mordernArrowAlt}
                    width={155}
                    height={119}
                    sizes="155px"
                  />
                </div>
              </div>
              <div scroll-tag="fade-in" className="w-dyn-list">
                <div role="list" className="w-dyn-items">
                  <div role="listitem" className="w-dyn-item">
                    <div {...{ flip: "from-left" }}>
                      <a
                        aria-label={content.portfolioLinkAriaLabel}
                        {...{ scale: "portfolio" }}
                        href={content.Href3}
                        className="rt-position-relative rt-overflow-hidden rt-radius-small w-inline-block"
                      >
                        <Image
                          src={content.portfolioThumbnail5Image}
                          alt={content.Alt}
                          className="rt-portfolio-image"
                          width={768}
                          height={576}
                          sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                        />
                      </a>
                      <div className="w-layout-hflex rt-flex-center-space-between rt-wrap-top-gap-small">
                        <a
                          aria-label={content.portfolioLinkAriaLabel}
                          href={content.Href3}
                          className="rt-text-style-h6"
                        >
                          {content.hotelsResorts}
                        </a>
                        <div>{content.sanDiegoCa}</div>
                      </div>
                      <div className="rt-border-horizental rt-wrap-top-gap-small"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              {...{ flip: "from-left" }}
              className="rt-grid-wrap-5 rt-right-align-self"
            >
              <div scroll-tag="fade-in" className="w-dyn-list">
                <div role="list" className="w-dyn-items">
                  <div role="listitem" className="w-dyn-item">
                    <div {...{ flip: "from-left" }}>
                      <Link
                        aria-label={content.portfolioLinkAriaLabel}
                        {...{ scale: "portfolio" }}
                        href={content.Href4}
                        className="rt-position-relative rt-overflow-hidden rt-radius-small w-inline-block"
                      >
                        <Image
                          src={content.portfolioThumbnail8Image}
                          alt={content.Alt}
                          className="rt-portfolio-image"
                          width={1536}
                          height={1152}
                          sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                        />
                      </Link>
                      <div className="w-layout-hflex rt-flex-center-space-between rt-wrap-top-gap-small">
                        <Link
                          aria-label={content.portfolioLinkAriaLabel}
                          href={content.Href4}
                          className="rt-text-style-h6"
                        >
                          {content.dreamHomes}
                        </Link>
                        <div>{content.newportBeachCa}</div>
                      </div>
                      <div className="rt-border-horizental rt-wrap-top-gap-small"></div>
                    </div>
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
