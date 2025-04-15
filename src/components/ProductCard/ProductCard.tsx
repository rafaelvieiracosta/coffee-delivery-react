import {
  ProductCardContainer,
  ProductCardWrapper,
  ProductCardHeader,
  ProductCardImage,
  ProductCardTags,
  ProductCardTag,
  ProductCardName,
  ProductCardDescription,
  ProductCardFooter,
  ProductCardPrice,
  ProductCardPriceText,
  ProductCardPriceNumber,
  ProductCardFastBuy,
  ProductCardButton,
} from "./styles";

import { QuantityControl } from "../QuantityControl";

import coffeeImageTest from "../../assets/img/coffees/americano.png";
import { ShoppingCart } from "phosphor-react";

export function ProductCard() {
  return (
    <ProductCardContainer>
      <ProductCardWrapper>
        <ProductCardHeader>
          <ProductCardImage
            src={coffeeImageTest}
            alt=""
            width={120}
            height={120}
          />

          <ProductCardTags>
            <ProductCardTag>Tradicional</ProductCardTag>
            <ProductCardTag>Com Leite</ProductCardTag>
          </ProductCardTags>

          <ProductCardName>Expresso Tradicional</ProductCardName>

          <ProductCardDescription>
            O tradicional café feito com água quente e grãos moídos
          </ProductCardDescription>
        </ProductCardHeader>

        <ProductCardFooter>
          <ProductCardPrice>
            <ProductCardPriceText>R$</ProductCardPriceText>
            <ProductCardPriceNumber>9,90</ProductCardPriceNumber>
          </ProductCardPrice>

          <ProductCardFastBuy>
            <QuantityControl />
            <ProductCardButton>
              <ShoppingCart size={22} weight="fill" />
            </ProductCardButton>
          </ProductCardFastBuy>
        </ProductCardFooter>
      </ProductCardWrapper>
    </ProductCardContainer>
  );
}
