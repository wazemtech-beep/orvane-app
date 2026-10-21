import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import NotFound from "@/components/sections/NotFound";

export const metadata: Metadata = siteConfig.metadata["/404"];

export default function NotFoundPage() {
  return <NotFound />;
}
