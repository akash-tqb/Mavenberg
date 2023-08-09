
import Hero from "@/sections/homepage/hero";
import Products from "@/sections/homepage/products";
import Services from "@/sections/homepage/services";
import WhyUs from "@/sections/homepage/whyUs";

export default function Home() {
  return (
    <main className="bg-maven-bg">
        <Hero />
        <Products />
        <Services />
        <WhyUs />
    </main>
  );
}
