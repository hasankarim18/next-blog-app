/** @type {import('next').NextConfig} */
const nextConfig = {
  // distDir:"build"
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "roar.media",
        port: "",
        //  pathname: "/account123/**",
      },
    ],
  },
};

module.exports = nextConfig
