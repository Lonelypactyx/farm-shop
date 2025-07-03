import styled from "styled-components";

export const TextInput = styled.input`
  width: 100%;
  padding: 14px 12px 13px;
  margin-block: 12px 20px;
  background-color: ${(props) => props.theme.bgColorGray};
  border: 1px solid rgba(0, 0, 0, 0.1);
  font-size: 14px;
`;

export default TextInput;
