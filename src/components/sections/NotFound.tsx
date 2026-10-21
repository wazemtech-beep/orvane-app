"use client";

import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";

export default function NotFound() {
  const content = siteConfig.sections.notFound;

  return (
    <div className="rt-utility-wrap rt-overflow-hidden rt-position-relative">
      <div className="rt-404-img-v1">
        <Image
          src={content.backgroundImage}
          alt=""
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
        <div className="rt-404-overlay-v1"></div>
      </div>
      <div className="w-layout-vflex rt-utility-flex rt-z-index rt-full-height">
        <div>
          <svg
            width="291"
            height="240"
            viewBox="0 0 291 260"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M222.456 0V63.68H145.016V101.44L212.536 259.2H264.056V98.88H290.616V63.68H264.056V0H222.456ZM182.136 98.88H222.456V211.52L182.136 98.88Z"
              fill="#E0B9A0"
            ></path>
            <path
              d="M44.65 221.5V180.27H0V158.99L40.09 67.5995H64.03V162.22H81.32V180.27H64.03V221.5H44.65ZM19.57 162.22H44.65V92.2995L19.57 162.22Z"
              fill="white"
            ></path>
            <path
              d="M123.456 223.21C114.716 223.21 107.496 221.246 101.796 217.32C96.2224 213.393 92.0424 208.01 89.2557 201.17C86.5957 194.33 85.2657 186.54 85.2657 177.8V111.49C85.2657 102.496 86.5957 94.6429 89.2557 87.9295C91.9157 81.0895 96.0324 75.7695 101.606 71.9695C107.306 68.1695 114.589 66.2695 123.456 66.2695C132.322 66.2695 139.542 68.1695 145.116 71.9695C150.689 75.7695 154.806 81.0895 157.466 87.9295C160.126 94.6429 161.456 102.496 161.456 111.49V177.8C161.456 186.666 160.062 194.52 157.276 201.36C154.616 208.2 150.499 213.583 144.926 217.51C139.352 221.31 132.196 223.21 123.456 223.21ZM123.456 206.49C128.269 206.49 131.879 205.096 134.286 202.31C136.819 199.523 138.529 195.976 139.416 191.67C140.429 187.236 140.936 182.676 140.936 177.99V111.3C140.936 106.36 140.492 101.736 139.606 97.4295C138.719 92.9962 137.009 89.4495 134.476 86.7895C132.069 84.1295 128.396 82.7995 123.456 82.7995C118.516 82.7995 114.779 84.1295 112.246 86.7895C109.712 89.4495 108.002 92.9962 107.116 97.4295C106.229 101.736 105.786 106.36 105.786 111.3V177.99C105.786 182.676 106.229 187.236 107.116 191.67C108.129 195.976 109.902 199.523 112.436 202.31C115.096 205.096 118.769 206.49 123.456 206.49Z"
              fill="white"
            ></path>
          </svg>
        </div>
        <div className="w-layout-vflex rt-error-page-content-wrap rt-grid-wrap-4 rt-wrap-top-gap-medium">
          <h1 className="rt-text-style-h4 rt-text-white rt-no-gap">
            {content.title}
          </h1>
          <p className="rt-text-white">{content.description}</p>
          <Link
            button-wrap="main"
            href={content.goBackToHomeHref}
            className="rt-navbar-btn-v1 rt-position-relative rt-overflow-hidden w-inline-block"
          >
            <div className="rt-z-index rt-position-relative rt-overflow-hidden">
              <div button-text="letters" className="rt-button-text">
                {content.goBackToHome}
              </div>
              <div
                button-text="letters-hover"
                className="rt-button-text rt-button-text-hover"
              >
                {content.goBackToHome}
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
                className="rt-navbar-btn-v1-icon rt-hover"
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
                className="rt-navbar-btn-v1-icon"
              >
                <path
                  d="M11.5 3.88672L6.5 7.77344V4.38672H0V3.38672H6.5V0L11.5 3.88672Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <div className="rt-navbar-btn-v1-overlay"></div>
          </Link>
        </div>
      </div>
    </div>
  );
}
