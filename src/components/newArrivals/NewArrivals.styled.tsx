import styled from "styled-components";

export const NewArrivalsLayout = styled.section`
  padding: 72px 0px 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 36px;
`;

export const SectionTitle = styled.h2`
  color: #000;
  text-align: center;
  font-family: "FSP DEMO - Integral CF Bold";
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  @media (max-width: 768px) {
    font-size: 32px;
    line-height: 36px;
  }
`;

export const SectionDevider = styled.hr`
  border: none;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.1);
  width: 100%;
`;

export const SectionsWrapper = styled.div`
  padding-inline: 100px;
  @media (max-width: 768px) {
    padding-inline: 16px 0;
  }
`;

export const ViewAllButton = styled.button`
  padding: 16px 54px;
  border-radius: 62px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: transparent;
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  &:hover {
    cursor: pointer;
  }
`;

export const ProductsContainer = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  @media (max-width: 768px) {
    display: block;
  }
`;

export const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8.26px;
  @media (max-width: 768px) {
    width: 200px;
  }
`;

export const ProductName = styled.h3`
  color: #000;
  font-family: "Satoshi Variable";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const ProductPrice = styled.h4`
  color: #000;
  font-family: "Satoshi Variable";
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const ProductImage = styled.div`
  height: 325px;
  border-radius: 25px;
  overflow: hidden;
  margin-bottom: 7px;
  @media (max-width: 768px) {
    height: 250px;
  }
`;
