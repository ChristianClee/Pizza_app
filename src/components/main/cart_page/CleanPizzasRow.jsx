import React from 'react';
import chest_button from "../../../assets/img/chest_button.svg";
import { useDispatch } from 'react-redux';
import { cleanRow } from "../../../redux/slices/cartSlice";

function CleanPizzasRow({pizza}) {
  const dispatch = useDispatch()
    return (
      <div
        onClick={()=> dispatch(cleanRow(pizza))}
        className="pizza-cart__clean-img">
        <img className="_ibg" src={chest_button} alt="cross" />
      </div>
    );
}
export default CleanPizzasRow;