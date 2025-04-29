import { Link } from "react-router-dom";
import {
  BurgerMenuClose,
  BurgerMenuNavLayout,
  BurgerMenuNavList,
  BurgerMenuSignup,
} from "./BurgerMenuNav.styled";

export default function BurgerMenuNav({
  setBurgerOpen,
}: {
  setBurgerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <BurgerMenuNavLayout>
      <BurgerMenuClose onClick={() => setBurgerOpen(false)} />
      <nav>
        <BurgerMenuNavList>
          <li>Home</li>
          <li>About </li>
          <li>Services</li>
          <li>Shop</li>
          <li>Testimonials</li>
        </BurgerMenuNavList>
      </nav>
      <Link to="/signUp">
        <BurgerMenuSignup onClick={() => setBurgerOpen(false)}>
          Sign Up Now
        </BurgerMenuSignup>
      </Link>
    </BurgerMenuNavLayout>
  );
}
