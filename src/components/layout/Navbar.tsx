"use client";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  MobileNavigation,
  NavigationPanel,
  Dropdown,
  MenuButton,
} from "@/components/ui/Interactive";
import { siteConfig } from "@/data/siteConfig";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";
import BrandLogo from "./BrandLogo";

export default function Navbar() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useRevealAnimation(sectionRef);
  const pathname = usePathname();
  const content = siteConfig.sections.navbar;
  return (
    <MobileNavigation
      data-animation="default"
      className="rt-navbar-v1 w-nav"
      data-easing2="ease"
      data-easing="ease"
      data-collapse="medium"
      role="banner"
      data-duration="400"
      ref={sectionRef}
    >
      <div className="rt-container w-container">
        <div className="rt-navbar-row-v1">
          <Link
            href="/"
            className="rt-navbar-logo-v1 w-nav-brand"
            aria-label={siteConfig.brand.fullName}
          >
            <div className="rt-navbar-logoicon-v1">
              <BrandLogo />
            </div>
          </Link>
          <NavigationPanel className="rt-navbar-item-wrap w-nav-menu">
            <Link
              href="/"
              className={`rt-navbar-link-v1${pathname === "/" ? " w--current" : ""}`}
              aria-current={pathname === "/" ? "page" : undefined}
            >
              {content.home}
            </Link>
            <Link
              href="/about"
              className={`rt-navbar-link-v1${pathname === "/about" ? " w--current" : ""}`}
              aria-current={pathname === "/about" ? "page" : undefined}
            >
              {content.about}
            </Link>
            <Dropdown
              data-delay="300"
              data-hover="true"
              dropdown-main="link"
              className="rt-dropdown-wrap w-dropdown"
              toggleClassName={`rt-navbar-link-v1 rt-navbar-pageslink-v1${["/service", "/pricing", "/team", "/portfolio", "/portfolio/dream-homes"].includes(pathname) ? " w--current" : ""}`}
              label={
                <>
                  <div>{content.pages}</div>
                  <div className="w-layout-hflex rt-drop-down-icon-wrap">
                    <svg
                      width="9"
                      height="9"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 0V8M0 4H8"
                        stroke="currentColor"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </>
              }
              panelClassName="rt-nav-dropdown w-dropdown-list"
            >
              <div dropdown-main="block" className="rt-nav-dropdown-block">
                <div className="w-layout-grid rt-nav-dropdown-list-grid">
                  <div className="w-layout-vflex rt-nav-dropdown-list-wrap">
                    <Link
                      href="/service"
                      className={`rt-nav-dropdown-list w-inline-block${pathname === "/service" ? " w--current" : ""}`}
                    >
                      <div className="rt-nav-dropdown-bullet"></div>
                      <div className="rt-button-text rt-text-color-inherit">
                        {content.service}
                      </div>
                    </Link>
                    <Link
                      href="/pricing"
                      className={`rt-nav-dropdown-list w-inline-block${pathname === "/pricing" ? " w--current" : ""}`}
                    >
                      <div className="rt-nav-dropdown-bullet"></div>
                      <div className="rt-button-text rt-text-color-inherit">
                        {content.pricing}
                      </div>
                    </Link>
                    <Link
                      href="/team"
                      className={`rt-nav-dropdown-list w-inline-block${pathname === "/team" ? " w--current" : ""}`}
                    >
                      <div className="rt-nav-dropdown-bullet"></div>
                      <div className="rt-button-text rt-text-color-inherit">
                        {content.team}
                      </div>
                    </Link>
                    <Link
                      href="/blog"
                      className={`rt-nav-dropdown-list w-inline-block${pathname === "/blog" ? " w--current" : ""}`}
                    >
                      <div className="rt-nav-dropdown-bullet"></div>
                      <div className="rt-button-text rt-text-color-inherit">
                        {content.blog}
                      </div>
                    </Link>
                    <Link
                      href="/portfolio"
                      className={`rt-nav-dropdown-list w-inline-block${pathname === "/portfolio" ? " w--current" : ""}`}
                    >
                      <div className="rt-nav-dropdown-bullet"></div>
                      <div className="rt-button-text rt-text-color-inherit">
                        {content.portfolio}
                      </div>
                    </Link>
                  </div>
                  <div className="w-layout-vflex rt-nav-dropdown-list-wrap">
                    <a
                      href={content.blogDetailsHref}
                      className="rt-nav-dropdown-list w-inline-block"
                    >
                      <div className="rt-nav-dropdown-bullet"></div>
                      <div className="rt-button-text rt-text-color-inherit">
                        {content.blogDetails}
                      </div>
                    </a>
                    <Link
                      href="/portfolio/dream-homes"
                      className={`rt-nav-dropdown-list w-inline-block${pathname === "/portfolio/dream-homes" ? " w--current" : ""}`}
                    >
                      <div className="rt-nav-dropdown-bullet"></div>
                      <div className="rt-button-text rt-text-color-inherit">
                        {content.portfolioDetails}
                      </div>
                    </Link>
                    <Link
                      href="/404"
                      className={`rt-nav-dropdown-list w-inline-block${pathname === "/404" ? " w--current" : ""}`}
                    >
                      <div className="rt-nav-dropdown-bullet"></div>
                      <div className="rt-button-text rt-text-color-inherit">
                        {content.value404}
                      </div>
                    </Link>
                    <a
                      href={content.passwordHref}
                      className="rt-nav-dropdown-list w-inline-block"
                    >
                      <div className="rt-nav-dropdown-bullet"></div>
                      <div className="rt-button-text rt-text-color-inherit">
                        {content.password}
                      </div>
                    </a>
                    <a
                      href={content.changelogHref}
                      className="rt-nav-dropdown-list w-inline-block"
                    >
                      <div className="rt-nav-dropdown-bullet"></div>
                      <div className="rt-button-text rt-text-color-inherit">
                        {content.changelog}
                      </div>
                    </a>
                  </div>
                </div>
                <div className="w-layout-hflex rt-nav-dropdown-social-wrap">
                  <div className="rt-nav-drop-down-text rt-button-text">
                    {content.socialLinks}
                  </div>
                  <div className="w-layout-hflex rt-nav-dropdown-social-link-wrap">
                    <a
                      href={content.Href2}
                      className="rt-inline-flex w-inline-block"
                    >
                      <div className="rt-nav-social-icon w-embed">
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          {" "}
                          <path
                            d="M11.251 0C13.3219 0.000297984 15 1.67936 15 3.75032V11.251C14.9997 13.3217 13.3217 14.9997 11.251 15H3.75032C1.67936 15 0.000297984 13.3219 0 11.251V3.75032C0 1.67918 1.67918 0 3.75032 0H11.251ZM8.06983 3.84129C7.30759 3.7284 6.52912 3.85946 5.8451 4.21424C5.16093 4.56925 4.60507 5.13067 4.25842 5.81911C3.9118 6.50778 3.79157 7.28915 3.91406 8.05033C4.03658 8.81128 4.3957 9.51429 4.94066 10.0593C5.48581 10.6045 6.18981 10.9648 6.95097 11.0872C7.7119 11.2095 8.49247 11.0881 9.18089 10.7416C9.86923 10.395 10.4307 9.8402 10.7858 9.1562C11.1408 8.47193 11.2718 7.69273 11.1587 6.93017C11.0434 6.15229 10.6804 5.43176 10.1243 4.87568C9.5683 4.31975 8.84759 3.95665 8.06983 3.84129ZM6.45716 5.39548C6.89292 5.1694 7.38929 5.08574 7.8749 5.15767C8.37025 5.23116 8.82934 5.46246 9.18349 5.81651C9.53762 6.17068 9.76884 6.62967 9.84233 7.1251C9.91435 7.61084 9.83067 8.10696 9.60452 8.54284C9.37836 8.97865 9.02039 9.33307 8.58182 9.55384C8.14339 9.77432 7.64602 9.85139 7.16148 9.77346C6.67675 9.69541 6.22868 9.46567 5.88149 9.11851C5.53436 8.7713 5.30585 8.32326 5.22784 7.83852C5.14985 7.3537 5.22669 6.8568 5.44746 6.41818C5.6682 5.97963 6.0214 5.62165 6.45716 5.39548ZM11.6252 2.70943C11.2579 2.70957 10.9599 3.0074 10.9599 3.37477C10.9599 3.74215 11.2579 4.03998 11.6252 4.04011H11.633C12.0004 4.04 12.2984 3.74216 12.2984 3.37477C12.2984 3.00739 12.0004 2.70955 11.633 2.70943H11.6252Z"
                            fill="CurrentColor"
                          ></path>{" "}
                        </svg>
                      </div>
                    </a>
                    <div className="rt-nav-dropdown-social-border"></div>
                    <a
                      href={content.Href3}
                      className="rt-inline-flex w-inline-block"
                    >
                      <div className="rt-nav-social-icon w-embed">
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          {" "}
                          <path
                            d="M10.5 4.73684C11.6935 4.73684 12.8381 5.2359 13.682 6.12423C14.5259 7.01256 15 8.2174 15 9.47368V15H12V9.47368C12 9.05492 11.842 8.65331 11.5607 8.3572C11.2794 8.06109 10.8978 7.89474 10.5 7.89474C10.1022 7.89474 9.72064 8.06109 9.43934 8.3572C9.15804 8.65331 9 9.05492 9 9.47368V15H6V9.47368C6 8.2174 6.47411 7.01256 7.31802 6.12423C8.16193 5.2359 9.30653 4.73684 10.5 4.73684Z"
                            fill="CurrentColor"
                          ></path>{" "}
                          <path
                            d="M3 5.52632H0V15H3V5.52632Z"
                            fill="CurrentColor"
                          ></path>{" "}
                          <path
                            d="M1.5 3.15789C2.32843 3.15789 3 2.45098 3 1.57895C3 0.706919 2.32843 0 1.5 0C0.671573 0 0 0.706919 0 1.57895C0 2.45098 0.671573 3.15789 1.5 3.15789Z"
                            fill="CurrentColor"
                          ></path>{" "}
                        </svg>{" "}
                      </div>
                    </a>
                    <div className="rt-nav-dropdown-social-border"></div>
                    <a
                      href={content.Href4}
                      className="rt-inline-flex w-inline-block"
                    >
                      <div className="rt-nav-social-icon w-embed">
                        <svg
                          width="8"
                          height="15"
                          viewBox="0 0 8 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          {" "}
                          <path
                            d="M8 0H5.81818C4.85376 0 3.92884 0.395088 3.24688 1.09835C2.56493 1.80161 2.18182 2.75544 2.18182 3.75V6H0V9H2.18182V15H5.09091V9H7.27273L8 6H5.09091V3.75C5.09091 3.55109 5.16753 3.36032 5.30392 3.21967C5.44031 3.07902 5.6253 3 5.81818 3H8V0Z"
                            fill="CurrentColor"
                          ></path>{" "}
                        </svg>{" "}
                      </div>
                    </a>
                    <div className="rt-nav-dropdown-social-border"></div>
                    <a
                      href={content.Href5}
                      className="rt-inline-flex w-inline-block"
                    >
                      <div className="rt-nav-social-icon w-embed">
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          {" "}
                          <path
                            d="M8.53374 8.6403C9.08613 10.1336 9.57797 11.8435 10.1061 14.0254C10.1473 14.1957 10.2514 14.3335 10.3868 14.423C9.49822 14.794 8.52371 15 7.50065 15C5.72372 15 4.09201 14.381 2.8069 13.3483C2.83135 13.3232 2.85626 13.2974 2.87707 13.2678C4.64797 10.7453 6.37006 9.3975 8.1387 8.76635C8.26611 8.72111 8.39805 8.6794 8.53374 8.6403Z"
                            fill="CurrentColor"
                          ></path>{" "}
                          <path
                            d="M9.85792 8.383C11.1825 8.22829 12.747 8.32953 14.4542 8.78324C14.607 8.82386 14.7605 8.80383 14.8947 8.74426C14.5307 10.9245 13.2286 12.7859 11.4147 13.898C11.4174 13.837 11.4155 13.7746 11.4004 13.7122C10.8894 11.6013 10.4047 9.89446 9.85792 8.383Z"
                            fill="CurrentColor"
                          ></path>{" "}
                          <path
                            d="M7.56822 6.3662C7.7327 6.70458 7.88894 7.04848 8.03994 7.40059C7.92312 7.43624 7.80702 7.47104 7.69427 7.51105C5.61159 8.25402 3.70251 9.79784 1.84397 12.4218C0.69682 11.1045 9.02577e-05 9.38459 0 7.50065C0 7.45953 0.00193985 7.41816 0.00259898 7.3772L0.00649744 7.3785C2.94077 7.30822 5.43653 7.03293 7.56822 6.3662Z"
                            fill="CurrentColor"
                          ></path>{" "}
                          <path
                            d="M13.2288 2.66135C14.3333 3.96764 15 5.65601 15 7.50065C15 7.53059 14.9978 7.56046 14.9974 7.59031C14.9373 7.54968 14.8713 7.51517 14.7973 7.49545C12.8092 6.96703 10.9504 6.86228 9.36022 7.10171C9.19017 6.69465 9.0114 6.29939 8.82483 5.91008C10.5127 5.20065 11.9436 4.18284 13.1664 2.75232C13.1907 2.72377 13.2101 2.69249 13.2288 2.66135Z"
                            fill="CurrentColor"
                          ></path>{" "}
                          <path
                            d="M4.11028 0.809582C4.13014 0.859261 4.15421 0.908518 4.18695 0.953825C5.33018 2.53199 6.21128 3.85386 6.94057 5.16547C5.06995 5.71657 2.84309 5.96748 0.142944 6.04002C0.594848 3.75022 2.08872 1.83589 4.11028 0.809582Z"
                            fill="CurrentColor"
                          ></path>{" "}
                          <path
                            d="M7.50065 0C9.33427 8.78452e-05 11.0136 0.658893 12.3166 1.75171C12.2573 1.7876 12.2016 1.83259 12.1541 1.88816C11.0527 3.17654 9.76611 4.08397 8.21667 4.71974C7.44931 3.3116 6.53024 1.92678 5.36299 0.309278C6.04036 0.108257 6.75804 0 7.50065 0Z"
                            fill="CurrentColor"
                          ></path>{" "}
                        </svg>{" "}
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </Dropdown>
            <Link
              href={content.blogHref}
              className={`rt-navbar-link-v1${pathname === "/blog" ? " w--current" : ""}`}
              aria-current={pathname === "/blog" ? "page" : undefined}
            >
              {content.blog}
            </Link>
            <Link
              href={content.contactHref}
              className={`rt-navbar-link-v1${pathname === "/contact" ? " w--current" : ""}`}
              aria-current={pathname === "/contact" ? "page" : undefined}
            >
              {content.contact}
            </Link>
          </NavigationPanel>
          <div className="rt-navbar-button">
            <Link
              button-wrap="main"
              href={content.contactHref}
              className="rt-navbar-btn-v1 rt-position-relative rt-overflow-hidden w-inline-block"
            >
              <div className="rt-z-index rt-position-relative rt-overflow-hidden">
                <div button-text="letters" className="rt-button-text">
                  {content.getStarted}
                </div>
                <div
                  button-text="letters-hover"
                  className="rt-button-text rt-button-text-hover"
                >
                  {content.getStarted}
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
          <MenuButton className="rt-nav-hamburger w-nav-button">
            <div className="w-layout-vflex rt-nav-hamburger-line-wrap">
              <div className="rt-nav-hamburger-line rt-line-top"></div>
              <div className="rt-nav-hamburger-line rt-line-center"></div>
              <div className="rt-nav-hamburger-line rt-line-last"></div>
            </div>
          </MenuButton>
        </div>
      </div>
    </MobileNavigation>
  );
}
