import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import PortfolioDreamHomesPortfolioHero from "@/components/sections/PortfolioDreamHomesPortfolioHero";
import PortfolioDreamHomesSection1 from "@/components/sections/PortfolioDreamHomesSection1";
import PortfolioDreamHomesSection2 from "@/components/sections/PortfolioDreamHomesSection2";
export const metadata: Metadata = siteConfig.metadata["/portfolio/dream-homes"];
export default function Page() {
  return (
    <>
      <main className="rt-main">
        <PortfolioDreamHomesPortfolioHero />
        <PortfolioDreamHomesSection1 />
        <PortfolioDreamHomesSection2 />
      </main>
    </>
  );
}
