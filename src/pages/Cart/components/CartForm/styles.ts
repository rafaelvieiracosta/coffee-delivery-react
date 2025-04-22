import styled from "styled-components";

export const CartFormContainer = styled.form`
  padding: 40px;
  background-color: ${(props) => props.theme.base_card};
  border-radius: 6px;
`;

export const CartFormFields = styled.div`
  display: grid;
  grid-template-columns: minmax(auto, 200px) minmax(auto, 276px) 60px;
  gap: 16px 12px;

  & > :nth-child(1) {
    grid-row: 1;
    grid-column: 1;
  }
  & > :nth-child(2) {
    grid-row: 2;
    grid-column: -1 / 1;
  }
  & > :nth-child(3) {
    grid-row: 3;
    grid-column: 1;
  }
  & > :nth-child(4) {
    grid-row: 3;
    grid-column: span 2;
  }
  & > :nth-child(5) {
    grid-row: 4;
    grid-column: 1;
  }
  & > :nth-child(6) {
    grid-row: 4;
    grid-column: 2;
  }
  & > :nth-child(7) {
    grid-row: 4;
    grid-column: 3;
  }
`;
