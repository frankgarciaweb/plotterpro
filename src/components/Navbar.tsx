import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Printer } from "lucide-react";

const navLinks = [
  { href: "#beneficios", label: "Beneficios" },
  { href: "#cotizador", label: "Cotizador" },
  { href: "#preflight", label: "Preflight" },
  { href: "#niveles", label: "Niveles" },
  { href: "#tecnologia", label: "Tecnología" },
  { href: "#app", label: "App" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-xl border-b border-border" : ""
        }`}
    >
      <nav className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <img
            src="/img/plotter-pro-logo.png"
            alt="PlotterPro"
            className="h-8 md:h-10 w-auto object-contain"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <Button variant="ghost" size="sm">
            Iniciar Sesión
          </Button>
          <Button variant="default" size="sm">
            Registrarse
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 right-0 bg-background border-b border-border p-4">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 pt-4 border-t border-border">
              <Button variant="ghost" className="w-full justify-center">
                Iniciar Sesión
              </Button>
              <Button variant="default" className="w-full justify-center">
                Registrarse
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
