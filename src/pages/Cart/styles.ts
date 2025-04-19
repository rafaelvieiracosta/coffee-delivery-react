import styled from "styled-components";

export const CartContainer = styled.main`
  padding-top: 2.5rem;
`;

export const CartWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(auto, 40rem) minmax(auto, 28rem);
  gap: 2rem;
`;

export const CartTitle = styled.h2`
  font-family: "Baloo 2", sans-serif;
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: 0.938rem;
  color: ${(props) => props.theme.base_subtitle};
`;
