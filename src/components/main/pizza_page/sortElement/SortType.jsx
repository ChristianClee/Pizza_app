import React, { useState } from "react";
import { useSelector} from "react-redux";
import blackTriangle from "../../../../assets/img/black-triangle.svg"
import SortPopUp from "./SortPopUp";

function SortType() {
  const [window, setWindow] = useState(false)
  const sort = useSelector((state) => state.filter.sort)


    return (
      <div className="sort__type">
        <div className="type" onClick={() => setWindow(!window)}>
          <div className="type__img">
            <img className="_ibg" src={blackTriangle} alt="" />
          </div>
          <div className="type__name">Сортировка по:</div>
          <div className="type__choice">{sort[0]}</div>
          <div className="type__popUp">
            <SortPopUp window={window} />
          </div>
        </div>
      </div>
    );
}
export default SortType;