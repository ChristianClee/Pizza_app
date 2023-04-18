import React from 'react';
import AddOnePizza from "./AddOnePizza";
import RemoveOnePizza from './RemoveOnePizza';
import CleanPizzasRow from './CleanPizzasRow';



function CartElement({ id, imageUrl, title, size, type, price, count }) {
  const pizza = { id, imageUrl, title, size, type, price, count }


  return (
    <div className="cart-page__pizza-cart pizza-cart">
      <div className="pizza-cart__img">
        <img className="_ibg" src={imageUrl} alt="pizza" />
      </div>
      <div className="pizza-cart__text">
        <h4 className="pizza-cart__title">{title}</h4>
        <p>
          {type}, {size} см
        </p>
      </div>
      <div className="pizza-cart__regulator">
        <RemoveOnePizza pizza={pizza} />
        <h3>{count}</h3>
        <AddOnePizza pizza={pizza} />
      </div>
      <div className="pizza-cart__price">
        <h3>{count * price}</h3>
        <div className="pizza-cart__price-img">
          <img src="../img/ruble-black.svg" alt="" />
        </div>
      </div>
      <CleanPizzasRow pizza={pizza} />
    </div>
  );
}
export default CartElement;