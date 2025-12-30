import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Clock } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Comienza a Crecer{" "}
            <span className="text-gradient">Hoy Mismo</span>
          </h2>

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Únete a cientos de revendedores que ya optimizaron su negocio con PlotterPro.
            Regístrate gratis y obtén acceso inmediato a tarifas Nivel 1.
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
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
              <span>Consulta Pedidos 24/7</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl">
              Regístrate como Revendedor
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="xl">
              Contactar Ventas
            </Button>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            Sin compromisos • Acceso inmediato
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
