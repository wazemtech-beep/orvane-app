"use client";
import { type FormHTMLAttributes } from "react";

import { siteConfig } from "@/data/siteConfig";
import { reducedMotion, type ContainerProps } from "./shared";
export function ContactForm({
  children,
  ...props
}: FormHTMLAttributes<HTMLFormElement>) {
  return (
    <form
      {...props}
      onSubmit={(event) => {
        event.preventDefault();
        event.currentTarget.reportValidity();
      }}
    >
      {children}
    </form>
  );
}
