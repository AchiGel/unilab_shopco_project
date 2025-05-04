import styled from "styled-components";

export const SuccessModalLayout = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  background: #4caf50;
  color: white;
  padding: 16px 24px;
  border-radius: 8px;
  z-index: 1000;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
`;

export const ModalContent = styled.div`
  font-size: 16px;
  font-weight: bold;
`;
