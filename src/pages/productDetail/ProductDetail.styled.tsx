import styled from "styled-components";

export const DetailsPageWrapper = styled.div`
  margin-top: 70px;
  padding-inline: 100px;
  padding-bottom: 168px;
  @media (max-width: 768px) {
    padding-inline: 16px;
  }
`;

export const ProductSection = styled.section`
  display: flex;
  gap: 40px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ProductInfo = styled.div``;

export const ProductTitle = styled.h1`
  color: #000;
  font-family: "FSP DEMO - Integral CF Bold";
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 14px;
`;

export const ProductDescription = styled.p`
  color: rgba(0, 0, 0, 0.6);
  font-family: "Satoshi Variable";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 137.5% */
  margin-bottom: 24px;
`;
