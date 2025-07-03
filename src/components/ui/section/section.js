import styled from "styled-components";

const Section = styled.section`
  display: ${(props) => props.display || "grid"};
  padding-block: 100px;
  padding-inline: ${(props) => props.theme.pagePaddingInline};
`;

export default Section;
