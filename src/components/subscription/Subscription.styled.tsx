import styled from "styled-components";

export const SubscriptionContainer = styled.section`
  position: absolute;
  top: -135px;
  left: 17px;
  right: 17px;
  border-radius: 20px;
  background: #000;
  padding: 32px 24px 28px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  @media (min-width: 769px) {
    top: -90px;
    left: 100px;
    right: 100px;
    flex-direction: row;
    justify-content: space-between;
    padding: 36px 64px;
  }
`;

export const SubscriptionText = styled.p`
  color: #fff;
  font-family: "FSP DEMO - Integral CF Bold";
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 35px;
  @media (min-width: 769px) {
    font-size: 40px;
    line-height: 45px;
    max-width: 551px;
  }
`;

export const SubscriptionForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const SubscriptionInputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const SubscriptionInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  padding: 12px 16px 12px 50px;
  border-radius: 62px;
  background: #fff;
`;

export const InputIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  background-image: url("/images/envelope.png");
  background-size: contain;
  background-repeat: no-repeat;
  pointer-events: none;
`;

export const SubscriptionButton = styled.button`
  border: none;
  outline: none;
  padding: 12px 16px;
  border-radius: 62px;
  background: #fff;
  color: #000;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  &:hover {
    cursor: pointer;
  }
`;
