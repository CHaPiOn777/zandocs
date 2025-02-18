"use client";
import { getDetails, getFlags } from "@/hooks/tabsDos";
import CustomFormDocs from "@/ui/CustomFormDocs/CustomFormDocs";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMemo } from "react";
import { useForm, useWatch } from "react-hook-form";
import { z } from "zod";

const Inputs = z.object({
  place_of_conclusion: z.string(),
  date_of_conclusion: z.any(), // Можно использовать z.date() при необходимости
  lender_status: z.any(),
  borrower_status: z.any(),
  name1: z.string(),
  passport1: z.string(),
  iin1: z.string(),
  name2: z.string(),
  passport2: z.string(),
  iin2: z.string(),
  loan_amount: z.string(),
  loan_return_days: z.string().regex(/^\d+$/, "Введите число"),
  loan_provide_days: z.string().regex(/^\d+$/, "Введите число"),
  penalty_rate: z
    .string()
    .regex(/^\d+(\.\d+)?$/, "Введите число или десятичное значение"),
  lender_requisites: z.string(),
  borrower_requisites: z.string(),
});

export type ZaimForm = z.infer<typeof Inputs>;

const Zaim = () => {
  const { control, handleSubmit } = useForm<ZaimForm>({
    mode: "onChange",
    resolver: zodResolver(Inputs),
    defaultValues: {
      place_of_conclusion: "",
      date_of_conclusion: "",
      lender_status: "юридическое лицо",
      borrower_status: "юридическое лицо",
      loan_amount: "",
      loan_return_days: "",
      loan_provide_days: "",
      name1: "",
      passport1: "",
      iin1: "",
      name2: "",
      passport2: "",
      iin2: "",
      penalty_rate: "",
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
          label: "Укажите место заключения",
        },
        {
          variant: "input",
          name: "date_of_conclusion",
          type: "date",
          label: "Укажите дату",
        },

        {
          variant: "input",
          name: "loan_return_days",
          type: "number",
          label:
            "В течение скольки дней Заемщик обязуется вернуть сумму займа?",
        },
        {
          variant: "input",
          name: "loan_provide_days",
          type: "number",
          label:
            "В течение скольких дней Займодатель обязуется предоставить указанную сумму денег Заемщику?",
        },
        {
          variant: "input",
          name: "loan_amount",
          type: "text",
          label:
            "Какую сумму Заимодатель передает в собственность Заемщику? (Указать в цифрах и прописью)",
        },
        {
          variant: "input",
          name: "penalty_rate",
          type: "number",
          label: "Какой размер неустойки за каждый день просрочки платежа?",
        },
      ],

      [
        {
          variant: "title",
          name: "Займодатель",
        },
        {
          variant: "input",
          name: "lender_requisites",
          type: "text",
          label: "Укажите реквизиты Займодателя",
        },
        {
          variant: "radio",
          name: "lender_status",
          type: "radio",
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
          label: "Укажите статус Займодателя",
        },
        ...getDetails(lenderStatus, 1),
      ],
      [
        {
          variant: "title",
          name: "Заемщик",
        },
        {
          variant: "input",
          name: "borrower_requisites",
          type: "text",
          label: "Укажите реквизиты Заемщика",
        },
        {
          variant: "radio",
          name: "borrower_status",
          type: "radio",
          label: "Укажите статус Заемщика",
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
      docsName={"zaim.docx"}
    />
  );
};

export default Zaim;
