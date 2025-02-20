"use client";
import { getDetails, getFlags } from "@/hooks/tabsDos";
import CustomFormDocs from "@/ui/CustomFormDocs/CustomFormDocs";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMemo } from "react";
import { useForm, useWatch } from "react-hook-form";
import { z } from "zod";

const contractSchema = z.object({
  contract_number: z.string().optional(),
  contract_city: z.string().optional(),
  contract_date: z.string().optional(),

  customer_status: z.any(),
  contractor_status: z.any(),
  name1: z.string(),
  passport1: z.string(),
  iin1: z.string(),
  name2: z.string(),
  passport2: z.string(),
  iin2: z.string(),
  services_description: z.string().optional(),
  payment_term: z.string().optional(),

  service_stages: z.string().optional(),
  service_location: z.string().optional(),
  service_duration: z.string().optional(),
  customer_resources: z.string().optional(),
  quality_requirements: z.string().optional(),
  service_order: z.any(),

  contract_start_date: z.string().optional(),
  correction_period: z.string().optional(),
  defect_notification_period: z.string().optional(),

  total_cost: z.string().optional(),
  payment_after_act: z.string().optional(),
  acceptance_method: z.any(),

  penalty_rate: z.string().optional(),
  max_penalty: z.string().optional(),

  force_majeure_notification: z.string().optional(),

  contract_modification: z.string().optional(),

  contractor_details: z.string().optional(),
  customer_details: z.string().optional(),
});
export type VozmezdnoeType = z.infer<typeof contractSchema>;

