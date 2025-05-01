/* eslint-disable @typescript-eslint/no-explicit-any */
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import "swiper/css";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import "swiper/css/autoplay";
import { HeroBrandsSection } from "../../pages/home/Home.styled";
import { useIsMobile } from "../../hooks/useMediaQuery";

const HeroBrands = ({ brands }: { brands: string[] }) => {
  const isMobile = useIsMobile();
  return (
    <HeroBrandsSection
      onMouseEnter={() => swiperRef?.autoplay?.stop()}
      onMouseLeave={() => swiperRef?.autoplay?.start()}
    >
      {isMobile ? (
        brands.map((b, index) => (
          <img key={index} src={`/images/${b}.png`} alt={b} />
        ))
      ) : (
        <Swiper
          spaceBetween={20}
          slidesPerView={5}
          loop={true}
          autoplay={{ delay: 500, disableOnInteraction: false }}
          modules={[Autoplay]}
          onSwiper={(swiper) => (swiperRef = swiper)}
        >
          {[...brands, ...brands].map((b, index) => (
            <SwiperSlide key={index} style={{ width: "auto" }}>
              <img src={`/images/${b}.png`} alt={b} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </HeroBrandsSection>
  );
};

let swiperRef: any = null;

export default HeroBrands;
