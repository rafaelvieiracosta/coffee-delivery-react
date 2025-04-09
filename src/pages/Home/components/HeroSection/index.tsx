import {
  HeroContainer,
  HeroImageWrapper,
  HeroInformation,
  HeroTitle,
  HeroDescription,
} from "./styles";

import imageHeroSection from "../../../../assets/img/image-hero-section-home.png";

export function HeroSection() {
  return (
    <section>
      <div className="row">
        <HeroContainer>
          <HeroInformation>
            <HeroTitle>
              Encontre o café perfeito para qualquer hora do dia
            </HeroTitle>

            <HeroDescription>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </HeroDescription>

            <ul>
              <li>Compra simples e segura</li>
              <li>Embalagem mantém o café intacto</li>
              <li>Entrega rápida e rastreada</li>
              <li>O café chega fresquinho até você</li>
            </ul>
          </HeroInformation>

          <HeroImageWrapper>
            <img src={imageHeroSection} alt="" width={476} height={360} />
          </HeroImageWrapper>
        </HeroContainer>
      </div>
    </section>
  );
}
