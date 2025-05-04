import { ProductDescription } from "../../pages/productDetail/ProductDetail.styled";
import {
  ProductSizeBox,
  ProductSizesLayout,
  ProductSizesSelectors,
} from "./ProductSizes.styled";

export default function ProductSizes({
  sizes,
  setSizeChosen,
  sizeChosen,
}: {
  sizes: string[] | undefined;
  sizeChosen: string;
  setSizeChosen: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <ProductSizesLayout>
      <ProductDescription>Choose Size</ProductDescription>
      <ProductSizesSelectors>
        {sizes?.map((s, i) => (
          <ProductSizeBox
            $active={sizeChosen === s}
            key={i}
            onClick={() => setSizeChosen(s)}
          >
            {s.slice(0, 1).toUpperCase() + s.slice(1)}
          </ProductSizeBox>
        ))}
      </ProductSizesSelectors>
    </ProductSizesLayout>
  );
}
