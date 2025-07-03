import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  position: sticky;
  height: ${(props) => props.theme.headerHeight};
  justify-content: space-between;
  background-color: ${(props) => props.theme.colorWhite};
  padding-inline: ${(props) => props.theme.pagePaddingInline};
  padding-block: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.04), 0 2px 6px rgba(0, 0, 0, 0.04),
    0 0 1px rgba(0, 0, 0, 0.04);
  align-items: center;
`;

export default StyledHeader;
