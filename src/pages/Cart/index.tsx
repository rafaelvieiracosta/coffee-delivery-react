import { CartContainer, CartWrapper, CartTitle } from "./styles";

import { CartSummary } from "./components/CartSummary";
import { CartForm } from "./components/CartForm";

export function Cart() {
  return (
    <CartContainer>
      <div className="row">
        <CartWrapper>
          <div>
            <CartTitle>Complete seu pedido</CartTitle>
            <CartForm />
          </div>
          <div>
            <CartTitle>Cafés selecionados</CartTitle>
            <CartSummary />
          </div>
        </CartWrapper>
      </div>
    </CartContainer>
  );
}
