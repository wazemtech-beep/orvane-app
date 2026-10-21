"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";

export default function HomeSection4() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useRevealAnimation(sectionRef);

  const [activeService, setActiveService] = useState(0);
  const content = siteConfig.sections.homeSection4;
  const services = content.services || [];

  return (
    <section
      className="rt-section-gap-top-bottom rt-background-v1"
      ref={sectionRef}
    >
      <div className="w-layout-blockcontainer rt-container w-container">
        <div className="w-layout-hflex rt-flex-center-space-between">
          <div className="w-layout-vflex rt-ourservices-textcol-v1 rt-grid-wrap-5">
            <div className="rt-subtext-title-wrap">
              <div className="rt-sub-text w-variant-ab049205-3d4d-7cde-d0b2-891d5f0e5390">
                {content.ourServices}
              </div>
              <div className="w-layout-vflex rt-service-text-wrapper rt-wrap-top-gap-medium">
                {services.map((service, index) => {
                  const isActive = activeService === index;
                  return (
                    <div
                      key={index}
                      service-one="item"
                      className="rt-position-relative rt-mouse-pointer"
                      role="button"
                      tabIndex={0}
                      aria-pressed={isActive}
                      onMouseEnter={() => setActiveService(index)}
                      onFocus={() => setActiveService(index)}
                      onClick={() => setActiveService(index)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setActiveService(index);
                        }
                      }}
                      style={{
                        opacity: isActive ? 1 : 0.65,
                        transition: "opacity 0.3s ease",
                        cursor: "pointer",
                      }}
                    >
                      <h2 className="services-title">{service.title}</h2>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="w-layout-vflex rt-subtext-title-wrap rt-flex-gap-v1">
              <p {...{ text: "apearance" }} className="rt-dark-text">
                {content.description}
              </p>
              <Link
                button-wrap="main"
                href={content.viewOurWorkviewOurWorkHref}
                className="rt-navbar-btn-v1 w-variant-46c8e4e2-ab76-e08a-42a3-42c6896fa08c rt-position-relative rt-overflow-hidden w-inline-block"
              >
                <div className="rt-z-index rt-position-relative rt-overflow-hidden">
                  <div
                    button-text="letters"
                    className="rt-button-text w-variant-46c8e4e2-ab76-e08a-42a3-42c6896fa08c"
                  >
                    {content.viewOurWork}
                  </div>
                  <div
                    button-text="letters-hover"
                    className="rt-button-text w-variant-46c8e4e2-ab76-e08a-42a3-42c6896fa08c rt-button-text-hover"
                  >
                    {content.viewOurWork}
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
          <div className="rt-grid-wrap-6 rt-height-stretch rt-position-relative">
            {services.map((service, index) => {
              const isActive = activeService === index;
              return (
                <div
                  key={index}
                  service-image="item"
                  className={`rt-service-image-wrapper ${index > 0 ? "rt-service-image-absolute" : ""}`}
                  style={{
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? "scale(1)" : "scale(1.05)",
                    zIndex: isActive ? 2 : 1,
                    transition: "opacity 0.6s ease, transform 0.6s ease",
                    pointerEvents: isActive ? "auto" : "none",
                  }}
                >
                  <Image
                    src={service.image}
                    alt={service.imageAlt || service.title}
                    className="rt-service-image"
                    width={1536}
                    height={1640}
                    sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
