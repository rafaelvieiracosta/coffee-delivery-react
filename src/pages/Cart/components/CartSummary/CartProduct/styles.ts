import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 0.5rem 0.25rem;
  gap: 12px;
`;

export const CardImage = styled.img`
  flex-shrink: 0;
  max-width: 64px;
  aspect-ratio: 1 / 1;
`;

export const CardInformation = styled.div`
  flex: 1;
`;

export const CardTitleAndPrice = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

export const CardTitle = styled.p`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.3;
  color: ${(props) => props.theme.base_subtitle};
`;

export const CardPrice = styled.p`
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.3;
  color: ${(props) => props.theme.base_text};
`;

export const CardActions = styled.div`
  margin-top: 0.5rem;
  display: flex;
  gap: 0.5rem;
  max-width: 171px;
`;

export const CardRemoveButtonIcon = styled.div`
  color: ${(props) => props.theme.brand_purple};
`;

export const CardRemoveButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background-color: ${(props) => props.theme.base_button};
  border: none;
  border-radius: 6px;
  padding: 6.5px 8px;
  font-size: 0.75rem;
  line-height: 1.6;
  text-transform: uppercase;
  color: ${(props) => props.theme.base_text};
  cursor: pointer;
`;
