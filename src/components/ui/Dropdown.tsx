"use client";
import { useEffect, useId, useRef, useState, type ReactNode } from "react";

import { siteConfig } from "@/data/siteConfig";
import { type ContainerProps } from "./shared";
interface DropdownProps extends ContainerProps {
  label: ReactNode;
  panelClassName: string;
  toggleClassName?: string;
}

export function Dropdown({
  label,
  panelClassName,
  toggleClassName,
  children,
  className,
  ...props
}: DropdownProps) {
  const [open, setOpen] = useState(false);
  const wrapper = useRef<HTMLDivElement>(null);
  const id = useId();
  useEffect(() => {
    const outside = (event: MouseEvent) => {
      if (!wrapper.current?.contains(event.target as Node)) setOpen(false);
    };
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("click", outside);
    document.addEventListener("keydown", escape);
    return () => {
      document.removeEventListener("click", outside);
      document.removeEventListener("keydown", escape);
    };
  }, []);
  return (
    <div
      {...props}
      ref={wrapper}
      className={className}
      onMouseEnter={() => {
        if (window.innerWidth >= 992) setOpen(true);
      }}
      onMouseLeave={() => {
        if (window.innerWidth >= 992) setOpen(false);
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
    >
      <button
        type="button"
        className={`${toggleClassName || "rt-toggle"} w-dropdown-toggle clean-dropdown-button${open ? " w--open" : ""}`}
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen(!open)}
      >
        {label}
      </button>
      <nav
        id={id}
        className={`${panelClassName}${open ? " w--open" : ""}`}
        inert={!open}
        onClick={(event) => {
          if ((event.target as Element).closest("a[href]")) setOpen(false);
        }}
      >
        {children}
      </nav>
    </div>
  );
}
