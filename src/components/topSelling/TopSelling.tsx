import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../../services/api";
import {
  ProductCard,
  ProductImage,
  ProductName,
  ProductPrice,
  ProductsContainer,
  SectionTitle,
  ViewAllButton,
} from "../newArrivals/NewArrivals.styled";
import { TopSellingLayout } from "./TopSelling.styled";
import { ProductTypes } from "../newArrivals/NewArrivals";
import { useState } from "react";

export default function TopSelling() {
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
    </TopSellingLayout>
  );
}
