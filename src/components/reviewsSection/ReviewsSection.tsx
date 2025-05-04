import { useState } from "react";
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
import { Link } from "react-router-dom";

export default function ReviewsSection({
  reviews,
}: {
  reviews?: FeedbackType[];
}) {
  const [sectionToShow, setSectionToShow] = useState("reviews");

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
          <ReviewsNavLink
            $section={sectionToShow === "details"}
            onClick={() => setSectionToShow("details")}
          >
            Product Details
          </ReviewsNavLink>
          <ReviewsNavLink
            $section={sectionToShow === "reviews"}
            onClick={() => setSectionToShow("reviews")}
          >
            Rating & Reviews
          </ReviewsNavLink>
          <ReviewsNavLink
            $section={sectionToShow === "faqs"}
            onClick={() => setSectionToShow("faqs")}
          >
            FAQs
          </ReviewsNavLink>
        </ReviewsNavLinks>
      </nav>
      {sectionToShow === "reviews" ? (
        <div>
          <AllReviews>
            <AllReviewsTitle>
              All Reviews <ReviewsQuantity>({reviews?.length})</ReviewsQuantity>
            </AllReviewsTitle>
            <WriteReviews>
              <FiltrationButton />
              <SortingButton>Latest</SortingButton>
              <Link to="/write_review">
                <WriteButton>Write a Review</WriteButton>
              </Link>
            </WriteReviews>
          </AllReviews>
          <ReviewsGridContainer>
            {Array.isArray(reviews) &&
              reviews?.map((r) => (
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
        </div>
      ) : sectionToShow === "details" ? (
        <h3>This is Product Details section</h3>
      ) : (
        <h3>This is FAQs section</h3>
      )}
    </ReviewsSectionWrapper>
  );
}
