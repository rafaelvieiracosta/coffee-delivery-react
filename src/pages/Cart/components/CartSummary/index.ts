import styled from "styled-components";

export const CartContainer = styled.div`
  padding: 40px;
  background-color: ${(props) => props.theme.base_card};
  border-radius: 6px 44px;
`;

export const CartSummaryList = styled.ul``;

export const CartSummaryListItem = styled.li`
  border-bottom: 1px solid ${(props) => props.theme.base_button};

  &:not(:first-child) {
    padding: 24px 0;
  }
  &:first-child {
    padding-bottom: 24px;
  }
`;

export const CartSummaryListPrices = styled.ul`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const CartSummaryListPricesItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875rem;
  line-height: 1.3;
  font-weight: 400;
  color: ${(props) => props.theme.base_text};

  & span {
    font-size: 1rem;
  }
`;

export const CartSummaryListPricesItemEmphasis = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.3;
  color: ${(props) => props.theme.base_subtitle};
`;

export const CartSummaryButton = styled.button`
  margin-top: 24px;
  width: 100%;
  text-transform: uppercase;
  font-size: 0.875rem;
  font-weight: 700;
  min-height: 46px;
  color: ${(props) => props.theme.base_white};
  border: none;
  padding: 12px 8px;
  border-radius: 6px;
  background-color: ${(props) => props.theme.brand_yellow};
  transition: 150ms;

  &:hover {
    background-color: ${(props) => props.theme.brand_yellow_dark};
  }
`;
