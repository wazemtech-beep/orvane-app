"use client";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";
import { useMarqueeAnimation } from "@/hooks/useMarqueeAnimation";

export default function ServiceInnovationV1() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useRevealAnimation(sectionRef);
  useMarqueeAnimation(sectionRef);

  const content = siteConfig.sections.serviceInnovationV1;
  return (
    <section
      className="rt-innovation-v1 rt-position-relative rt-overflow-hidden"
      ref={sectionRef}
    >
      <div className="rt-full-height">
        <Image
          src={content.serviceInnovationBackgroundImage}
          innovation-one="image-wrap"
          alt={content.serviceInnovationBackgroundAlt}
          className="rt-innovation-v1-image"
          width={3840}
          height={2080}
          sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
        />
      </div>
      <div className="w-layout-vflex rt-innovation-v1-wrap">
        <div
          innovation-one="marque-wrap"
          className="rt-marque-v1-wrapper rt-full-width rt-overflow-hidden"
        >
          <div
            {...{ train: "" }}
            className="rt-marque-v1-train rt-marque-v2-train"
          >
            <div className="rt-no-shrinks">
              <div className="rt-large-text">{content.innovation}</div>
            </div>
            <div className="rt-no-shrinks">
              <svg
                width="100"
                height="100"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="rt-marque-v2-icon"
              >
                <path
                  d="M50 0L53.9301 10.621C60.0072 27.0441 72.9559 39.9928 89.379 46.0699L100 50L89.379 53.9301C72.9559 60.0072 60.0072 72.9559 53.9301 89.379L50 100L46.0699 89.379C39.9928 72.9559 27.0441 60.0072 10.621 53.9301L0 50L10.621 46.0699C27.0441 39.9928 39.9928 27.0441 46.0699 10.621L50 0Z"
                  fill="#E0B9A0"
                ></path>
              </svg>
            </div>
            <div className="rt-no-shrinks">
              <div className="rt-large-text">{content.spaces}</div>
            </div>
            <div className="rt-no-shrinks">
              <svg
                width="100"
                height="100"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="rt-marque-v2-icon"
              >
                <path
                  d="M50 0L53.9301 10.621C60.0072 27.0441 72.9559 39.9928 89.379 46.0699L100 50L89.379 53.9301C72.9559 60.0072 60.0072 72.9559 53.9301 89.379L50 100L46.0699 89.379C39.9928 72.9559 27.0441 60.0072 10.621 53.9301L0 50L10.621 46.0699C27.0441 39.9928 39.9928 27.0441 46.0699 10.621L50 0Z"
                  fill="#E0B9A0"
                ></path>
              </svg>
            </div>
            <div className="rt-no-shrinks">
              <div className="rt-large-text">{content.material}</div>
            </div>
            <div className="rt-no-shrinks">
              <svg
                width="100"
                height="100"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="rt-marque-v2-icon"
              >
                <path
                  d="M50 0L53.9301 10.621C60.0072 27.0441 72.9559 39.9928 89.379 46.0699L100 50L89.379 53.9301C72.9559 60.0072 60.0072 72.9559 53.9301 89.379L50 100L46.0699 89.379C39.9928 72.9559 27.0441 60.0072 10.621 53.9301L0 50L10.621 46.0699C27.0441 39.9928 39.9928 27.0441 46.0699 10.621L50 0Z"
                  fill="#E0B9A0"
                ></path>
              </svg>
            </div>
            <div className="rt-no-shrinks">
              <div className="rt-large-text">{content.form}</div>
            </div>
            <div className="rt-no-shrinks">
              <svg
                width="100"
                height="100"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="rt-marque-v2-icon"
              >
                <path
                  d="M50 0L53.9301 10.621C60.0072 27.0441 72.9559 39.9928 89.379 46.0699L100 50L89.379 53.9301C72.9559 60.0072 60.0072 72.9559 53.9301 89.379L50 100L46.0699 89.379C39.9928 72.9559 27.0441 60.0072 10.621 53.9301L0 50L10.621 46.0699C27.0441 39.9928 39.9928 27.0441 46.0699 10.621L50 0Z"
                  fill="#E0B9A0"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="w-layout-blockcontainer rt-container rt-full-width w-container">
          <div
            innovation-one="content-wrap"
            className="w-layout-hflex rt-flex-bottom-space-between"
          >
            <div className="rt-grid-wrap-3">
              <p className="rt-highlighted-text">{content.description}</p>
            </div>
            <div className="rt-grid-wrap-4">
              <Link
                button-wrap="main"
                href={content.elegantSpaceselegantSpacesHref}
                className="rt-navbar-btn-v1 rt-position-relative rt-overflow-hidden w-inline-block"
              >
                <div className="rt-z-index rt-position-relative rt-overflow-hidden">
                  <div button-text="letters" className="rt-button-text">
                    {content.elegantSpaces}
                  </div>
                  <div
                    button-text="letters-hover"
                    className="rt-button-text rt-button-text-hover"
                  >
                    {content.elegantSpaces}
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
      </div>
    </section>
  );
}
