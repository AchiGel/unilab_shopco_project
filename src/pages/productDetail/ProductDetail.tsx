import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { getSingleProduct } from "../../services/api";
import { ProductTypes } from "../../components/newArrivals/NewArrivals";
import { DetailsPageWrapper } from "./ProductDetail.styled";
import { SectionTitle } from "../../components/newArrivals/NewArrivals.styled";
import ReviewsSection from "../../components/reviewsSection/ReviewsSection";
import { FeedbackType } from "../../components/feedbacks/Feedbacks";
import ProductCard from "../../components/productCard/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { useIsMobile } from "../../hooks/useMediaQuery";
import ProductSectionComponent from "../../components/productSectionComponent/ProductSectionComponent";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();

  const {
    data: product,
    error,
    isLoading,
  } = useQuery<ProductTypes>({
    queryKey: ["product", id],
    queryFn: () => getSingleProduct(id!),
    enabled: !!id,
  });

  const url = new URL("https://6810c78327f2fdac2412be92.mockapi.io/feedbacks");
  url.searchParams.append("productId", `${id}`);

  const getSingleProductReview = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const {
    data: reviews,
    error: errorReview,
    isLoading: isLoadingReview,
  } = useQuery<FeedbackType[]>({
    queryKey: ["reviews", id],
    queryFn: getSingleProductReview,
  });

  const urlMatch = new URL(
    "https://6810c78327f2fdac2412be92.mockapi.io/products"
  );
  urlMatch.searchParams.append("category", `${product?.category}`);

  const getSingleProductMatches = async () => {
    try {
      const response = await fetch(urlMatch);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const {
    data: matchedProducts,
    error: errorMatching,
    isLoading: isLoadingMatching,
  } = useQuery<ProductTypes[]>({
    queryKey: ["matchedProducts", id],
    queryFn: getSingleProductMatches,
  });

  const isMobile = useIsMobile();

  return (
    <DetailsPageWrapper>
      {isLoading ? (
        "Loading..."
      ) : error ? (
        "Error Fatching data"
      ) : (
        <ProductSectionComponent
          name={product?.name}
          price={product?.price}
          oldPrice={product?.oldPrice}
          discount={product?.discount}
          rating={product?.rating}
          description={product?.description}
          sizes={product?.sizes}
          colors={product?.colors}
        />
      )}
      {isLoadingReview ? (
        "Reviews Loading..."
      ) : errorReview ? (
        "Error fetching reviews"
      ) : (
        <ReviewsSection reviews={reviews} />
      )}
      {isLoadingMatching ? (
        "Loading matching products..."
      ) : errorMatching ? (
        "Error fatching matching products"
      ) : (
        <section>
          <SectionTitle>You might also like</SectionTitle>

          <Swiper style={{marginTop: "40px"}} spaceBetween={16} slidesPerView={isMobile ? 1.75 : 4}>
            {Array.isArray(matchedProducts) &&
              matchedProducts?.map((p) => (
                <SwiperSlide key={p.id}>
                  <Link to={`/products/${p.id}`}>
                    <ProductCard
                      name={p.name}
                      price={p.price}
                      oldPrice={p.oldPrice}
                      discount={p.discount}
                      rating={p.rating}
                    />
                  </Link>
                </SwiperSlide>
              ))}
          </Swiper>
        </section>
      )}
    </DetailsPageWrapper>
  );
}
