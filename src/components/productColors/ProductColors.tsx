import { ProductDescription } from "../../pages/productDetail/ProductDetail.styled";
import {
  ProductColorCircle,
  ProductColorsLayout,
  ProductColorsSelectors,
} from "./ProductColors.styled";

export default function ProductColors({
  colors,
}: {
  colors: string[] | undefined;
}) {
  return (
    <ProductColorsLayout>
      <ProductDescription>Select Colors</ProductDescription>
      <ProductColorsSelectors>
        {colors?.map((c) => {
          if (c === "sky") {
            c = "#2196f3";
          }
          return <ProductColorCircle key={c} $bgColor={c} />;
        })}
      </ProductColorsSelectors>
    </ProductColorsLayout>
  );
}
