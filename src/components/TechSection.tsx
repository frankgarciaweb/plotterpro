import { Droplets, Palette, FileCheck, Layers, Printer, Award, Zap, Eye, Hand } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const equipmentFeatures = [
  {
    icon: Printer,
    title: "Plotters Roland & Mimaki",
    description: "Equipos japoneses de gama profesional que garantizan precisión milimétrica y colores vibrantes.",
  },
  {
    icon: Droplets,
    title: "Tintas Ecosolvente Originales",
    description: "Usamos únicamente tintas originales certificadas para máxima durabilidad y fidelidad de color.",
  },
  {
    icon: Eye,
    title: "Sin Olores",
    description: "Nuestras tintas ecosolventes son prácticamente inodoras, ideales para uso en interiores.",
  },
  {
    icon: Zap,
    title: "Mayor Resolución",
    description: "Hasta 1440 dpi de resolución real, muy superior a los plotters genéricos del mercado.",
  },
];

const colorFeatures = [
  {
    icon: Palette,
    title: "Perfiles ICC",
    description: "Descarga perfiles de color específicos para cada material y tipo de impresión.",
  },
  {
    icon: FileCheck,
    title: "Soft-Proofing",
    description: "Simula el resultado final en tu pantalla antes de enviar a producción.",
  },
  {
    icon: Layers,
    title: "CMYK FOGRA39",
    description: "Conversión automática de RGB a perfil industrial estándar.",
  },
];

const TechSection = () => {
  return (
    <section className="py-8 md:py-12 lg:py-16 relative" id="tecnologia">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-6 md:mb-8 lg:mb-12">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-2 md:mb-3 lg:mb-4">
            Tecnología de <span className="text-gradient">Impresión</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto px-2">
            Contamos con equipos de última generación para garantizar la máxima calidad en cada trabajo.
          </p>
        </div>

        {/* Equipment & Quality Section */}
        <div className="p-4 md:p-5 lg:p-6 rounded-xl md:rounded-2xl glass-card border-primary/20 mb-6 md:mb-8 lg:mb-12">
          <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6 lg:mb-8">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Award className="w-5 h-5 md:w-6 md:h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-display text-lg md:text-xl font-semibold">Equipos Premium</h3>
              <p className="text-xs md:text-sm text-muted-foreground">Tecnología japonesa de clase mundial</p>
            </div>
          </div>

          <Carousel className="w-full max-w-xs mx-auto md:max-w-none" opts={{ align: "start" }}>
            <CarouselContent className="-ml-4">
              {equipmentFeatures.map((feature, index) => (
                <CarouselItem key={index} className="pl-4 basis-[85%] md:basis-1/2 lg:basis-1/4">
                  <div
                    className="p-4 md:p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 group h-full"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Mobile Swipe Indicator */}
            <div className="flex justify-center mt-4 md:hidden">
              <Hand className="w-6 h-6 text-muted-foreground animate-swipe-hand" />
            </div>
          </Carousel>

          {/* Brand logos visual */}
          <div className="mt-4 md:mt-6 lg:mt-8 pt-4 md:pt-6 lg:pt-8 border-t border-border">
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 lg:gap-8">
              <div className="flex items-center gap-2 px-6 py-3 rounded-xl bg-muted/50">
                <span className="font-display text-xl font-bold text-foreground">Roland</span>
                <span className="text-xs text-muted-foreground">DG</span>
              </div>
              <div className="flex items-center gap-2 px-6 py-3 rounded-xl bg-muted/50">
                <span className="font-display text-xl font-bold text-foreground">MIMAKI</span>
              </div>
              <div className="px-4 py-2 rounded-lg bg-success/10 border border-success/20">
                <span className="text-sm text-success font-medium">✓ Tintas 100% Originales</span>
              </div>
            </div>
          </div>
        </div>

        {/* Ecosolvente highlight */}
        <div className="p-4 md:p-5 lg:p-6 rounded-xl md:rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 mb-6 md:mb-8 lg:mb-12">
          <div className="grid lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8 items-center">
            <div>
              <div className="inline-block px-2.5 py-1 md:px-3 md:py-1 rounded-full bg-primary/10 text-primary text-[10px] md:text-xs font-medium mb-3 md:mb-4">
                Tecnología Ecosolvente
              </div>
              <h3 className="font-display text-xl md:text-2xl font-bold mb-2 md:mb-3 lg:mb-4">
                La Mejor Relación <span className="text-gradient">Calidad-Precio</span>
              </h3>
              <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-5 lg:mb-6">
                Nuestras impresiones ecosolventes ofrecen durabilidad excepcional tanto en interiores como exteriores.
                Resistentes a UV, agua y rayones, con una vida útil de hasta 5 años en exteriores.
              </p>
              <ul className="space-y-2 md:space-y-2.5 lg:space-y-3">
                <li className="flex items-center gap-3 text-sm">
                  <span className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center">
                    <span className="text-success text-xs">✓</span>
                  </span>
                  Resistente a rayos UV y agua
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <span className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center">
                    <span className="text-success text-xs">✓</span>
                  </span>
                  Colores vibrantes y duraderos
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <span className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center">
                    <span className="text-success text-xs">✓</span>
                  </span>
                  Compatible con lonas, vinilos y rígidos
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-2xl bg-muted/30 border border-border overflow-hidden flex items-center justify-center">
                <div className="text-center p-8">
                  <Droplets className="w-16 h-16 text-primary mx-auto mb-4" />
                  <p className="font-display text-lg font-semibold">Ecosolvente Premium</p>
                  <p className="text-sm text-muted-foreground">5+ años de durabilidad exterior</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Color Management Section */}
        <div className="p-4 md:p-5 lg:p-6 rounded-xl md:rounded-2xl bg-gradient-card border border-border">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
            <div>
              <h3 className="font-display text-xl md:text-2xl font-bold mb-2 md:mb-3 lg:mb-4">
                Gestión de Color <span className="text-gradient">Profesional</span>
              </h3>
              <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6 lg:mb-8">
                Lo que ves es lo que imprimes. Nuestra plataforma incluye herramientas avanzadas
                de gestión de color para garantizar resultados predecibles y consistentes.
              </p>

              <div className="space-y-4 md:space-y-5 lg:space-y-6">
                {colorFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual representation */}
            <div className="relative">
              <div className="rounded-2xl bg-muted/30 border border-border overflow-hidden">
                <img
                  src="/img/proofing.png"
                  alt="Soft-Proofing - Gestión de Color Profesional"
                  className="w-full h-auto object-contain rounded-2xl"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-card to-transparent">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Perfil activo:</span>
                    <span className="font-mono text-primary">CMYK FOGRA39</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSection;
