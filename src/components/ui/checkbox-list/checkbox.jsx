import React from "react";
import { HiddenInput, CheckboxLabel } from "./style";

function Checkbox({ isChecked, value, text, onChange, ...props }) {
  return (
    <CheckboxLabel $isChecked={isChecked}>
      <label>
        <HiddenInput
          value={value}
          checked={isChecked}
          onChange={() => onChange(value)}
          {...props}
          type="checkbox"
          name="select-products"
        />
        {text}
      </label>
    </CheckboxLabel>
  );
}

export default Checkbox;
