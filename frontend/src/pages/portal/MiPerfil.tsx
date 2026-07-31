import { Camera, Download, Wifi, Flame, CheckCircle2, Award } from 'lucide-react';
import Topbar from '../../components/Topbar';
import { PanelHead, Mono, Pill, cn } from '../../components/ui';
import { LogoWillay } from '../../components/Sidebar';

/** QR ilustrativo generado de forma determinística a partir del código.
 *  TODO Spring Boot: reemplazar por el QR real emitido por el backend
 *  (GET /api/alumnos/{codigo}/qr) — mismo token que valida el lector. */
function QrIlustrativo({ seed, size = 108 }: { seed: string; size?: number }) {
  const n = 21;
  const s = seed.split('').reduce((a, c) => a + c.charCodeAt(0), 0);
  const cells: boolean[][] = Array.from({ length: n }, (_, i) =>
    Array.from({ length: n }, (_, j) => ((i * 31 + j * 17 + s * 7 + i * j) % 9) < 4),
  );
  const finder = (r: number, c: number) => {
    for (let i = 0; i < 7; i++) for (let j = 0; j < 7; j++) {
      const borde = i === 0 || i === 6 || j === 0 || j === 6;
      const centro = i >= 2 && i <= 4 && j >= 2 && j <= 4;
      cells[r + i][c + j] = borde || centro;
    }
    for (let i = -1; i <= 7; i++) for (let j = -1; j <= 7; j++) {
      const ri = r + i, cj = c + j;
      if (ri >= 0 && ri < n && cj >= 0 && cj < n && (i === -1 || i === 7 || j === -1 || j === 7)) cells[ri][cj] = false;
    }
  };
  finder(0, 0); finder(0, n - 7); finder(n - 7, 0);
  const cs = size / n;
  return (
    <svg width={size} height={size} className="rounded-[8px] bg-white p-1.5 border border-line" aria-label="Código QR del alumno">
      {cells.map((fila, i) => fila.map((v, j) => v && (
        <rect key={`${i}-${j}`} x={j * cs} y={i * cs} width={cs} height={cs} fill="#17181A" />
      )))}
    </svg>
  );
}

export default function MiPerfil() {
  return (
    <>
      <Topbar title="Mi perfil" subtitle="Tu información, tu tarjeta y tu progreso" />
      <div className="px-8 pb-10 max-w-[1100px] space-y-4">

        {/* Cabecera con identidad */}
        <div className="card overflow-hidden">
          <div className="h-[92px] bg-gradient-to-r from-brand to-[#F2683C] relative">
            <div className="absolute inset-0 opacity-[.15]" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #fff 1.5px, transparent 1.5px)', backgroundSize: '22px 22px' }} />
          </div>
          <div className="px-7 pb-6 flex flex-wrap items-end gap-5 -mt-9">
            <div className="relative">
              <span className="grid place-items-center w-[84px] h-[84px] rounded-full bg-brand-soft text-brand text-[26px] font-bold border-4 border-paper shadow-sm">VQ</span>
              <button className="absolute -bottom-1 -right-1 grid place-items-center w-8 h-8 rounded-full bg-ink-solid text-white hover:bg-brand transition-colors cursor-pointer" title="Cambiar foto">
                <Camera size={14} />
              </button>
            </div>
            <div className="flex-1 min-w-[200px] pb-1">
              <h2 className="text-[19px] font-bold tracking-tight">Valeria Quispe Rojas</h2>
              <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                <Pill tone="brand">5° "A" · Primaria</Pill>
                <Mono className="!text-[11px]">COD. A-2041</Mono>
                <Mono className="!text-[11px]">Tutor: Carlos Mendoza</Mono>
              </div>
            </div>
            <div className="flex gap-6 pb-1">
              <div className="text-center">
                <div className="flex items-center gap-1 justify-center text-warn"><Flame size={15} /><span className="text-[20px] font-bold">12</span></div>
                <div className="label-mono !text-[9px] mt-0.5">Días seguidos</div>
              </div>
              <div className="text-center">
                <div className="flex items-center gap-1 justify-center text-ok"><CheckCircle2 size={15} /><span className="text-[20px] font-bold">18.2</span></div>
                <div className="label-mono !text-[9px] mt-0.5">Promedio</div>
              </div>
              <div className="text-center">
                <div className="flex items-center gap-1 justify-center text-info"><Award size={15} /><span className="text-[20px] font-bold">2</span></div>
                <div className="label-mono !text-[9px] mt-0.5">Méritos</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid xl:grid-cols-2 gap-4">
          {/* Tarjeta digital */}
          <div className="card p-6">
            <PanelHead title="Mi tarjeta digital" sub="Preséntala en el lector si olvidaste tu tarjeta física" />
            <div className="rounded-[16px] bg-ink-solid text-white p-5 relative overflow-hidden">
              <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-brand/20" />
              <div className="absolute -right-2 -bottom-14 w-32 h-32 rounded-full bg-brand/10" />
              <div className="flex items-start justify-between relative">
                <div className="flex items-center gap-2">
                  <LogoWillay size={20} />
                  <span className="font-bold text-[14px]">Willay</span>
                </div>
                <Wifi size={17} className="rotate-90 opacity-80" />
              </div>
              <div className="flex items-end justify-between gap-4 mt-5 relative">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/50">Alumna</div>
                  <div className="font-semibold text-[15px] mt-0.5">Valeria Quispe R.</div>
                  <div className="font-mono text-[11px] text-white/70 mt-2">5° "A" · A-2041</div>
                  <div className="font-mono text-[13px] font-semibold mt-3 tracking-wider">RF-88213</div>
                </div>
                <QrIlustrativo seed="A-2041-RF-88213" />
              </div>
            </div>
            <div className="flex items-center justify-between mt-4">
              <p className="text-[11.5px] text-ink-3">I.E.P. San Martín · válida 2026</p>
              <button className="flex items-center gap-1.5 text-[12px] font-semibold text-brand hover:text-brand-strong transition-colors cursor-pointer">
                <Download size={13} /> Descargar QR
              </button>
            </div>
          </div>

          {/* Mi asistencia + conducta */}
          <div className="space-y-4">
            <div className="card p-6">
              <PanelHead title="Mi asistencia · Julio" />
              <div className="flex gap-8">
                <div><div className="label-mono">Asistí</div><div className="text-[24px] font-bold text-ok">20</div></div>
                <div><div className="label-mono">Tardanzas</div><div className="text-[24px] font-bold text-warn">1</div></div>
                <div><div className="label-mono">Faltas</div><div className="text-[24px] font-bold">0</div></div>
              </div>
              <div className="mt-4 flex gap-1">
                {Array.from({ length: 21 }, (_, i) => (
                  <span key={i} className={cn('h-2 flex-1 rounded-full', i === 9 ? 'bg-warn' : 'bg-ok/70')} title={`Día ${i + 1}`} />
                ))}
              </div>
              <p className="text-[11.5px] text-ink-3 mt-2">Cada barra es un día de clases del mes.</p>
            </div>
            <div className="card p-6">
              <PanelHead title="Mi conducta" />
              <div className="flex items-start gap-3">
                <span className="grid place-items-center w-8 h-8 rounded-full bg-ok-soft text-ok shrink-0"><Award size={14} /></span>
                <div>
                  <p className="text-[13px] font-semibold">Mérito · Representación</p>
                  <p className="text-[12px] text-ink-2 mt-0.5">Primer puesto en concurso de matemática UGEL.</p>
                  <Mono className="!text-[10.5px] mt-1 block">28 JUL 2026 · Dirección</Mono>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
