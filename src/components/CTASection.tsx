import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Clock } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-8 md:py-12 lg:py-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 lg:mb-6">
            Comienza a Crecer{" "}
            <span className="text-gradient">Hoy Mismo</span>
          </h2>

          <p className="text-sm md:text-base lg:text-lg text-muted-foreground mb-4 md:mb-6 lg:mb-8 max-w-2xl mx-auto px-2">
            Únete a cientos de revendedores que ya optimizaron su negocio con PrintPartner. 
            Regístrate gratis y obtén acceso inmediato a tarifas Nivel 1.
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 lg:gap-6 mb-6 md:mb-8 lg:mb-10">
            <div className="flex items-center gap-2 text-sm">
              <div className="w-8 h-8 rounded-full bg-success/20 flex items-center justify-center">
                <Zap className="w-4 h-4 text-success" />
              </div>
              <span>Cotización en 60 segundos</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <Shield className="w-4 h-4 text-primary" />
              </div>
              <span>Validación automática</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-8 h-8 rounded-full bg-warning/20 flex items-center justify-center">
                <Clock className="w-4 h-4 text-warning" />
              </div>
              <span>Soporte 24/7</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Button variant="hero" size="xl" className="min-h-[44px] md:min-h-[48px] text-sm md:text-base">
              Regístrate como Revendedor
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </Button>
            <Button variant="outline" size="xl" className="min-h-[44px] md:min-h-[48px] text-sm md:text-base">
              Contactar Ventas
            </Button>
          </div>

          <p className="mt-4 md:mt-6 text-xs md:text-sm text-muted-foreground">
            Sin compromisos • Registro gratuito • Acceso inmediato
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
