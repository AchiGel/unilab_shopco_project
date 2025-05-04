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
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/shop">
            <li>About </li>
          </Link>
          <Link to="/shop">
            <li>Services</li>
          </Link>
          <Link to="/shop">
            <li>Shop</li>
          </Link>
          <Link to="/reviews">
            <li>Testimonials</li>
          </Link>
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
