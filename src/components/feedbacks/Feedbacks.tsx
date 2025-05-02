import { getAllFeedbacks } from "../../services/api";
import {
  ButtonsContainer,
  FeedbacksSection,
  FeedbacksSwipper,
  FeedbackSwitchButton,
  SelectorButtons,
} from "./Feedbacks.styled";
import { SectionTitle } from "../newArrivals/NewArrivals.styled";
import { useQuery } from "@tanstack/react-query";
import SingleFeedback from "./SingleFeedback";
import { SwiperSlide, Swiper } from "swiper/react";
import { useIsMobile } from "../../hooks/useMediaQuery";
import { useRef } from "react";

export type FeedbackType = {
  createdAt: string;
  name: string;
  comment: string;
  rating: number;
  productId?: string;
  id: string;
};

export default function Feedbacks() {
  const isMobile = useIsMobile();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const swiperRef = useRef<any>(null);

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
      <ButtonsContainer>
        <SectionTitle>OUR HAPPY CUSTOMERS</SectionTitle>
        <SelectorButtons>
          <FeedbackSwitchButton
            onClick={() => swiperRef.current?.slidePrev()}
          />
          <FeedbackSwitchButton
            onClick={() => swiperRef.current?.slideNext()}
            $next={true}
          />
        </SelectorButtons>
      </ButtonsContainer>

      <FeedbacksSwipper>
        {isLoading ? (
          "Loading..."
        ) : error ? (
          "Failed to load feedbacks"
        ) : (
          <Swiper
            spaceBetween={20}
            slidesPerView={isMobile ? 1 : 3}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {feedbacks?.map((f) => (
              <SwiperSlide key={f.id}>
                <SingleFeedback
                  rating={f.rating}
                  name={f.name}
                  comment={f.comment}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </FeedbacksSwipper>
    </FeedbacksSection>
  );
}
