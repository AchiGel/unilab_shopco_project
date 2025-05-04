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
// import Slider from "@mui/material/Slider";
export default function Shop() {
  const categories = ["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"];

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
    "skyblue",
    "violet",
    "pink",
    "white",
    "black",
  ];

  const departments = ["casual", "formal", "party", "gym"];

  const [colorChosen, setColorChosen] = useState("");
  const [sizeChosen, setSizeChosen] = useState("");
  const [categoryChosen, setCategoryChosen] = useState("");
  const [departmentChosen, setDepartmentChosen] = useState("");
  // const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);

  const [appliedColor, setAppliedColor] = useState("");
  const [appliedSize, setAppliedSize] = useState("");
  const [appliedCategory, setAppliedCategory] = useState("");
  const [appliedDepartment, setAppliedDepartment] = useState("");
  // const [appliedPriceRange, setAppliedPriceRange] = useState<[number, number]>([
  //   0, 500,
  // ]);

  const [page, setPage] = useState(1);

  const getProducts = async ({
    page,
    color,
    size,
    category,
    department,
  }: {
    page: number;
    color?: string;
    size?: string;
    category?: string;
    department?: string;
  }) => {
    const url = new URL("https://6810c78327f2fdac2412be92.mockapi.io/products");
    url.searchParams.append("page", page.toString());
    url.searchParams.append("limit", "9");

    if (color) url.searchParams.append("colors", color);
    if (size) url.searchParams.append("sizes", size);
    if (category) url.searchParams.append("category", category);
    if (department) url.searchParams.append("department", department);

    const response = await fetch(url);
    const data = await response.json();
    return data;
  };

  const {
    data: products,
    error,
    isLoading,
  } = useQuery<ProductTypes[]>({
    queryKey: [
      "products",
      page,
      appliedColor,
      appliedSize,
      appliedCategory,
      appliedDepartment,
    ],
    queryFn: () =>
      getProducts({
        page,
        color: appliedColor,
        size: appliedSize,
        category: appliedCategory,
        department: appliedDepartment,
      }),
  });

  const handleApplyFilters = () => {
    setAppliedColor(colorChosen);
    setAppliedSize(sizeChosen);
    setAppliedCategory(categoryChosen);
    setAppliedDepartment(departmentChosen);
    // setAppliedPriceRange(priceRange);
  };

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
            {categories.map((c, i) => (
              <AsideFilterTitlesContainer
                key={i}
                onClick={() => setCategoryChosen(c)}
              >
                <AsideFilterCategory $active={categoryChosen === c}>
                  {c}
                </AsideFilterCategory>
                <img src="/images/arrow_open.png" alt="" />
              </AsideFilterTitlesContainer>
            ))}
          </AsideFilterCategories>
          <SectionDevider />

          <AsideFilterContainer>
            <AsideFilterTitlesContainer>
              <AsideFilterTitles>Price</AsideFilterTitles>
              <img src="/images/arrow-up.png" alt="" />
            </AsideFilterTitlesContainer>
            {/* <div style={{ padding: "0 1rem" }}>
              <Slider
                value={priceRange}
                onChange={(_, newValue) =>
                  setPriceRange(newValue as [number, number])
                }
                valueLabelDisplay="auto"
                min={0}
                max={500}
              />
              <div>
                ${priceRange[0]} - ${priceRange[1]}
              </div>
            </div> */}
          </AsideFilterContainer>

          <SectionDevider />

          <AsideFilterContainer>
            <AsideFilterTitlesContainer>
              <AsideFilterTitles>Colors</AsideFilterTitles>
              <img src="/images/arrow-up.png" alt="" />
            </AsideFilterTitlesContainer>
            <ColorsFilterContainer>
              {colors.map((c, i) => (
                <ProductColorCircle
                  $active={colorChosen === c}
                  key={i}
                  $bgColor={c}
                  onClick={() => setColorChosen(c)}
                />
              ))}
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
                <ProductSizeBox
                  onClick={() => setSizeChosen(s)}
                  $active={sizeChosen === s}
                  key={i}
                >
                  {s}
                </ProductSizeBox>
              ))}
            </SizesFilterContainer>
          </AsideFilterContainer>

          <SectionDevider />
          <AsideFilterTitlesContainer>
            <AsideFilterTitles>Dress Style</AsideFilterTitles>
            <img src="/images/arrow-up.png" alt="" />
          </AsideFilterTitlesContainer>
          <AsideFilterCategories>
            {departments.map((d, i) => (
              <AsideFilterTitlesContainer
                key={i}
                onClick={() => setDepartmentChosen(d)}
              >
                <AsideFilterCategory $active={departmentChosen === d}>
                  {d}
                </AsideFilterCategory>
                <img src="/images/arrow_open.png" alt="" />
              </AsideFilterTitlesContainer>
            ))}
          </AsideFilterCategories>
          <ApplyButton onClick={handleApplyFilters}>Apply Filter</ApplyButton>
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
              {Array.isArray(products) &&
                products?.map((p) => (
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
