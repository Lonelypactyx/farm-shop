import React from "react";
import Title, { TitleSize } from "/src/components/ui/title/title";
import { Feature, Image, Owner } from "./style";

function AdvantageCard({ isPositive, title, image, text }) {
  return (
    <Feature isPositive={isPositive}>
      <header>
        <Image width={56} height={56} src={image} alt={title} />
        <div>
          <Owner isPositive={isPositive}>
            {isPositive ? "Фермерские" : "Магазинные"} продукты
          </Owner>
          <Title as="h3" fontSizeValue={TitleSize.EXTRA_SMALL}>
            {title}
          </Title>
        </div>
      </header>
      <p dangerouslySetInnerHTML={{ __html: text }} />
    </Feature>
  );
}

export default AdvantageCard;
