import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    loader: "custom",
    loaderFile: "./src/lib/cloudinary-loader.ts",
    remotePatterns: [{ protocol: "https", hostname: "res.cloudinary.com", pathname: "/dj4rfocct/**" }],
  },
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
};

export default nextConfig;
