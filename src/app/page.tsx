import { About } from "@/components/home/about";
import { Benefits } from "@/components/home/benefits";
import { Demo } from "@/components/home/demo";
import { Header } from "@/components/home/header";
import { Hero } from "@/components/home/hero";

export default function HomePage() {
  return (
     <div>
        <Header />
        <Hero />
        <Benefits />
        <About />
        <Demo  />
     </div>
  );
}
