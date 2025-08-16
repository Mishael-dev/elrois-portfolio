import Image from "next/image";
import Container from "@/components/ui/container";
import Link from "next/link";

export interface PortfolioItem {
  title: string; // A simple, descriptive name for the piece
  media: string; // URL to the artwork image
  description: string; // Short narrative about the piece
  date: string; // Year or full date when the artwork was completed
  tags: string[]; // List of tags/categories for filtering
}

const portfolioItems: PortfolioItem[] = [
  {
    title: "Whispers of the Sea",
    media:
      "https://tuaaacbguivultdxbcmj.supabase.co/storage/v1/object/public/elroi-portfolio/gettyimages-1190200652-1024x1024.jpg",
    description:
      "An abstract piece capturing the calm and chaos of ocean waves colliding with the shore.",
    date: "2021",
    tags: ["abstract", "ocean", "painting"],
  },
  {
    title: "Urban Echoes",
    media:
      "https://tuaaacbguivultdxbcmj.supabase.co/storage/v1/object/public/elroi-portfolio/gettyimages-1190200652-1024x1024.jpg",
    description:
      "A modern exploration of city life, blending geometric forms with muted tones.",
    date: "2022",
    tags: ["modern", "city", "digital"],
  },
  {
    title: "Golden Horizon",
    media:
      "https://tuaaacbguivultdxbcmj.supabase.co/storage/v1/object/public/elroi-portfolio/gettyimages-1190200652-1024x1024.jpg",
    description:
      "Inspired by sunsets, this work reflects warmth, hope, and endless possibilities.",
    date: "2023",
    tags: ["sunset", "nature", "landscape"],
  },
  {
    title: "Silent Conversations",
    media:
      "https://tuaaacbguivultdxbcmj.supabase.co/storage/v1/object/public/elroi-portfolio/gettyimages-1190200652-1024x1024.jpg",
    description:
      "A minimalist approach to the human connection through muted colors and empty spaces.",
    date: "2020",
    tags: ["minimalist", "portrait", "conceptual"],
  },
  {
    title: "Dream in Motion",
    media:
      "https://tuaaacbguivultdxbcmj.supabase.co/storage/v1/object/public/elroi-portfolio/gettyimages-1190200652-1024x1024.jpg",
    description:
      "Fluid brushstrokes and blurred edges represent fleeting thoughts and imagination.",
    date: "2019",
    tags: ["expressionism", "dream", "motion"],
  },
];

function PortfolioTags() {
  // Extract and deduplicate all tags
  const allTags = Array.from(
    new Set(portfolioItems.flatMap((item) => item.tags))
  );

  return (
    <ul className="flex flex-wrap gap-2">
      {allTags.map((tag, index) => (
        <li
          className="backdrop-blur-sm bg-foreground/30 rounded-full px-3 py-1"
          key={index}
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}

export interface PortfolioItemProps {
  title: string;
  media: string;
  description: string;
  date: string;
  tags: string[];
}

export function PortfolioItem({
  title,
  media,
  description,
  date,
  tags,
}: PortfolioItemProps) {
  return (
    <div>
      <Link href="">
        <div
          className="bg-cover bg-center h-64 w-full"
          style={{ backgroundImage: `url(${media})` }}
        ></div>
      </Link>

      <div className="flex justify-between items-center">
        <h2 className="mt-4 text-3xl">{title}</h2>
        <span>{date}</span>
      </div>
    </div>
  );
}

function PortfolioItems() {
  return (
    <>
      {portfolioItems.map((item, index) => (
        <PortfolioItem key={index} {...item} />
      ))}
    </>
  );
}

export default function Home() {
  return (
    <section className="my-16 md:my-32">
      <Container>
        <div className="flex gap-10">
          <aside className="max-w-sm border-r basis-1/3 sticky top-20 self-start h-fit">
            <PortfolioTags />
          </aside>

          <div className="flex flex-col gap-8 basis-3/5">
            <PortfolioItems />
          </div>
        </div>
      </Container>
    </section>
  );
}
