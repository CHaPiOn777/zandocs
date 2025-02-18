/* eslint-disable @typescript-eslint/no-explicit-any */
import { Column } from "./../../app/account/orders/_components/CustomTable";
import useIsMobile from "@/hooks/useIsMobile";

const ColumnsDocuments = (): Column<any>[] => {
  const isMobile = useIsMobile();
  return [
    {
      label: "Товар",
      key: "0",
    },
    {
      label: "Цена",
      key: "1",
    },
    // {
    //   label: "Истекает",
    //   key: "2",
    // },
    {
      label: isMobile ? "" : "Загрузка",
      key: "3",
    },
  ];
};

export default ColumnsDocuments;
