import React from 'react';
import shoppingCart from "../assets/img/shopping-cart.svg";
import CartElements from '../components/main/cart_page/CartElements';
import ButtonBackPizza from '../components/common/ButtonBackPizza';
import ButtonClearAllPizza from '../components/common/ButtonClearAllPizza';



function CartPage() {

    return (
      <div className="main wall-paper">
        <div className="container">
          <div className="cart-page">
            <div className="cart-page__top top">
              <div className="top__basket" >
                <div className="top__basket-img">
                  <img className="_ibg" src={shoppingCart} alt="cart" />
                </div>
                <h2>Корзина</h2>
              </div>
              <ButtonClearAllPizza />
            </div>
            <CartElements />
            <div className="cart-page__bottom bottom">
              <ButtonBackPizza />
              <div className="bottom__button">
                <p>Оплатить сейчас</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
export default CartPage;