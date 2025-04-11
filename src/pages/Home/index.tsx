import { HeroSection } from "./components/HeroSection";
import { ProductCard } from "../../components/ProductCard/ProductCard";

export function Home() {
  return (
    <main>
      <HeroSection />

      <div>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </main>
  );
}
