import type { NextConfig } from "next";

module.exports = {
  experimental: {
    missingSuspenseWithCSRBailout: false,
    },
  reactStrictMode: true,
  images: {
    domains: ['gamification-kpi-prod-images.s3.us-east-1.amazonaws.com'],
  },
}