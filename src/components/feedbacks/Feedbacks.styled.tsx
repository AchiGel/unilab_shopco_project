import styled from "styled-components";

export const FeedbacksSection = styled.section`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const FeedbacksSwipper = styled.section`
  display: flex;
  align-items: center;
  gap: 20px;
  overflow: scroll;
  margin-inline: 100px;
`;

export const FeedbackCardLayout = styled.div`
  padding: 28px 32px;
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  min-width: 400px;
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
