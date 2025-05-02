import { useQuery } from "@tanstack/react-query";
import { getAllFeedbacks } from "../../services/api";
import { FeedbackType } from "../../components/feedbacks/Feedbacks";
import {
  DetailsPageWrapper,
  ProductTitle,
} from "../productDetail/ProductDetail.styled";
import { ReviewsGrid } from "./Review.styled";
import SingleFeedback from "../../components/feedbacks/SingleFeedback";

export default function Review() {
  const {
    data: feedbacks,
    isLoading,
    error,
  } = useQuery<FeedbackType[]>({
    queryKey: ["feedbacks"],
    queryFn: getAllFeedbacks,
  });
  return (
    <DetailsPageWrapper>
      <ProductTitle>All Reviews</ProductTitle>

      {isLoading ? (
        "Feedbacks are Loading..."
      ) : error ? (
        "Error fetching Feedbacks..."
      ) : (
        <ReviewsGrid>
          {feedbacks?.map((f) => (
            <SingleFeedback
              key={f.id}
              rating={f.rating}
              name={f.name}
              comment={f.comment}
            />
          ))}
        </ReviewsGrid>
      )}
    </DetailsPageWrapper>
  );
}
