import BrowseSection from "../../components/browse/BrowseSection";
import Feedbacks from "../../components/feedbacks/Feedbacks";
import HeroSectionComponent from "../../components/hero/HeroSectionComponent";
import NewArrivals from "../../components/newArrivals/NewArrivals";
import {
  SectionDevider,
  SectionsWrapper,
} from "../../components/newArrivals/NewArrivals.styled";
import TopSelling from "../../components/topSelling/TopSelling";
import { HeroBrands, HomePage } from "./Home.styled";

export default function Home() {
  const brands = ["versace", "zara", "gucci", "prada", "calvin"];

  return (
    <HomePage>
      <HeroSectionComponent />
      <HeroBrands>
        {brands.map((b, index) => (
          <img key={index} src={`/images/${b}.png`} alt={b} />
        ))}
      </HeroBrands>
      <SectionsWrapper>
        <NewArrivals />
        <SectionDevider />
        <TopSelling />
        <BrowseSection />
      </SectionsWrapper>
      <Feedbacks />
    </HomePage>
  );
}
