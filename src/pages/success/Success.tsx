import { Link } from "react-router-dom";
import { SignUpPageLayout } from "../signUp/SignUp.styled";
import {
  SuccessContainer,
  SuccessLoginButton,
  SuccessMessage,
} from "./Success.styled";

export default function Success() {
  return (
    <SignUpPageLayout>
      <SuccessContainer>
        <img src="/images/success.png" alt="" />
        <SuccessMessage>Sign Up successfully</SuccessMessage>
        <Link to="/login">
          <SuccessLoginButton>Login</SuccessLoginButton>
        </Link>
      </SuccessContainer>
    </SignUpPageLayout>
  );
}
