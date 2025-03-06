import Header from "@/components/Header";
import ProductList from "@/components/ProductList";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import FeatureSection from "@/components/FurureSection";
import StatsSection from "@/components/StatsSection";
import ProjectsSection from "@/components/ProjectSection";
import Catalogue from "@/components/Catalogue";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
    <Header />
    <Hero />
    <Services />
    <ProductList />
    {/*<Catalogue />*/}
    <About />
    <FeatureSection />
    <StatsSection />
    <ProjectsSection />
    <Footer />
    </div>
  );
}
