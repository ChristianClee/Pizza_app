import React from 'react';
import LiComponents from "../../../common/LiComponents";

function PizzaOptions({
  types,
  sizes,
  activType,
  activSize,
  setActiveType,
  setActiveSise,
}) {
  return (
    <div className="pizza__options options">
      <ul className="options__type">
        <LiComponents
          li_s={types}
          callback={setActiveType}
          value={activType} />
      </ul>
      <ul className="options__size">
        <LiComponents
          li_s={sizes}
          callback={setActiveSise}
          value={activSize}
          text={"см"}
        />
      </ul>
    </div>
  );
}
export default PizzaOptions;