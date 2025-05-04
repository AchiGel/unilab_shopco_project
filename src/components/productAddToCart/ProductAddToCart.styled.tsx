import styled from "styled-components";

export const ProductAddToCartLayout = styled.div`
  padding-top: 24px;
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const ProductAddToCartButton = styled.button`
  width: 100%;
  border: none;
  outline: none;
  background-color: #000;
  padding: 16px 54px;
  border-radius: 62px;
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 16px 0px;
  }
`;

export const ProductAddToCartQuantity = styled.div`
  padding: 16px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  border-radius: 62px;
  background-color: #f0f0f0;
  min-width: 170px;
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  @media (max-width: 768px) {
    min-width: fit-content;
    padding: 14px 20px;
  }
`;

export const ProductAddToCartQuantityButtons = styled.button<{
  $plus?: string;
}>`
  width: 24px;
  height: 24px;
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  background-image: url(${(props) =>props.$plus ? "/images/plus.png" : "/images/minus.png"});
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
  @media (max-width: 768px) {
    width: 16px;
    height: 16px;
  }
`;
