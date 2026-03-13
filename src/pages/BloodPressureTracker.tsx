import { useState, useEffect } from "react";
import { format, startOfWeek, endOfWeek, isWithinInterval, parseISO, subWeeks, addWeeks } from "date-fns";
import { es } from "date-fns/locale";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import { Heart, Trash2, ChevronLeft, ChevronRight, Plus, X } from "lucide-react";

interface Reading {
  id: string;
  systolic: number;
  diastolic: number;
  pulse: number;
  notes: string;
  timestamp: string;
}

type BPCategory = {
  label: string;
  color: string;
  bg: string;
  border: string;
};

function classifyBP(sys: number, dia: number): BPCategory {
  if (sys < 120 && dia < 80)
    return { label: "Normal", color: "text-emerald-400", bg: "bg-emerald-950", border: "border-emerald-700" };
  if (sys < 130 && dia < 80)
    return { label: "Elevada", color: "text-yellow-400", bg: "bg-yellow-950", border: "border-yellow-700" };
  if (sys < 140 || dia < 90)
    return { label: "Alta Etapa 1", color: "text-orange-400", bg: "bg-orange-950", border: "border-orange-700" };
  if (sys < 180 || dia < 120)
    return { label: "Alta Etapa 2", color: "text-red-400", bg: "bg-red-950", border: "border-red-700" };
  return { label: "Crisis Hipertensiva", color: "text-red-300", bg: "bg-red-950", border: "border-red-500" };
}

function formatDateTime(iso: string) {
  return format(parseISO(iso), "dd MMM, HH:mm", { locale: es });
}

const STORAGE_KEY = "bp_readings";

