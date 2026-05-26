import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import Categories from "@/components/sections/Categories";
import ProductGrid from "@/components/sections/ProductGrid";
import ProductSpotlight from "@/components/sections/ProductSpotlight";
import StoryScroll from "@/components/sections/StoryScroll";
import Testimonials from "@/components/sections/Testimonials";
import Newsletter from "@/components/sections/Newsletter";


export function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Categories />
      <ProductGrid />
      <ProductSpotlight />
      <StoryScroll />
      <Testimonials />
      <Newsletter />
    </>
  );
}
