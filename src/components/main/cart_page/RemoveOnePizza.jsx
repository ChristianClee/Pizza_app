import React from 'react';
import mines_button from "../../../assets/img/mines_button.svg";
import { useDispatch } from 'react-redux';
import { removeOne } from '../../../redux/slices/cartSlice';

function RemoveOnePizza({pizza}) {
  const dispatch = useDispatch()
    return (
      <button
        className="pizza-cart__minus"
        onClick={()=> dispatch(removeOne(pizza))}
      >
        <img className="_ibg" src={mines_button} alt="" />
      </button>
    );
}
export default RemoveOnePizza;