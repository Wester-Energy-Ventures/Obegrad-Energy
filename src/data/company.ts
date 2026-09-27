export type CompanyInfo = {
  name: string;
  shortName: string;
  legalName: string;
  type: string;
  description: string;
  focusAreas: { title: string; description: string }[];
  vision: string;
  mission: string;
  values: { title: string; description: string }[];
  governance: string[];
  /** Not yet supplied by the company — kept null to avoid fabrication. */
  details: {
    established: string | null;
    registrationNumber: string | null;
    companyRegistrationDate: string | null;
    corporateOffice: string | null;
    phone: string | null;
    email: string | null;
    website: string | null;
    panNumber: string | null;
  };
};

export const company: CompanyInfo = {
  name: "Western Energy and Ventures Pvt. Ltd.",
  shortName: "Western Energy and Ventures",
  legalName: "Western Energy and Ventures Pvt. Ltd.",
  type: "Private Limited Company (Nepal)",
  description:
    "Western Energy and Ventures Pvt. Ltd. is a Nepal-based energy venture focused on the development of hydropower infrastructure. The company is engaged in responsible project development, sustainable energy generation and long-term value creation for stakeholders and the communities in which it operates.",
  focusAreas: [
    {
      title: "Hydropower Development",
      description:
        "Developing run-of-river hydropower projects from survey through construction and commissioning.",
    },
    {
      title: "Renewable Energy",
      description:
        "Building clean-energy generation assets that contribute to Nepal's national electricity supply.",
    },
    {
      title: "Infrastructure",
      description:
        "Managing the civil, mechanical and electrical infrastructure required for reliable energy delivery.",
    },
    {
      title: "Responsible Development",
      description:
        "Conducting development activities responsibly, with attention to environmental and community factors.",
    },
  ],
  vision:
    "To contribute to Nepal's sustainable energy future through responsible and efficient hydropower development.",
  mission:
    "To develop reliable clean-energy infrastructure while creating long-term value for stakeholders and communities.",
  values: [
    {
      title: "Integrity",
      description:
        "Acting honestly and transparently in all business relationships.",
    },
    {
      title: "Sustainability",
      description:
        "Developing energy infrastructure that respects people and the environment.",
    },
    {
      title: "Engineering Excellence",
      description:
        "Applying sound engineering and planning discipline to every stage of development.",
    },
    {
      title: "Accountability",
      description:
        "Taking ownership of commitments to stakeholders and communities.",
    },
    {
      title: "Collaboration",
      description:
        "Working constructively with investors, regulators, partners and communities.",
    },
    {
      title: "Long-Term Value",
      description:
        "Building lasting value rather than seeking short-term outcomes.",
    },
  ],
  governance: [
    "Proposed 5–7 member board of directors",
    "Investor representation and observer rights at agreed thresholds",
    "Reserved matters for major corporate actions",
    "Quarterly project and financial reporting",
    "Annual audited financial statements",
    "Controls over related-party transactions",
    "Controls over additional debt",
    "Controls over material project contract changes",
  ],
  details: {
    established: null,
    registrationNumber: null,
    companyRegistrationDate: null,
    corporateOffice: null,
    phone: null,
    email: null,
    website: null,
    panNumber: null,
  },
};
