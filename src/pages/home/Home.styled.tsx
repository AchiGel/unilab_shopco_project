import styled from "styled-components";

export const HomePage = styled.main`
  padding-bottom: 185px;
`;

export const HeroSection = styled.section`
  background-image: url("/images/Rectangle.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 663px;
  padding: 103px 100px 116px;
`;

export const HeroBrands = styled.section`
  padding: 42px 100px;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 580px;
`;

export const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 580px;
`;

export const HeroTextTitle = styled.h1`
  color: #000;
  font-family: "FSP DEMO - Integral CF Bold";
  font-size: 64px;
  font-style: normal;
  font-weight: 700;
  line-height: 64px;
`;

export const HeroTextPara = styled.p`
  color: rgba(0, 0, 0, 0.6);
  font-family: "Satoshi Variable";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
`;

export const HeroTextButton = styled.button`
  border: none;
  outline: none;
  border-radius: 62px;
  background: #000;
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  width: 210px;
  padding: 16px 54px;
  &:hover {
    cursor: pointer;
  }
`;

export const HeroTextIndicators = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
`;

export const HeroIndicator = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeroIndicatorNums = styled.h3`
  color: #000;
  font-family: "Satoshi Variable";
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const HeroIndicatorText = styled.span`
  color: rgba(0, 0, 0, 0.6);
  font-family: "Satoshi Variable";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
`;

export const HeroIndicatorDevider = styled.div`
  height: 100%;
  width: 1px;
  background-color: rgba(0, 0, 0, 0.1);
`;
