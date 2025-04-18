import { ShowcaseWrapper, ShowcaseTitle, ShowcaseGrid } from "./styles";

import { ProductCard } from "../../../../components/ProductCard/ProductCard";

import { coffees } from "../../../../../data.json";

export function ShowcaseSection() {
  return (
    <ShowcaseWrapper>
      <div className="row">
        <ShowcaseTitle>Nossos cafés</ShowcaseTitle>

        <ShowcaseGrid>
          {coffees.map((coffee) => {
            return <ProductCard key={coffee.id} coffee={coffee} />;
          })}
        </ShowcaseGrid>
      </div>
    </ShowcaseWrapper>
  );
}
