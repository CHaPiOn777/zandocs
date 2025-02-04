"use client";

import * as SC from "./PrivacyPolicy.style";
import React from "react";
import { Typography, Box, Link } from "@mui/material";
import MainCntainer from "@/ui/MainCntainer/MainCntainer";
import Container from "@/app/_components/Container/Container";

export default function PrivacyPolicy() {
  return (
    <MainCntainer>
      <Container sx={{ paddingY: "120px", background: "#F3F9FE" }} column>
        <Typography
          sx={{ textTransform: "uppercase" }}
          variant="h3"
          gutterBottom
        >
          Политика конфиденциальности
        </Typography>

        <Box sx={{ marginBottom: 4 }}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              textTransform: "uppercase",
              fontWeight: 700,
              fontSize: "18px",
            }}
          >
            Кто мы
          </Typography>
          <Typography variant="body2" paragraph>
            Наш адрес сайта:{" "}
            <CustomLink href="https://zandocs.kz">
              https://zandocs.kz
            </CustomLink>
            .
          </Typography>
          <Typography variant="body2" paragraph>
            Индивидуальный предприниматель Мустафина (ИП Мустафина) ИИН:
            980306400677, находящийся по адресу: Митина 4, 117, город Алматы,
            Республика Казахстан, контактный номер: +7 771 380 80 39.
          </Typography>
        </Box>

        <Box sx={{ marginBottom: 4 }}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              textTransform: "uppercase",
              fontWeight: 700,
              fontSize: "18px",
            }}
          >
            Предмет политики конфиденциальности
          </Typography>
          <Typography variant="body2" paragraph>
            Настоящая Политика конфиденциальности определяет порядок получения,
            хранения, обработки и использования персональных данных
            пользователей сайта{" "}
            <CustomLink href="https://zandocs.kz">
              https://zandocs.kz
            </CustomLink>
            .
          </Typography>
        </Box>

        <Box sx={{ marginBottom: 4 }}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              textTransform: "uppercase",
              fontWeight: 700,
              fontSize: "18px",
            }}
          >
            Цели сбора персональной информации
          </Typography>
          <SC.ListST>
            <SC.ListItemSC>
              <Typography variant="body2">
                Предоставление Пользователю доступа к контенту сайта.
              </Typography>
            </SC.ListItemSC>
            <SC.ListItemSC>
              <Typography variant="body2">
                Обеспечение эффективной работы сайта.
              </Typography>
            </SC.ListItemSC>
            <SC.ListItemSC>
              <Typography variant="body2">
                Улучшение качества обслуживания.
              </Typography>
            </SC.ListItemSC>
            <SC.ListItemSC>
              <Typography variant="body2">
                Обратная связь с пользователем.
              </Typography>
            </SC.ListItemSC>
            <SC.ListItemSC>
              <Typography variant="body2">
                Проведение статистических исследований.
              </Typography>
            </SC.ListItemSC>
          </SC.ListST>
        </Box>

        <Box sx={{ marginBottom: 4 }}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              textTransform: "uppercase",
              fontWeight: 700,
              fontSize: "18px",
            }}
          >
            Способы и сроки обработки персональной информации
          </Typography>
          <SC.ListST>
            <SC.ListItemSC>
              <Typography variant="body2">
                Сбор персональной информации осуществляется при регистрации
                на сайте, оставлении комментариев, загрузке медиафайлов и других
                взаимодействиях с сайтом.
              </Typography>
            </SC.ListItemSC>
            <SC.ListItemSC>
              <Typography variant="body2">
                Персональная информация хранится в течение периода, необходимого
                для достижения целей её обработки, но не менее 5 лет.
              </Typography>
            </SC.ListItemSC>
            <SC.ListItemSC>
              <Typography variant="body2">
                Обработка персональных данных осуществляется с использованием
                автоматизированных систем, а также без использования таких
                систем.
              </Typography>
            </SC.ListItemSC>
          </SC.ListST>
        </Box>

        <Box sx={{ marginBottom: 4 }}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              textTransform: "uppercase",
              fontWeight: 700,
              fontSize: "18px",
            }}
          >
            Комментарии
          </Typography>
          <Typography variant="body2" paragraph>
            Если посетитель оставляет комментарии на сайте, мы собираем данные,
            указанные в форме комментариев, а также IP-адрес посетителя.
          </Typography>
          <Typography variant="body2" paragraph>
            Анонимизированная строка, созданная из вашего email, может быть
            предоставлена сервису Gravatar для проверки. Политика
            конфиденциальности Gravatar доступна по адресу:{" "}
            <CustomLink href="https://automattic.com/privacy/">
              https://automattic.com/privacy/
            </CustomLink>
            .
          </Typography>
        </Box>

        <Box sx={{ marginBottom: 4 }}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              textTransform: "uppercase",
              fontWeight: 700,
              fontSize: "18px",
            }}
          >
            Медиафайлы
          </Typography>
          <Typography variant="body2" paragraph>
            Если вы зарегистрированный пользователь и загружаете фотографии
            на сайт, вам следует избегать загрузки изображений с метаданными
            EXIF, так как они могут содержать данные вашего месторасположения
            по GPS. Посетители могут извлечь эту информацию, скачав изображения
            с сайта.
          </Typography>
        </Box>

        <Box sx={{ marginBottom: 4 }}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              textTransform: "uppercase",
              fontWeight: 700,
              fontSize: "18px",
            }}
          >
            Куки
          </Typography>
          <Typography variant="body2" paragraph>
            Если вы оставляете комментарий на нашем сайте, вы можете включить
            сохранение вашего имени, адреса email и вебсайта в куки.
            Это делается для вашего удобства, чтобы не заполнять данные снова
            при повторном комментировании. Эти куки хранятся в течение одного
            года.
          </Typography>
          <Typography variant="body2" paragraph>
            Если у вас есть учётная запись на сайте и вы войдёте в неё,
            мы установим временный куки для определения поддержки куки вашим
            браузером, куки не содержит никакой личной информации и удаляется
            при закрытии вашего браузера. При входе в учётную запись
            мы также устанавливаем несколько куки с данными входа и настройками
            экрана.
          </Typography>
          <Typography variant="body2" paragraph>
            При входе в учётную запись мы также устанавливаем несколько куки
            с данными входа и настройками экрана. Куки входа хранятся в течение
            двух дней, куки с настройками экрана — год. Если вы выберете
            возможность «Запомнить меня», данные о входе будут сохраняться
            в течение двух недель. При выходе из учётной записи куки входа будут
            удалены.
          </Typography>
          <Typography variant="body2" paragraph>
            При редактировании или публикации статьи в браузере будет сохранён
            дополнительный куки, он не содержит персональных данных и содержит
            только ID записи, отредактированной вами, истекает через 1 день.
          </Typography>
        </Box>

        <Box sx={{ marginBottom: 4 }}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              textTransform: "uppercase",
              fontWeight: 700,
              fontSize: "18px",
            }}
          >
            Встраиваемое содержимое с других сайтов
          </Typography>
          <Typography variant="body2" paragraph>
            Статьи на этом сайте могут содержать встраиваемое содержимое
            (например, видео, изображения и т. д.). Встраиваемое содержимое с
            других сайтов ведет себя так же, как если бы посетитель перешел на
            другой сайт.
          </Typography>
        </Box>

        <Box sx={{ marginBottom: 4 }}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              textTransform: "uppercase",
              fontWeight: 700,
              fontSize: "18px",
            }}
          >
            С кем мы делимся вашими данными
          </Typography>
          <Typography variant="body2" paragraph>
            Если вы запросите сброс пароля, ваш IP будет указан в
            email-сообщении о сбросе.
          </Typography>
        </Box>

        <Box sx={{ marginBottom: 4 }}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              textTransform: "uppercase",
              fontWeight: 700,
              fontSize: "18px",
            }}
          >
            Как долго мы храним ваши данные
          </Typography>
          <Typography variant="body2" paragraph>
            Если вы оставляете комментарий, то сам комментарий и его метаданные
            сохраняются неопределённо долго. Это делается для того,
            чтобы определять и одобрять последующие комментарии автоматически,
            вместо помещения их в очередь на одобрение.
          </Typography>
          <Typography variant="body2" paragraph>
            Для пользователей с регистрацией на нашем сайте мы храним ту личную
            информацию, которую они указывают в своём профиле. Все пользователи
            могут видеть, редактировать или удалить свою информацию из профиля
            в любое время (кроме имени пользователя). Администрация вебсайта
            также может видеть и изменять эту информацию.
          </Typography>
        </Box>

        <Box sx={{ marginBottom: 4 }}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              textTransform: "uppercase",
              fontWeight: 700,
              fontSize: "18px",
            }}
          >
            Какие у вас права на ваши данные
          </Typography>
          <Typography variant="body2" paragraph>
            При наличии учетной записи на сайте или если вы оставляли
            комментарии, вы можете запросить файл экспорта персональных данных,
            которые мы сохранили о вас, включая предоставленные вами данные. Вы
            также можете запросить удаление этих данных, это не включает данные,
            которые мы обязаны хранить в административных целях, по закону или в
            целях безопасности.
          </Typography>
        </Box>

        <Box sx={{ marginBottom: 4 }}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              textTransform: "uppercase",
              fontWeight: 700,
              fontSize: "18px",
            }}
          >
            Куда отправляются ваши данные
          </Typography>
          <Typography variant="body2" paragraph>
            Комментарии пользователей могут проверяться автоматическим сервисом
            определения спама.
          </Typography>
        </Box>

        <Box sx={{ marginBottom: 4 }}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              textTransform: "uppercase",
              fontWeight: 700,
              fontSize: "18px",
            }}
          >
            Форс-мажорные обстоятельства
          </Typography>
          <Typography variant="body2" paragraph>
            Стороны освобождаются от ответственности за полное или частичное
            неисполнение своих обязательств по настоящему Договору, если это
            неисполнение явилось следствием обстоятельств непреодолимой силы,
            таких как: пожары, наводнения, землетрясения, военные действия,
            забастовки, массовые беспорядки и т.п., возникших после заключения
            настоящего Договора.
          </Typography>
        </Box>

        <Box sx={{ marginBottom: 4 }}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              textTransform: "uppercase",
              fontWeight: 700,
              fontSize: "18px",
            }}
          >
            Контактная информация
          </Typography>
          <Typography variant="body2" paragraph>
            По любым вопросам, связанным с настоящей политикой
            конфиденциальности, вы можете связаться с нами:
          </Typography>
          <SC.ListST>
            <SC.ListItemSC>
              <Typography variant="body2">
                Адрес: Алматы, Республика Казахстан <br />
              </Typography>
            </SC.ListItemSC>
            <SC.ListItemSC>
              <Typography variant="body2">
                Телефон: +7 771 378 80 39 <br />
              </Typography>
            </SC.ListItemSC>
            <SC.ListItemSC>
              <Typography variant="body2">Email: info@zandocs.kz</Typography>
            </SC.ListItemSC>
          </SC.ListST>
        </Box>
      </Container>
    </MainCntainer>
  );
}

// Компонент для кастомных ссылок
function CustomLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      sx={{
        color: "blue",
        textDecoration: "underline",
        transition: "all 0.2s ",
        opacity: "1",
        "&:hover": {
          opacity: "0.6",
        },
      }}
    >
      {children}
    </Link>
  );
}
