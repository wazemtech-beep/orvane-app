"use client";
import { useRef } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { useMarqueeAnimation } from "@/hooks/useMarqueeAnimation";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";

export default function AboutClientsV1() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useMarqueeAnimation(sectionRef);
  useRevealAnimation(sectionRef);

  const content = siteConfig.sections.aboutClientsV1;
  return (
    <section className="rt-clients-v1" ref={sectionRef}>
      <div className="w-layout-blockcontainer rt-container w-container">
        <div className="w-layout-hflex flex-center-center rt-between-gaps">
          <div className="rt-border-horizental rt-border-horizental-v2"></div>
          <div className="rt-sub-text rt-text-center">
            {content.trustedByIndustryLeaders}
          </div>
          <div className="rt-border-horizental rt-border-horizental-v2"></div>
        </div>
        <div className="rt-marque-v1-wrapper rt-full-width rt-wrap-top-gap-medium rt-overflow-hidden">
          <div {...{ train: "" }} className="rt-marque-v1-train">
            <div className="rt-no-shrinks">
              <Image
                src={content.clientLogo1Image}
                alt={content.clientLogo1Alt}
                width={130}
                height={29}
                sizes="130px"
              />
            </div>
            <div className="rt-no-shrinks">
              <Image
                src={content.clientLogo2Image}
                alt={content.clientLogo2Alt}
                width={76}
                height={38}
                sizes="76px"
              />
            </div>
            <div className="rt-no-shrinks">
              <Image
                src={content.clientLogo3Image}
                alt={content.clientLogo3Alt}
                width={119}
                height={39}
                sizes="119px"
              />
            </div>
            <div className="rt-no-shrinks">
              <Image
                src={content.clientLogo6Image}
                alt={content.clientLogo6Alt}
                width={118}
                height={30}
                sizes="118px"
              />
            </div>
            <div className="rt-no-shrinks">
              <Image
                src={content.clientLogo5Image}
                alt={content.clientLogo5Alt}
                width={58}
                height={51}
                sizes="58px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
