/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomFormDocs from "@/ui/CustomFormDocs/CustomFormDocs";

const Inputs = z.object({
  city: z.string(),
  date: z.string(),
  name: z.string(),
  inn1: z.string(),
  adress: z.string(),
  name2: z.string(),
  inn2: z.string(),
  adress2: z.string(),
  summa: z.string(),
  variant: z.string(),
  srokVozvr: z.string(),
  procent: z.string(),
  reqizits: z.string(),
  neustoika: z.string(),
});

export type Raspiska = z.infer<typeof Inputs>;
const FormPodpiska = () => {
  const formFields = [
    [
      {
        variant: "title",
        name: "Общие положения",
      },
      {
        variant: "input",
        name: "city",
        type: "text",
        label: "Укажите город ",
      },
      {
        variant: "input",
        name: "date",
        type: "date",
        xs: 6,
        label: "Укажите дату составления ",
      },
      {
        variant: "input",
        name: "srokVozvr",
        type: "date",
        xs: 6,
        label: "Укажите срок возврата ",
      },
      {
        variant: "input",
        name: "summa",
        type: "text",
        label: "Укажите сумму цифрами и прописью ",
      },

      {
        variant: "input",
        name: "procent",
        type: "text",
        label: `Укажите процент или напишите "без процентов" `,
      },
      {
        variant: "input",
        name: "reqizits",
        type: "text",
        label: "Укажите реквизиты",
      },
      {
        variant: "input",
        name: "neustoika",
        type: "text",
        label: `Укажите размер неустойки, например, "в соответствии с законодательством" или "0.1% за каждый день просрочки" `,
      },
      {
        variant: "radio",
        name: "variant",
        type: "radio",
        radioVariant: [
          {
            value: "перечислены на банковский счет ",
            label: "Перечислены на банковский счет ",
          },
          { value: "наличными", label: "Наличными" },
        ],
        label: "Каким способом были переданы денежные средства?",
      },
    ],
    [
      {
        variant: "title",
        name: "Участник 1",
        type: "input",
      },
      {
        variant: "input",
        name: "name",
        type: "text",
        label: "Укажите полное ФИО заемщика ",
      },
      {
        variant: "input",
        name: "inn1",
        type: "number",
        label: "Укажите ИИН заемщика ",
      },
      {
        variant: "input",
        name: "adress",
        type: "text",
        label: "Укажите адрес заемщика ",
      },
    ],
    [
      {
        variant: "title",
        name: "Участник 2",
        type: "input",
      },
      {
        variant: "input",
        name: "name2",
        type: "text",
        label: "Укажите Ф.И.О. займодавца ",
      },
      {
        variant: "input",
        name: "inn2",
        type: "number",
        label: "Укажите ИИН займодавца",
      },
      {
        variant: "input",
        name: "adress2",
        type: "text",
        label: "Укажите адрес займодавца ",
      },
    ],
  ];

  const { control, handleSubmit } = useForm<Raspiska>({
    mode: "onChange",
    resolver: zodResolver(Inputs),
    defaultValues: {
      city: "",
      date: "",
      name: "",
      inn1: "",
      adress: "",
      name2: "",
      inn2: "",
      adress2: "",
      summa: "",
      variant: "",
      srokVozvr: "",
      procent: "",
      reqizits: "",
      neustoika: "",
    },
  });

  return (
    <CustomFormDocs
      control={control}
      handleSubmit={handleSubmit}
      formFields={formFields}
      docsName={"raspiska.docx"}
    />
  );
};

export default FormPodpiska;
