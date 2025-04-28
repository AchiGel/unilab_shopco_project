import styled from "styled-components";

export const FooterWrapper = styled.footer`
  position: relative;
  padding: 140px 100px 82px;
  background: #f0f0f0;
  @media (max-width: 768px) {
    padding: 190px 17px 77px;
  }
`;

export const FooterUpperSection = styled.section`
  display: grid;
  grid-template-columns: repeat(5, auto);
  gap: 100px;
  margin-bottom: 50px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px 0;
    margin-bottom: 40px;
  }
`;

export const FooterBottomSection = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 16px;
    margin-top: 16px;
  }
`;

export const FooterLogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 248px;
  @media (max-width: 768px) {
    grid-column: 1 / -1;
    max-width: 100%;
  }
`;

export const FooterLogoContainerPara = styled.p`
  margin-top: 25px;
  color: rgba(0, 0, 0, 0.6);
  font-family: "Satoshi Variable";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  @media (max-width: 768px) {
    margin-top: 14px;
    line-height: 20px;
  }
`;

export const FooterLogoContainerIcons = styled.div`
  margin-top: 35px;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
  @media (max-width: 768px) {
    gap: 16px;
  }
`;

export const FooterLinksTitles = styled.h2`
  color: #000;
  font-family: "Satoshi Variable";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 3px;
  text-transform: uppercase;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const FooterLinksList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  list-style: none;
  @media (max-width: 768px) {
    gap: 18px;
  }
`;

export const FooterLinksLi = styled.li`
  color: rgba(0, 0, 0, 0.6);
  font-family: "Satoshi Variable";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 16px;
  }
`;

export const FooterDevider = styled.hr`
  border: none;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.1);
  width: 100%;
`;

export const FooterCR = styled.span`
  color: rgba(0, 0, 0, 0.6);
  text-align: right;
  font-family: "Satoshi Variable";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
