"use client";
import { useRef } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";
export default function ServiceSection6() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useRevealAnimation(sectionRef);

  const content = siteConfig.sections.serviceSection6;
  return (
    <section
      pricing-card="main-wrap"
      className="rt-section-gap-bottom rt-overflow-hidden"
      ref={sectionRef}
    >
      <div className="w-layout-blockcontainer rt-container w-container">
        <div className="rt-grid-wrap-4 rt-margin-auto rt-text-center">
          <div className="rt-sub-text">{content.eyebrow}</div>
          <h2 title={content.apearanceTitle}>{content.heading}</h2>
        </div>
        <div className="w-layout-grid rt-grid-2 rt-pricing-grid-2">
          <div
            pricing-card="one-main"
            className="w-layout-vflex rt-pricing-card-v1"
          >
            <div className="w-layout-hflex rt-pricing-card-v1-icon-list-wrap">
              <div className="rt-inline-flex">
                <svg
                  width="29"
                  height="29"
                  viewBox="0 0 29 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 1L1 16.6H14.5L13 27L28 11.4H14.5L16 1Z3"
                    stroke="#E0B9A0"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <div className="rt-text-style-h6">{content.essential}</div>
            </div>
            <p className="rt-highlighted-text">{content.description}</p>
            <div className="w-layout-vflex rt-full-width">
              <div className="rt-text-style-h6">{content.whatSIncluded}</div>
              <div className="w-layout-grid rt-grid-2 rt-pricing-card-v1-pricing-grid">
                <div className="w-layout-hflex rt-pricing-card-v1-icon-list-wrap">
                  <div>
                    <svg
                      width="17"
                      height="11"
                      viewBox="0 0 17 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.02574 9.93799L0.442831 8.50949C-0.0989217 8.02059 -0.151704 7.18876 0.323906 6.6353C0.795393 6.08664 1.61652 6.00947 2.18197 6.46068L3.19982 7.27287C4.40618 8.23549 6.16862 7.98175 7.21444 6.84677C10.4885 3.29359 14.571 0.867583 16.4688 0C12.9057 2.51737 9.87746 6.14203 7.81391 9.11116C6.4947 11.0093 3.74181 11.4867 2.02574 9.93799Z"
                        fill="#E0B9A0"
                      ></path>
                    </svg>
                  </div>
                  <div>{content.highQuality3dRenderings}</div>
                </div>
                <div className="w-layout-hflex rt-pricing-card-v1-icon-list-wrap">
                  <div>
                    <svg
                      width="17"
                      height="11"
                      viewBox="0 0 17 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.02574 9.93799L0.442831 8.50949C-0.0989217 8.02059 -0.151704 7.18876 0.323906 6.6353C0.795393 6.08664 1.61652 6.00947 2.18197 6.46068L3.19982 7.27287C4.40618 8.23549 6.16862 7.98175 7.21444 6.84677C10.4885 3.29359 14.571 0.867583 16.4688 0C12.9057 2.51737 9.87746 6.14203 7.81391 9.11116C6.4947 11.0093 3.74181 11.4867 2.02574 9.93799Z"
                        fill="#E0B9A0"
                      ></path>
                    </svg>
                  </div>
                  <div>{content.materialFinishSelection}</div>
                </div>
                <div className="w-layout-hflex rt-pricing-card-v1-icon-list-wrap">
                  <div>
                    <svg
                      width="17"
                      height="11"
                      viewBox="0 0 17 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.02574 9.93799L0.442831 8.50949C-0.0989217 8.02059 -0.151704 7.18876 0.323906 6.6353C0.795393 6.08664 1.61652 6.00947 2.18197 6.46068L3.19982 7.27287C4.40618 8.23549 6.16862 7.98175 7.21444 6.84677C10.4885 3.29359 14.571 0.867583 16.4688 0C12.9057 2.51737 9.87746 6.14203 7.81391 9.11116C6.4947 11.0093 3.74181 11.4867 2.02574 9.93799Z"
                        fill="#E0B9A0"
                      ></path>
                    </svg>
                  </div>
                  <div>{content.interiorSpacePlanning}</div>
                </div>
                <div className="w-layout-hflex rt-pricing-card-v1-icon-list-wrap">
                  <div>
                    <svg
                      width="17"
                      height="11"
                      viewBox="0 0 17 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.02574 9.93799L0.442831 8.50949C-0.0989217 8.02059 -0.151704 7.18876 0.323906 6.6353C0.795393 6.08664 1.61652 6.00947 2.18197 6.46068L3.19982 7.27287C4.40618 8.23549 6.16862 7.98175 7.21444 6.84677C10.4885 3.29359 14.571 0.867583 16.4688 0C12.9057 2.51737 9.87746 6.14203 7.81391 9.11116C6.4947 11.0093 3.74181 11.4867 2.02574 9.93799Z"
                        fill="#E0B9A0"
                      ></path>
                    </svg>
                  </div>
                  <div>{content.unlimitedDesignRevisions}</div>
                </div>
                <div className="w-layout-hflex rt-pricing-card-v1-icon-list-wrap">
                  <div>
                    <svg
                      width="17"
                      height="11"
                      viewBox="0 0 17 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.02574 9.93799L0.442831 8.50949C-0.0989217 8.02059 -0.151704 7.18876 0.323906 6.6353C0.795393 6.08664 1.61652 6.00947 2.18197 6.46068L3.19982 7.27287C4.40618 8.23549 6.16862 7.98175 7.21444 6.84677C10.4885 3.29359 14.571 0.867583 16.4688 0C12.9057 2.51737 9.87746 6.14203 7.81391 9.11116C6.4947 11.0093 3.74181 11.4867 2.02574 9.93799Z"
                        fill="#E0B9A0"
                      ></path>
                    </svg>
                  </div>
                  <div>{content.sustainableDesignPlanning}</div>
                </div>
              </div>
            </div>
            <div className="w-layout-hflex rt-flex-center-space-between rt-full-width">
              <div>{content.startingFrom}</div>
              <div className="rt-text-style-h3">{content.value1499}</div>
            </div>
            <div className="rt-full-width">
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
          </div>
          <div
            pricing-card="two-main"
            className="w-layout-vflex rt-pricing-card-v1 rt-pricing-card-v1-light"
          >
            <div className="w-layout-hflex rt-pricing-card-v1-icon-list-wrap">
              <div className="rt-inline-flex">
                <svg
                  width="29"
                  height="29"
                  viewBox="0 0 29 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 1L1 16.6H14.5L13 27L28 11.4H14.5L16 1Z3"
                    stroke="#2D2926"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <div className="rt-text-style-h6 rt-dark-text">
                {content.professional}
              </div>
            </div>
            <p className="rt-dark-text">{content.description2}</p>
            <div className="w-layout-vflex rt-full-width">
              <div className="rt-text-style-h6 rt-dark-text">
                {content.whatSIncluded}
              </div>
              <div className="w-layout-grid rt-grid-2 rt-pricing-card-v1-pricing-grid">
                <div className="w-layout-hflex rt-pricing-card-v1-icon-list-wrap">
                  <div>
                    <svg
                      width="17"
                      height="11"
                      viewBox="0 0 17 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.02574 9.93799L0.442831 8.50949C-0.0989217 8.02059 -0.151704 7.18876 0.323906 6.6353C0.795393 6.08664 1.61652 6.00947 2.18197 6.46068L3.19982 7.27287C4.40618 8.23549 6.16862 7.98175 7.21444 6.84677C10.4885 3.29359 14.571 0.867583 16.4688 0C12.9057 2.51737 9.87746 6.14203 7.81391 9.11116C6.4947 11.0093 3.74181 11.4867 2.02574 9.93799Z"
                        fill="#2D2926"
                      ></path>
                    </svg>
                  </div>
                  <div className="rt-dark-text">
                    {content.highQuality3dVisualizations}
                  </div>
                </div>
                <div className="w-layout-hflex rt-pricing-card-v1-icon-list-wrap">
                  <div>
                    <svg
                      width="17"
                      height="11"
                      viewBox="0 0 17 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.02574 9.93799L0.442831 8.50949C-0.0989217 8.02059 -0.151704 7.18876 0.323906 6.6353C0.795393 6.08664 1.61652 6.00947 2.18197 6.46068L3.19982 7.27287C4.40618 8.23549 6.16862 7.98175 7.21444 6.84677C10.4885 3.29359 14.571 0.867583 16.4688 0C12.9057 2.51737 9.87746 6.14203 7.81391 9.11116C6.4947 11.0093 3.74181 11.4867 2.02574 9.93799Z"
                        fill="#2D2926"
                      ></path>
                    </svg>
                  </div>
                  <div className="rt-dark-text">
                    {content.unlimitedDesignRevisions}
                  </div>
                </div>
                <div className="w-layout-hflex rt-pricing-card-v1-icon-list-wrap">
                  <div>
                    <svg
                      width="17"
                      height="11"
                      viewBox="0 0 17 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.02574 9.93799L0.442831 8.50949C-0.0989217 8.02059 -0.151704 7.18876 0.323906 6.6353C0.795393 6.08664 1.61652 6.00947 2.18197 6.46068L3.19982 7.27287C4.40618 8.23549 6.16862 7.98175 7.21444 6.84677C10.4885 3.29359 14.571 0.867583 16.4688 0C12.9057 2.51737 9.87746 6.14203 7.81391 9.11116C6.4947 11.0093 3.74181 11.4867 2.02574 9.93799Z"
                        fill="#2D2926"
                      ></path>
                    </svg>
                  </div>
                  <div className="rt-dark-text">
                    {content.interiorSpacePlanning}
                  </div>
                </div>
                <div className="w-layout-hflex rt-pricing-card-v1-icon-list-wrap">
                  <div>
                    <svg
                      width="17"
                      height="11"
                      viewBox="0 0 17 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.02574 9.93799L0.442831 8.50949C-0.0989217 8.02059 -0.151704 7.18876 0.323906 6.6353C0.795393 6.08664 1.61652 6.00947 2.18197 6.46068L3.19982 7.27287C4.40618 8.23549 6.16862 7.98175 7.21444 6.84677C10.4885 3.29359 14.571 0.867583 16.4688 0C12.9057 2.51737 9.87746 6.14203 7.81391 9.11116C6.4947 11.0093 3.74181 11.4867 2.02574 9.93799Z"
                        fill="#2D2926"
                      ></path>
                    </svg>
                  </div>
                  <div className="rt-dark-text">
                    {content.conceptSpacePlanning}
                  </div>
                </div>
                <div className="w-layout-hflex rt-pricing-card-v1-icon-list-wrap">
                  <div>
                    <svg
                      width="17"
                      height="11"
                      viewBox="0 0 17 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.02574 9.93799L0.442831 8.50949C-0.0989217 8.02059 -0.151704 7.18876 0.323906 6.6353C0.795393 6.08664 1.61652 6.00947 2.18197 6.46068L3.19982 7.27287C4.40618 8.23549 6.16862 7.98175 7.21444 6.84677C10.4885 3.29359 14.571 0.867583 16.4688 0C12.9057 2.51737 9.87746 6.14203 7.81391 9.11116C6.4947 11.0093 3.74181 11.4867 2.02574 9.93799Z"
                        fill="#2D2926"
                      ></path>
                    </svg>
                  </div>
                  <div className="rt-dark-text">
                    {content.sustainableDesignPlanning}
                  </div>
                </div>
                <div className="w-layout-hflex rt-pricing-card-v1-icon-list-wrap">
                  <div>
                    <svg
                      width="17"
                      height="11"
                      viewBox="0 0 17 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.02574 9.93799L0.442831 8.50949C-0.0989217 8.02059 -0.151704 7.18876 0.323906 6.6353C0.795393 6.08664 1.61652 6.00947 2.18197 6.46068L3.19982 7.27287C4.40618 8.23549 6.16862 7.98175 7.21444 6.84677C10.4885 3.29359 14.571 0.867583 16.4688 0C12.9057 2.51737 9.87746 6.14203 7.81391 9.11116C6.4947 11.0093 3.74181 11.4867 2.02574 9.93799Z"
                        fill="#2D2926"
                      ></path>
                    </svg>
                  </div>
                  <div className="rt-dark-text">
                    {content.detailedDesignDevelopment}
                  </div>
                </div>
                <div className="w-layout-hflex rt-pricing-card-v1-icon-list-wrap">
                  <div>
                    <svg
                      width="17"
                      height="11"
                      viewBox="0 0 17 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.02574 9.93799L0.442831 8.50949C-0.0989217 8.02059 -0.151704 7.18876 0.323906 6.6353C0.795393 6.08664 1.61652 6.00947 2.18197 6.46068L3.19982 7.27287C4.40618 8.23549 6.16862 7.98175 7.21444 6.84677C10.4885 3.29359 14.571 0.867583 16.4688 0C12.9057 2.51737 9.87746 6.14203 7.81391 9.11116C6.4947 11.0093 3.74181 11.4867 2.02574 9.93799Z"
                        fill="#2D2926"
                      ></path>
                    </svg>
                  </div>
                  <div className="rt-dark-text">
                    {content.materialFinishSelection}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-layout-hflex rt-flex-center-space-between rt-full-width">
              <div className="rt-dark-text">{content.startingFrom}</div>
              <div className="rt-text-style-h3 rt-dark-text">
                {content.value3499}
              </div>
            </div>
            <div className="rt-full-width">
              <Link
                button-wrap="main"
                href={content.letSCreateletSCreateHref}
                className="rt-navbar-btn-v1 w-variant-46c8e4e2-ab76-e08a-42a3-42c6896fa08c rt-position-relative rt-overflow-hidden w-inline-block"
              >
                <div className="rt-z-index rt-position-relative rt-overflow-hidden">
                  <div
                    button-text="letters"
                    className="rt-button-text w-variant-46c8e4e2-ab76-e08a-42a3-42c6896fa08c"
                  >
                    {content.letSCreate}
                  </div>
                  <div
                    button-text="letters-hover"
                    className="rt-button-text w-variant-46c8e4e2-ab76-e08a-42a3-42c6896fa08c rt-button-text-hover"
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
                    className="rt-navbar-btn-v1-icon w-variant-46c8e4e2-ab76-e08a-42a3-42c6896fa08c rt-hover"
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
                    className="rt-navbar-btn-v1-icon w-variant-46c8e4e2-ab76-e08a-42a3-42c6896fa08c"
                  >
                    <path
                      d="M11.5 3.88672L6.5 7.77344V4.38672H0V3.38672H6.5V0L11.5 3.88672Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <div className="rt-navbar-btn-v1-overlay w-variant-46c8e4e2-ab76-e08a-42a3-42c6896fa08c"></div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
