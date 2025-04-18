import { HomeContainer } from "./styles";

import { HeroSection } from "./components/HeroSection";
import { ShowcaseSection } from "./components/ShowcaseSection";

export function Home() {
  return (
    <HomeContainer>
      <HeroSection />
      <ShowcaseSection />
    </HomeContainer>
  );
}
