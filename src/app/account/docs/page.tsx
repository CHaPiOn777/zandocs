/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import CustomTable, {
  Column,
} from "@/app/account/orders/_components/CustomTable";
import React, { useEffect, useState } from "react";
import DocsIcon from "@/image/Account/Docs.png";
import ColumnsDocuments from "@/ui/ColumnsDocuments/ColumnsDocuments";
import { Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useDocsStore } from "@/store/docsStore";
import { motion } from "framer-motion";

const Page = () => {
  const myDocs = useDocsStore((state) => state.myDocs);

  const [rowsCollapse, setRowsCollapse] = useState<
    (string | number | React.JSX.Element | null)[][]
  >([]);
  const router = useRouter();
  useEffect(() => {
    const rows = myDocs?.map((item, index) => [
      item.product_name,
      "Куплено",
      null,
      // "item.price",
      <Typography
        key={index}
        component={"span"}
        onClick={() => router.push(`/documents/${item.slug}`)}
        variant="body2"
        sx={{
          // margin: "0 40px",
          justifyContent: "center",
          display: "flex",
          color: "#2640E3",
          cursor: "pointer",
          position: "relative", // Обязательно для использования ::after
          transition: "all 0.2s ease",
          "&::after": {
            content: '""', // Добавляем пустое содержимое
            position: "absolute",
            bottom: "-4px", // Линия располагается под текстом
            left: "50%", // Центрируем линию по горизонтали
            width: "0%", // Изначальная ширина
            height: "1px", // Толщина линии
            backgroundColor: "#2640E3", // Цвет линии
            transition: "all 0.2s ease", // Плавный переход
            transform: "translateX(-50%)", // Сдвигаем к центру
          },
          "&:hover::after": {
            width: "60%", // Линия расширяется до всей ширины текста
          },
        }}
      >
        Скачать
      </Typography>,
    ]);
    setRowsCollapse(rows);
  }, [myDocs]);
  return (
    <motion.div
      // key={item.number}
      initial={{
        opacity: 0,
        filter: "blur(10px)",
        scale: 0.8,
      }}
      style={{ width: "100%" }}
      whileInView={{
        opacity: 1,
        filter: "blur(0px)",
        scale: 1,
      }} // Анимация за // Анимация запускается при появлении
      viewport={{ once: true, amount: 0.2 }} // `once: true` - срабатывает 1 раз, `amount: 0.2` - 20% в видимости
      transition={{
        duration: 0.4,
        // delay: 0.2 * index,
        ease: "easeOut",
      }}
    >
      <CustomTable
        iconTitle={DocsIcon}
        rows={rowsCollapse}
        columns={ColumnsDocuments() as Column<any>[]}
        title={"Мои товары"}
      />
    </motion.div>
  );
};

export default Page;
