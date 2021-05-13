import styled from "styled-components";

export default styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
  background-color: ${(props) => props.theme.backgroundColor};
  text-align: ${(props) => props.theme.align};
  width: ${(props) => props.theme.width};
  padding: 10px;
  float: left;
  margin: 10px;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 1);
  }
`;
