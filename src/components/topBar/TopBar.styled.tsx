import styled from "styled-components";

export const TopBarContainer = styled.div`
  padding: 9px 100px 9px 35%;
  background-color: #000;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    padding: 9px 0;
    justify-content: center;
  }
`;

export const TopBarText = styled.p`
  color: #fff;
  font-family: "Satoshi Variable";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const TopBarLink = styled.span`
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-skip-ink: none;
  text-decoration-thickness: auto;
  text-underline-offset: auto;
  text-underline-position: from-font;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const TopBarClose = styled.button`
  border: none;
  outline: none;
  width: 20px;
  height: 20px;
  background-color: transparent;
  background-image: url("/images/close.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  @media (max-width: 768px) {
    display: none;
  }
  &:hover {
    cursor: pointer;
  }
`;
