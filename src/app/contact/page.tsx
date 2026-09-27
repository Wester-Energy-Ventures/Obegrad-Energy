import type { Metadata } from "next";
import { Mail, Phone, MapPin, Building2 } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import DisclaimerBox from "@/components/ui/DisclaimerBox";
import ContactForm from "@/components/forms/ContactForm";
import { contact } from "@/data/contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Western Energy and Ventures Pvt. Ltd. for information about the Obregad Hydropower Project.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const details = [
    {
      icon: Building2,
      label: "Corporate Office",
      value: contact.officeDisplay,
    },
    { icon: MapPin, label: "Project Site", value: contact.projectSite },
    { icon: Mail, label: "Email", value: contact.emailDisplay },
    { icon: Phone, label: "Phone", value: contact.phoneDisplay },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Contact Us"
        subtitle="Reach out to our team for questions about the company or the Obregad Hydropower Project."
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="bg-white py-16 lg:py-24">
        <div className="container-site grid gap-12 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <SectionHeading
              eyebrow="Get in Touch"
              title="We'd love to hear from you"
              subtitle="Investors, partners, contractors, consultants, communities, media and general visitors are all welcome to get in touch."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {details.map((detail) => {
                const Icon = detail.icon;
                return (
                  <div
                    key={detail.label}
                    className="border-line bg-mist rounded-2xl border p-5"
                  >
                    <div className="bg-brand-700 flex h-10 w-10 items-center justify-center rounded-xl text-white">
                      <Icon aria-hidden className="h-5 w-5" />
                    </div>
                    <h2 className="text-ink mt-3 text-sm font-bold">
                      {detail.label}
                    </h2>
                    <p className="text-muted mt-1 text-sm">{detail.value}</p>
                  </div>
                );
              })}
            </div>
            <DisclaimerBox className="mt-6">
              Official contact details will be displayed here as soon as they
              are confirmed by the company. No unconfirmed contact information
              is published.
            </DisclaimerBox>
          </Reveal>
          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
