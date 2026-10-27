import type { NextConfig } from "next";
import { ALLOWED_IMAGE_HOSTS } from "./src/config/image-hosts.mjs";

const nextConfig: NextConfig = {
  images: {
    // Development placeholder photos used by the seed data.
    remotePatterns: ALLOWED_IMAGE_HOSTS.map((hostname) => ({ protocol: "https", hostname })),
  },
};

export default nextConfig;
