import { CartProduct } from "./CartProduct";

import {
  CartContainer,
  CartSummaryList,
  CartSummaryListItem,
  CartSummaryButton,
  CartSummaryListPrices,
  CartSummaryListPricesItem,
  CartSummaryListPricesItemEmphasis,
} from "./styles";

export function CartSummary() {
  return (
    <CartContainer>
      <CartSummaryList>
        <CartSummaryListItem>
          <CartProduct />
        </CartSummaryListItem>
        <CartSummaryListItem>
          <CartProduct />
        </CartSummaryListItem>
      </CartSummaryList>

      <CartSummaryListPrices>
        <CartSummaryListPricesItem>
          Total de itens
          <span>R$ 29,70</span>
        </CartSummaryListPricesItem>

        <CartSummaryListPricesItem>
          Entrega
          <span>R$ 3,50</span>
        </CartSummaryListPricesItem>

        <CartSummaryListPricesItemEmphasis>
          Total
          <span>R$ 33,20</span>
        </CartSummaryListPricesItemEmphasis>
      </CartSummaryListPrices>

      <CartSummaryButton>Confirmar pedido</CartSummaryButton>
    </CartContainer>
  );
}
