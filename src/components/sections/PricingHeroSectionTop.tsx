"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";

export default function PricingHeroSectionTop() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useRevealAnimation(sectionRef);

  const [isYearly, setIsYearly] = useState(false);
  const content = siteConfig.sections.pricingHeroSectionTop;
  const plans = content.plans || [];

  return (
    <section
      className="rt-hero-section-top rt-section-gap-bottom"
      ref={sectionRef}
    >
      <div className="w-layout-blockcontainer rt-container w-container">
        <div className="rt-pricepg-header-v1">
          <h1 title-top="apearance" className="rt-large-text-v1">
            {content.title}
          </h1>
          <div className="w-layout-vflex rt-grid-wrap-4 rt-margin-auto rt-wrap-top-gap-small flex-center-center">
            <div className="w-layout-hflex rt-price-tag-flex-wrap">
              <div
                price-text="monthly"
                className="rt-sub-text"
                style={{
                  opacity: isYearly ? 0.5 : 1,
                  transition: "opacity 0.3s ease",
                }}
              >
                {content.eyebrow}
              </div>
              <div
                {...{ pricing: "toggle" }}
                className="rt-pricing-toggle"
                role="switch"
                aria-checked={isYearly}
                aria-label="Toggle monthly or yearly billing"
                tabIndex={0}
                onClick={() => setIsYearly(!isYearly)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setIsYearly(!isYearly);
                  }
                }}
                style={{ cursor: "pointer" }}
              >
                <div
                  {...{ toggle: "monthly" }}
                  className="rt-pricing-toggle-in"
                  style={{
                    transform: isYearly ? "translateX(100%)" : "translateX(0%)",
                    transition: "transform 0.35s ease",
                  }}
                ></div>
                <div
                  {...{ toggle: "yearly" }}
                  className="w-layout-hflex rt-pricing-toggle-in"
                  style={{
                    transform: isYearly
                      ? "translateX(0%)"
                      : "translateX(-100%)",
                    transition: "transform 0.35s ease",
                  }}
                ></div>
              </div>
              <div
                price-text="yearly"
                className="rt-sub-text"
                style={{
                  opacity: isYearly ? 1 : 0.5,
                  transition: "opacity 0.3s ease",
                }}
              >
                {content.eyebrow2}
              </div>
            </div>
            <p>{content.description}</p>
          </div>
        </div>
        <div className="rt-pricing-v2-card-wrap rt-wrap-top-gap-medium">
          {plans.map((plan, index) => {
            const isPopular = plan.isPopular;
            return (
              <div
                key={index}
                {...{ top: "fade-in" }}
                id={plan.nodeId}
                className={`rt-price-card-v2 ${isPopular ? "rt-price-card-v2-light rt-position-relative" : ""}`}
              >
                <div
                  className={`w-layout-vflex rt-price-wrap-side-gap rt-flex-gap-v3 ${isPopular ? "rt-position-relative" : ""}`}
                >
                  <div
                    className={`rt-text-style-h6 ${isPopular ? "rt-dark-text" : ""}`}
                  >
                    {plan.name}
                  </div>
                  <p className={isPopular ? "rt-dark-text" : "rt-light-text"}>
                    {plan.description}
                  </p>
                </div>
                <div className="rt-border-horizental-no-animation rt-wrap-top-gap-small"></div>
                <div className="w-layout-vflex rt-pricepg-toprow-v1">
                  <div className="rt-flex-center-space-between rt-full-width">
                    <div className="rt-position-relative">
                      <div
                        {...{ price: "monthly" }}
                        className="rt-price-monthly"
                        style={{
                          opacity: isYearly ? 0 : 1,
                          pointerEvents: isYearly ? "none" : "auto",
                          transition: "opacity 0.3s ease",
                        }}
                      >
                        <div
                          className={`rt-text-style-h3 ${isPopular ? "rt-dark-text" : ""}`}
                        >
                          {plan.monthlyPrice}
                        </div>
                      </div>
                      <div
                        {...{ price: "yearly" }}
                        className="rt-price-yearly"
                        style={{
                          opacity: isYearly ? 1 : 0,
                          pointerEvents: isYearly ? "auto" : "none",
                          transition: "opacity 0.3s ease",
                        }}
                      >
                        <div
                          className={`rt-text-style-h3 ${isPopular ? "rt-dark-text" : ""}`}
                        >
                          {plan.yearlyPrice}
                        </div>
                      </div>
                    </div>
                    <div
                      className={
                        isPopular ? "rt-dark-text" : "rt-highlighted-text"
                      }
                    >
                      {plan.startingFrom}
                    </div>
                  </div>
                  <div className="rt-full-width">
                    <Link
                      button-wrap="main"
                      href={plan.selectPlanHref || "/contact"}
                      className={`rt-navbar-btn-v1 ${isPopular ? "w-variant-46c8e4e2-ab76-e08a-42a3-42c6896fa08c" : ""} rt-position-relative rt-overflow-hidden w-inline-block`}
                    >
                      <div className="rt-z-index rt-position-relative rt-overflow-hidden">
                        <div
                          button-text="letters"
                          className={`rt-button-text ${isPopular ? "w-variant-46c8e4e2-ab76-e08a-42a3-42c6896fa08c" : ""}`}
                        >
                          {plan.selectPlan}
                        </div>
                        <div
                          button-text="letters-hover"
                          className={`rt-button-text ${isPopular ? "w-variant-46c8e4e2-ab76-e08a-42a3-42c6896fa08c" : ""} rt-button-text-hover`}
                        >
                          {plan.selectPlan}
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
                          className={`rt-navbar-btn-v1-icon ${isPopular ? "w-variant-46c8e4e2-ab76-e08a-42a3-42c6896fa08c" : ""} rt-hover`}
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
                          className={`rt-navbar-btn-v1-icon ${isPopular ? "w-variant-46c8e4e2-ab76-e08a-42a3-42c6896fa08c" : ""}`}
                        >
                          <path
                            d="M11.5 3.88672L6.5 7.77344V4.38672H0V3.38672H6.5V0L11.5 3.88672Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </div>
                      <div
                        className={`rt-navbar-btn-v1-overlay ${isPopular ? "w-variant-46c8e4e2-ab76-e08a-42a3-42c6896fa08c" : ""}`}
                      ></div>
                    </Link>
                  </div>
                  <div className="rt-pricepg-checklist-v1">
                    {(plan.features || []).map(
                      (feature: string, fIdx: number) => (
                        <div
                          key={fIdx}
                          className="w-layout-hflex rt-pricing-card-v1-icon-list-wrap"
                        >
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
                                fill={isPopular ? "#2d2926" : "#E0B9A0"}
                              ></path>
                            </svg>
                          </div>
                          <div className={isPopular ? "rt-dark-text" : ""}>
                            {feature}
                          </div>
                        </div>
                      ),
                    )}
                  </div>
                </div>
                <div className="rt-border-horizental"></div>
                <div className="rt-price-wrap-side-gap rt-wrap-top-gap-small">
                  <p
                    className={`${isPopular ? "rt-dark-text" : "rt-light-text"} rt-bottom-no-gap`}
                  >
                    {plan.note}
                  </p>
                </div>
                {isPopular && plan.popularBadgeImage && (
                  <div className="rt-price-popular-tag">
                    <Image
                      src={plan.popularBadgeImage}
                      alt={plan.popularBadgeAlt || "price-popular-tag"}
                      width={100}
                      height={30}
                      sizes="100px"
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
