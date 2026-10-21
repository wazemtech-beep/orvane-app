"use client";
import { useRef } from "react";

import { siteConfig } from "@/data/siteConfig";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";
export default function PricingSection1() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useRevealAnimation(sectionRef);

  const content = siteConfig.sections.pricingSection1;
  return (
    <section className="rt-section-gap-bottom" ref={sectionRef}>
      <div className="w-layout-blockcontainer rt-container w-container">
        <div className="w-layout-vflex rt-responsive-flex-center rt-grid-wrap-5">
          <div className="rt-sub-text">{content.eyebrow}</div>
          <h2 title={content.apearanceTitle} className="rt-bottom-no-gap">
            {content.heading}
          </h2>
        </div>
        <div
          data-w-id="cba40c21-3482-6a3f-785a-7a60f1001c6c"
          className="rt-pricing-v3-table rt-wrap-top-gap-medium"
          data-motion="pricingSection1-rtPricingV3Table"
        >
          <div className="rt-pricing-v3-row-content rt-pricing-v3-top">
            <div className="rt-pricing-v2-table-heading">
              <div className="rt-text-style-h6">{content.features}</div>
            </div>
            <div className="rt-pricing-v2-grid">
              <div className="rt-pricing-v3-plan-box">
                <div className="rt-text-style-h6 rt-text-center">
                  {content.essentialPlan}
                </div>
              </div>
              <div className="rt-pricing-v3-plan-box">
                <div className="rt-text-style-h6 rt-text-center">
                  {content.professionalPlan}
                </div>
              </div>
              <div className="rt-pricing-v3-plan-box">
                <div className="rt-text-style-h6 rt-text-center">
                  {content.signaturePlan}
                </div>
              </div>
            </div>
          </div>
          <div className="rt-pricing-v3-row-content">
            <div className="rt-pricing-v2-table-heading">
              <p className="rt-bottom-no-gap">{content.description}</p>
            </div>
            <div className="rt-pricing-v2-grid">
              <div className="rt-pricing-v3-plan-box">
                <div className="rt-inline-flex">
                  <svg
                    width="17"
                    height="14"
                    viewBox="0 0 17 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16.7805 2.1143L5.5935 13.3906L0 7.75243L2.09756 5.63813L5.5935 9.16196L14.6829 0L16.7805 2.1143Z"
                      fill="#E0B9A0"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="rt-pricing-v3-plan-box width">
                <svg
                  width="17"
                  height="14"
                  viewBox="0 0 17 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.7805 2.1143L5.5935 13.3906L0 7.75243L2.09756 5.63813L5.5935 9.16196L14.6829 0L16.7805 2.1143Z"
                    fill="#E0B9A0"
                  ></path>
                </svg>
              </div>
              <div className="rt-pricing-v3-plan-box width">
                <svg
                  width="17"
                  height="14"
                  viewBox="0 0 17 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.7805 2.1143L5.5935 13.3906L0 7.75243L2.09756 5.63813L5.5935 9.16196L14.6829 0L16.7805 2.1143Z"
                    fill="#E0B9A0"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="rt-pricing-v3-row-content">
            <div className="rt-pricing-v2-table-heading">
              <p className="rt-bottom-no-gap">{content.description2}</p>
            </div>
            <div className="rt-pricing-v2-grid">
              <div className="rt-pricing-v3-plan-box width">
                <svg
                  width="17"
                  height="14"
                  viewBox="0 0 17 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.7805 2.1143L5.5935 13.3906L0 7.75243L2.09756 5.63813L5.5935 9.16196L14.6829 0L16.7805 2.1143Z"
                    fill="#E0B9A0"
                  ></path>
                </svg>
              </div>
              <div className="rt-pricing-v3-plan-box">
                <svg
                  width="17"
                  height="14"
                  viewBox="0 0 17 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.7805 2.1143L5.5935 13.3906L0 7.75243L2.09756 5.63813L5.5935 9.16196L14.6829 0L16.7805 2.1143Z"
                    fill="#E0B9A0"
                  ></path>
                </svg>
              </div>
              <div className="rt-pricing-v3-plan-box width">
                <svg
                  width="17"
                  height="14"
                  viewBox="0 0 17 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.7805 2.1143L5.5935 13.3906L0 7.75243L2.09756 5.63813L5.5935 9.16196L14.6829 0L16.7805 2.1143Z"
                    fill="#E0B9A0"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="rt-pricing-v3-row-content">
            <div className="rt-pricing-v2-table-heading">
              <p className="rt-bottom-no-gap">{content.description3}</p>
            </div>
            <div className="rt-pricing-v2-grid">
              <div className="rt-pricing-v3-plan-box width">
                <svg
                  width="17"
                  height="14"
                  viewBox="0 0 17 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.7805 2.1143L5.5935 13.3906L0 7.75243L2.09756 5.63813L5.5935 9.16196L14.6829 0L16.7805 2.1143Z"
                    fill="#E0B9A0"
                  ></path>
                </svg>
              </div>
              <div className="rt-pricing-v3-plan-box width">
                <svg
                  width="17"
                  height="14"
                  viewBox="0 0 17 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.7805 2.1143L5.5935 13.3906L0 7.75243L2.09756 5.63813L5.5935 9.16196L14.6829 0L16.7805 2.1143Z"
                    fill="#E0B9A0"
                  ></path>
                </svg>
              </div>
              <div className="rt-pricing-v3-plan-box width">
                <svg
                  width="17"
                  height="14"
                  viewBox="0 0 17 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.7805 2.1143L5.5935 13.3906L0 7.75243L2.09756 5.63813L5.5935 9.16196L14.6829 0L16.7805 2.1143Z"
                    fill="#E0B9A0"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="rt-pricing-v3-row-content">
            <div className="rt-pricing-v2-table-heading">
              <p className="rt-bottom-no-gap">{content.description4}</p>
            </div>
            <div className="rt-pricing-v2-grid">
              <div className="rt-pricing-v3-plan-box width">
                <div className="rt-inline-flex">
                  <svg
                    width="17"
                    height="14"
                    viewBox="0 0 17 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16.7805 2.1143L5.5935 13.3906L0 7.75243L2.09756 5.63813L5.5935 9.16196L14.6829 0L16.7805 2.1143Z"
                      fill="#E0B9A0"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="rt-pricing-v3-plan-box width">
                <div className="rt-inline-flex">
                  <svg
                    width="17"
                    height="14"
                    viewBox="0 0 17 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16.7805 2.1143L5.5935 13.3906L0 7.75243L2.09756 5.63813L5.5935 9.16196L14.6829 0L16.7805 2.1143Z"
                      fill="#E0B9A0"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="rt-pricing-v3-plan-box width">
                <svg
                  width="17"
                  height="14"
                  viewBox="0 0 17 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.7805 2.1143L5.5935 13.3906L0 7.75243L2.09756 5.63813L5.5935 9.16196L14.6829 0L16.7805 2.1143Z"
                    fill="#E0B9A0"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="rt-pricing-v3-row-content">
            <div className="rt-pricing-v2-table-heading rt-landscape-text-center">
              <p className="rt-bottom-no-gap">{content.description5}</p>
            </div>
            <div className="rt-pricing-v2-grid">
              <div className="rt-pricing-v3-plan-box width">
                <svg
                  width="17"
                  height="14"
                  viewBox="0 0 17 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.7805 2.1143L5.5935 13.3906L0 7.75243L2.09756 5.63813L5.5935 9.16196L14.6829 0L16.7805 2.1143Z"
                    fill="#E0B9A0"
                  ></path>
                </svg>
              </div>
              <div
                id="w-node-cba40c21-3482-6a3f-785a-7a60f1001cc3-e01bc1c1"
                className="rt-pricing-v3-plan-box width"
              >
                <svg
                  width="17"
                  height="14"
                  viewBox="0 0 17 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.7805 2.1143L5.5935 13.3906L0 7.75243L2.09756 5.63813L5.5935 9.16196L14.6829 0L16.7805 2.1143Z"
                    fill="#E0B9A0"
                  ></path>
                </svg>
              </div>
              <div className="rt-pricing-v3-plan-box width">
                <svg
                  width="17"
                  height="14"
                  viewBox="0 0 17 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.7805 2.1143L5.5935 13.3906L0 7.75243L2.09756 5.63813L5.5935 9.16196L14.6829 0L16.7805 2.1143Z"
                    fill="#E0B9A0"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="rt-pricing-v3-row-content">
            <div className="rt-pricing-v2-table-heading">
              <p className="rt-bottom-no-gap">{content.description6}</p>
            </div>
            <div className="rt-pricing-v2-grid">
              <div className="rt-pricing-v3-plan-box width">
                <div className="rt-inline-flex">
                  <svg
                    width="23"
                    height="2"
                    viewBox="0 0 23 2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g {...{ opacity: "0.4" }}>
                      <path
                        d="M0 1H5.2439"
                        stroke="#E0B9A0"
                        strokeWidth="2"
                      ></path>
                      <path
                        d="M8.39062 1H13.6345"
                        stroke="#E0B9A0"
                        strokeWidth="2"
                      ></path>
                      <path
                        d="M16.7812 1H22.0252"
                        stroke="#E0B9A0"
                        strokeWidth="2"
                      ></path>
                    </g>
                  </svg>
                </div>
              </div>
              <div className="rt-pricing-v3-plan-box width">
                <svg
                  width="17"
                  height="14"
                  viewBox="0 0 17 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.7805 2.1143L5.5935 13.3906L0 7.75243L2.09756 5.63813L5.5935 9.16196L14.6829 0L16.7805 2.1143Z"
                    fill="#E0B9A0"
                  ></path>
                </svg>
              </div>
              <div className="rt-pricing-v3-plan-box width">
                <svg
                  width="17"
                  height="14"
                  viewBox="0 0 17 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.7805 2.1143L5.5935 13.3906L0 7.75243L2.09756 5.63813L5.5935 9.16196L14.6829 0L16.7805 2.1143Z"
                    fill="#E0B9A0"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="rt-pricing-v3-row-content">
            <div className="rt-pricing-v2-table-heading">
              <p className="rt-bottom-no-gap">{content.description7}</p>
            </div>
            <div className="rt-pricing-v2-grid">
              <div className="rt-pricing-v3-plan-box width">
                <div className="rt-inline-flex">
                  <svg
                    width="23"
                    height="2"
                    viewBox="0 0 23 2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g {...{ opacity: "0.4" }}>
                      <path
                        d="M0 1H5.2439"
                        stroke="#E0B9A0"
                        strokeWidth="2"
                      ></path>
                      <path
                        d="M8.39062 1H13.6345"
                        stroke="#E0B9A0"
                        strokeWidth="2"
                      ></path>
                      <path
                        d="M16.7812 1H22.0252"
                        stroke="#E0B9A0"
                        strokeWidth="2"
                      ></path>
                    </g>
                  </svg>
                </div>
              </div>
              <div className="rt-pricing-v3-plan-box width">
                <div className="rt-inline-flex">
                  <svg
                    width="17"
                    height="14"
                    viewBox="0 0 17 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16.7805 2.1143L5.5935 13.3906L0 7.75243L2.09756 5.63813L5.5935 9.16196L14.6829 0L16.7805 2.1143Z"
                      fill="#E0B9A0"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="rt-pricing-v3-plan-box width">
                <svg
                  width="17"
                  height="14"
                  viewBox="0 0 17 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.7805 2.1143L5.5935 13.3906L0 7.75243L2.09756 5.63813L5.5935 9.16196L14.6829 0L16.7805 2.1143Z"
                    fill="#E0B9A0"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="rt-pricing-v3-row-content">
            <div className="rt-pricing-v2-table-heading">
              <p className="rt-bottom-no-gap">{content.description8}</p>
            </div>
            <div className="rt-pricing-v2-grid">
              <div className="rt-pricing-v3-plan-box width">
                <div className="rt-inline-flex">
                  <svg
                    width="23"
                    height="2"
                    viewBox="0 0 23 2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g {...{ opacity: "0.4" }}>
                      <path
                        d="M0 1H5.2439"
                        stroke="#E0B9A0"
                        strokeWidth="2"
                      ></path>
                      <path
                        d="M8.39062 1H13.6345"
                        stroke="#E0B9A0"
                        strokeWidth="2"
                      ></path>
                      <path
                        d="M16.7812 1H22.0252"
                        stroke="#E0B9A0"
                        strokeWidth="2"
                      ></path>
                    </g>
                  </svg>
                </div>
              </div>
              <div className="rt-pricing-v3-plan-box width">
                <div className="rt-inline-flex">
                  <svg
                    width="23"
                    height="2"
                    viewBox="0 0 23 2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g {...{ opacity: "0.4" }}>
                      <path
                        d="M0 1H5.2439"
                        stroke="#E0B9A0"
                        strokeWidth="2"
                      ></path>
                      <path
                        d="M8.39062 1H13.6345"
                        stroke="#E0B9A0"
                        strokeWidth="2"
                      ></path>
                      <path
                        d="M16.7812 1H22.0252"
                        stroke="#E0B9A0"
                        strokeWidth="2"
                      ></path>
                    </g>
                  </svg>
                </div>
              </div>
              <div className="rt-pricing-v3-plan-box width">
                <svg
                  width="17"
                  height="14"
                  viewBox="0 0 17 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.7805 2.1143L5.5935 13.3906L0 7.75243L2.09756 5.63813L5.5935 9.16196L14.6829 0L16.7805 2.1143Z"
                    fill="#E0B9A0"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="rt-pricing-v3-row-content">
            <div className="rt-pricing-v2-table-heading"></div>
            <div className="rt-pricing-v2-grid">
              <div className="rt-pricing-v3-plan-box rt-pricew-v3-price-wrap">
                <div className="rt-text-style-h3">{content.value1499}</div>
                <div>{content.onwards}</div>
              </div>
              <div className="rt-pricing-v3-plan-box rt-pricew-v3-price-wrap">
                <div className="rt-text-style-h3">{content.value3499}</div>
                <div>{content.onwards}</div>
              </div>
              <div className="rt-pricing-v3-plan-box rt-pricew-v3-price-wrap">
                <div className="rt-text-style-h3">{content.value6999}</div>
                <div>{content.onwards}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
