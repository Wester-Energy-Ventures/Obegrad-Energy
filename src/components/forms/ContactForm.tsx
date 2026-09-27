"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { contactSchema } from "@/lib/inquiry-schemas";
import type { ContactPayload } from "@/lib/inquiry-schemas";
import { contact } from "@/data/contact";
import { cn } from "@/lib/cn";

const inputClasses = (hasError: boolean) =>
  cn(
    "w-full rounded-xl border bg-mist/50 px-4 py-3 text-sm text-ink placeholder:text-muted/60 shadow-sm transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leaf-500",
    hasError
      ? "border-red-300 bg-red-50/40"
      : "border-line hover:border-brand-300 focus:border-brand-400 focus:bg-white"
  );

const labelClasses = "mb-1.5 block text-sm font-semibold text-ink";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactPayload>({
    resolver: zodResolver(contactSchema),
    defaultValues: { formType: "contact" },
  });

  const [serverError, setServerError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (values: ContactPayload) => {
    setServerError(null);
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        setServerError(
          data.message ?? "Something went wrong. Please try again."
        );
        return;
      }
      reset();
      setSubmitted(true);
    } catch {
      setServerError("Network error. Please try again.");
    }
  };

  if (submitted) {
    return (
      <div className="border-leaf-200 bg-leaf-50/60 relative overflow-hidden rounded-3xl border px-6 py-14 text-center">
        <div
          aria-hidden
          className="from-leaf-500/15 absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r to-transparent"
        />
        <div className="bg-leaf-500 mx-auto flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg shadow-leaf-500/25">
          <CheckCircle2 aria-hidden className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-ink mt-5 text-xl font-bold">Thank you</h3>
        <p className="text-muted mt-2 max-w-md text-sm">
          Your inquiry has been received. Our team will contact you with further
          information.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="bg-brand-700 hover:bg-brand-800 mt-6 rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="border-line shadow-card relative overflow-hidden rounded-3xl border bg-white p-6 sm:p-8"
    >
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brand-700 via-brand-500 to-leaf-500"
      />
      <div className="flex items-start gap-4">
        <div className="from-brand-700 to-leaf-600 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-sm">
          <Send aria-hidden className="h-5 w-5" />
        </div>
        <div>
          <h2 className="text-ink text-xl font-bold">Send an Inquiry</h2>
          <p className="text-muted mt-1 text-sm">{contact.formNote}</p>
        </div>
      </div>

      {/* Honeypot */}
      <div className="absolute -left-full" aria-hidden="true">
        <label htmlFor="website">Leave this field empty</label>
        <input
          id="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("website")}
        />
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className={labelClasses}>
            Name <span className="text-leaf-600">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            autoComplete="name"
            className={inputClasses(!!errors.name)}
            placeholder="Your full name"
            aria-invalid={!!errors.name}
            {...register("name")}
          />
          {errors.name && (
            <p role="alert" className="mt-1 text-xs font-medium text-red-600">
              {errors.name.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="contact-email" className={labelClasses}>
            Email <span className="text-leaf-600">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            autoComplete="email"
            className={inputClasses(!!errors.email)}
            placeholder="you@example.com"
            aria-invalid={!!errors.email}
            {...register("email")}
          />
          {errors.email && (
            <p role="alert" className="mt-1 text-xs font-medium text-red-600">
              {errors.email.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="contact-phone" className={labelClasses}>
            Phone
          </label>
          <input
            id="contact-phone"
            type="tel"
            autoComplete="tel"
            className={inputClasses(false)}
            placeholder="+977 ..."
            {...register("phone")}
          />
        </div>
        <div>
          <label htmlFor="contact-org" className={labelClasses}>
            Organization
          </label>
          <input
            id="contact-org"
            type="text"
            autoComplete="organization"
            className={inputClasses(false)}
            placeholder="Company or institution"
            {...register("organization")}
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="contact-subject" className={labelClasses}>
            Subject <span className="text-leaf-600">*</span>
          </label>
          <input
            id="contact-subject"
            type="text"
            className={inputClasses(!!errors.subject)}
            placeholder="How can we help?"
            aria-invalid={!!errors.subject}
            {...register("subject")}
          />
          {errors.subject && (
            <p role="alert" className="mt-1 text-xs font-medium text-red-600">
              {errors.subject.message}
            </p>
          )}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="contact-message" className={labelClasses}>
            Message <span className="text-leaf-600">*</span>
          </label>
          <textarea
            id="contact-message"
            rows={5}
            className={cn(inputClasses(!!errors.message), "resize-y")}
            placeholder="Write your message..."
            aria-invalid={!!errors.message}
            {...register("message")}
          />
          {errors.message && (
            <p role="alert" className="mt-1 text-xs font-medium text-red-600">
              {errors.message.message}
            </p>
          )}
        </div>
      </div>

      {serverError && (
        <p
          role="alert"
          className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700 ring-1 ring-red-200 ring-inset"
        >
          {serverError}
        </p>
      )}

      <div className="mt-6 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={isSubmitting}
          className="from-brand-700 to-leaf-600 hover:from-brand-600 hover:to-leaf-500 focus-visible:outline-leaf-500 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r px-7 py-3 text-sm font-semibold text-white shadow-md shadow-brand-700/20 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          {isSubmitting ? (
            <>
              <Loader2 aria-hidden className="h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send aria-hidden className="h-4 w-4" />
              Send Inquiry
            </>
          )}
        </button>
        <p className="text-muted text-xs sm:ml-1">
          Fields marked <span className="text-leaf-600">*</span> are required.
        </p>
      </div>
    </form>
  );
}
