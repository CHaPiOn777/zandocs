import Container from "@/app/_components/Container/Container";
import Card from "@/app/(main)/_components/Features/Card/Card";
import useIsTablet from "@/hooks/useIsTablet";
import { Availability } from "@/image/Features/Icons/Availability";
import { Money } from "@/image/Features/Icons/Money";
import { Security } from "@/image/Features/Icons/Security";
import { Shablons } from "@/image/Features/Icons/Shablons";
import { Simple } from "@/image/Features/Icons/Simple";
import { TimeIcon } from "@/image/Features/Icons/TimeIcon";
import MainCntainer from "@/ui/MainCntainer/MainCntainer";
import TitleComponents from "@/ui/TitleComponents/TitleComponents";
import { Typography } from "@mui/material";
import { ReactElement } from "react";
import { SwiperSlide } from "swiper/react";
import * as SC from "./Features.style";
import { motion } from "framer-motion";

export type TDataFeatures = {
  icon: ReactElement;
  title: string;
  desc: string;
};
const Features = () => {
  const isTablet = useIsTablet();

  const data: TDataFeatures[] = [
    {
      icon: <TimeIcon />,
      title: "Моментальное создание документов",
      desc: "Cоздание документов занимает считанные минуты благодаря удобным шаблонам",
    },
    {
      icon: <Shablons />,
      title: "Профессиональные шаблоны",
      desc: "Документы разработаны с учётом юридических стандартов и требований, что обеспечивает их юридическую силу",
    },
    {
      icon: <Money />,
      title: "Экономия времени и денег",
      desc: "Пользователи могут самостоятельно создавать юридические документы, не обращаясь к юристам для простых задач",
    },
    {
      icon: <Simple />,
      title: "Простота использования",
      desc: "Удобный интерфейс позволяет легко и быстро заполнить необходимые данные без сложных",
    },
    {
      icon: <Availability />,
      title: "Доступность  на любом устройстве",
      desc: "Платформа доступна на компьютере, планшете и смартфоне, что позволяет работать в удобное время",
    },
    {
      icon: <Security />,
      title: "Безопасность данных",
      desc: "Компания обеспечивает защиту персональной информации и конфиденциальность документов",
    },
  ];
  return (
    <>
      <TitleComponents>
        <Typography
          sx={{ textTransform: "uppercase", textAlign: "center" }}
          variant={"h2"}
        >
          <span
            style={{
              color: "#2640E3",
            }}
          >
            Преимущества <br />
          </span>{" "}
          Онлайн конструктора{" "}
          <span
            style={{
              color: "#2640E3",
            }}
          >
            ZanDocs
          </span>
        </Typography>
      </TitleComponents>
      <MainCntainer sx={{ minHeight: "max-content" }}>
        <Container
          sx={{
            padding: isTablet ? "50px 0" : "100px 0",
            gap: "20px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {isTablet ? (
            <SC.SwiperSt
              slidesPerView={"auto"}
              slidesPerGroup={1}
              // centeredSlides
              spaceBetween={20}
              // loop

              // className={styles.swiper}
              slidesOffsetBefore={0}
              grabCursor={true}
              // modules={[Pagination]}
              // pagination={{ clickable: true }}
            >
              {data.map(({ icon, title, desc }, index) => (
                <SwiperSlide key={index}>
                  <Card icon={icon} title={title} desc={desc} key={index} />
                </SwiperSlide>
              ))}
            </SC.SwiperSt>
          ) : (
            data.map(({ icon, title, desc }, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  // x: index >= 3 ? 160 : -160,
                  scale: 1.1,
                  // filter: "blur(5px)",
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                  // filter: "blur(0px)",
                }} // Анимация запускается при появлении
                viewport={{ once: true, amount: 0.2 }} // `once: true` - срабатывает 1 раз, `amount: 0.2` - 20% в видимости
                transition={{
                  delay: 0.2 * index,
                  duration: 0.4,
                  ease: "easeOut",
                }}
              >
                <Card icon={icon} title={title} desc={desc} />
              </motion.div>
            ))
          )}
        </Container>
      </MainCntainer>
    </>
  );
};

export default Features;
