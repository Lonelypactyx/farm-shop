import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  height: ${(props) => props.theme.headerHeight};
  justify-content: space-between;
  background-color: ${(props) => props.theme.colorWhite};
  padding-inline: ${(props) => props.theme.pagePaddingInline};
  padding-block: 18px;
  align-items: center;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

export default StyledFooter;
