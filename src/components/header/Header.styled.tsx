import styled from "styled-components";

export const HeaderWrapper = styled.header`
  padding: 24px 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    padding: 23px 16px;
  }
`;

export const BurgerAndLogo = styled.div`
  display: flex;
  align-items: center;
`;

export const BurgerMenu = styled.button`
  border: none;
  outline: none;
  width: 24px;
  height: 24px;
  background-color: transparent;
  background-image: url("/images/burger.png");
  background-repeat: no-repeat;
  background-position: center;
  display: none;
  @media (max-width: 768px) {
    display: block;
    margin-right: 16px;
  }
  &:hover {
    cursor: pointer;
  }
`;

export const SearchButtonMob = styled.button`
  border: none;
  outline: none;
  width: 24px;
  height: 24px;
  background-color: transparent;
  background-image: url("/images/search-mob.png");
  background-repeat: no-repeat;
  background-position: center;
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
  &:hover {
    cursor: pointer;
  }
`;

export const Logo = styled.span`
  color: #000;
  font-family: "FSP DEMO - Integral CF Bold";
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  @media (max-width: 768px) {
    font-size: 25.2px;
  }
`;

export const Navigation = styled.nav`
  display: block;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const LinksList = styled.ul`
  display: flex;
  align-items: center;
  gap: 24px;
  list-style: none;
`;

export const Links = styled.li`
  color: #000;
  font-family: "Satoshi Variable";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const SearchForm = styled.form`
  width: 577px;
  display: flex;
  flex-direction: row-reverse;
  gap: 12px;
  background: #f0f0f0;
  border-radius: 62px;
  padding: 12px 16px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const SearchBar = styled.input`
  width: 100%;
  background-color: transparent;
  border: none;
  outline: none;
  color: rgba(0, 0, 0, 0.4);
  font-family: "Satoshi Variable";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const SearchButton = styled.button`
  border: none;
  outline: none;
  width: 24px;
  height: 24px;
  background-color: transparent;
  background-image: url("/images/search.png");
  background-repeat: no-repeat;
  background-position: center;
  &:hover {
    cursor: pointer;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;
