import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import AboutHeroV2 from "@/components/sections/AboutHeroV2";
import AboutClientsV1 from "@/components/sections/AboutClientsV1";
import AboutSection1 from "@/components/sections/AboutSection1";
import AboutSection2 from "@/components/sections/AboutSection2";
import AboutSection3 from "@/components/sections/AboutSection3";
import AboutShowcaseV2 from "@/components/sections/AboutShowcaseV2";
import AboutMapV1 from "@/components/sections/AboutMapV1";
import AboutLocationBottomTeam from "@/components/sections/AboutLocationBottomTeam";
import AboutSection4 from "@/components/sections/AboutSection4";
export const metadata: Metadata = siteConfig.metadata["/about"];
export default function Page() {
  return (
    <>
      <div className="rt-main">
        <AboutHeroV2 />
        <AboutClientsV1 />
        <AboutSection1 />
        <AboutSection2 />
        <AboutSection3 />
        <AboutShowcaseV2 />
        <AboutMapV1 />
        <AboutLocationBottomTeam />
        <AboutSection4 />
      </div>
    </>
  );
}
