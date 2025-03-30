export const getDetails = (type: string, number: number) => {
  switch (type) {
    case "юридическое лицо":
      return [
        {
          variant: "input",
          name: `name${number}`,
          type: "text",
          label:
            "Введите наименование организации, БИК и зарегистрированный адрес юр.лица",
        },
        {
          variant: "input",
          name: `passport${number}`,
          type: "text",
          label:
            "Укажите данные руководителя: ФИО, ИИН, год рождения, зарегистрированный адрес",
        },
        {
          variant: "input",
          name: `iin${number}`,
          type: "text",
          label: "ИИН руководителя юридического лица",
        },
      ];
    case "физическое лицо":
      return [
        {
          variant: "input",
          name: `name${number}`,
          type: "text",
          label: "Введите ФИО",
        },
        {
          variant: "input",
          name: `passport${number}`,
          type: "text",
          label: "Введите паспортные данные и орган выдачи",
        },
        {
          variant: "input",
          name: `iin${number}`,
          type: "text",
          label: "Введите ИИН",
        },
      ];
    case "индивидуальный предприниматель":
      return [
        {
          variant: "input",
          name: `name${number}`,
          type: "text",
          label: "Введите наименование ИП",
        },
        {
          variant: "input",
          name: `passport${number}`,
          type: "text",
          label: "Введите паспортные данные и орган выдачи",
        },
        {
          variant: "input",
          name: `iin${number}`,
          type: "text",
          label: "Введите ИИН",
        },
      ];
    default:
      return [
        {
          variant: "",
          name: "",
          type: "",
          label: "",
        },
      ];
  }
};

export const getDetailsBusiness = (type: string, number: number) => {
  switch (type) {
    case "юридическое лицо":
      return [
        {
          variant: "input",
          name: `name${number}`,
          type: "text",
          label:
            "Введите полное наименование юридического лица",
        },
        {
          variant: "input",
          name: `passport${number}`,
          type: "text",
          label:
            "Укажите БИН юридического лица",
        },
        {
          variant: "input",
          name: `iin${number}`,
          type: "text",
          label: "Юридический адрес",
        },
        {
          variant: "input",
          name: `namedata${number}`,
          type: "text",
          label: "Банковские реквизиты (Банк, БИК, IBAN)",
        },
        {
          variant: "input",
          name: `registry${number}`,
          type: "text",
          label: "Данные руководителя: ФИО, ИИН, год рождения, зарегистрированный адрес",
        },
      ];
    case "физическое лицо":
      return [
        {
          variant: "input",
          name: `name${number}`,
          type: "text",
          label: "Введите ФИО",
        },
        {
          variant: "input",
          name: `passport${number}`,
          type: "text",
          label: "Введите паспортные данные и орган выдачи",
        },
        {
          variant: "input",
          name: `iin${number}`,
          type: "text",
          label: "Введите ИИН",
        },
      ];
    case "индивидуальный предприниматель":
      return [
        {
          variant: "input",
          name: `name${number}`,
          type: "text",
          label: "Введите ФИО ИП",
        },
        // {
        //   variant: "input",
        //   name: `passport${number}`,
        //   type: "text",
        //   label: "Введите паспортные данные и орган выдачи",
        // },
        {
          variant: "input",
          name: `iin${number}`,
          type: "text",
          label: "Введите ИИН",
          
        },
        // {
        //   variant: "input",
        //   name: `namedata${number}`,
        //   type: "text",
        //   label: "Введите наименование ИП (при наличии)",
        // },
        {
          variant: "input",
          name: `registry${number}`,
          type: "text",
          label: "Свидетельство о регистрации ИП (номер, дата)",
        },
        {
          variant: "input",
          name: `address${number}`,
          type: "text",
          label: "Адрес регистрации ИП",
        },
      ];
    default:
      return [
        {
          variant: "",
          name: "",
          type: "",
          label: "",
        },
      ];
  }
};

export const getContributionDetails = (type: string, number: number) => {
  switch (type) {
    case "денежная":
      return [
        {
          variant: "input",
          name: `name${number}`,
          type: "number",
          label: `Сумма вклада в тенге `,
        },
      ];
    case "неденежная":
      return [
        {
          variant: "input",
          name: `passport${number}`,
          type: "text",
          label: `Описание неденежного вклада `,
        },
        {
          variant: "input",
          name: `name${number}`,
          type: "number",
          label: `Оценочная стоимость вклада в тенге `,
        },
      ];
    default:
      return [
        {
          variant: "",
          name: "",
          type: "",
          label: "",
        },
      ];
  }
};

export const getFlags = (status: string, number: number) => ({
  [`is_legal_entity${number}`]: status === "юридическое лицо",
  [`is_individual${number}`]: status === "физическое лицо",
  [`is_entrepreneur${number}`]: status === "индивидуальный предприниматель",
});
export const getFlags2 = (status: string, number: number) => ({
  [`is_legal_entity${number}`]: status === "денежная",
  [`is_individual${number}`]: status === "неденежная",
});

// {/is_legal_entity1}
// {#is_individual1}
// {name1} паспорт {passport1}, ИИН {iin1}, именуемый в дальнейшем «Займодатель».
// {/is_individual1}
// {#is_entrepreneur1}
// {name1} паспорт {passport1}, ИИН {iin1}, именуемый в дальнейшем «Займодатель».
// {/is_entrepreneur1}

// {#is_legal_entity2}
// И {name2} в лице {passport2}, действующего на основании {iin2}, именуемый в дальнейшем «Заемщик», заключили настоящий договор о нижеследующем:
// {/is_legal_entity2}
// {#is_individual2}
// И {name2} паспорт {passport2}, ИИН {iin2}, именуемый в дальнейшем «Заемщик», заключили настоящий договор о нижеследующем:
// {/is_individual2}
// {#is_entrepreneur2}
// И {name2} паспорт {passport2}, ИИН {iin2}, именуемый в дальнейшем «Заемщик», заключили настоящий договор о нижеследующем:
// {/is_entrepreneur2}
