import { Link } from "react-router-dom";
import {
  BurgerAndLogo,
  BurgerMenu,
  HeaderWrapper,
  IconsContainer,
  Links,
  LinksList,
  Logo,
  Navigation,
  SearchBar,
  SearchButton,
  SearchButtonMob,
  SearchForm,
} from "./Header.styled";
import BurgerMenuNav from "../burgerMenu/BurgerMenuNav";
import { useState } from "react";

export default function Header() {
  const [burgerOpen, setBurgerOpen] = useState(false);
  return (
    <HeaderWrapper>
      {burgerOpen && <BurgerMenuNav setBurgerOpen={setBurgerOpen} />}

      <BurgerAndLogo>
        <BurgerMenu onClick={() => setBurgerOpen(!burgerOpen)} />
        <Link to="/">
          <Logo>SHOP.CO</Logo>
        </Link>
      </BurgerAndLogo>

      <Navigation>
        <LinksList>
          <Links>
            <Link to="/">Shop</Link>
          </Links>
          <Links>
            <Link to="/">On Sale</Link>
          </Links>
          <Links>
            <Link to="/">New Arrivals</Link>
          </Links>
          <Links>
            <Link to="/">Brands</Link>
          </Links>
        </LinksList>
      </Navigation>

      <SearchForm action="/search" method="GET">
        <SearchBar
          type="text"
          name="q"
          placeholder="Search for products..."
          aria-label="Search"
        />
        <SearchButton type="submit"></SearchButton>
      </SearchForm>

      <IconsContainer>
        <SearchButtonMob />
        <Link to="/cart">
          <img src="/images/cart.png" alt="cart" />
        </Link>
        <Link to="/logIn">
          <img src="/images/avatar.png" alt="avatar" />
        </Link>
      </IconsContainer>
    </HeaderWrapper>
  );
}
