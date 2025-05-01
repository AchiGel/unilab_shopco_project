import { useQuery } from "@tanstack/react-query";
import {
  NewArrivalsLayout,
  ProductsContainer,
  SectionTitle,
  ViewAllButton,
} from "./NewArrivals.styled";
import { getAllProducts } from "../../services/api";
import { useState } from "react";
import { useIsMobile } from "../../hooks/useMediaQuery";
import ProductCard from "../productCard/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import "swiper/css";

export type ProductTypes = {
  createdAt: string;
  name: string;
  category: string;
  description: string;
  price: string;
  oldPrice: string;
  discount: string;
  rating: number;
  id: string;
};

export default function NewArrivals() {
  const {
    data: products,
    error,
    isLoading,
  } = useQuery<ProductTypes[]>({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });

  const [isExpended, setIsExpended] = useState(false);
  const visibleProducts = isExpended ? products : products?.slice(0, 4);

  const handleViewAll = () => {
    setIsExpended((prev) => !prev);
  };

  const isMobile = useIsMobile();

  return (
    <NewArrivalsLayout>
      <SectionTitle>NEW ARRIVALS</SectionTitle>
      <ProductsContainer>
        {isLoading ? (
          "Loading..."
        ) : error ? (
          "Error Fatching Products"
        ) : isMobile ? (
          <Swiper spaceBetween={16} slidesPerView={1.75}>
            {products?.map((p) => (
              <SwiperSlide key={p.id}>
                <ProductCard name={p.name} price={p.price} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          visibleProducts?.map((p) => (
            <ProductCard key={p.id} name={p.name} price={p.price} />
          ))
        )}
      </ProductsContainer>
      <ViewAllButton onClick={handleViewAll}>
        {isExpended ? "Show less" : "View All"}
      </ViewAllButton>
    </NewArrivalsLayout>
  );
}
