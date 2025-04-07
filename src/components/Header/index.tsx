import { NavLink } from "react-router-dom";

import { HeaderContent, CartButton, CartButtonNumber } from "./styles";

import { ShoppingCart } from "phosphor-react";
import { IconLogo } from "../Icons/IconLogo";

export function Header() {
  return (
    <header>
      <div className="row">
        <HeaderContent>
          <NavLink to="/">
            <IconLogo />
          </NavLink>

          <NavLink to="/cart">
            <CartButton>
              <ShoppingCart size={22} weight="fill" />

              <CartButtonNumber>2</CartButtonNumber>
            </CartButton>
          </NavLink>
        </HeaderContent>
      </div>
    </header>
  );
}
