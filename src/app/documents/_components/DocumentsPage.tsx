"use client";
import bg from "@/image/DocumentsPage/BGDocs.png";
import BGDocsMobile from "@/image/DocumentsPage/BGDocsMobile.png";
import { Typography } from "@mui/material";
import Container from "@/app/_components/Container/Container";
import ImageBG from "@/ui/ImageBG/ImageBG";
import useIsMobile from "@/hooks/useIsMobile";
import MainCntainer from "@/ui/MainCntainer/MainCntainer";
import useIsDesktopXS from "@/hooks/useIsDesktopXS";
import { motion } from "framer-motion";

const DocumentsPage = () => {
  const isMobile = useIsMobile();
  const isDesctopXS = useIsDesktopXS();

  return (
    <MainCntainer
      sx={{
        minHeight: isDesctopXS ? "max-content" : "",
        padding: isMobile ? 0 : "",
      }}
    >
      <Container
        sx={{
          margin: isMobile ? "196px 0 0" : isDesctopXS ? "160px 0" : "200px 0",
          gap: "24px",
        }}
        column
      >
        <motion.div
          // key={item.number}
          initial={{
            opacity: 0,
            filter: "blur(10px)",
            x: -200,
          }}
          // style={{ marginLeft: "auto" }}
          whileInView={{
            opacity: 1,
            filter: "blur(0px)",

            x: 0,
          }} // Анимация за // Анимация запускается при появлении
          viewport={{ once: true, amount: 0.2 }} // `once: true` - срабатывает 1 раз, `amount: 0.2` - 20% в видимости
          transition={{
            duration: 0.4,
            // delay: 0.2 * index,
            ease: "easeOut",
          }}
          style={{
            background: "#F3F9FE99",
            backdropFilter: "blur(31px)",
            width: isDesctopXS ? "460px" : "520px",
            borderRadius: "4px",
            padding: "36px 40px",
            ...(isMobile
              ? {
                  width: "100%",
                  marginTop: "180px",
                  background:
                    "linear-gradient(179.13deg, rgba(255, 255, 255, 0) 33.16%, rgba(0, 136, 255, 0.4) 115.27%)",
                }
              : {}),
          }}
        >
          <Typography
            sx={{
              textTransform: "uppercase",
              textAlign: isMobile ? "center" : "left",
            }}
            variant="h2"
            component="h1" 
          >
            <span
              style={{
                color: "#2640E3",
              }}
            >
              юридические{" "}
            </span>
            документы{" "}
            <span
              style={{
                color: "#2640E3",
              }}
            >
              быстро&nbsp;
            </span>
            и легко
          </Typography>
          <Typography
            sx={{ textAlign: isMobile ? "center" : "left" }}
            variant="body1"
            mt={2}
          >
            Сэкономьте время и деньги — создавайте юридические документы
            самостоятельно, без помощи юриста. Быстро, просто и доступно.
          </Typography>
        </motion.div>
      </Container>
      <ImageBG
        top={isMobile ? "80px" : ""}
        left={isMobile ? "-100px" : "0px"}
        height={isMobile ? "300px" : isDesctopXS ? "600px" : "700px"}
        bg={isMobile ? BGDocsMobile : bg}
      />
    </MainCntainer>
  );
};

export default DocumentsPage;
