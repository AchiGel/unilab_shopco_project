import { SectionDevider } from "../../components/newArrivals/NewArrivals.styled";
import {
  ProductAddToCartQuantity,
  ProductAddToCartQuantityButtons,
} from "../../components/productAddToCart/ProductAddToCart.styled";
import { useCartStore } from "../../store/cartStore";
import {
  DetailsPageWrapper,
  ProductTitle,
} from "../productDetail/ProductDetail.styled";
import {
  CartSection,
  CheckoutButton,
  ChosenItemsContainer,
  ItemCard,
  ItemCardImage,
  ItemCardParameters,
  ItemCardPrice,
  ItemCardSize,
  ItemCardSizeValue,
  ItemCardTitle,
  OrderSummary,
  OrderSummaryDiv,
  OrderSummaryDivs,
  OrderSummarySpans,
  OrderSummarySpansValue,
  PromoCodeForm,
  PromoCodeFormButton,
  PromoCodeFormInput,
  RemoveButton,
  Total,
  TotalValue,
} from "./Cart.styled";

export default function Cart() {
  const cartItems = useCartStore((state) => state.cartItems);
  const resetCart = useCartStore((state) => state.resetCart);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + Number(item.price) * item.quantity,
    0
  );

  const discount = cartItems.reduce(
    (acc, item) => acc + Number(item.discount) * item.quantity,
    0
  );

  const delivery = 15;

  const handleCheckout = () => {
    resetCart();
  };

  return (
    <DetailsPageWrapper>
      <ProductTitle>Your cart</ProductTitle>
      <CartSection>
        <ChosenItemsContainer>
          {cartItems.length > 0
            ? cartItems.map((item, index) => (
                <ItemCard key={index}>
                  <ItemCardImage>
                    <img
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      src="/images/product/tshirt1.png"
                      alt=""
                    />
                  </ItemCardImage>
                  <ItemCardParameters>
                    <ItemCardTitle>{item.name}</ItemCardTitle>
                    <ItemCardSize>
                      Size:{" "}
                      <ItemCardSizeValue>{item.colorChosen}</ItemCardSizeValue>
                    </ItemCardSize>
                    <ItemCardSize>
                      Color:{" "}
                      <ItemCardSizeValue>{item.sizeChosen}</ItemCardSizeValue>
                    </ItemCardSize>
                    <ItemCardPrice>${item.price}</ItemCardPrice>
                  </ItemCardParameters>
                  <ProductAddToCartQuantity
                    style={{ position: "absolute", bottom: "0", right: "0" }}
                  >
                    <ProductAddToCartQuantityButtons />
                    {1}
                    <ProductAddToCartQuantityButtons $plus="plus" />
                  </ProductAddToCartQuantity>
                  <RemoveButton />
                </ItemCard>
              ))
            : "Your cart is empty"}
        </ChosenItemsContainer>
        <ChosenItemsContainer>
          <OrderSummary>Order Summary</OrderSummary>
          <OrderSummaryDiv>
            <OrderSummaryDivs>
              <OrderSummarySpans>Subtotal</OrderSummarySpans>
              <OrderSummarySpansValue>${subtotal}</OrderSummarySpansValue>
            </OrderSummaryDivs>
            <OrderSummaryDivs>
              <OrderSummarySpans>Discount (-20%)</OrderSummarySpans>
              <OrderSummarySpansValue $discount={true}>
                -${discount}
              </OrderSummarySpansValue>
            </OrderSummaryDivs>
            <OrderSummaryDivs>
              <OrderSummarySpans>Delivery Fee</OrderSummarySpans>
              <OrderSummarySpansValue>${delivery}</OrderSummarySpansValue>
            </OrderSummaryDivs>
            <SectionDevider />
            <OrderSummaryDivs>
              <Total>Total</Total>
              <TotalValue>${subtotal - discount + delivery}</TotalValue>
            </OrderSummaryDivs>
          </OrderSummaryDiv>
          <PromoCodeForm>
            <PromoCodeFormInput
              type="text"
              name=""
              id=""
              placeholder="Add promo code"
            />
            <PromoCodeFormButton type="submit">Apply</PromoCodeFormButton>
          </PromoCodeForm>
          <CheckoutButton onClick={handleCheckout}>
            Go to Checkout
          </CheckoutButton>
        </ChosenItemsContainer>
      </CartSection>
    </DetailsPageWrapper>
  );
}
