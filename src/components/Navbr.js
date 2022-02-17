import React from "react";

const Navbr = ({ filterItem, categories }) => {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {categories.map((item) => {
            return (
              <button
                className="btn-group__item"
                onClick={() => filterItem(item)}
              >
                {item}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navbr;
