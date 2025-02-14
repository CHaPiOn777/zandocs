/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import CustomButton from "@/ui/Button/CustomButton";
import CustomInput from "@/ui/Inputs/CustomInput";
import { ReactElement, useState } from "react";
import useIsMobile from "@/hooks/useIsMobile";
import { downloadFileFromResponse } from "@/hooks/downloadFile";
import { Grid, Typography } from "@mui/material";
import CustomRadio from "@/ui/CustomRadio/CustomRadio";
export type TFormFields = {
  variant?: string;
  name: string;
  type?: string;
  xs?: number;
  label?: string;
};
type TPropsDocs = {
  docsName: string;
  control: any;
  handleSubmit: any;
  formFields: TFormFields[][];
  flags: Record<string, boolean>;
};
const CustomFormDocs = <T,>({
  docsName,
  control,
  handleSubmit,
  formFields,
  flags,
}: TPropsDocs) => {
  const [loading, setLoading] = useState(false);
  const isMobile = useIsMobile();

  const onSubmit = async (data: T) => {
    setLoading(true);
    const newData = flags ? { ...data, ...flags } : data;
    const array =
      typeof newData === "object" &&
      "array" in newData! &&
      typeof newData.array === "string"
        ? newData.array.split("; ").map((item) => ({ value: item }))
        : null;

    try {
      const response = await fetch("/api/generate-doc", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          templateFile: docsName,
          variables: array ? { ...newData, array } : newData,
        }),
      });

      if (!response.ok) {
        throw new Error("Ошибка при генерации документа");
      }

      downloadFileFromResponse(response, docsName);
    } catch (error) {
      console.error("Ошибка:", error);
    } finally {
      setLoading(false);
    }
  };
  const returnDataByType = ({ type, index, item }: any) => {
    const obj: Record<string, ReactElement<any, any>> = {
      title: (
        <Typography
          sx={{ textTransform: "uppercase", paddingBottom: "12px" }}
          key={index}
          variant="h4"
        >
          {item.name}
        </Typography>
      ),
      input: (
        <CustomInput
          name={item.name}
          type={item.type}
          control={control as any}
          label={item.label ?? ""}
        />
      ),
      radio: (
        <CustomRadio
          name={item.name}
          data={item.radioVariant}
          control={control as any}
          label={item.label ?? ""}
        />
      ),
    };
    return obj[type];
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        width: "100%",

        display: "flex",
        flexDirection: "column",
        gap: "24px",
        marginTop: isMobile ? 0 : "40px",
      }}
    >
      <Grid container spacing={6}>
        {formFields.map((items, indexItems) => (
          <Grid item xs={12} key={`group-${indexItems}`}>
            <Grid container spacing={3}>
              {items.map((item, index) => (
                <Grid
                  item
                  xs={"xs" in item ? item.xs : 12} // Если дата — 50% (6 из 12), иначе 100% (12 из 12)
                  key={index}
                >
                  {returnDataByType({
                    type: item.variant,
                    index: `${indexItems}${index}`,
                    item,
                  })}
                </Grid>
              ))}
            </Grid>
          </Grid>
        ))}
      </Grid>

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

export default CustomFormDocs;
