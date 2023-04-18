import React from 'react';
import { Route, Routes } from 'react-router';
import PizzasPage from '../pages/PizzasPage';
import CartPage from "../pages/CartPage";

function AppRouter() {
    return (
        <Routes>
          <Route path="/" element={<PizzasPage/>} />
          <Route path="/cart" element={<CartPage/> } />
        </Routes>
    );
}
export default AppRouter;