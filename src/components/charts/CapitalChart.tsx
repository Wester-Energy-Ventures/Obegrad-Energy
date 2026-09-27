"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { capitalStructure } from "@/data/financials";

const data = [
  { name: "Senior Debt", value: 70, amount: "NPR 133 crore", color: "#0A4D6F" },
  { name: "Equity", value: 30, amount: "NPR 57 crore", color: "#1A9A52" },
];

export default function CapitalChart() {
  return (
    <div className="flex flex-col items-center gap-6 sm:flex-row">
      <div className="relative h-60 w-full max-w-[260px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              innerRadius={70}
              outerRadius={104}
              paddingAngle={3}
              strokeWidth={0}
            >
              {data.map((entry) => (
                <Cell key={entry.name} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value, name) => {
                const item = data.find((d) => d.name === name);
                return [`${value}% — ${item?.amount ?? ""}`, name as string];
              }}
              contentStyle={{
                borderRadius: 12,
                border: "1px solid #E0EAEF",
                fontSize: 13,
              }}
            />
          </PieChart>
        </ResponsiveContainer>
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-ink text-2xl font-bold">70:30</span>
          <span className="text-muted text-xs font-medium">Debt : Equity</span>
        </div>
      </div>
      <ul className="w-full space-y-3 text-sm">
        <li className="bg-mist flex items-center justify-between gap-3 rounded-xl px-4 py-3">
          <span className="text-muted flex items-center gap-2.5">
            <span aria-hidden className="h-3 w-3 rounded-full bg-[#0A4D6F]" />
            Senior Debt Target
          </span>
          <span className="text-ink font-bold">
            70% · {capitalStructure.debt.amount}
          </span>
        </li>
        <li className="bg-leaf-50 flex items-center justify-between gap-3 rounded-xl px-4 py-3">
          <span className="text-muted flex items-center gap-2.5">
            <span aria-hidden className="h-3 w-3 rounded-full bg-[#1A9A52]" />
            Total Equity
          </span>
          <span className="text-ink font-bold">
            30% · {capitalStructure.equity.amount}
          </span>
        </li>
        <li className="bg-mist flex items-center justify-between gap-3 rounded-xl px-4 py-3">
          <span className="text-muted flex items-center gap-2.5">
            <span aria-hidden className="bg-brand-300 h-3 w-3 rounded-full" />
            Founder Equity Planning Allocation
          </span>
          <span className="text-ink font-bold">
            {capitalStructure.founderEquity.amount}
          </span>
        </li>
        <li className="bg-mist flex items-center justify-between gap-3 rounded-xl px-4 py-3">
          <span className="text-muted flex items-center gap-2.5">
            <span aria-hidden className="bg-leaf-300 h-3 w-3 rounded-full" />
            Investor / Private Placement Planning Allocation
          </span>
          <span className="text-ink font-bold">
            {capitalStructure.privatePlacement.amount}
          </span>
        </li>
      </ul>
    </div>
  );
}
