/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";
import { format } from "date-fns"; // Убедитесь, что `format` импортирован корректно
const typeByStatus: Record<string, string> = {
  cancelled: "Отменен",
  completed: "Выполнен",
  processing: "В процессе",
  pending: "Обработка",
  ["on-hold"]: "Заморожен",
};
type TOrder = {
  id: number;
  date_created: string;
  status: string;
  line_items: { total: string }[];
  currency_symbol: string;
};

type TOrdersState = {
  ordersPrice: number;
  setOrdersPrice: (price: number) => void;
  isFirstRender: boolean;
  orders: any[]; // Массив заказов, можно уточнить тип для строгой типизации
  setOrders: (data: TOrder[]) => void;
  setIsFirstRender: (isFirstRender: boolean) => void;
};

export const useOrders = create<TOrdersState>()((set) => ({
  orders: [],
  isFirstRender: true,
  setIsFirstRender: (isFirstRender) => set({ isFirstRender }),
  ordersPrice: 0,
  setOrdersPrice: (price: number) => set({ ordersPrice: price }),

  setOrders: (data) =>
    set((state) => ({
      orders: [
        ...state.orders, // Сохраняем предыдущие заказы
        ...data.map((item: TOrder) => [
          item.id,
          format(new Date(item.date_created), "dd.MM.yyyy"), // Форматируем дату
          typeByStatus[item.status], // Получаем статус
          `${item.line_items.reduce(
            (acc: number, lineItem: { total: string }) =>
              acc + parseFloat(lineItem.total),
            0
          )} ${item.currency_symbol}`, // Считаем итоговую сумму
        ]),
      ],
    })),
}));
