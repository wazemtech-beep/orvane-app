import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import PortfolioHeroSectionTop from "@/components/sections/PortfolioHeroSectionTop";
export const metadata: Metadata = siteConfig.metadata["/portfolio"];
export default function Page() {
  return (
    <>
      <main className="rt-main">
        <PortfolioHeroSectionTop />
      </main>
    </>
  );
}
