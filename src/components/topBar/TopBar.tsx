import { Link } from "react-router-dom";
import {
  TopBarClose,
  TopBarContainer,
  TopBarLink,
  TopBarText,
} from "./TopBar.styled";
import React from "react";

export default function TopBar({
  setTopBarIsOpened,
}: {
  setTopBarIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <TopBarContainer>
      <TopBarText>
        Sign up and get 20% off to your first order.{" "}
        <Link to="/signUp">
          <TopBarLink>Sign Up Now</TopBarLink>
        </Link>
      </TopBarText>
      <TopBarClose onClick={() => setTopBarIsOpened(false)} />
    </TopBarContainer>
  );
}
