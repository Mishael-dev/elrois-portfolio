import ProcessSection from "@/components/ProcessSection";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import PoetrySection from "@/components/Poetry";
import PortfolioHero from "@/components/heroSection";
import Navigation from "@/components/Navbar";
import Container from "@/components/ui/container";
import GallerySection from "@/components/GallerySection";

interface Page {
  label: string;
  url: string;
}

const pages: Page[] = [
  { label: "Home", url: "/" },
  { label: "About", url: "/about" },
  { label: "Portfolio", url: "/portfolio" },
  { label: "Gallery", url: "/gallery" },
  { label: "Contact", url: "/contact" },
];

export default function Home() {
  return (
    <div>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Container>
          <PortfolioHero />
          <GallerySection />
          <ProcessSection />
          <PoetrySection />
        </Container>
      </main>
    </div>
  );
}