import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Why from "@/components/Why";
import Testimonials from "@/components/Testimonials";
import Awards from "@/components/Awards";
import Blog from "@/components/Blog";
import CtaFooter from "@/components/CtaFooter";

export default function Page() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Why />
      <Testimonials />
      <Awards />
      <Blog />
      <CtaFooter />
    </main>
  );
}
