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

  customer_status: z.string(),
  executor_status: z.string(),
  name1: z.string(),
  passport1: z.string(),
  iin1: z.string(),
  name2: z.string(),
  passport2: z.string(),
  iin2: z.string(),
  service_area: z.string(),
  consultation_topics: z.string(),
  recommendations: z.string(),

  service_location: z.string(),
  written_consultation_days: z.string(),
  oral_consultation_days: z.string(),
  license_required: z.string(),

  termination_notice_days: z.string(),
  service_start_days: z.string(),

  service_cost_basis: z.string(),
  monthly_fee: z.string(),

  payment_due_days: z.string(),
  bank_details1: z.string(),
  bank_details2: z.string(),
  bank_details3: z.string(),
  bank_details4: z.string(),

  penalty_percent: z.string(),
  act_signing_days: z.string(),
  act_signing_days2: z.string(),
  act_signing_days3: z.string(),
  act_signing_days4: z.string(),
  act_signing_days5: z.string(),
  act_signing_days6: z.string(),
  act_signing_days7: z.string(),
  act_signing_days8: z.string(),
});

export type KonsultingForm = z.infer<typeof Inputs>;

const Konsulting = () => {
  const { control, handleSubmit } = useForm<KonsultingForm>({
    mode: "onChange",
    resolver: zodResolver(Inputs),
    defaultValues: {
      place_of_conclusion: "",
      date_of_conclusion: "",
      customer_status: "юридическое лицо",
      executor_status: "юридическое лицо",
      service_area: "",
      name1: "",
      passport1: "",
      iin1: "",
      name2: "",
      passport2: "",
      iin2: "",
      consultation_topics: "",
      recommendations: "",
      service_location: "",
      written_consultation_days: "",
      oral_consultation_days: "",
      license_required: "",
      termination_notice_days: "",
      service_start_days: "",
      service_cost_basis: "",
      monthly_fee: "",
      payment_due_days: "",
      bank_details1: "",
      bank_details2: "",
      bank_details3: "",
      bank_details4: "",
      penalty_percent: "",
      act_signing_days: "",
      act_signing_days2: "",
      act_signing_days3: "",
      act_signing_days4: "",
      act_signing_days5: "",
      act_signing_days6: "",
      act_signing_days7: "",
      act_signing_days8: "",
    },
  });
  const lenderStatus = useWatch({ control, name: "customer_status" });
  const borrowerStatus = useWatch({ control, name: "executor_status" });

  const lenderFlags = getFlags(lenderStatus, 1);
  const borrowFlags = getFlags(borrowerStatus, 2);
  const flags = { ...lenderFlags, ...borrowFlags };
  const formFields = useMemo(
    () => [
      [
        {
          variant: "title",
          name: "Общие сведения о договоре",
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
          label: "Укажите дату заключения договора",
        },
      ],

      [
        {
          variant: "title",
          name: "Стороны договора",
        },
        {
          variant: "radio",
          name: "customer_status",
          type: "radio",
          label: "Укажите статус Заказчика",
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
          name: "executor_status",
          type: "radio",
          label: "Укажите статус Исполнителя",
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
        {
          variant: "title",
          name: "Сфера и характер оказываемых услуг",
        },
        {
          variant: "input",
          name: "service_area",
          type: "text",
          label:
            "В какой области Исполнитель будет оказывать консультационные услуги?",
        },
        {
          variant: "textarea",
          name: "consultation_topics",
          type: "text",
          label:
            "По каким вопросам будут предоставляться устные и письменные консультации?",
        },
        {
          variant: "textarea",
          name: "recommendations",
          type: "text",
          label: "Какие рекомендации и предложения будут разрабатываться?",
        },
      ],

      [
        {
          variant: "title",
          name: "Условия оказания услуг",
        },
        {
          variant: "input",
          name: "service_location",
          type: "text",
          label: "Укажите место оказания услуг",
        },
        {
          variant: "input",
          name: "written_consultation_days",
          type: "text",
          label: "Количество рабочих дней для письменных консультаций",
        },
        {
          variant: "input",
          name: "oral_consultation_days",
          type: "text",
          label: "Количество рабочих дней для устных консультаций",
        },
        {
          variant: "radio",
          name: "license_required",
          type: "radio",
          label: "Требуется ли лицензия для оказания услуг?",
          radioVariant: [
            {
              value:
                "Подтверждать наличие всех необходимых лицензий и разрешений для оказания консультационных услуг, указанных в пункте 1.1. настоящего Договора в соответствии с законодательством Республики Казахстан. По запросу Заказчика Исполнитель обязуется предоставить подтверждение наличия лицензии или сертификата, подтверждающего право на оказание услуг, требующих лицензирования. ",
              label: "Да",
            },
            { value: "", label: "Нет" },
          ],
        },
      ],

      [
        {
          variant: "title",
          name: "Порядок расторжения договора",
        },
        {
          variant: "input",
          name: "termination_notice_days",
          type: "text",
          label: "За сколько дней Заказчик может уведомить о расторжении?",
        },
      ],

      [
        {
          variant: "title",
          name: "Сроки исполнения обязательств",
        },
        {
          variant: "input",
          name: "service_start_days",
          type: "text",
          label:
            "В течение скольких рабочих дней Исполнитель должен приступить к оказанию услуг?",
        },
      ],

      [
        {
          variant: "title",
          name: "Определение и оплата стоимости услуг",
        },
        {
          variant: "input",
          name: "service_cost_basis",
          type: "text",
          label: "На основании чего определяется стоимость услуг?",
        },
        {
          variant: "input",
          name: "monthly_fee",
          type: "text",
          label: "Какова стоимость ежемесячного обслуживания по договору?",
        },
      ],

      [
        {
          variant: "title",
          name: "Условия оплаты",
        },
        {
          variant: "input",
          name: "payment_due_days",
          type: "text",
          label:
            "Срок оплаты после подписания акта выполненных работ (рабочие дни)",
        },
        {
          variant: "input",
          name: "bank_details1",
          type: "text",
          label:
            "Укажите реквизиты для безналичной оплаты. Укажите номер расчетного счета Исполнителя ",
        },
        {
          variant: "input",
          name: "bank_details2",
          type: "text",
          label:
            "Укажите реквизиты для безналичной оплаты. Укажите наименование банка Исполнителя.",
        },
        {
          variant: "input",
          name: "bank_details3",
          type: "text",
          label:
            "Укажите реквизиты для безналичной оплаты. Укажите БИК банка Исполнителя. ",
        },
        {
          variant: "input",
          name: "bank_details4",
          type: "text",
          label:
            "Укажите реквизиты для безналичной оплаты. Укажите БИН Исполнителя. ",
        },
      ],

      [
        {
          variant: "title",
          name: "Ответственность сторон",
        },
        {
          variant: "input",
          name: "penalty_percent",
          type: "text",
          label: "Какой процент пени начисляется за каждый день задержки?",
        },
        {
          variant: "input",
          name: "act_signing_days",
          type: "text",
          label:
            "В течение скольких рабочих дней Заказчик должен подписать акт выполненных работ?",
        },
        {
          variant: "input",
          name: "act_signing_days2",
          type: "text",
          label:
            "Каков срок действия обязательств по конфиденциальности после окончания договора (в годах)? ",
        },
        {
          variant: "input",
          name: "act_signing_days3",
          type: "text",
          label:
            "В течение какого срока (в днях) сторона должна уведомить другую сторону о наступлении форс-мажорных обстоятельств? ",
        },
        {
          variant: "input",
          name: "act_signing_days4",
          type: "text",
          label:
            "Каков срок (в днях), после которого при продолжающихся форс-мажорных обстоятельствах стороны вправе расторгнуть договор в одностороннем порядке? ",
        },
        {
          variant: "input",
          name: "act_signing_days5",
          type: "date",
          label: "Укажите дату начала действия договора ",
        },
        {
          variant: "input",
          name: "act_signing_days6",
          type: "date",
          label:
            "Укажите дату окончания действия договора или если договор бессрочный напишите «на неопределенный срок» ",
        },
        {
          variant: "input",
          name: "act_signing_days7",
          type: "string",
          label: "Укажите реквизиты Исполнителя",
        },
        {
          variant: "input",
          name: "act_signing_days8",
          type: "string",
          label: "Укажите реквизиты Заказчика",
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
      docsName={"Konsulting.docx"}
    />
  );
};

export default Konsulting;
