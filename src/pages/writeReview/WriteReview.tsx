import { Controller, useForm } from "react-hook-form";
import { ErrorMessage, SignUpPageLayout } from "../signUp/SignUp.styled";
import {
  InputsContainer,
  WriteReviewPageButtons,
  WriteReviewPageCancelButton,
  WriteReviewPageForm,
  WriteReviewPageInput,
  WriteReviewPageInputContainer,
  WriteReviewPageInputLabel,
  WriteReviewPageSubmitButton,
  WriteReviewPageTextarea,
} from "./WriteReview.styled";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

type WriteReviewFormValues = {
  name: string;
  email: string;
  rating: number;
  comment: string;
};

export default function WriteReview() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<WriteReviewFormValues>();

  const onSubmit = (data: WriteReviewFormValues) => {
    console.log("Feedback Form data:", data);
  };
  return (
    <SignUpPageLayout>
      <WriteReviewPageForm onSubmit={handleSubmit(onSubmit)}>
        <InputsContainer>
          <WriteReviewPageInputContainer>
            <WriteReviewPageInputLabel htmlFor="name">
              Name
            </WriteReviewPageInputLabel>
            <WriteReviewPageInput
              $type="name"
              id="name"
              placeholder="Enter your name"
              type="text"
              {...register("name", {
                required: "name is required",
                minLength: { value: 2, message: "Min 2 characters" },
              })}
            />
            <ErrorMessage>{errors.name?.message}</ErrorMessage>
          </WriteReviewPageInputContainer>
          <WriteReviewPageInputContainer>
            <WriteReviewPageInputLabel htmlFor="email">
              country/city
            </WriteReviewPageInputLabel>
            <WriteReviewPageInput
              $type="email"
              id="email"
              placeholder="Enter your email"
              type="email"
              {...register("email", {
                required: "email is required",
                pattern: {
                  value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  message: "Invalid email",
                },
              })}
            />
            <ErrorMessage>{errors.email?.message}</ErrorMessage>
          </WriteReviewPageInputContainer>
          <WriteReviewPageInputContainer>
            <WriteReviewPageInputLabel htmlFor="email">
              Share your experience in scaling
            </WriteReviewPageInputLabel>
            <Controller
              name="rating"
              control={control}
              defaultValue={0}
              rules={{ required: "Rating is required" }}
              render={({ field }) => (
                <Rating
                  style={{ maxWidth: 250 }}
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />
            <ErrorMessage>{errors.rating?.message}</ErrorMessage>
          </WriteReviewPageInputContainer>
          <WriteReviewPageInputContainer>
            <WriteReviewPageTextarea
              placeholder="Add your comments..."
              {...register("comment", {
                required: "Comment is required",
                minLength: { value: 2, message: "Min 2 characters" },
              })}
            />
            <ErrorMessage>{errors.comment?.message}</ErrorMessage>
          </WriteReviewPageInputContainer>
        </InputsContainer>
        <WriteReviewPageButtons>
          <WriteReviewPageCancelButton>Cancel</WriteReviewPageCancelButton>
          <WriteReviewPageSubmitButton>SUBMIT</WriteReviewPageSubmitButton>
        </WriteReviewPageButtons>
      </WriteReviewPageForm>
    </SignUpPageLayout>
  );
}
