import styled from "styled-components";
import Img from "/src/components/ui/img/img";
import Title from "/src/components/ui/title/title";

export const StyledProductCard = styled.article`
  display: grid;
  grid-template-columns: 248px 1fr;
  gap: 16px 20px;
  background-color: ${(props) => props.theme.colorWhite};
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 20px;

  *:not(:first-child) {
    grid-column: 2;
  }
`;

export const ProductImg = styled(Img)`
  grid-row: 1 / span 4;
  object-fit: cover;
`;

export const ProductTitle = styled(Title)`
  line-height: 1.3;
`;

export const PropertiesItem = styled.li`
  font-size: 14px;

  :not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const Property = styled.span`
  font-weight: bold;
`;

export const Price = styled.span`
  padding: 4px 8px;
  font-size: 14px;
  font-weight: bold;
  margin-top: -2px;
  background-color: ${(props) => props.theme.bgColorBlue};
`;
