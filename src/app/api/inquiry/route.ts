import { NextResponse } from "next/server";
import { contactSchema, investorSchema } from "@/lib/inquiry-schemas";
import type { InquiryPayload } from "@/lib/inquiry-schemas";

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid request body." },
      { status: 400 }
    );
  }

  // Honeypot spam protection: if the hidden "website" field is filled, drop silently.
  const suspectedBot =
    (payload as InquiryPayload | undefined)?.website &&
    (payload as InquiryPayload).website!.length > 0;
  if (suspectedBot) {
    return NextResponse.json({ ok: true, message: "Thank you." });
  }

  const isInvestor =
    (payload as InquiryPayload | undefined)?.formType === "investor";
  const result = isInvestor
    ? investorSchema.safeParse(payload)
    : contactSchema.safeParse(payload);

  if (!result.success) {
    const firstIssue = result.error.issues[0];
    return NextResponse.json(
      {
        ok: false,
        message: firstIssue?.message ?? "Please check your submission.",
      },
      { status: 422 }
    );
  }

  // MVP: inquiries are validated and acknowledged. Add email/SMTP or a provider
  // (e.g. Resend, SendGrid) here, or write to a database, to deliver the message.
  console.info(
    `[inquiry:${result.data.formType}] ${result.data.name} <${result.data.email}>`
  );

  return NextResponse.json({
    ok: true,
    message:
      "Thank you. Your inquiry has been received. Our team will contact you with further information.",
  });
}
