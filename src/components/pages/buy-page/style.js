import styled from "styled-components";
import Button from "/src/components/ui/button/button";
import { Swiper } from "swiper/react";

export const BuyPageMain = styled.main`
  display: grid;
  grid-template-columns: 353px 727px;
  gap: ${(props) => props.theme.indent};
  height: calc(100vh - 2 * ${(props) => props.theme.headerHeight});
  padding: 40px 90px;
  background-color: ${(props) => props.theme.bgColorGray};
`;

export const OrderForm = styled.form`
  display: grid;
  gap: 18px;
  overflow-y: scroll;
  margin: -${(props) => props.theme.indent};
  padding: ${(props) => props.theme.indent};
`;

export const Panel = styled.fieldset`
  background-color: ${(props) => props.theme.colorWhite};
  padding: 23px 19px 11px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 10px ${(props) => props.theme.indent} rgba(0, 0, 0, 0.04),
    0 2px 6px rgba(0, 0, 0, 0.04), 0 0 1px rgba(0, 0, 0, 0.04);
`;

export const OrderPrice = styled.div`
  display: grid;
  gap: 8px;
  font-size: 14px;
  margin-bottom: 24px;

  span + span {
    font-size: 24px;
    font-weight: bold;
    }
  }
`;

export const OrderButton = styled(Button)`
  margin-block: 8px;
`;

export const ProductSwiper = styled(Swiper)`
  .swiper-slide {
    flex-shrink: 1;
  }
`;
