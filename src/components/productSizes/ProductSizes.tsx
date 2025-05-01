import { ProductDescription } from "../../pages/productDetail/ProductDetail.styled";
import {
  ProductSizeBox,
  ProductSizesLayout,
  ProductSizesSelectors,
} from "./ProductSizes.styled";

export default function ProductSizes({
  sizes,
}: {
  sizes: string[] | undefined;
}) {
  return (
    <ProductSizesLayout>
      <ProductDescription>Choose Size</ProductDescription>
      <ProductSizesSelectors>
        {sizes?.map((s, i) => (
          <ProductSizeBox key={i}>
            {s.slice(0, 1).toUpperCase() + s.slice(1)}
          </ProductSizeBox>
        ))}
      </ProductSizesSelectors>
    </ProductSizesLayout>
  );
}
