import { Link, useNavigate } from "react-router-dom";
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
  ErrorWrapperCont,
  ErrorMessage,
} from "../signUp/SignUp.styled";
import { ForgotPass } from "./Login.styled";
import { useForm } from "react-hook-form";
import { useAuthStore } from "../../store/authStore";

type LogInFormValues = {
  email: string;
  password: string;
};

export default function LogIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LogInFormValues>();

  const login = useAuthStore((s) => s.login);
  const logout = useAuthStore((s) => s.logout);
  const navigate = useNavigate();

  const onSubmit = (data: LogInFormValues) => {
    const storedUsers = JSON.parse(
      localStorage.getItem("registered-users") || "[]"
    );

    const matchedUser = storedUsers.state.users.find(
      (user: LogInFormValues) =>
        user.email === data.email && user.password === data.password
    );

    if (matchedUser) {
      const token = Math.random().toString(36).substring(2);
      login(matchedUser, token);

      const expirationTime = 5 * 60 * 1000;
      setTimeout(() => {
        logout();
        alert("Session expired. You’ve been logged out.");
        navigate("/login");
      }, expirationTime);

      navigate("/");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <SignUpPageLayout>
      <SignUpPageContainer>
        <SignUpPageFormTitleCont>
          <SignUpPageFormTitle>Welcome Back</SignUpPageFormTitle>
          <SignUpPageFormPara>
            Don’t have an account?{" "}
            <Link to="/signUp">
              <SignUpPageFormLink>Sign Up</SignUpPageFormLink>
            </Link>
          </SignUpPageFormPara>
        </SignUpPageFormTitleCont>
        <SignUpPageForm onSubmit={handleSubmit(onSubmit)}>
          <InputsContainer>
            <MiddleInputsContainer>
              <ErrorWrapperCont>
                <CustomInput
                  type="email"
                  placeholder="Email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                      message: "Invalid email",
                    },
                  })}
                />
                <ErrorMessage>{errors.email?.message}</ErrorMessage>
              </ErrorWrapperCont>
              <ErrorWrapperCont>
                <CustomInput
                  type="password"
                  placeholder="Password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: { value: 6, message: "Min 6 characters" },
                  })}
                />
                <ErrorMessage>{errors.password?.message}</ErrorMessage>
              </ErrorWrapperCont>
            </MiddleInputsContainer>
            <ForgotPass>
              <p>Forgot Password</p>
            </ForgotPass>
          </InputsContainer>
          <ConfirmButton type="submit">Login</ConfirmButton>
          <OrDevider>
            <OrHr />
            or
            <OrHr />
          </OrDevider>
          <MiddleInputsContainer>
            <ConfirmWithSystemButton
              type="button"
              onClick={(e) => e.preventDefault}
              $image="Google_Original.png"
            >
              Continue with Google
            </ConfirmWithSystemButton>
            <ConfirmWithSystemButton
              type="button"
              onClick={(e) => e.preventDefault}
              $image="Apple_Original.png"
            >
              Continue with Apple
            </ConfirmWithSystemButton>
          </MiddleInputsContainer>
        </SignUpPageForm>
      </SignUpPageContainer>
    </SignUpPageLayout>
  );
}
