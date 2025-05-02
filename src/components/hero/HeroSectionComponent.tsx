import { Link } from "react-router-dom";
import {
  HeroTextContainer,
  HeroText,
  HeroTextTitle,
  HeroTextPara,
  HeroTextButton,
  HeroTextIndicators,
  HeroIndicator,
  HeroIndicatorNums,
  HeroIndicatorText,
  HeroIndicatorDevider,
  HeroSection,
} from "../../pages/home/Home.styled";

export default function HeroSectionComponent() {
  return (
    <HeroSection>
      <HeroTextContainer>
        <HeroText>
          <HeroTextTitle>FIND CLOTHES THAT MATCHES YOUR STYLE</HeroTextTitle>
          <HeroTextPara>
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </HeroTextPara>
          <Link to="/shop">
            <HeroTextButton>Shop Now</HeroTextButton>
          </Link>
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
  );
}
