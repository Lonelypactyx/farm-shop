import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledButton = styled(Link)`
  display: block;
  min-height: 60px;
  font-size: ${(props) => props.theme.fontSizeDefault};
  font-weight: bold;
  text-align: center;
  padding: 16px 24px;
  width: ${(props) => (props.$maxWidth ? "100%" : "260px")};
  color: ${(props) =>
    props.$navLink ? props.theme.colorBlackText : props.theme.colorWhite};
  background-color: ${(props) =>
    props.$navLink ? props.theme.colorWhite : props.theme.buttonColor};
  transition: background-color 0.2s ease-out;

  &:hover,
  &:active {
    background-color: ${(props) => props.theme.buttonColorHover};
    box-shadow: inset 0 4px 0 rgba(0, 0, 0, 0.14);
  }

  &:active {
    box-shadow: none;
  }

  &:disabled {
    opacity: 0.5;
    background-color: ${(props) => props.theme.buttonColor};
  }
`;
