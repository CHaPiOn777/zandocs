/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Container from "@/app/_components/Container/Container";
import useIsDesktopXS from "@/hooks/useIsDesktopXS";
import useIsMobile from "@/hooks/useIsMobile";
import DocsIcon from "@/image/DocumentsPage/icons/DocsIcon";
import BusinessIcon from "@/image/DocumentsPage/icons/BusinessIcon";
import GiftIcons from "@/image/DocumentsPage/icons/GiftIcons";
import UsersIcon from "@/image/DocumentsPage/icons/UsersIcon";
import MainCntainer from "@/ui/MainCntainer/MainCntainer";
import * as SC from "./Documents.style";
import { motion } from "framer-motion";

import { Box, Typography } from "@mui/material";
import React, { useCallback, useEffect } from "react";

import DocumentsCard, {
  TDocument,
} from "@/app/documents/_components/DocumentsCard";
import { useDocsStore } from "@/store/docsStore";

const DocumentsTabs = () => {
  const [activeTab, setActiveTab] = React.useState(0);
  const isMobile = useIsMobile();
  const docs = useDocsStore((state) => state.docs); // Zustand: функция для установки документов
  const isDesctopXS = useIsDesktopXS();
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const tabsItems = [
    {
      icon: <DocsIcon />,
      label: "Все документы",
    },
    // {
    //   icon: <BusinessIcon />,
    //   label: "Документы для бизнеса",
    // },
    {
      icon: <UsersIcon />,
      label: "Документы для частных лиц",
    },
    {
      icon: <GiftIcons />,
      label: "Бесплатные документы",
    },
  ];

  const returnDataByType = useCallback(
    (type: string) => {
      return docs?.filter((item: any) =>
        item.categories.some((category: any) =>
          category.name.toLowerCase().includes(type)
        )
      );
    },
    [docs]
  );
  const businessDocs = returnDataByType("документы для бизнеса");
  const usersDocs = returnDataByType("документы для частных лиц");
  const freeDocs = returnDataByType("бесплатные документы");
  const allDocs = returnDataByType("документы");
  useEffect(() => {}, []);
  const visibleContent = (index: number | string): TDocument[] => {
    const returnData: Record<string, any> = {
      0: allDocs,
      // 1: businessDocs,
      1: usersDocs,
      2: freeDocs,
    };
    return returnData[index];
  };

  return (
    <MainCntainer
      sx={{
        minHeight: isDesctopXS ? "max-content" : "",
        padding: isMobile ? 0 : "",
      }}
    >
      <Container
        sx={{
          margin: "50px 0",
          gap: "36px",
        }}
        column
      >
        <Box sx={{ maxWidth: "100%", bgcolor: "transparent" }}>
          <SC.TabsSt
            value={activeTab}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
            aria-label="scrollable force tabs example"
          >
            {tabsItems.map(({ label, icon }, index) => (
              <SC.TabSt
                wrapped
                iconPosition="start"
                icon={icon}
                key={index}
                label={
                  <Typography sx={{ color: "#111420" }} variant="body1">
                    {label}
                  </Typography>
                }
              />
            ))}
          </SC.TabsSt>
        </Box>
        <Box sx={{ padding: "8px 16px", borderLeft: "2px solid #2640e3" }}>
          <Typography variant="body2">
            {`Показано ${allDocs.length} шаблонов`}
          </Typography>
        </Box>
        <motion.div
          key={activeTab} // ключ обязателен для анимации при смене табов
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <SC.ListS>
            {visibleContent(activeTab).map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  transformOrigin: "center center",
                }}
                style={{ transformOrigin: "center" }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  transformOrigin: "center center",
                }} // Анимация запускается при появлении
                viewport={{ once: true, amount: 0.1 }} // `once: true` - срабатывает 1 раз, `amount: 0.2` - 20% в видимости
                transition={{
                  duration: 0.4,
                  delay: 0.1 * index,
                  // delay: 0.2 * index,
                  ease: "easeOut",
                }}
              >
                <DocumentsCard document={item} />
              </motion.div>
            ))}
          </SC.ListS>
        </motion.div>
      </Container>
    </MainCntainer>
  );
};

export default DocumentsTabs;
