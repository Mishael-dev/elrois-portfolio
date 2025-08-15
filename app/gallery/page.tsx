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
      src: "https://tuaaacbguivultdxbcmj.supabase.co/storage/v1/object/public/elroi-gallery/IMG-20250623-WA0158.jpg",
    },
  },
  {
    type: "picture",
    content: {
      text: "",
      src: "https://tuaaacbguivultdxbcmj.supabase.co/storage/v1/object/public/elroi-gallery/IMG-20250628-WA0072.jpg",
    },
  },
  {
    type: "picture",
    content: {
      text: "",
      src: "https://tuaaacbguivultdxbcmj.supabase.co/storage/v1/object/public/elroi-gallery/IMG-20250628-WA0075.jpg",
    },
  },
  {
    type: "picture",
    content: {
      text: "",
      src: "https://tuaaacbguivultdxbcmj.supabase.co/storage/v1/object/public/elroi-gallery/IMG-20250628-WA0076.jpg",
    },
  },
  {
    type: "picture",
    content: {
      text: "",
      src: "https://tuaaacbguivultdxbcmj.supabase.co/storage/v1/object/public/elroi-gallery/IMG-20250628-WA0077.jpg",
    },
  },
  {
    type: "picture",
    content: {
      text: "",
      src: "https://tuaaacbguivultdxbcmj.supabase.co/storage/v1/object/public/elroi-gallery/IMG-20250628-WA0080.jpg",
    },
  },
  {
    type: "picture",
    content: {
      text: "",
      src: "https://tuaaacbguivultdxbcmj.supabase.co/storage/v1/object/public/elroi-gallery/IMG-20250628-WA0087.jpg",
    },
  },
  {
    type: "picture",
    content: {
      text: "",
      src: "https://tuaaacbguivultdxbcmj.supabase.co/storage/v1/object/public/elroi-gallery/IMG-20250628-WA0089.jpg",
    },
  },
  {
    type: "picture",
    content: {
      text: "",
      src: "https://tuaaacbguivultdxbcmj.supabase.co/storage/v1/object/public/elroi-gallery/Screenshot_20250703_193340_WhatsApp.jpg",
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
        <h1 className=" text-3xl md:text-6xl my-10 md:my-20 italics">Gallery</h1>

        <div className="flex gap-4 flex-wrap justify-center">
          {tiles.map((item, index) => renderTile(item, index))}
        </div>
      </Container>
    </section>
  );
}