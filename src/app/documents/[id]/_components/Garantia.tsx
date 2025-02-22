"use client";
import { getDetails, getFlags } from "@/hooks/tabsDos";
import CustomFormDocs from "@/ui/CustomFormDocs/CustomFormDocs";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMemo } from "react";
import { useForm, useWatch } from "react-hook-form";
import { z } from "zod";

const garantiaShema = z.object({
  contract_number: z.string(),
  contract_city: z.string(),
  contract_date: z.string(),
  guarantor_status: z.string(),
  beneficiary_status: z.string(),
  dolshnik_status: z.string(),
  name1: z.string(),
  passport1: z.string(),
  iin1: z.string(),
  name2: z.string(),
  passport2: z.string(),
  iin2: z.string(),
  name3: z.string(),
  passport3: z.string(),
  iin3: z.string(),
  document_type: z.string(),
  guarantee_amount: z.string(),
  guarantee_period: z.string(),
  main_obligation_amount: z.string(),
  main_obligation_term: z.string(),
  execution_basis: z.string(),
  execution_method: z.string(),
  notification_method: z.string(),
  applicable_law: z.string(),
  dispute_resolution: z.string(),
  guarantor_representative: z.string(),
  beneficiary_representative: z.string(),
  dolzhik_representative: z.string(),
  date_end: z.string(),
});

export type VozmezdnoeType = z.infer<typeof garantiaShema>;

