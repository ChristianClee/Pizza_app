import React from 'react';
import plus_button from "../../../assets/img/plus_button.svg";
import { useDispatch, useSelector } from 'react-redux';
import { removeOne, addOne } from '../../../redux/slices/cartSlice';

function AddOnePizza({ pizza }) {
  
  const dispatch = useDispatch()
  return (
    <button
      className="pizza-cart__minus"
      onClick={() => {
        dispatch(addOne(pizza))
      }}>
      <img className="_ibg" src={plus_button} alt="" />
    </button>
  );
}
export default AddOnePizza;