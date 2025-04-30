import { useQuery } from "@tanstack/react-query";
import {
  NewArrivalsLayout,
  ProductCard,
  ProductImage,
  ProductName,
  ProductPrice,
  ProductsContainer,
  SectionTitle,
  ViewAllButton,
} from "./NewArrivals.styled";
import { getAllProducts } from "../../services/api";
import { useState } from "react";

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

  return (
    <NewArrivalsLayout>
      <SectionTitle>NEW ARRIVALS</SectionTitle>
      <ProductsContainer>
        {isLoading
          ? "Loading..."
          : error
          ? "Error Fatching Products"
          : visibleProducts?.map((p) => (
              <ProductCard key={p.id}>
                <ProductImage>
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    src="/images/product/tshirt1.png"
                    alt=""
                  />
                </ProductImage>
                <ProductName>{p.name}</ProductName>
                <ProductPrice>${p.price}</ProductPrice>
              </ProductCard>
            ))}
      </ProductsContainer>
      <ViewAllButton onClick={handleViewAll}>
        {isExpended ? "Show less" : "View All"}
      </ViewAllButton>
    </NewArrivalsLayout>
  );
}
