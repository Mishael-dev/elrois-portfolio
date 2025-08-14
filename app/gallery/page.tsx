import Image from "next/image";
import Container from "@/components/ui/container";
import { isPagesAPIRouteMatch } from "next/dist/server/route-matches/pages-api-route-match";

const tile = [
  {
    type: "picture",
    content: {
      text: "Strive not to be a success, but to be of value.",
      src: "https://tuaaacbguivultdxbcmj.supabase.co/storage/v1/object/public/image/demo.jpg",
    },
  },
  {
    type: "text",
    content: {
      text: "Believe you can and you're halfway there.",
      src: "https://tuaaacbguivultdxbcmj.supabase.co/storage/v1/object/public/image/demo.jpg",
    },
  },
  {
    type: "picture",
    content: {
      text: "Whatever you are, be a good one.",
      src: "https://tuaaacbguivultdxbcmj.supabase.co/storage/v1/object/public/image/demo.jpg",
    },
  },
  {
    type: "picture",
    content: {
      text: "The journey of a thousand miles begins with a single step.",
      src: "https://tuaaacbguivultdxbcmj.supabase.co/storage/v1/object/public/image/demo.jpg",
    },
  },
  {
    type: "picture",
    content: {
      text: "The journey of a thousand miles begins with a single step.",
      src: "https://tuaaacbguivultdxbcmj.supabase.co/storage/v1/object/public/image/demo.jpg",
    },
  },
  {
    type: "empty",
    content: {
      text: "The journey of a thousand miles begins with a single step.",
      src: "https://tuaaacbguivultdxbcmj.supabase.co/storage/v1/object/public/image/demo.jpg",
    },
  },
  {
    type: "picture",
    content: {
      text: "The journey of a thousand miles begins with a single step.",
      src: "https://tuaaacbguivultdxbcmj.supabase.co/storage/v1/object/public/image/demo.jpg",
    },
  },
];

console.log(tile);

export default function Home() {
  function renderText(item, index) {
    return (
      <div key={index} className="tile overflow-hidden h-100 w-100   ">
        <p className="text-lg">
          Lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
          voluptas, perspiciatis deserunt molestiae non labore perferendis
          sapiente esse corporis commodi! ipsum dolor sit amet consectetur
          adipisicing elit. Temporibus, voluptatem?
        </p>
      </div>
    );
  }

  function renderPicture(item, index) {
    return (
      <div
        key={index}
        className="tile overflow-hidden h-100 w-100"
        style={{
          backgroundImage: `url('${item.content.src}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
    );
  }
  function renderEmpty(item, index) {
    return <div key={index} className="tile overflow-hidden h-100 w-100"></div>;
  }
  return (
    <main>
      <Container>
        <h1 className="font-semibild text-3xl md:text-6xl my-10 md:my-20">
          Gallery
        </h1>

      

        <div className="flex gap-4 flex-wrap justify-center">
          {tile.map((item, index) =>
            item.type === "text"
              ? renderText(item, index)
              : item.type === "picture"
              ? renderPicture(item, index)
              : item.type === "empty"
              ? renderEmpty(item, index)
              : null
          )}
        </div>
      </Container>
    </main>
  );
}
