export const financials = {
  title: "Financial Profile",
  irrLabel: "Modelled Planning Case",
  projectIrr: {
    label: "Modelled Project IRR",
    value: "~18.4%",
    detail: "Internal rate of return on the project cash flows.",
  },
  equityIrr: {
    label: "Modelled Equity IRR",
    value: "~24.7%",
    detail: "Internal rate of return on equity cash flows.",
  },
  disclaimer:
    "Financial projections are subject to detailed studies, approvals, financing arrangements, definitive agreements and actual project performance. These are modelled planning-case figures, not guarantees of return.",
} as const;

export const capitalStructure = {
  totalDeposit: "NPR 190 crore",
  debt: { amount: "NPR 133 crore", pct: 70 },
  equity: { amount: "NPR 57 crore", pct: 30 },
  founderEquity: {
    amount: "NPR 25 crore",
    detail: "Founder equity planning allocation",
  },
  privatePlacement: {
    amount: "NPR 32 crore",
    detail: "Investor / private placement planning allocation",
  },
} as const;
