export const contact = {
  companyName: "Western Energy and Ventures Pvt. Ltd.",
  projectSite:
    "Obregad Khola, Patrasi Rural Municipality, Jumla District, Karnali Province, Nepal",
  /** Official contact details will be added here when provided by the company. */
  email: null,
  phone: null,
  corporateOffice: null,
  social: {
    facebook:
      "https://www.facebook.com/p/Western-Energy-Ventures-61586105930086/",
    linkedin: null,
    youtube: null,
  },
  get emailDisplay(): string {
    return this.email ?? "[OFFICIAL EMAIL — TO BE PROVIDED]";
  },
  get phoneDisplay(): string {
    return this.phone ?? "[OFFICIAL PHONE — TO BE PROVIDED]";
  },
  get officeDisplay(): string {
    return this.corporateOffice ?? "[OFFICIAL OFFICE ADDRESS — TO BE PROVIDED]";
  },
  formNote:
    "Submitting this form does not create any agreement. Your inquiry will be reviewed by our team.",
  investorFormNote:
    "Submitting this form does not create an investment agreement or any ownership right. It is an expression of interest only.",
};

export const contactFormSchema = {
  name: "Name",
  email: "Email",
  phone: "Phone",
  organization: "Organization",
  subject: "Subject",
  message: "Message",
} as const;

export const investorFormSchema = {
  name: "Name",
  organization: "Organization",
  email: "Email",
  phone: "Phone",
  investmentInterest: "Investment Interest",
  preferredRange: "Preferred Investment Range",
  message: "Message",
} as const;
