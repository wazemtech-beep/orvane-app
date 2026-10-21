"use client";
import {
  createContext,
  useContext,
  useState,
  type ButtonHTMLAttributes,
} from "react";

import { siteConfig } from "@/data/siteConfig";
import { type ContainerProps } from "./shared";
type BillingPeriod = "monthly" | "yearly";

const BillingContext = createContext<{
  period: BillingPeriod;
  setPeriod: (period: BillingPeriod) => void;
}>({ period: "monthly", setPeriod: () => {} });

export function BillingSection({ children, ...props }: ContainerProps) {
  const [period, setPeriod] = useState<BillingPeriod>("monthly");
  return (
    <BillingContext value={{ period, setPeriod }}>
      <section {...props}>{children}</section>
    </BillingContext>
  );
}

export function BillingSwitch({
  children,
  className,
  ...props
}: ContainerProps) {
  const { period, setPeriod } = useContext(BillingContext);
  return (
    <button
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
      type="button"
      role="switch"
      aria-label={siteConfig.ui.yearlyBilling}
      aria-checked={period === "yearly"}
      data-period={period}
      className={`${className} clean-billing-switch`}
      onClick={() => setPeriod(period === "monthly" ? "yearly" : "monthly")}
    >
      {children}
    </button>
  );
}

export function BillingLabel({
  period,
  children,
  style,
  ...props
}: ContainerProps & { period: BillingPeriod }) {
  const { period: selected, setPeriod } = useContext(BillingContext);
  return (
    <button
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
      type="button"
      style={{ ...style, color: selected === period ? "#84c0f8" : "#fff" }}
      className={`${props.className || ""} clean-billing-label`}
      onClick={() => setPeriod(period)}
    >
      {children}
    </button>
  );
}

export function BillingPrice({
  period,
  style,
  ...props
}: ContainerProps & { period: BillingPeriod }) {
  const { period: selected } = useContext(BillingContext);
  const active = selected === period;
  return (
    <div
      {...props}
      aria-hidden={!active}
      inert={!active}
      style={{
        ...style,
        opacity: active ? 1 : 0,
        pointerEvents: active ? undefined : "none",
        transition: "opacity .3s",
      }}
    />
  );
}
