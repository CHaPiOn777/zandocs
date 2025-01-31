import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/main", // Перенаправление на /main
        permanent: true,
      },
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
    ];
  },
  output: "export",
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
