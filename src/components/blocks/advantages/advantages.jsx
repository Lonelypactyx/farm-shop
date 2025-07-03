import React from "react";
import AdvantageCard from "/src/components/ui/advantage-card/advantage-card";
import Title from "/src/components/ui/title/title";
import Button from "/src/components/ui/button/button";
import { StyledAdvantages, StyledAdvantagesList } from "./style";

function Advantages({ advantages }) {
  return advantages && advantages.length ? (
    <StyledAdvantages>
      <Title as="h2">Почему фермерские продукты лучше?</Title>
      <StyledAdvantagesList>
        {advantages.map((advantage) => (
          <li key={advantage.id}>
            <AdvantageCard {...advantage} />
          </li>
        ))}
      </StyledAdvantagesList>
      <Button link="/buy">Купить</Button>
    </StyledAdvantages>
  ) : null;
}

export default Advantages;
