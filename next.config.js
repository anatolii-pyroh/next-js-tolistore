require("dotenv").config();
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: process.env.API_URL,
  },
  images: {
    remotePatterns: [
      {
        hostname: "fakestoreapi.com",
      },
    ],
  },
};

module.exports = nextConfig;
