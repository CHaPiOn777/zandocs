"use client";
import { Box, Stack, Typography } from "@mui/material";
import * as SC from "./Header.style";
import React, { memo } from "react";
import Tenge from "@/image/Account/icons/Tenge";
import { useBasket } from "@/store/basketStore";
import { useRouter } from "next/navigation";
import Basket from "@/image/Account/icons/Basket";

const BasketHeader = () => {
  const cart = useBasket((state) => state.cart);
  const router = useRouter();

  return (
    <SC.Basket onClick={() => router.push("/basket")}>
      <Stack direction="row" gap="2px">
        <Typography sx={{ alignSelf: "end" }} variant="body2">
          {cart?.totals?.total_price}
        </Typography>
        <Tenge />
      </Stack>
      <Stack sx={{ position: "relative" }}>
        <Basket />
        {cart?.items_count > 0 && (
          <Box
            sx={{
              position: "absolute",
              top: "-8px",
              right: "-8px",
              width: "18px",
              height: "18px",
              backgroundColor: "#2640E3",
              borderRadius: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="body2"
              sx={{
                fontSize: "12px",
                lineHeight: "16px",

                color: "white",
              }}
            >
              {cart?.items_count}
            </Typography>
          </Box>
        )}
      </Stack>
    </SC.Basket>
  );
};

export default memo(BasketHeader);
