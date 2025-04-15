import styled from "styled-components";

export const QuantityControlContainer = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.base_button};
  border-radius: 6px;
  overflow: hidden;
`;
const BaseQuantityControlButton = styled.button`
  color: ${(props) => props.theme.brand_purple};
  background-color: transparent;

  &:focus-visible {
    box-shadow: inset 0 0 0 2px ${(props) => props.theme.brand_purple};
  }
`;
export const QuantityControlButtonAdd = styled(BaseQuantityControlButton)`
  padding: 0.75rem 0.5rem 0.75rem 0.25rem;

  &:focus-visible {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }
`;
export const QuantityControlButtonRemove = styled(BaseQuantityControlButton)`
  padding: 0.75rem 0.25rem 0.75rem 0.5rem;

  &:focus-visible {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }
`;
export const QuantityControlInput = styled.input`
  min-width: 1.25rem;
  width: 100%;

  font-size: 1rem;
  line-height: 1.3;
  color: ${(props) => props.theme.base_title};
  text-align: center;

  &:focus-visible {
    box-shadow: inset 0 0 0 2px ${(props) => props.theme.brand_purple};
  }
`;
