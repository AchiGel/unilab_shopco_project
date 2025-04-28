import { Link } from "react-router-dom";
import {
  HeaderWrapper,
  IconsContainer,
  Links,
  LinksList,
  Logo,
  SearchBar,
  SearchButton,
  SearchForm,
} from "./Header.styled";

export default function Header() {
  return (
    <HeaderWrapper>
      <Link to="/">
        <Logo>SHOP.CO</Logo>
      </Link>

      <nav>
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
      </nav>

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
