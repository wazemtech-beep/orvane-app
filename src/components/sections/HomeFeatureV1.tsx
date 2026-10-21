"use client";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";

export default function HomeFeatureV1() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useRevealAnimation(sectionRef);

  const content = siteConfig.sections.homeFeatureV1;
  return (
    <section className="rt-feature-v1 rt-position-relative" ref={sectionRef}>
      <div className="rt-feature-v1-image-wrap rt-position-relative rt-overflow-hidden rt-full-height">
        <Image
          src={content.homeOneBuildImage}
          alt={content.homeOneBuildAlt}
          className="image"
          width={960}
          height={920}
          sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
        />
        <div className="w-layout-hflex rt-feature-v1-text-wrap flex-center-center">
          <div className="w-layout-blockcontainer rt-container rt-full-width w-container">
            <Link
              features-one="card-block"
              href={content.residentialcustomHomeDesignsitePlanHref}
              className="rt-feature-v1-block rt-grid-wrap-8 rt-margin-auto rt-flex-center-space-between w-inline-block"
            >
              <div
                hero-one-card="card-one-block"
                className="w-layout-vflex rt-feature-v1-text-block-wraper rt-grid-wrap-2 rt-flex-gap-v1"
              >
                <div>
                  <Image
                    src={content.showcaseIconImage}
                    alt={content.showcaseIconAlt}
                    width={43}
                    height={41}
                    sizes="43px"
                  />
                </div>
                <div className="w-layout-vflex rt-flex-gap-v1">
                  <div className="rt-text-style-h5 rt-dark-text">
                    {content.residential}
                  </div>
                  <p className="rt-bottom-no-gap rt-dark-text">
                    {content.description}
                    <br />
                    {content.description2}
                    <br />
                    {content.description3}
                  </p>
                </div>
              </div>
              <div
                features-one="image-wrap"
                className="rt-height-stretch rt-grid-wrap-3"
              >
                <Image
                  src={content.showcaseImageSmallImage}
                  alt={content.showcaseImageSmallAlt}
                  className="rt-radius-small"
                  width={596}
                  height={418}
                  sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                />
              </div>
              <div
                hero-one-card="card-one-block"
                className="w-layout-vflex rt-feature-v1-text-block-wraper rt-grid-wrap-3 rt-flex-gap-v1"
              >
                <p className="rt-bottom-no-gap rt-dark-text">
                  {content.description4}
                </p>
                <div>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 70 70"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="69.0273"
                      rx="34.5129"
                      {...{ transform: "rotate(90 69.0273 0)" }}
                      fill="#2D2926"
                    ></rect>
                    <path
                      d="M28.4214 27.7779L41.4068 42.0513M41.8952 31.7153L41.5316 32.7255C40.4492 35.7328 40.4052 39.0161 41.4068 42.0513C38.4796 40.768 35.2068 40.5021 32.1109 41.2962L31.0709 41.5629"
                      stroke="#fff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
