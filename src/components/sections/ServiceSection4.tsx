"use client";
import DeferredVideo from "@/components/ui/DeferredVideo";
import { useRef } from "react";
import Image from "next/image";
import { BackgroundVideo } from "@/components/ui/Interactive";
import { siteConfig } from "@/data/siteConfig";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";
export default function ServiceSection4() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useRevealAnimation(sectionRef);

  const content = siteConfig.sections.serviceSection4;
  return (
    <section
      className="rt-section-gap-top-bottom rt-background-v1"
      ref={sectionRef}
    >
      <div className="w-layout-blockcontainer rt-container w-container">
        <div className="rt-grid-wrap-5 rt-margin-auto rt-text-center">
          <div className="rt-sub-text w-variant-ab049205-3d4d-7cde-d0b2-891d5f0e5390">
            {content.ourPortfolio}
          </div>
          <h2 title={content.apearanceTitle} className="rt-dark-text">
            {content.heading}
          </h2>
        </div>
      </div>
      <div className="w-layout-blockcontainer rt-full-container rt-overflow-hidden w-container">
        <div>
          <div
            {...{ train: "" }}
            className="w-layout-hflex rt-portfolio-marque-train-wrap"
          >
            <div
              train-item=""
              className="rt-no-shrinks collection-item w-dyn-list"
            >
              <div role="list" className="rt-portfolio-slider-card w-dyn-items">
                <div role="listitem" className="rt-full-height w-dyn-item">
                  <a
                    aria-label={content.portfolioLinkAriaLabel}
                    href={content.Href}
                    className="rt-full-height rt-radius-v1 rt-overflow-hidden w-inline-block"
                  >
                    <Image
                      src={content.greenLivingAreaImage}
                      marque-image="move"
                      alt={content.greenLivingAreaAlt}
                      className="rt-portfolio-marque-image"
                      width={1536}
                      height={1152}
                      sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div train-item="">
              <BackgroundVideo
                data-poster-url="https://res.cloudinary.com/dj4rfocct/image/upload/f_auto,q_auto,c_limit,w_1920/v1792581892/wazemtech/orvane/9524b3de5c498550138000_10614143-hd_1920_1080_30fps_poster-0000000-65950dd717a4.jpg"
                data-video-urls="https://res.cloudinary.com/dj4rfocct/video/upload/q_auto,c_limit,w_1280/v1792581897/wazemtech/orvane/e01bc1d6-6a9524b3de5c498550138000_10614143-hd_1920_1080_30fps_mp4-c4d37618e3c0.mp4,https://res.cloudinary.com/dj4rfocct/video/upload/q_auto,c_limit,w_1280/v1792581898/wazemtech/orvane/01bc1d6-6a9524b3de5c498550138000_10614143-hd_1920_1080_30fps_webm-fe704c606e64.webm"
                data-autoplay="true"
                data-loop="true"
                className="rt-portfolio-slider-video-card rt-z-index rt-radius-small rt-full-height w-background-video w-background-video-atom"
              >
                <DeferredVideo
                  id="0e15e217-318e-a497-fe1f-518be4c49a3e-video"
                  autoPlay={true}
                  loop={true}
                  style={{
                    backgroundImage:
                      'url("https://res.cloudinary.com/dj4rfocct/image/upload/f_auto,q_auto,c_limit,w_1920/v1792581892/wazemtech/orvane/9524b3de5c498550138000_10614143-hd_1920_1080_30fps_poster-0000000-65950dd717a4.jpg")',
                  }}
                  muted={true}
                  playsInline={true}
                  data-object-fit="cover"
                >
                  <source src={content.mp4Image} />
                  <source src={content.webmImage} />
                </DeferredVideo>

                <div aria-live="polite">
                  <button
                    type="button"
                    aria-controls="0e15e217-318e-a497-fe1f-518be4c49a3e-video"
                    className="w-backgroundvideo-backgroundvideoplaypausebutton rt-video-control-button w-background-video--control"
                  >
                    <span>
                      <Image
                        src={content.pauseVideoImage}
                        alt={content.pauseVideoAlt}
                        width={6}
                        height={8}
                        sizes="6px"
                      />
                    </span>
                    <span hidden={true}>
                      <Image
                        alt={content.playVideoAlt}
                        src={content.playVideoImage}
                        width={6}
                        height={8}
                        sizes="6px"
                      />
                    </span>
                  </button>
                </div>
              </BackgroundVideo>
            </div>
            <div train-item="" className="rt-no-shrinks w-dyn-list">
              <div role="list" className="rt-portfolio-slider-card w-dyn-items">
                <div role="listitem" className="rt-full-height w-dyn-item">
                  <a
                    aria-label={content.portfolioLinkAriaLabel}
                    href={content.Href2}
                    className="rt-full-height rt-radius-v1 rt-overflow-hidden w-inline-block"
                  >
                    <Image
                      src={content.hotelsResortsImage}
                      marque-image="move"
                      alt={content.hotelsResortsAlt}
                      className="rt-portfolio-marque-image"
                      width={768}
                      height={576}
                      sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div train-item="">
              <BackgroundVideo
                data-poster-url="https://res.cloudinary.com/dj4rfocct/image/upload/f_auto,q_auto,c_limit,w_1920/v1792581897/wazemtech/orvane/a95275560d2c065fd291d25_17224730-hd_1280_720_30fps_poster-0000000-be634979f162.jpg"
                data-video-urls="https://res.cloudinary.com/dj4rfocct/video/upload/q_auto,c_limit,w_1280/v1792581904/wazemtech/orvane/4e01bc1d6-6a95275560d2c065fd291d25_17224730-hd_1280_720_30fps_mp4-af2cb0929d2a.mp4,https://res.cloudinary.com/dj4rfocct/video/upload/q_auto,c_limit,w_1280/v1792581907/wazemtech/orvane/e01bc1d6-6a95275560d2c065fd291d25_17224730-hd_1280_720_30fps_webm-586c512e7170.webm"
                data-autoplay="true"
                data-loop="true"
                className="rt-portfolio-slider-video-card rt-z-index rt-radius-small rt-full-height w-background-video w-background-video-atom"
              >
                <DeferredVideo
                  id="172b1c17-fadb-0491-a4ed-98426b59fc83-video"
                  autoPlay={true}
                  loop={true}
                  style={{
                    backgroundImage:
                      'url("https://res.cloudinary.com/dj4rfocct/image/upload/f_auto,q_auto,c_limit,w_1920/v1792581897/wazemtech/orvane/a95275560d2c065fd291d25_17224730-hd_1280_720_30fps_poster-0000000-be634979f162.jpg")',
                  }}
                  muted={true}
                  playsInline={true}
                  data-object-fit="cover"
                >
                  <source src={content.mp4Image2} />
                  <source src={content.webmImage2} />
                </DeferredVideo>

                <div aria-live="polite">
                  <button
                    type="button"
                    aria-controls="172b1c17-fadb-0491-a4ed-98426b59fc83-video"
                    className="w-backgroundvideo-backgroundvideoplaypausebutton rt-video-control-button w-background-video--control"
                  >
                    <span>
                      <Image
                        src={content.pauseVideoImage}
                        alt={content.pauseVideoAlt}
                        width={6}
                        height={8}
                        sizes="6px"
                      />
                    </span>
                    <span hidden={true}>
                      <Image
                        alt={content.playVideoAlt}
                        src={content.playVideoImage}
                        width={6}
                        height={8}
                        sizes="6px"
                      />
                    </span>
                  </button>
                </div>
              </BackgroundVideo>
            </div>
            <div train-item="" className="rt-no-shrinks w-dyn-list">
              <div role="list" className="rt-portfolio-slider-card w-dyn-items">
                <div role="listitem" className="rt-full-height w-dyn-item">
                  <a
                    aria-label={content.portfolioLinkAriaLabel}
                    href={content.Href3}
                    className="rt-full-height rt-radius-v1 rt-overflow-hidden w-inline-block"
                  >
                    <Image
                      src={content.officeSpaceImage}
                      marque-image="move"
                      alt={content.officeSpaceAlt}
                      className="rt-portfolio-marque-image"
                      width={1536}
                      height={1152}
                      sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div train-item="" className="rt-no-shrinks w-dyn-list">
              <div
                role="list"
                className="rt-portfolio-slider-card-v2 rt-full-height w-dyn-items"
              >
                <div role="listitem" className="rt-full-height w-dyn-item">
                  <a
                    aria-label={content.portfolioLinkAriaLabel}
                    href={content.Href4}
                    className="rt-full-height rt-radius-v1 rt-overflow-hidden w-inline-block"
                  >
                    <Image
                      src={content.luxuryVillasBeverlyHillsImage}
                      marque-image="move"
                      alt={content.luxuryVillasBeverlyHillsAlt}
                      className="rt-portfolio-marque-image"
                      width={1536}
                      height={1152}
                      sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
