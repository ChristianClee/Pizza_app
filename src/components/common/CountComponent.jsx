import React from 'react';


function CountComponent({count}) {
    return (
      <>
        {!count ? (
          ""
        ) : (
          <div className="button-add__count">
            <p>{count}</p>
          </div>
        )}
      </>
    );
}
export default CountComponent;