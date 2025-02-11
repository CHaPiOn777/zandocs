/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import PizZip from "pizzip";
import Docxtemplater from "docxtemplater";
import { getProducts } from "@/api/authApi";

export async function POST(req: NextRequest) {
  try {
    // Получаем тело запроса
    const body = await req.json();
    const { templateFile, variables } = body;

    if (!templateFile || !variables || typeof variables !== "object") {
      return NextResponse.json(
        { error: "Необходимо передать templateFile и variables" },
        { status: 400 }
      );
    }

    // Путь к шаблону Word
    const templatePath = path.resolve(
      process.cwd(),
      `public/templates/${templateFile}`
    );
    if (!fs.existsSync(templatePath)) {
      return NextResponse.json({ error: "Шаблон не найден" }, { status: 404 });
    }

    // Загружаем шаблон Word
    const content = fs.readFileSync(templatePath, "binary");
    const zip = new PizZip(content);
    const doc = new Docxtemplater(zip, {
      paragraphLoop: true,
      linebreaks: true,
    });

    // Подставляем переменные в шаблон
    doc.setData(variables);

    // Генерация документа
    try {
      doc.render();
    } catch (renderError) {
      console.error("Ошибка рендеринга шаблона:", renderError);
      return NextResponse.json(
        // { error: "Ошибка рендеринга документа", details: renderError?.message },
        { status: 500 }
      );
    }

    // Генерация DOCX-файла
    const buf = doc.getZip().generate({ type: "nodebuffer" });

    // Возвращаем готовый документ
    return new NextResponse(buf, {
      headers: {
        "Content-Type":
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "Content-Disposition": `attachment; filename=generated-${templateFile}`,
      },
    });
  } catch (error) {
    console.error("Ошибка:", error);
    return NextResponse.json(
      // { error: "Ошибка при генерации документа", details: error?.message },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const products = await getProducts();
    return NextResponse.json(products);
  } catch (error: any) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
