import styled from "styled-components";

export const ReviewsSectionWrapper = styled.section`
  margin-top: 80px;
  margin-bottom: 64px;
`;

export const ReviewsNavLinks = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 24px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 24px;
`;

export const ReviewsNavLink = styled.li`
  color: rgba(0, 0, 0, 0.6);
  font-family: "Satoshi Variable";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 110% */
  flex: 0 1 30%;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const AllReviews = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const AllReviewsTitle = styled.h3`
  color: #000;
  font-family: "Satoshi Variable";
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  display: flex;
  align-items: center;
  gap: 8px;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const ReviewsQuantity = styled.span`
  color: rgba(0, 0, 0, 0.6);
  font-family: "Satoshi Variable";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 137.5% */
`;

export const WriteReviews = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const FiltrationButton = styled.button`
  border: none;
  outline: none;
  padding: 16px 20px;
  border-radius: 62px;
  display: flex;
  align-items: center;
  justify-content: center;
  &::after {
    width: 24px;
    height: 24px;
    content: url("/images/filter.png");
  }
`;

export const SortingButton = styled.button`
  border: none;
  outline: none;
  padding: 16px 20px;
  border-radius: 62px;
  background-color: #f0f0f0;
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  display: flex;
  align-items: center;
  gap: 14px;
  &::after {
    width: 16px;
    height: 16px;
    content: url("/images/arrow_down.png");
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const WriteButton = styled.button`
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding: 16px 20px;
  border-radius: 62px;
  background-color: #000;
  border: none;
  outline: none;
  @media (max-width: 768px) {
    padding: 12px 16px;
  }
`;

export const ReviewsGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  @media (max-width: 768px) {
    grid-template-columns: auto;
  }
`;

export const ReviewsGridCard = styled.div`
  padding: 28px 32px;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

export const ReviewsCardStarsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const ReviewsCardStars = styled.div`
  display: flex;
  align-items: center;
  gap: 6.5px;
`;

export const ReviewsCardStarsMore = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  &::after {
    width: 24px;
    height: 24px;
    content: url("/images/dots.png");
  }
  cursor: pointer;
`;

export const ReviewsCardText = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`;

export const ReviewsCardDate = styled.span`
  color: rgba(0, 0, 0, 0.6);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 137.5% */
`;
