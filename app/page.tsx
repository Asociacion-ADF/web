import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inicio",
  description:
    "Bienvenidos a Acción por los Derechos Fundamentales, A.C. Organización civil dedicada a la defensa y promoción de los derechos fundamentales en México.",
};

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center gap-6 px-4 py-24 text-center sm:px-6 lg:px-8">
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
          Acción por los Derechos Fundamentales
        </h1>
        <p className="max-w-xl text-lg text-gray-500">
          {/* Contenido pendiente */}
          Próximamente
        </p>
      </section>

      {/* Placeholder sections */}
      <section className="border-t border-gray-100 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {["Quiénes somos", "Áreas de trabajo", "Cómo participar"].map(
              (title) => (
                <div
                  key={title}
                  className="rounded-xl border border-gray-200 bg-gray-50 p-6"
                >
                  <h2 className="text-base font-semibold text-gray-700">
                    {title}
                  </h2>
                  <p className="mt-2 text-sm text-gray-400">
                    Contenido pendiente
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
