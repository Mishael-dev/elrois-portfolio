import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowDown, Palette, Award } from "lucide-react";

export default function PortfolioHero() {
  return (
    <div className="relative min-h-screen ">
      {/* Artistic background elements */}
      <div className="absolute inset-0">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center_top,rgba(218,197,167,0.04),transparent_60%)]"></div>

        {/* Floating decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#dac5a7]/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-[#dac5a7]/30 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-2/3 left-1/6 w-3 h-3 bg-[#dac5a7]/10 rounded-full animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-8 lg:px-16 pt-28 pb-16">
        <div className="grid lg:grid-cols-12 gap-16 items-center min-h-[calc(100vh-8rem)]">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-7 space-y-12">
            {/* Artist Title & Specialty */}
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-3 px-4 py-2 bg-[#dac5a7]/10 border border-[#dac5a7]/20 rounded-full">
                <Palette className="w-4 h-4 text-[#dac5a7]" />
                <span className="text-[#dac5a7] text-sm tracking-wider uppercase">
                  Artist
                </span>
              </div>

              <div>
                <h1
                  className="text-white text-6xl lg:text-8xl mb-4 tracking-tight"
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

                <div className="flex items-center space-x-6 text-white/60 text-lg">
                  <span>Fine Arts</span>
                  <div className="w-1 h-1 bg-[#dac5a7] rounded-full"></div>
                  <span>Digital Media</span>
                  <div className="w-1 h-1 bg-[#dac5a7] rounded-full"></div>
                  <span>Mixed Media</span>
                </div>
              </div>
            </div>

            {/* Artist Statement */}
            <div className="max-w-2xl">
              <blockquote
                className="text-white/80 text-xl lg:text-2xl leading-relaxed"
                style={{ fontFamily: "Georgia, serif", fontStyle: "italic" }}
              >
                Soft-spoken soul painting quiet dreams Lover of pretty things ✨
                poetry, fashion & classic novels{" "}
                <span className="text-[#dac5a7]"> Art that speaks</span> when
                words fall short
              </blockquote>
            </div>

            {/* Stats & Achievements */}
            <div className="grid grid-cols-3 gap-8 py-8 border-t border-b border-[#dac5a7]/10">
              <div className="text-center lg:text-left">
                <div
                  className="text-[#dac5a7] text-3xl lg:text-4xl mb-2"
                  style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 300 }}
                >
                  15+
                </div>
                <div className="text-white/60 text-sm uppercase tracking-wide">
                  Exhibitions
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div
                  className="text-[#dac5a7] text-3xl lg:text-4xl mb-2"
                  style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 300 }}
                >
                  1+
                </div>
                <div className="text-white/60 text-sm uppercase tracking-wide">
                  Works Created
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div
                  className="text-[#dac5a7] text-3xl lg:text-4xl mb-2"
                  style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 300 }}
                >
                  0
                </div>
                <div className="text-white/60 text-sm uppercase tracking-wide">
                  Awards
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-6">
              <Button
                size="lg"
                className="bg-[#dac5a7] hover:bg-[#c9b595] text-[#1a1a1a] px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-[#dac5a7]/20 hover:shadow-[#dac5a7]/30"
              >
                Explore My Gallery
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[#dac5a7]/50 text-[#dac5a7] hover:bg-[#dac5a7]/10 hover:border-[#dac5a7] px-8 py-4 rounded-full transition-all duration-300"
              >
                Learn More About Me
              </Button>
            </div>
          </div>

          {/* Right Column - Artist Portrait */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Background art frame */}
              <div className="absolute -inset-8 bg-gradient-to-br from-[#dac5a7]/15 via-[#dac5a7]/5 to-transparent rounded-3xl blur-2xl"></div>
              <div className="absolute -inset-4 border border-[#dac5a7]/10 rounded-2xl transform rotate-3"></div>
              <div className="absolute -inset-2 border border-[#dac5a7]/20 rounded-xl transform -rotate-1"></div>

              {/* Main portrait container */}
              <div className="relative w-80 h-96 lg:w-96 lg:h-[500px] rounded-2xl overflow-hidden border-2 border-[#dac5a7]/30 shadow-2xl shadow-[#000000]/50">
                <Image
                  src="https://tuaaacbguivultdxbcmj.supabase.co/storage/v1/object/public/elroi-gallery/IMG-20250628-WA0080.jpg"
                  alt="Sarah Johnson - Visual Artist"
                  className="w-full h-full object-cover"
                  width={500}
                  height={500}
                />

                {/* Artistic overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/40 via-transparent to-transparent"></div>

                {/* Artist signature/watermark */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-[#0a0a0a]/80 backdrop-blur-sm border border-[#dac5a7]/20 rounded-lg p-4">
                    <div className="text-white text-sm mb-1">
                      Elroi
                    </div>
                    <div className="text-[#dac5a7] text-xs">
                      @ LIMCAF 2025
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating award badge */}
              <div className="absolute -top-4 -right-4 bg-[#dac5a7] text-[#1a1a1a] p-3 rounded-full shadow-lg">
                <Award className="w-5 h-5" />
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-[#dac5a7]/20 rounded-full blur-lg animate-pulse"></div>
              <div className="absolute top-1/4 -left-8 w-6 h-6 bg-[#dac5a7]/10 rounded-full blur-md animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <div className="text-[#dac5a7]/70 text-sm mb-2 tracking-wide">
            Discover More
          </div>
          <ArrowDown className="w-5 h-5 text-[#dac5a7]/70" />
        </div>
      </div>

      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23dac5a7' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>
    </div>
  );
}
