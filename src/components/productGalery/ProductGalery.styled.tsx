import styled from "styled-components";

export const ProductGaleryLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  max-height: 530px;
  gap: 14px;
  flex: 1 0 50%;
`;

export const ProductGaleryCover = styled.div`
  border-radius: 20px;
  overflow: hidden;
  grid-column: 2/5;
  grid-row: 1/5;
`;

export const ProductGaleryImageOne = styled.div<{ $choosen: string }>`
  border: ${(props) => props.$choosen === "tshirt1.png" && "1px solid #000"};
  border-radius: 20px;
  overflow: hidden;
  grid-column: 1/2;
  grid-row: 1/2;
`;

export const ProductGaleryImageTwo = styled.div<{ $choosen: string }>`
  border: ${(props) => props.$choosen === "tshirt2.png" && "1px solid #000"};
  border-radius: 20px;
  overflow: hidden;
  grid-column: 1/2;
  grid-row: 2/3;
`;
export const ProductGaleryImageThree = styled.div<{ $choosen: string }>`
  border: ${(props) => props.$choosen === "tshirt3.png" && "1px solid #000"};
  border-radius: 20px;
  overflow: hidden;
  grid-column: 1/2;
  grid-row: 3/4;
`;
