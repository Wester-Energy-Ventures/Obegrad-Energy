import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";
import Logo from "@/components/layout/Logo";
import { footerQuickLinks, footerResources } from "@/data/navigation";
import { company } from "@/data/company";
import { project } from "@/data/project";
import { contact } from "@/data/contact";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-900 text-white">
      <div className="container-site py-14 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Company */}
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
              {company.description.split(".")[0]}.
            </p>
            <div className="mt-6 space-y-3 text-sm text-white/70">
              <p className="flex items-start gap-2.5">
                <MapPin
                  aria-hidden
                  className="text-leaf-300 mt-0.5 h-4 w-4 shrink-0"
                />
                <span>{contact.projectSite}</span>
              </p>
              <p className="flex items-start gap-2.5">
                <Mail
                  aria-hidden
                  className="text-leaf-300 mt-0.5 h-4 w-4 shrink-0"
                />
                <span>{contact.emailDisplay}</span>
              </p>
              <p className="flex items-start gap-2.5">
                <Phone
                  aria-hidden
                  className="text-leaf-300 mt-0.5 h-4 w-4 shrink-0"
                />
                <span>{contact.phoneDisplay}</span>
              </p>
            </div>
            {contact.social.facebook ? (
              <a
                href={contact.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-leaf-300 hover:text-leaf-200 mt-6 inline-flex items-center gap-2.5 rounded-full bg-white/5 px-4 py-2 text-sm font-semibold ring-1 ring-white/15 ring-inset transition-colors"
              >
                <svg
                  aria-hidden
                  viewBox="0 0 24 24"
                  className="h-4 w-4 fill-current"
                >
                  <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.5-3.91 3.78-3.91 1.09 0 2.23.2 2.23.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.57v1.88h2.78l-.45 2.9h-2.33V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
                </svg>
                Follow us on Facebook
              </a>
            ) : null}
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold tracking-wider text-white uppercase">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              {footerQuickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-leaf-300 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Project */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold tracking-wider text-white uppercase">
              Project
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              <li>
                <Link
                  href="/project"
                  className="hover:text-leaf-300 transition-colors"
                >
                  {project.name}
                </Link>
              </li>
              <li>{project.capacity} installed capacity</li>
              <li>{project.type} project</li>
              <li>Jumla, Karnali, Nepal</li>
              <li className="pt-1">
                <Link
                  href="/project/development"
                  className="text-leaf-300 hover:text-leaf-200 inline-flex items-center gap-1.5 transition-colors"
                >
                  View development status
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold tracking-wider text-white uppercase">
              Resources
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              {footerResources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-leaf-300 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-xs text-white/60 sm:flex-row">
            <p>
              © {year} {company.legalName}. All rights reserved.
            </p>
            <ul className="flex items-center gap-5">
              <li>
                <Link
                  href="/disclaimer"
                  className="hover:text-leaf-300 transition-colors"
                >
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link
                  href="/disclaimer"
                  className="hover:text-leaf-300 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/disclaimer"
                  className="hover:text-leaf-300 transition-colors"
                >
                  Terms
                </Link>
              </li>
            </ul>
          </div>
          <p className="mt-4 text-[11px] leading-relaxed text-white/40">
            This website is for general informational purposes and does not
            constitute a public offer, solicitation, investment guarantee or
            financial advice. Project figures shown are planning-stage figures
            and subject to change.
          </p>
        </div>
      </div>
    </footer>
  );
}
