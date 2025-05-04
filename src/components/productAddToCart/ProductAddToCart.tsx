import { useState } from "react";
import {
  ProductAddToCartButton,
  ProductAddToCartLayout,
  ProductAddToCartQuantity,
  ProductAddToCartQuantityButtons,
} from "./ProductAddToCart.styled";

export default function ProductAddToCart({
  handleAddToCart,
}: {
  handleAddToCart: (quantity: number) => void;
}) {
  const [items, setItems] = useState<number>(1);
  return (
    <ProductAddToCartLayout>
      <ProductAddToCartQuantity>
        <ProductAddToCartQuantityButtons
          onClick={() => {
            if (items === 1) return;
            setItems((prev) => prev - 1);
          }}
        />
        {items}
        <ProductAddToCartQuantityButtons
          $plus="plus"
          onClick={() => setItems((prev) => prev + 1)}
        />
      </ProductAddToCartQuantity>
      <ProductAddToCartButton onClick={() => handleAddToCart(items)}>
        Add to Cart
      </ProductAddToCartButton>
    </ProductAddToCartLayout>
  );
}
