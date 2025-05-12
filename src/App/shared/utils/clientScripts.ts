import { FetchData, ItemData } from "../../../UIKit/CustomList/CustomListTypes";
import { TreatyListData } from "../types";

/** Заглушка ожидания ответа сервера */
function randomDelay() {
  const delay = Math.random() * 1000;
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

/** Получение списка договоров */
async function getTreaty(): Promise<FetchData<TreatyListData>> {
  await randomDelay();

  const mockData: TreatyListData = {
    number: new ItemData({ value: "008WS000000001", info: "test" }),
    product: new ItemData({ value: "ЗОК-ФЛ-СбОЛ", info: "test" }),
    status: new ItemData({
      value:
        "ДействуетДействуетДействуетДействуетДействуетДействуетДействуетДействуетДействуетДействуетДействуетДействуетДействуетДействуетДействует",
      info: "test",
    }),
  };

  return {
    items: Array(3)
      .fill(0)
      .map((data, index) => {
        return {
          id: String(index),
          data: new TreatyListData(mockData),
        };
      }),
    hasMore: false,
  };
}

/** Получить количество договоров*/
async function getCountTreaty() {
  return 3;
}

declare const Context: any;
/** Получение кода страницы договора */
function getTreatyPageCode(): string {
  return Context.data.insurance_treaty_page_code ?? "";
}

/** Установить идентификатор застрахованного для перехода на форму договора */
function getContractId(): string {
  return "contract_id"
}

export default {
  getTreaty,
  getCountTreaty,
  getTreatyPageCode,
  getContractId,
};
