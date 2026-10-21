import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import ServiceHeroV4 from "@/components/sections/ServiceHeroV4";
import ServiceSection1 from "@/components/sections/ServiceSection1";
import ServiceSection2 from "@/components/sections/ServiceSection2";
import ServiceSection3 from "@/components/sections/ServiceSection3";
import ServiceClientsV1 from "@/components/sections/ServiceClientsV1";
import ServiceInnovationV1 from "@/components/sections/ServiceInnovationV1";
import ServiceSection4 from "@/components/sections/ServiceSection4";
import ServiceSection5 from "@/components/sections/ServiceSection5";
import ServiceSection6 from "@/components/sections/ServiceSection6";
export const metadata: Metadata = siteConfig.metadata["/service"];
export default function Page() {
  return (
    <>
      <ServiceHeroV4 />
      <ServiceSection1 />
      <ServiceSection2 />
      <ServiceSection3 />
      <div className="rt-grid-wrap-10 rt-margin-auto">
        <ServiceClientsV1 />
      </div>
      <ServiceInnovationV1 />
      <ServiceSection4 />
      <ServiceSection5 />
      <ServiceSection6 />
    </>
  );
}
