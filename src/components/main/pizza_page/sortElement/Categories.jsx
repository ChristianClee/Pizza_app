import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { changeCaterory } from "../../../../redux/slices/filterSlice"
import LiComponents from '../../../common/LiComponents';

function Categories() {
  const listCategories = useSelector((state) => state.filter.listCategories)
  const dispatch = useDispatch();
  const category = useSelector((state) => {
    const index = state.filter.category[1]
    return index === "" ? 0 : index
  })
  function changeCateroryFn(index) {
    dispatch(changeCaterory(index))
  }
  // console.log(category);
  
    return (
      <div className="sort__categories">
        <ul className="categories">
          <LiComponents
            li_s={listCategories}
            value={category}
            callback={changeCateroryFn}
          />
        </ul>
      </div>
    );
}
export default Categories;