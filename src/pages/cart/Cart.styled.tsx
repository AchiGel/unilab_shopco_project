import styled from "styled-components";

export const ChosenItemsContainer = styled.div`
  padding: 20px 24px;
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  flex: 0 1 50%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const CartSection = styled.section`
  display: flex;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const OrderSummary = styled.h3`
  color: #000;
  font-family: "Satoshi Variable";
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const CheckoutButton = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  padding: 16px 54px;
  border-radius: 62px;
  background-color: #000;
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  &::after {
    width: 24px;
    height: 24px;
    content: url("/images/arrow-right.png");
  }
`;

export const OrderSummaryDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const OrderSummaryDivs = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const OrderSummarySpans = styled.span`
  color: rgba(0, 0, 0, 0.6);
  font-family: "Satoshi Variable";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const OrderSummarySpansValue = styled.span<{ $discount?: boolean }>`
  color: ${(props) => (props.$discount ? "#F33" : "#000")};
  text-align: right;
  font-family: "Satoshi Variable";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const Total = styled.h4`
  color: #000;
  font-family: "Satoshi Variable";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const TotalValue = styled.h4`
  color: #000;
  text-align: right;
  font-family: "Satoshi Variable";
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const PromoCodeForm = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const PromoCodeFormInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  padding: 12px 16px;
  border-radius: 62px;
  background-color: #f0f0f0;
`;

export const PromoCodeFormButton = styled.button`
  border: none;
  outline: none;
  padding: 12px 16px;
  border-radius: 62px;
  background-color: #000;
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const ItemCard = styled.div`
  position: relative;
  display: flex;
  height: 124px;
  gap: 16px;
`;

export const ItemCardImage = styled.div`
  width: 125px;
  border-radius: 10px;
  overflow: hidden;
`;

export const ItemCardParameters = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const ItemCardTitle = styled.h3`
  color: #000;
  font-family: "Satoshi Variable";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const ItemCardSize = styled.h4`
  color: #000;
  font-family: "Satoshi Variable";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  gap: 4px;
`;

export const ItemCardSizeValue = styled.span`
  color: rgba(0, 0, 0, 0.6);
  font-family: "Satoshi Variable";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  gap: 4px;
`;

export const ItemCardPrice = styled.h4`
  color: #000;
  font-family: "Satoshi Variable";
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const RemoveButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 24px;
  height: 24px;
  border: none;
  outline: none;
  background-color: transparent;
  background-image: url("/images/bin.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
