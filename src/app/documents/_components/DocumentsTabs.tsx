/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Container from "@/app/_components/Container/Container";
import useIsDesktopXS from "@/hooks/useIsDesktopXS";
import useIsMobile from "@/hooks/useIsMobile";
import DocsIcon from "@/image/DocumentsPage/icons/DocsIcon";
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
import { useSearchParams } from "next/navigation";
import useTabQueryUpdater from "@/app/documents/_components/concatenatedSearchQueries";
import BusinessIcon from "@/image/DocumentsPage/icons/BusinessIcon";

const DocumentsTabs = () => {
  const [activeTab, setActiveTab] = React.useState(0);
  const isMobile = useIsMobile();
  const docs = useDocsStore((state) => state.docs);
  const isDesctopXS = useIsDesktopXS();
  const searchParams = useSearchParams();
  const updateTabQuery = useTabQueryUpdater();
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
    updateTabQuery(newValue);
  };
  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab) {
      setActiveTab(parseInt(tab, 10) || 0);
    }
  }, [searchParams]);
  // const pathname = usePathname();
  const tabsItems = [
    {
      icon: <DocsIcon />,
      label: "Все документы",
      src: "#0",
    },
    {
      icon: <BusinessIcon />,
      label: "Документы для бизнеса",
      src: "#1",
    },
    {
      icon: <UsersIcon />,
      label: "Документы для частных лиц",
      src: "#2",
    },
    {
      icon: <GiftIcons />,
      label: "Бесплатные документы",
      src: "#3",
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
    [docs, activeTab]
  );
  const businessDocs = returnDataByType("для бизнеса");
  const usersDocs = returnDataByType("документы для частных лиц");
  const freeDocs = returnDataByType("бесплатные документы");
  const allDocs = returnDataByType("документы");
  const visibleContent = (index: number | string): TDocument[] => {
    const returnData: Record<string, any> = {
      0: allDocs,
      1: businessDocs,
      2: usersDocs,
      3: freeDocs,
    };
    return returnData[index];
  };
  console.log(visibleContent(activeTab));
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
          {docs.length && (
            <SC.ListS>
              {visibleContent(activeTab).map((item, index) => (
                <motion.div
                  key={item.id ?? index}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                  }}
                  style={{
                    originX: 0.5,
                    originY: 0.5,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.1 * index,
                    ease: "easeOut",
                  }}
                >
                  <DocumentsCard document={item} />
                </motion.div>
              ))}
            </SC.ListS>
          )}
        </motion.div>
      </Container>
    </MainCntainer>
  );
};

export default DocumentsTabs;
