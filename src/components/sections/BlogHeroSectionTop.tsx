"use client";
import { useRef } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";

export default function BlogHeroSectionTop() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useRevealAnimation(sectionRef);

  const content = siteConfig.sections.blogHeroSectionTop;
  const posts = content.posts || [];

  return (
    <section
      className="rt-hero-section-top rt-section-gap-bottom"
      ref={sectionRef}
    >
      <div className="w-layout-blockcontainer rt-container w-container">
        <div className="rt-grid-wrap-4 rt-margin-auto rt-text-center">
          <h1 title-top="apearance" className="rt-top-no-gap">
            {content.title}
          </h1>
          <p className="rt-wrap-top-gap-small">{content.description}</p>
        </div>
        <div className="w-dyn-list">
          <div
            role="list"
            className="rt-blog-listing-grid-v1 rt-wrap-top-gap-medium w-dyn-items"
          >
            {posts.map((post, index) => (
              <div role="listitem" className="w-dyn-item" key={index}>
                <a
                  {...{ top: "fade-in" }}
                  {...{ scroll: "fade-in" }}
                  aria-label={content.blogLinkAriaLabel || post.title}
                  href={post.href}
                  className="rt-blog-listing-card-v1 w-inline-block"
                >
                  <div className="rt-radius-small rt-overflow-hidden">
                    <Image
                      src={post.image}
                      blog-image="effect"
                      alt={post.imageAlt || post.title}
                      width={1008}
                      height={660}
                      sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                    />
                  </div>
                  <div className="rt-blog-listing-meta-row-v1">
                    <p className="rt-bottom-no-gap">{post.category}</p>
                    <p className="rt-bottom-no-gap">|</p>
                    <p className="rt-bottom-no-gap">{post.date}</p>
                  </div>
                  <div className="rt-text-style-h6">{post.title}</div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
