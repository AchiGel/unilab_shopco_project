import { Link } from "react-router-dom";
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
        <Link to="/shop">
          <BrowseGridFirst>Casual</BrowseGridFirst>
        </Link>
        <Link to="/shop">
          <BrowseGridSecond>Formal</BrowseGridSecond>
        </Link>
        <Link to="/shop">
          <BrowseGridThird>Party</BrowseGridThird>
        </Link>
        <Link to="/shop">
          <BrowseGridForth>Gym</BrowseGridForth>
        </Link>
      </BrowseGrid>
    </BrowseSectionLayout>
  );
}
