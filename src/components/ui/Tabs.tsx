"use client";
import {
  createContext,
  useContext,
  useEffect,
  useId,
  useState,
  type ButtonHTMLAttributes,
} from "react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteConfig } from "@/data/siteConfig";
import { type ContainerProps } from "./shared";
const TabsContext = createContext({
  selected: "Tab 1",
  setSelected: (_value: string) => {},
  id: "tabs",
});

export function Tabs({ children, ...props }: ContainerProps) {
  const [selected, setSelected] = useState("Tab 1");
  const id = useId();
  useEffect(() => {
    ScrollTrigger.refresh();
  }, [selected]);
  return (
    <TabsContext value={{ selected, setSelected, id }}>
      <div {...props}>{children}</div>
    </TabsContext>
  );
}

export function Tab({
  value,
  children,
  className = "",
  ...props
}: ContainerProps & { value: string }) {
  const { selected, setSelected, id } = useContext(TabsContext);
  const active = selected === value;
  return (
    <button
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
      type="button"
      role="tab"
      id={`${id}-${value}`}
      aria-controls={`${id}-panel-${value}`}
      aria-selected={active}
      tabIndex={active ? 0 : -1}
      className={`${className.replace(/\bw--current\b/g, "")} clean-tab${active ? " w--current" : ""}`}
      onClick={() => setSelected(value)}
      onKeyDown={(event) => {
        if (
          ![
            "ArrowLeft",
            "ArrowRight",
            "ArrowUp",
            "ArrowDown",
            "Home",
            "End",
          ].includes(event.key)
        )
          return;
        event.preventDefault();
        const tabs = Array.from(
          event.currentTarget
            .closest('[role="tablist"]')
            ?.querySelectorAll<HTMLButtonElement>('[role="tab"]') || [],
        );
        const index = tabs.indexOf(event.currentTarget);
        const next =
          event.key === "Home"
            ? 0
            : event.key === "End"
              ? tabs.length - 1
              : (index +
                  (["ArrowRight", "ArrowDown"].includes(event.key) ? 1 : -1) +
                  tabs.length) %
                tabs.length;
        tabs[next]?.click();
        tabs[next]?.focus();
      }}
    >
      {children}
    </button>
  );
}

export function TabPanel({
  value,
  className = "",
  ...props
}: ContainerProps & { value: string }) {
  const { selected, id } = useContext(TabsContext);
  return (
    <div
      {...props}
      role="tabpanel"
      id={`${id}-panel-${value}`}
      aria-labelledby={`${id}-${value}`}
      hidden={selected !== value}
      inert={selected !== value}
      className={`${className.replace(/\bw--tab-active\b/g, "")}${selected === value ? " w--tab-active" : ""}`}
    />
  );
}
