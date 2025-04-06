import { HeaderContent, HeaderCartButton } from "./styles";

import { ShoppingCart } from "phosphor-react";
import { IconLogo } from "../Icons/IconLogo";

export function Header() {
  return (
    <header>
      <div className="row">
        <HeaderContent>
          <a href="">
            <IconLogo />
          </a>

          <HeaderCartButton>
            <ShoppingCart size={22} weight="fill" />
          </HeaderCartButton>
        </HeaderContent>
      </div>
    </header>
  );
}
