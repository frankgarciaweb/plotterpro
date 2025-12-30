import { Check, AlertTriangle, X, FileText, Image, Palette, Crop } from "lucide-react";

const preflightChecks = [
  {
    icon: Image,
    name: "Resolución",
    status: "success",
    value: "300 DPI detectados",
    label: "Óptimo",
  },
  {
    icon: Palette,
    name: "Espacio de Color",
    status: "warning",
    value: "Elementos RGB detectados",
    detail: "El archivo contiene perfiles RGB. Se realizará una conversión automática a CMYK FOGRA39. Los tonos neón podrían variar.",
    label: "Atención",
  },
  {
    icon: Crop,
    name: "Sangrado / Bleed",
    status: "success",
    value: "5mm por lado (Correcto)",
    label: "Óptimo",
  },
];

const PreflightSection = () => {
  return (
    <section className="py-24 relative" id="preflight">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 border border-success/20 mb-6">
              <Check className="w-4 h-4 text-success" />
              <span className="text-sm font-medium text-success">Sistema de Validación</span>
            </div>

            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Preflight <span className="text-gradient">Dinámico</span>
            </h2>

            <p className="text-muted-foreground mb-8 text-lg">
              Nuestro sistema actúa como un <strong className="text-foreground">experto en preprensa digital</strong>.
              Detectamos problemas técnicos antes de que imprimas, ahorrándote tiempo y dinero.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center shrink-0">
                  <Check className="w-5 h-5 text-success" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Validación de Resolución</h4>
                  <p className="text-sm text-muted-foreground">Detectamos si tu archivo tiene menos de 150 DPI para evitar impresiones pixeladas.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-warning/10 flex items-center justify-center shrink-0">
                  <AlertTriangle className="w-5 h-5 text-warning" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Gestión de Color Real</h4>
                  <p className="text-sm text-muted-foreground">Descarga perfiles ICC específicos y usa nuestro Soft-Proofing interactivo.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Crop className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Sangrado Automático</h4>
                  <p className="text-sm text-muted-foreground">Verificamos que tu archivo tenga el sangrado correcto para un corte perfecto.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Demo */}
          <div className="p-6 rounded-2xl glass-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                <FileText className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <div className="font-medium">arte_final_v2_print.pdf</div>
                <div className="text-sm text-muted-foreground">24.5 MB • Cargado hace 2 min</div>
              </div>
            </div>

            <div className="space-y-4">
              {preflightChecks.map((check, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-xl border ${check.status === "success"
                      ? "bg-success/5 border-success/20"
                      : check.status === "warning"
                        ? "bg-warning/5 border-warning/20"
                        : "bg-destructive/5 border-destructive/20"
                    } animate-scale-loop`}
                  style={{ animationDelay: `${index * 2.5}s` }}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${check.status === "success"
                            ? "bg-success/20"
                            : check.status === "warning"
                              ? "bg-warning/20"
                              : "bg-destructive/20"
                          }`}
                      >
                        {check.status === "success" ? (
                          <Check className="w-4 h-4 text-success" />
                        ) : check.status === "warning" ? (
                          <AlertTriangle className="w-4 h-4 text-warning" />
                        ) : (
                          <X className="w-4 h-4 text-destructive" />
                        )}
                      </div>
                      <div>
                        <div className="font-medium">{check.name}</div>
                        <div className="text-sm text-muted-foreground">{check.value}</div>
                      </div>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${check.status === "success"
                          ? "bg-success/20 text-success"
                          : check.status === "warning"
                            ? "bg-warning/20 text-warning"
                            : "bg-destructive/20 text-destructive"
                        }`}
                    >
                      {check.label}
                    </span>
                  </div>
                  {check.detail && (
                    <div className="mt-3 p-3 rounded-lg bg-background/50 text-sm text-muted-foreground">
                      {check.detail}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-xl bg-muted/30 border border-border">
              <div className="flex items-center gap-2 text-sm">
                <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                <span className="text-muted-foreground">Sistema de semáforo:</span>
                <span className="text-success">Verde</span> /{" "}
                <span className="text-warning">Amarillo</span> /{" "}
                <span className="text-destructive">Rojo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreflightSection;
