import styled from "styled-components";

export const FeedbacksSection = styled.section`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const FeedbacksSwipper = styled.section`
  margin-inline: 100px;
  @media (max-width: 768px) {
    margin-inline: 16px;
  }
`;

export const FeedbackCardLayout = styled.div`
  padding: 28px 32px;
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  height: 240px;
`;

export const FeedbackRating = styled.div`
  display: flex;
  align-items: center;
  gap: 6.49px;
  margin-bottom: 15px;
`;

export const FeedbackAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 12px;
  color: #000;
  font-family: "Satoshi Variable";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px; /* 110% */
  &::after {
    content: url("/images/check.png");
    width: 24px;
    height: 24px;
  }
`;

export const FeedbackComment = styled.p`
  color: rgba(0, 0, 0, 0.6);
  font-family: "Satoshi Variable";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 137.5% */
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 100px;
  @media (max-width: 768px) {
    padding-inline: 16px;
    align-items: flex-end;
  }
`;

export const SelectorButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const FeedbackSwitchButton = styled.button<{ $next?: boolean }>`
  border: none;
  outline: none;
  width: 24px;
  height: 24px;
  background-color: transparent;
  background-image: url(${(props) => (props.$next ? "/images/arrow-next.png" : "/images/arrow-prev.png")});
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
`;
