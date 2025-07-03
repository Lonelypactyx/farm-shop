import styled from "styled-components";

const List = styled.ul`
  display: ${(props) => props.display || "grid"};
  gap: ${(props) => props.gap || props.theme.indent};
`;

export default List;
