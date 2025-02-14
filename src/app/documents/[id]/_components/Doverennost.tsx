"use client";
import CustomFormDocs from "@/ui/CustomFormDocs/CustomFormDocs";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const Inputs = z.object({
  place_of_issue: z.string(),
  date_of_issue: z.date(), // Можно использовать z.date() при необходимости
  grantor_name: z.string(),
  grantor_iin: z.string().regex(/^\d{12}$/, "ИИН должен содержать 12 цифр"),
  grantor_address: z.string(),
  proxy_name: z.string(),
  proxy_iin: z.string().regex(/^\d{12}$/, "ИИН должен содержать 12 цифр"),
  proxy_address: z.string(),
  array: z.string(),
  duration: z.string(),
});

export type DoverennostForm = z.infer<typeof Inputs>;

const Doverennost = () => {
  const formFields = [
    [
      {
        variant: "title",
        name: "Общие положения",
      },
      {
        variant: "input",
        name: "place_of_issue",
        type: "text",
        label: "Место заключения доверенности",
      },
      {
        variant: "input",
        name: "date_of_issue",
        type: "date",
        label: "Дата заключения доверенности",
      },

      {
        variant: "input",
        name: "duration",
        type: "text",
        label: "На какой срок выдается доверенность?",
      },
    ],
    [
      {
        variant: "title",
        name: "Доверитель",
      },
      {
        variant: "input",
        name: "grantor_name",
        type: "text",
        label: "Как зовут доверителя? (Фамилия, Имя, Отчество)",
      },
      {
        variant: "input",
        name: "grantor_iin",
        type: "text",
        label: "Какой ИИН у доверителя?",
      },
      {
        variant: "input",
        name: "grantor_address",
        type: "text",
        label: "Какой адрес указать для доверителя?",
      },
    ],
    [
      {
        variant: "title",
        name: "Доверенное лицо",
      },
      {
        variant: "input",
        name: "proxy_name",
        type: "text",
        label: "ФИО доверенного лица",
      },
      {
        variant: "input",
        name: "proxy_iin",
        type: "text",
        label: "ИИН доверенного лица",
      },
      {
        variant: "input",
        name: "proxy_address",
        type: "text",
        label: "Адрес проживания доверенного лица",
      },
      {
        variant: "input",
        name: "array",
        type: "text",
        label: `Какие действия доверенное лицо должно совершить от имени доверителя? (Перечислите через ";"!)`,
      },
    ],
  ];
  const { control, handleSubmit } = useForm<DoverennostForm>({
    mode: "onChange",
    resolver: zodResolver(Inputs),
    defaultValues: {
      place_of_issue: "",
      date_of_issue: new Date(),
      grantor_name: "",
      grantor_iin: "",
      grantor_address: "",
      proxy_name: "",
      proxy_iin: "",
      proxy_address: "",
      array: "",
      duration: "",
    },
  });
  return (
    <CustomFormDocs
      control={control}
      handleSubmit={handleSubmit}
      formFields={formFields}
      docsName={"doverennost-razovaya.docx"}
    />
  );
};

export default Doverennost;
