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

import { ShoppingCart } from "phosphor-react";

interface PropsProductsCard {
  coffee: {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    tags: string[];
  };
}

export function ProductCard({ coffee }: PropsProductsCard) {
  function splitCurrencyParts(value: number) {
    const number = Number(value);
    const formatted = number.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
    });

    const [symbol, amount] = formatted.split(/\s(.+)/);

    return {
      symbol,
      amount,
    };
  }
  const { symbol, amount } = splitCurrencyParts(coffee.price);

  return (
    <ProductCardContainer>
      <ProductCardWrapper>
        <ProductCardHeader>
          <ProductCardImage
            src={coffee.image}
            alt=""
            width={120}
            height={120}
          />

          <ProductCardTags>
            {coffee.tags.map((tag) => {
              return <ProductCardTag key={tag}>{tag}</ProductCardTag>;
            })}
          </ProductCardTags>

          <ProductCardName>{coffee.name}</ProductCardName>

          <ProductCardDescription>{coffee.description}</ProductCardDescription>
        </ProductCardHeader>

        <ProductCardFooter>
          <ProductCardPrice>
            <ProductCardPriceText>{symbol}</ProductCardPriceText>
            <ProductCardPriceNumber>{amount}</ProductCardPriceNumber>
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
