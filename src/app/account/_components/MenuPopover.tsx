"use client";

import useIsDesktopXS from "@/hooks/useIsDesktopXS";
import CardWrapper from "@/ui/CardWrapper/CardWrapper";
import MenuContent from "@/ui/MenuContent/MenuContent";

export type TLeaveFunc = {
  onMouseLeave?: () => void;
};

const MenuPopover = ({ onMouseLeave }: TLeaveFunc) => {
  const isDesktopXS = useIsDesktopXS();

  return (
    !isDesktopXS && (
      <CardWrapper size="small" onMouseLeave={onMouseLeave}>
        <MenuContent />
      </CardWrapper>
    )
  );
};

export default MenuPopover;
