import styled from "styled-components";

export const FooterWrapper = styled.footer`
  padding: 140px 100px 82px;
  background: #f0f0f0;
`;

export const FooterUpperSection = styled.section`
  display: grid;
  grid-template-columns: repeat(5, auto);
  gap: 100px;
  margin-bottom: 50px;
`;

export const FooterBottomSection = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
`;

export const FooterLogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 248px;
`;

export const FooterLogoContainerPara = styled.p`
  margin-top: 25px;
  color: rgba(0, 0, 0, 0.6);
  font-family: "Satoshi Variable";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
`;

export const FooterLogoContainerIcons = styled.div`
  margin-top: 35px;
`;

export const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
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
`;

export const FooterLinksList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  list-style: none;
`;

export const FooterLinksLi = styled.li`
  color: rgba(0, 0, 0, 0.6);
  font-family: "Satoshi Variable";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
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
