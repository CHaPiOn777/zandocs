import { TDataDocuments } from "@/app/main/_components/Documents/Documents";
import useIsDesktopXS from "@/hooks/useIsDesktopXS";
import useIsMobile from "@/hooks/useIsMobile";
import useIsTablet from "@/hooks/useIsTablet";
import CheckBoxIcon from "@/image/Documents/CheckBoxIcon";
import CustomButton from "@/ui/Button/CustomButton";
import Line from "@/ui/Line/Line";
import { List, ListItem, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const ContentCard = (props: TDataDocuments) => {
  const { title, desc, list, reverse, image } = props;
  const isTablet = useIsTablet();
  const isDesktopXS = useIsDesktopXS();
  const isMobile = useIsMobile();
  const router = useRouter();

  return (
    <Stack
      direction={reverse && !isMobile ? "row-reverse" : "row"}
      gap={isTablet ? "60px" : "130px"}
      width="100%"
    >
      <Stack
        direction="column"
        width={isDesktopXS ? "100%" : isTablet ? 450 : 498}
      >
        {title}
        <Line />
        <Typography variant={"body1"} mt={3} mb={2}>
          {desc}
        </Typography>
        <Stack direction="row" justifyContent="space-between">
          <List
            sx={{
              gap: isTablet ? "11px" : "17px",
              display: "flex",
              flexDirection: "column",
              marginBottom: "32px",
              padding: 0,
            }}
          >
            {list.map((description, index) => (
              <ListItem
                key={index}
                sx={{
                  gap: "16px",
                  display: "flex",
                  alignItems: "center",
                  padding: 0,
                }}
              >
                <CheckBoxIcon />
                <Typography variant={"body2"}>{description}</Typography>
              </ListItem>
            ))}
          </List>
          {isMobile && (
            <Image
              width={108}
              height={108}
              alt={"фоновая картинка"}
              src={image}
            />
          )}
        </Stack>
        <CustomButton
          size="16"
          fullWidth={true}
          sx={{ padding: "20px 0px", width: "100%" }}
          variant="secondary"
          onClick={() => router.push("/documents")}
        >
          Смотреть все шаблоны
        </CustomButton>
      </Stack>
      {!isMobile && (
        <Image
          width={isDesktopXS ? 320 : isTablet ? 420 : 572}
          height={isDesktopXS ? 280 : isTablet ? 360 : 460}
          alt={"фоновая картинка"}
          src={image}
        />
      )}
    </Stack>
  );
};

export default ContentCard;
