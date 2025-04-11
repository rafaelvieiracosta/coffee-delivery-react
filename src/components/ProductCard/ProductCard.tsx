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
  ProductCardInput,
  ProductCardButton,
} from "./styles";

export function ProductCard() {
  return (
    <ProductCardContainer>
      <ProductCardWrapper>
        <ProductCardHeader>
          <ProductCardImage>
            <img src="" alt="" />
          </ProductCardImage>

          <ProductCardTags>
            <ProductCardTag>Tradicional</ProductCardTag>
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
            <ProductCardInput />
            <ProductCardButton>Adicionar ao carrinho</ProductCardButton>
          </ProductCardFastBuy>
        </ProductCardFooter>
      </ProductCardWrapper>
    </ProductCardContainer>
  );
}
