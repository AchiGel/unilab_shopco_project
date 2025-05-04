import { ProductDescription } from "../../pages/productDetail/ProductDetail.styled";
import {
  ProductColorCircle,
  ProductColorsLayout,
  ProductColorsSelectors,
} from "./ProductColors.styled";

export default function ProductColors({
  colors,
  setColorChosen,
  colorChosen,
}: {
  colors: string[] | undefined;
  colorChosen: string;
  setColorChosen: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <ProductColorsLayout>
      <ProductDescription>Select Colors</ProductDescription>
      <ProductColorsSelectors>
        {colors?.map((c, i) => {
          if (c === "sky") {
            c = "#2196f3";
          }
          return (
            <ProductColorCircle
              key={i}
              $bgColor={c}
              $active={colorChosen === c}
              onClick={() => setColorChosen(c)}
            />
          );
        })}
      </ProductColorsSelectors>
    </ProductColorsLayout>
  );
}
