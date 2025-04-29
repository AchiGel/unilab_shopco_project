import { SectionTitle } from "../newArrivals/NewArrivals.styled";
import {
  BrowseGrid,
  BrowseGridFirst,
  BrowseGridForth,
  BrowseGridSecond,
  BrowseGridThird,
  BrowseSectionLayout,
} from "./BrowseSection.styled";

export default function BrowseSection() {
  return (
    <BrowseSectionLayout>
      <SectionTitle>BROWSE BY dress STYLE</SectionTitle>
      <BrowseGrid>
        <BrowseGridFirst>Casual</BrowseGridFirst>
        <BrowseGridSecond>Formal</BrowseGridSecond>
        <BrowseGridThird>Party</BrowseGridThird>
        <BrowseGridForth>Gym</BrowseGridForth>
      </BrowseGrid>
    </BrowseSectionLayout>
  );
}
