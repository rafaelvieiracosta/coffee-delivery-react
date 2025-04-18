import styled from "styled-components";

export const HeroSectionWrapper = styled.section`
  padding: 2rem 0;
  background-image: url("/img/image-background-hero-section-home.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;

  @media (min-width: 768px) {
    padding: 5.75rem 0;
  }
`;

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: initial;
    gap: 56px;
  }
`;

export const HeroImageWrapper = styled.div`
  flex: 1;

  @media (min-width: 768px) {
    order: 1;
    min-width: 350px;
    max-width: 476px;
  }
`;

export const HeroInformation = styled.div`
  flex: 1;

  @media (min-width: 768px) {
    max-width: 588px;
  }
`;

export const HeroTitle = styled.h1`
  font-family: var(--font_family_secondary);
  font-size: 3rem;
  font-weight: 800;
  line-height: 1.3;
  padding-top: 2px;
  color: ${(props) => props.theme.base_title};
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

export const HeroDescription = styled.p`
  margin-top: 1rem;
  font-size: 1.25rem;
  line-height: 1.3;
  color: ${(props) => props.theme.base_subtitle};
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

export const HeroList = styled.ul`
  margin-top: 4.125rem;
  margin-left: auto;
  margin-right: auto;

  display: grid;
  grid-template-columns: auto;
  gap: 1.25rem 2.5rem;
  max-width: fit-content;

  @media (min-width: 768px) {
    margin-left: 0;
    margin-right: 0;

    grid-template-columns: repeat(2, auto);
    max-width: 567px;
  }
`;

export const HeroListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  font-size: 1rem;
  line-height: 1.3;
  color: ${(props) => props.theme.base_text};
`;

const ICON_COLORS = {
  yellowDark: "brand_yellow_dark",
  yellow: "brand_yellow",
  gray: "base_text",
  purple: "brand_purple",
} as const;

interface HeroListItemIconProps {
  $iconColor: keyof typeof ICON_COLORS;
}

export const HeroListItemIcon = styled.span<HeroListItemIconProps>`
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 2rem;
  height: 2rem;
  border-radius: 50%;

  color: ${(props) => props.theme.base_background};
  background-color: ${(props) => props.theme[ICON_COLORS[props.$iconColor]]};
`;
