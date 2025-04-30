import { useForm } from "react-hook-form";
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

type SignUpFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  agree: boolean;
};

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormValues>();

  const onSubmit = (data: SignUpFormValues) => {
    console.log("Form data:", data);
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
              <CustomInput
                type="text"
                placeholder="First Name"
                {...register("firstName", {
                  required: "First name is required",
                })}
              />
              {errors.firstName?.message}
              <CustomInput
                type="text"
                placeholder="Last Name"
                {...register("lastName", { required: "Last name is required" })}
              />
              {errors.lastName?.message}
            </UpperInputsContainer>
            <MiddleInputsContainer>
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
              {errors.email?.message}
              <CustomInput
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "Min 6 characters" },
                })}
              />
              {errors.password?.message}
            </MiddleInputsContainer>
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
              {errors.agree?.message}
            </BottomInputsContainer>
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
