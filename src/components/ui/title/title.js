import styled from "styled-components";

export const TitleSize = {
  BIG: "44",
  MEDIUM: "36",
  SMALL: "24",
  EXTRA_SMALL: "18",
};

const Title = styled.h1`
  margin: 0;
  margin-bottom: ${(props) => props.marginBottom || 0}px;
  font-weight: bold;
  font-size: ${(props) => props.fontSizeValue || TitleSize.MEDIUM}px;
  line-height: ${(props) =>
    props.fontSizeValue === TitleSize.EXTRA_SMALL ? 1.5 : 1.15};
`;

export default Title;
