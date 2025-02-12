import CategoryList from "@/components/CategoryList";
import CategoriesList from "@/components/CategoriesList";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductList from "@/components/ProductList";
import ShopList from "@/components/ShopList";
import TopBar from "@/components/TopBar";
import BestSeller from "@/components/BestSellers";
import BlogList from "@/components/BlogList";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import FloatingMenu from "@/components/FloatingMenu";
import Services from "@/components/Services";
import About from "@/components/About";
import FeatureSection from "@/components/FurureSection";
import StatsSection from "@/components/StatsSection";
import ProjectsSection from "@/components/ProjectSection";
import CTASection from "@/components/CtaSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
    <Hero />
    <Services />
    <About />
    <FeatureSection />
    <StatsSection />
    <ProjectsSection />
    <CTASection />
    {/*<div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Category List: 1/4 width *
        <div className="col-span-1">
          <CategoryList />
        </div>
        {/* Product List: 3/4 width *
        <div className="col-span-3">
          <ProductList />
        </div>
      </div>
    </div>
    <BlogList />
    {/* You can add other content below */}
    {/*<main className="py-8">
      <h1 className="text-center text-3xl font-bold">Welcome to Our Website!</h1>
      <p className="text-center mt-4">Enjoy browsing our site and take advantage of free shipping this week!</p>
    </main>*/}
    <Footer />
    </div>
  );
}
