"use client";
import { useRef } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";
export default function ContactSection1() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useRevealAnimation(sectionRef);

  const content = siteConfig.sections.contactSection1;
  return (
    <section className="rt-section-gap-bottom" ref={sectionRef}>
      <div className="w-layout-blockcontainer rt-container w-container">
        <div>
          <div className="rt-image-wrapper rt-overflow-hidden rt-full-height">
            <Image
              src={content.contactMainImageImage}
              alt={content.contactMainImageAlt}
              className="rt-image"
              width={3120}
              height={1558}
              sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
            />
          </div>
        </div>
        <div className="rt-flex-center-space-between rt-wrap-top-gap-small">
          <div
            {...{ scroll: "fade-up" }}
            className="w-layout-vflex rt-grid-wrap-3 rt-wrap-top-gap-medium rt-flex-gap-v3"
          >
            <div className="rt-text-style-h5">{content.letSConnect}</div>
            <p>{content.description}</p>
            <a
              href={content.value8881234567Href}
              className="rt-text-style-h6 rt-scoial-link-contact"
            >
              {content.value8881234567}
            </a>
            <a
              href={content.infoExampleComHref}
              className="rt-text-style-h6 rt-scoial-link-contact"
            >
              {content.infoExampleCom}
            </a>
          </div>
          <div
            {...{ scroll: "fade-up" }}
            className="w-layout-vflex rt-flex-gap-v3"
          >
            <div className="rt-text-style-h5">{content.followUs}</div>
            <div>
              <a
                href={content.instagramHref}
                className="rt-scoial-link-contact"
              >
                <span>{content.instagram}</span>
              </a>
              <span> </span>
              {content.text}
              <a href={content.linkedinHref} className="rt-scoial-link-contact">
                {content.linkedin}
              </a>
              {content.text2}
              <a href={content.facebookHref} className="rt-scoial-link-contact">
                {content.facebook}
              </a>
              {content.text2}
              <a href={content.xHref} className="rt-scoial-link-contact">
                {content.x}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
