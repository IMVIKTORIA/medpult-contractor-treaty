import {
  ItemData,
  ItemDataString,
} from "../../UIKit/CustomList/CustomListTypes";

export class TreatyListData {
  /** ФИО застрахованного */
  number?: ItemData;
  /** Дата рождения */
  product?: ItemData;
  /** Телефон */
  status?: ItemData;

  constructor({ number, product, status }: TreatyListData) {
    this.number = number;
    this.product = product;
    this.status = status;
  }
}
