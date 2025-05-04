import styled from "styled-components";

export const AsideFilterBlock = styled.aside`
  max-width: 295px;
  padding: 20px 24px;
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const AsideFilterTitlesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AsideFilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const AsideFilterCategories = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const AsideFilterCategory = styled.span<{ $active: boolean }>`
  color: ${(props) => (props.$active ? "#000" : "rgba(0, 0, 0, 0.6)")};
  font-family: "Satoshi Variable";
  font-size: 16px;
  font-style: normal;
  font-weight: ${(props) => (props.$active ? "500" : "400")};
  line-height: normal;
`;

export const AsideFilterTitles = styled.h3`
  color: #000;
  font-family: "Satoshi Variable";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const ShopPageContainer = styled.div`
  display: flex;
  gap: 21px;
`;

export const ApplyButton = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  padding: 16px 54px;
  border-radius: 62px;
  background-color: #000;
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const SizesFilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const ColorsFilterContainer = styled.div`
  width: calc(100% + 4px);
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

export const ProductsContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ProductsContainerGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px 36px;
`;

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PaginationButtons = styled.button<{ $prev?: boolean }>`
  outline: none;
  padding: 8px 14px;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
  display: flex;
  align-items: center;
  gap: 8px;
  &::before {
    width: ${(props) => (props.$prev ? "20px" : "")};
    height: ${(props) => (props.$prev ? "20px" : "")};
    content: url(${(props) => (props.$prev ? "/images/arrow-prev.png" : "")});
  }
  &::after {
    width: ${(props) => (props.$prev ? "" : "20px")};
    height: ${(props) => (props.$prev ? "" : "20px")};
    content: url(${(props) => (props.$prev ? "" : "/images/arrow-next.png")});
  }
`;

export const CategoryContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CategorySortingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const CategoryTitle = styled.h3`
  color: #000;
  font-family: "Satoshi Variable";
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const ProductsQuantityCounter = styled.div`
  color: rgba(0, 0, 0, 0.6);
  font-family: "Satoshi Variable";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const ProductsSorting = styled.div`
  color: rgba(0, 0, 0, 0.6);
  font-family: "Satoshi Variable";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const ProductsSortingButton = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  display: flex;
  align-items: center;
  gap: 4px;
  &::after {
    width: 16px;
    height: 16px;
    content: url("/images/arrow_down.png");
  }
`;
