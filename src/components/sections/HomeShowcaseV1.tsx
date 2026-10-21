"use client";
import { useRef } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";
import { useMarqueeAnimation } from "@/hooks/useMarqueeAnimation";

export default function HomeShowcaseV1() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useRevealAnimation(sectionRef);
  useMarqueeAnimation(sectionRef);

  const content = siteConfig.sections.homeShowcaseV1;
  return (
    <section
      className="rt-showcase-v1 rt-z-index rt-overflow-hidden rt-background-v1"
      ref={sectionRef}
    >
      <div className="w-layout-blockcontainer rt-container rt-full-height w-container">
        <div className="w-layout-vflex rt-showcase-v1-wrapper rt-position-relative">
          <div
            showcase-one="main-image"
            className="rt-z-index rt-grid-wrap-3 rt-no-shrinks"
          >
            <Image
              src={content.heroOneBannerBottomImageImage}
              alt={content.heroOneBannerBottomImageAlt}
              className="rt-radius-small"
              width={632}
              height={400}
              sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
            />
          </div>
          <div className="rt-grid-wrap-6 rt-text-center rt-no-shrinks rt-z-index">
            <h2 showcase-one="content" className="rt-dark-text">
              {content.heading}
            </h2>
          </div>
          <div
            image-loop="wrap"
            className="w-layout-hflex rt-showcase-v1-image-wrapper flex-center-center rt-overflow-hidden"
          >
            <div
              image-loop="image"
              className="rt-showcase-v1-image rt-showcase-v1-image-1"
            >
              <Image
                src={content.aboutWorkImage7Image}
                alt={content.aboutWorkImage7Alt}
                className="rt-radius-small"
                width={93}
                height={90}
                sizes="93px"
              />
            </div>
            <div
              image-loop="image"
              className="rt-showcase-v1-image rt-showcase-v1-image-2"
            >
              <Image
                src={content.aboutWorkImage8Image}
                alt={content.aboutWorkImage8Alt}
                className="rt-radius-small"
                width={64}
                height={63}
                sizes="64px"
              />
            </div>
            <div
              image-loop="image"
              className="rt-showcase-v1-image rt-showcase-v1-image-5"
            >
              <Image
                src={content.aboutWorkImage1Image}
                alt={content.aboutWorkImage1Alt}
                className="rt-radius-small"
                width={87}
                height={90}
                sizes="87px"
              />
            </div>
            <div
              image-loop="image"
              className="rt-showcase-v1-image rt-showcase-v1-image-4"
            >
              <Image
                src={content.aboutWorkImage5Image}
                alt={content.aboutWorkImage5Alt}
                className="rt-radius-small"
                width={152}
                height={150}
                sizes="152px"
              />
            </div>
            <div
              image-loop="image"
              className="rt-showcase-v1-image rt-showcase-v1-image-3"
            >
              <Image
                src={content.aboutWorkImage10Image}
                alt={content.aboutWorkImage10Alt}
                className="rt-radius-small"
                width={132}
                height={131}
                sizes="132px"
              />
            </div>
            <div
              image-loop="image"
              className="rt-showcase-v1-image rt-showcase-v1-image-9"
            >
              <Image
                src={content.aboutWorkImage5Image}
                alt={content.aboutWorkImage5Alt}
                className="rt-radius-small"
                width={152}
                height={150}
                sizes="152px"
              />
            </div>
            <div
              image-loop="image"
              className="rt-showcase-v1-image rt-showcase-v1-image-10"
            >
              <Image
                src={content.aboutWorkImage4Image}
                alt={content.aboutWorkImage4Alt}
                className="rt-radius-small"
                width={102}
                height={103}
                sizes="102px"
              />
            </div>
            <div
              image-loop="image"
              className="rt-showcase-v1-image rt-showcase-v1-image-6"
            >
              <Image
                src={content.aboutWorkImage10Image}
                alt={content.aboutWorkImage10Alt}
                className="rt-radius-small"
                width={132}
                height={131}
                sizes="132px"
              />
            </div>
            <div
              image-loop="image"
              className="rt-showcase-v1-image rt-showcase-v1-image-11"
            >
              <Image
                src={content.aboutWorkImage3Image}
                alt={content.aboutWorkImage3Alt}
                className="rt-radius-small"
                width={137}
                height={139}
                sizes="137px"
              />
            </div>
            <div
              image-loop="image"
              className="rt-showcase-v1-image rt-showcase-v1-image-14"
            >
              <Image
                src={content.aboutWorkImage5Image}
                alt={content.aboutWorkImage5Alt}
                className="rt-radius-small"
                width={152}
                height={150}
                sizes="152px"
              />
            </div>
            <div
              image-loop="image"
              className="rt-showcase-v1-image rt-showcase-v1-image-8"
            >
              <Image
                src={content.aboutWorkImage9Image}
                alt={content.aboutWorkImage9Alt}
                className="rt-radius-small"
                width={152}
                height={151}
                sizes="152px"
              />
            </div>
            <div
              image-loop="image"
              className="rt-showcase-v1-image rt-showcase-v1-image-12"
            >
              <Image
                src={content.aboutWorkImage7Image}
                alt={content.aboutWorkImage7Alt}
                className="rt-radius-small"
                width={93}
                height={90}
                sizes="93px"
              />
            </div>
            <div
              image-loop="image"
              className="rt-showcase-v1-image rt-showcase-v1-image-13"
            >
              <Image
                src={content.aboutWorkImage3Image}
                alt={content.aboutWorkImage3Alt}
                className="rt-radius-small"
                width={137}
                height={139}
                sizes="137px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
