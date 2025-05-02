import { FeedbackType } from "../feedbacks/Feedbacks";
import { FeedbackAuthor, FeedbackComment } from "../feedbacks/Feedbacks.styled";
import {
  AllReviews,
  AllReviewsTitle,
  FiltrationButton,
  ReviewsCardDate,
  ReviewsCardStars,
  ReviewsCardStarsContainer,
  ReviewsCardStarsMore,
  ReviewsCardText,
  ReviewsGridCard,
  ReviewsGridContainer,
  ReviewsNavLink,
  ReviewsNavLinks,
  ReviewsQuantity,
  ReviewsSectionWrapper,
  SortingButton,
  WriteButton,
  WriteReviews,
} from "./ReviewsSection.styled";

import starImage from "/images/Star.svg";

export default function ReviewsSection({
  reviews,
}: {
  reviews?: FeedbackType[];
}) {
  const formatDate = (date: string) => {
    const isoDate = date;
    const newDate = new Date(isoDate);
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const formatted = newDate.toLocaleString("en-US", options);

    return `Posted on ${formatted}`;
  };

  return (
    <ReviewsSectionWrapper>
      <nav>
        <ReviewsNavLinks>
          <ReviewsNavLink>Product Details</ReviewsNavLink>
          <ReviewsNavLink>Rating & Reviews</ReviewsNavLink>
          <ReviewsNavLink>FAQs</ReviewsNavLink>
        </ReviewsNavLinks>
      </nav>
      <AllReviews>
        <AllReviewsTitle>
          All Reviews <ReviewsQuantity>({reviews?.length})</ReviewsQuantity>
        </AllReviewsTitle>
        <WriteReviews>
          <FiltrationButton />
          <SortingButton>Latest</SortingButton>
          <WriteButton>Write a Review</WriteButton>
        </WriteReviews>
      </AllReviews>
      <ReviewsGridContainer>
        {reviews?.map((r) => (
          <ReviewsGridCard key={r.id}>
            <ReviewsCardStarsContainer>
              <ReviewsCardStars>
                {[...Array(r.rating)].map((_star, i) => (
                  <img key={i} src={starImage} alt="" />
                ))}
              </ReviewsCardStars>
              <ReviewsCardStarsMore />
            </ReviewsCardStarsContainer>
            <ReviewsCardText>
              <FeedbackAuthor>{`${r.name.split(" ")[0]} ${r.name
                .split(" ")[1]
                ?.charAt(0)}.`}</FeedbackAuthor>
              <FeedbackComment>{r.comment}</FeedbackComment>
            </ReviewsCardText>
            <ReviewsCardDate>{formatDate(r.createdAt)}</ReviewsCardDate>
          </ReviewsGridCard>
        ))}
      </ReviewsGridContainer>
    </ReviewsSectionWrapper>
  );
}
