"use client";
import {
  getContributionDetails,
  getDetailsBusiness,
  getFlags,
  getFlags2,
} from "@/hooks/tabsDos";
import CustomFormDocs from "@/ui/CustomFormDocs/CustomFormDocs";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useMemo } from "react";
import { useForm, useWatch } from "react-hook-form";
import { z } from "zod";

const uschDogSchema = z.object({
  company_name: z.string(),
  participant_1_status: z.any(),
  participant_2_status: z.any(),
  name1: z.string(),
  passport1: z.string(),
  iin1: z.string(),
  namedata1: z.string(),
  registry1: z.string(),
  address1: z.string(),
  name2: z.string(),
  passport2: z.string(),
  iin2: z.string(),
  namedata2: z.string(),
  registry2: z.string(),
  address2: z.string(),
  name3: z.string(),
  passport3: z.string(),
  name4: z.string(),
  passport4: z.string(),
  company_name_kz_full: z.string(),
  company_name_kz_short: z.string(),
  company_name_ru_full: z.string(),
  company_name_ru_short: z.string(),
  company_name_en_full: z.string(),
  company_name_en_short: z.string(),
  company_location: z.string(),
  company_duration: z.string(),
  charter_capital: z.string(),
  participant_1_share: z.string(),
  participant_1: z.string(),
  participant_1_contribution_type: z.any(),
  participant_1_contribution_description: z.string(),
  participant_1_contribution_value: z.string(),
  participant_2_share: z.string(),
  participant_2: z.string(),
  participant_2_contribution_type: z.any(),
  participant_2_contribution_description: z.string(),
  participant_2_contribution_value: z.string(),
  control_body: z.any(),
  representation_rights: z.any(),
  voting_rules: z.any(),
  executive_structure: z.any(),
  executive_structure1: z.any(),
  executive_structure2: z.any(),
  executive_structure3: z.any(),
  executive_structure4: z.any(),
  executive_members_count: z.string(),
  participants_details1: z.string(),
  participants_details2: z.string(),
  isDirecеtion: z.boolean(),
});

export type UchDogType = z.infer<typeof uschDogSchema>;

