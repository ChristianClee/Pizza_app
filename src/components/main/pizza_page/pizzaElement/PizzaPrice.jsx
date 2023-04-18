import React from 'react';
import CountComponent from "../../../common/CountComponent";
import plus from "../../../../assets/img/plus.svg";
import rubleBlack from "../../../../assets/img/ruble-black.svg";
import { useSelector } from "react-redux";


function PizzaPrice({ andNewPizza, id, price, activSize }) {
  const pizzas = useSelector((state) =>
    state.cart.pizzas.filter((pizza) => pizza.id === id)
  )
  const count = pizzas
    ? pizzas.reduce((prev, item) => (prev += item.count), 0)
    : 0

  return (
    <div className="pizza__body-price">
      <div className="pizza__price">
        <p>{price[activSize]}</p>
        <div className="pizza__img-ruble">
          <img className="_ibg" src={rubleBlack} alt="ruble" />
        </div>
      </div>
      <div className="pizza__button-add">
        <button className="button-add" onClick={() => andNewPizza()}>
          <div className="button-add__img">
            <img className="_ibg" src={plus} alt="plus" />
          </div>
          <p className="button-add__text">Добавить</p>
          <CountComponent count={count} />
        </button>
      </div>
    </div>
  );
}
export default PizzaPrice;