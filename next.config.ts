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
  async redirects() {
    return [
      // {
      //   source: "/",
      //   destination: "/", // Перенаправление на /main
      //   permanent: false,
      // },
      // {
      //   source: "/logout",
      //   destination: "/main", // Перенаправление на /main
      //   permanent: false,
      // },
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
