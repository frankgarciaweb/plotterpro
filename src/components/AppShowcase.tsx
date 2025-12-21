import { Smartphone, Check, ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "Cotizaciones instantáneas desde tu móvil",
  "Seguimiento de pedidos en tiempo real",
  "Validación Preflight de archivos",
  "Programa de recompensas integrado",
  "Historial de pedidos y reórdenes rápidas",
  "Notificaciones de estado de producción",
];

const AppShowcase = () => {
  return (
    <section className="py-12 md:py-16 lg:py-24 relative overflow-hidden" id="app">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Smartphone className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">PrintPartner App</span>
            </div>

            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Gestiona Todo Desde{" "}
              <span className="text-gradient">Tu Móvil</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8">
              Como revendedor registrado, tendrás acceso a nuestra aplicación móvil exclusiva. 
              Cotiza, ordena y da seguimiento a tus pedidos desde cualquier lugar.
            </p>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-success" />
                  </div>
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="min-h-[48px]">
                Regístrate y Obtén Acceso
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="min-h-[48px]">
                Ver Demo
              </Button>
            </div>
          </div>

          {/* Phone Mockups */}
          <div className="relative flex justify-center">
            {/* Main phone */}
            <div className="relative z-20 w-48 sm:w-56 md:w-64 lg:w-72">
              <div className="rounded-[2.5rem] bg-card border-4 border-muted overflow-hidden shadow-2xl">
                {/* Phone screen content - Dashboard mockup */}
                <div className="aspect-[9/19] bg-background p-4">
                  {/* Status bar */}
                  <div className="flex justify-between items-center text-xs text-muted-foreground mb-4">
                    <span>9:41</span>
                    <div className="flex gap-1">
                      <div className="w-4 h-2 rounded-sm bg-muted-foreground" />
                      <div className="w-4 h-2 rounded-sm bg-muted-foreground" />
                    </div>
                  </div>

                  {/* Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-gradient-primary" />
                    <div>
                      <div className="text-xs text-muted-foreground">Bienvenido,</div>
                      <div className="text-sm font-semibold">Gráficas del Norte</div>
                    </div>
                  </div>

                  {/* Level Card */}
                  <div className="p-4 rounded-xl bg-card border border-border mb-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <div className="text-xs text-muted-foreground">TU NIVEL</div>
                        <div className="flex items-center gap-2">
                          <span className="text-yellow-500">★</span>
                          <span className="font-semibold">Gold Partner</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-primary">1,240</div>
                        <div className="text-xs text-muted-foreground">Puntos</div>
                      </div>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full w-3/4 bg-gradient-primary rounded-full" />
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <div className="p-3 rounded-xl bg-primary text-primary-foreground text-center">
                      <Zap className="w-5 h-5 mx-auto mb-1" />
                      <div className="text-xs font-medium">Nueva Cotización</div>
                    </div>
                    <div className="p-3 rounded-xl bg-card border border-border text-center">
                      <div className="text-xs font-medium">Catálogo</div>
                    </div>
                  </div>

                  {/* Orders */}
                  <div className="text-sm font-semibold mb-2">Pedidos Activos</div>
                  <div className="space-y-2">
                    {[
                      { id: "#4023", status: "Imprimiendo", progress: 75 },
                      { id: "#4021", status: "Enviado", progress: 100 },
                    ].map((order) => (
                      <div key={order.id} className="p-3 rounded-xl bg-card border border-border">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-xs font-medium">{order.id}</span>
                          <span className={`text-xs px-2 py-0.5 rounded-full ${
                            order.status === "Enviado" ? "bg-success/20 text-success" : "bg-primary/20 text-primary"
                          }`}>
                            {order.status}
                          </span>
                        </div>
                        <div className="h-1 bg-muted rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-primary rounded-full transition-all duration-500" 
                            style={{ width: `${order.progress}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Background phone */}
            <div className="absolute top-4 right-0 sm:top-8 sm:-right-8 z-10 w-40 sm:w-48 md:w-56 lg:w-64 opacity-60 hidden sm:block">
              <div className="rounded-[2.5rem] bg-card border-4 border-muted overflow-hidden shadow-xl rotate-6">
                <div className="aspect-[9/19] bg-background p-4">
                  <div className="text-center pt-12">
                    <div className="text-sm font-semibold mb-4">Sistema Preflight</div>
                    <div className="space-y-2">
                      <div className="p-2 rounded-lg bg-success/10 border border-success/20 text-xs">
                        ✓ Resolución óptima
                      </div>
                      <div className="p-2 rounded-lg bg-warning/10 border border-warning/20 text-xs">
                        ⚠ Espacio de color
                      </div>
                      <div className="p-2 rounded-lg bg-success/10 border border-success/20 text-xs">
                        ✓ Sangrado correcto
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -left-4 p-3 rounded-xl bg-card border border-border shadow-lg animate-float z-30">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-success/20 flex items-center justify-center">
                  <Check className="w-4 h-4 text-success" />
                </div>
                <div className="text-xs">
                  <div className="font-medium">Pedido listo</div>
                  <div className="text-muted-foreground">#4019</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
