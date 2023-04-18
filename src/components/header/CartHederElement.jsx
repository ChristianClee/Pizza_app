import React from 'react';
import ruble from "../../assets/img/ruble.svg";
import logo_cart from "../../assets/img/logo_cart.svg";
import { useSelector } from 'react-redux';

function CartHederElement() {
  const prise = useSelector((state) => state.cart.price)
  const count = useSelector((state) => state.cart.countPizzas); 
    return (
      <div className="header__cart cart">
        <div className="cart__price">
          <p>{prise}</p>
          <div className="cart__img">
            <img className="_ibg" src={ruble} alt="ruble" />
          </div>
        </div>
        <div className="cart__scope">
          <div className="cart__img">
            <img className="_ibg" src={logo_cart} alt="" />
          </div>
          <p>{count}</p>
        </div>
      </div>
    );
}
export default CartHederElement;