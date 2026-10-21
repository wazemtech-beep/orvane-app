"use client";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";

export default function PortfolioHeroSectionTop() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useRevealAnimation(sectionRef);

  const content = siteConfig.sections.portfolioHeroSectionTop;
  const projects = content.projects || [];

  return (
    <section
      className="rt-hero-section-top rt-section-gap-bottom"
      ref={sectionRef}
    >
      <div className="w-layout-blockcontainer rt-container w-container">
        <div className="w-layout-hflex rt-portfolio-main-title-wrap">
          <h1 title-top="apearance" className="rt-large-text-v1">
            {content.title}
          </h1>
          <div className="rt-border-horizental-solid rt-grid-wrap-3"></div>
          <div className="rt-grid-wrap-3">
            <p className="rt-bottom-no-gap rt-light-text">
              {content.description}
            </p>
          </div>
        </div>
        <div className="rt-wrap-top-gap-medium w-dyn-list">
          <div role="list" className="rt-portfolio-list-wrapper w-dyn-items">
            {projects.map((project, index) => {
              const isInternal = project.href.startsWith("/");
              const LinkComponent = isInternal ? Link : "a";
              return (
                <div role="listitem" className="w-dyn-item" key={index}>
                  <LinkComponent
                    aria-label={content.portfolioLinkAriaLabel || project.title}
                    href={project.href}
                    className="rt-portfolio-list-block rt-overflow-hidden rt-radius-small w-inline-block"
                  >
                    <div className="rt-portfolio-lens-wrap rt-position-relative">
                      <div>
                        <Image
                          src={project.image}
                          alt={project.imageAlt || project.title}
                          width={1536}
                          height={1152}
                          sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                        />
                      </div>
                      <div className="rt-portfolio-lens-overlay"></div>
                    </div>
                    <div className="w-layout-hflex rt-portfolio-list-title-wrap">
                      <div className="rt-text-style-h6">{project.title}</div>
                      <div className="rt-light-text">{project.location}</div>
                    </div>
                  </LinkComponent>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
