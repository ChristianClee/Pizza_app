import React from 'react';
import arrow_back from "../../assets/img/path_.svg";
import { Link } from "react-router-dom";

function ButtonBackPizza() {
  return (
    <Link to="/" style={{ display: "inherit" }}>
      <button className="bottom__button">
        <div className="bottom__img">
          <img src={arrow_back} alt="" />
        </div>
        <p>Вернуться назад</p>
      </button>
    </Link>
  );
}
export default ButtonBackPizza;