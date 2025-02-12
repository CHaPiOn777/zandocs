"use client";
import MenuPopover from "@/app/account/_components/MenuPopover";
import MainCntainer from "@/ui/MainCntainer/MainCntainer";
import Container from "@/app/_components/Container/Container";
import Loader from "@/ui/Loader/Loader";
import { useAuthUser } from "@/store/authStore";
import useIsMobile from "@/hooks/useIsMobile";
import { motion } from "framer-motion";

const MenuAccount = ({
  children,
}: Readonly<{
  children?: React.ReactNode;
}>) => {
  const user = useAuthUser((state) => state.user);
  const isMobile = useIsMobile();
  return (
    <MainCntainer
      sx={{
        alignItems: "center",
        background: "linear-gradient(180deg, #F3F9FE, #0087fd6a)",
        flexDirection: "column",
        justifyContent: "flex-start",
        padding: "150px 0",
      }}
    >
      <Container
        sx={{
          gap: "20px",
          padding: isMobile ? "0" : "20px",
          justifyContent: isMobile ? "center" : "",
        }}
      >
        <motion.div
          // key={item.number}
          initial={{
            opacity: 0,
            filter: "blur(10px)",
            x: -200,
          }}
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
        >
          <MenuPopover />
        </motion.div>
        {children && <Loader isLoader={!user}>{children}</Loader>}
      </Container>
    </MainCntainer>
  );
};

export default MenuAccount;
