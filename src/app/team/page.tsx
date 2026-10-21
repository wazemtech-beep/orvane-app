import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import TeamHeroSectionTop from "@/components/sections/TeamHeroSectionTop";
export const metadata: Metadata = siteConfig.metadata["/team"];
export default function Page() {
  return (
    <>
      <main className="rt-main">
        <TeamHeroSectionTop />
      </main>
    </>
  );
}
