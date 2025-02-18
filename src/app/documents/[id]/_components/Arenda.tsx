"use client";
import { getDetails, getFlags } from "@/hooks/tabsDos";
import CustomFormDocs from "@/ui/CustomFormDocs/CustomFormDocs";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMemo } from "react";
import { useForm, useWatch } from "react-hook-form";
import { z } from "zod";

const Inputs = z.object({
  place_of_conclusion: z.string(),
  date_of_conclusion: z.string(),
  rental_item: z.string(),
  adress_obj: z.string(),
  on_what_basis: z.string(),
  on_date_basis: z.string(),
  on_date_end: z.string(),
  on_date_end_obj: z.string(),
  price: z.string(),
  price_date: z.string(),
  comunal: z.string(),
  lender_requisites: z.string(),
  borrower_requisites: z.string(),
  date_requisites: z.string(),
  days_visit: z.string(),
  price_first: z.string(),

  lender_status: z.any(),
  borrower_status: z.any(),
  name1: z.string(),
  passport1: z.string(),
  iin1: z.string(),
  name2: z.string(),
  passport2: z.string(),
  iin2: z.string(),
});

export type Arenda = z.infer<typeof Inputs>;

const Arenda = () => {
  const { control, handleSubmit } = useForm<Arenda>({
    mode: "onChange",
    resolver: zodResolver(Inputs),
    defaultValues: {
      place_of_conclusion: "",
      date_of_conclusion: "",
      rental_item: "",
      adress_obj: "",
      on_what_basis: "",
      on_date_basis: "",
      on_date_end: "",
      on_date_end_obj: "",
      price: "",
      price_date: "",
      comunal: "",
      lender_requisites: "",
      borrower_requisites: "",
      date_requisites: "",
      days_visit: "",
      price_first: "",

      lender_status: "юридическое лицо",
      borrower_status: "юридическое лицо",
      name1: "",
      passport1: "",
      iin1: "",
      name2: "",
      passport2: "",
      iin2: "",
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
          label: "Укажите город заключения договора",
        },
        {
          variant: "input",
          name: "date_of_conclusion",
          type: "date",
          label: "Дата заключения договора",
        },
      ],
      [
        {
          variant: "title",
          name: "СТОРОНЫ ДОГОВОРА",
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
          label: "Укажите статус Арендодатора",
        },

        ...getDetails(lenderStatus, 1),
        {
          variant: "radio",
          name: "borrower_status",
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
          label: "Укажите статус Арендодатора",
        },
        ...getDetails(borrowerStatus, 2),
      ],
      [
        {
          variant: "title",
          name: "ПРЕДМЕТ АРЕНДЫ",
        },
        {
          variant: "radio",
          name: "rental_item",
          type: "radio",
          radioVariant: [
            {
              value: "квартира",
              label: "Квартира",
            },
            { value: "частный дом", label: "Частный дом" },
            {
              value: "комната ",
              label: "Комната ",
            },
          ],
          label: "Выберете предмет аренды (объект)",
        },
        {
          variant: "input",
          name: "adress_obj",
          type: "string",
          label:
            "Укажите адрес объекта (Улица, номер дома, общая площадь в кв. м, номер этажа)",
        },
        {
          variant: "input",
          name: "on_what_basis",
          type: "string",
          label:
            "На каком основании Объект принадлежит Арендодателю? Укажите название документа, его номер, кем и когда он был выдан. (Например:  Договор купли-продажи № 12345, выдан Нотариусом Ивановым И.И. 15 марта 2020 года. )",
        },
        {
          variant: "input",
          name: "days_visit",
          type: "string",
          label:
            "За какой промежуток времени Арендодатель должен предупредить о своем визите?",
        },
      ],
      [
        {
          variant: "title",
          name: "СРОКИ ДЕЙСТВИЯ ДОГОВОРА",
        },
        {
          variant: "input",
          name: "on_date_basis",
          type: "string",
          label:
            "Укажите период вступления договора в силу (Например: с момента подписания договора обеими сторонами, или с 12 апреля 2023 года)",
        },
        {
          variant: "input",
          name: "on_date_end",
          type: "string",
          label:
            "До какой даты действует договор аренды? (Например: До 12 апреля 2026 года, или указать “бессрочно”)",
        },
        {
          variant: "input",
          name: "on_date_end_obj",
          type: "string",
          label:
            "В течение скольких календарных дней Арендодатель должен передать Объект Арендатору? ",
        },
      ],
      [
        {
          variant: "title",
          name: "ПЛАТЕЖИ И РАСЧЕТЫ",
        },
        {
          variant: "input",
          name: "price",
          type: "string",
          label:
            "Каков размер арендной платы в месяц? Укажите сумму цифрами и прописью.  Пример ответа: 250 000 (двести пятьдесят тысяч).",
        },
        {
          variant: "input",
          name: "price_date",
          type: "string",
          label:
            "До какого числа каждого месяца должна быть произведена ежемесячная арендная плата? Укажите число и период, за который производится оплата (текущий или предстоящий месяц). Пример ответа: До 10-го числа каждого месяца за предстоящий месяц.",
        },
        {
          variant: "input",
          name: "price_first",
          type: "string",
          label:
            "В течение скольких рабочих дней Арендатор обязан оплатить арендную плату, а также внести на счет Арендодателя залоговую сумму равную месячной арендной плате?",
        },
      ],
      [
        {
          variant: "title",
          name: "КОММУНАЛЬНЫЕ УСЛУГИ",
        },
        {
          variant: "radio",
          name: "comunal",
          type: "radio",
          radioVariant: [
            {
              value: "арендатором",
              label: "Арендатором",
            },
            { value: "арендодателем", label: "Арендодателем" },
          ],
          label: "Кем оплачиваются коммунальные услуги?",
        },
      ],
      [
        {
          variant: "title",
          name: "реквизиты сторон",
        },
        {
          variant: "input",
          name: "lender_requisites",
          type: "string",
          label: "Укажите реквизиты Арендодателя",
        },
        {
          variant: "input",
          name: "borrower_requisites",
          type: "string",
          label: "Укажите реквизиты Арендатора",
        },
      ],
      [
        {
          variant: "title",
          name: "ЗАКЛЮЧИТЕЛЬНЫЕ ПОЛОЖЕНИЯ",
        },
        {
          variant: "input",
          name: "date_requisites",
          type: "string",
          label: "Укажите дату подписания обеими сторонами",
        },
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
      docsName={"arenda.docx"}
    />
  );
};

export default Arenda;
