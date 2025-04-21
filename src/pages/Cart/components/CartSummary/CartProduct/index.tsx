import {
  CardActions,
  CardContainer,
  CardImage,
  CardInformation,
  CardTitleAndPrice,
  CardTitle,
  CardRemoveButton,
  CardRemoveButtonIcon,
  CardPrice,
} from "./styles";

import { Trash } from "phosphor-react";

import { QuantityControl } from "../../../../../components/QuantityControl";

export function CartProduct() {
  return (
    <CardContainer>
      <CardImage
        src="/img/coffees/americano.png"
        alt=""
        width="64"
        height="64"
      />

      <CardInformation>
        <CardTitleAndPrice>
          <CardTitle>Expresso Tradicional</CardTitle>
          <CardPrice>R$ 9,00</CardPrice>
        </CardTitleAndPrice>

        <CardActions>
          <QuantityControl />
          <CardRemoveButton>
            <CardRemoveButtonIcon>
              <Trash size={16} />
            </CardRemoveButtonIcon>
            Remover
          </CardRemoveButton>
        </CardActions>
      </CardInformation>
    </CardContainer>
  );
}
