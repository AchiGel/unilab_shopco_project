import { useState } from "react";
import {
  ProductGaleryCover,
  ProductGaleryImageOne,
  ProductGaleryImageThree,
  ProductGaleryImageTwo,
  ProductGaleryLayout,
} from "./ProductGalery.styled";

export default function ProductGalery() {
  const [cover, setCover] = useState<string>("tshirt1.png");
  const [choosen, setChoosen] = useState<string>("tshirt1.png");

  const handleImageChange = (image: string) => {
    setCover(image);
    setChoosen(image);
  };
  const galeryImages = ["tshirt1.png", "tshirt2.png", "tshirt3.png"];
  return (
    <ProductGaleryLayout>
      <ProductGaleryCover>
        <img
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          src={`/images/product/${cover}`}
          alt=""
        />
      </ProductGaleryCover>
      <ProductGaleryImageOne
        $choosen={choosen}
        onClick={() => handleImageChange("tshirt1.png")}
      >
        <img
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          src={`/images/product/${galeryImages[0]}`}
          alt=""
        />
      </ProductGaleryImageOne>
      <ProductGaleryImageTwo
        $choosen={choosen}
        onClick={() => handleImageChange("tshirt2.png")}
      >
        <img
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          src={`/images/product/${galeryImages[1]}`}
          alt=""
        />
      </ProductGaleryImageTwo>
      <ProductGaleryImageThree
        $choosen={choosen}
        onClick={() => handleImageChange("tshirt3.png")}
      >
        <img
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          src={`/images/product/${galeryImages[2]}`}
          alt=""
        />
      </ProductGaleryImageThree>
    </ProductGaleryLayout>
  );
}
