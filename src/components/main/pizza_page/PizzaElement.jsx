import React,{useState} from 'react';
import { useDispatch } from "react-redux";
import { addPizza } from '../../../redux/slices/cartSlice';
import PizzaOptions from './pizzaElement/PizzaOptions';
import PizzaPrice from './pizzaElement/PizzaPrice';


function PizzaElement({ imageUrl, id, title, types, sizes, price }) {
  // imageUrl type = string
  // id       type = number
  // title    type = string
  // types    type = array[string]
  // sizes    type = array[number]
  // price    type = array[number]
  const [activType, setActiveType] = useState(0)
  const [activSize, setActiveSise] = useState(0)
  const dispatch = useDispatch();
  const paramOptions = {
    types,
    sizes,
    activType,
    activSize,
    setActiveType,
    setActiveSise,
  }
  const priceOptions = {
    andNewPizza,
    id,
    price,
    activSize,
  }
  function andNewPizza() {
    const newPizza = {
      id: id, // type = number
      imageUrl: imageUrl, // type = string
      title: title, // type = string
      size: sizes[activSize], // type = number
      type: types[activType], // type = number
      price: price[activSize], // type = number
      count: 1, // type = number
    }
    dispatch(addPizza(newPizza))
  }


  return (
    <div className="pizzas__pizza pizza">
      <div className="pizza__img">
        <img className="_ibg" src={imageUrl} alt="pizza" />
      </div>
      <div className="pizza__title">{title}</div>

      <div className="pizza__burger-options burger-options">
        <div className="burger-options">
          <div> опции </div>
        </div>
      </div>

      <PizzaOptions {...paramOptions} />
      <PizzaPrice {...priceOptions} />
    </div>
  );
}
export default PizzaElement;