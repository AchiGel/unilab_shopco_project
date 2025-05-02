import { useQuery } from "@tanstack/react-query";
import { ProductTypes } from "../../components/newArrivals/NewArrivals";
import { SectionDevider } from "../../components/newArrivals/NewArrivals.styled";
import { ProductColorCircle } from "../../components/productColors/ProductColors.styled";
import { ProductSizeBox } from "../../components/productSizes/ProductSizes.styled";
import { DetailsPageWrapper } from "../productDetail/ProductDetail.styled";
import {
  ApplyButton,
  AsideFilterBlock,
  AsideFilterCategories,
  AsideFilterCategory,
  AsideFilterContainer,
  AsideFilterTitles,
  AsideFilterTitlesContainer,
  CategoryContainer,
  CategorySortingContainer,
  CategoryTitle,
  ColorsFilterContainer,
  PaginationButtons,
  PaginationContainer,
  ProductsContainer,
  ProductsContainerGrid,
  ProductsQuantityCounter,
  ProductsSorting,
  ProductsSortingButton,
  ShopPageContainer,
  SizesFilterContainer,
} from "./Shop.styled";
import ProductCard from "../../components/productCard/ProductCard";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Shop() {
  const sizes = [
    "XX-Small",
    "X-Small",
    "Small",
    "Medium",
    "Large",
    "X-Large",
    "XX-Large",
    "3X-Large",
    "4X-Large",
  ];

  const colors = [
    "green",
    "blue",
    "red",
    "yellow",
    "orange",
    "sky",
    "violet",
    "pink",
    "white",
    "black",
  ];

  const [page, setPage] = useState(1);

  const getProducts = async () => {
    const url = new URL("https://6810c78327f2fdac2412be92.mockapi.io/products");
    url.searchParams.append("page", page.toString());
    url.searchParams.append("limit", "9");

    const response = await fetch(url);
    const data = await response.json();
    return data;
  };

  const {
    data: products,
    error,
    isLoading,
  } = useQuery<ProductTypes[]>({
    queryKey: ["products", page],
    queryFn: getProducts,
  });

  return (
    <DetailsPageWrapper>
      <ShopPageContainer>
        <AsideFilterBlock>
          <AsideFilterTitlesContainer>
            <AsideFilterTitles>Filters</AsideFilterTitles>
            <img src="/images/filters.png" alt="" />
          </AsideFilterTitlesContainer>
          <SectionDevider />
          <AsideFilterCategories>
            <AsideFilterTitlesContainer>
              <AsideFilterCategory>T-shirts</AsideFilterCategory>
              <img src="/images/arrow_open.png" alt="" />
            </AsideFilterTitlesContainer>
            <AsideFilterTitlesContainer>
              <AsideFilterCategory>Shorts</AsideFilterCategory>
              <img src="/images/arrow_open.png" alt="" />
            </AsideFilterTitlesContainer>
            <AsideFilterTitlesContainer>
              <AsideFilterCategory>Shirts</AsideFilterCategory>
              <img src="/images/arrow_open.png" alt="" />
            </AsideFilterTitlesContainer>
            <AsideFilterTitlesContainer>
              <AsideFilterCategory>Hoodie</AsideFilterCategory>
              <img src="/images/arrow_open.png" alt="" />
            </AsideFilterTitlesContainer>
            <AsideFilterTitlesContainer>
              <AsideFilterCategory>Jeans</AsideFilterCategory>
              <img src="/images/arrow_open.png" alt="" />
            </AsideFilterTitlesContainer>
          </AsideFilterCategories>
          <SectionDevider />

          <AsideFilterContainer>
            <AsideFilterTitlesContainer>
              <AsideFilterTitles>Price</AsideFilterTitles>
              <img src="/images/arrow-up.png" alt="" />
            </AsideFilterTitlesContainer>
          </AsideFilterContainer>

          <SectionDevider />

          <AsideFilterContainer>
            <AsideFilterTitlesContainer>
              <AsideFilterTitles>Colors</AsideFilterTitles>
              <img src="/images/arrow-up.png" alt="" />
            </AsideFilterTitlesContainer>
            <ColorsFilterContainer>
              {colors.map((c, i) => {
                if (c === "sky") {
                  c = "#2196f3";
                }
                return <ProductColorCircle key={i} $bgColor={c} />;
              })}
            </ColorsFilterContainer>
          </AsideFilterContainer>

          <SectionDevider />
          <AsideFilterContainer>
            <AsideFilterTitlesContainer>
              <AsideFilterTitles>Size</AsideFilterTitles>
              <img src="/images/arrow-up.png" alt="" />
            </AsideFilterTitlesContainer>
            <SizesFilterContainer>
              {sizes.map((s, i) => (
                <ProductSizeBox key={i}>{s}</ProductSizeBox>
              ))}
            </SizesFilterContainer>
          </AsideFilterContainer>

          <SectionDevider />
          <AsideFilterTitlesContainer>
            <AsideFilterTitles>Dress Style</AsideFilterTitles>
            <img src="/images/arrow-up.png" alt="" />
          </AsideFilterTitlesContainer>
          <AsideFilterCategories>
            <AsideFilterTitlesContainer>
              <AsideFilterCategory>Casual</AsideFilterCategory>
              <img src="/images/arrow_open.png" alt="" />
            </AsideFilterTitlesContainer>
            <AsideFilterTitlesContainer>
              <AsideFilterCategory>Formal</AsideFilterCategory>
              <img src="/images/arrow_open.png" alt="" />
            </AsideFilterTitlesContainer>
            <AsideFilterTitlesContainer>
              <AsideFilterCategory>Party</AsideFilterCategory>
              <img src="/images/arrow_open.png" alt="" />
            </AsideFilterTitlesContainer>
            <AsideFilterTitlesContainer>
              <AsideFilterCategory>Gym</AsideFilterCategory>
              <img src="/images/arrow_open.png" alt="" />
            </AsideFilterTitlesContainer>
          </AsideFilterCategories>
          <ApplyButton>Apply Filter</ApplyButton>
        </AsideFilterBlock>
        <ProductsContainer>
          <CategoryContainer>
            <CategoryTitle>Casual</CategoryTitle>
            <CategorySortingContainer>
              <ProductsQuantityCounter>
                Showing 1-10 of 100 Products
              </ProductsQuantityCounter>
              <ProductsSorting>
                Sort by:
                <ProductsSortingButton>Most Popular</ProductsSortingButton>
              </ProductsSorting>
            </CategorySortingContainer>
          </CategoryContainer>

          {isLoading ? (
            "Loading..."
          ) : error ? (
            "Error fetching products"
          ) : (
            <ProductsContainerGrid>
              {products?.map((p) => (
                <Link key={p.id} to={`/products/${p.id}`}>
                  <ProductCard
                    name={p.name}
                    price={p.price}
                    oldPrice={p.oldPrice}
                    discount={p.discount}
                    rating={p.rating}
                  />
                </Link>
              ))}
            </ProductsContainerGrid>
          )}
          <SectionDevider />

          <PaginationContainer>
            <PaginationButtons
              $prev={true}
              onClick={() => setPage((old) => Math.max(old - 1, 1))}
              disabled={page === 1}
            >
              Previous
            </PaginationButtons>
            <span>Page {page}</span>
            <PaginationButtons
              onClick={() => setPage((old) => old + 1)}
              disabled={products && products?.length < 9}
            >
              Next
            </PaginationButtons>
          </PaginationContainer>
        </ProductsContainer>
      </ShopPageContainer>
    </DetailsPageWrapper>
  );
}
