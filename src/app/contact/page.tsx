import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import ContactHeroSectionTop from "@/components/sections/ContactHeroSectionTop";
import ContactSection1 from "@/components/sections/ContactSection1";
export const metadata: Metadata = siteConfig.metadata["/contact"];
export default function Page() {
  return (
    <>
      <main className="rt-main">
        <ContactHeroSectionTop />
        <ContactSection1 />
      </main>
    </>
  );
}
