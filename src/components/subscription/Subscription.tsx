import {
  InputIcon,
  SubscriptionButton,
  SubscriptionContainer,
  SubscriptionForm,
  SubscriptionInput,
  SubscriptionInputWrapper,
  SubscriptionText,
} from "./Subscription.styled";

export default function Subscription() {
  return (
    <SubscriptionContainer>
      <SubscriptionText>
        STAY UPTO DATE ABOUT OUR LATEST OFFERS
      </SubscriptionText>
      <SubscriptionForm action="">
        <SubscriptionInputWrapper>
          <SubscriptionInput
            type="email"
            name=""
            id=""
            placeholder="Enter your email address"
          />
          <InputIcon />
        </SubscriptionInputWrapper>

        <SubscriptionButton>Subscribe to Newsletter</SubscriptionButton>
      </SubscriptionForm>
    </SubscriptionContainer>
  );
}
