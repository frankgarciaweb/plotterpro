import { Calculator, ShieldCheck, Award, Clock, FileCheck, Coins } from "lucide-react";

const benefits = [
  {
    icon: Calculator,
    title: "Cotizador Instantáneo IQE",
    description: "Obtén tu presupuesto por m² en menos de 60 segundos. Solo ingresa material, dimensiones y cantidad.",
    highlight: "60 segundos",
  },
  {
    icon: ShieldCheck,
    title: "Preflight Dinámico",
    description: "Nuestro sistema detecta baja resolución, falta de sangrado o perfiles de color incorrectos antes de que pagues.",
    highlight: "Cero errores",
  },
  {
    icon: Award,
    title: "Programa PrintPartner",
    description: "Acumula puntos por cada m² facturado y canjéalos por descuentos, cashback o beneficios exclusivos.",
    highlight: "Recompensas",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-24 relative" id="beneficios">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Digitaliza tu <span className="text-gradient">Negociación</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Olvídate de esperar horas por una cotización manual. Nuestra plataforma 
            valida técnicamente cada archivo en tiempo real.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl glass-card hover:border-primary/50 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 shadow-button group-hover:shadow-glow transition-all duration-300">
                <benefit.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground mb-4">{benefit.description}</p>

              {/* Highlight Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-medium text-primary">{benefit.highlight}</span>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Problems Section */}
        <div className="mt-20 p-8 rounded-2xl bg-card border border-border">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-full bg-destructive/10 border border-destructive/20 flex items-center justify-center mx-auto">
                <Clock className="w-6 h-6 text-destructive" />
              </div>
              <p className="text-muted-foreground">
                ¿Esperas horas por una cotización manual mientras tu cliente se impacienta?
              </p>
            </div>
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-full bg-warning/10 border border-warning/20 flex items-center justify-center mx-auto">
                <FileCheck className="w-6 h-6 text-warning" />
              </div>
              <p className="text-muted-foreground">
                ¿Cansado de perder dinero por archivos mal procesados o colores que no coinciden?
              </p>
            </div>
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-full bg-success/10 border border-success/20 flex items-center justify-center mx-auto">
                <Coins className="w-6 h-6 text-success" />
              </div>
              <p className="text-muted-foreground">
                Nuestra solución: Digitalizamos la negociación y validamos técnicamente cada archivo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
