"use client";
import { getDetails, getFlags } from "@/hooks/tabsDos";
import CustomFormDocs from "@/ui/CustomFormDocs/CustomFormDocs";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMemo } from "react";
import { useForm, useWatch } from "react-hook-form";
import { z } from "zod";

const KPRassrochkaschema = z.object({
  contract_location: z.string(),
  contract_date: z.string(),
  seller: z.string(),
  buyer: z.string(),
  name1: z.string(),
  passport1: z.string(),
  iin1: z.string(),
  name2: z.string(),
  passport2: z.string(),
  iin2: z.string(),
  product_name: z.string(),
  product_quantity: z.string(),
  product_quality: z.string(),
  product_equipment: z.string(),
  product_price: z.string(),
  product_documents: z.string(),
  delivery_period: z.string(),
  violation_notification_period: z.string(),
  delivery_deadline: z.string(),
  delivery_address: z.string(),
  warranty_period: z.string(),
  prepayment_percentage: z.string(),
  remaining_payment_period: z.string(),
  monthly_payment_percentage: z.string(),
  payment_due_date: z.string(),
  penalty_rate: z.string(),
  contract_termination_period: z.string(),
  seller_details: z.string(),
  buyer_details: z.string(),
});
export type KPRassrochkaType = z.infer<typeof KPRassrochkaschema>;

const KPRassrochka = () => {
  const { control, handleSubmit } = useForm<KPRassrochkaType>({
    mode: "onChange",
    resolver: zodResolver(KPRassrochkaschema),
    defaultValues: {
      contract_location: "",
      contract_date: "",
      seller: "юридическое лицо",
      buyer: "юридическое лицо",
      name1: "",
      passport1: "",
      iin1: "",
      name2: "",
      passport2: "",
      iin2: "",
      product_name: "",
      product_quantity: "",
      product_quality: "",
      product_equipment: "",
      product_price: "",
      product_documents: "",
      delivery_period: "",
      violation_notification_period: "",
      delivery_deadline: "",
      delivery_address: "",
      warranty_period: "",
      prepayment_percentage: "",
      remaining_payment_period: "",
      monthly_payment_percentage: "",
      payment_due_date: "",
      penalty_rate: "",
      contract_termination_period: "",
      seller_details: "",
      buyer_details: "",
    },
  });
  const lenderStatus = useWatch({ control, name: "seller" });
  const borrowerStatus = useWatch({ control, name: "buyer" });

  const lenderFlags = getFlags(lenderStatus, 1);
  const borrowFlags = getFlags(borrowerStatus, 2);
  const flags = { ...lenderFlags, ...borrowFlags };
  const formFields = useMemo(
    () => [
      [
        {
          variant: "title",
          name: "Основная информация о договоре",
        },
        {
          variant: "input",
          name: "contract_location",
          type: "text",
          label: "Укажите место заключения договора",
        },
        {
          variant: "input",
          name: "contract_date",
          type: "date",
          label: "Укажите дату заключения договора (день, месяц, год)",
        },
      ],
      [
        {
          variant: "title",
          name: "Стороны договора",
        },
        {
          variant: "radio",
          name: "seller",
          type: "radio",
          label: "Кто выступает Продавцом?",
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
        {
          variant: "radio",
          name: "buyer",
          type: "radio",
          label: "Кто выступает Арендополучателем (Покупателем)?",
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
      [
        {
          variant: "title",
          name: "Предмет договора",
        },
        {
          variant: "input",
          name: "product_name",
          type: "text",
          label: "Какой товар передаётся в рассрочку? Наименование товара",
        },
        {
          variant: "input",
          name: "product_quantity",
          type: "text",
          label: "Какой товар передаётся в рассрочку? Количество товара?",
        },
        {
          variant: "input",
          name: "product_quality",
          type: "text",
          label: "Какой товар передаётся в рассрочку? Качество товара? ",
        },
        {
          variant: "input",
          name: "product_equipment",
          type: "text",
          label: "Какой товар передаётся в рассрочку? Комплектация товара? ",
        },
        {
          variant: "input",
          name: "product_price",
          type: "text",
          label: "Какой товар передаётся в рассрочку? Цена товара?",
        },
        {
          variant: "textarea",
          name: "product_documents",
          type: "text",
          label:
            "Какие документы передаются Покупателю вместе с товаром? (Пример: технический паспорт номер 14750, сертификат качества, инструкция по эксплуатации)",
        },
      ],
      [
        {
          variant: "title",
          name: "Условия передачи товара",
        },
        {
          variant: "input",
          name: "delivery_period",
          type: "text",
          label:
            "В течение какого срока должен быть доставлен товар Покупателю? (Пример: в течение 7 календарных дней)",
        },
        {
          variant: "input",
          name: "violation_notification_period",
          type: "text",
          label:
            "В какой срок Покупатель должен известить Продавца о нарушении условий договора? (Пример: 5 рабочих дней)",
        },
        {
          variant: "input",
          name: "delivery_deadline",
          type: "date",
          label:
            "До какой даты Продавец обязуется передать товар Покупателю? (Пример: 15 марта 2025 года)",
        },
        {
          variant: "input",
          name: "delivery_address",
          type: "text",
          label:
            "По какому адресу осуществляется передача товара? (Пример: г. Алматы, ул. Абая, д. 25)",
        },
        {
          variant: "input",
          name: "warranty_period",
          type: "text",
          label:
            "Какой гарантийный срок устанавливается на товар со момента передачи товара Покупателю? (Пример: 12 месяцев)",
        },
      ],
      [
        {
          variant: "title",
          name: "Условия оплаты",
        },
        {
          variant: "input",
          name: "prepayment_percentage",
          type: "string",
          label:
            "Какой размер предварительной оплаты товара в процентах? (Пример: 30%)",
        },
        {
          variant: "input",
          name: "remaining_payment_period",
          type: "text",
          label:
            "В течение какого срока Покупатель обязан выплатить оставшуюся стоимость товара после доставки? (Пример: 6 месяцев)",
        },
        {
          variant: "input",
          name: "monthly_payment_percentage",
          type: "text",
          label:
            "Каким будет размер ежемесячного платежа в процентах от стоимости товара? (Пример: 10%)",
        },
        {
          variant: "input",
          name: "payment_due_date",
          type: "text",
          label: "До какого числа каждого месяца должны производиться платежи?",
        },
      ],
      [
        {
          variant: "title",
          name: "Ответственность сторон",
        },
        {
          variant: "input",
          name: "penalty_rate",
          type: "text",
          label:
            "Какой размер неустойки за просрочку платежа устанавливается? (Пример: 0,5%)",
        },
        {
          variant: "input",
          name: "contract_termination_period",
          type: "text",
          label:
            "В случае просрочки оплаты Покупателем, в течение скольких дней Продавец имеет право расторгнуть договор? (Пример: 30 дней)",
        },
      ],
      [
        {
          variant: "title",
          name: "Реквизиты сторон",
        },
        {
          variant: "input",
          name: "seller_details",
          type: "text",
          label: "Укажите реквизиты Продавца",
        },
        {
          variant: "input",
          name: "buyer_details",
          type: "text",
          label: "Укажите реквизиты Покупателя",
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
      docsName={"KPRassrochka.docx"}
    />
  );
};

export default KPRassrochka;
