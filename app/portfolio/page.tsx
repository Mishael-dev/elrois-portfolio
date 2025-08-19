"use client";
import { useState } from "react";
import Image from "next/image";
import Container from "@/components/ui/container";
import { PortfolioItem } from "@/components/portfolioItem";
import { getPortfolioItems } from "@/demo/portfolioitems";

let portfolioItems = getPortfolioItems();

export default function Home() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredItems = selectedTag
    ? portfolioItems.filter((item) => item.tags.includes(selectedTag))
    : portfolioItems;

  const allTags = Array.from(
    new Set(portfolioItems.flatMap((item) => item.tags))
  );

  return (
    <section className="my-16 md:my-32">
      <Container>
        <div>
            <h1
              className="text-white text-4xl lg:text-8xl mb-4 tracking-tight text-center my-20"
              style={{
                fontFamily: "Satoshi, sans-serif",
                fontWeight: 200,
                lineHeight: "0.9",
              }}
            >
              <span
                className="text-[#dac5a7] italic"
                style={{ fontFamily: "serif", fontWeight: 300 }}
              >
                Portfolio
              </span>
            </h1>
          </div>
        <div className="flex md:gap-10 flex-col md:flex-row">
          
          <aside className="max-w-sm md:border-r md:basis-1/3 w-full sticky top-20 md:top-30 self-start h-fit">
            <ul className="flex flex-nowrap md:flex-wrap gap-2 overflow-x-auto md:overflow-hidden p-2 md:p-0">
              {allTags.map((tag, index) => (
                <li
                  className="backdrop-blur-sm bg-foreground/30 rounded-full px-3 py-1 cursor-pointer"
                  key={index}
                  onClick={() =>
                    setSelectedTag(tag === selectedTag ? null : tag)
                  }
                >
                  {tag}
                </li>
              ))}
            </ul>
          </aside>

          <div className="flex flex-col gap-8 basis-3/5 mt-8 md:mt-0">
            <>
              {filteredItems.map((item, index) => (
                <PortfolioItem key={index} {...item} />
              ))}
            </>
          </div>
        </div>
      </Container>
    </section>
  );
}
