import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLogo = styled(Link)`
  display: flex;
  gap: 24px;
  align-items: center;
  color: ${(props) => props.theme.colorBlackText};
`;

export const Text = styled.span`
  font-weight: bold;
  font-size: 28px;
`;