const Vozmezdnoe = () => {
  const { control, handleSubmit } = useForm<VozmezdnoeType>({
    mode: "onChange",
    resolver: zodResolver(contractSchema),
    defaultValues: {
      contract_number: "",
      contract_city: "",
      contract_date: "",
      customer_status: "юридическое лицо",
      contractor_status: "юридическое лицо",
      name1: "",
      passport1: "",
      iin1: "",
      name2: "",
      passport2: "",
      iin2: "",
      services_description: "",
      payment_term: "",
      service_stages: "",
      service_location: "",
      service_duration: "",
      customer_resources: "",
      quality_requirements: "",
      service_order: "",
      contract_start_date: "",
      correction_period: "",
      defect_notification_period: "",
      total_cost: "",
      payment_after_act: "",
      acceptance_method: "",

      penalty_rate: "",
      max_penalty: "",

      force_majeure_notification: "",
      contract_modification: "",

      contractor_details: "",
      customer_details: "",
    },
  });
  const lenderStatus = useWatch({ control, name: "customer_status" });
  const borrowerStatus = useWatch({ control, name: "contractor_status" });

  const lenderFlags = getFlags(lenderStatus, 1);
  const borrowFlags = getFlags(borrowerStatus, 2);
  const flags = { ...lenderFlags, ...borrowFlags };
  const formFields = useMemo(
    () => [
      [
        {
          variant: "title",
          name: "Общие сведения",
        },
        {
          variant: "input",
          name: "contract_number",
          type: "text",
          label: "Укажите номер договора",
        },
        {
          variant: "input",
          name: "contract_city",
          type: "text",
          label: "Укажите город заключения договора",
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
          name: "customer_status",
          type: "radio",
          label: "Укажите статус Заказчика",
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
          name: "contractor_status",
          type: "radio",
          label: "Укажите статус Исполнителя",
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
      ],
      [
        {
          variant: "title",
          name: "Услуги и их оплата",
        },
        {
          variant: "input",
          name: "services_description",
          type: "text",
          label:
            "Какие услуги будут оказаны Исполнителем? Укажите конкретное описание конкретных действий или деятельности Исполнителя.",
        },
        {
          variant: "input",
          name: "payment_term",
          type: "number",
          label:
            "В течение какого времени Заказчик обязуется произвести оплату за оказанные услуги? Например, в течение 10 рабочих дней после подписания акта выполненных работ.",
        },
      ],
      [
        {
          variant: "title",
          name: "Услуги (вид, этапы, место)",
        },
        {
          variant: "input",
          name: "service_stages",
          type: "text",
          label:
            "Какие виды и этапы включают оказываемые услуги? Укажите этапы и виды работ, если требуется, например, консультации, подготовка отчетов и т.д.",
        },
        {
          variant: "input",
          name: "service_location",
          type: "text",
          label:
            "Где будут оказываться услуги? Укажите место, например, офис Заказчика, дистанционно и т.д.",
        },
        {
          variant: "input",
          name: "service_duration",
          type: "text",
          label:
            "Какой срок выполнения услуг? Например, в течение 10 рабочих дней с момента заключения Договора или по графику.",
        },
        {
          variant: "input",
          name: "customer_resources",
          type: "text",
          label:
            "Какие ресурсы и материалы предоставит Заказчик для выполнения услуг? Укажите, например, доступ к данным, предоставление материалов и т.д.",
        },
        {
          variant: "input",
          name: "quality_requirements",
          type: "text",
          label:
            "Какие требования предъявляются к качеству оказываемых услуг? Укажите стандарты качества или иные требования, если применимо.",
        },
        {
          variant: "radio",
          name: "service_order",
          type: "radio",
          label: "Каков порядок оказания услуг?",
          radioVariant: [
            {
              value:
                "Услуги оказываются на регулярной основе с фиксированным объемом в согласованные сроки.",
              label:
                "Услуги оказываются на регулярной основе с фиксированным объемом в согласованные сроки.",
            },
            {
              value:
                "Услуги оказываются по мере необходимости на основании заявок Заказчика.",
              label:
                "Услуги оказываются по мере необходимости на основании заявок Заказчика.",
            },
          ],
        },
      ],
      [
        {
          variant: "title",
          name: "Вступление в силу и исправление недостатков",
        },
        {
          variant: "input",
          name: "contract_start_date",
          type: "date",
          label:
            "Укажите дату вступления Договора в юридическую силу (укажите день/месяц/год)",
        },
        {
          variant: "input",
          name: "correction_period",
          type: "text",
          label:
            "В течение какого времени Исполнитель должен устранить выявленные Заказчиком недостатки в оказанных услугах? (укажите срок, например, 5 рабочих дней после получения уведомления от Заказчика)",
        },
        {
          variant: "input",
          name: "defect_notification_period",
          type: "number",
          label:
            "В течение какого времени Заказчик обязан уведомить Исполнителя о выявленных недостатках в услугах после получения Акта об оказании услуг? (укажите срок, например, 5 рабочих дней)",
        },
      ],
      [
        {
          variant: "title",
          name: "Стоимость, оплата по акту и приемка",
        },
        {
          variant: "input",
          name: "total_cost",
          type: "text",
          label:
            "Какова общая стоимость услуг? (укажите сумму цифрами и прописью в тенге).",
        },
        {
          variant: "input",
          name: "payment_after_act",
          type: "number",
          label:
            "В течение какого времени Заказчик обязуется оплатить услуги после подписания Акта оказанных услуг? (укажите срок, например, 5 рабочих дней)",
        },
        {
          variant: "radio",
          name: "acceptance_method",
          type: "radio",
          label: "Как осуществляется приемка услуг?",
          radioVariant: [
            {
              value: "Единовременно по окончании услуг.",
              label: "Единовременно по окончании услуг.",
            },
            {
              value: "По окончании каждого согласованного отчетного периода.",
              label: "По окончании каждого согласованного отчетного периода.",
            },
          ],
        },
      ],
      [
        {
          variant: "title",
          name: "Неустойка",
        },
        {
          variant: "input",
          name: "penalty_rate",
          type: "number",
          label:
            "Какой процент неустойки начисляется за каждый день задержки исполнения обязательств Исполнителем? Укажите процент от стоимости просроченного обязательства.",
        },
        {
          variant: "input",
          name: "max_penalty",
          type: "number",
          label:
            "Каков максимальный размер неустойки в процентах от общей суммы договора? Укажите максимальный процент от общей суммы договора.",
        },
      ],
      [
        {
          variant: "title",
          name: "Форс-мажор",
        },
        {
          variant: "input",
          name: "force_majeure_notification",
          type: "text",
          label:
            "В течение какого срока Сторона, столкнувшаяся с обстоятельствами непреодолимой силы, должна уведомить другую Сторону о их возникновении? (укажите срок, например, 3 рабочих дня)",
        },
      ],
      [
        {
          variant: "title",
          name: "Изменение и расторжение договора",
        },
        {
          variant: "input",
          name: "contract_modification",
          type: "text",
          label:
            "Укажите порядок изменения и расторжения Договора. Пример ответа: Стороны уведомляют друг друга о расторжении за 20 рабочих дней. ",
        },
      ],
      [
        {
          variant: "title",
          name: "Реквизиты",
        },
        {
          variant: "input",
          name: "contractor_details",
          type: "text",
          label: "Укажите реквизиты Исполнителя",
        },
        {
          variant: "input",
          name: "customer_details",
          type: "text",
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
      docsName={"Vozmezdnoe.docx"}
    />
  );
};

export default Vozmezdnoe;
