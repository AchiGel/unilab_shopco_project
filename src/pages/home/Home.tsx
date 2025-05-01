import BrowseSection from "../../components/browse/BrowseSection";
import Feedbacks from "../../components/feedbacks/Feedbacks";
import HeroSectionComponent from "../../components/hero/HeroSectionComponent";
import HeroBrands from "../../components/heroBrands/HeroBrands";
import NewArrivals from "../../components/newArrivals/NewArrivals";
import {
  SectionDevider,
  SectionsWrapper,
} from "../../components/newArrivals/NewArrivals.styled";
import TopSelling from "../../components/topSelling/TopSelling";
import { HomePage } from "./Home.styled";

export default function Home() {
  const brands = ["versace", "zara", "gucci", "prada", "calvin"];

  return (
    <HomePage>
      <HeroSectionComponent />
      <HeroBrands brands={brands} />
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
