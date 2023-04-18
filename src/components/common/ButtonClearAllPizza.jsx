import React from 'react';
import trash from "../../assets/img/trash.svg";
import { useDispatch } from "react-redux";
import { cleanAll } from '../../redux/slices/cartSlice'

function ButtonClearAllPizza({ rest }) {
    const dispatch = useDispatch();
    return (
      <button className="top__trash" onClick={() => dispatch(cleanAll())}>
        <div className="top__trash-img">
          <img className="_ibg" src={trash} alt="" />
        </div>
        <p>Очистить корзину</p>
      </button>
    );
}
export default ButtonClearAllPizza;