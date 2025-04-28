import {
  HeroBrands,
  HeroIndicator,
  HeroIndicatorDevider,
  HeroIndicatorNums,
  HeroIndicatorText,
  HeroSection,
  HeroText,
  HeroTextButton,
  HeroTextContainer,
  HeroTextIndicators,
  HeroTextPara,
  HeroTextTitle,
  HomePage,
} from "./Home.styled";

export default function Home() {
  const brands = ["versace", "zara", "gucci", "prada", "calvin"];

  return (
    <HomePage>
      <HeroSection>
        <HeroTextContainer>
          <HeroText>
            <HeroTextTitle>FIND CLOTHES THAT MATCHES YOUR STYLE</HeroTextTitle>
            <HeroTextPara>
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </HeroTextPara>
            <HeroTextButton>Shop Now</HeroTextButton>
          </HeroText>
          <HeroTextIndicators>
            <HeroIndicator>
              <HeroIndicatorNums>200+</HeroIndicatorNums>
              <HeroIndicatorText>International Brands</HeroIndicatorText>
            </HeroIndicator>
            <HeroIndicatorDevider />
            <HeroIndicator>
              <HeroIndicatorNums>2,000+</HeroIndicatorNums>
              <HeroIndicatorText>High-Quality Products</HeroIndicatorText>
            </HeroIndicator>
            <HeroIndicatorDevider />
            <HeroIndicator>
              <HeroIndicatorNums>30,000+</HeroIndicatorNums>
              <HeroIndicatorText>Happy Customers</HeroIndicatorText>
            </HeroIndicator>
          </HeroTextIndicators>
        </HeroTextContainer>
      </HeroSection>
      <HeroBrands>
        {brands.map((b, index) => (
          <img key={index} src={`/images/${b}.png`} alt={b} />
        ))}
      </HeroBrands>
    </HomePage>
  );
}
