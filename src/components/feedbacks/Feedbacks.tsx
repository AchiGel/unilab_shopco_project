import { getAllFeedbacks } from "../../services/api";
import {
  FeedbackAuthor,
  FeedbackCardLayout,
  FeedbackComment,
  FeedbackRating,
  FeedbacksSection,
  FeedbacksSwipper,
} from "./Feedbacks.styled";
import starImage from "../../../public/images/Star.svg";
import { SectionTitle } from "../newArrivals/NewArrivals.styled";
import { useQuery } from "@tanstack/react-query";

type FeedbackType = {
  createdAt: string;
  name: string;
  comment: string;
  rating: number;
  productId: string;
  id: string;
};

export default function Feedbacks() {
  const {
    data: feedbacks,
    isLoading,
    error,
  } = useQuery<FeedbackType[]>({
    queryKey: ["feedbacks"],
    queryFn: getAllFeedbacks,
  });

  return (
    <FeedbacksSection>
      <SectionTitle>OUR HAPPY CUSTOMERS</SectionTitle>
      <FeedbacksSwipper>
        {isLoading
          ? "Loading..."
          : error
          ? "Failed to load feedbacks"
          : feedbacks?.map((f) => (
              <FeedbackCardLayout key={f.id}>
                <FeedbackRating>
                  {[...Array(f.rating)].map((_star, i) => (
                    <img key={i} src={starImage} alt="" />
                  ))}
                </FeedbackRating>
                <FeedbackAuthor>{`${f.name.split(" ")[0]} ${f.name
                  .split(" ")[1]
                  ?.charAt(0)}.`}</FeedbackAuthor>
                <FeedbackComment>"{f.comment}"</FeedbackComment>
              </FeedbackCardLayout>
            ))}
      </FeedbacksSwipper>
    </FeedbacksSection>
  );
}
