"use client";
import { Stack } from "@mui/material";
import { useState } from "react";
import { addToCardByBasket, createInvoice, getMyBasket } from "@/api/authApi";
import { notify } from "@/ui/ToastProvider/ToastProvider";
import axios from "axios";
import { useOrders } from "@/store/ordersStore";
import { useBasket } from "@/store/basketStore";
import { useAuthUser } from "@/store/authStore";
import CustomButton from "@/ui/Button/CustomButton";
import useIsMobile from "@/hooks/useIsMobile";
import LoginModal from "@/app/(auth)/login/_components/LoginModal";
import { useRouter } from "next/navigation";
type TPropsBuy = {
  disabled?: boolean;
  id: number;
  price: number;
  title: string;
  nameBtnTwice?: string;
};
const ButtonsBuy = ({
  disabled = false,
  id,
  price,
  title,
  nameBtnTwice = "Оформить подписку",
}: TPropsBuy) => {
  const isAuth = useAuthUser((state) => state.isAuth);
  const isMobile = useIsMobile();
  const [isOpenAuthModal, setisOpenAuthModal] = useState(false);

  const setCart = useBasket((state) => state.setCart);
  const cart = useBasket((state) => state.cart);
  const isAlreadyThere = cart?.items.some(
    (item: { id: number }) => item.id === id
  );

  const setIsFirstRender = useOrders((state) => state.setIsFirstRender);
  const setOrdersPrice = useOrders((state) => state.setOrdersPrice);
  const ordersPrice = useOrders((state) => state.ordersPrice);
  const [isLoadingBasket, setisLoadingBasket] = useState<boolean>(false);
  const [isLoadingByeCard, setIsLoadingByeCard] = useState<boolean>(false);
  const router = useRouter();

  const addBusket = async ({
    id,
    price,
    title = "Покупка товара",
    isBusket = false,
  }: {
    id: number;
    price: number;
    title?: string;
    isBusket?: boolean;
  }) => {
    if (!isAuth) {
      return setisOpenAuthModal(true);
    }
    if (isAlreadyThere && isBusket) {
      return notify("error", "Вы уже добавили этот товар в корзину");
    }

    try {
      if (isBusket) {
        setisLoadingBasket(true);
        await addToCardByBasket({
          id: id,
          quantity: 1,
        });

        notify("success", "Товар добавлен в корзину");
        setOrdersPrice(ordersPrice + price);
        const { data: cart } = await getMyBasket();
        setCart(cart);
      } else {
        setIsLoadingByeCard(true);
        const { data } = await createInvoice({
          amount: Number(price),
          description: title,
          items: [
            {
              product_id: id,
              quantity: 1,
            },
          ],
        });
        router.push(data.data.invoice_url);

        notify("success", data.message);
      }

      setIsFirstRender(true);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        notify("error", error?.response?.data.message);
      }
    } finally {
      setisLoadingBasket(false);
      setIsLoadingByeCard(false);
    }
  };
  return (
    <Stack
      marginTop={"auto"}
      direction={isMobile ? "column" : "row"}
      gap={"12px"}
      width="100%"
    >
      {!disabled && (
        <CustomButton
          sx={{
            marginTop: "auto",
            width: "100%",
            opacity: disabled || isLoadingBasket ? 0.6 : 1,
            gap: "12px",
          }}
          size="20"
          variant="secondary"
          onClick={(e) => {
            e.preventDefault();
            addBusket({ id, price, isBusket: true });
          }}
          disabled={isLoadingBasket || disabled}
          isCircular={disabled ? false : true}
        >
          В корзину
        </CustomButton>
      )}
      <CustomButton
        sx={{
          width: "100%",
          opacity: disabled || isLoadingByeCard ? 0.6 : 1,
          gap: "12px",
        }}
        size="20"
        variant="primary"
        onClick={(e) => (e.preventDefault(), addBusket({ id, price, title }))}
        disabled={isLoadingByeCard || disabled}
        isCircular={disabled ? false : true}
      >
        {disabled ? "Скоро" : nameBtnTwice}
      </CustomButton>
      <LoginModal
        isOpenModal={isOpenAuthModal}
        setIsOpenModal={setisOpenAuthModal}
      />
    </Stack>
  );
};

export default ButtonsBuy;
