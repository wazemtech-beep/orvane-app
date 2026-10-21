import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import PricingHeroSectionTop from "@/components/sections/PricingHeroSectionTop";
import PricingSection1 from "@/components/sections/PricingSection1";
export const metadata: Metadata = siteConfig.metadata["/pricing"];
export default function Page() {
  return (
    <>
      <div className="rt-main">
        <PricingHeroSectionTop />
        <PricingSection1 />
      </div>
    </>
  );
}
