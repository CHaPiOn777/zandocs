import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
