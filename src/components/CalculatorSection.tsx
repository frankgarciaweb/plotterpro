import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Printer, Layers, Square, ArrowRight, Check } from "lucide-react";

const materials = [
  { id: "lona", name: "Lona", description: "Gran formato", price: 85, icon: "🎪" },
  { id: "vinilo", name: "Vinilo", description: "Adhesivos", price: 120, icon: "📜" },
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
    <section className="py-24 relative" id="cotizador">
      <div className="absolute inset-0 bg-gradient-hero opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Cotizador <span className="text-gradient">Instantáneo</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Calcula tu presupuesto en tiempo real. Precios por m² con descuentos automáticos por volumen.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Calculator Panel */}
            <div className="p-8 rounded-2xl glass-card">
              <h3 className="font-display text-lg font-semibold mb-6 flex items-center gap-2">
                <Printer className="w-5 h-5 text-primary" />
                Selecciona Material
              </h3>

              {/* Material Selection */}
              <div className="grid grid-cols-3 gap-3 mb-8">
                {materials.map((mat) => (
                  <button
                    key={mat.id}
                    onClick={() => setSelectedMaterial(mat.id)}
                    className={`p-4 rounded-xl border transition-all duration-200 ${
                      selectedMaterial === mat.id
                        ? "bg-primary/10 border-primary"
                        : "bg-card border-border hover:border-muted-foreground"
                    }`}
                  >
                    <div className="text-2xl mb-2">{mat.icon}</div>
                    <div className="font-medium text-sm">{mat.name}</div>
                    <div className="text-xs text-muted-foreground">{mat.description}</div>
                    {selectedMaterial === mat.id && (
                      <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                        <Check className="w-3 h-3 text-primary-foreground" />
                      </div>
                    )}
                  </button>
                ))}
              </div>

              {/* Dimensions */}
              <h3 className="font-display text-lg font-semibold mb-4 flex items-center gap-2">
                <Layers className="w-5 h-5 text-primary" />
                Dimensiones
              </h3>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Ancho (cm)</label>
                  <div className="relative">
                    <input
                      type="number"
                      value={width}
                      onChange={(e) => setWidth(Number(e.target.value))}
                      className="w-full h-14 px-4 rounded-xl bg-card border border-border text-xl font-semibold focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground">cm</span>
                  </div>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Alto (cm)</label>
                  <div className="relative">
                    <input
                      type="number"
                      value={height}
                      onChange={(e) => setHeight(Number(e.target.value))}
                      className="w-full h-14 px-4 rounded-xl bg-card border border-border text-xl font-semibold focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground">cm</span>
                  </div>
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-6">
                <label className="text-sm text-muted-foreground mb-2 block">Cantidad</label>
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between text-sm text-muted-foreground mt-2">
                  <span>1 unidad</span>
                  <span className="text-primary font-semibold">{quantity} unidades</span>
                  <span>100 unidades</span>
                </div>
              </div>

              <p className="text-xs text-muted-foreground">
                <span className="text-success">ℹ</span> Ancho máximo de impresión: 150cm
              </p>
            </div>

            {/* Price Summary */}
            <div className="p-8 rounded-2xl bg-gradient-card border border-border">
              <h3 className="font-display text-lg font-semibold mb-6 flex items-center gap-2">
                <Square className="w-5 h-5 text-primary" />
                Resumen de Cotización
              </h3>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-muted-foreground">Material</span>
                  <span className="font-medium">{material.name}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-muted-foreground">Dimensiones</span>
                  <span className="font-medium">{width} × {height} cm</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-muted-foreground">Área</span>
                  <span className="font-medium">{area.toFixed(2)} m²</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-muted-foreground">Precio por m²</span>
                  <span className="font-medium">${material.price}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-muted-foreground">Cantidad</span>
                  <span className="font-medium">{quantity} unidades</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between items-center py-3 border-b border-border">
                    <span className="text-success">Descuento por volumen</span>
                    <span className="font-medium text-success">-{(discount * 100).toFixed(0)}%</span>
                  </div>
                )}
              </div>

              {/* Total Price */}
              <div className="p-6 rounded-xl bg-muted/50 mb-6">
                <div className="text-sm text-muted-foreground mb-1">COSTO ESTIMADO</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-display font-bold text-gradient">
                    ${finalPrice.toFixed(2)}
                  </span>
                </div>
                <div className="text-sm text-primary mt-1">
                  ${(finalPrice / quantity).toFixed(2)} por unidad ({area.toFixed(2)}m²)
                </div>
              </div>

              {discount > 0 && (
                <div className="p-4 rounded-xl bg-success/10 border border-success/20 mb-6">
                  <p className="text-sm text-success">
                    🎉 ¡Ahorraste ${(totalPrice - finalPrice).toFixed(2)} con descuento por volumen!
                  </p>
                </div>
              )}

              <Button variant="hero" size="lg" className="w-full">
                Agregar al Pedido
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;
