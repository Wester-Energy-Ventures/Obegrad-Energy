import Breadcrumbs from "@/components/ui/Breadcrumbs";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  crumbs: { label: string; href?: string }[];
};

export default function PageHeader({
  eyebrow,
  title,
  subtitle,
  crumbs,
}: PageHeaderProps) {
  return (
    <section className="bg-brand-800 relative overflow-hidden text-white">
      <div
        aria-hidden
        className="from-brand-900 via-brand-800 to-brand-700 absolute inset-0 bg-gradient-to-br"
      />
      <div aria-hidden className="bg-grid absolute inset-0 opacity-60" />
      <div
        aria-hidden
        className="bg-leaf-500/20 absolute -right-24 -bottom-24 h-72 w-72 rounded-full blur-3xl"
      />
      <div className="container-site relative py-14 sm:py-20">
        <Breadcrumbs crumbs={crumbs} />
        <div className="mt-8 max-w-3xl">
          {eyebrow && (
            <p className="text-leaf-200 mb-3 text-xs font-semibold tracking-widest uppercase">
              {eyebrow}
            </p>
          )}
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
