import { SectionDevider } from "../../components/newArrivals/NewArrivals.styled";
import {
  ProductAddToCartQuantity,
  ProductAddToCartQuantityButtons,
} from "../../components/productAddToCart/ProductAddToCart.styled";
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
  return (
    <DetailsPageWrapper>
      <ProductTitle>Your cart</ProductTitle>
      <CartSection>
        <ChosenItemsContainer>
          <ItemCard>
            <ItemCardImage>
              <img
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                src="/images/product/tshirt1.png"
                alt=""
              />
            </ItemCardImage>
            <ItemCardParameters>
              <ItemCardTitle>Gradient Graphic T-shirt</ItemCardTitle>
              <ItemCardSize>
                Size: <ItemCardSizeValue>Large</ItemCardSizeValue>
              </ItemCardSize>
              <ItemCardSize>
                Size: <ItemCardSizeValue>Large</ItemCardSizeValue>
              </ItemCardSize>
              <ItemCardPrice>$0.00</ItemCardPrice>
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
        </ChosenItemsContainer>
        <ChosenItemsContainer>
          <OrderSummary>Order Summary</OrderSummary>
          <OrderSummaryDiv>
            <OrderSummaryDivs>
              <OrderSummarySpans>Subtotal</OrderSummarySpans>
              <OrderSummarySpansValue>$0.00</OrderSummarySpansValue>
            </OrderSummaryDivs>
            <OrderSummaryDivs>
              <OrderSummarySpans>Discount (-20%)</OrderSummarySpans>
              <OrderSummarySpansValue $discount={true}>
                -$0.00
              </OrderSummarySpansValue>
            </OrderSummaryDivs>
            <OrderSummaryDivs>
              <OrderSummarySpans>Delivery Fee</OrderSummarySpans>
              <OrderSummarySpansValue>$0.00</OrderSummarySpansValue>
            </OrderSummaryDivs>
            <SectionDevider />
            <OrderSummaryDivs>
              <Total>Total</Total>
              <TotalValue>$0.00</TotalValue>
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
          <CheckoutButton>Go to Checkout</CheckoutButton>
        </ChosenItemsContainer>
      </CartSection>
    </DetailsPageWrapper>
  );
}
