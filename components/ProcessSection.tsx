import Image from "next/image";
import { Lightbulb, PenTool, Paintbrush, CheckCircle } from "lucide-react";

export default function ProcessSection() {
  const processSteps = [
    {
      icon: Lightbulb,
      title: "Inspiration",
      description:
        "Every piece begins with a spark of inspiration, whether from nature, emotion, or a client's vision.",
      image:
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=400&fit=crop",
    },
    {
      icon: PenTool,
      title: "Conceptualization",
      description:
        "Ideas are translated into preliminary sketches, exploring composition, lighting, and mood.",
      image:
        "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600&h=400&fit=crop",
    },
    {
      icon: Paintbrush,
      title: "Creation",
      description:
        "The artwork comes to life through careful application of technique, color, and artistic vision.",
      image:
        "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600&h=400&fit=crop",
    },
    {
      icon: CheckCircle,
      title: "Refinement",
      description:
        "Final touches and refinements ensure each piece meets the highest standards of artistic excellence.",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
    },
  ];

  const techniques = [
    {
      name: "Layering Technique",
      description:
        "Building depth through multiple transparent layers of paint, creating luminosity and complexity.",
    },
    {
      name: "Color Harmony",
      description:
        "Carefully balanced color palettes that evoke specific emotions and create visual cohesion.",
    },
    {
      name: "Light Studies",
      description:
        "Understanding how light interacts with subjects to create mood and dimensional depth.",
    },
    {
      name: "Texture Innovation",
      description:
        "Experimenting with various tools and techniques to achieve unique surface textures.",
    },
  ];

  return (
    <section id="process" className="py-24 ">
      <div className="w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-[#dac5a7] text-[13px] tracking-[2px] uppercase mb-4">
            Creative Process
          </div>
          <h2
            className="text-white text-4xl lg:text-5xl mb-8 leading-tight"
            style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 300 }}
          >
            From Vision to
            <span
              className="text-[#dac5a7] italic"
              style={{ fontFamily: "serif" }}
            >
              {" "}
              Reality
            </span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto leading-relaxed">
            Discover the journey behind each artwork, from my initial
            inspiration to the final brushstroke.
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-24 mb-24">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
              } gap-12 lg:gap-16 items-center`}
            >
              {/* Content */}
              <div className="lg:w-1/2">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#dac5a7]/10 rounded-xl flex items-center justify-center mr-4">
                    <step.icon className="w-6 h-6 text-[#dac5a7]" />
                  </div>
                  <div className="text-[#dac5a7]/60 text-sm">
                    Step {(index + 1).toString().padStart(2, "0")}
                  </div>
                </div>

                <h3 className="text-white text-2xl lg:text-3xl mb-6">
                  {step.title}
                </h3>
                <p className="text-white/70 leading-relaxed text-lg">
                  {step.description}
                </p>
              </div>

              <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#dac5a7]/10 to-[#dac5a7]/5 rounded-2xl blur-xl"></div>
                <div className="relative rounded-xl overflow-hidden border border-[#dac5a7]/20">
                  <Image
                    src={step.image}
                    alt={step.title}
                    className="w-full h-80 object-cover"
                    width={500}
                    height={500}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/30 via-transparent to-transparent"></div>
                </div>
              </div>

              {/* Image */}
              {/* <div className="lg:w-1/2">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-br from-[#dac5a7]/10 to-[#dac5a7]/5 rounded-2xl blur-xl"></div>
                  <div className="relative rounded-xl overflow-hidden border border-[#dac5a7]/20">
                    <Image
                      src={step.image}
                      alt={step.title}
                      className="w-full h-80 object-cover"
                      width={500}
                      height={500}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/30 via-transparent to-transparent"></div>
                  </div>
                </div>
              </div> */}
            </div>
          ))}
        </div>

        {/* Techniques Section */}
        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] rounded-2xl p-8 lg:p-12 border border-[#dac5a7]/10">
          <div className="text-center mb-12">
            <h3 className="text-white text-2xl lg:text-3xl mb-4">
              Artistic Techniques
            </h3>
            <p className="text-white/70">
              The methods and approaches that define my artistic style
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {techniques.map((technique, index) => (
              <div key={index} className="group">
                <div className="flex items-start space-x-4 p-6 rounded-xl bg-[#dac5a7]/5 border border-[#dac5a7]/10 transition-all duration-300 hover:border-[#dac5a7]/20 hover:bg-[#dac5a7]/10">
                  <div className="w-2 h-2 bg-[#dac5a7] rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-white text-lg mb-2">
                      {technique.name}
                    </h4>
                    <p className="text-white/60 leading-relaxed">
                      {technique.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
