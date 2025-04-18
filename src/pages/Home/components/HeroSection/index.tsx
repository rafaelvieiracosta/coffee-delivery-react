import {
  HeroSectionWrapper,
  HeroContainer,
  HeroImageWrapper,
  HeroInformation,
  HeroTitle,
  HeroDescription,
  HeroList,
  HeroListItem,
  HeroListItemIcon,
} from "./styles";

import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

export function HeroSection() {
  return (
    <HeroSectionWrapper>
      <div className="row">
        <HeroContainer>
          <HeroImageWrapper>
            <img
              src="/img/image-hero-section-home.png"
              alt=""
              width={476}
              height={360}
            />
          </HeroImageWrapper>

          <HeroInformation>
            <HeroTitle>
              Encontre o café perfeito para qualquer hora do dia
            </HeroTitle>

            <HeroDescription>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </HeroDescription>

            <HeroList>
              <HeroListItem>
                <HeroListItemIcon $iconColor="yellowDark">
                  <ShoppingCart size={16} weight="fill" />
                </HeroListItemIcon>
                Compra simples e segura
              </HeroListItem>

              <HeroListItem>
                <HeroListItemIcon $iconColor="gray">
                  <Package size={16} weight="fill" />
                </HeroListItemIcon>
                Embalagem mantém o café intacto
              </HeroListItem>

              <HeroListItem>
                <HeroListItemIcon $iconColor="yellow">
                  <Timer size={16} weight="fill" />
                </HeroListItemIcon>
                Entrega rápida e rastreada
              </HeroListItem>

              <HeroListItem>
                <HeroListItemIcon $iconColor="purple">
                  <Coffee size={16} weight="fill" />
                </HeroListItemIcon>
                O café chega fresquinho até você
              </HeroListItem>
            </HeroList>
          </HeroInformation>
        </HeroContainer>
      </div>
    </HeroSectionWrapper>
  );
}
