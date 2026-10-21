import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import BlogHeroSectionTop from "@/components/sections/BlogHeroSectionTop";
export const metadata: Metadata = siteConfig.metadata["/blog"];
export default function Page() {
  return (
    <>
      <main className="rt-main">
        <BlogHeroSectionTop />
      </main>
    </>
  );
}
