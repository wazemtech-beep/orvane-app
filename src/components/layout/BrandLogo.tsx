import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";

export default function BrandLogo() {
  return (
    <span className="orvane-brand">
      <Image src={siteConfig.brand.logo} alt="" width={34} height={34} sizes="34px" className="orvane-brand__mark" priority />
      <span className="orvane-brand__name">{siteConfig.name}<span>Studio</span></span>
    </span>
  );
}
