import styled from "styled-components";

export const SignUpPageLayout = styled.div`
  padding: 100px 100px 200px 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    padding: 10% 10% 200px 10%;
  }
`;

export const SignUpPageContainer = styled.div`
  width: 100%;
  max-width: 556px;
  display: flex;
  flex-direction: column;
  gap: 100px;
  @media (max-width: 768px) {
    gap: 50px;
  }
`;

export const SignUpPageForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const SignUpPageFormTitleCont = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

export const SignUpPageFormTitle = styled.h2`
  color: #040308;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const SignUpPageFormPara = styled.p`
  color: #040308;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const SignUpPageFormLink = styled.span`
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const UpperInputsContainer = styled.div`
  display: flex;
  gap: 30px;
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

export const MiddleInputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const BottomInputsContainer = styled.div`
  display: flex;
  gap: 15px;
`;

export const CustomInput = styled.input`
  padding: 15px 20px;
  border-radius: 5px;
  border: 1px solid rgba(4, 3, 8, 0.6);
  width: 100%;
`;

export const ConfirmButton = styled.button`
  border-radius: 5px;
  background-color: #000;
  padding: 15px 20px;
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  &:hover {
    cursor: pointer;
  }
`;

export const OrDevider = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const OrHr = styled.hr`
  height: 1px;
  background: rgba(4, 3, 8, 0.4);
  width: 100%;
`;

export const ConfirmWithSystemButton = styled.button<{ $image: string }>`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 5px;
  border: 1px solid #040308;
  padding: 15px 20px;
  background-color: transparent;
  color: #040308;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  &::after {
    content: "";
    background-image: url(${(props) => "/images/" + props.$image});
    background-position: center;
    background-size: cover;
    width: 20px;
    height: 20px;
    display: inline-block;
  }
  &:hover {
    cursor: pointer;
  }
`;
