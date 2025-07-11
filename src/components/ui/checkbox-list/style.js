import styled, { css } from "styled-components";
import checkboxSelect from "/src/assets/checkbox.svg";

export const HiddenInput = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
  clip: rect(0 0 0 0);
  overflow: hidden;

  &:focus-visible ~ * {
    outline: 1px solid #000000;
  }
`;

export const CheckboxLabel = styled.li`
  label {
    display: flex;
    font-size: 18px;
    align-items: center;
    justify-content: space-between;
    padding-block: 15px 14px;

    &::after {
      content: "";
      display: block;
      height: 22px;
      width: 22px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      background: url(${checkboxSelect}) no-repeat center;
      ${(props) =>
        props.$isChecked
          ? css`
              background: url(${checkboxSelect}) no-repeat center, ${props.theme.buttonColor};
            `
          : css`
              background-color: ${props.theme.bgColorGray};
            `}
    }
  }
`;
