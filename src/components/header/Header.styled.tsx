import styled from "styled-components";

export const HeaderWrapper = styled.header`
  padding: 24px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

export const Logo = styled.span`
  color: #000;
  font-family: "FSP DEMO - Integral CF Bold";
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
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
