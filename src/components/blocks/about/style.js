import styled from "styled-components";
import Section from "/src/components/ui/section/section";
import aboutImage from "/src/assets/about.svg";
console.log(aboutImage);

export const StyledAbout = styled(Section)`
  min-height: 600px;
  grid-template-columns: 49%;
  align-content: center;
  gap: 24px;
  background: url(${aboutImage}) no-repeat right 90px bottom,
    ${(props) => props.theme.bgColorBlue};
`;

export default StyledAbout;
