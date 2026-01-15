import React from 'react';
import {
  PieChart, Pie, Cell, 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import { 
  TrendingUp, 
  ShoppingCart, 
  Package, 
  DollarSign, 
  Layers,
  MoreVertical,
  Calendar,
  ArrowUpRight
} from 'lucide-react';

const salesVsPurchasesData = [
  { name: 'Ventas', value: 45000, color: '#6366f1' }, 
  { name: 'Compras', value: 28000, color: '#f43f5e' }, 
];

const topCategoriesData = [
  { category: 'Electrónica', total: 15400 },
  { category: 'Hogar', total: 9800 },
  { category: 'Moda', total: 7200 },
  { category: 'Deportes', total: 5100 },
  { category: 'Juguetes', total: 3900 },
];

const topProductsData = [
  { product: 'Laptop Pro 15"', sales: 120 },
  { product: 'Smartphone X', sales: 95 },
  { product: 'Audífonos BT', sales: 88 },
  { product: 'Monitor 4K', sales: 76 },
  { product: 'Teclado Mecánico', sales: 64 },
];

const KPICard = ({ title, value, icon: Icon, colorClass, trend }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between">
    <div className="flex items-center space-x-4">
      <div className={`p-3 rounded-xl ${colorClass}`}>
        <Icon size={24} className="text-white" />
      </div>
      <div>
        <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">{title}</p>
        <h3 className="text-2xl font-bold text-slate-800">{value}</h3>
      </div>
    </div>
    {trend && (
      <div className="flex items-center text-emerald-500 text-sm font-bold bg-emerald-50 px-2 py-1 rounded-lg">
        <ArrowUpRight size={16} />
        {trend}
      </div>
    )}
  </div>
);

const ChartBox = ({ title, children, subtitle }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col">
    <div className="flex justify-between items-start mb-6">
      <div>
        <h3 className="text-lg font-bold text-slate-800">{title}</h3>
        {subtitle && <p className="text-sm text-slate-400">{subtitle}</p>}
      </div>
      <button className="text-slate-400 hover:text-slate-600 transition-colors p-1 hover:bg-slate-50 rounded-lg">
        <MoreVertical size={20} />
      </button>
    </div>
    {/* Altura fija solo para el área del gráfico, no para el contenedor de la página */}
    <div className="h-[300px] w-full">
      {children}
    </div>
  </div>
);

export default function App() {
  const totalSales = salesVsPurchasesData[0].value;
  const totalPurchases = salesVsPurchasesData[1].value;
  const margin = totalSales - totalPurchases;

  return (
    /* SOLUCIÓN AL DOBLE SCROLL:
       1. Removemos 'min-h-screen' que causa doble scroll.
       2. Usamos 'w-full' para ancho completo.
       3. 'overflow-x-hidden' previene scrolls horizontales accidentales.
    */
    <div className="w-full bg-slate-50 font-sans text-slate-900 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 py-8 md:px-8 md:py-12">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-indigo-600 font-bold text-sm uppercase tracking-widest">
              <span className="w-8 h-[2px] bg-indigo-600"></span>
              Panel de Control
            </div>
            <h1 className="text-4xl font-black text-slate-900">Resumen Ejecutivo</h1>
            <p className="text-slate-500 text-lg">Análisis de rendimiento y métricas operativas.</p>
          </div>
          
          <div className="flex items-center gap-3 bg-white p-2 rounded-xl border border-slate-200 shadow-sm self-start md:self-auto">
            <div className="bg-slate-100 p-2 rounded-lg">
              <Calendar size={18} className="text-slate-600" />
            </div>
            <div className="pr-4">
              <p className="text-[10px] text-slate-400 font-bold uppercase">Periodo Actual</p>
              <p className="text-sm font-bold text-slate-700">Oct 2023 - Dic 2023</p>
            </div>
          </div>
        </div>

        {/* Top KPIs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 min-[740px]:grid-cols-4 gap-6 mb-10">
          <KPICard 
            title="Ingresos Totales" 
            value={`$${totalSales.toLocaleString()}`} 
            icon={TrendingUp} 
            colorClass="bg-indigo-600"
            trend="12%" 
          />
          <KPICard 
            title="Costos Operativos" 
            value={`$${totalPurchases.toLocaleString()}`} 
            icon={ShoppingCart} 
            colorClass="bg-rose-500" 
          />
          <KPICard 
            title="Margen Neto" 
            value={`$${margin.toLocaleString()}`} 
            icon={DollarSign} 
            colorClass="bg-emerald-500"
            trend="8%" 
          />
          <KPICard 
            title="Sectores Activos" 
            value={topCategoriesData.length.toString()} 
            icon={Layers} 
            colorClass="bg-amber-500" 
          />
        </div>

        {/* Main Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          
          <ChartBox 
            title="Flujo de Capital" 
            subtitle="Comparativa Ingresos vs Egresos"
          >
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={salesVsPurchasesData}
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={100}
                  paddingAngle={8}
                  dataKey="value"
                  stroke="none"
                >
                  {salesVsPurchasesData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    borderRadius: '16px', 
                    border: 'none', 
                    boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)'
                  }}
                />
                <Legend verticalAlign="bottom" height={36}/>
              </PieChart>
            </ResponsiveContainer>
          </ChartBox>

          <ChartBox 
            title="Ventas por Segmento" 
            subtitle="Rendimiento por categoría"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={topCategoriesData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis 
                  dataKey="category" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#94a3b8', fontSize: 11 }} 
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#94a3b8', fontSize: 11 }} 
                  tickFormatter={(v) => `$${v/1000}k`} 
                />
                <Tooltip cursor={{fill: '#f8fafc'}} contentStyle={{ borderRadius: '12px', border: 'none' }} />
                <Bar dataKey="total" fill="#6366f1" radius={[6, 6, 0, 0]} barSize={35} />
              </BarChart>
            </ResponsiveContainer>
          </ChartBox>

          <ChartBox 
            title="Productos Líderes" 
            subtitle="Volumen de salida"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart layout="vertical" data={topProductsData} margin={{ left: 30 }}>
                <XAxis type="number" hide />
                <YAxis 
                  type="category" 
                  dataKey="product" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#334155', fontSize: 11, fontWeight: 600 }} 
                />
                <Tooltip contentStyle={{ borderRadius: '12px', border: 'none' }} />
                <Bar dataKey="sales" fill="#8b5cf6" radius={[0, 6, 6, 0]} barSize={15} />
              </BarChart>
            </ResponsiveContainer>
          </ChartBox>

          <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 p-8 rounded-3xl text-white shadow-xl flex flex-col justify-center space-y-4">
            <div className="bg-white/20 w-fit p-3 rounded-2xl backdrop-blur-md">
              <Package size={28} />
            </div>
            <div>
              <h3 className="text-xl font-bold">Estado del Inventario</h3>
              <p className="text-indigo-100 mt-2 text-sm leading-relaxed">
                Los niveles de stock son saludables. Se recomienda reponer la categoría "Electrónica" en los próximos 10 días para mantener el ritmo de ventas.
              </p>
            </div>
            <button className="bg-white text-indigo-600 w-full py-3 rounded-xl font-bold hover:bg-indigo-50 transition-colors">
              Ver detalles de stock
            </button>
          </div>

        </div>

        <footer className="py-10 border-t border-slate-200 text-center">
          <p className="text-slate-400 text-xs font-semibold tracking-widest uppercase">
            Sistema de Gestión v2.4 • 2023
          </p>
        </footer>
      </div>
    </div>
  );
}