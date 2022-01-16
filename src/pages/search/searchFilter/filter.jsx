import React, { useContext } from "react";


function Filter({ isSelected, onClick, children }) {
  return (
      <button className={`filter-button${isSelected ? " selected" : ""}`} onClick={onClick}>{children}</button>
  );
}

export default Filter;