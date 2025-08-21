import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.zandocs.kz",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
  trailingSlash: false, // корневая без слэша — /, а не // или /index
  async redirects() {
    return [
      // Явный редирект /index и /index.html → /
      { source: "/index", destination: "/", permanent: true },
      { source: "/index.html", destination: "/", permanent: true },

      // www → без www (middleware тоже делает; оставляем как декларативную поддержку)
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.zandocs.kz" }],
        destination: "https://zandocs.kz/:path*",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/wp-admin/:path*",
        destination: "https://zandocs.kz/wp-admin/:path*",
      },
      {
        source: "/api/:path*",
        destination: "https://api.zandocs.kz/wp-json/:path*",
      },
    ];
  },
  // async headers() {
  //   return [
  //     {
  //       source: "/logout",
  //       headers: [
  //         {
  //           key: "Set-Cookie",
  //           value: "access_token=deleted; Max-Age=0; Path=/",
  //         },
  //         {
  //           key: "Set-Cookie",
  //           value: "refresh_token=deleted; Max-Age=0; Path=/",
  //         },
  //       ],
  //     },
  //   ];
  // },

  /* config options here */
};

export default nextConfig;
