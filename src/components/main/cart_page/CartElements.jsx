import React from "react";
import CartElement from "./CartElement";
import { useSelector } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function CartElements() {
  const pizzas = useSelector((state) => state.cart.pizzas);
  const price = useSelector((state) => state.cart.price);
  const count = useSelector((state) => state.cart.countPizzas);
  return (
    <div className="cart-page__list">
      <TransitionGroup>
        {pizzas.map((pizza) => (
          <CSSTransition
            unmountOnExit
            key={" " + pizza.id + pizza.size + pizza.sort}
            classNames="transitionGroup"
            timeout={1000}>
            <CartElement {...pizza} />
          </CSSTransition>
        ))}
      </TransitionGroup>

      <div className="cart-page__total total-cart">
        <div className="total-cart__count">
          <p>
            Всего пицц: <span>{count}шт</span>
          </p>
        </div>
        <div className="total-cart__price">
          <p>
            Сумма заказа <span>{price} P</span>
          </p>
        </div>
      </div>
    </div>
  );
}
export default CartElements;
