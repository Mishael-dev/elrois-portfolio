import Image from "next/image";
import Container from "@/components/ui/container";

export default function Home() {
  return (
    <section className="my-24 md:my-32">
      <Container>
        <div className="flex flex-col md:flex-row gap-10 md:gap-20 justify-center ">
          <div className="">
            <Image
              src="https://tuaaacbguivultdxbcmj.supabase.co/storage/v1/object/public/elroi-gallery/IMG-20250628-WA0080.jpg"
              alt="Elroi John Stanley"
              width={300}
              height={300}
              className="rounded-lg"
            />
          </div>

          <div className="max-w-2xl mt-8 flex flex-col gap-4">
            <div>
              <h1
                className="text-white text-5xl lg:text-8xl mb-4 tracking-tight"
                style={{
                  fontFamily: "Satoshi, sans-serif",
                  fontWeight: 200,
                  lineHeight: "0.9",
                }}
              >
                Elroi
                <br />
                <span
                  className="text-[#dac5a7] italic"
                  style={{ fontFamily: "serif", fontWeight: 300 }}
                >
                  John Stanley
                </span>
              </h1>
            </div>
            <p className="text-white/70 max-w-2xl mx-auto leading-relaxed">
              I am a student of visual arts in my second year, I'm Soft-spoken
              soul painting quiet dreams Lover of pretty things ✨ poetry,
              fashion & classic novels Art that speaks when words fall short
            </p>
          </div>
        </div>

        {/* my story */}
        <div className="max-w-4xl text-justify mx-auto">
          <h2 className="text-3xl mt-16">My Story</h2>
          <p className="text-white/70 max-w-2xl mx-auto leading-relaxed">
            I am a second-year Visual Arts student, a soft-spoken soul who finds
            her loudest voice in colors, textures, and quiet moments. My love
            for art began in the small, unspoken details of life—sunlight
            slipping across a desk, the way a shadow bends, the warmth of a
            coffee cup between my palms. These fleeting moments taught me that
            beauty doesn’t always announce itself; sometimes, it whispers. I’m
            endlessly inspired by poetry, timeless fashion, and classic
            novels—their words and forms weaving into my creative process. Each
            painting or design I create carries a piece of a dream I once had, a
            memory I wanted to keep, or a feeling I couldn’t quite explain. For
            me, art is both a language and a mirror. It’s how I speak when words
            fall short, and how I see myself more clearly. I hope my work
            invites people to pause, breathe, and see the world a little
            differently—through softer eyes, through kinder colors. Every piece
            I make is a quiet conversation with the viewer, an offering of
            something gentle yet lasting. In a world that often rushes, I choose
            to create spaces—on canvas, on fabric, in thought—where beauty has
            time to bloom.
          </p>
        </div>
      </Container>
    </section>
  );
}
