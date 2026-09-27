"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, ArrowRight } from "lucide-react";
import { investorSchema } from "@/lib/inquiry-schemas";
import type { InvestorPayload } from "@/lib/inquiry-schemas";
import { investment } from "@/data/investment";
import { contact } from "@/data/contact";
import { cn } from "@/lib/cn";

const inputClasses = (hasError: boolean) =>
  cn(
    "w-full rounded-xl border bg-white px-4 py-3 text-sm text-ink placeholder:text-muted/60 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leaf-500",
    hasError
      ? "border-red-300"
      : "border-line hover:border-brand-200 focus:border-brand-400"
  );

const labelClasses = "mb-1.5 block text-sm font-semibold text-ink";

export default function InvestorForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<InvestorPayload>({
    resolver: zodResolver(investorSchema),
    defaultValues: { formType: "investor", preferredRange: "" },
  });

  const [serverError, setServerError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (values: InvestorPayload) => {
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
      <div className="border-leaf-200 bg-leaf-50 flex flex-col items-center justify-center rounded-3xl border px-6 py-14 text-center">
        <CheckCircle2 aria-hidden className="text-leaf-600 h-12 w-12" />
        <h3 className="text-ink mt-4 text-xl font-bold">Thank you</h3>
        <p className="text-muted mt-2 max-w-md text-sm">
          Your inquiry has been received. Our team will contact you with further
          information.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="bg-brand-700 hover:bg-brand-800 mt-6 rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-colors"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="border-line shadow-card rounded-3xl border bg-white p-6 sm:p-8"
    >
      <h2 className="text-ink text-xl font-bold">Investor Inquiry</h2>
      <p className="text-muted mt-1 text-sm">{contact.investorFormNote}</p>

      {/* Honeypot */}
      <div className="absolute -left-full" aria-hidden="true">
        <label htmlFor="contact-website">Leave this field empty</label>
        <input
          id="contact-website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("website")}
        />
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="inv-name" className={labelClasses}>
            Name <span className="text-leaf-600">*</span>
          </label>
          <input
            id="inv-name"
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
          <label htmlFor="inv-org" className={labelClasses}>
            Organization
          </label>
          <input
            id="inv-org"
            type="text"
            autoComplete="organization"
            className={inputClasses(false)}
            placeholder="Company or institution"
            {...register("organization")}
          />
        </div>
        <div>
          <label htmlFor="inv-email" className={labelClasses}>
            Email <span className="text-leaf-600">*</span>
          </label>
          <input
            id="inv-email"
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
          <label htmlFor="inv-phone" className={labelClasses}>
            Phone
          </label>
          <input
            id="inv-phone"
            type="tel"
            autoComplete="tel"
            className={inputClasses(false)}
            placeholder="+977 ..."
            {...register("phone")}
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="inv-interest" className={labelClasses}>
            Investment Interest <span className="text-leaf-600">*</span>
          </label>
          <input
            id="inv-interest"
            type="text"
            className={inputClasses(!!errors.investmentInterest)}
            placeholder="e.g. Obregad Hydropower Project equity participation"
            aria-invalid={!!errors.investmentInterest}
            {...register("investmentInterest")}
          />
          {errors.investmentInterest && (
            <p role="alert" className="mt-1 text-xs font-medium text-red-600">
              {errors.investmentInterest.message}
            </p>
          )}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="inv-range" className={labelClasses}>
            Preferred Investment Range <span className="text-leaf-600">*</span>
          </label>
          <select
            id="inv-range"
            className={inputClasses(!!errors.preferredRange)}
            aria-invalid={!!errors.preferredRange}
            {...register("preferredRange")}
          >
            <option value="">Select a range</option>
            {investment.investmentRanges.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
          {errors.preferredRange && (
            <p role="alert" className="mt-1 text-xs font-medium text-red-600">
              {errors.preferredRange.message}
            </p>
          )}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="inv-message" className={labelClasses}>
            Message
          </label>
          <textarea
            id="inv-message"
            rows={4}
            className={cn(inputClasses(false), "resize-y")}
            placeholder="Any additional information (optional)"
            {...register("message")}
          />
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

      <div className="mt-6">
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-brand-700 hover:bg-brand-800 focus-visible:outline-leaf-500 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          {isSubmitting ? (
            <>
              <Loader2 aria-hidden className="h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              Submit Investor Inquiry
              <ArrowRight aria-hidden className="h-4 w-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
