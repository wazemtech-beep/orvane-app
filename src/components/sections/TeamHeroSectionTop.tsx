"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";

export default function TeamHeroSectionTop() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useRevealAnimation(sectionRef);

  const [activeMember, setActiveMember] = useState<number | null>(null);
  const content = siteConfig.sections.teamHeroSectionTop;
  const members = content.members || [];

  return (
    <section
      className="rt-hero-section-top rt-section-gap-bottom"
      ref={sectionRef}
    >
      <div className="w-layout-blockcontainer rt-container w-container">
        <div className="rt-grid-wrap-6 rt-margin-auto rt-text-center">
          <h1 title-top="apearance" className="rt-top-no-gap rt-large-text-v1">
            {content.title}
          </h1>
          <div className="rt-grid-wrap-4 rt-margin-auto">
            <p className="rt-wrap-top-gap-small">{content.description}</p>
          </div>
        </div>
        <div className="w-dyn-list">
          <div
            role="list"
            className="rt-team-grid rt-wrap-top-gap-medium w-dyn-items"
          >
            {members.map((member, index) => {
              const isOpen = activeMember === index;
              return (
                <div role="listitem" className="w-dyn-item" key={index}>
                  <div
                    team-card="hover-effect"
                    className="rt-team-v1-card-inner rt-overflow-hidden rt-position-relative rt-team-v1-card-inner-v2"
                  >
                    <div
                      className="w-layout-hflex rt-team-v1-card-button"
                      role="button"
                      tabIndex={0}
                      aria-expanded={isOpen}
                      aria-label={`Toggle info for ${member.name}`}
                      onClick={() => setActiveMember(isOpen ? null : index)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setActiveMember(isOpen ? null : index);
                        }
                      }}
                      style={{
                        transform: isOpen ? "rotate(135deg)" : "rotate(0deg)",
                        backgroundColor: isOpen ? "#E0B9A0" : "#2D2926",
                        color: isOpen ? "#2D2926" : "#E0B9A0",
                        transition:
                          "transform 0.4s ease, background-color 0.4s ease, color 0.4s ease",
                        cursor: "pointer",
                      }}
                    >
                      <svg
                        width="8"
                        {...{ hright: "8" }}
                        viewBox="0 0 8 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.875 0V7.75M0 3.875H7.75"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <div className="rt-team-v1-card-image">
                      <Image
                        src={member.image}
                        team-card="image"
                        alt={member.imageAlt || member.name}
                        className="rt-team-main-image-v2"
                        width={1008}
                        height={1168}
                        sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                      />
                    </div>
                    <div
                      team-card="blur-overlay"
                      className="rt-team-v1-card-overlay-blur"
                      style={{
                        opacity: isOpen ? 1 : 0,
                        transform: isOpen ? "scale(1)" : "scale(0.4)",
                        transformOrigin: "top right",
                        transition: "transform 0.5s ease, opacity 0.5s ease",
                        pointerEvents: isOpen ? "auto" : "none",
                      }}
                    ></div>
                    <a
                      aria-label={member.name}
                      team-card="content-wrap"
                      href={member.href}
                      className="rt-team-v1-card-overlay-content rt-team-v1-card-overlay-content-v2 w-inline-block"
                      style={{
                        opacity: isOpen ? 1 : 0,
                        transform: isOpen
                          ? "translateY(0)"
                          : "translateY(40px)",
                        transition: "transform 0.5s ease, opacity 0.5s ease",
                        pointerEvents: isOpen ? "auto" : "none",
                      }}
                    >
                      <div className="rt-team-v1-card-name-wrap rt-text-center">
                        <div className="rt-text-style-h5 rt-text-white">
                          {member.name}
                        </div>
                        <div className="rt-text-white">{member.role}</div>
                      </div>
                      <p className="rt-text-white rt-text-center">
                        {member.description}
                      </p>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
