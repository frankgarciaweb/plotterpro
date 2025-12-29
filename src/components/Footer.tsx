import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-6 md:py-8 lg:py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 mb-6 md:mb-8 lg:mb-10">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-3 mb-6">
              <img 
                src="/img/plotter-pro-logo.png" 
                alt="Plotter Pro Logo" 
                className="h-8 md:h-10 w-auto object-contain max-w-[200px]"
              />
            </a>
            <p className="text-sm text-muted-foreground mb-6">
              Plataforma B2B para revendedores de impresión en gran formato. 
              Cotizaciones instantáneas y calidad profesional.
            </p>
            <div className="flex gap-3 md:gap-4">
              <a href="#" className="w-11 h-11 md:w-10 md:h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors min-h-[44px] min-w-[44px] md:min-h-0 md:min-w-0" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-11 h-11 md:w-10 md:h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors min-h-[44px] min-w-[44px] md:min-h-0 md:min-w-0" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-11 h-11 md:w-10 md:h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors min-h-[44px] min-w-[44px] md:min-h-0 md:min-w-0" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-11 h-11 md:w-10 md:h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors min-h-[44px] min-w-[44px] md:min-h-0 md:min-w-0" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-6">Navegación</h4>
            <ul className="space-y-2 md:space-y-3">
              {["Inicio", "Beneficios", "Cotizador", "Niveles", "Tecnología", "App"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors py-1 md:py-0 block min-h-[32px] md:min-h-0 flex items-center">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display font-semibold mb-6">Legal</h4>
            <ul className="space-y-2 md:space-y-3">
              {["Términos de Servicio", "Política de Privacidad", "Política de Cookies", "Aviso Legal"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors py-1 md:py-0 block min-h-[32px] md:min-h-0 flex items-center">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-5 h-5 text-primary" />
                <span>contacto@printpartner.mx</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="w-5 h-5 text-primary" />
                <span>+52 (55) 1234-5678</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>Av. Revolución 123, Col. San Ángel, CDMX 01000</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} PrintPartner. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-muted-foreground">Tecnologías compatibles:</span>
            <div className="flex gap-4 text-xs text-muted-foreground">
              <span className="px-2 py-1 rounded bg-muted">Látex</span>
              <span className="px-2 py-1 rounded bg-muted">UV</span>
              <span className="px-2 py-1 rounded bg-muted">Ecosolvente</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
