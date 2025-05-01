import {
  FeedbackCardLayout,
  FeedbackRating,
  FeedbackAuthor,
  FeedbackComment,
} from "./Feedbacks.styled";

import starImage from "../../../public/images/Star.svg";

export default function SingleFeedback({
  rating,
  name,
  comment,
}: {
  rating: number;
  name: string;
  comment: string;
}) {
  return (
    <FeedbackCardLayout>
      <FeedbackRating>
        {[...Array(rating)].map((_star, i) => (
          <img key={i} src={starImage} alt="" />
        ))}
      </FeedbackRating>
      <FeedbackAuthor>{`${name.split(" ")[0]} ${name
        .split(" ")[1]
        ?.charAt(0)}.`}</FeedbackAuthor>
      <FeedbackComment>"{comment}"</FeedbackComment>
    </FeedbackCardLayout>
  );
}
