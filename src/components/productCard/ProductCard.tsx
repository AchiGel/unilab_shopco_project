import {
  ProductCardContainer,
  ProductImage,
  ProductName,
  ProductPrice,
} from "../newArrivals/NewArrivals.styled";

export default function ProductCard({
  name,
  price,
  $swiper,
}: {
  name: string;
  price: string;
  $swiper?: boolean;
}) {
  return (
    <ProductCardContainer $swiper={$swiper}>
      <ProductImage $swiper={$swiper}>
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
      <ProductPrice>${price}</ProductPrice>
    </ProductCardContainer>
  );
}
