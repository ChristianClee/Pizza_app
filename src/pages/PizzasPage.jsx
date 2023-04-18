import React, { useEffect, useState } from "react";
import SortElement from "../components/main/pizza_page/SortElement";
import PizzasElement from "../components/main/pizza_page/PizzasElement";
import fetchingApi from "../components/business/API/fetchingApi"
import useFetching from "../components/business/customHooks/requestProcessing";
import { useSelector } from "react-redux";


function PizzasPage() {
  // ! business logic !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  const indexCategory = useSelector((state) => state.filter.category[1]);
  const sortPizza = useSelector((state) => state.filter.sort[1]);

  // console.log(indexCategory);
  const [pizzas, setPizzas] = useState([]);
  const url = `https://641d44e61a68dc9e461a633b.mockapi.io/items?category=${indexCategory}&sortby=${sortPizza}`;
  

  const callback = async () => {
    const response = await fetchingApi.getPizzas(url);
    setPizzas(response);
  };
  const { error, isLoad, processing } = useFetching(callback);
  useEffect(() => {
    processing();
  }, [indexCategory, sortPizza]);
  // ! business logic !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  return (
    <div className="main wall-paper">
      <div className="container">
        <SortElement />
        <PizzasElement pizzas={pizzas} />
      </div>
    </div>
  );
}
export default PizzasPage;
