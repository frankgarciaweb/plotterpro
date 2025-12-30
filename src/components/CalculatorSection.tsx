import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Printer, Layers, Square, ArrowRight, Check, ScrollText, StickyNote, Hand } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const materials = [
  { id: "lona", name: "Lona", description: "Gran formato", price: 85, icon: <ScrollText className="w-6 h-6" /> },
  { id: "vinilo", name: "Vinilo", description: "Adhesivos", price: 120, icon: <StickyNote className="w-6 h-6" /> },
  { id: "rigido", name: "Rígido", description: "PVC / Forex", price: 180, icon: "🪧" },
];

const CalculatorSection = () => {
  const [selectedMaterial, setSelectedMaterial] = useState("vinilo");
  const [width, setWidth] = useState(120);
  const [height, setHeight] = useState(80);
  const [quantity, setQuantity] = useState(1);

  const material = materials.find((m) => m.id === selectedMaterial)!;
  const area = (width * height) / 10000; // cm² to m²
  const unitPrice = material.price * area;
  const totalPrice = unitPrice * quantity;

  // Volume discounts
  const getDiscount = () => {
    if (quantity >= 50) return 0.25;
    if (quantity >= 20) return 0.15;
    if (quantity >= 10) return 0.10;
    if (quantity >= 5) return 0.05;
    return 0;
  };

  const discount = getDiscount();
  const finalPrice = totalPrice * (1 - discount);

  return (
    <section className="py-8 md:py-12 lg:py-16 relative" id="cotizador">
      <div className="absolute inset-0 bg-gradient-hero opacity-50" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-6 md:mb-8 lg:mb-12">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-2 md:mb-3 lg:mb-4">
            Cotizador <span className="text-gradient">Instantáneo</span>
          </h2>
          <p className="text-sm font-medium text-primary mb-2">
            Ejemplo de la Calculadora que puedes encontrar en la APP
          </p>
          <hr className="w-24 mx-auto border-primary/30 mb-4" />
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto px-2">
            Calcula tu presupuesto en tiempo real. Precios por m² con descuentos automáticos por volumen.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Carousel className="w-full" opts={{ align: "start" }}>
            <CarouselContent className="-ml-4 md:ml-0 md:grid md:grid-cols-2 md:gap-8 lg:gap-12 md:justify-items-center">
              {/* Phone 1: Calculator Panel */}
              <CarouselItem className="pl-4 md:pl-0 basis-[90%] md:basis-auto w-full flex justify-center">
                <div className="relative mx-auto border-gray-900 bg-gray-900 border-[14px] rounded-[2.5rem] h-auto w-full max-w-[350px] shadow-xl">
                  <div className="h-[32px] w-[3px] bg-gray-900 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
                  <div className="h-[46px] w-[3px] bg-gray-900 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                  <div className="h-[46px] w-[3px] bg-gray-900 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
                  <div className="h-[64px] w-[3px] bg-gray-900 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
                  <div className="rounded-[2rem] overflow-hidden bg-background h-full flex flex-col">
                    <div className="h-6 bg-background w-full flex items-center justify-center px-6 border-b border-border/50">
                      <div className="w-16 h-3 bg-muted rounded-full mt-2"></div>
                    </div>
                    <div className="p-4 md:p-5 flex-1 overflow-y-auto">
                      <h3 className="font-display text-base md:text-lg font-semibold mb-4 md:mb-5 lg:mb-6 flex items-center gap-2">
                        <Printer className="w-5 h-5 text-primary" />
                        Selecciona Material
                      </h3>

                      {/* Material Selection */}
                      <div className="grid grid-cols-3 gap-2 mb-4 md:mb-6">
                        {materials.map((mat) => (
                          <button
                            key={mat.id}
                            onClick={() => setSelectedMaterial(mat.id)}
                            className={`relative p-2 rounded-lg border transition-all duration-200 min-h-[70px] flex flex-col items-center justify-center ${selectedMaterial === mat.id
                              ? "bg-primary/10 border-primary"
                              : "bg-card border-border hover:border-muted-foreground"
                              }`}
                          >
                            <div className="text-primary mb-1">{mat.icon}</div>
                            <div className="font-medium text-[10px]">{mat.name}</div>
                            {selectedMaterial === mat.id && (
                              <div className="absolute top-1 right-1 w-3 h-3 rounded-full bg-primary flex items-center justify-center">
                                <Check className="w-2 h-2 text-primary-foreground" />
                              </div>
                            )}
                          </button>
                        ))}
                      </div>

                      {/* Dimensions */}
                      <h3 className="font-display text-base md:text-lg font-semibold mb-3 md:mb-4 flex items-center gap-2">
                        <Layers className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                        Dimensiones
                      </h3>

                      <div className="grid grid-cols-2 gap-2 mb-4 md:mb-6">
                        <div>
                          <label className="text-xs text-muted-foreground mb-1 block">Ancho (cm)</label>
                          <div className="relative">
                            <input
                              type="number"
                              value={width}
                              onChange={(e) => setWidth(Number(e.target.value))}
                              className="w-full h-10 px-3 rounded-lg bg-card border border-border text-base font-semibold focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="text-xs text-muted-foreground mb-1 block">Alto (cm)</label>
                          <div className="relative">
                            <input
                              type="number"
                              value={height}
                              onChange={(e) => setHeight(Number(e.target.value))}
                              className="w-full h-10 px-3 rounded-lg bg-card border border-border text-base font-semibold focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Quantity */}
                      <div className="mb-4">
                        <label className="text-xs text-muted-foreground mb-2 block">Cantidad</label>
                        <input
                          type="range"
                          min="1"
                          max="100"
                          value={quantity}
                          onChange={(e) => setQuantity(Number(e.target.value))}
                          className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary touch-none"
                        />
                        <div className="flex justify-between text-xs text-muted-foreground mt-2">
                          <span>1 u</span>
                          <span className="text-primary font-semibold">{quantity} u</span>
                          <span>100 u</span>
                        </div>
                      </div>

                      <p className="text-[10px] text-muted-foreground">
                        <span className="text-success">ℹ</span> Máx: 150cm ancho
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>

              {/* Phone 2: Price Summary */}
              <CarouselItem className="pl-4 md:pl-0 basis-[90%] md:basis-auto w-full flex justify-center">
                <div className="relative mx-auto border-gray-900 bg-gray-900 border-[14px] rounded-[2.5rem] h-auto w-full max-w-[350px] shadow-xl">
                  <div className="h-[32px] w-[3px] bg-gray-900 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
                  <div className="h-[46px] w-[3px] bg-gray-900 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                  <div className="h-[46px] w-[3px] bg-gray-900 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
                  <div className="h-[64px] w-[3px] bg-gray-900 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
                  <div className="rounded-[2rem] overflow-hidden bg-background h-full flex flex-col">
                    <div className="h-6 bg-background w-full flex items-center justify-center px-6 border-b border-border/50">
                      <div className="w-16 h-3 bg-muted rounded-full mt-2"></div>
                    </div>
                    <div className="p-4 md:p-5 flex-1 overflow-y-auto">
                      <h3 className="font-display text-base md:text-lg font-semibold mb-3 md:mb-4 flex items-center gap-2">
                        <Square className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                        Resumen
                      </h3>

                      <div className="space-y-2 mb-4 md:mb-6">
                        <div className="flex justify-between items-center py-2 border-b border-border text-sm">
                          <span className="text-muted-foreground">Material</span>
                          <span className="font-medium">{material.name}</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-border text-sm">
                          <span className="text-muted-foreground">Medidas</span>
                          <span className="font-medium">{width} × {height} cm</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-border text-sm">
                          <span className="text-muted-foreground">Área</span>
                          <span className="font-medium">{area.toFixed(2)} m²</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-border text-sm">
                          <span className="text-muted-foreground">Precio/m²</span>
                          <span className="font-medium">${material.price}</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-border text-sm">
                          <span className="text-muted-foreground">Cant.</span>
                          <span className="font-medium">{quantity}</span>
                        </div>
                        {discount > 0 && (
                          <div className="flex justify-between items-center py-2 border-b border-border text-sm">
                            <span className="text-success">Descuento</span>
                            <span className="font-medium text-success">-{(discount * 100).toFixed(0)}%</span>
                          </div>
                        )}
                      </div>

                      {/* Total Price */}
                      <div className="p-4 rounded-xl bg-muted/50 mb-4">
                        <div className="text-xs text-muted-foreground mb-1">COSTO ESTIMADO</div>
                        <div className="flex items-baseline gap-2">
                          <span className="text-3xl font-display font-bold text-gradient">
                            ${finalPrice.toFixed(2)}
                          </span>
                        </div>
                        <div className="text-xs text-primary mt-1">
                          ${(finalPrice / quantity).toFixed(2)} c/u
                        </div>
                        <div className="text-xs text-blue-500 mt-2 font-medium">
                          monto no real solo es ejemplo de la aplicacion
                        </div>
                      </div>

                      {discount > 0 && (
                        <div className="p-3 rounded-lg bg-success/10 border border-success/20 mb-4">
                          <p className="text-xs text-success">
                            🎉 Ahorro: ${(totalPrice - finalPrice).toFixed(2)}
                          </p>
                        </div>
                      )}

                      <Button variant="hero" size="lg" className="w-full">
                        Agregar al Pedido
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>

            {/* Mobile Swipe Indicator */}
            <div className="flex justify-center mt-4 md:hidden">
              <Hand className="w-6 h-6 text-muted-foreground animate-swipe-hand" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;
