import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Users,
  Briefcase,
  TrendingUp,
  GraduationCap,
  BookOpen,
  Building2,
  Utensils,
  BarChart2,
  Heart,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Rufo Ibarra Batista | Trayectoria profesional y fundador de AADF",
  description:
    "Conoce la trayectoria profesional, académica, empresarial y pública de Rufo Ibarra Batista, fundador y presidente de Acción por los Derechos Fundamentales, A.C. en Tijuana.",
};

export default function TrayectoriaRufoIbarraBatista() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative bg-[#154c66] text-white overflow-hidden py-24 md:py-32">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, #d1e9f8 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="max-w-7xl mx-auto px-5 relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7">
            <span className="inline-block px-4 py-1 border border-[#a3d3f2] text-[#a3d3f2] rounded-full text-sm font-semibold mb-6 uppercase tracking-widest">
              Trayectoria Profesional
            </span>
            <h1 className="font-display text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Rufo Ibarra Batista
            </h1>
            <p className="font-display text-2xl font-bold text-[#c5e7ff] mb-8 max-w-2xl leading-snug">
              Fundador y presidente de Acción por los Derechos Fundamentales, A.C.
            </p>
            <p className="text-lg text-[#c5e7ff]/80 mb-10 max-w-xl leading-relaxed">
              Contador público con amplia trayectoria en los ámbitos académico, empresarial, social y público en Baja California. Su experiencia fundamenta el rigor y la transparencia de la asociación civil.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/nosotros"
                className="bg-[#3d815c] px-8 py-4 rounded-lg text-sm font-semibold text-white hover:bg-[#2d6347] transition-all flex items-center justify-center gap-2"
              >
                <ArrowLeft size={15} aria-hidden="true" /> Volver a Nosotros
              </Link>
              <Link
                href="/nosotros"
                className="border border-white/30 px-8 py-4 rounded-lg text-sm font-semibold text-white hover:bg-white/10 transition-all text-center"
              >
                Conocer Acción por los Derechos Fundamentales
              </Link>
            </div>
          </div>

          <div className="hidden md:block md:col-span-5">
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-2xl border border-white/10">
              <Image
                src="/eventos/rufo-ibarra-batista-retrato-biblioteca-01.jpg"
                alt="Rufo Ibarra Batista, fundador de Acción por los Derechos Fundamentales, A.C."
                fill
                className="object-cover object-top"
                sizes="40vw"
                priority
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#154c66]/60 to-transparent"
                aria-hidden="true"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="h-1 w-24 bg-[#3d815c] mb-2" aria-hidden="true" />
                <p className="text-xs font-bold tracking-[0.2em] text-white/60 uppercase">
                  Legitimidad y Compromiso
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECCIÓN 1: VINCULACIÓN ─── */}
      <section className="py-20 lg:py-28 px-5 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4 border-l-4 border-[#3d815c] pl-8">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#1c1b1b]">
              Una vida vinculada a Tijuana y Baja California
            </h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-lg text-text-soft leading-relaxed mb-12">
              Nacido en Cananea en 1949, Rufo Ibarra Batista ha forjado su vida y carrera en el dinamismo de Baja California. Residente de Tijuana desde 1962, su compromiso con la región se consolidó a través de su formación académica en la Universidad Autónoma de Baja California (UABC).
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="p-8 bg-[#f8fbfe] rounded-lg border border-border-subtle">
                <div className="text-[#3d815c] font-display text-3xl font-bold mb-2">1949</div>
                <p className="text-sm font-semibold text-text-soft">Origen en Cananea, Sonora</p>
              </div>
              <div className="p-8 bg-[#f8fbfe] rounded-lg border border-border-subtle">
                <div className="text-[#3d815c] font-display text-3xl font-bold mb-2">1962</div>
                <p className="text-sm font-semibold text-text-soft">Arribo a la ciudad de Tijuana</p>
              </div>
              <div className="p-8 bg-[#f8fbfe] rounded-lg border border-border-subtle">
                <div className="text-[#3d815c] font-display text-3xl font-bold mb-2">UABC</div>
                <p className="text-sm font-semibold text-text-soft">Contador Público Titulado</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECCIÓN 2: TRAYECTORIA PROFESIONAL Y GREMIAL ─── */}
      <section className="py-20 lg:py-28 px-5 bg-[#f8fbfe]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#3d815c] text-sm font-bold tracking-widest uppercase mb-4 block">
              Liderazgo Institucional
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#1c1b1b]">
              Trayectoria Profesional y Gremial
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                Icon: Users,
                title: "Liderazgo Gremial",
                body: "Presidente del Colegio de Contadores Públicos de Baja California y de la Academia de Estudios Fiscales de Baja California.",
                tag: "Institucionalismo",
              },
              {
                Icon: Briefcase,
                title: "Desarrollo Empresarial",
                body: "Socio principal en RSM México y fundador de la firma Rufo Ibarra de la Cruz y Mier.",
                tag: "Visión Global",
              },
              {
                Icon: TrendingUp,
                title: "Promoción Económica",
                body: "Presidente de Ejecutivos de Venta y Mercadotecnia, así como de ASERTIS.",
                tag: "Impulso Regional",
              },
            ].map(({ Icon, title, body, tag }) => (
              <div
                key={title}
                className="bg-white p-10 border border-border-subtle hover:shadow-xl transition-all duration-500 rounded-lg group"
              >
                <div className="w-12 h-12 bg-[#3d815c]/10 flex items-center justify-center rounded-lg mb-6 group-hover:bg-[#3d815c] group-hover:text-white transition-colors text-[#3d815c]">
                  <Icon size={22} aria-hidden="true" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-4">{title}</h3>
                <p className="text-text-soft mb-6 text-base leading-relaxed">{body}</p>
                <div className="h-px w-full bg-border-subtle mb-4" aria-hidden="true" />
                <p className="text-[#3d815c] text-sm font-semibold">{tag}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECCIÓN 3: ACADEMIA ─── */}
      <section className="py-20 lg:py-28 px-5 bg-[#f6f3f2] overflow-hidden relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div
              className="absolute -top-10 -left-10 w-40 h-40 bg-[#3d815c]/5 rounded-full blur-3xl"
              aria-hidden="true"
            />
            <div className="relative rounded-lg overflow-hidden shadow-2xl border border-border-subtle aspect-[4/5]">
              <Image
                src="/eventos/rufo-ibarra-batista-retrato-institucional-01.jpg"
                alt="C.P. Rufo Ibarra Batista, trayectoria académica en Baja California"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#3d815c] text-white p-8 rounded-lg z-20 shadow-xl">
              <div className="font-display text-4xl font-bold mb-1">20+</div>
              <p className="text-sm font-semibold">Años de Docencia</p>
            </div>
          </div>

          <div>
            <span className="text-[#3d815c] text-sm font-bold tracking-widest uppercase mb-4 block">
              Formación de Talento
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#1c1b1b] mb-6">
              Trayectoria Académica
            </h2>
            <p className="text-lg text-text-soft mb-8 leading-relaxed">
              Convencido de que la educación es la base del cambio social, Rufo Ibarra Batista ha dedicado décadas a la formación de nuevas generaciones en las instituciones más prestigiadas de Baja California.
            </p>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <GraduationCap size={22} className="text-[#3d815c] mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <p className="font-display text-xl font-bold mb-1">UABC Tijuana</p>
                  <p className="text-text-soft text-base leading-relaxed">
                    Catedrático titular en materias fiscales y contables.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <BookOpen size={22} className="text-[#3d815c] mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <p className="font-display text-xl font-bold mb-1">CETYS Universidad Campus Tijuana</p>
                  <p className="text-text-soft text-base leading-relaxed">
                    Docencia en materia fiscal, ética profesional y administración.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ─── SECCIÓN 4: SERVICIO PÚBLICO ─── */}
      <section className="py-20 lg:py-28 px-5 bg-[#154c66] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end mb-16">
            <div className="md:col-span-6">
              <span className="text-[#a3d3f2] text-sm font-bold tracking-widest uppercase mb-4 block">
                Responsabilidad Ética
              </span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold">
                Trayectoria en el Servicio Público
              </h2>
            </div>
            <div className="md:col-span-6 border-l border-white/20 pl-8">
              <p className="text-base text-[#c5e7ff]/70 leading-relaxed">
                Una carrera marcada por la transparencia institucional, enfocada en la gestión eficiente de recursos y la rendición de cuentas hacia la ciudadanía de Baja California.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 border border-white/10 bg-white/5 rounded-lg">
              <p className="text-[#a3d3f2] text-sm font-bold mb-4">Gobierno del Estado</p>
              <h3 className="font-display text-xl font-bold mb-2">
                Secretario de la Contraloría General del Estado de Baja California
              </h3>
              <p className="text-[#c5e7ff]/60 text-base leading-relaxed">
                Supervisión y auditoría de la gestión pública estatal.
              </p>
            </div>
            <div className="p-8 border border-white/10 bg-white/5 rounded-lg">
              <p className="text-[#a3d3f2] text-sm font-bold mb-4">Ayuntamiento de Tijuana</p>
              <h3 className="font-display text-xl font-bold mb-2">
                Secretario de Finanzas en el Ayuntamiento de Tijuana
              </h3>
              <p className="text-[#c5e7ff]/60 text-base leading-relaxed">
                Estructuración fiscal y financiera del Municipio de Tijuana.
              </p>
            </div>
            <div className="p-8 border border-white/10 bg-white/5 rounded-lg">
              <p className="text-[#a3d3f2] text-sm font-bold mb-4">Representación</p>
              <h3 className="font-display text-xl font-bold mb-2">
                Alcalde Suplente en el Ayuntamiento de Tijuana
              </h3>
              <p className="text-[#c5e7ff]/60 text-base leading-relaxed">
                Compromiso directo con la gobernanza municipal de Tijuana.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECCIÓN 5: ACTIVIDAD EMPRESARIAL Y CIVIL ACTUAL ─── */}
      <section className="py-20 lg:py-28 px-5 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-center text-[#1c1b1b] mb-16">
            Actividad Empresarial y Civil Actual
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-2 bg-[#f8fbfe] p-8 rounded-lg border border-border-subtle flex flex-col justify-between hover:border-[#3d815c] transition-all">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Building2 size={22} className="text-[#3d815c]" aria-hidden="true" />
                  <h3 className="font-display text-2xl font-bold">Rufo Ibarra de la Cruz y Mier</h3>
                </div>
                <p className="text-text-soft text-base leading-relaxed">
                  Firma de asesoría contable y financiera con alcance regional y nacional.
                </p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg border border-border-subtle hover:border-[#3d815c] transition-all flex flex-col justify-between">
              <Utensils size={22} className="text-[#3d815c] mb-4" aria-hidden="true" />
              <div>
                <h3 className="text-sm font-bold uppercase mb-2">Artesanos Gastronómicos</h3>
                <p className="text-text-soft text-base leading-relaxed">Oryx Capital y el impulso al sector culinario.</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg border border-border-subtle hover:border-[#3d815c] transition-all flex flex-col justify-between">
              <BarChart2 size={22} className="text-[#3d815c] mb-4" aria-hidden="true" />
              <div>
                <h3 className="text-sm font-bold uppercase mb-2">FIBAR</h3>
                <p className="text-text-soft text-base leading-relaxed">Gestión patrimonial y financiera estratégica.</p>
              </div>
            </div>
            <div className="md:col-span-4 bg-[#3d815c] text-white p-8 rounded-lg flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                  <Heart size={28} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold mb-1">
                    Acción por los Derechos Fundamentales, A.C.
                  </h3>
                  <p className="text-[#c5e7ff] text-base opacity-90">
                    Presidencia de la asociación civil apartidista dedicada a la participación ciudadana y la defensa de derechos fundamentales.
                  </p>
                </div>
              </div>
              <Link
                href="/nosotros"
                className="bg-white text-[#3d815c] px-8 py-3 rounded-lg text-sm font-bold hover:bg-[#f8fbfe] transition-all shrink-0 flex items-center gap-2"
              >
                Ver iniciativas <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECCIÓN 6: PLATAFORMA CIUDADANA ─── */}
      <section className="py-20 lg:py-28 px-5 bg-[#f8fbfe] relative overflow-hidden">
        <div
          className="absolute top-0 right-0 w-1/3 h-full bg-[#3d815c]/5 skew-x-12 translate-x-20"
          aria-hidden="true"
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-4xl">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#1c1b1b] mb-8 leading-tight">
              Una plataforma ciudadana impulsada desde la experiencia
            </h2>
            <p className="text-lg text-text-soft leading-relaxed mb-8">
              Acción por los Derechos Fundamentales, A.C. no nace de la improvisación. Surge de una vida de análisis técnico, rigor financiero y conocimiento de las estructuras del Estado. Rufo Ibarra Batista concibe esta plataforma como un organismo{" "}
              <strong className="text-[#1c1b1b] font-bold">no partidista</strong>, diseñado para que la ciudadanía tenga espacios reales de participación, formación cívica y diálogo social.
            </p>
            <blockquote className="border-l-4 border-[#3d815c] pl-8 py-4 italic text-[#1c1b1b] font-display text-2xl font-bold">
              &ldquo;La participación ciudadana necesita experiencia, comunidad y propósito.&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 lg:py-28 px-5 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#154c66] rounded-xl p-12 text-center text-white relative overflow-hidden">
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-5 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 2px 2px, #d1e9f8 1px, transparent 0)",
                backgroundSize: "40px 40px",
              }}
            />
            <h2 className="font-display text-3xl lg:text-4xl font-bold mb-6 relative z-10">
              Conoce más sobre Acción por los Derechos Fundamentales
            </h2>
            <p className="text-lg text-[#c5e7ff]/80 mb-10 max-w-2xl mx-auto relative z-10 leading-relaxed">
              Una asociación civil apartidista comprometida con la participación ciudadana, la formación cívica y la defensa de derechos fundamentales en Tijuana, Baja California.
            </p>
            <div className="flex flex-wrap justify-center gap-6 relative z-10">
              <Link
                href="/nosotros"
                className="text-white hover:text-[#a3d3f2] text-sm font-semibold border-b border-white/30 pb-1 transition-colors"
              >
                Sobre Nosotros
              </Link>
              <Link
                href="/programas"
                className="text-white hover:text-[#a3d3f2] text-sm font-semibold border-b border-white/30 pb-1 transition-colors"
              >
                Programas
              </Link>
              <Link
                href="/contacto"
                className="text-white hover:text-[#a3d3f2] text-sm font-semibold border-b border-white/30 pb-1 transition-colors"
              >
                Contacto Directo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
