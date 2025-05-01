import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getSingleProduct } from "../../services/api";
import { ProductTypes } from "../../components/newArrivals/NewArrivals";
import {
  DetailsPageWrapper,
  ProductAddToCart,
  ProductColors,
  ProductDescription,
  ProductInfo,
  ProductSection,
  ProductSizes,
  ProductTitle,
} from "./ProductDetail.styled";
import {
  ProductDiscount,
  ProductOldPrice,
  ProductPrice,
  ProductPriceContainer,
  ProductRating,
} from "../../components/newArrivals/NewArrivals.styled";
import ProductGalery from "../../components/productGalery/ProductGalery";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();

  const {
    data: product,
    error,
    isLoading,
  } = useQuery<ProductTypes>({
    queryKey: ["product"],
    queryFn: () => getSingleProduct(id!),
    enabled: !!id,
  });

  console.log(product);

  return (
    <DetailsPageWrapper>
      {isLoading ? (
        "Loading..."
      ) : error ? (
        "Error Fatching data"
      ) : (
        <ProductSection>
          <ProductGalery />
          <ProductInfo>
            <ProductTitle>{product?.name}</ProductTitle>
            <ProductRating>{product?.rating}/5</ProductRating>
            <ProductPriceContainer>
              <ProductPrice>${product?.price}</ProductPrice>
              {product?.oldPrice && (
                <ProductOldPrice>${product?.oldPrice}</ProductOldPrice>
              )}
              {product?.discount && (
                <ProductDiscount>-{product?.discount}%</ProductDiscount>
              )}
            </ProductPriceContainer>
            <ProductDescription>{product?.description}</ProductDescription>
            <ProductColors></ProductColors>
            <ProductSizes></ProductSizes>
            <ProductAddToCart></ProductAddToCart>
          </ProductInfo>
        </ProductSection>
      )}
    </DetailsPageWrapper>
  );
}
