"use client";
import { useRef } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";

export default function Footer() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useRevealAnimation(sectionRef);

  const content = siteConfig.sections.footer;
  return (
    <section className="rt-footer-v1 rt-position-relative" ref={sectionRef}>
      <div className="rt-footer-v1-wrap">
        <div className="w-layout-blockcontainer rt-container w-container">
          <div className="w-layout-hflex rt-flex-top-space-between">
            <div className="w-layout-vflex rt-footer-v1-content-wrap rt-grid-wrap-4">
              <div title={content.apearanceTitle} className="rt-text-style-h4">
                {
                  content.carefullySelectedMaterialsSupportingQualityAndLongevity
                }
              </div>
              <Link
                button-wrap="main"
                href={content.letSCreateletSCreateHref}
                className="rt-navbar-btn-v1 rt-position-relative rt-overflow-hidden w-inline-block"
              >
                <div className="rt-z-index rt-position-relative rt-overflow-hidden">
                  <div button-text="letters" className="rt-button-text">
                    {content.letSCreate}
                  </div>
                  <div
                    button-text="letters-hover"
                    className="rt-button-text rt-button-text-hover"
                  >
                    {content.letSCreate}
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
            <div className="w-layout-hflex rt-footer-list-wrap rt-grid-wrap-4">
              <div className="w-layout-vflex">
                <div className="rt-text-style-h6">{content.mainPage}</div>
                <div className="rt-footer-link-list-wrap">
                  <Link
                    scroll-tag="fade-in"
                    href={content.homeHref}
                    className="rt-footer-link-tem-v1 w--current"
                  >
                    {content.home}
                  </Link>
                  <Link
                    scroll-tag="fade-in"
                    href={content.aboutHref}
                    className="rt-footer-link-tem-v1"
                  >
                    {content.about}
                  </Link>
                  <Link
                    scroll-tag="fade-in"
                    href={content.serviceHref}
                    className="rt-footer-link-tem-v1"
                  >
                    {content.service}
                  </Link>
                  <Link
                    scroll-tag="fade-in"
                    href={content.letSCreateletSCreateHref}
                    className="rt-footer-link-tem-v1"
                  >
                    {content.contact}
                  </Link>
                  <Link
                    scroll-tag="fade-in"
                    href={content.blogHref}
                    className="rt-footer-link-tem-v1"
                  >
                    {content.blog}
                  </Link>
                </div>
              </div>
              <div className="w-layout-vflex">
                <div className="rt-text-style-h6">{content.socialLinks}</div>
                <div className="rt-footer-link-list-wrap">
                  <a
                    scroll-tag="fade-in"
                    href={content.instagramHref}
                    className="rt-footer-link-tem-v1"
                  >
                    {content.instagram}
                  </a>
                  <a
                    scroll-tag="fade-in"
                    href={content.linkedinHref}
                    className="rt-footer-link-tem-v1"
                  >
                    {content.linkedin}
                  </a>
                  <a
                    scroll-tag="fade-in"
                    href={content.facebookHref}
                    className="rt-footer-link-tem-v1"
                  >
                    {content.facebook}
                  </a>
                  <a
                    scroll-tag="fade-in"
                    href={content.dribbbleHref}
                    className="rt-footer-link-tem-v1"
                  >
                    {content.dribbble}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-layout-hflex rt-flex-center-space-between rt-wrap-top-gap-medium">
            <div className="w-layout-vflex rt-grid-wrap-3 rt-flex-gap-v3">
              <div className="rt-text-style-h6">{content.address}</div>
              <p
                {...{ text: "apearance" }}
                className="rt-bottom-no-gap rt-highlighted-text"
              >
                {content.description}
              </p>
            </div>
            <div className="rt-footer-v1-large-text rt-position-relative">
              <div {...{ footer: "large-text" }} className="rt-large-text">
                {content.interior}
              </div>
            </div>
          </div>
        </div>
        <div className="rt-wrap-top-gap-small">
          <div className="rt-border-horizental"></div>
          <div className="w-layout-blockcontainer rt-container w-container">
            <div className="rt-footer-bottom-bar">
              <div className="rt-grid-wrap-5">
                <p className="rt-bottom-no-gap rt-light-text">
                  {content.copyright}
                </p>
              </div>
              <div className="rt-grid-wrap-2">
                <p className="rt-right-align rt-bottom-no-gap rt-light-text">
                  <a
                    href={content.styleGuideHref}
                    className="rt-footer-link-tem-v1"
                  >
                    {content.styleGuide}
                  </a>
                  {content.description4}
                  <a
                    href={content.licensesHref}
                    className="rt-footer-link-tem-v1"
                  >
                    {content.licenses}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a
        aria-label={content.scrollToTopButtonAriaLabel}
        href={content.Href}
        className="rt-back-to-top w-inline-block"
      >
        <div className="rt-inline-flex w-embed">
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {" "}
            <path
              d="M0.700348 10.7211L10.2003 1.40039L19.7003 10.7211M10.2003 1.40039V20.4004"
              stroke="var(--_colors---text-color--text-primary)"
              strokeWidth="2"
            ></path>{" "}
          </svg>
        </div>
      </a>
    </section>
  );
}
