"use client";

import { useEffect, type RefObject } from "react";
import { gsap } from "gsap";

export function useInteractiveSections(
  sectionRef: RefObject<HTMLElement | null>,
) {
  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const time = (value: number) => (reduced ? 0 : value);
    const cleanups: (() => void)[] = [];

    const ctx = gsap.context(() => {
      // 1. Process Cards Hover/Active Switch
      const processes = Array.from(
        root.querySelectorAll<HTMLElement>("[process-card]"),
      );
      if (processes.length) {
        const activateProcess = (active: HTMLElement) => {
          processes.forEach((card) => {
            const selected = card === active;
            card.setAttribute("process-card", selected ? "active" : "deactive");
            const image = card.querySelector<HTMLElement>("[process-image]");
            const first = card.querySelector<HTMLElement>(
              '[process-text-overlay$="one"]',
            );
            const second = card.querySelector<HTMLElement>(
              '[process-text-overlay$="two"]',
            );
            const dark = card.querySelector<HTMLElement>(
              '[process-overlay$="dark"]',
            );

            if (image)
              gsap.to(image, {
                scale: selected ? 1 : 1.2,
                duration: time(0.8),
                overwrite: true,
              });
            if (first)
              gsap.to(first, {
                opacity: selected ? 0 : 1,
                duration: time(0.4),
                overwrite: true,
              });
            if (second)
              gsap.to(second, {
                opacity: selected ? 1 : 0,
                duration: time(0.4),
                overwrite: true,
              });
            if (dark)
              gsap.to(dark, {
                opacity: selected ? 0 : 1,
                scale: selected ? 0.92 : 1,
                duration: time(0.55),
                overwrite: true,
              });
          });
        };

        const initial =
          processes.find((c) => c.getAttribute("process-card") === "active") ||
          processes[0];
        activateProcess(initial);

        processes.forEach((card) => {
          card.tabIndex = 0;
          const onTrigger = () => activateProcess(card);
          card.addEventListener("mouseenter", onTrigger);
          card.addEventListener("focusin", onTrigger);
          card.addEventListener("click", onTrigger);
          cleanups.push(() => {
            card.removeEventListener("mouseenter", onTrigger);
            card.removeEventListener("focusin", onTrigger);
            card.removeEventListener("click", onTrigger);
          });
        });
      }

      // 2. Services Interactive Image & Text Hover
      const services = Array.from(
        root.querySelectorAll<HTMLElement>('[service-one="item"]'),
      );
      const serviceImages = Array.from(
        root.querySelectorAll<HTMLElement>('[service-image="item"]'),
      );
      if (services.length) {
        let active = 0;
        const show = (next: number) => {
          active = next;
          services.forEach((item, i) => {
            gsap.to(
              item.querySelectorAll(".services-title, .services-title-clone"),
              {
                opacity: i === next ? 1 : 0.7,
                duration: time(0.4),
              },
            );
            if (serviceImages[i]) {
              gsap.to(serviceImages[i], {
                opacity: i === next ? 1 : 0,
                scale: i === next ? 1 : 1.08,
                clipPath: i === next ? "inset(0%)" : "inset(100% 0% 0% 0%)",
                zIndex: i === next ? 2 : 1,
                duration: time(0.8),
                ease: "power3.inOut",
                overwrite: true,
              });
            }
          });
        };

        show(0);

        services.forEach((item, i) => {
          item.tabIndex = 0;
          const onSelect = () => show(i);
          item.addEventListener("mouseenter", onSelect);
          item.addEventListener("focusin", onSelect);
          item.addEventListener("click", onSelect);
          cleanups.push(() => {
            item.removeEventListener("mouseenter", onSelect);
            item.removeEventListener("focusin", onSelect);
            item.removeEventListener("click", onSelect);
          });
        });

        if (!reduced) {
          const timer = window.setInterval(() => {
            if (
              !document.hidden &&
              !services.some((el) => el.matches(":hover, :focus-within"))
            ) {
              show((active + 1) % services.length);
            }
          }, 3500);
          cleanups.push(() => clearInterval(timer));
        }
      }

      // 3. Team Member Card Reveal Overlay
      const teamCards = Array.from(
        root.querySelectorAll<HTMLElement>('[team-card="hover-effect"]'),
      );
      teamCards.forEach((card, index) => {
        const trigger = card.querySelector<HTMLElement>(
          ".rt-team-v1-card-button",
        );
        const overlay = card.querySelector<HTMLElement>(
          '[team-card="blur-overlay"]',
        );
        const content = card.querySelector<HTMLElement>(
          '[team-card="content-wrap"]',
        );
        if (!trigger || !overlay || !content) return;

        let open = false;
        gsap.set(overlay, {
          scale: 0.4,
          opacity: 0,
          transformOrigin: "top right",
        });
        gsap.set(content.children, { yPercent: 120, opacity: 0 });

        const toggle = () => {
          open = !open;
          trigger.setAttribute("aria-expanded", String(open));
          content.inert = !open;

          gsap.to(trigger, {
            rotation: open ? 135 : 0,
            backgroundColor: open ? "#b8d9e8" : "#1e2427",
            color: open ? "#1e2427" : "#b8d9e8",
            duration: time(0.5),
            overwrite: true,
          });
          gsap.to(overlay, {
            scale: open ? 1 : 0.4,
            opacity: open ? 1 : 0,
            duration: time(0.8),
            ease: "power2.out",
            overwrite: true,
          });
          gsap.to(content.children, {
            yPercent: open ? 0 : 120,
            opacity: open ? 1 : 0,
            duration: time(0.9),
            stagger: 0.08,
            ease: "power3.out",
            overwrite: true,
          });
        };

        trigger.setAttribute("aria-label", `Show team member ${index + 1}`);
        trigger.setAttribute("aria-expanded", "false");
        content.inert = true;

        trigger.addEventListener("click", toggle);
        cleanups.push(() => trigger.removeEventListener("click", toggle));
      });

      // 4. FAQ Accordion Animation
      const faqs = Array.from(
        root.querySelectorAll<HTMLElement>(".rt-faq-v1-wrap"),
      );
      if (faqs.length) {
        const setFaq = (item: HTMLElement, open: boolean, animate: boolean) => {
          item.classList.toggle("active", open);
          item
            .querySelector(".rt-faq-v1-top-wrap")
            ?.setAttribute("aria-expanded", String(open));
          const answer = item.querySelector<HTMLElement>(
            ".rt-faq-v1-bottom-wrap",
          );
          if (answer) {
            gsap.to(answer, {
              height: open ? "auto" : 0,
              overflow: "hidden",
              duration: animate ? time(0.4) : 0,
              ease: "power2.out",
              overwrite: true,
            });
          }
          const plus = item.querySelector<HTMLElement>(".rt-faq-plus");
          if (plus) {
            gsap.to(plus, {
              opacity: open ? 0 : 1,
              rotation: open ? 0 : 180,
              duration: animate ? time(0.3) : 0,
            });
          }
        };

        faqs.forEach((faq, index, items) => {
          const top = faq.querySelector<HTMLElement>(".rt-faq-v1-top-wrap");
          const answer = faq.querySelector<HTMLElement>(
            ".rt-faq-v1-bottom-wrap",
          );
          if (!top || !answer) return;

          answer.id ||= `aroclux-answer-${index}`;
          top.setAttribute("aria-controls", answer.id);
          top.setAttribute("role", "button");
          top.tabIndex = 0;

          setFaq(faq, index === 0, false);

          const onToggle = () => {
            const open = !faq.classList.contains("active");
            items.forEach((item) => setFaq(item, item === faq && open, true));
          };

          top.addEventListener("click", onToggle);
          const onKey = (e: KeyboardEvent) => {
            if (["Enter", " "].includes(e.key)) {
              e.preventDefault();
              onToggle();
            }
          };
          top.addEventListener("keydown", onKey);

          cleanups.push(() => {
            top.removeEventListener("click", onToggle);
            top.removeEventListener("keydown", onKey);
          });
        });
      }

      // 5. Pricing Billing Switch (Monthly / Yearly)
      const pricingToggles = Array.from(
        root.querySelectorAll<HTMLElement>(
          '[pricing="toggle"], .rt-pricing-toggle',
        ),
      );
      pricingToggles.forEach((toggle) => {
        let isYearly = false;
        const monthlyIndicator =
          toggle.querySelector<HTMLElement>('[toggle="monthly"]');
        const yearlyIndicator =
          toggle.querySelector<HTMLElement>('[toggle="yearly"]');
        const monthlyPrices = Array.from(
          root.querySelectorAll<HTMLElement>(
            '[price="monthly"], .rt-price-monthly',
          ),
        );
        const yearlyPrices = Array.from(
          root.querySelectorAll<HTMLElement>(
            '[price="yearly"], .rt-price-yearly',
          ),
        );
        const monthlyTexts = Array.from(
          root.querySelectorAll<HTMLElement>('[price-text="monthly"]'),
        );
        const yearlyTexts = Array.from(
          root.querySelectorAll<HTMLElement>('[price-text="yearly"]'),
        );

        const setBilling = (yearly: boolean) => {
          isYearly = yearly;
          toggle.setAttribute("aria-checked", String(yearly));

          if (monthlyIndicator && yearlyIndicator) {
            gsap.to(monthlyIndicator, {
              xPercent: yearly ? 100 : 0,
              duration: time(0.35),
              ease: "power2.out",
            });
            gsap.to(yearlyIndicator, {
              xPercent: yearly ? 0 : -100,
              duration: time(0.35),
              ease: "power2.out",
            });
          }

          monthlyPrices.forEach((el) => {
            gsap.to(el, {
              opacity: yearly ? 0 : 1,
              duration: time(0.3),
              ease: "power2.out",
            });
          });
          yearlyPrices.forEach((el) => {
            gsap.to(el, {
              opacity: yearly ? 1 : 0,
              duration: time(0.3),
              ease: "power2.out",
            });
          });

          monthlyTexts.forEach((el) => {
            gsap.to(el, { opacity: yearly ? 0.5 : 1, duration: time(0.3) });
          });
          yearlyTexts.forEach((el) => {
            gsap.to(el, { opacity: yearly ? 1 : 0.5, duration: time(0.3) });
          });
        };

        toggle.setAttribute("role", "switch");
        toggle.setAttribute("aria-label", "Toggle monthly or yearly billing");
        toggle.tabIndex = 0;

        setBilling(false);

        const onToggle = () => setBilling(!isYearly);
        toggle.addEventListener("click", onToggle);
        const onKey = (e: KeyboardEvent) => {
          if (["Enter", " "].includes(e.key)) {
            e.preventDefault();
            onToggle();
          }
        };
        toggle.addEventListener("keydown", onKey);

        cleanups.push(() => {
          toggle.removeEventListener("click", onToggle);
          toggle.removeEventListener("keydown", onKey);
        });
      });
    }, root);

    return () => {
      cleanups.reverse().forEach((fn) => fn());
      ctx.revert();
    };
  }, [sectionRef]);
}
