import { Stack, Typography } from "@mui/material";
import { useState } from "react";
import { addToCardByBasket, createInvoice, getMyBasket } from "@/api/authApi";
import { notify } from "@/ui/ToastProvider/ToastProvider";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useOrders } from "@/store/ordersStore";
import { useBasket } from "@/store/basketStore";
import { useAuthUser } from "@/store/authStore";
import CustomButton from "@/ui/Button/CustomButton";
import useIsMobile from "@/hooks/useIsMobile";
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
      return notify(
        "error",
        <div>
          <Typography variant="body2">
            Сначала авторизуйтесь.{" "}
            <Typography
              variant="body2"
              component="span"
              onClick={() => router.push("login")}
              sx={{
                color: "#2640E3",
                position: "relative",
                cursor: "pointer",
                "&::after": {
                  content: '""', // Добавляем пустое содержимое
                  position: "absolute",
                  bottom: "-4px", // Линия располагается под текстом
                  left: "50%", // Центрируем линию по горизонтали
                  width: "0%", // Изначальная ширина
                  height: "1px", // Толщина линии
                  backgroundColor: "#2640E3", // Цвет линии
                  transition: "all 0.2s ease", // Плавный переход
                  transform: "translateX(-50%)", // Сдвигаем к центру
                },
                "&:hover::after": {
                  width: "40px", // Линия расширяется до всей ширины текста
                },
              }}
            >
              Вход
            </Typography>
          </Typography>
        </div>
      );
    }
    if (isAlreadyThere) {
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
    </Stack>
  );
};

export default ButtonsBuy;
