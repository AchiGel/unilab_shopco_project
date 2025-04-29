import { Link } from "react-router-dom";
import {
  BottomInputsContainer,
  ConfirmButton,
  ConfirmWithSystemButton,
  CustomInput,
  InputsContainer,
  MiddleInputsContainer,
  OrDevider,
  OrHr,
  SignUpPageContainer,
  SignUpPageForm,
  SignUpPageFormLink,
  SignUpPageFormPara,
  SignUpPageFormTitle,
  SignUpPageFormTitleCont,
  SignUpPageLayout,
  UpperInputsContainer,
} from "./SignUp.styled";

export default function SignUp() {
  return (
    <SignUpPageLayout>
      <SignUpPageContainer>
        <SignUpPageFormTitleCont>
          <SignUpPageFormTitle>Create account</SignUpPageFormTitle>
          <SignUpPageFormPara>
            Already have an account?{" "}
            <Link to="signIn">
              <SignUpPageFormLink>Login</SignUpPageFormLink>
            </Link>
          </SignUpPageFormPara>
        </SignUpPageFormTitleCont>
        <SignUpPageForm>
          <InputsContainer>
            <UpperInputsContainer>
              <CustomInput type="text" name="" id="" placeholder="First Name" />
              <CustomInput type="text" name="" id="" placeholder="Last Name" />
            </UpperInputsContainer>
            <MiddleInputsContainer>
              <CustomInput type="email" name="" id="" placeholder="Email" />
              <CustomInput
                type="password"
                name=""
                id=""
                placeholder="Password"
              />
            </MiddleInputsContainer>
            <BottomInputsContainer>
              <input type="checkbox" name="" id="" />
              <label htmlFor="">
                I agree to DopeSass Terms of service and Privacy policy
              </label>
            </BottomInputsContainer>
          </InputsContainer>
          <ConfirmButton>Create Account</ConfirmButton>
          <OrDevider>
            <OrHr />
            or
            <OrHr />
          </OrDevider>
          <MiddleInputsContainer>
            <ConfirmWithSystemButton $image="Google_Original.png">
              Continue with Google
            </ConfirmWithSystemButton>
            <ConfirmWithSystemButton $image="Apple_Original.png">
              Continue with Apple
            </ConfirmWithSystemButton>
          </MiddleInputsContainer>
        </SignUpPageForm>
      </SignUpPageContainer>
    </SignUpPageLayout>
  );
}
