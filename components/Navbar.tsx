"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0a]/95 backdrop-blur-lg border-b border-[#dac5a7]/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-white tracking-wider">
              <span
                className="text-2xl"
                style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 300 }}
              >
                Elroi
              </span>
              {/* <span className="text-[#dac5a7] ml-2">John Stanley</span> */}
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white/70 hover:text-[#dac5a7] transition-colors duration-300 text-sm tracking-wide uppercase"
              >
                {item.name}
              </a>
            ))}
            <Button className="bg-[#dac5a7] hover:bg-[#c9b595] text-[#1a1a1a] px-6 py-2 rounded-full text-sm">
              Let&apos;s Talk
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#dac5a7] hover:text-white transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-[#0a0a0a]/95 backdrop-blur-lg border-b border-[#dac5a7]/10">
            <div className="px-8 py-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-white/70 hover:text-[#dac5a7] transition-colors text-sm tracking-wide uppercase"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button className="bg-[#dac5a7] hover:bg-[#c9b595] text-[#1a1a1a] px-6 py-2 rounded-full text-sm w-full mt-4">
                Let&apos;s Talk
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
