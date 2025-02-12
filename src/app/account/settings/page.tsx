"use client";
import SettingsPage from "@/app/account/settings/_components/SettingsPage";
import { motion } from "framer-motion";

const page = () => {
  return (
    <motion.div
      // key={item.number}
      initial={{
        opacity: 0,
        filter: "blur(10px)",
        scale: 0.8,
      }}
      whileInView={{
        opacity: 1,
        filter: "blur(0px)",
        scale: 1,
      }} // Анимация за // Анимация запускается при появлении
      viewport={{ once: true, amount: 0.2 }} // `once: true` - срабатывает 1 раз, `amount: 0.2` - 20% в видимости
      transition={{
        duration: 0.4,
        // delay: 0.2 * index,
        ease: "easeOut",
      }}
    >
      <SettingsPage />
    </motion.div>
  );
};

export default page;
