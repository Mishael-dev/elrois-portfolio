import Link from "next/link";

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