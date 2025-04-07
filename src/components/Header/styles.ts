import styled from "styled-components";

export const HeaderContent = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;

  padding: 32px 0;
`;

export const CartButton = styled.div`
  border-radius: 6px;
  padding: 8px;
  background: ${(props) => props.theme.brand_yellow_light};
  color: ${(props) => props.theme.brand_yellow_dark};
  position: relative;
`;

export const CartButtonNumber = styled.span`
  position: absolute;
  top: -8px;
  left: calc(100% - 8px);

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.375rem;
  min-width: 20px;
  min-height: 20px;

  background-color: ${(props) => props.theme.brand_yellow_dark};
  border-radius: 999px;
  color: ${(props) => props.theme.base_white};

  font-size: 0.75rem;
  font-weight: 700;
`;
