import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import {
  BottomInputsContainer,
  ConfirmButton,
  ConfirmWithSystemButton,
  CustomInput,
  ErrorMessage,
  ErrorWrapperCont,
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
import { useRegisterStore } from "../../store/registerStore";

type SignUpFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  agree: boolean;
};

export default function SignUp() {
  const addUser = useRegisterStore((state) => state.addUser);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SignUpFormValues>();

  const onSubmit = (data: SignUpFormValues) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { agree, ...userData } = data;
    addUser(userData);
    console.log("Registered user:", userData);
    reset();
    navigate("/success");
  };

  return (
    <SignUpPageLayout>
      <SignUpPageContainer>
        <SignUpPageFormTitleCont>
          <SignUpPageFormTitle>Create account</SignUpPageFormTitle>
          <SignUpPageFormPara>
            Already have an account?{" "}
            <Link to="/logIn">
              <SignUpPageFormLink>Login</SignUpPageFormLink>
            </Link>
          </SignUpPageFormPara>
        </SignUpPageFormTitleCont>
        <SignUpPageForm onSubmit={handleSubmit(onSubmit)}>
          <InputsContainer>
            <UpperInputsContainer>
              <ErrorWrapperCont>
                <CustomInput
                  type="text"
                  placeholder="First Name"
                  {...register("firstName", {
                    required: "First name is required",
                    minLength: { value: 2, message: "Min 2 characters" },
                  })}
                />
                <ErrorMessage>{errors.firstName?.message}</ErrorMessage>
              </ErrorWrapperCont>
              <ErrorWrapperCont>
                <CustomInput
                  type="text"
                  placeholder="Last Name"
                  {...register("lastName", {
                    required: "Last name is required",
                    minLength: { value: 2, message: "Min 2 characters" },
                  })}
                />
                <ErrorMessage>{errors.lastName?.message}</ErrorMessage>
              </ErrorWrapperCont>
            </UpperInputsContainer>
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

            <ErrorWrapperCont>
              <BottomInputsContainer>
                <input
                  type="checkbox"
                  id="agree"
                  {...register("agree", {
                    required: "You must accept the terms",
                  })}
                />
                <label htmlFor="agree">
                  I agree to DopeSass Terms of service and Privacy policy
                </label>
              </BottomInputsContainer>
              <ErrorMessage>{errors.agree?.message}</ErrorMessage>
            </ErrorWrapperCont>
          </InputsContainer>
          <ConfirmButton type="submit">Create Account</ConfirmButton>
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
