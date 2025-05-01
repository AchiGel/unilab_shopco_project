import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../../services/api";
import {
  ProductsContainer,
  SectionTitle,
  ViewAllButton,
} from "../newArrivals/NewArrivals.styled";
import { TopSellingLayout } from "./TopSelling.styled";
import { ProductTypes } from "../newArrivals/NewArrivals";
import { useState } from "react";
import ProductCard from "../productCard/ProductCard";
import { useIsMobile } from "../../hooks/useMediaQuery";
import { Swiper, SwiperSlide } from "swiper/react";

export default function TopSelling() {
  const isMobile = useIsMobile();
  const {
    data: products,
    error,
    isLoading,
  } = useQuery<ProductTypes[]>({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });

  const [isExpended, setIsExpended] = useState(false);
  const visibleProducts = isExpended ? products : products?.slice(5, 9);

  const handleViewAll = () => {
    setIsExpended((prev) => !prev);
  };

  return (
    <TopSellingLayout>
      <SectionTitle>top selling</SectionTitle>
      <ProductsContainer>
        {isLoading ? (
          "Loading..."
        ) : error ? (
          "Error Fatching Products"
        ) : isMobile ? (
          <Swiper spaceBetween={16} slidesPerView={1.75}>
            {products?.map((p) => (
              <SwiperSlide key={p.id}>
                <ProductCard
                  key={p.id}
                  name={p.name}
                  price={p.price}
                  oldPrice={p.oldPrice}
                  discount={p.discount}
                  rating={p.rating}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          visibleProducts?.map((p) => (
            <ProductCard
              key={p.id}
              name={p.name}
              price={p.price}
              oldPrice={p.oldPrice}
              discount={p.discount}
              rating={p.rating}
            />
          ))
        )}
      </ProductsContainer>
      <ViewAllButton onClick={handleViewAll}>
        {isExpended ? "Show less" : "View All"}
      </ViewAllButton>
    </TopSellingLayout>
  );
}
