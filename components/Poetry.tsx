import { Quote, Heart, Feather } from "lucide-react";

export default function PoetrySection() {
  const poemLines = [
    "I still think about it—the past. . . the days of old but not so long ago.",
    "",
    "Those times when I wore my heart on my sleeve, letting people in, giving them access to trample on my vulnerability.",
    "",
    "",
    "I guess being true to oneself is a bad thing. Or maybe I was just stupid.",
    "",
    "I let them use and abuse, take and take until nothing was left.",
    "",
    "Always listening but never truly heard.",
    "",
    "",
    "Well, I don't blame them. I let them.",
    "",
    "I didn't wanna be an outcast, so I hid behind a smile.",
    "",
    "Being seen or heard felt like a dream.",
    "",
    "If you show too much, they'll see who you truly are.",
    "",
    "",
    "But I'm healed now. . . maybe.",
    "",
    "I don't care anymore. . . or I think I don't.",
    "",
    "Deep down, I want to be seen for who I truly am.",
    "",
    "",
    "But being fake has worked out fine.",
    "",
    "I kinda like this persona. Just fit into who they think you are—nobody cares anyway.",
    "",
    "",
    "OHH, whatever. Things will change eventually, right?",
    "",
    "It will get better. It's just all in my head.",
    "",
    "",
    "RIGHT?",
  ];

  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-8 lg:px-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-[#dac5a7] text-[13px] tracking-[2px] uppercase mb-4">
            Poetry
          </div>
          <h2
            className="text-white text-4xl lg:text-5xl mb-8 leading-tight"
            style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 300 }}
          >
            How
            <span
              className="text-[#dac5a7] italic"
              style={{ fontFamily: "serif" }}
            >
              {" "}
              Sunflowers {" "}
            </span>
            are made
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto leading-relaxed">
            This is a Poem I Wrote 🌸
          </p>
        </div>

        {/* Main Poetry Container */}
        <div className="relative">
          {/* Background decorative elements */}
          <div className="absolute -inset-8 bg-gradient-to-br from-[#dac5a7]/5 to-[#dac5a7]/2 rounded-3xl blur-3xl"></div>
          <div className="absolute -inset-4 bg-gradient-to-br from-[#dac5a7]/10 to-transparent rounded-2xl"></div>

          <div className="relative bg-gradient-to-br from-[#1a1a1a]/90 to-[#0a0a0a]/90 backdrop-blur-sm border border-[#dac5a7]/20 rounded-2xl p-8 lg:p-12">
            {/* Quote decoration */}
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 bg-[#dac5a7]/10 rounded-full flex items-center justify-center">
                <Quote className="w-8 h-8 text-[#dac5a7]" />
              </div>
            </div>

            {/* Poem Content */}
            <div className="space-y-1 mb-12">
              {poemLines.map((line, index) => (
                <div
                  key={index}
                  className={`${
                    line === ""
                      ? "h-4"
                      : "text-white/90 leading-relaxed text-lg lg:text-xl"
                  } text-center`}
                  style={{
                    fontFamily:
                      line.trim() === "" ? "inherit" : "Georgia, serif",
                    fontStyle: "italic",
                    letterSpacing: "0.02em",
                  }}
                >
                  {line}
                </div>
              ))}
            </div>

            {/* Author attribution */}
            <div className="text-center border-t border-[#dac5a7]/20 pt-8">
              <div className="flex items-center justify-center mb-4">
                <Feather className="w-5 h-5 text-[#dac5a7] mr-3" />
                <span className="text-[#dac5a7] tracking-wider">
                  Elroi John Stanley
                </span>
              </div>
              {/* <p className="text-white/60 text-sm italic">
                "Sometimes the heart speaks clearer through words than brushstrokes"
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
