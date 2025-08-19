/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://zandocs.kz",
  generateRobotsTxt: true, // Генерируем robots.txt автоматически
  exclude: ["/account/*", "/register", "/login", "/logout", "/basket"], // Исключаем личные страницы из sitemap
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/account/", "/register", "/login", "/logout", "/basket"],
      },
    ],
    sitemap: "https://zandocs.kz/sitemap.xml",
  },
  additionalPaths: async () => [
    { loc: "/documents/raspiska", changefreq: "weekly", priority: 0.9 }, // Расписка
    {
      loc: "/documents/akt-priema-peredachi-imushchestva",
      changefreq: "weekly",
      priority: 0.9,
    }, // Акт приема
    {
      loc: "/documents/razovaya-doverennost",
      changefreq: "weekly",
      priority: 0.9,
    }, // Доверенность
    {
      loc: "/documents/dogovor-zaima-deneg",
      changefreq: "weekly",
      priority: 0.9,
    }, // Договор займа
    { loc: "/documents/dogovor-arendy", changefreq: "weekly", priority: 0.9 }, // Договор займа
    {
      loc: "/documents/dogovor-vozmezdnogo-okazaniya-uslug",
      changefreq: "weekly",
      priority: 0.9,
    }, // Договор возмездного оказания услуг
    {
      loc: "/documents/dogovor-kupli-prodazhi-v-rassrochku",
      changefreq: "weekly",
      priority: 0.9,
    }, // Договор купли-продажи в рассрочку
    { loc: "/documents/dogovor-garantii", changefreq: "weekly", priority: 0.9 }, // Договор гарантии
    { loc: "/documents/dogovor-dareniya", changefreq: "weekly", priority: 0.9 }, // Договор дарения
    {
      loc: "/documents/dogovor-ob-okazanii-konsultacionnyh-uslug",
      changefreq: "weekly",
      priority: 0.9,
    }, // Договор консультации
    {
      loc: "/documents/dogovor-kupli-prodazhi-nedvizhimosti-bez-obremeneniy",
      changefreq: "weekly",
      priority: 0.9,
    }, // Договор купли-продажи недвижимого имущества без обременений
    { loc: "/documents/ustav", changefreq: "weekly", priority: 0.9 }, // Устав ТОО образец Казахстан
    {
      loc: "/documents/uchreditelnyy-dogovor",
      changefreq: "weekly",
      priority: 0.9,
    }, // Учредительный договор
  ],
};
