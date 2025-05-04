import styled from "styled-components";

export const ProductColorsLayout = styled.div`
  padding: 24px 0px;
`;

export const ProductColorsSelectors = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const ProductColorCircle = styled.span<{
  $bgColor: string;
  $active: boolean;
}>`
  display: inline-block;
  border-radius: 100%;
  width: 37px;
  height: 37px;
  background-image: url(${(props) =>props.$active ? "/images/check-color.png" : ""});
  background-size: 16px;
  background-repeat: no-repeat;
  background-position: center;
  background-color: ${(props) => props.$bgColor};
  border: ${(props) =>
    props.$bgColor === "white" ? "1px solid rgba(0, 0, 0, 0.20)" : ""};
`;
