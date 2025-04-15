import { Plus, Minus } from "phosphor-react";

import {
  QuantityControlContainer,
  QuantityControlButtonAdd,
  QuantityControlButtonRemove,
  QuantityControlInput,
} from "./styles";

export function QuantityControl() {
  return (
    <QuantityControlContainer>
      <QuantityControlButtonRemove>
        <Minus size={14} />
      </QuantityControlButtonRemove>

      <QuantityControlInput value={1} />

      <QuantityControlButtonAdd>
        <Plus size={14} />
      </QuantityControlButtonAdd>
    </QuantityControlContainer>
  );
}
