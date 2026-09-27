export type ProjectStatusKey =
  "obtained" | "inDevelopment" | "planned" | "target" | "pendingApproval";

export type ProjectStatus = {
  key: ProjectStatusKey;
  label: string;
  /** Tailwind classes for the visual status system. */
  badgeClass: string;
  dotClass: string;
};

export const projectStatuses: Record<ProjectStatusKey, ProjectStatus> = {
  obtained: {
    key: "obtained",
    label: "Obtained",
    badgeClass: "bg-leaf-50 text-leaf-700 ring-leaf-200",
    dotClass: "bg-leaf-500",
  },
  inDevelopment: {
    key: "inDevelopment",
    label: "In Development",
    badgeClass: "bg-brand-50 text-brand-800 ring-brand-200",
    dotClass: "bg-brand-600",
  },
  planned: {
    key: "planned",
    label: "Planned",
    badgeClass: "bg-amber-50 text-amber-700 ring-amber-200",
    dotClass: "bg-amber-500",
  },
  target: {
    key: "target",
    label: "Target",
    badgeClass: "bg-amber-50 text-amber-700 ring-amber-200",
    dotClass: "bg-amber-500",
  },
  pendingApproval: {
    key: "pendingApproval",
    label: "Pending Approval",
    badgeClass: "bg-slate-100 text-slate-600 ring-slate-200",
    dotClass: "bg-slate-400",
  },
};

export type ProjectTimelineItem = {
  stage: string;
  description: string;
  status: ProjectStatusKey;
  note?: string;
};

export type TechnicalSpec = {
  label: string;
  value: string;
  detail?: string;
};

export const project = {
  name: "Obregad Hydropower Project",
  capacity: "9 MW",
  type: "Run-of-River",
  river: "Obregad Khola",
  title: "Obregad Hydropower Project",
  subtitle: "9 MW Run-of-River Hydropower Project",
  locationText:
    "Obregad Khola, Patrasi Rural Municipality, Jumla District, Karnali Province, Nepal",
  locationHierarchy: [
    "Nepal",
    "Karnali Province",
    "Jumla District",
    "Patrasi Rural Municipality",
    "Obregad Khola",
  ],
  overview: [
    "The Obregad Hydropower Project is a planned 9 MW run-of-river hydropower project on the Obregad Khola in Patrasi Rural Municipality, Jumla District, Karnali Province, Nepal. It is being developed by Western Energy and Ventures Pvt. Ltd.",
    "Run-of-river projects generate electricity from the natural flow of a river without large-scale water storage. Clean water is diverted through an intake, conveyed through a headrace system and returned to the river after passing through the generating units.",
    "The figures shown on this website reflect the current project planning case and will be finalized through the Detailed Project Report (DPR), detailed engineering studies, the survey licence stage, regulatory approvals, procurement and definitive agreements.",
  ],
  locationNote:
    "Project coordinates are not published at this stage. The map shows the general municipal and district location; exact project coordinates will be confirmed through official project documentation.",
  keyFacts: [
    {
      label: "Location",
      value: "Obregad Khola, Patrasi, Jumla, Karnali, Nepal",
    },
    { label: "Installed Capacity", value: "9 MW" },
    { label: "Project Type", value: "Run-of-River" },
    { label: "Design Discharge", value: "13.46 m³/s" },
    { label: "Planning Net Head", value: "78.03 m" },
    { label: "Annual Saleable Energy", value: "51.96 GWh" },
    { label: "Transmission", value: "Approx. 8 km, 33 kV" },
    { label: "Target COD", value: "June 2030" },
    { label: "Total Project Cost", value: "NPR 190 crore" },
    { label: "Debt", value: "NPR 133 crore" },
    { label: "Equity", value: "NPR 57 crore" },
  ] as TechnicalSpec[],
  technical: {
    generatingUnits: "2 × approximately 4.5 MW",
    turbine: "Francis configuration — final selection through DPR",
    grossHead: "Approximately 88 m",
    netHead: "78.03 m planning basis",
    designDischarge: "13.46 m³/s",
    annualSaleableEnergy: "51.96 GWh planning basis",
    evacuationVoltage: "33 kV",
    evacuationLength: "Approximately 8 km",
  } as Record<string, string>,
  technicalNote:
    "Detailed hydraulic, civil and equipment dimensions will be finalized through the Detailed Project Report (DPR) and the procurement process. Values above are the current planning basis.",
  timeline: [
    {
      stage: "Survey Licence",
      description:
        "Survey licence stage for the project's investigation and study works.",
      status: "obtained" as ProjectStatusKey,
    },
    {
      stage: "DPR & Detailed Studies",
      description:
        "Detailed Project Report, geological, hydrological and engineering studies.",
      status: "inDevelopment" as ProjectStatusKey,
      note: "Development-stage priority",
    },
    {
      stage: "PPA with NEA",
      description: "Power Purchase Agreement with Nepal Electricity Authority.",
      status: "target" as ProjectStatusKey,
      note: "Targeted in project plan",
    },
    {
      stage: "Generation Licence",
      description:
        "Generation licence from the relevant regulator following required studies and approvals.",
      status: "pendingApproval" as ProjectStatusKey,
      note: "Following required studies and approvals",
    },
    {
      stage: "Financial Close",
      description: "Senior debt, equity completion and lender appraisal.",
      status: "planned" as ProjectStatusKey,
      note: "After PPA, DPR, lender appraisal and equity completion",
    },
    {
      stage: "Construction & Commissioning",
      description:
        "Civil works, electromechanical installation and commissioning.",
      status: "target" as ProjectStatusKey,
      note: "Target COD June 2030",
    },
  ] as ProjectTimelineItem[],
  highlights: [
    {
      title: "9 MW Installed Capacity",
      description:
        "Two generating units of approximately 4.5 MW each for the planned configuration.",
    },
    {
      title: "51.96 GWh Annual Saleable Energy",
      description:
        "51.96 GWh of annual saleable energy on the current planning basis.",
    },
    {
      title: "Run-of-River Design",
      description:
        "A run-of-river scheme that returns water to the river after generation.",
    },
    {
      title: "33 kV Evacuation",
      description:
        "Approximately 8 km of 33 kV evacuation to the interconnection point.",
    },
  ] as { title: string; description: string }[],
};
