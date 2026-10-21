"use client";
import DeferredVideo from "@/components/ui/DeferredVideo";
import { useRef } from "react";
import Image from "next/image";
import { BackgroundVideo } from "@/components/ui/Interactive";
import { siteConfig } from "@/data/siteConfig";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";
export default function HomeSection6() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useRevealAnimation(sectionRef);

  const content = siteConfig.sections.homeSection6;
  return (
    <section
      testimonial-one="wrapper"
      className="rt-section-gap-bottom"
      ref={sectionRef}
    >
      <div className="w-layout-blockcontainer rt-full-container w-container">
        <div className="w-layout-hflex rt-overflow-hidden">
          <div
            marquee-pause=""
            {...{ train: "" }}
            className="w-layout-hflex rt-testimonial-train"
          >
            <div className="w-layout-vflex rt-testimonial-card rt-radius-small">
              <div className="w-layout-hflex rt-testimonial-card-image-wrap">
                <div className="rt-testimonial-author">
                  <Image
                    src={content.authorTestimonialImage}
                    alt={content.authorTestimonialAlt}
                    className="rt-radius-fifty"
                    width={186}
                    height={192}
                    sizes="186px"
                  />
                </div>
                <div>
                  <Image
                    src={content.authorTestimonialIconImage}
                    alt={content.authorTestimonialIconAlt}
                    width={32}
                    height={30}
                    sizes="32px"
                  />
                </div>
              </div>
              <p className="rt-dark-text">{content.description}</p>
              <div className="w-layout-hflex rt-testimonial-card-bottom-name">
                <div className="rt-text-style-h6 rt-dark-text">
                  {content.danielCarter}
                </div>
                <div className="rt-dark-text">{content.commercialClient}</div>
              </div>
            </div>
            <div className="rt-testimonial-card-video">
              <BackgroundVideo
                data-poster-url="https://res.cloudinary.com/dj4rfocct/image/upload/f_auto,q_auto,c_limit,w_1920/v1792581888/wazemtech/orvane/0f5_PixVerse_V6_Image_Text_540P_one_professional_w_poster-0000000-e50d821a308e.jpg"
                data-video-urls="https://res.cloudinary.com/dj4rfocct/video/upload/q_auto,c_limit,w_1280/v1792581890/wazemtech/orvane/80e89ae336b0f5_PixVerse_V6_Image_Text_540P_one_professional_w_mp4-30c2227ec6b8.mp4,https://res.cloudinary.com/dj4rfocct/video/upload/q_auto,c_limit,w_1280/v1792581890/wazemtech/orvane/0e89ae336b0f5_PixVerse_V6_Image_Text_540P_one_professional_w_webm-7d3b8848c746.webm"
                data-autoplay="true"
                data-loop="true"
                className="rt-testimonial-video rt-radius-small w-background-video w-background-video-atom"
              >
                <DeferredVideo
                  id="3c7c205e-e559-0537-3692-bb75008eb151-video"
                  autoPlay={true}
                  loop={true}
                  style={{
                    backgroundImage:
                      'url("https://res.cloudinary.com/dj4rfocct/image/upload/f_auto,q_auto,c_limit,w_1920/v1792581888/wazemtech/orvane/0f5_PixVerse_V6_Image_Text_540P_one_professional_w_poster-0000000-e50d821a308e.jpg")',
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
                    aria-controls="3c7c205e-e559-0537-3692-bb75008eb151-video"
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
                <div className="w-layout-hflex rt-testimonial-card-bottom-name rt-testimonial-card-bottom-name-2 rt-z-index">
                  <div className="rt-text-style-h6 rt-dark-text">
                    {content.oliviaParker}
                  </div>
                  <div className="rt-dark-text">{content.founderNorthline}</div>
                </div>
              </BackgroundVideo>
            </div>
            <div className="w-layout-vflex rt-testimonial-card rt-radius-small">
              <div className="w-layout-hflex rt-testimonial-card-image-wrap">
                <div className="rt-testimonial-author">
                  <Image
                    src={content.author10Image}
                    alt={content.author10Alt}
                    className="rt-radius-fifty"
                    width={316}
                    height={316}
                    sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                  />
                </div>
                <div>
                  <Image
                    src={content.authorTestimonialIconImage}
                    alt={content.authorTestimonialIconAlt}
                    width={32}
                    height={30}
                    sizes="32px"
                  />
                </div>
              </div>
              <p className="rt-dark-text">{content.description2}</p>
              <div className="w-layout-hflex rt-testimonial-card-bottom-name">
                <div className="rt-text-style-h6 rt-dark-text">
                  {content.ethanMorgan}
                </div>
                <div className="rt-dark-text">{content.propertyDeveloper}</div>
              </div>
            </div>
            <div className="rt-testimonial-card-video">
              <BackgroundVideo
                data-poster-url="https://res.cloudinary.com/dj4rfocct/image/upload/f_auto,q_auto,c_limit,w_1920/v1792581888/wazemtech/orvane/4e01bc1d6-6a867ddaab7173ba4c5ecac4_compressed_30mb_poster-0000000-9512f45fc298.jpg"
                data-video-urls="https://res.cloudinary.com/dj4rfocct/video/upload/q_auto,c_limit,w_1280/v1792581927/wazemtech/orvane/2b8f2c2c7e64e01bc1d6-6a867ddaab7173ba4c5ecac4_compressed_30mb_mp4-3bde36bc303b.mp4,https://res.cloudinary.com/dj4rfocct/video/upload/q_auto,c_limit,w_1280/v1792581915/wazemtech/orvane/b8f2c2c7e64e01bc1d6-6a867ddaab7173ba4c5ecac4_compressed_30mb_webm-f669c96fc2f2.webm"
                data-autoplay="true"
                data-loop="true"
                className="rt-testimonial-video rt-radius-small w-background-video w-background-video-atom"
              >
                <DeferredVideo
                  id="0059125e-d205-2cf5-1b39-bcfb1b433591-video"
                  autoPlay={true}
                  loop={true}
                  style={{
                    backgroundImage:
                      'url("https://res.cloudinary.com/dj4rfocct/image/upload/f_auto,q_auto,c_limit,w_1920/v1792581888/wazemtech/orvane/4e01bc1d6-6a867ddaab7173ba4c5ecac4_compressed_30mb_poster-0000000-9512f45fc298.jpg")',
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
                    aria-controls="0059125e-d205-2cf5-1b39-bcfb1b433591-video"
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
                <div className="w-layout-hflex rt-testimonial-card-bottom-name rt-testimonial-card-bottom-name-2 rt-z-index">
                  <div className="rt-text-style-h6 rt-dark-text">
                    {content.sophiaBennett}
                  </div>
                  <div className="rt-dark-text">{content.businessOwner}</div>
                </div>
              </BackgroundVideo>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
