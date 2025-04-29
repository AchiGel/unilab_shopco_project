import { SectionTitle, ViewAllButton } from "../newArrivals/NewArrivals.styled";
import { TopSellingLayout } from "./TopSelling.styled";

export default function TopSelling() {
  return (
    <TopSellingLayout>
      <SectionTitle>top selling</SectionTitle>
      <ViewAllButton>View All</ViewAllButton>
    </TopSellingLayout>
  );
}