function loadReadings(): Reading[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveReadings(readings: Reading[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(readings));
}

export default function BloodPressureTracker() {
  const [readings, setReadings] = useState<Reading[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [weekOffset, setWeekOffset] = useState(0);
  const [form, setForm] = useState({ systolic: "", diastolic: "", pulse: "", notes: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);

  useEffect(() => {
    setReadings(loadReadings());
  }, []);

  const weekStart = startOfWeek(subWeeks(new Date(), -weekOffset > 0 ? 0 : -weekOffset), { weekStartsOn: 1 });
  const weekEnd = endOfWeek(weekStart, { weekStartsOn: 1 });

  const weekReadings = readings
    .filter((r) =>
      isWithinInterval(parseISO(r.timestamp), { start: weekStart, end: weekEnd })
    )
    .sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime());

  const chartData = weekReadings.map((r) => ({
    time: format(parseISO(r.timestamp), "dd/MM HH:mm"),
    sistólica: r.systolic,
    diastólica: r.diastolic,
    pulso: r.pulse,
  }));

  function validate() {
    const e: Record<string, string> = {};
    const sys = parseInt(form.systolic);
    const dia = parseInt(form.diastolic);
    const pul = parseInt(form.pulse);
    if (!form.systolic || isNaN(sys) || sys < 60 || sys > 250) e.systolic = "Ingresa un valor entre 60 y 250";
    if (!form.diastolic || isNaN(dia) || dia < 40 || dia > 150) e.diastolic = "Ingresa un valor entre 40 y 150";
    if (!form.pulse || isNaN(pul) || pul < 30 || pul > 220) e.pulse = "Ingresa un valor entre 30 y 220";
    return e;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    const newReading: Reading = {
      id: crypto.randomUUID(),
      systolic: parseInt(form.systolic),
      diastolic: parseInt(form.diastolic),
      pulse: parseInt(form.pulse),
      notes: form.notes.trim(),
      timestamp: new Date().toISOString(),
    };
    const updated = [newReading, ...readings];
    setReadings(updated);
    saveReadings(updated);
    setForm({ systolic: "", diastolic: "", pulse: "", notes: "" });
    setErrors({});
    setShowForm(false);
    setWeekOffset(0);
  }

  function deleteReading(id: string) {
    const updated = readings.filter((r) => r.id !== id);
    setReadings(updated);
    saveReadings(updated);
    setDeleteConfirm(null);
  }

  const weekLabel =
    weekOffset === 0
      ? "Esta semana"
      : weekOffset === -1
      ? "Semana pasada"
      : `Sem. del ${format(weekStart, "dd MMM", { locale: es })}`;

  const latestReading = readings[0];
  const latestCategory = latestReading ? classifyBP(latestReading.systolic, latestReading.diastolic) : null;

  return (
    <div className="min-h-screen bg-slate-900 text-white pb-24">
      {/* Header */}
      <div className="bg-slate-800 border-b border-slate-700 px-4 py-4 flex items-center gap-3 sticky top-0 z-10">
        <Heart className="text-red-500 w-6 h-6 fill-red-500" />
        <div>
          <h1 className="text-lg font-bold leading-none">Presión Arterial</h1>
          <p className="text-xs text-slate-400">Registro semanal</p>
        </div>
      </div>

      <div className="max-w-lg mx-auto px-4 pt-4 space-y-4">
        {/* Last reading summary */}
        {latestReading && latestCategory && (
          <div className={`rounded-2xl border ${latestCategory.border} ${latestCategory.bg} p-4`}>
            <p className="text-xs text-slate-400 mb-1">Última medición · {formatDateTime(latestReading.timestamp)}</p>
            <div className="flex items-end gap-3">
              <div>
                <span className="text-5xl font-bold">{latestReading.systolic}</span>
                <span className="text-2xl text-slate-400">/{latestReading.diastolic}</span>
                <span className="text-sm text-slate-400 ml-1">mmHg</span>
              </div>
              <div className="mb-1">
                <p className={`text-sm font-semibold ${latestCategory.color}`}>{latestCategory.label}</p>
                <p className="text-xs text-slate-400">Pulso: {latestReading.pulse} bpm</p>
              </div>
            </div>
          </div>
        )}

        {/* Week navigator */}
        <div className="flex items-center justify-between bg-slate-800 rounded-xl px-3 py-2">
          <button
            onClick={() => setWeekOffset((o) => o - 1)}
            className="p-1 rounded-lg hover:bg-slate-700 active:bg-slate-600 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="text-sm font-medium">{weekLabel}</span>
          <button
            onClick={() => setWeekOffset((o) => Math.min(0, o + 1))}
            disabled={weekOffset === 0}
            className="p-1 rounded-lg hover:bg-slate-700 active:bg-slate-600 transition-colors disabled:opacity-30"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Chart */}
        {chartData.length >= 2 && (
          <div className="bg-slate-800 rounded-2xl p-4">
            <p className="text-xs text-slate-400 mb-3 font-medium">TENDENCIA SEMANAL</p>
            <ResponsiveContainer width="100%" height={180}>
              <LineChart data={chartData} margin={{ top: 5, right: 5, bottom: 5, left: -20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="time" tick={{ fontSize: 9, fill: "#94a3b8" }} />
                <YAxis domain={[40, 200]} tick={{ fontSize: 9, fill: "#94a3b8" }} />
                <Tooltip
                  contentStyle={{ background: "#1e293b", border: "1px solid #334155", borderRadius: 8 }}
                  labelStyle={{ color: "#94a3b8", fontSize: 11 }}
                  itemStyle={{ fontSize: 12 }}
                />
                <ReferenceLine y={120} stroke="#fbbf24" strokeDasharray="4 2" strokeWidth={1} />
                <ReferenceLine y={80} stroke="#fbbf24" strokeDasharray="4 2" strokeWidth={1} />
                <Line type="monotone" dataKey="sistólica" stroke="#ef4444" strokeWidth={2} dot={{ r: 3 }} />
                <Line type="monotone" dataKey="diastólica" stroke="#3b82f6" strokeWidth={2} dot={{ r: 3 }} />
                <Line type="monotone" dataKey="pulso" stroke="#10b981" strokeWidth={1.5} dot={{ r: 2 }} strokeDasharray="4 2" />
              </LineChart>
            </ResponsiveContainer>
            <div className="flex gap-4 mt-2 justify-center">
              <span className="flex items-center gap-1 text-xs text-slate-400"><span className="w-3 h-0.5 bg-red-500 inline-block" /> Sistólica</span>
              <span className="flex items-center gap-1 text-xs text-slate-400"><span className="w-3 h-0.5 bg-blue-500 inline-block" /> Diastólica</span>
              <span className="flex items-center gap-1 text-xs text-slate-400"><span className="w-3 h-0.5 bg-emerald-500 inline-block" /> Pulso</span>
            </div>
          </div>
        )}

        {/* Readings list */}
        <div className="space-y-2">
          <p className="text-xs text-slate-400 font-medium px-1">
            {weekReadings.length} {weekReadings.length === 1 ? "medición" : "mediciones"} esta semana
          </p>
          {weekReadings.length === 0 && (
            <div className="bg-slate-800 rounded-2xl p-8 text-center">
              <Heart className="w-12 h-12 text-slate-600 mx-auto mb-3" />
              <p className="text-slate-400 text-sm">Sin mediciones esta semana</p>
              <p className="text-slate-500 text-xs mt-1">Presiona el botón + para agregar</p>
            </div>
          )}
          {[...weekReadings].reverse().map((r) => {
            const cat = classifyBP(r.systolic, r.diastolic);
            return (
              <div
                key={r.id}
                className={`bg-slate-800 border ${cat.border} rounded-2xl p-4 flex items-center gap-3`}
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold">{r.systolic}/{r.diastolic}</span>
                    <span className="text-xs text-slate-400">mmHg</span>
                    <span className={`text-xs font-semibold ${cat.color}`}>{cat.label}</span>
                  </div>
                  <div className="flex items-center gap-3 mt-0.5">
                    <span className="text-xs text-slate-400">{formatDateTime(r.timestamp)}</span>
                    <span className="text-xs text-slate-500">♥ {r.pulse} bpm</span>
                  </div>
                  {r.notes && (
                    <p className="text-xs text-slate-400 mt-1 truncate">{r.notes}</p>
                  )}
                </div>
                {deleteConfirm === r.id ? (
                  <div className="flex gap-2 shrink-0">
                    <button
                      onClick={() => deleteReading(r.id)}
                      className="text-xs bg-red-600 hover:bg-red-500 px-2 py-1 rounded-lg font-medium transition-colors"
                    >
                      Eliminar
                    </button>
                    <button
                      onClick={() => setDeleteConfirm(null)}
                      className="text-xs bg-slate-700 hover:bg-slate-600 px-2 py-1 rounded-lg transition-colors"
                    >
                      No
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setDeleteConfirm(r.id)}
                    className="text-slate-600 hover:text-red-400 transition-colors shrink-0 p-1"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
              </div>
            );
          })}
        </div>

        {/* Reference guide */}
        <div className="bg-slate-800 rounded-2xl p-4">
          <p className="text-xs text-slate-400 font-medium mb-3">GUÍA DE REFERENCIA</p>
          <div className="space-y-1.5">
            {[
              { range: "< 120/80", label: "Normal", color: "text-emerald-400" },
              { range: "120-129/<80", label: "Elevada", color: "text-yellow-400" },
              { range: "130-139/80-89", label: "Alta Etapa 1", color: "text-orange-400" },
              { range: "140-179/90-119", label: "Alta Etapa 2", color: "text-red-400" },
              { range: "≥ 180/≥ 120", label: "Crisis Hipertensiva", color: "text-red-300" },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between text-xs">
                <span className={`font-semibold ${item.color}`}>{item.label}</span>
                <span className="text-slate-400 font-mono">{item.range}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add reading modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-end">
          <div className="bg-slate-800 rounded-t-3xl w-full max-w-lg mx-auto p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold">Nueva medición</h2>
              <button
                onClick={() => { setShowForm(false); setErrors({}); }}
                className="text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-3 gap-3">
                {/* Systolic */}
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Sistólica</label>
                  <input
                    type="number"
                    inputMode="numeric"
                    placeholder="120"
                    value={form.systolic}
                    onChange={(e) => setForm({ ...form, systolic: e.target.value })}
                    className="w-full bg-slate-700 border border-slate-600 rounded-xl px-3 py-3 text-center text-xl font-bold focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                  />
                  {errors.systolic && <p className="text-red-400 text-xs mt-1">{errors.systolic}</p>}
                </div>
                {/* Diastolic */}
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Diastólica</label>
                  <input
                    type="number"
                    inputMode="numeric"
                    placeholder="80"
                    value={form.diastolic}
                    onChange={(e) => setForm({ ...form, diastolic: e.target.value })}
                    className="w-full bg-slate-700 border border-slate-600 rounded-xl px-3 py-3 text-center text-xl font-bold focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                  {errors.diastolic && <p className="text-red-400 text-xs mt-1">{errors.diastolic}</p>}
                </div>
                {/* Pulse */}
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Pulso</label>
                  <input
                    type="number"
                    inputMode="numeric"
                    placeholder="72"
                    value={form.pulse}
                    onChange={(e) => setForm({ ...form, pulse: e.target.value })}
                    className="w-full bg-slate-700 border border-slate-600 rounded-xl px-3 py-3 text-center text-xl font-bold focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                  />
                  {errors.pulse && <p className="text-red-400 text-xs mt-1">{errors.pulse}</p>}
                </div>
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-1">Notas (opcional)</label>
                <input
                  type="text"
                  placeholder="Ej: Después del desayuno, en reposo..."
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  className="w-full bg-slate-700 border border-slate-600 rounded-xl px-3 py-3 text-sm focus:outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500"
                />
              </div>
              {/* Preview classification */}
              {form.systolic && form.diastolic && !errors.systolic && !errors.diastolic && (
                (() => {
                  const s = parseInt(form.systolic), d = parseInt(form.diastolic);
                  if (s >= 60 && s <= 250 && d >= 40 && d <= 150) {
                    const cat = classifyBP(s, d);
                    return (
                      <div className={`${cat.bg} border ${cat.border} rounded-xl px-4 py-2 text-sm`}>
                        Clasificación: <span className={`font-semibold ${cat.color}`}>{cat.label}</span>
                      </div>
                    );
                  }
                  return null;
                })()
              )}
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-500 active:bg-red-700 text-white font-bold py-4 rounded-2xl text-base transition-colors"
              >
                Guardar medición
              </button>
            </form>
          </div>
        </div>
      )}

      {/* FAB */}
      <button
        onClick={() => setShowForm(true)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-red-600 hover:bg-red-500 active:bg-red-700 rounded-full shadow-2xl flex items-center justify-center transition-colors z-40"
      >
        <Plus className="w-8 h-8" />
      </button>
    </div>
  );
}
