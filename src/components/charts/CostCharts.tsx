"use client";

import { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import { ChevronDown } from "lucide-react";
import { costBreakdown, investment } from "@/data/investment";

const colors = [
  "#0A4D6F",
  "#145F8A",
  "#2F7BA6",
  "#5298C2",
  "#8DBCD9",
  "#1A9A52",
  "#4BB37C",
  "#7DCBA0",
  "#ADE0C3",
  "#073C57",
  "#0F6F37",
  "#0C5A2D",
  "#55676F",
];

const breakdownData = costBreakdown.map((item, i) => ({
  name: item.item.replace(/&/g, "&amp;"),
  amount: item.amountCr,
  color: colors[i % colors.length],
}));

export function CostDonut() {
  return (
    <div className="relative h-72 w-full sm:h-80">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={breakdownData}
            dataKey="amount"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={112}
            paddingAngle={2}
            strokeWidth={0}
          >
            {breakdownData.map((entry) => (
              <Cell key={entry.name} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            formatter={(value, name) => [
              `NPR ${value} crore`,
              String(name).replace(/&amp;/g, "&"),
            ]}
            contentStyle={{
              borderRadius: 12,
              border: "1px solid #E0EAEF",
              fontSize: 13,
            }}
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-ink text-2xl font-bold">
          NPR {investment.totalCostCr} cr
        </span>
        <span className="text-muted text-xs font-medium">
          Total Project Cost
        </span>
      </div>
    </div>
  );
}

export function CostBars() {
  return (
    <div className="h-[420px] w-full sm:h-[460px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={breakdownData}
          layout="vertical"
          margin={{ left: 0, right: 24 }}
        >
          <CartesianGrid
            stroke="#F1F7FB"
            horizontal={false}
            strokeDasharray="3 3"
          />
          <XAxis
            type="number"
            tick={{ fontSize: 12, fill: "#55676F" }}
            tickLine={false}
            axisLine={{ stroke: "#E0EAEF" }}
          />
          <YAxis
            type="category"
            dataKey="name"
            width={210}
            tick={{ fontSize: 11, fill: "#55676F" }}
            tickLine={false}
            axisLine={false}
          />
          <Tooltip
            formatter={(value) => [`NPR ${value} crore`, "Allocation"]}
            contentStyle={{
              borderRadius: 12,
              border: "1px solid #E0EAEF",
              fontSize: 13,
            }}
          />
          <Bar dataKey="amount" radius={[0, 6, 6, 0]}>
            {breakdownData.map((entry) => (
              <Cell key={entry.name} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function CostTable() {
  const [open, setOpen] = useState(false);
  const total = costBreakdown.reduce((sum, item) => sum + item.amountCr, 0);

  return (
    <div className="border-line overflow-hidden rounded-2xl border bg-white">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="text-ink text-sm font-bold">
          Expandable cost breakdown table
          <span className="bg-brand-50 text-brand-700 ml-2 rounded-full px-2 py-0.5 text-xs font-semibold">
            {costBreakdown.length} line items
          </span>
        </span>
        <ChevronDown
          aria-hidden
          className={`text-muted h-5 w-5 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="border-line overflow-x-auto border-t">
          <table className="w-full min-w-[560px] text-sm">
            <caption className="sr-only">
              Project cost breakdown (planning allocation)
            </caption>
            <thead className="bg-mist text-muted text-left text-xs font-semibold tracking-wider uppercase">
              <tr>
                <th scope="col" className="px-5 py-3">
                  Cost Item
                </th>
                <th scope="col" className="px-5 py-3 text-right">
                  Planning Allocation
                </th>
              </tr>
            </thead>
            <tbody className="divide-line divide-y">
              {costBreakdown.map((item) => (
                <tr key={item.item}>
                  <td className="text-ink px-5 py-3">{item.item}</td>
                  <td className="text-ink px-5 py-3 text-right font-semibold">
                    NPR {item.amountCr} crore
                  </td>
                </tr>
              ))}
              <tr className="bg-leaf-50 text-ink font-bold">
                <td className="px-5 py-3">Total</td>
                <td className="px-5 py-3 text-right">NPR {total} crore</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
