import { Check, Star, Crown, Gem, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const levels = [
  {
    name: "Bronce",
    icon: Star,
    color: "from-amber-700 to-amber-900",
    borderColor: "border-amber-700/30",
    volume: "0 - 99 m²",
    discount: "0%",
    benefits: [
      "Acceso a cotizador instantáneo",
      "Validación Preflight básica",
      "Soporte por email",
    ],
  },
  {
    name: "Plata",
    icon: Star,
    color: "from-slate-400 to-slate-600",
    borderColor: "border-slate-400/30",
    volume: "100 - 499 m²",
    discount: "5%",
    benefits: [
      "Todo lo de Bronce",
      "Descuento 5% en todos los materiales",
      "Perfiles ICC personalizados",
      "Prioridad en producción",
    ],
  },
  {
    name: "Oro",
    icon: Crown,
    color: "from-yellow-500 to-amber-600",
    borderColor: "border-yellow-500/30",
    featured: true,
    volume: "500 - 999 m²",
    discount: "10%",
    benefits: [
      "Todo lo de Plata",
      "Descuento 10% adicional",
      "Soporte telefónico prioritario",
      "Crédito a 15 días",
      "Consultoría técnica mensual",
    ],
  },
  {
    name: "Platino",
    icon: Gem,
    color: "from-cyan-400 to-blue-600",
    borderColor: "border-cyan-400/30",
    volume: "1000+ m²",
    discount: "15%",
    benefits: [
      "Todo lo de Oro",
      "Descuento 15% adicional",
      "Soporte 24/7 dedicado",
      "Crédito a 30 días",
      "Gestor de cuenta personal",
      "Envíos express gratuitos",
    ],
  },
];

const LevelsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="niveles">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-warning/10 border border-warning/20 mb-6">
            <TrendingUp className="w-4 h-4 text-warning" />
            <span className="text-sm font-medium text-warning">Programa de Fidelidad</span>
          </div>

          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Gana Mientras <span className="text-gradient">Imprimes</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A mayor volumen anual, menores precios unitarios y más beneficios exclusivos. 
            Acumula puntos por cada m² facturado.
          </p>
        </div>

        {/* Levels Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {levels.map((level, index) => (
            <div
              key={index}
              className={`relative p-6 rounded-2xl bg-card border ${level.borderColor} ${
                level.featured ? "ring-2 ring-yellow-500/50 scale-105 z-10" : ""
              } transition-all duration-300 hover:-translate-y-2`}
            >
              {level.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-yellow-500 to-amber-600 text-xs font-semibold text-primary-foreground">
                  Más Popular
                </div>
              )}

              {/* Header */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${level.color} flex items-center justify-center mb-4`}>
                <level.icon className="w-7 h-7 text-foreground" />
              </div>

              <h3 className="font-display text-xl font-bold mb-1">{level.name}</h3>
              <div className="text-sm text-muted-foreground mb-4">{level.volume} / año</div>

              {/* Discount */}
              <div className="p-3 rounded-xl bg-muted/50 mb-6">
                <div className="text-2xl font-display font-bold text-gradient">{level.discount}</div>
                <div className="text-xs text-muted-foreground">Descuento base</div>
              </div>

              {/* Benefits */}
              <ul className="space-y-3 mb-6">
                {level.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-success shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={level.featured ? "hero" : "outline"}
                size="sm"
                className="w-full"
              >
                {level.featured ? "Comenzar Ahora" : "Ver Detalles"}
              </Button>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 border border-primary/20 text-center">
          <p className="text-lg mb-4">
            <span className="text-primary font-semibold">¡Compra 5 m² más</span> y alcanza el siguiente nivel de descuento!
          </p>
          <Button variant="hero" size="lg">
            Calcular mi Volumen Anual
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LevelsSection;
