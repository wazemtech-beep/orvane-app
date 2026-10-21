"use client";
import { useRef } from "react";
import Link from "next/link";
import { ContactForm } from "@/components/ui/Interactive";
import { siteConfig } from "@/data/siteConfig";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";

export default function ContactHeroSectionTop() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useRevealAnimation(sectionRef);

  const content = siteConfig.sections.contactHeroSectionTop;
  return (
    <section
      className="rt-section-gap-bottom rt-hero-section-top"
      ref={sectionRef}
    >
      <div className="w-layout-blockcontainer rt-container w-container">
        <div className="w-layout-hflex rt-flex-top-space-between">
          <div className="w-layout-vflex rt-grid-wrap-7">
            <h1 title-top="apearance" className="rt-large-text">
              {content.title}
            </h1>
          </div>
          <div className="rt-grid-wrap-3">
            <p {...{ top: "fade-in" }} className="rt-bottom-no-gap">
              {content.description}
            </p>
          </div>
        </div>
        <div
          {...{ top: "fade-in" }}
          className="rt-contact-form-v1 rt-bottom-no-gap w-form"
        >
          <ContactForm
            id="wf-form-Contact-form"
            name="wf-form-Contact-form"
            data-name="Contact form"
            className="rt-contact-form-v1"
            data-design-only="true"
          >
            <div className="w-layout-hflex rt-flex-bottom-space-between">
              <input
                className="rt-contact-input-v1 w-input"
                maxLength={256}
                name="Name"
                {...{ scroll: "fade-up" }}
                data-name="Name"
                placeholder={content.yourNamePlaceholder}
                type="text"
                id="Name"
                required={true}
                aria-label={content.yourNamePlaceholder}
              />
              <input
                className="rt-contact-input-v1 w-input"
                maxLength={256}
                name="field-2"
                {...{ scroll: "fade-up" }}
                data-name="Field 2"
                placeholder={content.phoneNumberPlaceholder}
                type="tel"
                id="field-2"
                required={true}
                aria-label={content.phoneNumberPlaceholder}
              />
            </div>
            <div className="w-layout-hflex rt-flex-bottom-space-between">
              <input
                className="rt-contact-input-v1 w-input"
                maxLength={256}
                name="Email"
                {...{ scroll: "fade-up" }}
                data-name="Email"
                placeholder={content.emailAddressPlaceholder}
                type="email"
                id="Email"
                required={true}
                aria-label={content.emailAddressPlaceholder}
              />
              <select
                id="field"
                name="field"
                data-name="Field"
                {...{ scroll: "fade-up" }}
                className="rt-contact-input-v1 rt-contact-input-v1-select w-select"
                aria-label={content.fieldAriaLabel}
              >
                <option value={content.chooseSubjectValue}>
                  {content.chooseSubjectValue}
                </option>
                <option value={content.designConsultationValue}>
                  {content.designConsultationValue}
                </option>
                <option value={content.pricingServicesValue}>
                  {content.pricingServicesValue}
                </option>
                <option value={content.generalInquiryValue}>
                  {content.generalInquiryValue}
                </option>
              </select>
            </div>
            <textarea
              className="rt-contact-input-v1 rt-contact-textarea-v1 w-input"
              maxLength={5000}
              name="Message"
              {...{ scroll: "fade-up" }}
              data-name="Message"
              placeholder={content.typeMessagePlaceholder}
              id="Message"
              required={true}
              aria-label={content.typeMessagePlaceholder}
            ></textarea>
            <div className="w-layout-hflex rt-flex-top-space-between rt-wrap-top-gap-small">
              <label className="w-checkbox rt-pricing-card-v1-icon-list-wrap rt-grid-wrap-3">
                <div className="w-checkbox-input w-checkbox-input--inputType-custom rt-form-checkbox"></div>
                <input
                  type="checkbox"
                  id="checkbox"
                  name="checkbox"
                  data-name="Checkbox"
                  required={true}
                  style={{ position: "absolute", zIndex: "-1" }}
                  aria-label={content.checkboxAriaLabel}
                />
                <span
                  className="rt-light-text w-form-label"
                  {...{ htmlFor: "checkbox" }}
                >
                  {content.iAgreeToTheTermsAndConditions}
                </span>
              </label>
              <div
                button-wrap="main"
                className="rt-grid-wrap-4 rt-position-relative"
              >
                <input
                  type="submit"
                  data-wait="Please wait..."
                  className="rt-form-submit-button w-button"
                  value={content.submitNowValue}
                  aria-label={content.submitNowsubmitNowAriaLabel}
                />
                <div className="rt-event-none">
                  <Link
                    button-wrap="main"
                    href={content.submitNowsubmitNowHref}
                    className="rt-navbar-btn-v1 rt-position-relative rt-overflow-hidden w-inline-block"
                  >
                    <div className="rt-z-index rt-position-relative rt-overflow-hidden">
                      <div button-text="letters" className="rt-button-text">
                        {content.submitNowValue}
                      </div>
                      <div
                        button-text="letters-hover"
                        className="rt-button-text rt-button-text-hover"
                      >
                        {content.submitNowValue}
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
          </ContactForm>
          <div className="rt-success w-form-done">
            <div>{content.thankYouYourSubmissionHasBeenReceived}</div>
          </div>
          <div className="rt-error w-form-fail">
            <div>{content.oopsSomethingWentWrongWhileSubmittingTheForm}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
