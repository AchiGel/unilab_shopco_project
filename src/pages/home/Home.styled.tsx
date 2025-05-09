import styled from "styled-components";

export const HomePage = styled.main`
  padding-bottom: 185px;
`;

export const HeroSection = styled.section`
  position: relative;
  background-color: #f2f0f1;
  background-image: url("/images/Rectangle.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 663px;
  padding: 103px 100px 116px;
  &::before {
    content: url("/images/Vector.png");
    position: absolute;
    top: 50%;
    left: 50%;
    @media (max-width: 768px) {
      top: 69%;
      left: 7%;
    }
  }
  &::after {
    content: url("/images/Vector-2.png");
    position: absolute;
    top: 86px;
    right: 81px;
    @media (max-width: 768px) {
      top: 55%;
      right: 5%;
    }
  }
  @media (max-width: 768px) {
    padding: 40px 16px;
    height: 853px;
    background-image: url("/images/Rectangle-mob.png");
    background-position: center 70vh;
    background-size: contain;
  }
`;

export const HeroBrandsSection = styled.section`
  padding: 42px 100px;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    padding: 40px 16px;
    gap: 34px;
    justify-content: center;
  }
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
  @media (max-width: 768px) {
    gap: 24px;
  }
`;

export const HeroTextTitle = styled.h1`
  color: #000;
  font-family: "FSP DEMO - Integral CF Bold";
  font-size: 64px;
  font-style: normal;
  font-weight: 700;
  line-height: 64px;
  @media (max-width: 768px) {
    font-size: 36px;
    line-height: 34px; /* 94.444% */
  }
`;

export const HeroTextPara = styled.p`
  color: rgba(0, 0, 0, 0.6);
  font-family: "Satoshi Variable";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 20px;
  }
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
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const HeroTextIndicators = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  @media (max-width: 768px) {
    grid-template-columns: repeat(3, auto);
    margin-inline: 10%;
  }
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
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const HeroIndicatorText = styled.span`
  color: rgba(0, 0, 0, 0.6);
  font-family: "Satoshi Variable";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const HeroIndicatorDevider = styled.div`
  height: 100%;
  width: 1px;
  background-color: rgba(0, 0, 0, 0.1);
`;
