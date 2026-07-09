import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="bg-white border-b border-border-subtle">
      <ol className="max-w-7xl mx-auto px-5 py-3 flex flex-wrap items-center gap-1.5 text-xs text-text-muted">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-1.5">
              {i > 0 && (
                <ChevronRight
                  size={12}
                  className="text-[#a3d3f2]"
                  aria-hidden="true"
                />
              )}
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="hover:text-[#3d815c] transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className="font-semibold text-[#154c66]"
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
