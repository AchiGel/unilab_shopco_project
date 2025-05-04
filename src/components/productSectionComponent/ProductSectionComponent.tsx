import { useEffect, useState } from "react";
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
import { FeedbackRating } from "../feedbacks/Feedbacks.styled";
import starImage from "/images/Star.svg";

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
  const [cartItems, setCartItems] = useState<ProductTypes[]>([]);
  const [sizeChosen, setSizeChosen] = useState<string>("medium");
  const [colorChosen, setColorChosen] = useState<string>("white");

  const handleAddToCart = (quantity: number) => {
    setCartItems((prev) => [
      ...prev,
      { name, price, quantity, sizeChosen, colorChosen },
    ]);
  };

  useEffect(() => {
    console.log(cartItems);
    localStorage.setItem("product", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <ProductSection>
      <ProductGalery />
      <ProductInfo>
        <ProductTitle>{name}</ProductTitle>
        <ProductRating $page="details">
          <FeedbackRating>
            {rating &&
              [...Array(Math.ceil(rating))].map((_star, i) => (
                <img key={i} src={starImage} alt="" />
              ))}
          </FeedbackRating>
          {rating}/5
        </ProductRating>
        <ProductPriceContainer $page="details">
          <ProductPrice>${price}</ProductPrice>
          {oldPrice && <ProductOldPrice>${oldPrice}</ProductOldPrice>}
          {discount && <ProductDiscount>-{discount}%</ProductDiscount>}
        </ProductPriceContainer>
        <ProductDescription>{description}</ProductDescription>
        <SectionDevider />
        <ProductColors
          colorChosen={colorChosen}
          colors={colors}
          setColorChosen={setColorChosen}
        />
        <SectionDevider />
        <ProductSizes
          sizeChosen={sizeChosen}
          sizes={sizes}
          setSizeChosen={setSizeChosen}
        />
        <SectionDevider />
        <ProductAddToCart handleAddToCart={handleAddToCart} />
      </ProductInfo>
    </ProductSection>
  );
}
