import React from 'react';


function LiComponents({ li_s, text, value, callback }) {
  return (
    <>
      {li_s.map((li, index) => (
        <li
          className={value === index ? "active" : ""}
          key={index}
          onClick={() => callback(index)}>
          {text} {li}
        </li>
      ))}
    </>
  );
}
export default LiComponents;