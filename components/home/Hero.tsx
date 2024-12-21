import Link from "next/link";
import { Button } from "../ui/button";
import HeroCarousel from "./HeroCarousel";

const Hero = () => {
  return (
    <section className="grid grid-col-1 lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl font-bold text-4xl tracking-tight sm:text-6xl">
          Welcome to the best online store
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">
          We offer the best products at the best prices. Shop now and get free
          shipping on all orders.
        </p>
        <Button asChild size={'lg'} className="mt-10">
          <Link href="/products">Shop Now</Link>
        </Button>
      </div>
      <HeroCarousel />
    </section>
  );
};

export default Hero;
