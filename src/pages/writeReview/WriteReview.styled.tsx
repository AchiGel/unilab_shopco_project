import styled from "styled-components";

export const WriteReviewPageForm = styled.form`
  padding: 30px 25px;
  border-radius: 12px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 60px;
  width: 400px;
`;

export const WriteReviewPageButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const WriteReviewPageSubmitButton = styled.button`
  border: none;
  outline: none;
  padding: 7px 11px;
  border-radius: 8px;
  background-color: #000;
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const WriteReviewPageCancelButton = styled.button`
  border: none;
  outline: none;
  padding: 10px;
  background-color: transparent;
  color: #000;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const WriteReviewPageInput = styled.input<{ $type: string }>`
  background-image: url(${(props) =>props.$type === "name" ? "/images/avatar-icon.png" : "/images/mail-icon.png"});
  background-position: 10px center;
  background-repeat: no-repeat;
  padding: 10px 10px 10px 40px;
  border-radius: 9px;
  border: 1px solid #ddd;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.18);
`;
export const WriteReviewPageTextarea = styled.textarea`
  padding: 10px;
  border-radius: 9px;
  border: 1px solid #ddd;
  background: #fff;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.18);
  resize: none;
`;

export const WriteReviewPageInputLabel = styled.label`
  color: #000;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const WriteReviewPageInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
`;
