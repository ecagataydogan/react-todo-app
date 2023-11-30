import styled from "styled-components";
export default function Header() {
  return (
    <HeaderContainer>
      <h1>Todo App</h1>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  margin: 50px;
  color: white;
`;
