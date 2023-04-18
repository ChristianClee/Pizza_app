import React from 'react';
import PizzaElement from "./PizzaElement";


function PizzasElement({ pizzas }) {
    return (
      <div className="pizzas">
        <h2 className="pizzas__title">Все пиццы</h2>
        <div className="pizzas__list">
          {pizzas.map((pizza, index) => {
            return <PizzaElement key={index} {...pizza} />
          })}
        </div>
      </div>
    );
}
export default PizzasElement;