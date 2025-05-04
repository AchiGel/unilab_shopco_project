import { useState } from "react";
import {
  ProductAddToCartButton,
  ProductAddToCartLayout,
  ProductAddToCartQuantity,
  ProductAddToCartQuantityButtons,
} from "./ProductAddToCart.styled";
import { useAuthStore } from "../../store/authStore";
import { useNavigate } from "react-router-dom";

export default function ProductAddToCart({
  handleAddToCart,
}: {
  handleAddToCart: (quantity: number) => void;
}) {
  const [items, setItems] = useState<number>(1);
  const token = useAuthStore((state) => state.token);
  const navigate = useNavigate();

  ///// ************ არაავტორიზებული მომხმარებელი გადაგვყავს ავტორიზაციის გვერდზე ****************** /////
  const handleCart = (items: number) => {
    if (!token) navigate("/login");

    handleAddToCart(items);
  };

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
      <ProductAddToCartButton onClick={() => handleCart(items)}>
        Add to Cart
      </ProductAddToCartButton>
    </ProductAddToCartLayout>
  );
}
