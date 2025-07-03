import styled, { css } from "styled-components";
import Img from "/src/components/ui/img/img";

const flexGap = css`
  display: flex;
  gap: ${(props) => props.theme.indent};
`;

export const Feature = styled.article`
  ${flexGap}
  flex-direction: column;
  height: 100%;
  padding: ${(props) => props.theme.indent};
  background-color: ${(props) => (props.isPositive ? "#e1edce" : "#f8ddd7")};

  header {
    ${flexGap}
  }
`;

export const Image = styled(Img)`
  width: 56px;
  height: 56px;
`;

export const Owner = styled.span`
  display: inline-block;
  margin-bottom: 4px;
  padding: 4px 10px;
  font-size: 14px;
  line-height: 1.5;
  color: ${(props) => props.theme.colorWhite};
  background-color: ${(props) =>
    props.isPositive ? props.theme.bgColorGreen : "#f75531"};
`;
