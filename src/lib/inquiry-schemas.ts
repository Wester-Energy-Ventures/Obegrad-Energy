import { z } from "zod";

export const contactSchema = z.object({
  formType: z.literal("contact"),
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().optional(),
  organization: z.string().optional(),
  subject: z.string().min(2, "Please enter a subject."),
  message: z
    .string()
    .min(10, "Please enter a message of at least 10 characters."),
  website: z.string().optional(),
});

export const investorSchema = z.object({
  formType: z.literal("investor"),
  name: z.string().min(2, "Please enter your name."),
  organization: z.string().optional(),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().optional(),
  investmentInterest: z
    .string()
    .min(2, "Please describe your investment interest."),
  preferredRange: z.string().min(1, "Please select an investment range."),
  message: z.string().optional(),
  website: z.string().optional(),
});

export type ContactPayload = z.infer<typeof contactSchema>;
export type InvestorPayload = z.infer<typeof investorSchema>;
export type InquiryPayload = ContactPayload | InvestorPayload;
