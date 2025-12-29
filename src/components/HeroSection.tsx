import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, TrendingUp } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-8 md:pb-12 lg:pb-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-primary/10 border border-primary/20 mb-4 md:mb-6 lg:mb-8 animate-fade-in">
            <Zap className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
            <span className="text-xs md:text-sm font-medium text-primary">Plataforma B2B para Revendedores</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 lg:mb-6 animate-slide-up leading-tight">
            Impulsa tu Negocio de{" "}
            <span className="text-gradient">Gigantografía</span>
          </h1>

          <p className="text-base md:text-lg lg:text-xl text-muted-foreground mb-4 md:mb-6 lg:mb-8 max-w-2xl mx-auto animate-slide-up px-2" style={{ animationDelay: "0.1s" }}>
            Calidad profesional sin invertir en maquinaria. Cotizaciones instantáneas, 
            validación técnica en tiempo real y precios preferenciales por volumen.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-4 md:mb-6 lg:mb-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Button variant="hero" size="xl" className="min-h-[44px] md:min-h-[48px] text-sm md:text-base">
              Regístrate como Revendedor
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </Button>
            <Button variant="outline" size="xl" className="min-h-[44px] md:min-h-[48px] text-sm md:text-base">
              Ver Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-2 md:gap-4 lg:gap-6 max-w-xl mx-auto animate-slide-up mb-4 md:mb-0" style={{ animationDelay: "0.3s" }}>
            <div className="text-center">
              <div className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-gradient">60s</div>
              <div className="text-xs md:text-sm text-muted-foreground">Cotización Instantánea</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-gradient">0%</div>
              <div className="text-xs md:text-sm text-muted-foreground">Errores de Impresión</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-gradient">24/7</div>
              <div className="text-xs md:text-sm text-muted-foreground">Soporte Técnico</div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 lg:gap-6 mt-4 md:mt-6 lg:mt-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <div className="flex items-center gap-1.5 md:gap-2 text-muted-foreground">
            <Shield className="w-4 h-4 md:w-5 md:h-5 text-success" />
            <span className="text-xs md:text-sm">Validación Preflight</span>
          </div>
          <div className="flex items-center gap-1.5 md:gap-2 text-muted-foreground">
            <TrendingUp className="w-4 h-4 md:w-5 md:h-5 text-primary" />
            <span className="text-xs md:text-sm">Programa de Lealtad</span>
          </div>
          <div className="flex items-center gap-1.5 md:gap-2 text-muted-foreground">
            <Zap className="w-4 h-4 md:w-5 md:h-5 text-warning" />
            <span className="text-xs md:text-sm">Tecnología Látex & UV</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
