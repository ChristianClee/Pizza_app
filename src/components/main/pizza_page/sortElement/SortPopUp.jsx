import React from 'react';
import { changeSort } from "../../../../redux/slices/filterSlice";
import { useSelector, useDispatch } from "react-redux";
import LiComponents from "../../../common/LiComponents";

function SortPopUp({ window }) {
  const dispatch = useDispatch();
  const listSort = useSelector((state) => state.filter.listSort);
  const sort = useSelector((state) => state.filter.sort);
  function changeSortFn(index) {
    dispatch(changeSort(index));
  }
  return (
    <>
      {window && (
        <ul className="popUp">
          <LiComponents
            li_s={listSort}
            value={sort[2]}
            callback={changeSortFn}
          />
        </ul>
      )}
    </>
  );
}
export default SortPopUp