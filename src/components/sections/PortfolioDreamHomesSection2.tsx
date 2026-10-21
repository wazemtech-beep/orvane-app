"use client";
import { useRef } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";
export default function PortfolioDreamHomesSection2() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useRevealAnimation(sectionRef);

  const content = siteConfig.sections.portfolioDreamHomesSection2;
  return (
    <section className="rt-section-gap-bottom" ref={sectionRef}>
      <div className="w-layout-blockcontainer rt-container w-container">
        <h2 className="rt-top-no-gap">{content.heading}</h2>
        <div className="w-dyn-list">
          <div
            role="list"
            className="rt-portfolio-list-wrapper rt-portfolio-list-wrapper-v2 w-dyn-items"
          >
            <div role="listitem" className="w-dyn-item">
              <a
                aria-label={content.portfolioImageAriaLabel}
                {...{ scroll: "fade-up" }}
                href={content.greenLivingAreasantaMonicaCaHref}
                className="rt-portfolio-list-block rt-overflow-hidden rt-radius-small w-inline-block"
              >
                <div className="rt-portfolio-lens-wrap rt-position-relative">
                  <div>
                    <Image
                      src={content.portfolioThumbnail1Image}
                      alt={content.Alt}
                      width={1536}
                      height={1152}
                      sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                    />
                  </div>
                  <div className="rt-portfolio-lens-overlay"></div>
                </div>
                <div className="w-layout-hflex rt-portfolio-list-title-wrap">
                  <div className="rt-text-style-h6">
                    {content.greenLivingArea}
                  </div>
                  <div className="rt-light-text">{content.santaMonicaCa}</div>
                </div>
              </a>
            </div>
            <div role="listitem" className="w-dyn-item">
              <a
                aria-label={content.portfolioImageAriaLabel}
                {...{ scroll: "fade-up" }}
                href={content.waitingArealongBeachCaHref}
                className="rt-portfolio-list-block rt-overflow-hidden rt-radius-small w-inline-block"
              >
                <div className="rt-portfolio-lens-wrap rt-position-relative">
                  <div>
                    <Image
                      src={content.portfolioThumbnail2Image}
                      alt={content.Alt}
                      width={1536}
                      height={1152}
                      sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                    />
                  </div>
                  <div className="rt-portfolio-lens-overlay"></div>
                </div>
                <div className="w-layout-hflex rt-portfolio-list-title-wrap">
                  <div className="rt-text-style-h6">{content.waitingArea}</div>
                  <div className="rt-light-text">{content.longBeachCa}</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
