"use client";
import { getDetails, getFlags } from "@/hooks/tabsDos";
import CustomFormDocs from "@/ui/CustomFormDocs/CustomFormDocs";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMemo } from "react";
import { useForm, useWatch } from "react-hook-form";
import { z } from "zod";

const Inputs = z.object({
  city_of_contract: z.string(),
  contract_date: z.string(),

  seller_status: z.string(),
  buyer_status: z.string(),
  name1: z.string(),
  passport1: z.string(),
  iin1: z.string(),
  name2: z.string(),
  passport2: z.string(),
  iin2: z.string(),

  property_address: z.string(),
  property_type: z.string(),
  property_area: z.string(),
  property_floor: z.string(),
  property_purpose: z.string(),
  ownership_document: z.string(),
  transfer_days: z.string(),
  buyer_documents: z.string(),
  property_price: z.string(),
  initial_payment: z.string(),
  initial_payment_due_date: z.string(),
  remaining_payment: z.string(),
  remaining_payment_due_date: z.string(),
  payment_method: z.string(),
  transfer_deadline: z.string(),
  transfer_penalty: z.string(),
  payment_penalty: z.string(),
  defect_fix_days: z.string(),
  seller_details: z.string(),
  buyer_details: z.string(),
});

export type DKPFrom = z.infer<typeof Inputs>;

const DKP = () => {
  const { control, handleSubmit } = useForm<DKPFrom>({
    mode: "onChange",
    resolver: zodResolver(Inputs),
    defaultValues: {
      city_of_contract: "",
      contract_date: "",
      seller_status: "юридическое лицо",
      buyer_status: "юридическое лицо",
      name1: "",
      passport1: "",
      iin1: "",
      name2: "",
      passport2: "",
      iin2: "",
      property_address: "",
      property_type: "",
      property_area: "",
      property_floor: "",
      property_purpose: "",
      ownership_document: "",
      transfer_days: "",
      buyer_documents: "",
      property_price: "",
      initial_payment: "",
      initial_payment_due_date: "",
      remaining_payment: "",
      remaining_payment_due_date: "",
      payment_method: "",
      transfer_deadline: "",
      transfer_penalty: "",
      payment_penalty: "",
      defect_fix_days: "",
      seller_details: "",
      buyer_details: "",
    },
  });
  const lenderStatus = useWatch({ control, name: "seller_status" });
  const borrowerStatus = useWatch({ control, name: "buyer_status" });

  const lenderFlags = getFlags(lenderStatus, 1);
  const borrowFlags = getFlags(borrowerStatus, 2);
  const flags = { ...lenderFlags, ...borrowFlags };

  const formFields = useMemo(
    () => [
      [
        { variant: "title", name: "Общие сведения о договоре" },
        {
          variant: "input",
          name: "city_of_contract",
          type: "text",
          label: "В каком городе заключается договор?",
        },
        {
          variant: "input",
          name: "contract_date",
          type: "date",
          label: "Укажите день, месяц и год заключения договора",
        },
      ],
      [
        { variant: "title", name: "Стороны договора" },
        {
          variant: "radio",
          name: "seller_status",
          type: "radio",
          label: "Укажите статус Продавца",
          radioVariant: [
            { value: "юридическое лицо", label: "Юридическое лицо" },
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
          name: "buyer_status",
          type: "radio",
          label: "Укажите статус Покупателя",
          radioVariant: [
            { value: "юридическое лицо", label: "Юридическое лицо" },
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
        { variant: "title", name: "Описание недвижимости" },
        {
          variant: "input",
          name: "property_address",
          type: "text",
          label: "Укажите точный адрес недвижимости и её кадастровый номер",
        },
        {
          variant: "input",
          name: "property_type",
          type: "text",
          label: "Вид недвижимого имущества (какую недвижимость вы продаете)",
        },
        {
          variant: "input",
          name: "property_area",
          type: "text",
          label: "Укажите общую площадь недвижимости в кв. м",
        },
        {
          variant: "input",
          name: "property_floor",
          type: "text",
          label: "На каком этаже находится недвижимость?",
        },
        {
          variant: "input",
          name: "property_purpose",
          type: "text",
          label: "Укажите назначение недвижимости",
        },
      ],
      [
        { variant: "title", name: "Правоустанавливающие документы" },
        {
          variant: "input",
          name: "ownership_document",
          type: "text",
          label: "Документ, подтверждающий право собственности Продавца",
        },
      ],
      [
        { variant: "title", name: "Условия передачи недвижимости" },
        {
          variant: "input",
          name: "transfer_days",
          type: "text",
          label: "В течение какого количества дней передача недвижимости?",
        },
        {
          variant: "input",
          name: "buyer_documents",
          type: "text",
          label:
            "Какие документы Покупатель вправе требовать от Продавца для оформления права собственности на недвижимость? ",
        },
      ],
      [
        { variant: "title", name: "Финансовые условия" },
        {
          variant: "input",
          name: "property_price",
          type: "text",
          label: "Общая стоимость недвижимости в тенге",
        },
        {
          variant: "input",
          name: "initial_payment",
          type: "text",
          label: "Сумма первоначального взноса",
        },
        {
          variant: "input",
          name: "initial_payment_due_date",
          type: "date",
          label: "Дата внесения первоначального взноса",
        },
        {
          variant: "input",
          name: "remaining_payment",
          type: "text",
          label: "Сумма оставшейся оплаты",
        },
        {
          variant: "input",
          name: "remaining_payment_due_date",
          type: "date",
          label: "Дата внесения оставшейся суммы",
        },
        {
          variant: "input",
          name: "payment_method",
          type: "text",
          label:
            "Укажите форму оплаты, указать реквизиты счета Продавца для перечисления денежных средств. ",
        },
      ],
      [
        { variant: "title", name: "Ответственность сторон" },
        {
          variant: "input",
          name: "transfer_deadline",
          type: "text",
          label: "Срок передачи недвижимости после оплаты",
        },
        {
          variant: "input",
          name: "transfer_penalty",
          type: "text",
          label: "Процент неустойки за просрочку передачи",
        },
        {
          variant: "input",
          name: "payment_penalty",
          type: "text",
          label: "Процент неустойки за просрочку оплаты",
        },
        {
          variant: "input",
          name: "defect_fix_days",
          type: "text",
          label: "Срок устранения выявленных недостатков",
        },
      ],
      [
        { variant: "title", name: "Реквизиты сторон" },
        {
          variant: "input",
          name: "seller_details",
          type: "text",
          label: "Реквизиты Продавца",
        },
        {
          variant: "input",
          name: "buyer_details",
          type: "text",
          label: "Реквизиты Покупателя",
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
      docsName={"DKP.docx"}
    />
  );
};

export default DKP;
