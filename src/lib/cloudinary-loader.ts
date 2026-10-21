"use client";

import type { ImageLoaderProps } from "next/image";

export default function cloudinaryLoader({ src, width, quality }: ImageLoaderProps) {
  const url = new URL(src, "https://local.invalid");
  const versioned = url.pathname.match(/\/image\/upload\/(?:[^/]+\/)*?(v\d+\/.+)$/);

  // Keep SVGs as vectors. The width query also satisfies Next's loader contract.
  if (url.pathname.endsWith(".svg") || !versioned || url.hostname !== "res.cloudinary.com") {
    url.searchParams.set("w", String(width));
    return src.startsWith("/") ? url.pathname + url.search + url.hash : url.href;
  }

  const compression = quality && quality !== 75 ? `q_${quality}` : "q_auto";
  url.pathname = url.pathname.replace(
    /\/image\/upload\/.+$/,
    `/image/upload/f_auto,${compression},c_limit,w_${width}/${versioned[1]}`,
  );
  return url.href;
}
