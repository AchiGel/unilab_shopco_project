import { useForm } from "react-hook-form";
import {
  InputIcon,
  SubscriptionButton,
  SubscriptionContainer,
  SubscriptionForm,
  SubscriptionInput,
  SubscriptionInputWrapper,
  SubscriptionText,
} from "./Subscription.styled";
import { ErrorMessage } from "../../pages/signUp/SignUp.styled";
import { useSubscriptionStore } from "../../store/subscriptionStore";

type SubscribeForm = {
  email: string;
};

export default function Subscription() {
  const setSubscriptionSuccess = useSubscriptionStore(
    (state) => state.setSubscriptionSuccess
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SubscribeForm>();

  const onSubmit = (data: SubscribeForm) => {
    console.log("Subscribe Form data:", data);
    setSubscriptionSuccess(true);
    reset();
  };
  return (
    <SubscriptionContainer>
      <SubscriptionText>
        STAY UPTO DATE ABOUT OUR LATEST OFFERS
      </SubscriptionText>
      <SubscriptionForm onSubmit={handleSubmit(onSubmit)}>
        <SubscriptionInputWrapper>
          <SubscriptionInput
            type="email"
            placeholder="Enter your email address"
            {...register("email", {
              required: "Please enter your email",
              pattern: {
                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: "Invalid email",
              },
            })}
          />
          <InputIcon />
        </SubscriptionInputWrapper>

        <SubscriptionButton type="submit">
          Subscribe to Newsletter
        </SubscriptionButton>
        <ErrorMessage>{errors.email?.message}</ErrorMessage>
      </SubscriptionForm>
    </SubscriptionContainer>
  );
}
