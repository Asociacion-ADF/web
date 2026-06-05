export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-2 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-sm font-medium text-gray-700">
            Acción por los Derechos Fundamentales, A.C.
          </p>
          <p className="text-xs text-gray-400">
            © {year} Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
