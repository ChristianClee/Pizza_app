import React from 'react';
import Categories from './sortElement/Categories';
import SortType from './sortElement/SortType';

function SortElement() {
  return (
    <div className="sort">
      <div className="sort__burger burger-sort">
        <div>
          категории
        </div>
      </div>
      <Categories />
      <SortType/>
    </div>
  );
}
export default SortElement;