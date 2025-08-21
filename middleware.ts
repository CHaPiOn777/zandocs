// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Укажите основной домен (без www)
const PRIMARY_DOMAIN = process.env.PRIMARY_DOMAIN || "zandocs.kz";

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  let changed = false;

  // 1) Приводим хост к основному домену (склейка www → без www и любых поддоменов → основной)
  if (url.hostname !== PRIMARY_DOMAIN) {
    url.hostname = PRIMARY_DOMAIN;
    changed = true;
  }

  // 2) Форсируем HTTPS (защищённую версию)
  const proto =
    req.headers.get("x-forwarded-proto") || url.protocol.replace(":", "");
  if (proto !== "https") {
    url.protocol = "https:";
    changed = true;
  }

  // 3) Убираем дубли главной: /index, /index.html → /
  if (url.pathname === "/index" || url.pathname === "/index.html") {
    url.pathname = "/";
    changed = true;
  }

  // 4) Схлопываем двойные слэши в пути
  const collapsed = url.pathname.replace(/\/{2,}/g, "/");
  if (collapsed !== url.pathname) {
    url.pathname = collapsed;
    changed = true;
  }

  // 5) Убираем «пустой» вопросительный знак — `/?` → `/`
  if (url.search === "?") {
    url.search = "";
    changed = true;
  }

  // Если что-то поменяли — жёсткий 301
  if (changed) {
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

// Исключаем статику и служебные пути из проверки
export const config = {
  matcher: [
    // всё, кроме _next, статических ассетов и, при желании, health-чека
    "/((?!_next/|api/health|.*\\.(?:js|css|svg|png|jpg|jpeg|gif|webp|ico|txt|xml)$).*)",
  ],
};
