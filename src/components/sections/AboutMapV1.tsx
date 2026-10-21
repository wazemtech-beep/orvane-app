"use client";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";

export default function AboutMapV1() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useRevealAnimation(sectionRef);

  const content = siteConfig.sections.aboutMapV1;
  return (
    <section className="rt-map-v1 rt-section-gap-top" ref={sectionRef}>
      <div className="w-layout-blockcontainer rt-container w-container">
        <div className="rt-flex-top-space-between">
          <div className="w-layout-vflex rt-grid-wrap-3">
            <div className="rt-full-width">
              <div className="rt-sub-text">{content.eyebrow}</div>
              <h2 title={content.apearanceTitle}>{content.heading}</h2>
              <div className="w-layout-vflex rt-about-v1-list-wrap rt-wrap-top-gap-medium">
                <div
                  {...{ scroll: "fade-up" }}
                  className="rt-flex-top-space-between rt-full-width"
                >
                  <div>{content.renovation}</div>
                  <div>{content.value85}</div>
                </div>
                <div className="rt-border-horizental"></div>
                <div
                  {...{ scroll: "fade-up" }}
                  className="rt-flex-top-space-between rt-full-width"
                >
                  <div>{content.projectsWorldwide}</div>
                  <div>{content.value80}</div>
                </div>
                <div className="rt-border-horizental"></div>
                <div
                  {...{ scroll: "fade-up" }}
                  className="rt-flex-top-space-between rt-full-width"
                >
                  <div>{content.yearsOfExpertise}</div>
                  <div>{content.value15}</div>
                </div>
              </div>
            </div>
            <div className="w-layout-vflex rt-flex-gap-v1 rt-wrap-top-gap-large">
              <p {...{ text: "apearance" }} className="rt-bottom-no-gap">
                {content.description}
              </p>
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
            id="w-node-_7fcc142b-716a-1296-07f3-b552489fdf91-e01bc1b3"
            className="rt-grid-wrap-6 rt-height-stretch rt-position-relative"
          >
            <div className="rt-full-height">
              <Image
                src={content.mapImage}
                alt={content.mapAlt}
                width={1032}
                height={891}
                sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
              />
            </div>
            <div className="rt-map-pointer">
              <div map-pointer="pop-up">
                <Image
                  src={content.mapPointerImage}
                  alt={content.mapPointerAlt}
                  width={23}
                  height={28}
                  sizes="23px"
                />
              </div>
              <div
                map-pointer="one"
                className="w-layout-vflex rt-map-pointer-card flex-center-center rt-flex-gap-v3"
              >
                <div className="rt-responsive-display-none">
                  <Image
                    src={content.locationImage5Image}
                    alt={content.locationImage5Alt}
                    className="rt-radius-small"
                    width={398}
                    height={256}
                    sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                  />
                </div>
                <div className="rt-sub-text">{content.eyebrow2}</div>
              </div>
            </div>
            <div className="rt-map-pointer rt-map-pointer-1">
              <div map-pointer="pop-up">
                <Image
                  src={content.mapPointerImage}
                  alt={content.mapPointerAlt}
                  width={23}
                  height={28}
                  sizes="23px"
                />
              </div>
              <div
                map-pointer="two"
                className="w-layout-vflex rt-map-pointer-card flex-center-center rt-flex-gap-v3"
              >
                <div className="rt-responsive-display-none">
                  <Image
                    src={content.locationImage4Image}
                    alt={content.locationImage4Alt}
                    className="rt-radius-small"
                    width={398}
                    height={256}
                    sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                  />
                </div>
                <div className="rt-sub-text">{content.eyebrow3}</div>
              </div>
            </div>
            <div className="rt-map-pointer rt-map-pointer-2">
              <div map-pointer="pop-up">
                <Image
                  src={content.mapPointerImage}
                  alt={content.mapPointerAlt}
                  width={23}
                  height={28}
                  sizes="23px"
                />
              </div>
              <div
                map-pointer="three"
                className="w-layout-vflex rt-map-pointer-card flex-center-center rt-flex-gap-v3"
              >
                <div className="rt-responsive-display-none">
                  <Image
                    src={content.locationImage2Image}
                    alt={content.locationImage2Alt}
                    className="rt-radius-small"
                    width={398}
                    height={256}
                    sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                  />
                </div>
                <div className="rt-sub-text">{content.eyebrow4}</div>
              </div>
            </div>
            <div className="rt-map-pointer rt-map-pointer-3">
              <div map-pointer="pop-up">
                <Image
                  src={content.mapPointerImage}
                  alt={content.mapPointerAlt}
                  width={23}
                  height={28}
                  sizes="23px"
                />
              </div>
              <div
                map-pointer="four"
                className="w-layout-vflex rt-map-pointer-card flex-center-center rt-flex-gap-v3"
              >
                <div className="rt-responsive-display-none">
                  <Image
                    src={content.locationImage1Image}
                    alt={content.locationImage1Alt}
                    className="rt-radius-small"
                    width={398}
                    height={256}
                    sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                  />
                </div>
                <div className="rt-sub-text">{content.eyebrow5}</div>
              </div>
            </div>
            <div className="rt-map-pointer rt-map-pointer-4">
              <div map-pointer="pop-up">
                <Image
                  src={content.mapPointerImage}
                  alt={content.mapPointerAlt}
                  width={23}
                  height={28}
                  sizes="23px"
                />
              </div>
              <div
                map-pointer="five"
                className="w-layout-vflex rt-map-pointer-card flex-center-center rt-flex-gap-v3"
              >
                <div className="rt-responsive-display-none">
                  <Image
                    src={content.locationImage3Image}
                    alt={content.locationImage3Alt}
                    className="rt-radius-small"
                    width={398}
                    height={256}
                    sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                  />
                </div>
                <div className="rt-sub-text">{content.eyebrow6}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
