"use client";
import BasketHeader from "@/app/_components/Header/BasketHeader";
import MenuPopover from "@/app/account/_components/MenuPopover";
import useIsMobile from "@/hooks/useIsMobile";
import UserThumbHead from "@/image/Account/icons/UserThumbHead";
import CustomPopover from "@/ui/Popover/CustomPopover";
import { Stack } from "@mui/material";
import React, { memo, useState } from "react";

const HeaderAuthItem = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const isMobile = useIsMobile();

  return (
    <Stack direction="row" alignItems="center" gap="8px">
      {!isMobile && <BasketHeader />}
      <CustomPopover
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
        trigger={<UserThumbHead />}
      >
        <MenuPopover
          onMouseLeave={() => {
            setAnchorEl(null);
          }}
        />
      </CustomPopover>
    </Stack>
  );
};

export default memo(HeaderAuthItem);