const Garantia = () => {
  const { control, handleSubmit } = useForm<VozmezdnoeType>({
    mode: "onChange",
    resolver: zodResolver(garantiaShema),
    defaultValues: {
      contract_number: "",
      contract_city: "",
      contract_date: "",
      guarantor_status: "юридическое лицо",
      beneficiary_status: "юридическое лицо",
      dolshnik_status: "юридическое лицо",
      name1: "",
      passport1: "",
      iin1: "",
      name2: "",
      passport2: "",
      iin2: "",
      name3: "",
      passport3: "",
      iin3: "",
      document_type: "",
      guarantee_amount: "",
      guarantee_period: "",
      main_obligation_amount: "",
      main_obligation_term: "",
      execution_basis: "",
      execution_method: "",
      notification_method: "",
      applicable_law: "",
      dispute_resolution: "",
      guarantor_representative: "",
      beneficiary_representative: "",
      dolzhik_representative: "",
      date_end: "бессрочно",
    },
  });
  const lenderStatus = useWatch({ control, name: "guarantor_status" });
  const borrowerStatus = useWatch({ control, name: "beneficiary_status" });
  const dolzhikStatus = useWatch({ control, name: "dolshnik_status" });

  const lenderFlags = getFlags(lenderStatus, 1);
  const borrowFlags = getFlags(borrowerStatus, 2);
  const dolzhikFlags = getFlags(dolzhikStatus, 3);
  const flags = { ...lenderFlags, ...borrowFlags, ...dolzhikFlags };
  const formFields = useMemo(
    () => [
      [
        {
          variant: "title",
          name: "Общая информация о договоре гарантии",
        },
        {
          variant: "input",
          name: "contract_number",
          type: "text",
          label: "Укажите номер договора гарантии",
        },
        {
          variant: "input",
          name: "contract_city",
          type: "text",
          label: "Укажите место заключения договора (город)",
        },
        {
          variant: "input",
          name: "contract_date",
          type: "date",
          label: "Дата заключения договора (день, месяц, год)",
        },
      ],
      [
        {
          variant: "title",
          name: "Стороны договора",
        },
        {
          variant: "radio",
          name: "guarantor_status",
          type: "radio",
          label: "Укажите статус Гаранта",
          radioVariant: [
            {
              value: "юридическое лицо",
              label: "Юридическое лицо",
            },
            {
              value: "физическое лицо",
              label: "Физическое лицо",
            },
            {
              value: "индивидуальный предприниматель",
              label: "Индивидуальный предприниматель",
            },
          ],
        },
        ...getDetails(lenderStatus, 1),
        {
          variant: "radio",
          name: "beneficiary_status",
          type: "radio",
          label: "Укажите статус Бенефициара",
          radioVariant: [
            {
              value: "юридическое лицо",
              label: "Юридическое лицо",
            },
            {
              value: "физическое лицо",
              label: "Физическое лицо",
            },
            {
              value: "индивидуальный предприниматель",
              label: "Индивидуальный предприниматель",
            },
          ],
        },
        ...getDetails(borrowerStatus, 2),
        {
          variant: "radio",
          name: "dolshnik_status",
          type: "radio",
          label: "Укажите статус Должника",
          radioVariant: [
            {
              value: "юридическое лицо",
              label: "Юридическое лицо",
            },
            {
              value: "физическое лицо",
              label: "Физическое лицо",
            },
            {
              value: "индивидуальный предприниматель",
              label: "Индивидуальный предприниматель",
            },
          ],
        },
        ...getDetails(dolzhikStatus, 3),
      ],
      [
        {
          variant: "title",
          name: "Предмет договора",
        },
        {
          variant: "input",
          name: "document_type",
          type: "text",
          label:
            "Укажите тип документа, заключенного между Бенефициаром и Должником (например, кредитное соглашение, договор займа)",
        },
        {
          variant: "input",
          name: "guarantee_amount",
          type: "text",
          label:
            "Введите номер  Кредитного соглашения заключенным между Бенефициаром и Должником и его дату заключения ",
        },
        {
          variant: "input",
          name: "guarantee_period",
          type: "text",
          label:
            "Укажите срок действия гарантии (количество дней, месяцев или конкретная дата)",
        },
        {
          variant: "input",
          name: "main_obligation_amount",
          type: "text",
          label:
            "Сколько рабочих дней у Гаранта на исполнение обязательств после получения требования от Бенефициара? (Укажите срок в рабочих днях, например, 5 рабочих дней)",
        },
        {
          variant: "input",
          name: "main_obligation_term",
          type: "text",
          label:
            "Сколько рабочих дней у Гаранта на исполнение обязательств после получения требования от Бенефициара? (Укажите срок в рабочих днях, например, 5 рабочих дней)",
        },
      ],
      [
        {
          variant: "title",
          name: "Обязанности сторон",
        },
        {
          variant: "input",
          name: "execution_basis",
          type: "text",
          label:
            "Сколько рабочих дней у Гаранта на оплату всех причитающихся сумм по Кредитному соглашению после получения письменного требования оплатить все суммы причитающиеся по Кредитному соглашению от Бенефициара? Пример: 5 рабочих дней",
        },
        {
          variant: "input",
          name: "execution_method",
          type: "text",
          label:
            "В течение какого срока Гарант обязан уведомить Бенефициара о значительных изменениях, влияющих на его финансовое состояние?  Пример: в течение 3 дней",
        },
      ],
      [
        {
          variant: "title",
          name: "Ответственность гаранта",
        },
        {
          variant: "input",
          name: "notification_method",
          type: "text",
          label:
            "Какой процент неустойки должен начисляться за каждый день просрочки Гаранта в исполнении обязательств? Пример: 0,1% ",
        },
        {
          variant: "input",
          name: "applicable_law",
          type: "text",
          label:
            "В какой суд будет направлен спор, если стороны не достигнут согласия?  Пример ответа: в Арбитражном суде города Алматы",
        },
        {
          variant: "input",
          name: "dispute_resolution",
          type: "text",
          label:
            "Укажите количество дней, за которое Гарант обязан уведомить Бенефициара в случае одностороннего расторжения договора. Пример: 30 дней ",
        },
        {
          variant: "input",
          name: "date_end",
          type: "text",
          label:
            "Укажите дату окончания действия договора в формате ДД.ММ.ГГГГ или “бессрочно”.   Пример: 31.12.2025 ",
        },
      ],
      [
        {
          variant: "title",
          name: "Подписание договора",
        },
        {
          variant: "input",
          name: "guarantor_representative",
          type: "text",
          label: "Укажите данные представителя Гаранта",
        },
        {
          variant: "input",
          name: "beneficiary_representative",
          type: "text",
          label: "Укажите данные представителя Бенефициара",
        },
        {
          variant: "input",
          name: "dolzhik_representative",
          type: "text",
          label: "Укажите данные представителя Должника",
        },
      ],
    ],
    [lenderStatus, borrowerStatus, dolzhikStatus]
  );

  return (
    <CustomFormDocs
      flags={flags}
      control={control}
      handleSubmit={handleSubmit}
      formFields={formFields}
      docsName={"Garantia.docx"}
    />
  );
};

export default Garantia;
