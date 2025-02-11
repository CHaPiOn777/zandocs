"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomButton from "@/ui/Button/CustomButton";
import CustomInput from "@/ui/Inputs/CustomInput";
import { useState } from "react";
import useIsMobile from "@/hooks/useIsMobile";
import { downloadFileFromResponse } from "@/hooks/downloadFile";

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
    {
      name: "city",
      type: "text",
      label: "Укажите город ",
    },
    {
      name: "date",
      type: "date",
      label: "Укажите дату составления ",
    },
    {
      name: "name",
      type: "text",
      label: "Укажите полное ФИО заемщика ",
    },
    {
      name: "inn1",
      type: "number",
      label: "Укажите ИИН заемщика ",
    },
    {
      name: "adress",
      type: "text",
      label: "Укажите адрес заемщика ",
    },
    {
      name: "name2",
      type: "text",
      label: "Укажите Ф.И.О. займодавца ",
    },
    {
      name: "inn2",
      type: "number",
      label: "Укажите ИИН займодавца",
    },
    {
      name: "adress2",
      type: "text",
      label: "Укажите адрес займодавца ",
    },
    {
      name: "summa",
      type: "text",
      label: "Укажите сумму цифрами и прописью ",
    },
    {
      name: "variant",
      type: "text",
      label: "Каким способом были переданы денежные средства?",
    },
    {
      name: "srokVozvr",
      type: "date",
      label: "Укажите срок возврата ",
    },
    {
      name: "procent",
      type: "text",
      label: "Укажите процент или напишите 'без процентов' ",
    },
    {
      name: "reqizits",
      type: "text",
      label: "Укажите реквизиты",
    },
    {
      name: "neustoika",
      type: "text",
      label:
        "Укажите размер неустойки, например, 'в соответствии с законодательством' или '0.1% за каждый день просрочки' ",
    },
  ];

  const isMobile = useIsMobile();

  const { control, handleSubmit } = useForm<Raspiska>({
    mode: "onChange",
    resolver: zodResolver(Inputs),
    defaultValues: {
      city: "",
      date: "",
      name: "",
      inn1: "0",
      adress: "",
      name2: "",
      inn2: "0",
      adress2: "",
      summa: "",
      variant: "",
      srokVozvr: "",
      procent: "",
      reqizits: "",
      neustoika: "",
    },
  });

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: Raspiska) => {
    setLoading(true);
    try {
      const response = await fetch("/api/generate-doc", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          templateFile: "raspiska.docx",
          variables: data,
        }),
      });
      console.log(response);
      if (!response.ok) {
        throw new Error("Ошибка при генерации документа");
      }

      downloadFileFromResponse(response, "raspiska.docx");
    } catch (error) {
      console.error("Ошибка:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        width: "100%",

        display: "flex",
        flexDirection: "column",
        gap: "24px",
        marginTop: isMobile ? 0 : "140px",
      }}
    >
      {formFields.map(({ name, type, label }, index) => (
        <CustomInput
          key={index}
          name={name}
          type={type}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          control={control as any}
          label={label}
        />
      ))}
      <CustomButton
        sx={{
          marginTop: "24px",
          width: "100%",
          opacity: loading ? 0.6 : 1,
          gap: "12px",
        }}
        variant="primary"
        disabled={loading}
      >
        Скачать документ
      </CustomButton>
    </form>
  );
};

export default FormPodpiska;
