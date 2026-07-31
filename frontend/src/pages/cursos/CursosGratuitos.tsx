import { useEffect, useState } from 'react';
import {
  FileText, PlayCircle, Book, Image as ImageIcon, Plus, Upload,
  Pencil, Trash2, Download, Users, Sparkles, FolderPlus,
} from 'lucide-react';
import Topbar from '../../components/Topbar';
import { PanelHead, Mono, Pill, Button, cn } from '../../components/ui';
import { getCursosGratuitos } from '../../services/api';
import { useAuth } from '../../context/AuthContext';
import type { CursoGratuito, TipoRecurso } from '../../types';

const TIPO: Record<TipoRecurso, { icon: React.ReactNode; label: string; cls: string }> = {
  pdf: { icon: <FileText size={15} />, label: 'PDF', cls: 'bg-bad-soft text-bad' },
  video: { icon: <PlayCircle size={15} />, label: 'Video', cls: 'bg-info-soft text-info' },
  libro: { icon: <Book size={15} />, label: 'Libro', cls: 'bg-warn-soft text-warn' },
  imagen: { icon: <ImageIcon size={15} />, label: 'Imagen', cls: 'bg-ok-soft text-ok' },
};

/**
 * Cursos gratuitos del sistema.
 * El ADMINISTRADOR gestiona todo el contenido: crea cursos y categorías,
 * y sube libros, PDFs, imágenes y videos. Los demás roles solo consumen.
 * La estructura es data-driven: agregar un curso nuevo = agregar un registro,
 * sin tocar la interfaz.
 * TODO Spring Boot: CRUD /api/cursos-gratuitos + subida multipart de recursos.
 */
export default function CursosGratuitos() {
  const { usuario } = useAuth();
  const esAdmin = usuario?.rol === 'admin';
  const [cursos, setCursos] = useState<CursoGratuito[]>([]);

  useEffect(() => { getCursosGratuitos().then(setCursos); }, []);

  return (
    <>
      <Topbar
        title="Cursos gratuitos"
        subtitle={esAdmin ? 'Gestiona el contenido educativo del sistema' : 'Material educativo gratuito para toda la comunidad'}
      />
      <div className="px-4 sm:px-8 pb-10 max-w-[1100px] space-y-4">

        {esAdmin && (
          <div className="flex justify-end gap-2">
            <Button variant="ghost"><FolderPlus size={14} /> Nueva categoría</Button>
            <Button><Plus size={14} /> Nuevo curso</Button>
          </div>
        )}

        {cursos.map(curso => (
          <div key={curso.id} className="space-y-4">
            {/* Portada del curso */}
            <div className="card overflow-hidden">
              <div className="bg-gradient-to-r from-brand to-[#F2683C] text-white px-7 py-6 relative">
                <div className="absolute inset-0 opacity-[.12]" style={{ backgroundImage: 'radial-gradient(circle at 80% 30%, #fff 1.5px, transparent 1.5px)', backgroundSize: '20px 20px' }} />
                <div className="relative flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-white/70">
                      <Sparkles size={12} /> Curso gratuito
                    </div>
                    <h2 className="text-[24px] font-bold tracking-tight mt-1">{curso.titulo}</h2>
                    <p className="text-[13px] text-white/85 mt-1.5 max-w-[520px]">{curso.descripcion}</p>
                  </div>
                  <div className="flex items-center gap-2 bg-white/15 rounded-[10px] px-4 py-2.5 backdrop-blur">
                    <Users size={15} />
                    <span className="text-[13px] font-semibold">{curso.inscritos} inscritos</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Categorías con recursos */}
            {curso.categorias.map(cat => (
              <div key={cat.id} className="card p-6">
                <PanelHead
                  title={cat.nombre}
                  sub={`${cat.recursos.length} recursos`}
                  right={esAdmin && (
                    <div className="flex gap-2">
                      <Button variant="ghost" className="!py-1.5"><Upload size={13} /> Subir recurso</Button>
                      <button className="grid place-items-center w-8 h-8 rounded-[9px] border border-line text-ink-3 hover:text-ink hover:border-line-2 transition-colors cursor-pointer" title="Editar categoría"><Pencil size={13} /></button>
                    </div>
                  )}
                />
                <div className="space-y-1">
                  {cat.recursos.map(r => {
                    const t = TIPO[r.tipo];
                    return (
                      <div key={r.id} className="flex items-center gap-3.5 rounded-[10px] px-2 py-2.5 -mx-2 hover:bg-canvas transition-colors group">
                        <span className={cn('grid place-items-center w-9 h-9 rounded-[10px] shrink-0', t.cls)}>{t.icon}</span>
                        <div className="flex-1 min-w-0">
                          <p className="text-[13px] font-semibold truncate">{r.titulo}</p>
                          <Mono className="!text-[10.5px]">{t.label}{r.tamano ? ` · ${r.tamano}` : ''}{r.duracion ? ` · ${r.duracion}` : ''}</Mono>
                        </div>
                        {r.tipo === 'video'
                          ? <Pill tone="info"><PlayCircle size={11} /> Reproducir</Pill>
                          : (
                            <button className="flex items-center gap-1.5 text-[12px] font-semibold text-ink-2 hover:text-brand transition-colors cursor-pointer">
                              <Download size={13} /> Descargar
                            </button>
                          )}
                        {esAdmin && (
                          <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button className="grid place-items-center w-7 h-7 rounded-[8px] text-ink-3 hover:text-ink hover:bg-line/50 transition-colors cursor-pointer" title="Editar"><Pencil size={12} /></button>
                            <button className="grid place-items-center w-7 h-7 rounded-[8px] text-ink-3 hover:text-bad hover:bg-bad-soft transition-colors cursor-pointer" title="Eliminar"><Trash2 size={12} /></button>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        ))}

        {esAdmin && (
          <p className="text-[11.5px] text-ink-3">
            La plataforma está preparada para agregar nuevos cursos sin cambiar la estructura: cada curso admite categorías ilimitadas con PDFs, libros, imágenes y videos.
          </p>
        )}
      </div>
    </>
  );
}
