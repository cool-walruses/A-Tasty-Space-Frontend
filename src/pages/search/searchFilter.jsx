import React, { useContext, useEffect } from "react";

import Filter from "./searchFilter/filter";

function SearchFilter({
  className,
  list,
  selected,
  handleChange,
  multiselect,
}) {
  const getFilters = () => {
    if (multiselect) {
      if (list) {
        return list.map((item, i) => (
          <Filter
            isSelected={selected.includes(item)}
            key={i}
            onClick={() => handleChange(item)}
          >
            {item}
          </Filter>
        ));
      }
    } else {
      if (list) {
        return list.map((item, i) => (
          <Filter
            isSelected={i === selected}
            key={i}
            onClick={() => handleChange(i)}
          >
            {item}
          </Filter>
        ));
      }
    }
  };

  return <div className={className}>{getFilters()}</div>;
}

export default SearchFilter;
