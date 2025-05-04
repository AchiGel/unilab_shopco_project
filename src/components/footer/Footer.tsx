import { useSubscriptionStore } from "../../store/subscriptionStore";
import { Logo } from "../header/Header.styled";
import Subscription from "../subscription/Subscription";
import SuccessModal from "../successModal/SuccessModal";
import {
  FooterBottomSection,
  FooterCR,
  FooterDevider,
  FooterLinks,
  FooterLinksLi,
  FooterLinksList,
  FooterLinksTitles,
  FooterLogoContainer,
  FooterLogoContainerIcons,
  FooterLogoContainerPara,
  FooterUpperSection,
  FooterWrapper,
} from "./Footer.styled";

const footerLinks = {
  Company: ["About", "Features", "Works", "Career"],
  Help: [
    "Customer Support",
    "Delivery Details",
    "Terms & Conditions",
    "Privacy Policy",
  ],
  FAQ: ["Account", "Manage Deliveries", "Orders", "Payments"],
  Resources: [
    "Free eBooks",
    "Development Tutorial",
    "How to - Blog",
    "YouTube Playlist",
  ],
};

export default function Footer() {
  ///// ************ ვიყენებთ გლობალურ სთეითს გამოწერისას წარმატების მოდალის ამოსანათებლად ****************** /////
  const subscriptionSuccess = useSubscriptionStore(
    (state) => state.subscriptionSuccess
  );
  const setSubscriptionSuccess = useSubscriptionStore(
    (state) => state.setSubscriptionSuccess
  );
  return (
    <FooterWrapper>
      <Subscription />
      <FooterUpperSection>
        <FooterLogoContainer>
          <Logo>SHOP.CO</Logo>
          <FooterLogoContainerPara>
            We have clothes that suits your style and which you’re proud to
            wear. From women to men.
          </FooterLogoContainerPara>
          <FooterLogoContainerIcons>
            <img src="/images/Social.png" alt="" />
          </FooterLogoContainerIcons>
        </FooterLogoContainer>
        {Object.entries(footerLinks).map(([sectionTitle, links]) => (
          <FooterLinks key={sectionTitle}>
            <FooterLinksTitles>{sectionTitle}</FooterLinksTitles>
            <FooterLinksList>
              {links.map((link, idx) => (
                <FooterLinksLi key={idx}>{link}</FooterLinksLi>
              ))}
            </FooterLinksList>
          </FooterLinks>
        ))}
      </FooterUpperSection>
      <FooterDevider />
      <FooterBottomSection>
        <FooterCR>Shop.co © 2000-2023, All Rights Reserved</FooterCR>
        <div>
          <img src="/images/visa.png" alt="" />
          <img src="/images/mc.png" alt="" />
          <img src="/images/pp.png" alt="" />
          <img src="/images/ipay.png" alt="" />
          <img src="/images/gpay.png" alt="" />
        </div>
      </FooterBottomSection>
      {subscriptionSuccess && (
        <SuccessModal onClose={() => setSubscriptionSuccess(false)} />
      )}
    </FooterWrapper>
  );
}
