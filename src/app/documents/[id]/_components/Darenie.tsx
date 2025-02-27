"use client";
import { getDetails, getFlags } from "@/hooks/tabsDos";
import CustomFormDocs from "@/ui/CustomFormDocs/CustomFormDocs";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useMemo } from "react";
import { useForm, useWatch } from "react-hook-form";
import { z } from "zod";

const Inputs = z.object({
  place_of_conclusion: z.string(),
  date_of_conclusion: z.string(), // Можно использовать z.date() при необходимости
  lender_status: z.any(),
  borrower_status: z.any(),
  name1: z.string(),
  passport1: z.string(),
  iin1: z.string(),
  name2: z.string(),
  passport2: z.string(),
  iin2: z.string(),
  gift_description: z.string(),
  gift_basis: z.string(),
  gift_characteristics: z.string(),
  gift_value: z.string(),
  gift_transfer_deadline: z.string(),
  property_transfer_condition: z.string(),
  lender_requisites: z.string(),
  borrower_requisites: z.string(),
});
export type Darenie = z.infer<typeof Inputs>;

const Darenie = () => {
  const { control, handleSubmit } = useForm<Darenie>({
    mode: "onChange",
    resolver: zodResolver(Inputs),
    defaultValues: {
      place_of_conclusion: "",
      date_of_conclusion: "",
      lender_status: "юридическое лицо",
      borrower_status: "юридическое лицо",
      gift_description: "",
      gift_basis: "",
      gift_characteristics: "",
      gift_value: "",
      gift_transfer_deadline: "",
      property_transfer_condition: "",
      name1: "",
      passport1: "",
      iin1: "",
      name2: "",
      passport2: "",
      iin2: "",
      lender_requisites: "",
      borrower_requisites: "",
    },
  });
  const lenderStatus = useWatch({ control, name: "lender_status" });
  const borrowerStatus = useWatch({ control, name: "borrower_status" });

  const lenderFlags = getFlags(lenderStatus, 1);
  const borrowFlags = getFlags(borrowerStatus, 2);
  const flags = { ...lenderFlags, ...borrowFlags };
  const formFields = useMemo(
    () => [
      [
        {
          variant: "title",
          name: "Общие положения",
        },
        {
          variant: "input",
          name: "place_of_conclusion",
          type: "text",
          label: "Укажите город, в котором заключается договор",
        },
        {
          variant: "input",
          name: "date_of_conclusion",
          type: "date",
          label: "Введите дату заключения договора",
        },

        {
          variant: "input",
          name: "gift_description",
          type: "string",
          label:
            "Какое имущество передается в дар? (Укажите подробное описание имущества, его характеристики, номер регистрации и прочее.)",
        },
        {
          variant: "input",
          name: "gift_basis",
          type: "string",
          label:
            "На основании какого документа имущество принадлежит Дарителю? (Укажите документ, подтверждающий право собственности, например, договор купли-продажи или свидетельство о праве собственности.). ",
        },
        {
          variant: "input",
          name: "gift_characteristics",
          type: "text",
          label: "Перечислите характеристики передаваемого имущества",
        },
        {
          variant: "input",
          name: "gift_value",
          type: "text",
          label: "Укажите стоимость дара цифрами и прописью в тенге ",
        },
        {
          variant: "input",
          name: "gift_transfer_deadline",
          type: "text",
          label: "В какой срок необходимо передать имущество Одаряемому?",
        },
        {
          variant: "input",
          name: "property_transfer_condition",
          type: "text",
          label:
            "Как определяется момент перехода права собственности на Дар от Дарителя к Одаряемому? (например, подписание акта приема-передачи, государственная регистрация Договора или подписание настоящего Договора).",
        },
      ],

      [
        {
          variant: "title",
          name: "Даритель",
        },
        {
          variant: "input",
          name: "lender_requisites",
          type: "text",
          label: "Укажите реквизиты Дарителя",
        },
        {
          variant: "radio",
          name: "lender_status",
          type: "radio",
          label: "Укажите статус Дарителя",
          radioVariant: [
            {
              value: "юридическое лицо",
              label: "Юридическое лицо",
            },
            { value: "физическое лицо", label: "Физическое лицо" },
            {
              value: "индивидуальный предприниматель",
              label: "Индивидуальный предприниматель",
            },
          ],
        },
        ...getDetails(lenderStatus, 1),
      ],
      [
        {
          variant: "title",
          name: "Одаряемый",
        },
        {
          variant: "input",
          name: "borrower_requisites",
          type: "text",
          label: "Укажите реквизиты Одаряемого",
        },
        {
          variant: "radio",
          name: "borrower_status",
          type: "radio",
          label: "Укажите статус Одаряемого",
          radioVariant: [
            {
              value: "юридическое лицо",
              label: "Юридическое лицо",
            },
            { value: "физическое лицо", label: "Физическое лицо" },
            {
              value: "индивидуальный предприниматель",
              label: "Индивидуальный предприниматель",
            },
          ],
        },
        ...getDetails(borrowerStatus, 2),
      ],
    ],
    [lenderStatus, borrowerStatus]
  );
  return (
    <CustomFormDocs
      flags={flags}
      control={control}
      handleSubmit={handleSubmit}
      formFields={formFields}
      docsName={"darenie.docx"}
    />
  );
};

export default Darenie;
