import React from "react";
import Title, { TitleSize } from "/src/components/ui/title/title";
import StyledAbout from "./style";

function About() {
  return (
    <StyledAbout>
      <Title fontSizeValue={TitleSize.BIG}>
        Магазин фермерских продуктов c доставкой
      </Title>
      <p>
        Все продукты изготавливаются под заказ. Фермеры начинают готовить
        продукты за день до отправки заказа клиентам. Именно поэтому мы
        принимаем заказы заранее и доставляем продукты максимально свежими.
      </p>
    </StyledAbout>
  );
}

export default About;
