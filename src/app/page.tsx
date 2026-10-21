import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import HomeHeroV1 from "@/components/sections/HomeHeroV1";
import HomeShowcaseV1 from "@/components/sections/HomeShowcaseV1";
import HomeSection1 from "@/components/sections/HomeSection1";
import HomeSection2 from "@/components/sections/HomeSection2";
import HomeSection3 from "@/components/sections/HomeSection3";
import HomeSection4 from "@/components/sections/HomeSection4";
import HomeFeatureV1 from "@/components/sections/HomeFeatureV1";
import HomeSection5 from "@/components/sections/HomeSection5";
import HomeSection6 from "@/components/sections/HomeSection6";
import HomeSection7 from "@/components/sections/HomeSection7";
export const metadata: Metadata = siteConfig.metadata["/"];
export default function Page() {
  return (
    <>
      <main className="rt-main">
        <div className="rt-home-top-wrapper">
          <div className="rt-home-top-sticky">
            <HomeHeroV1 />
          </div>
          <HomeShowcaseV1 />
        </div>
        <HomeSection1 />
        <HomeSection2 />
        <HomeSection3 />
        <HomeSection4 />
        <HomeFeatureV1 />
        <HomeSection5 />
        <HomeSection6 />
        <HomeSection7 />
      </main>
    </>
  );
}
