import React from "react";
import Checkbox from "./checkbox";

function CheckboxList({ options, selectedValues, onChange, swiperRef }) {
  const handleChange = (value) => {
    const newValues = [...selectedValues];
    const indexValue = newValues.indexOf(value);
    newValues.includes(value)
      ? newValues.splice(indexValue, 1)
      : newValues.push(value);
    onChange && onChange(newValues);
    !selectedValues.includes(value) && swiperRef.slideTo(value, 0);
  };

  return (
    <ul>
      {options.map((option) => (
        <Checkbox
          key={option.value}
          isChecked={selectedValues.includes(option.value)}
          value={option.value}
          text={option.title}
          onChange={handleChange}
        />
      ))}
    </ul>
  );
}

export default CheckboxList;
