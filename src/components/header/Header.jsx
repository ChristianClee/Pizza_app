import React from 'react';
import CartHederElement from './CartHederElement';
import LogoHeaderElement from './LogoHeaderElement';
import { Link } from "react-router-dom";

function Header() {
    return (
      <header className="header wall-paper">
        <div className="container">
          <div className="header__body">
            <LogoHeaderElement /> 
            <Link to="/cart">
              <CartHederElement />
            </Link>
          </div>
        </div>
      </header>
    );
}
export default Header;