"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import Logo from "@/components/layout/Logo";
import { navigation } from "@/data/navigation";
import { cn } from "@/lib/cn";

function isHrefActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function DesktopDropdownItem({
  label,
  href,
  active,
}: {
  label: string;
  href: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "text-muted block rounded-lg px-3 py-2 text-sm font-medium transition-colors",
        "hover:bg-brand-50 hover:text-brand-800",
        active && "bg-brand-50 text-brand-800"
      )}
    >
      {label}
    </Link>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openPanel, setOpenPanel] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobile = () => {
    setMobileOpen(false);
    setOpenPanel(null);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && (mobileOpen || openPanel)) {
        setMobileOpen(false);
        setOpenPanel(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen, openPanel]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full bg-white transition-shadow duration-300",
        scrolled
          ? "shadow-[0_1px_0_0_theme(colors.line),0_8px_24px_-12px_rgba(7,59,86,0.16)]"
          : "border-line/70 border-b"
      )}
    >
      <div className="container-site flex h-16 items-center justify-between gap-4 lg:h-[72px]">
        <Logo />

        {/* Desktop navigation */}
        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => {
            const active = isHrefActive(pathname, item.href);
            const hasChildren = !!item.children?.length;
            const panelOpen = openPanel === item.label && hasChildren;

            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => hasChildren && setOpenPanel(item.label)}
                onMouseLeave={() => setOpenPanel(null)}
              >
                <Link
                  href={item.href}
                  aria-haspopup={hasChildren ? "true" : undefined}
                  aria-expanded={hasChildren ? panelOpen : undefined}
                  onFocus={() => hasChildren && setOpenPanel(item.label)}
                  onBlur={() => setOpenPanel(null)}
                  className={cn(
                    "flex items-center gap-1 rounded-full px-3 py-2 text-sm font-semibold transition-colors",
                    active
                      ? "text-brand-800"
                      : "text-ink/80 hover:text-brand-800"
                  )}
                >
                  {item.label}
                  {hasChildren && (
                    <ChevronDown
                      aria-hidden
                      className={cn(
                        "h-3.5 w-3.5 transition-transform",
                        panelOpen && "rotate-180"
                      )}
                    />
                  )}
                </Link>

                <AnimatePresence>
                  {panelOpen && hasChildren && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.16 }}
                      className="absolute top-full left-1/2 z-50 -translate-x-1/2 pt-3"
                    >
                      <div className="border-line w-64 rounded-2xl border bg-white p-2 shadow-[0_16px_48px_-12px_rgba(7,59,86,0.25)]">
                        {item.children!.map((child) => (
                          <DesktopDropdownItem
                            key={child.href}
                            label={child.label}
                            href={child.href}
                            active={isHrefActive(pathname, child.href)}
                          />
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/investors"
            className="bg-brand-700 hover:bg-brand-800 focus-visible:outline-leaf-500 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Investor Information
            <ArrowRight aria-hidden className="h-4 w-4" />
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className="text-ink hover:bg-brand-50 inline-flex h-10 w-10 items-center justify-center rounded-xl lg:hidden"
        >
          {mobileOpen ? (
            <X aria-hidden className="h-6 w-6" />
          ) : (
            <Menu aria-hidden className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile navigation */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            id="mobile-navigation"
            aria-label="Mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="border-line overflow-hidden border-t bg-white lg:hidden"
          >
            <div className="container-site flex max-h-[calc(100dvh-4rem)] flex-col overflow-y-auto py-4">
              <ul className="space-y-1">
                {navigation.map((item) => {
                  const active = isHrefActive(pathname, item.href);
                  const hasChildren = !!item.children?.length;
                  const isOpen = openPanel === item.label;

                  return (
                    <li key={item.label}>
                      <div className="flex items-center justify-between gap-2">
                        <Link
                          href={item.href}
                          onClick={closeMobile}
                          className={cn(
                            "flex-1 rounded-xl px-3 py-2.5 text-sm font-semibold",
                            active
                              ? "bg-brand-50 text-brand-800"
                              : "text-ink hover:bg-mist"
                          )}
                        >
                          {item.label}
                        </Link>
                        {hasChildren && (
                          <button
                            type="button"
                            aria-expanded={isOpen}
                            aria-label={`${isOpen ? "Collapse" : "Expand"} ${item.label} section`}
                            onClick={() =>
                              setOpenPanel(isOpen ? null : item.label)
                            }
                            className="text-muted hover:bg-mist inline-flex h-9 w-9 items-center justify-center rounded-xl"
                          >
                            <ChevronDown
                              aria-hidden
                              className={cn(
                                "h-4 w-4 transition-transform",
                                isOpen && "rotate-180"
                              )}
                            />
                          </button>
                        )}
                      </div>
                      <AnimatePresence initial={false}>
                        {isOpen && hasChildren && (
                          <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.18 }}
                            className="overflow-hidden pl-4"
                          >
                            {item.children!.map((child) => (
                              <li key={child.href}>
                                <Link
                                  href={child.href}
                                  onClick={closeMobile}
                                  className={cn(
                                    "text-muted block rounded-xl px-3 py-2 text-sm",
                                    isHrefActive(pathname, child.href)
                                      ? "bg-mist text-brand-800"
                                      : "hover:bg-mist"
                                  )}
                                >
                                  {child.label}
                                </Link>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </li>
                  );
                })}
              </ul>
              <div className="border-line mt-4 border-t pt-4">
                <Link
                  href="/investors"
                  onClick={closeMobile}
                  className="bg-brand-700 flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white"
                >
                  Investor Information
                  <ArrowRight aria-hidden className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
