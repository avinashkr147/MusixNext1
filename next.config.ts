import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.unsplash.com",
              "images.pexels.com"
    ],
     // ✅ allow Unsplash,pexels images
  },
};

export default nextConfig;
