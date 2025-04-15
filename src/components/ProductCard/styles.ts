import styled from "styled-components";

export const ProductCardContainer = styled.div`
  padding-top: 20px;
`;
export const ProductCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2.063rem;
  padding: 20px;
  background-color: ${(props) => props.theme.base_card};

  border-radius: 6px 36px;
`;

export const ProductCardHeader = styled.div``;
export const ProductCardImage = styled.img`
  margin-top: -40px;
  aspect-ratio: 1 / 1;
  margin-left: auto;
  margin-right: auto;
`;
export const ProductCardTags = styled.ul`
  margin-top: 0.75rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.25rem;
`;
export const ProductCardTag = styled.li`
  font-size: 0.625rem;
  font-weight: 600;
  line-height: 1.3;
  text-transform: uppercase;
  width: fit-content;
  color: ${(props) => props.theme.brand_yellow_dark};
  background-color: ${(props) => props.theme.brand_yellow_light};
  padding: 0.25rem 0.5rem;
  border-radius: 999px;
`;
export const ProductCardName = styled.p`
  margin-top: 1rem;
  font-family: var(--font_family_secondary);
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.3;
  text-align: center;
  color: ${(props) => props.theme.base_subtitle};
`;
export const ProductCardDescription = styled.p`
  margin-top: 0.5rem;
  font-family: var(--font_family_secondary);
  font-size: 0.875rem;
  line-height: 1.3;
  text-align: center;
  color: ${(props) => props.theme.base_label};
`;

export const ProductCardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.438rem;
`;
export const ProductCardPrice = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;
export const ProductCardPriceText = styled.span`
  font-family: var(--font_family_secondary);
  font-size: 0.875rem;
  font-weight: 400;
  color: ${(props) => props.theme.base_text};
`;
export const ProductCardPriceNumber = styled.span`
  font-family: var(--font_family_secondary);
  font-size: 1.5rem;
  font-weight: 800;
  line-height: 1.3;
  color: ${(props) => props.theme.base_text};
`;
export const ProductCardFastBuy = styled.div`
  display: flex;
  gap: 0.5rem;
  max-width: 118px;
`;
export const ProductCardInput = styled.input``;
export const ProductCardButton = styled.button`
  border-radius: 6px;
  padding: 8px;
  background-color: ${(props) => props.theme.brand_purple_dark};
  color: ${(props) => props.theme.base_card};
  position: relative;
  transition: background-color 150ms;

  &:hover {
    background-color: ${(props) => props.theme.brand_purple};
  }
`;
