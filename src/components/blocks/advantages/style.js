import styled from "styled-components";
import Section from "/src/components/ui/section/section";
import List from "/src/components/ui/list/list";

const StyledAdvantages = styled(Section)`
  gap: 64px;
  justify-items: center;
`;

const StyledAdvantagesList = styled(List)`
  grid-template-columns: repeat(2, 1fr);
`;

export { StyledAdvantages, StyledAdvantagesList };
