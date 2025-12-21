import { Droplets, Palette, FileCheck, Layers, Printer, Award, Zap, Eye } from "lucide-react";

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
    <section className="py-12 md:py-16 lg:py-24 relative" id="tecnologia">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Tecnología de <span className="text-gradient">Impresión</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Contamos con equipos de última generación para garantizar la máxima calidad en cada trabajo.
          </p>
        </div>

        {/* Equipment & Quality Section */}
        <div className="p-4 md:p-6 lg:p-8 rounded-2xl glass-card border-primary/20 mb-8 md:mb-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Award className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold">Equipos Premium</h3>
              <p className="text-sm text-muted-foreground">Tecnología japonesa de clase mundial</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {equipmentFeatures.map((feature, index) => (
              <div
                key={index}
                className="p-4 md:p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Brand logos visual */}
          <div className="mt-8 pt-8 border-t border-border">
            <div className="flex flex-wrap items-center justify-center gap-8">
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
        <div className="p-4 md:p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 mb-8 md:mb-12">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-center">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                Tecnología Ecosolvente
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">
                La Mejor Relación <span className="text-gradient">Calidad-Precio</span>
              </h3>
              <p className="text-muted-foreground mb-6">
                Nuestras impresiones ecosolventes ofrecen durabilidad excepcional tanto en interiores como exteriores. 
                Resistentes a UV, agua y rayones, con una vida útil de hasta 5 años en exteriores.
              </p>
              <ul className="space-y-3">
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
        <div className="p-4 md:p-6 lg:p-8 rounded-2xl bg-gradient-card border border-border">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h3 className="font-display text-2xl font-bold mb-4">
                Gestión de Color <span className="text-gradient">Profesional</span>
              </h3>
              <p className="text-muted-foreground mb-8">
                Lo que ves es lo que imprimes. Nuestra plataforma incluye herramientas avanzadas 
                de gestión de color para garantizar resultados predecibles y consistentes.
              </p>

              <div className="space-y-6">
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
              <div className="aspect-square rounded-2xl bg-muted/30 border border-border overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-2 p-8 w-full max-w-xs">
                    {["#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4", "#FFEAA7", "#DDA0DD", "#98D8C8", "#F7DC6F", "#BB8FCE"].map((color, i) => (
                      <div
                        key={i}
                        className="aspect-square rounded-lg shadow-lg transition-transform duration-300 hover:scale-110 cursor-pointer"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
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
