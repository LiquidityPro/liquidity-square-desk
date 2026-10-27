import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_DESK_BASE_PATH || "";

const nextConfig: NextConfig = {
  agentRules: false,
  ...(basePath ? { basePath } : {}),
};

export default nextConfig;
