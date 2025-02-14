"use client";
import CustomFormDocs from "@/ui/CustomFormDocs/CustomFormDocs";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const Inputs = z.object({
  place_of_conclusion: z.string(),
  date_of_conclusion: z.any(), // Можно использовать z.date() если формат Date
  transferor_name: z.string(),
  transferor_representative: z.string(),
  transferor_authority_doc: z.string(),
  recipient_name: z.string(),
  recipient_representative: z.string(),
  recipient_authority_doc: z.string(),
  contract_number_date: z.string(),
  contract_place: z.string(),
  property_location: z.string(),
  array: z.string(),
  property_status: z.string(),
  property_damage: z.string(),
  transferor_requisites: z.string(),
  recipient_requisites: z.string(),
});
export type ActPriemkiForm = z.infer<typeof Inputs>;

const ActPriemki = () => {
  const formFields = [
    [
      {
        variant: "title",
        name: "Общие положения",
      },
      {
        variant: "input",
        name: "place_of_conclusion",
        type: "text",
        label: "Укажите место заключения",
      },
      {
        variant: "input",
        name: "date_of_conclusion",
        type: "date",
        label: "Укажите число, месяц, год",
      },

      {
        variant: "input",
        name: "contract_number_date",
        type: "text",
        label: "Укажите № и дату заключения договора",
      },
      {
        variant: "input",
        name: "contract_place",
        type: "text",
        label: "Укажите место заключения договора",
      },
      {
        variant: "input",
        name: "property_location",
        type: "text",
        label: "Местонахождение имущества (адрес, склад и т.д.)",
      },

      {
        variant: "input",
        name: "array",
        type: "text",
        label: `Наименование, количество, состояние передаваемого имущества. (Перечислите через ";", если больше 1)`,
      },
      {
        variant: "radio",
        name: "property_status",
        type: "radio",
        radioVariant: [
          {
            value: "рабочее",
            label: "Рабочее",
          },
          { value: "нерабочее", label: "Нерабочее" },
        ],
        label: "В каком состоянии находится передаваемое имущество?",
      },
    ],
    [
      {
        variant: "title",
        name: "Передающяя сторона",
      },
      {
        variant: "input",
        name: "property_damage",
        type: "text",
        label: "Есть ли повреждения? Указать если есть.",
      },
      {
        variant: "input",
        name: "transferor_name",
        type: "text",
        label: "Ф.И.О./Наименование организации передающей стороны",
      },
      {
        variant: "input",
        name: "transferor_representative",
        type: "text",
        label: "Должность, Ф.И.О. представителя",
      },
      {
        variant: "input",
        name: "transferor_authority_doc",
        type: "text",
        label: "Документ, подтверждающий полномочия",
      },
      {
        variant: "input",
        name: "transferor_requisites",
        type: "text",
        label: "Укажите реквизиты Передающей стороны",
      },
    ],
    [
      {
        variant: "title",
        name: "Принимающая сторона",
      },
      {
        variant: "input",
        name: "recipient_name",
        type: "text",
        label: "Ф.И.О./Наименование организации принимающей стороны",
      },
      {
        variant: "input",
        name: "recipient_representative",
        type: "text",
        label: "Должность, Ф.И.О. представителя",
      },
      {
        variant: "input",
        name: "recipient_authority_doc",
        type: "text",
        label: "Документ, подтверждающий полномочия",
      },

      {
        variant: "input",
        name: "recipient_requisites",
        type: "text",
        label: "Укажите реквизиты Принимающей стороны",
      },
    ],
  ];
  const { control, handleSubmit } = useForm<ActPriemkiForm>({
    mode: "onChange",
    resolver: zodResolver(Inputs),
    defaultValues: {
      place_of_conclusion: "",
      date_of_conclusion: new Date(),
      transferor_name: "",
      transferor_representative: "",
      transferor_authority_doc: "",
      recipient_name: "",
      recipient_representative: "",
      recipient_authority_doc: "",
      contract_number_date: "",
      contract_place: "",
      property_location: "",
      array: "",
      property_status: "",
      property_damage: "",
      transferor_requisites: "",
      recipient_requisites: "",
    },
  });
  return (
    <CustomFormDocs
      control={control}
      handleSubmit={handleSubmit}
      formFields={formFields}
      docsName={"act-priemki.docx"}
    />
  );
};

export default ActPriemki;
