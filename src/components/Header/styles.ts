import styled from "styled-components";

export const HeaderContent = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;

  padding: 32px 0;
`;

export const HeaderCartButton = styled.div`
  border-radius: 6px;
  padding: 8px;
  background: ${(props) => props.theme.brand_yellow_light};
  color: ${(props) => props.theme.brand_yellow_dark};
`;
