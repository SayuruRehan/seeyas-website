import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { ArticlesSection } from "@/components/sections/articles";
import { BooksSection } from "@/components/sections/books";
import { ContactSection } from "@/components/sections/contact";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <div>
        <AboutSection />
        <BooksSection />
        {/*<ArticlesSection />*/}
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}