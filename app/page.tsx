import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Services from "@/components/ServicesSection";
import About from "@/components/About";
import CertificationsSection from "@/components/CertificationsSection";
import ProductsSection from "@/components/ProductList";
import IndustriesServed from "@/components/IndustriesServed";
import IndustryNews from "@/components/IndustryNews";
import SafetyGuidesSection from "@/components/SafetyGuidesSection";
import ClientReviews from "@/components/ClientReviews";
import ContactForm from "@/components/ContactForm";
import DirectorsStatement from "@/components/TeamSection";

export default function Home() {
  return (
    <div>
    <Header />
    <Hero />
    <About />
    <Services />
    <ProductsSection />
    <DirectorsStatement />
    <CertificationsSection />
    <IndustriesServed />
    <IndustryNews />
    <SafetyGuidesSection />
    <ClientReviews />
    <ContactForm />
    <Footer />
    </div>
  );
}
