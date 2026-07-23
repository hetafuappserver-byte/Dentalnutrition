/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: "/pages/moroccanoil-x-oceana",
        destination: "/pages/hetafu-vs-ida",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "moroccanoilprofessionals.com",
        pathname: "/cdn/shop/files/**",
      },
      {
        protocol: "https",
        hostname: "videos.gotolstoy.com",
        pathname: "/public/**",
      },
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "t4.ftcdn.net",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;