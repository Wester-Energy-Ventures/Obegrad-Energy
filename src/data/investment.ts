export type InvestmentTicket = {
  ticket: string;
  share: string;
  note?: string;
};

export type CostBreakdownItem = {
  item: string;
  amountCr: number;
};

export const investment = {
  headline: "Investment Structure",
  sourceLabel: "Source: Obregad Hydropower Project Investor Booklet",
  totalCostCr: 190,
  debtCr: 133,
  debtPct: 70,
  equityCr: 57,
  equityPct: 30,
  founderEquityCr: 25,
  privatePlacementCr: 32,
  disclaimer:
    "Illustrative only. Final ownership depends on agreed valuation, subscription price, allotment and definitive shareholder documentation.",
  costBreakdownDisclaimer:
    "Planning allocation on the current base case. This is not a DPR bill of quantities; figures may change following detailed studies, approvals, financing arrangements and definitive agreements.",
  totalCost: {
    label: "Total Project Cost",
    value: "NPR 190 crore",
  },
  tickets: [
    { ticket: "NPR 25 lakh", share: "0.44%" },
    { ticket: "NPR 50 lakh", share: "0.88%" },
    { ticket: "NPR 1 crore", share: "1.75%" },
    { ticket: "NPR 2 crore", share: "3.51%" },
    { ticket: "NPR 5 crore", share: "8.77%" },
  ] as InvestmentTicket[],
  investmentRanges: [
    "Under NPR 25 lakh",
    "NPR 25–50 lakh",
    "NPR 50 lakh–1 crore",
    "NPR 1–2 crore",
    "NPR 2–5 crore",
    "Above NPR 5 crore",
    "Other",
  ],
} as const;

export const costBreakdown: CostBreakdownItem[] = [
  { item: "Civil Works", amountCr: 62 },
  { item: "Electro-mechanical Equipment", amountCr: 32 },
  { item: "Hydro-mechanical Works & Penstock", amountCr: 18 },
  {
    item: "Transmission, Switchyard & Grid Interconnection",
    amountCr: 10,
  },
  { item: "Access Road", amountCr: 5 },
  { item: "Land Acquisition & Compensation", amountCr: 5 },
  {
    item: "Engineering, DPR, Design & Construction Supervision",
    amountCr: 8,
  },
  {
    item: "Environmental, Social, Permits & Community Programs",
    amountCr: 3,
  },
  {
    item: "Construction Facilities, Camps, Logistics & Temporary Works",
    amountCr: 7,
  },
  {
    item: "Insurance, Taxes, Duties & Owner Administration",
    amountCr: 5,
  },
  {
    item: "Interest During Construction & Financing Costs",
    amountCr: 15,
  },
  { item: "Contingency & Escalation Reserve", amountCr: 15 },
  {
    item: "Commissioning, Initial Spares & Working Capital",
    amountCr: 5,
  },
];
