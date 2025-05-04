import { FeedbackRating } from "../feedbacks/Feedbacks.styled";
import { ProductTypes } from "../newArrivals/NewArrivals";
import {
  ProductCardContainer,
  ProductDiscount,
  ProductImage,
  ProductName,
  ProductOldPrice,
  ProductPrice,
  ProductPriceContainer,
  ProductRating,
} from "../newArrivals/NewArrivals.styled";

import starImage from "/images/Star.svg";

export default function ProductCard({
  name,
  price,
  oldPrice,
  discount,
  rating,
}: ProductTypes) {
  return (
    <ProductCardContainer>
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
      <ProductName>{name}</ProductName>
      <ProductRating>
        <FeedbackRating>
          {rating &&
            [...Array(Math.ceil(rating))].map((_star, i) => (
              <img key={i} src={starImage} alt="" />
            ))}
        </FeedbackRating>
        <p>{rating}/5</p>
      </ProductRating>
      <ProductPriceContainer>
        <ProductPrice>${price}</ProductPrice>
        {oldPrice && <ProductOldPrice>${oldPrice}</ProductOldPrice>}
        {discount && <ProductDiscount>-{discount}%</ProductDiscount>}
      </ProductPriceContainer>
    </ProductCardContainer>
  );
}
