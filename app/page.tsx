import Image from "next/image";
import Link from "next/link";

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
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <nav className="flex flex-col items-center">
          <span className="text-3xl">el-ROI</span>
          <ul className="flex gap-3">
            {pages.map((item, index) => (
              <li key={index}>
                <Link className="font-extralight" href={item.url}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </main>
    </div>
  );
}
