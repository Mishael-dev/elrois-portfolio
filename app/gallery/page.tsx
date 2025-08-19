import Image from "next/image";
import Container from "@/components/ui/container";
import React from "react";

// Tile type definitions
type TextTileType = {
  type: "text";
  content: { text: string };
};

type PictureTileType = {
  type: "picture";
  content: { text: string; src: string };
};

type EmptyTileType = {
  type: "empty";
  content: {};
};

type Tile = TextTileType | PictureTileType | EmptyTileType;

const tiles: Tile[] = [
  {
    type: "picture",
    content: {
      text: "",
      src: "https://tuaaacbguivultdxbcmj.supabase.co/storage/v1/object/public/elroi-gallery/IMG-20250623-WA0156.jpg",
    },
  },
  {
    type: "picture",
    content: {
      text: "",
      src: "https://supabase.com/dashboard/project/tuaaacbguivultdxbcmj/storage/buckets/elroi-gallery/.emptyFolderPlaceholder",
    },
  },
  {
    type: "picture",
    content: {
      text: "",
      src: "https://supabase.com/dashboard/project/tuaaacbguivultdxbcmj/storage/buckets/elroi-gallery/IMG-20250623-WA0129.jpg",
    },
  },
  {
    type: "picture",
    content: {
      text: "",
      src: "https://supabase.com/dashboard/project/tuaaacbguivultdxbcmj/storage/buckets/elroi-gallery/IMG-20250623-WA0131.jpg",
    },
  },
  {
    type: "picture",
    content: {
      text: "",
      src: "https://supabase.com/dashboard/project/tuaaacbguivultdxbcmj/storage/buckets/elroi-gallery/IMG-20250623-WA0133.jpg",
    },
  },
  {
    type: "picture",
    content: {
      text: "",
      src: "https://supabase.com/dashboard/project/tuaaacbguivultdxbcmj/storage/buckets/elroi-gallery/IMG-20250623-WA0134.jpg",
    },
  },
  {
    type: "picture",
    content: {
      text: "",
      src: "https://supabase.com/dashboard/project/tuaaacbguivultdxbcmj/storage/buckets/elroi-gallery/IMG-20250623-WA0136.jpg",
    },
  },
  {
    type: "picture",
    content: {
      text: "",
      src: "https://supabase.com/dashboard/project/tuaaacbguivultdxbcmj/storage/buckets/elroi-gallery/IMG-20250623-WA0138.jpg",
    },
  },
  {
    type: "picture",
    content: {
      text: "",
      src: "https://supabase.com/dashboard/project/tuaaacbguivultdxbcmj/storage/buckets/elroi-gallery/IMG-20250623-WA0140.jpg",
    },
  },
  {
    type: "picture",
    content: {
      text: "",
      src: "https://supabase.com/dashboard/project/tuaaacbguivultdxbcmj/storage/buckets/elroi-gallery/IMG-20250623-WA0142.jpg",
    },
  },
  {
    type: "picture",
    content: {
      text: "",
      src: "https://supabase.com/dashboard/project/tuaaacbguivultdxbcmj/storage/buckets/elroi-gallery/IMG-20250623-WA0144.jpg",
    },
  },
  {
    type: "picture",
    content: {
      text: "",
      src: "https://supabase.com/dashboard/project/tuaaacbguivultdxbcmj/storage/buckets/elroi-gallery/IMG-20250623-WA0146.jpg",
    },
  },
  {
    type: "picture",
    content: {
      text: "",
      src: "https://supabase.com/dashboard/project/tuaaacbguivultdxbcmj/storage/buckets/elroi-gallery/IMG-20250623-WA0148.jpg",
    },
  },
  {
    type: "picture",
    content: {
      text: "",
      src: "https://supabase.com/dashboard/project/tuaaacbguivultdxbcmj/storage/buckets/elroi-gallery/IMG-20250623-WA0150.jpg",
    },
  },
  {
    type: "picture",
    content: {
      text: "",
      src: "https://supabase.com/dashboard/project/tuaaacbguivultdxbcmj/storage/buckets/elroi-gallery/IMG-20250623-WA0152.jpg",
    },
  },
  {
    type: "picture",
    content: {
      text: "",
      src: "https://supabase.com/dashboard/project/tuaaacbguivultdxbcmj/storage/buckets/elroi-gallery/IMG-20250623-WA0154.jpg",
    },
  },
  {
    type: "picture",
    content: {
      text: "",
      src: "https://supabase.com/dashboard/project/tuaaacbguivultdxbcmj/storage/buckets/elroi-gallery/IMG-20250623-WA0156.jpg",
    },
  },
  {
    type: "picture",
    content: {
      text: "",
      src: "https://supabase.com/dashboard/project/tuaaacbguivultdxbcmj/storage/buckets/elroi-gallery/IMG-20250623-WA0158.jpg",
    },
  },
  {
    type: "picture",
    content: {
      text: "",
      src: "https://supabase.com/dashboard/project/tuaaacbguivultdxbcmj/storage/buckets/elroi-gallery/IMG-20250623-WA0160.jpg",
    },
  },
  {
    type: "picture",
    content: {
      text: "",
      src: "https://supabase.com/dashboard/project/tuaaacbguivultdxbcmj/storage/buckets/elroi-gallery/IMG-20250623-WA0162.jpg",
    },
  },
  {
    type: "picture",
    content: {
      text: "",
      src: "https://supabase.com/dashboard/project/tuaaacbguivultdxbcmj/storage/buckets/elroi-gallery/IMG-20250623-WA0164.jpg",
    },
  },
  {
    type: "picture",
    content: {
      text: "",
      src: "https://supabase.com/dashboard/project/tuaaacbguivultdxbcmj/storage/buckets/elroi-gallery/IMG-20250623-WA0166.jpg",
    },
  },
  {
    type: "picture",
    content: {
      text: "",
      src: "https://supabase.com/dashboard/project/tuaaacbguivultdxbcmj/storage/buckets/elroi-gallery/IMG-20250623-WA0168.jpg",
    },
  },
  {
    type: "picture",
    content: {
      text: "",
      src: "https://supabase.com/dashboard/project/tuaaacbguivultdxbcmj/storage/buckets/elroi-gallery/IMG-20250623-WA0170.jpg",
    },
  },
  {
    type: "picture",
    content: {
      text: "",
      src: "https://supabase.com/dashboard/project/tuaaacbguivultdxbcmj/storage/buckets/elroi-gallery/IMG-20250623-WA0172.jpg",
    },
  },
  {
    type: "picture",
    content: {
      text: "",
      src: "https://supabase.com/dashboard/project/tuaaacbguivultdxbcmj/storage/buckets/elroi-gallery/IMG-20250628-WA0072.jpg",
    },
  },
  {
    type: "picture",
    content: {
      text: "",
      src: "https://supabase.com/dashboard/project/tuaaacbguivultdxbcmj/storage/buckets/elroi-gallery/IMG-20250628-WA0075.jpg",
    },
  },
  {
    type: "picture",
    content: {
      text: "",
      src: "https://supabase.com/dashboard/project/tuaaacbguivultdxbcmj/storage/buckets/elroi-gallery/IMG-20250628-WA0076.jpg",
    },
  },
  {
    type: "picture",
    content: {
      text: "",
      src: "https://supabase.com/dashboard/project/tuaaacbguivultdxbcmj/storage/buckets/elroi-gallery/IMG-20250628-WA0077(1).jpg",
    },
  },
  {
    type: "picture",
    content: {
      text: "",
      src: "https://supabase.com/dashboard/project/tuaaacbguivultdxbcmj/storage/buckets/elroi-gallery/IMG-20250628-WA0077(2).jpg",
    },
  },
  {
    type: "picture",
    content: {
      text: "",
      src: "https://supabase.com/dashboard/project/tuaaacbguivultdxbcmj/storage/buckets/elroi-gallery/IMG-20250628-WA0077.jpg",
    },
  },
  {
    type: "picture",
    content: {
      text: "",
      src: "https://supabase.com/dashboard/project/tuaaacbguivultdxbcmj/storage/buckets/elroi-gallery/IMG-20250628-WA0080.jpg",
    },
  },
  {
    type: "picture",
    content: {
      text: "",
      src: "https://supabase.com/dashboard/project/tuaaacbguivultdxbcmj/storage/buckets/elroi-gallery/IMG-20250628-WA0081.jpg",
    },
  },
  {
    type: "picture",
    content: {
      text: "",
      src: "https://supabase.com/dashboard/project/tuaaacbguivultdxbcmj/storage/buckets/elroi-gallery/IMG-20250628-WA0087.jpg",
    },
  },
  {
    type: "picture",
    content: {
      text: "",
      src: "https://supabase.com/dashboard/project/tuaaacbguivultdxbcmj/storage/buckets/elroi-gallery/IMG-20250628-WA0088.jpg",
    },
  },
  {
    type: "picture",
    content: {
      text: "",
      src: "https://supabase.com/dashboard/project/tuaaacbguivultdxbcmj/storage/buckets/elroi-gallery/IMG-20250628-WA0089.jpg",
    },
  },
  {
    type: "picture",
    content: {
      text: "",
      src: "https://supabase.com/dashboard/project/tuaaacbguivultdxbcmj/storage/buckets/elroi-gallery/IMG-20250707-WA0047.jpg",
    },
  },
  {
    type: "picture",
    content: {
      text: "",
      src: "https://supabase.com/dashboard/project/tuaaacbguivultdxbcmj/storage/buckets/elroi-gallery/IMG-20250709-WA0018(1).jpg",
    },
  },
  {
    type: "picture",
    content: {
      text: "",
      src: "https://supabase.com/dashboard/project/tuaaacbguivultdxbcmj/storage/buckets/elroi-gallery/IMG-20250709-WA0018.jpg",
    },
  },
  {
    type: "picture",
    content: {
      text: "",
      src: "https://supabase.com/dashboard/project/tuaaacbguivultdxbcmj/storage/buckets/elroi-gallery/Screenshot_20250703_193340_WhatsApp.jpg",
    },
  },
];


// Small dedicated component for each tile type
const TextTile: React.FC<{ text: string }> = ({ text }) => (
  <div className="tile overflow-hidden h-100 w-100">
    <p className="text-lg">{text}</p>
  </div>
);

const PictureTile: React.FC<{ src: string }> = ({ src }) => (
  <div
    className="tile overflow-hidden h-100 w-100"
    style={{
      backgroundImage: `url('${src}')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  />
);

const EmptyTile: React.FC = () => (
  <div className="tile overflow-hidden h-100 w-100" />
);

// Renderer function
const renderTile = (item: Tile, index: number) => {
  switch (item.type) {
    case "text":
      return <TextTile key={index} text={item.content.text} />;
    case "picture":
      return <PictureTile key={index} src={item.content.src} />;
    case "empty":
      return <EmptyTile key={index} />;
    default:
      return null;
  }
};

export default function Home() {
  return (
    <section className="my-16 md:my-32">
      <Container>
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
                Gallery
              </span>
            </h1>

        <div className="flex gap-4 flex-wrap justify-center">
          {tiles.map((item, index) => renderTile(item, index))}
        </div>
      </Container>
    </section>
  );
}