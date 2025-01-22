/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { createInvoice, getMyBasket, removeCartMyBasket } from "@/api/authApi";
import Container from "@/app/_components/Container/Container";
import CustomTable, {
  Column,
} from "@/app/account/orders/_components/CustomTable";
import DeleteModal from "@/app/basket/_components/DeleteModal";
import { DocsIcon } from "@/image/Basket/DocsIcon";
import { TrashFill } from "@/image/Basket/TrashFill";
import { useBasket } from "@/store/basketStore";
import { useOrders } from "@/store/ordersStore";
import CustomButton from "@/ui/Button/CustomButton";
import Loader from "@/ui/Loader/Loader";
import MainCntainer from "@/ui/MainCntainer/MainCntainer";
import TransitionsModal from "@/ui/Modal/Modal";
import { notify } from "@/ui/ToastProvider/ToastProvider";
import { Box, Stack, Typography } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useMemo, useState } from "react";
export type TActiveDocs = {
  name: string;
  id: string;
};
const Basket = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const basket = useBasket((state) => state.cart);
  const columns = ["Наименование товара", "Цена", "Количество", "Подытог", " "];
  const formattedHeaders = columns.map((label, index) => ({
    label: label,
    align: label === "Количество" || label === " " ? "center" : "left",
    key: index.toString(),
  }));
  const [isLoadingByeCard, setIsLoadingByeCard] = useState<boolean>(false);
  const [isLoadingDel, setIsLoadingDel] = useState<boolean>(false);
  const router = useRouter();
  const setIsFirstRender = useOrders((state) => state.setIsFirstRender);
  const setCart = useBasket((state) => state.setCart);

  const [products, setProducts] = useState<
    {
      product_id: number;
      quantity: number;
    }[]
  >([]);
  const sumPrice = useMemo(() => Number(basket?.totals?.total_price), [basket]);

  const removeItem = async (id: string) => {
    setIsLoadingDel(true);
    try {
      await removeCartMyBasket(id);
      const { data: cart } = await getMyBasket();
      setCart(cart);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        notify("error", error?.response?.data.message);
      }
    } finally {
      setIsLoadingDel(false);
      setIsOpenModal(false);
    }
  };
  const [activeDocs, setActiveDocs] = useState<TActiveDocs>({
    name: "",
    id: "",
  });
  const rows = useMemo(
    () =>
      basket?.items?.map((item: any, index: number) => {
        setProducts((prev) => [
          ...prev,
          {
            product_id: item.id,
            quantity: item.quantity,
          },
        ]);
        return [
          <span
            key={index}
            style={{ display: "flex", gap: "30px", alignItems: "center" }}
          >
            <DocsIcon />
            {item.name}
          </span>,
          item.prices.price + " " + item.prices.currency_symbol,
          <span
            style={{
              border: "1px solid #8DBAFF80",
              padding: "4px 8px",
              borderRadius: "4px",
              width: "24px",
            }}
            key={index + "quantity"}
          >
            {item.quantity}
          </span>,

          item.quantity * Number(item.prices.price) +
            " " +
            item.prices.currency_symbol,
          <TrashFill
            onClick={() => (
              setActiveDocs({ id: item.key, name: item.name }),
              setIsOpenModal(true)
            )}
            key={index + "trash"}
          />,
        ];
      }),
    [basket]
  );
  const buyMyOrders = async () => {
    try {
      setIsLoadingByeCard(true);
      const { data } = await createInvoice({
        amount: sumPrice,
        description: "Покупка товара из корзины",
        items: products,
      });
      router.push(data.data.invoice_url);
      notify("success", data.message);

      setIsFirstRender(true);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        notify("error", error?.response?.data.message);
      }
    } finally {
      setIsLoadingByeCard(false);
    }
  };

  return (
    <MainCntainer sx={{ background: "#F3F9FE" }}>
      <Container sx={{ margin: "100px 0", gap: "24px" }} column>
        <Loader sx={{ height: " 80%" }} isLoader={!rows?.length}>
          <>
            <CustomTable
              isImageTitle
              isBorder={false}
              isLoadingTable={!basket}
              //   loadNextPage={loadNextPage}
              rows={rows}
              sx={{
                maxWidth: "100%",
                paddingBottom: "0",
                border: "1px solid #8dbaff80",
              }}
              isLoading={isLoadingByeCard}
              columns={formattedHeaders as Column<any>[]}
              title={"КОРЗИНА"}
            />

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                width: "416px",
                border: "1px solid #8DBAFF80",
                padding: "20px",
                marginLeft: "auto",
              }}
            >
              <Typography variant="h4" sx={{ textTransform: "uppercase" }}>
                Сумма заказов
              </Typography>

              <Stack
                sx={{
                  borderBottom: "1px solid #8DBAFF80",
                  paddingBottom: "12px",
                }}
                direction="row"
                justifyContent="space-between"
              >
                <Typography variant="body1">
                  Подытог{" "}
                  <span style={{ color: "#8B8CA0" }}>
                    ({basket?.items_count})
                  </span>
                </Typography>
                <Typography variant="body2">
                  {new Intl.NumberFormat("ru-RU").format(sumPrice) +
                    " " +
                    basket?.totals?.currency_symbol}
                </Typography>
              </Stack>
              <Stack direction="row" justifyContent="space-between">
                <Typography
                  sx={{ textTransform: "uppercase", color: "#2640E3" }}
                  variant="h5"
                >
                  Итого
                </Typography>
                <Typography variant="body1" sx={{ color: "#2640E3" }}>
                  {new Intl.NumberFormat("ru-RU").format(sumPrice) +
                    " " +
                    basket?.totals?.currency_symbol}
                </Typography>
              </Stack>
              <CustomButton
                sx={{
                  width: "100%",
                  opacity: isLoadingByeCard ? 0.6 : 1,
                  gap: "12px",
                  padding: "16px",
                }}
                size="20"
                variant="primary"
                onClick={() => buyMyOrders()}
                disabled={isLoadingByeCard}
              >
                Оформить заказ
              </CustomButton>
            </Box>
          </>
        </Loader>
      </Container>
      <DeleteModal
        isLoading={isLoadingDel}
        activeDocs={activeDocs}
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
        removeItem={removeItem}
      />
    </MainCntainer>
  );
};

export default Basket;