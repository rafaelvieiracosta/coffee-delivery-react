import {
  CardActions,
  CardContainer,
  CardContent,
  CardImage,
  CardInformation,
  CardTitle,
  CardRemoveButton,
  CardPrice,
} from "./styles";

import { Trash } from "phosphor-react";

import { QuantityControl } from "../../../../../components/QuantityControl";

export function CartProduct() {
  return (
    <CardContainer>
      <CardContent>
        <CardImage
          src="/img/coffees/americano.png"
          alt=""
          width="64"
          height="64"
        />

        <CardInformation>
          <CardTitle>Expresso Tradicional</CardTitle>
          <CardActions>
            <QuantityControl />
            <CardRemoveButton>
              <Trash size={24} />
              Remover
            </CardRemoveButton>
          </CardActions>
        </CardInformation>
      </CardContent>

      <CardPrice>R$ 9,00</CardPrice>
    </CardContainer>
  );
}
