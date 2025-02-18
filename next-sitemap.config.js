/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://zandocs.kz",
  generateRobotsTxt: true, // Генерируем robots.txt автоматически
  exclude: [
    "/account/*",
    "/company/*",
    "/register",
    "/login",
    "/logout",
    "/basket",
  ], // Исключаем личные страницы из sitemap
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/account/",
          "/company/",
          "/register",
          "/login",
          "/logout",
          "/basket",
        ],
      },
    ],
    sitemap: "https://zandocs.kz/sitemap.xml",
  },
  additionalPaths: async () => [
    { loc: "/documents/3958", changefreq: "weekly", priority: 0.9 }, // Расписка
    { loc: "/documents/7642", changefreq: "weekly", priority: 0.9 }, // Акт приема
    { loc: "/documents/7650", changefreq: "weekly", priority: 0.9 }, // Доверенность
    { loc: "/documents/7652", changefreq: "weekly", priority: 0.9 }, // Договор займа
    { loc: "/documents/2320", changefreq: "weekly", priority: 0.9 }, // Договор займа
    // { loc: "/documents/7652", changefreq: "weekly", priority: 0.9 }, // Договор займа
  ],
};
