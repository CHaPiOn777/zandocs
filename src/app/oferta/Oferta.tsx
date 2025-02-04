"use client";
import { Box, Link, Typography } from "@mui/material";
import React from "react";
import * as SC from "../private/PrivacyPolicy.style";
import Container from "@/app/_components/Container/Container";
import MainCntainer from "@/ui/MainCntainer/MainCntainer";

const Oferta = () => {
  return (
    <MainCntainer>
      <Container sx={{ paddingY: "120px", background: "#F3F9FE" }} column>
        <Typography
          sx={{ textTransform: "uppercase" }}
          variant="h3"
          gutterBottom
          mb={8}
        >
          ПУБЛИЧНАЯ ОФЕРТА ОБ ОКАЗАНИИ УСЛУГ ПО ПРЕДОСТАВЛЕНИЮ ДОСТУПА
          К ИНФОРМАЦИОННОМУ РЕСУРСУ
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
            Термины, используемые в настоящей
          </Typography>

          <SC.ListST>
            <SC.ListItemSC>
              <Typography variant="body2">
                Исполнитель: Индивидуальный предприниматель Мустафина (ИП
                Мустафина), ИИН: 980306400677, находящийся по адресу: Митина 4,
                117, город Алматы, Республика Казахстан, контактный номер:
                +7 771  380 80 39, представленное в лице компании,
                эксплуатирующей веб-сайт конструктора документов «ZanDocs»
                <CustomLink href="https://zandocs.kz">
                  https://zandocs.kz
                </CustomLink>
              </Typography>
            </SC.ListItemSC>
            <SC.ListItemSC>
              <Typography variant="body2">
                Пользователь: Физическое или юридическое лицо, принимающее
                условия настоящей оферты и использующее конструктор документов
                на веб-сайте «ZanDocs».
              </Typography>
            </SC.ListItemSC>
            <SC.ListItemSC>
              <Typography variant="body2">
                Конструктор документов: Веб-платформа, разработанная и
                предоставляемая Поставщиком на веб-сайте «ZanDocs», позволяющая
                Пользователям создавать и редактировать различные юридические
                документы онлайн.
              </Typography>
            </SC.ListItemSC>
            <SC.ListItemSC>
              <Typography variant="body2">
                «Акцепт» – совершение юридически значимых действий Покупателем,
                направленных на принятие оферты (приобретение Товара,
                представленного к продаже в Интернет-магазине, на условиях
                настоящего договора публичной оферты), как-то: оформление Заказа
                на поставку товара и его оплата. Акцепт считается совершенным с
                момента полной оплаты товара Покупателем.
              </Typography>
            </SC.ListItemSC>
            <SC.ListItemSC>
              <Typography variant="body2">
                Конфиденциальность: Обязательства сторон по защите
                конфиденциальной информации в соответствии с законодательством
                Республики Казахстан.
              </Typography>
            </SC.ListItemSC>
            <SC.ListItemSC>
              <Typography variant="body2">
                Срок действия: Период, в течение которого оферта действует.
              </Typography>
            </SC.ListItemSC>
            <SC.ListItemSC>
              <Typography variant="body2">
                Форс-мажор: Обстоятельства непреодолимой силы, такие как
                природные катастрофы, войны, забастовки и прочие, освобождающие
                стороны от ответственности за неисполнение обязательств.
              </Typography>
            </SC.ListItemSC>
            <SC.ListItemSC>
              <Typography variant="body2">
                Платежное средство: Способы и инструменты, используемые для
                оплаты услуг, включая банковские карты, электронные кошельки и
                другие средства, указанные на веб-сайте.
              </Typography>
            </SC.ListItemSC>
            <SC.ListItemSC>
              <Typography variant="body2">
                Претензия: Письменное заявление одной из сторон с изложением
                сути спора и предложениями по его урегулированию.
              </Typography>
            </SC.ListItemSC>
            <SC.ListItemSC>
              <Typography variant="body2">
                Стороны: Лица, участвующие в заключении и исполнении оферты
                (Исполнитель и Пользователь).
              </Typography>
            </SC.ListItemSC>
            <SC.ListItemSC>
              <Typography variant="body2">
                Тарифы: Установленные Исполнителем цены за предоставляемые
                услуги, опубликованные на веб-сайте{" "}
                <CustomLink href="https://zandocs.kz">
                  https://zandocs.kz
                </CustomLink>
              </Typography>
            </SC.ListItemSC>
            <SC.ListItemSC>
              <Typography variant="body2">
                Уведомление: Способы и требования к информированию сторон о
                важных изменениях и событиях, таких как изменения условий
                оферты.
              </Typography>
            </SC.ListItemSC>
            <SC.ListItemSC>
              <Typography variant="body2">
                Электронный документ: Документ, созданный и/или предоставленный
                в электронном виде с использованием Конструктора документов.
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
            Общие положения
          </Typography>

          <SC.ListST>
            <SC.ListItemSC>
              <Typography variant="body2">
                Исполнитель: Индивидуальный предприниматель Мустафина (ИП
                Мустафина), ИИН: 980306400677, находящийся по адресу: Митина 4,
                117, город Алматы, Республика Казахстан, контактный номер:
                +7 771 380 80 39, представленное в лице компании,
                эксплуатирующей веб-сайт конструктора документов «ZanDocs» (
                <CustomLink href="https://zandocs.kz">
                  https://zandocs.kz
                </CustomLink>
                ).
              </Typography>
            </SC.ListItemSC>
            <SC.ListItemSC>
              <Typography variant="body2">
                Настоящая публичная оферта (далее - «Оферта») определяет все
                существенные условия договора между Исполнителем и лицом,
                акцептовавшим Оферту.
              </Typography>
            </SC.ListItemSC>
            <SC.ListItemSC>
              <Typography variant="body2">
                Настоящий договор заключается между Пользователем и Исполнителем
                в момент оформления заказа.
              </Typography>
            </SC.ListItemSC>
            <SC.ListItemSC>
              <Typography variant="body2">
                Оферта может быть принята любым физическим или юридическим
                лицом, имеющим намерение приобрести товар и/или услуги,
                реализуемые/предоставляемые Исполнителем через веб-платформу,
                разработанную и предоставляемую Исполнителем на веб-сайте{" "}
                <CustomLink href="https://zandocs.kz">
                  https://zandocs.kz
                </CustomLink>{" "}
                (ZanDocs).
              </Typography>
            </SC.ListItemSC>
            <SC.ListItemSC>
              <Typography variant="body2">
                Пользователь безоговорочно, в полном объеме и без исключений
                принимает все условия, содержащиеся в оферте.
              </Typography>
            </SC.ListItemSC>
            <SC.ListItemSC>
              <Typography variant="body2">
                В случае принятия условий настоящего договора (т.е. публичной
                оферты интернет-магазина), физическое или юридическое лицо,
                производящее акцепт оферты, становится Пользователем.
              </Typography>
            </SC.ListItemSC>
            <SC.ListItemSC>
              <Typography variant="body2">
                Акцептом является получение Исполнителем сообщения о намерении
                физического или юридического лица приобрести товар на условиях,
                предложенных Исполнителем.
              </Typography>
            </SC.ListItemSC>
            <SC.ListItemSC>
              <Typography variant="body2">
                Оферта, а также вся дополнительная информация о товарах/услугах
                Исполнителя, опубликована на сайте{" "}
                <CustomLink href="https://zandocs.kz">
                  https://zandocs.kz
                </CustomLink>
                .
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
            Условия предоставления услуг
          </Typography>

          <SC.ListST>
            <SC.ListItemSC>
              <Typography variant="body2">
                Исполнитель обязуется предоставить Пользователю доступ к
                Конструктору документов на условиях, изложенных в настоящей
                Оферте.
              </Typography>
            </SC.ListItemSC>
            <SC.ListItemSC>
              <Typography variant="body2">
                Пользователь обязуется оплатить услуги Поставщика в соответствии
                с тарифами, опубликованными на сайте{" "}
                <CustomLink href="https://zandocs.kz">
                  https://zandocs.kz
                </CustomLink>
                .
              </Typography>
            </SC.ListItemSC>
            <SC.ListItemSC>
              <Typography variant="body2">
                Пользователь несет полную ответственность за правильность и
                актуальность данных, вводимых при использовании Конструктора
                документов.
              </Typography>
            </SC.ListItemSC>
            <SC.ListItemSC>
              <Typography variant="body2">
                Исполнитель не несет ответственности за результаты использования
                документов, созданных с помощью Конструктора документов.
              </Typography>
            </SC.ListItemSC>
            <SC.ListItemSC>
              <Typography variant="body2">
                В случае возникновения технических сбоев или ошибок в работе
                Конструктора документов, Исполнитель обязуется устранить их в
                возможно короткие сроки и уведомить Пользователя о сроках
                устранения.
              </Typography>
            </SC.ListItemSC>
            <SC.ListItemSC>
              <Typography variant="body2">
                Цены на Товар указаны на Сайте и отражаются в формируемом на
                Сайте счете на оплату в национальной валюте - тенге. Цена
                отражается с учетом НДС (при обложении) и всех других
                обязательных платежей и сборов, установленных законодательством
                Республики Казахстан, в том числе таможенные и транспортные
                расходы Поставщика.
              </Typography>
            </SC.ListItemSC>
          </SC.ListST>

          <Typography
            variant="h4"
            gutterBottom
            sx={{
              textTransform: "uppercase",
              fontWeight: 700,
              fontSize: "18px",
              marginTop: 4,
            }}
          >
            Права и обязанности сторон
          </Typography>

          <SC.ListST>
            <Typography mt={2} variant="body2">
              Исполнитель обязуется:
            </Typography>

            <SC.ListST>
              <SC.ListItemSC>
                <Typography variant="body2">
                  Предоставить Пользователю доступ к Конструктору документов
                  после получения оплаты.
                </Typography>
              </SC.ListItemSC>
              <SC.ListItemSC>
                <Typography variant="body2">
                  Обеспечить круглосуточную техническую поддержку Пользователей.
                </Typography>
              </SC.ListItemSC>
              <SC.ListItemSC>
                <Typography variant="body2">
                  Защищать персональные данные Пользователя в соответствии с
                  законодательством Республики Казахстан.
                </Typography>
              </SC.ListItemSC>
              <SC.ListItemSC>
                <Typography variant="body2">
                  Информировать Пользователя о любых изменениях в политике
                  конфиденциальности.
                </Typography>
              </SC.ListItemSC>
              <SC.ListItemSC>
                <Typography variant="body2">
                  Обеспечивать возможность восстановления доступа к аккаунту
                  Пользователя в случае потери пароля или иных данных для входа.
                </Typography>
              </SC.ListItemSC>
            </SC.ListST>

            <Typography mt={2} variant="body2">
              Пользователь обязуется:
            </Typography>

            <SC.ListST>
              <SC.ListItemSC>
                <Typography variant="body2">
                  Соблюдать условия настоящей Оферты.
                </Typography>
              </SC.ListItemSC>
              <SC.ListItemSC>
                <Typography variant="body2">
                  Оплатить услуги Исполнителя в установленный срок.
                </Typography>
              </SC.ListItemSC>
              <SC.ListItemSC>
                <Typography variant="body2">
                  Не использовать Конструктор документов в целях, противоречащих
                  законодательству Республики Казахстан.
                </Typography>
              </SC.ListItemSC>
              <SC.ListItemSC>
                <Typography variant="body2">
                  Не использовать Конструктор документов в целях, противоречащих
                  законодательству Республики Казахстан.
                </Typography>
              </SC.ListItemSC>
            </SC.ListST>
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
            Порядок оплаты и возвратов
          </Typography>

          <SC.ListST>
            <Typography variant="body2" mt={2}>
              Оплата:
            </Typography>

            <SC.ListItemSC>
              <Typography variant="body2">
                Пользователь обязуется оплатить услуги Поставщика в соответствии
                с тарифами, опубликованными на сайте{" "}
                <CustomLink href="https://zandocs.kz">
                  https://zandocs.kz
                </CustomLink>
                .
              </Typography>
            </SC.ListItemSC>
            <SC.ListItemSC>
              <Typography variant="body2">
                Оплата производится в национальной валюте - тенге, с учетом НДС
                и всех других обязательных платежей и сборов, установленных
                законодательством Республики Казахстан.
              </Typography>
            </SC.ListItemSC>

            <Typography variant="body2" mt={2}>
              Возвраты:
            </Typography>
            <SC.ListItemSC>
              <Typography variant="body2">
                В случае отказа Пользователя от услуг до момента предоставления
                доступа к Конструктору документов, Исполнитель обязуется вернуть
                уплаченную сумму за вычетом фактически понесенных расходов.
              </Typography>
            </SC.ListItemSC>
            <SC.ListItemSC>
              <Typography variant="body2">
                Возврат денежных средств осуществляется в течение 14 рабочих
                дней с момента получения письменного заявления Пользователя.
              </Typography>
            </SC.ListItemSC>
            <SC.ListItemSC>
              <Typography variant="body2">
                После предоставления доступа к Конструктору документов возврат
                денежных средств не осуществляется.
              </Typography>
            </SC.ListItemSC>
          </SC.ListST>

          <Typography
            variant="h4"
            gutterBottom
            sx={{
              textTransform: "uppercase",
              fontWeight: 700,
              fontSize: "18px",
              marginTop: 4,
            }}
          >
            Порядок разрешения споров
          </Typography>

          <SC.ListST>
            <SC.ListItemSC>
              <Typography variant="body2">
                Все споры и разногласия, возникающие в связи с исполнением
                настоящей Оферты, подлежат разрешению путем переговоров между
                сторонами.
              </Typography>
            </SC.ListItemSC>
            <SC.ListItemSC>
              <Typography variant="body2">
                Сторона, считающая, что ее права нарушены, обязана направить
                другой стороне письменную претензию с описанием возникших споров
                и предложением способов их урегулирования.
              </Typography>
            </SC.ListItemSC>
            <SC.ListItemSC>
              <Typography variant="body2">
                Сторона, получившая претензию, обязуется рассмотреть ее в
                течение 30 (тридцати) календарных дней с момента получения и
                направить письменный ответ с изложением своей позиции и
                предложениями по урегулированию спора.
              </Typography>
            </SC.ListItemSC>
            <SC.ListItemSC>
              <Typography variant="body2">
                В случае невозможности достижения согласия путем переговоров в
                течение 60 (шестидесяти) календарных дней с момента получения
                претензии, спор подлежит рассмотрению в судебных органах
                Республики Казахстан в соответствии с действующим
                законодательством.
              </Typography>
            </SC.ListItemSC>
            <SC.ListItemSC>
              <Typography variant="body2">
                Все судебные разбирательства по настоящему Договору
                осуществляются по месту нахождения Исполнителя.
              </Typography>
            </SC.ListItemSC>
            <SC.ListItemSC>
              <Typography variant="body2">
                Применимым правом по всем вопросам, возникающим из настоящей
                Оферты, является право Республики Казахстан.
              </Typography>
            </SC.ListItemSC>
            <SC.ListItemSC>
              <Typography variant="body2">
                В случае возникновения разногласий или споров по поводу
                толкования или исполнения условий настоящей Оферты, приоритетное
                значение имеет текст Оферты на казахском языке, если таковой
                имеется. В иных случаях текст Оферты на русском языке имеет
                приоритетное значение.
              </Typography>
            </SC.ListItemSC>
          </SC.ListST>

          <Typography
            variant="h4"
            gutterBottom
            sx={{
              textTransform: "uppercase",
              fontWeight: 700,
              fontSize: "18px",
              marginTop: 4,
            }}
          >
            Ответственность сторон
          </Typography>

          <SC.ListST>
            <SC.ListItemSC>
              <Typography variant="body2">
                Исполнитель не несет ответственности за убытки Пользователя,
                возникшие вследствие некорректного использования Конструктора
                документов или неправильного ввода данных.
              </Typography>
            </SC.ListItemSC>
            <SC.ListItemSC>
              <Typography variant="body2">
                Исполнитель не несет ответственности за временные сбои и
                перерывы в работе Конструктора документов, связанные с
                техническими причинами, но обязуется принять все возможные меры
                для их устранения в возможно короткие сроки.
              </Typography>
            </SC.ListItemSC>
            <SC.ListItemSC>
              <Typography variant="body2">
                Пользователь несет ответственность за все действия, совершенные
                с использованием его учетной записи, включая действия третьих
                лиц, если Пользователь добровольно предоставил им доступ к своей
                учетной записи.
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
            Изменение условий оферты
          </Typography>

          <SC.ListST>
            <SC.ListItemSC>
              <Typography variant="body2">
                Исполнитель оставляет за собой право изменять условия настоящей
                Оферты в одностороннем порядке. Изменения вступают в силу с
                момента их публикации на веб-сайте{" "}
                <CustomLink href="https://zandocs.kz">
                  https://zandocs.kz
                </CustomLink>
                .
              </Typography>
            </SC.ListItemSC>
            <SC.ListItemSC>
              <Typography variant="body2">
                Пользователь обязуется самостоятельно отслеживать изменения в
                условиях Оферты, размещенные на сайте. Продолжение использования
                Конструктора документов после внесения изменений означает
                согласие Пользователя с новыми условиями.
              </Typography>
            </SC.ListItemSC>
          </SC.ListST>

          <Typography
            variant="h4"
            gutterBottom
            sx={{
              textTransform: "uppercase",
              fontWeight: 700,
              fontSize: "18px",
              marginTop: 4,
            }}
          >
            Политика конфиденциальности
          </Typography>

          <SC.ListST>
            <SC.ListItemSC>
              <Typography variant="body2">
                Исполнитель обязуется защищать конфиденциальность и безопасность
                персональных данных Пользователя в соответствии с
                законодательством Республики Казахстан.
              </Typography>
            </SC.ListItemSC>
            <SC.ListItemSC>
              <Typography variant="body2">
                Персональные данные, предоставленные Пользователем, используются
                исключительно для предоставления услуг и не передаются третьим
                лицам без согласия Пользователя, за исключением случаев,
                предусмотренных законодательством.
              </Typography>
            </SC.ListItemSC>
            <SC.ListItemSC>
              <Typography variant="body2">
                Пользователь имеет право запросить удаление или изменение своих
                персональных данных, предоставленных Исполнителю.
              </Typography>
            </SC.ListItemSC>
          </SC.ListST>

          <Typography
            variant="h4"
            gutterBottom
            sx={{
              textTransform: "uppercase",
              fontWeight: 700,
              fontSize: "18px",
              marginTop: 4,
            }}
          >
            Форс-мажорные обстоятельства
          </Typography>

          <SC.ListST>
            <SC.ListItemSC>
              <Typography variant="body2">
                Стороны освобождаются от ответственности за полное или частичное
                неисполнение своих обязательств по настоящему Договору, если это
                неисполнение явилось следствием обстоятельств непреодолимой
                силы, таких как: пожары, наводнения, землетрясения, военные
                действия, забастовки, массовые беспорядки и т.п., возникших
                после заключения настоящего Договора.
              </Typography>
            </SC.ListItemSC>
            <SC.ListItemSC>
              <Typography variant="body2">
                Сторона, для которой создалась невозможность исполнения
                обязательств по Договору вследствие действия обстоятельств
                непреодолимой силы, обязана немедленно, но не позднее 10
                (десяти) дней после наступления таких обстоятельств, уведомить
                другую Сторону в письменной форме о начале и предполагаемом
                сроке действия указанных обстоятельств.
              </Typography>
            </SC.ListItemSC>
            <SC.ListItemSC>
              <Typography variant="body2">
                Если обстоятельства непреодолимой силы действуют более трех
                месяцев, любая из Сторон имеет право расторгнуть настоящий
                Договор в одностороннем порядке.
              </Typography>
            </SC.ListItemSC>
          </SC.ListST>

          <Typography
            variant="h4"
            gutterBottom
            sx={{
              textTransform: "uppercase",
              fontWeight: 700,
              fontSize: "18px",
              marginTop: 4,
            }}
          >
            Срок действия оферты
          </Typography>

          <SC.ListST>
            <SC.ListItemSC>
              <Typography variant="body2">
                Настоящая Оферта вступает в силу с момента ее опубликования на
                веб-сайте{" "}
                <CustomLink href="https://zandocs.kz">
                  https://zandocs.kz
                </CustomLink>{" "}
                и действует до момента ее отзыва Исполнителем.
              </Typography>
            </SC.ListItemSC>
            <SC.ListItemSC>
              <Typography variant="body2">
                Пользователь соглашается с условиями Оферты с момента начала
                использования Конструктора документов.
              </Typography>
            </SC.ListItemSC>
          </SC.ListST>
        </Box>
      </Container>
    </MainCntainer>
  );
};

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

export default Oferta;
