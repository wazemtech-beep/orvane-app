"use client";
import { useRef } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";
export default function PortfolioDreamHomesPortfolioHero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useRevealAnimation(sectionRef);

  const content = siteConfig.sections.portfolioDreamHomesPortfolioHero;
  return (
    <section
      className="rt-portfolio-hero rt-position-relative rt-overflow-hidden"
      ref={sectionRef}
    >
      <div className="rt-portfolio-hero-image-wrap">
        <Image
          src={content.dreamHomesImage}
          alt={content.dreamHomesAlt}
          width={3840}
          height={2000}
          sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
        />
        <div className="rt-portfolio-hero-overlay"></div>
      </div>
      <div className="w-layout-vflex rt-portfolio-hero-content flex-center-center rt-z-index">
        <h1 title-top="apearance" className="rt-large-text-v1">
          {content.dreamHomesAlt}
        </h1>
        <div
          title-top="apearance"
          className="w-layout-hflex rt-about-v1-icon-wrap rt-wrap-top-gap-small"
        >
          <div className="rt-inline-flex">
            <svg
              width="18"
              height="21"
              viewBox="0 0 18 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 11.4091C10.5648 11.4091 11.8333 10.188 11.8333 8.68182C11.8333 7.17559 10.5648 5.95455 9 5.95455C7.43519 5.95455 6.16667 7.17559 6.16667 8.68182C6.16667 10.188 7.43519 11.4091 9 11.4091Z"
                stroke="#E0B9A0"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M17.5 8.68182C17.5 15.0455 9 20.5 9 20.5C9 20.5 0.5 15.0455 0.5 8.68182C0.5 6.51187 1.39553 4.43079 2.98959 2.8964C4.58365 1.36201 6.74566 0.5 9 0.5C11.2543 0.5 13.4163 1.36201 15.0104 2.8964C16.6045 4.43079 17.5 6.51187 17.5 8.68182Z"
                stroke="#E0B9A0"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </div>
          <div className="rt-text-style-h4">{content.newportBeachCa}</div>
        </div>
      </div>
    </section>
  );
}
