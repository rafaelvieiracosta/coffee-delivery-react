import { CartContainer, CartWrapper, CartTitle } from "./styles";

import { CartSummary } from "./components/CartSummary/CartSummary";

export function Cart() {
  return (
    <CartContainer>
      <div className="row">
        <CartWrapper>
          <div>
            <CartTitle>Complete se pedido</CartTitle>
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
