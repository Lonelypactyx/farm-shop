import styled, { css } from "styled-components";

export const TabButton = styled.button`
  padding: 7px 12px;
  font-size: 14px;
  line-height: 1.5;
  border: 1px solid rgba(0, 0, 0, 0.1);
  ${(props) =>
    props.$isSelect
      ? css`
          background-color: ${props.theme.bgColorGreen};
          color: ${props.theme.colorWhite};
          font-weight: 400;
        `
      : css`
          background-color: ${props.theme.bgColorGray};
          color: ${props.theme.colorBlackText};
        `}
`;

export const TabList = styled.ul`
  display: flex;
  gap: 8px;
`;

export const TabContent = styled.div`
  font-size: 14px;
  height: 105px;
  overflow-y: scroll;
`;
