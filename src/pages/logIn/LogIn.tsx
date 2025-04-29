import { Link } from "react-router-dom";
import {
  SignUpPageLayout,
  SignUpPageContainer,
  SignUpPageFormTitleCont,
  SignUpPageFormTitle,
  SignUpPageFormPara,
  SignUpPageFormLink,
  SignUpPageForm,
  InputsContainer,
  CustomInput,
  MiddleInputsContainer,
  ConfirmButton,
  OrDevider,
  OrHr,
  ConfirmWithSystemButton,
} from "../signUp/SignUp.styled";
import { ForgotPass } from "./Login.styled";

export default function LogIn() {
  return (
    <SignUpPageLayout>
      <SignUpPageContainer>
        <SignUpPageFormTitleCont>
          <SignUpPageFormTitle>Welcome Back</SignUpPageFormTitle>
          <SignUpPageFormPara>
            Don’t have an account?{" "}
            <Link to="signUp">
              <SignUpPageFormLink>Sign Up</SignUpPageFormLink>
            </Link>
          </SignUpPageFormPara>
        </SignUpPageFormTitleCont>
        <SignUpPageForm>
          <InputsContainer>
            <MiddleInputsContainer>
              <CustomInput type="email" name="" id="" placeholder="Email" />
              <CustomInput
                type="password"
                name=""
                id=""
                placeholder="Password"
              />
            </MiddleInputsContainer>
            <ForgotPass>
              <p>Forgot Password</p>
            </ForgotPass>
          </InputsContainer>
          <ConfirmButton>Login</ConfirmButton>
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
