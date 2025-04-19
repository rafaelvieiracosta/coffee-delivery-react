import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  padding: 0.5rem 0.25rem;
`;

export const CardContent = styled.div`
  display: flex;
  gap: 1.25rem;
`;

export const CardImage = styled.img`
  flex-shrink: 0;
  max-width: 64px;
  aspect-ratio: 1 / 1;
`;

export const CardInformation = styled.div``;

export const CardTitle = styled.p`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.3;
  color: ${(props) => props.theme.base_subtitle};
`;

export const CardActions = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const CardRemoveButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const CardPrice = styled.p`
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.3;
`;
