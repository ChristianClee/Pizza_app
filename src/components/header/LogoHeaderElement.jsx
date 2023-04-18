import React from 'react';
import pizzaLogo from "../../assets/img/pizza_logo.svg"; 



function LogoHeaderElement() {
    return (
      <div className="header__logo logo">
        <div className="logo__img">
          <img className="_ibg" src={pizzaLogo} alt="" />
        </div>
        <div className="logo__text">
          <h1 className="logo__title">REACT PIZZA</h1>
          <div className="logo__subtitle">радиоактивная пицца</div>
        </div>
      </div>
    );
}
export default LogoHeaderElement;