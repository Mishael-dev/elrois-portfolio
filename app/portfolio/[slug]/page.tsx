import Container from "@/components/ui/container";
import { getPortfolioItems } from "@/demo/portfolioitems";
import Image from "next/image";
import { getPortfolioItemById } from "@/lib/portfolio";
import type { PortfolioItem } from "@/demo/portfolioitems";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}
export default async function SlugPage({ params }: PageProps) {
  const { slug } = await params;
  const item = getPortfolioItemById(slug);
  if (!item) {
    notFound();
  }


  return (
    <section className="my-16 md:my-32">
      <Container>
        <div className="flex flex-col justify-center items-center w-full gap-4">
          <h1 className="text-5xl text-center  ">{item.title}</h1>
          <p>
            Art Piece by <span>Elroi John Stanley</span>
          </p>
          <p>
            Made in <span>{item.date}</span>
          </p>
        </div>

        <Image
          src={item.media}
          alt="Portfolio Image"
          width={600}
          height={400}
          className="my-8 mx-auto"
        />

        <div className="flex flex-col md:flex-row gap-8 justify-center">
          <div className="basis-3/5">
            <h2 className="text-2xl">Description</h2>

            <p className="md:text-justify">{item.description}</p>
          </div>

          <div className="flex flex-col gap-4 mt-8">
            <p className="text-lg font-bold">$1,000,000</p>
            <span className="text-lg">Date: {item.date}</span>

            <div className="flex flex-col">
              <h3 className="text-lg mb-2">Tags</h3>
              <ul className="flex flex-wrap gap-2">
                {item.tags.map((item, index) => (
                  <li
                    className="backdrop-blur-sm bg-foreground/30 rounded-full px-3 py-1"
                    key={index}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export async function generateStaticParams() {
  const items = getPortfolioItems();
  
  return items.map((item) => ({
    slug: item.id,
  }));
}