import {
  HeaderContainer,
  HeaderUl,
  HeaderNav,
  HeaderWrapper,
  HeaderLi,
} from "./style";

export const Header = () => (
  <HeaderWrapper>
    <HeaderContainer>
      <img src="/logo.png" />
      <HeaderNav>
        <HeaderUl>
          <HeaderLi active>Home</HeaderLi>
          <HeaderLi>Pokémons</HeaderLi>
          <HeaderLi>Contato</HeaderLi>
        </HeaderUl>
      </HeaderNav>
    </HeaderContainer>
  </HeaderWrapper>
);
