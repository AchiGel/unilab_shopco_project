import {
  ProductSection,
  ProductInfo,
  ProductTitle,
  ProductDescription,
} from "../../pages/productDetail/ProductDetail.styled";
import { ProductTypes } from "../newArrivals/NewArrivals";
import {
  ProductRating,
  ProductPriceContainer,
  ProductPrice,
  ProductOldPrice,
  ProductDiscount,
  SectionDevider,
} from "../newArrivals/NewArrivals.styled";
import ProductAddToCart from "../productAddToCart/ProductAddToCart";
import ProductColors from "../productColors/ProductColors";
import ProductGalery from "../productGalery/ProductGalery";
import ProductSizes from "../productSizes/ProductSizes";

export default function ProductSectionComponent({
  name,
  rating,
  price,
  discount,
  oldPrice,
  description,
  colors,
  sizes,
}: ProductTypes) {
  return (
    <ProductSection>
      <ProductGalery />
      <ProductInfo>
        <ProductTitle>{name}</ProductTitle>
        <ProductRating $page="details">{rating}/5</ProductRating>
        <ProductPriceContainer $page="details">
          <ProductPrice>${price}</ProductPrice>
          {oldPrice && <ProductOldPrice>${oldPrice}</ProductOldPrice>}
          {discount && <ProductDiscount>-{discount}%</ProductDiscount>}
        </ProductPriceContainer>
        <ProductDescription>{description}</ProductDescription>
        <SectionDevider />
        <ProductColors colors={colors} />
        <SectionDevider />
        <ProductSizes sizes={sizes} />
        <SectionDevider />
        <ProductAddToCart />
      </ProductInfo>
    </ProductSection>
  );
}
