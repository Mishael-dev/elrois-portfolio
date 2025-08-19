import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
  Heart,
  ArrowRight,
} from "lucide-react";


export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
    { name: "Portfolio", href: "/Portfolio" },
  ];

  const services = [
    { name: "Custom Portraits", href: "#services" },
    { name: "Landscape Paintings", href: "#services" },
    { name: "Abstract Art", href: "#services" },
    { name: "Digital Art", href: "#services" },
    { name: "Interior Art Pieces", href: "#services" },
  ];

  const socialLinks = [
    { icon: Instagram, name: "Instagram", url: "https://www.instagram.com/1endazed/" },
    { icon: Mail, name: "Email", url: "mailto:stanleyelroi@gmail.com" },
    { icon: Twitter, name: "Twitter", url: "#" },
  ];

  return (
    <footer className="">
      {/* Newsletter Section */}
      <div className="border-b border-[#dac5a7]/10">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 py-16">
          <div className="text-center">
            <h3
              className="text-white text-2xl lg:text-3xl mb-4"
              style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 300 }}
            >
              Stay Connected
            </h3>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              Subscribe to my newsletter for updates on new artworks,
              exhibitions, and exclusive behind-the-scenes content.
            </p>
            <form
              action="https://formsubmit.co/stanleyelroi@gmail.com"
              method="POST"
            >
              <div className="flex flex-col sm:flex-row max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-[#1a1a1a] border border-[#dac5a7]/20 text-white placeholder:text-white/40 px-4 py-3 rounded-l-full sm:rounded-r-none rounded-r-full focus:border-[#dac5a7] focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-[#dac5a7] hover:bg-[#c9b595] text-[#1a1a1a] px-6 py-3 rounded-r-full sm:rounded-l-none rounded-l-full transition-all duration-300 flex items-center justify-center gap-2 mt-2 sm:mt-0"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-8 lg:px-16 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div
                className="text-white text-2xl tracking-wider mb-4"
                style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 300 }}
              >
                Elroi <span className="text-[#dac5a7]">John Stanley</span>
              </div>
              <p className="text-white/70 leading-relaxed">
                Creating meaningful art that captures emotion and tells stories
                through color, form, and texture. Based in Plateau State
                Nigeria.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-white/60 text-sm">
                <Mail className="w-4 h-4 mr-3 text-[#dac5a7]" />
                stanleyelroi@gmail.com
              </div>
              <div className="flex items-center text-white/60 text-sm">
                <Phone className="w-4 h-4 mr-3 text-[#dac5a7]" />
                +234 (814) 978 2106
              </div>
              <div className="flex items-center text-white/60 text-sm">
                <MapPin className="w-4 h-4 mr-3 text-[#dac5a7]" />
                Plateau State, NG
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="w-10 h-10 bg-[#1a1a1a] hover:bg-[#dac5a7] rounded-full flex items-center justify-center transition-all duration-300 hover:text-[#1a1a1a] text-[#dac5a7]"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-[#dac5a7] text-sm transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-white/60 hover:text-[#dac5a7] text-sm transition-colors duration-300"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Latest Work Preview */}
          <div>
            <h4 className="text-white text-lg mb-6">Recent Updates</h4>
            <div className="space-y-4">
              <div className="text-sm">
                <div className="text-[#dac5a7] mb-1">New Exhibition</div>
                <div className="text-white/60">
                  Contemporary Visions at Metropolitan Art Gallery - Opening
                  March 2024
                </div>
              </div>
              <div className="text-sm">
                <div className="text-[#dac5a7] mb-1">Commission Available</div>
                <div className="text-white/60">
                  Currently accepting new commission projects for Spring 2026
                </div>
              </div>
            
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#dac5a7]/10">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/60 text-sm mb-4 md:mb-0">
              © {currentYear} Elroi John Stanley Art. All rights reserved.
            </div>

            <div className="flex items-center space-x-6">
              <a
                href="#"
                className="text-white/60 hover:text-[#dac5a7] text-sm transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-[#dac5a7] text-sm transition-colors duration-300"
              >
                Terms of Service
              </a>
              <div className="flex items-center text-white/60 text-sm">
                Made with <Heart className="w-3 h-3 mx-1 text-[#dac5a7]" /> in
                Jos
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
