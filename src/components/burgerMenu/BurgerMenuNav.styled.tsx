import styled from "styled-components";

export const BurgerMenuNavLayout = styled.div`
  background-color: white;
  padding: 24px;
  position: absolute;
  top: 67px;
  left: 0;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 72px;
  min-width: 275px;
  height: 100vh;
`;

export const BurgerMenuClose = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  width: 20px;
  height: 20px;
  background-image: url("/images/Close_menu.png");
  &:hover {
    cursor: pointer;
  }
`;

export const BurgerMenuSignup = styled.button`
  border: none;
  outline: none;
  border-radius: 10px;
  background-color: #000;
  padding: 14px 32px;
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  &:hover {
    cursor: pointer;
  }
`;

export const BurgerMenuNavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
