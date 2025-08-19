"use client";
import { useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Works" },
    { id: "portraits", name: "Portraits" },
    { id: "landscapes", name: "Landscapes" },
    { id: "abstract", name: "Abstract" },
    { id: "digital", name: "Digital Art" },
  ];

  const artworks = [
    {
      id: 1,
      title: "Sunset Reverie",
      category: "landscapes",
      medium: "Oil on Canvas",
      year: "2024",
      price: "$2,400",
      image:
        "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=600&fit=crop",
    },
    {
      id: 2,
      title: "Portrait in Blue",
      category: "portraits",
      medium: "Watercolor",
      year: "2024",
      price: "$1,800",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop",
    },
    {
      id: 4,
      title: "Digital Bloom",
      category: "digital",
      medium: "Digital Art",
      year: "2024",
      price: "$900",
      image:
        "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=600&h=600&fit=crop",
    },
    {
      id: 5,
      title: "Mountain Solitude",
      category: "landscapes",
      medium: "Oil on Canvas",
      year: "2023",
      price: "$2,800",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop",
    },
    {
      id: 6,
      title: "Inner Light",
      category: "portraits",
      medium: "Oil on Canvas",
      year: "2024",
      price: "$2,200",
      image:
        "https://images.unsplash.com/photo-1596815064285-45ed8a9c0463?w=600&h=600&fit=crop",
    },
    {
      id: 7,
      title: "Cosmic Dance",
      category: "abstract",
      medium: "Acrylic on Canvas",
      year: "2024",
      price: "$2,600",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop",
    },
    {
      id: 8,
      title: "Neon Nights",
      category: "digital",
      medium: "Digital Art",
      year: "2024",
      price: "$1,200",
      image:
        "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=600&fit=crop",
    },
  ];

  const filteredArtworks =
    activeCategory === "all"
      ? artworks
      : artworks.filter((artwork) => artwork.category === activeCategory);

  return (
    <section id="gallery" className="py-24">
      <div className="max-w-7xl mx-auto lg:px-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-[#dac5a7] text-[13px] tracking-[2px] uppercase mb-4">
            Gallery
          </div>
          <h2
            className="text-white text-4xl lg:text-5xl mb-8 leading-tight"
            style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 300 }}
          >
            Featured
            <span
              className="text-[#dac5a7] italic"
              style={{ fontFamily: "serif" }}
            >
              {" "}
              Artworks
            </span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto leading-relaxed">
            Explore a curated collection of my latest works, ranging from
            intimate portraits to expansive landscapes, each piece crafted with
            passion and precision.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-[#dac5a7] text-[#1a1a1a]"
                  : "bg-transparent border border-[#dac5a7]/30 text-[#dac5a7] hover:bg-[#dac5a7]/10"
              }`}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Artwork Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredArtworks.map((artwork) => (
            <div key={artwork.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl bg-[#0a0a0a] border border-[#dac5a7]/10 transition-all duration-300 hover:border-[#dac5a7]/30">
                <div className="aspect-square relative">
                  <Image
                    src={artwork.image}
                    alt={artwork.title}
                    fill
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button className="bg-[#dac5a7] hover:bg-[#c9b595] text-[#1a1a1a] px-6 py-2 rounded-full">
                      View Details
                    </Button>
                  </div>
                </div>

                {/* Artwork Info */}
                <div className="p-6">
                  <h3 className="text-white text-lg mb-2">{artwork.title}</h3>
                  <p className="text-[#dac5a7] text-sm mb-1">
                    {artwork.medium}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-white/60 text-sm">
                      {artwork.year}
                    </span>
                    <span className="text-[#dac5a7] font-medium">
                      {artwork.price}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-16">
          <Link href="/portfolio">
            <Button className="bg-transparent border-2 border-[#dac5a7] text-[#dac5a7] hover:bg-[#dac5a7] hover:text-[#1a1a1a] px-8 py-3 rounded-full">
              View Complete Portfolio
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
