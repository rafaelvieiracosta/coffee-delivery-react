import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  gap: 56px;
`;

export const HeroImageWrapper = styled.div`
  flex: 1;
  min-width: 350px;
  max-width: 476px;
`;

export const HeroInformation = styled.div`
  flex: 1;
  max-width: 588px;
`;

export const HeroTitle = styled.h1`
  font-family: var(--font_family_secondary);
  font-size: 3rem;
  font-weight: 800;
  line-height: 1.3;
  padding-top: 2px;
`;

export const HeroDescription = styled.p`
  margin-top: 1rem;
  font-size: 1.25rem;
  line-height: 1.3;
`;
