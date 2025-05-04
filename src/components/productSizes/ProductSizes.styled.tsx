import styled from "styled-components";

export const ProductSizesLayout = styled.div`
  padding: 24px 0px;
`;

export const ProductSizesSelectors = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  @media (max-width: 768px) {
    gap: 8px;
  }
`;

export const ProductSizeBox = styled.span<{ $active: boolean }>`
  display: inline-block;
  padding: 12px 24px;
  color: ${(props) => (props.$active ? "#f0f0f0" : "rgba(0, 0, 0, 0.6)")};
  font-family: "Satoshi Variable";
  font-size: 16px;
  font-style: normal;
  font-weight: ${(props) => (props.$active ? "500" : "400")};
  line-height: normal;
  border-radius: 62px;
  background-color: ${(props) => (props.$active ? "#000" : "#f0f0f0")};
  @media (max-width: 768px) {
    padding: 10px 12px;
    font-size: 14px;
  }
`;
