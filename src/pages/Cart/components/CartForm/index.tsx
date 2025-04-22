import { CommonInput } from "../../../../components/CommonInput";

import { CartFormContainer, CartFormFields } from "./styles";

export function CartForm() {
  return (
    <CartFormContainer>
      <CartFormFields>
        <CommonInput label="Digite o CEP:" placeholder="CEP" />
        <CommonInput label="Digite a Rua:" placeholder="Rua" />
        <CommonInput label="Sigite o Número:" placeholder="Número" />
        <CommonInput label="Digite o complemento:" placeholder="Complemento" />
        <CommonInput label="Digite o bairro:" placeholder="Bairro" />
        <CommonInput label="Digite a cidade:" placeholder="Cidade" />
        <CommonInput label="Digite o estado:" placeholder="UF" />
      </CartFormFields>
    </CartFormContainer>
  );
}