const UchDog = () => {
  const { control, handleSubmit, setValue } = useForm<UchDogType>({
    mode: "onChange",
    resolver: zodResolver(uschDogSchema),
    defaultValues: {
      company_name: "",
      participant_1_status: "юридическое лицо",
      participant_2_status: "юридическое лицо",
      name1: "",
      passport1: "",
      iin1: "",
      namedata1: "",
      registry1: "",
      address1: "",
      name2: "",
      passport2: "",
      iin2: "",
      namedata2: "",
      registry2: "",
      address2: "",
      name3: "",
      passport3: "",
      name4: "",
      passport4: "",
      company_name_kz_full: "",
      company_name_kz_short: "",
      company_name_ru_full: "",
      company_name_ru_short: "",
      company_name_en_full: "",
      company_name_en_short: "",
      company_location: "",
      company_duration: "",
      charter_capital: "малое предпринимательство",
      participant_1_share: "",
      participant_1: "",
      participant_1_contribution_type: "денежная",
      participant_1_contribution_description: "",
      participant_1_contribution_value: "",
      participant_2_share: "",
      participant_2: "",
      participant_2_contribution_type: "денежная",
      participant_2_contribution_description: "",
      participant_2_contribution_value: "",
      control_body: "",
      representation_rights: "",
      voting_rules: "",
      executive_structure: "",
      executive_structure1: "",
      executive_structure2: "",
      executive_structure3: "",
      executive_structure4: "",
      executive_members_count: "",
      participants_details1: "",
      participants_details2: "",
      isDirecеtion: true,
    },
  });

  const participant1Status = useWatch({
    control,
    name: "participant_1_status",
  });
  const participant2Status = useWatch({
    control,
    name: "participant_2_status",
  });
  const participant1Type = useWatch({
    control,
    name: "participant_1_contribution_type",
  });
  const participant2Type = useWatch({
    control,
    name: "participant_2_contribution_type",
  });
  const executiveStructure = useWatch({
    control,
    name: "executive_structure",
  });

  const participant1Details = getDetailsBusiness(participant1Status, 1);
  const participant2Details = getDetailsBusiness(participant2Status, 2);

  const participantContribution1Details = getContributionDetails(
    participant1Type,
    3
  );
  const participantContribution2Details = getContributionDetails(
    participant2Type,
    4
  );

  const participant1Flags = getFlags(participant1Status, 1);
  const participant2Flags = getFlags(participant2Status, 2);

  const participant1TypeFlags = getFlags2(participant1Type, 3);
  const participant2TypeFlags = getFlags2(participant2Type, 4);

  const flags = {
    ...participant1Flags,
    ...participant2Flags,
    ...participant1TypeFlags,
    ...participant2TypeFlags,
  };

  useEffect(() => {
    setValue("isDirecеtion", executiveStructure !== "Директор");
  }, [executiveStructure]);

  const formFields = useMemo(
    () => [
      [
        { variant: "title", name: "Основные сведения о ТОО" },
        {
          variant: "input",
          name: "company_name",
          type: "text",
          label: "Укажите наименование ТОО",
        },

        {
          variant: "radio",
          name: "participant_1_status",
          type: "radio",
          label: "Укажите статус Участника 1",
          radioVariant: [
            { value: "юридическое лицо", label: "Юридическое лицо" },
            { value: "физическое лицо", label: "Физическое лицо" },
            {
              value: "индивидуальный предприниматель",
              label: "Индивидуальный предприниматель",
            },
          ],
        },
        ...participant1Details,
        {
          variant: "radio",
          name: "participant_2_status",
          type: "radio",
          label: "Укажите статус Участника 2",
          radioVariant: [
            { value: "юридическое лицо", label: "Юридическое лицо" },
            { value: "физическое лицо", label: "Физическое лицо" },
            {
              value: "индивидуальный предприниматель",
              label: "Индивидуальный предприниматель",
            },
          ],
        },
        ...participant2Details,
      ],
      [
        { variant: "title", name: "Наименования Товарищества" },
        {
          variant: "input",
          name: "company_name_kz_full",
          type: "text",
          label: "Укажите полное название на казахском языке",
        },
        {
          variant: "input",
          name: "company_name_kz_short",
          type: "text",
          label: "Укажите короткое название на казахском языке",
        },
        {
          variant: "input",
          name: "company_name_ru_full",
          type: "text",
          label: "Укажите полное название на русском языке",
        },
        {
          variant: "input",
          name: "company_name_ru_short",
          type: "text",
          label: "Укажите короткое название на русском языке",
        },
        {
          variant: "input",
          name: "company_name_en_full",
          type: "text",
          label: "Укажите полное название на английском языке",
        },
        {
          variant: "input",
          name: "company_name_en_short",
          type: "text",
          label: "Укажите короткое название на английском языке",
        },
        {
          variant: "input",
          name: "company_location",
          type: "text",
          label: "Укажите юридический адрес Товарищества",
        },
        {
          variant: "input",
          name: "company_duration",
          type: "text",
          label: "Укажите срок, например: «бессрочно» или конкретную дату",
        },
      ],
      [
        { variant: "title", name: "Организационно-правовая информация" },
        {
          variant: "radio",
          name: "charter_capital",
          type: "radio",
          label: "К какому виду предпринимательства относится ТОО",
          radioVariant: [
            {
              value: "малое предпринимательство",
              label: "Малое предпринимательство",
            },
            {
              value: "среднее предпринимательство",
              label: "Среднее предпринимательство",
            },
            {
              value: "крупное предпринимательство",
              label: "Крупное предпринимательство",
            },
          ],
        },
        {
          variant: "input",
          name: "participant_1_share",
          type: "number",
          label: "Какова численность работников товарищества в среднем за год?",
        },
        {
          variant: "input",
          name: "participant_2_share",
          type: "string",
          label:
            "Каков среднегодовой доход товарищества в месячных расчетных показателях (МРП)?",
        },
      ],
      [
        {
          variant: "input",
          name: "executive_structure4",
          type: "string",
          label:
            "Какие виды деятельности осуществляет Товарищество? (Выбор или ввод кодов и наименований по ОКЭД, ссылка: https://stat.gov.kz/ru/classifiers/statistical/21/)",
        },
      ],
      [
        { variant: "title", name: "Вклады участников" },
        {
          variant: "input",
          name: "participant_1",
          type: "number",
          label:
            "Какой процент от общего Уставного капитала составляет вклад Участника 1? (Введите процент)",
        },
        {
          variant: "input",
          name: "participant_2",
          type: "string",
          label:
            "Какой процент от общего Уставного капитала составляет вклад Участника 2? (Введите процент)",
        },
        {
          variant: "radio",
          name: "participant_1_contribution_type",
          type: "radio",
          label: "Каким образом Участник 1 вносит вклад в Уставный капитал?",
          radioVariant: [
            { value: "денежная", label: "Денежная" },
            { value: "неденежная", label: "Неденежная" },
          ],
        },
        ...participantContribution1Details,

        {
          variant: "radio",
          name: "participant_2_contribution_type",
          type: "radio",
          label: "Каким образом Участник 2 вносит вклад в Уставный капитал?",
          radioVariant: [
            { value: "денежная", label: "Денежная" },
            { value: "неденежная", label: "Неденежная" },
          ],
        },
        ...participantContribution2Details,
      ],
      [
        { variant: "title", name: "Сроки внесения вкладов" },
        {
          variant: "input",
          name: "control_body",
          type: "text",
          label:
            "В какие сроки участники должны внести вклады в уставный капитал Товарищества, Участник 1",
        },
        {
          variant: "input",
          name: "executive_members_count",
          type: "text",
          label:
            "В какие сроки участники должны внести вклады в уставный капитал Товарищества, Участник 2",
        },
      ],
      [
        { variant: "title", name: "Конфиденциальность и форс-мажор" },
        {
          variant: "input",
          name: "executive_structure",
          type: "text",
          label:
            "На какой срок устанавливается обязательство о неразглашении конфиденциальной информации?",
        },
        {
          variant: "input",
          name: "executive_structure1",
          type: "text",
          label:
            "В течение какого срока участник обязан уведомить Общее собрание о наступлении форс-мажорных обстоятельств?",
        },
      ],
      [
        { variant: "title", name: "Урегулирование споров" },
        {
          variant: "input",
          name: "executive_structure2",
          type: "text",
          label: "В течение какого срока должна быть рассмотрена претензия?",
        },
        {
          variant: "input",
          name: "executive_structure3",
          type: "text",
          label:
            "В течение какого срока после получения претензии необходимо запросить недостающие документы? (Например, 3 рабочих дня)",
        },
      ],
      [
        { variant: "title", name: "Реквизиты участников" },
        {
          variant: "input",
          name: "participants_details1",
          type: "text",
          label: "Укажите реквизиты Участника1",
        },
        {
          variant: "input",
          name: "participants_details2",
          type: "text",
          label: "Укажите реквизиты Участника2",
        },
      ],
    ],
    [
      participant1Details,
      participant2Details,
      participantContribution1Details,
      participantContribution2Details,
    ]
  );

  return (
    <CustomFormDocs
      flags={flags}
      control={control}
      handleSubmit={handleSubmit}
      formFields={formFields}
      docsName={"uchDogSchema.docx"}
    />
  );
};

export default UchDog;
