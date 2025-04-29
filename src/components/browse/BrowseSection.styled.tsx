import styled from "styled-components";

export const BrowseSectionLayout = styled.section`
  padding: 70px 64px 76px;
  background-color: #f0f0f0;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  gap: 70px;
  @media (max-width: 768px) {
    padding: 30px 20px;
    gap: 30px;
  }
`;

export const BrowseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 300px 300px;
  gap: 20px;
  color: #000;
  font-family: "Satoshi Variable";
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const BrowseGridFirst = styled.div`
  padding: 25px 36px;
  border-radius: 20px;
  background-color: white;
  grid-column: 1/3;
  background-image: url("/images/gridImages/grid_1.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transition: all 0.3s ease;
  &:hover {
    scale: 1.1;
  }
  @media (max-width: 768px) {
    min-height: 200px;
  }
`;
export const BrowseGridSecond = styled.div`
  padding: 25px 36px;
  border-radius: 20px;
  background-color: white;
  grid-column: 3/6;
  background-image: url("/images/gridImages/grid_2.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transition: all 0.3s ease;
  &:hover {
    scale: 1.1;
  }
  @media (max-width: 768px) {
    min-height: 200px;
  }
`;
export const BrowseGridThird = styled.div`
  padding: 25px 36px;
  border-radius: 20px;
  background-color: white;
  grid-column: 1/4;
  background-image: url("/images/gridImages/grid_3.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transition: all 0.3s ease;
  &:hover {
    scale: 1.1;
  }
  @media (max-width: 768px) {
    min-height: 200px;
  }
`;
export const BrowseGridForth = styled.div`
  padding: 25px 36px;
  border-radius: 20px;
  background-color: white;
  grid-column: 4/6;
  background-image: url("/images/gridImages/grid_4.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transition: all 0.3s ease;
  &:hover {
    scale: 1.1;
  }
  @media (max-width: 768px) {
    min-height: 200px;
  }
`;
