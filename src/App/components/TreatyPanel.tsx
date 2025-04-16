import React, { useEffect, useState } from "react";
import Panel from "./Panel/Panel";
import {
  ListColumnData,
  ItemData,
} from "../../UIKit/CustomList/CustomListTypes";
import CustomList from "../../UIKit/CustomList/CustomList";
import Scripts from "../shared/utils/clientScripts";
import utils, { redirectSPA } from "../shared/utils/utils";
import { localStorageDraftKey } from "..//shared/utils/constants";

/** Проект письма */
function TreatyPanel() {
  /** Обработчик нажатия на номер договора */
  const onClickNumberTreaty = async (props: ItemData) => {
    const treatyId = props.info;
    if (!treatyId) return;

    // Запись текущего url в localStorage
    window.localStorage.setItem(
      "medpultPathBefore",
      window.location.pathname + window.location.search
    );
    localStorage.setItem("medpultTreatyId", treatyId);
    //localStorage.setItem(localStorageDraftKey, JSON.stringify(data));
    // Переход
    const link = Scripts.getTreatyrPageCode();
    redirectSPA(link);
  };
  /** Колонки списка */
  const columns = [
    new ListColumnData({
      name: "Номер",
      code: "number",
      fr: 1,
      isLink: true,
      onClick: onClickNumberTreaty,
    }),
    new ListColumnData({
      name: "Продукт",
      code: "product",
      fr: 1,
    }),
    new ListColumnData({
      name: "Статус",
      code: "status",
      fr: 1,
    }),
  ];

  //количество договоров
  const [elementsCount, setElementsCount] = useState<number>(0);
  const fetchElementsCount = async () => {
    const count = await Scripts.getCountTreaty();
    setElementsCount(count);
  };
  // Вычислить количество договоров
  useEffect(() => {
    fetchElementsCount();
  }, []);
  return (
    <div>
      <Panel label={`Договоры страхования (${elementsCount})`} isOpen={false}>
        <div style={{ padding: "0" }}>
          <CustomList
            columnsSettings={columns}
            getDataHandler={Scripts.getTreaty}
            isScrollable={false}
          />
        </div>
      </Panel>
    </div>
  );
}

export default TreatyPanel;
