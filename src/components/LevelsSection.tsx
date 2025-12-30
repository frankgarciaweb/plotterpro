import { Check, Star, Crown, Gem, TrendingUp, Hand } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

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
    <section className="py-8 md:py-12 lg:py-16 relative overflow-hidden" id="niveles">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-6 md:mb-8 lg:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-warning/10 border border-warning/20 mb-3 md:mb-4 lg:mb-6">
            <TrendingUp className="w-3.5 h-3.5 md:w-4 md:h-4 text-warning" />
            <span className="text-xs md:text-sm font-medium text-warning">Programa de Fidelidad</span>
          </div>

          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-2 md:mb-3 lg:mb-4">
            Gana Mientras <span className="text-gradient">Imprimes</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto px-2">
            A mayor volumen anual, menores precios unitarios y más beneficios exclusivos.
            Acumula puntos por cada m² facturado.
          </p>
        </div>

        {/* Levels Grid/Carousel */}
        <Carousel className="w-full max-w-xs mx-auto md:max-w-none" opts={{ align: "center", startIndex: 2 }}>
          <CarouselContent className="-ml-4 py-12">
            {levels.map((level, index) => (
              <CarouselItem key={index} className="pl-4 basis-[85%] md:basis-1/2 lg:basis-1/4">
                <div
                  className={`relative p-3 md:p-4 lg:p-6 rounded-xl md:rounded-2xl bg-card border ${level.borderColor} ${level.featured ? "ring-2 ring-yellow-500/50 md:scale-105 z-10" : ""
                    } transition-all duration-300 hover:-translate-y-1 md:hover:-translate-y-2 h-full`}
                >
                  {level.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-yellow-500 to-amber-600 text-xs font-semibold text-primary-foreground">
                      Más Popular
                    </div>
                  )}

                  {/* Header */}
                  <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${level.color} flex items-center justify-center mb-3 md:mb-4`}>
                    <level.icon className="w-6 h-6 md:w-7 md:h-7 text-foreground" />
                  </div>

                  <h3 className="font-display text-lg md:text-xl font-bold mb-1">{level.name}</h3>
                  <div className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">{level.volume} / año</div>

                  {/* Discount */}
                  <div className="p-2.5 md:p-3 rounded-lg md:rounded-xl bg-muted/50 mb-4 md:mb-5 lg:mb-6">
                    <div className="text-xl md:text-2xl font-display font-bold text-gradient">{level.discount}</div>
                    <div className="text-[10px] md:text-xs text-muted-foreground">Descuento base</div>
                  </div>

                  {/* Benefits */}
                  <ul className="space-y-2 md:space-y-2.5 lg:space-y-3 mb-4 md:mb-5 lg:mb-6">
                    {level.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-1.5 md:gap-2 text-xs md:text-sm">
                        <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-success shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant={level.featured ? "hero" : "outline"}
                    size="sm"
                    className="w-full min-h-[44px] mt-auto"
                  >
                    {level.featured ? "Comenzar Ahora" : "Ver Detalles"}
                  </Button>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Mobile Swipe Indicator */}
          <div className="flex justify-center mt-4 md:hidden">
            <Hand className="w-6 h-6 text-muted-foreground animate-swipe-hand" />
          </div>
        </Carousel>

        {/* CTA */}
        <div className="mt-6 md:mt-8 lg:mt-12 p-4 md:p-5 lg:p-6 rounded-xl md:rounded-2xl bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 border border-primary/20 text-center">
          <p className="text-sm md:text-base lg:text-lg mb-3 md:mb-4">
            <span className="text-primary font-semibold">¡Compra 5 m² más</span> y alcanza el siguiente nivel de descuento!
          </p>
          <Button variant="hero" size="lg" className="min-h-[44px] md:min-h-[48px] text-sm md:text-base">
            Calcular mi Volumen Anual
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LevelsSection;
