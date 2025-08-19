import Image from "next/image";
import Container from "@/components/ui/container";
import Link from "next/link";
import { Instagram, Link2 } from "lucide-react";
import { ExternalLink } from "lucide-react";
import { Mail } from "lucide-react";
import { Phone } from "lucide-react";
import { Globe } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type LinkItem = {
  url: string;
  icon: any; // You can replace with a JSX element if using an icon library
  label: string;
};

const links: LinkItem[] = [
  {
    url: "https://www.instagram.com/1endazed/",
    icon: <Instagram className="inline" />, // e.g., lucide-react: <InstagramIcon />
    label: "Instagram",
  },
  {
    url: "mailto:stanleyelroi@gmail.com",
    icon: <Mail className="inline" />,
    label: "stanleyelroi@gmail.com",
  },
  {
    url: "tel:+2348149782106",
    icon: <Phone className="inline" />,
    label: "+234 (814) 978 2106",
  },
  {
    url: "https://elrois-portfolio.vercel.app/",
    icon: <Globe className="inline" />,
    label: "elrois-portfolio.vercel.app",
  },
];

export default function Home() {
  return (
    <section className="my-32 min-h-screen bg-[url('htttps://tuaaacbguivultdxbcmj.supabase.co/storage/v1/object/public/elroi-gallery/IMG-20250623-WA0158.jpg')] bg-cover bg-center">
      <Container>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {/* links */}
          <div className="basis-1/3">
            <h2 className="text-4xl mb-6">Links</h2>

            <ul className="flex gap-4 flex-col">
              {links.map((item, index) => (
                <Link href={item.url} 
                    key={index}>
                  <li
                    className="border border-foreground backdrop-blur-sm bg-foreground/30 p-2 justify-between flex rounded-lg"
                  >
                    <span className="flex gap-2">
                      {item.icon}
                      <Link href={item.url}>{item.label}</Link>
                    </span>
                    <ExternalLink className="inline ml-2" />
                  </li>
                </Link>
              ))}
            </ul>
          </div>

          {/* contact form */}

          <div className="bg-[url('https://tuaaacbguivultdxbcmj.supabase.co/storage/v1/object/public/elroi-gallery/IMG-20250623-WA0158.jpg')] bg-cover  border border-foreground backdrop-blur-sm bg-foreground/30 p-2 flex flex-col gap-4 basis-2/4">
            <h2 className="text-4xl">Send a Message</h2>
            <form
              action="https://formsubmit.co/stanleyelroi@gmail.com"
              method="POST"
              className="flex gap-4 flex-col rounded-lg"
            >
              <Input
                className="border-foreground/80 backdrop-blur-xs"
                type="text"
                name="name"
                placeholder="Your Name?"
              />

              <Input
                className="border-foreground/80 backdrop-blur-xs"
                type="email"
                name="email"
                placeholder="Your Email?"
              />
              <Textarea className="border-foreground/80 backdrop-blur-xs bg-foreground/30  h-60" />

              <button className="px-4 py-2 bg-background hover:bg-background/80 rounded-lg w-fit" type="submit">Send</button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
