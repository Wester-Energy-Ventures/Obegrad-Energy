import { Info } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export default function DisclaimerBox({
  children,
  className,
  tone = "light",
}: {
  children: ReactNode;
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    <div
      className={cn(
        "flex items-start gap-3 rounded-2xl p-4 text-sm leading-relaxed sm:p-5",
        tone === "light"
          ? "bg-amber-50/70 text-amber-900 ring-1 ring-amber-200/70 ring-inset"
          : "bg-white/5 text-white/80 ring-1 ring-white/15 ring-inset",
        className
      )}
    >
      <Info
        aria-hidden
        className={cn(
          "mt-0.5 h-5 w-5 shrink-0",
          tone === "light" ? "text-amber-600" : "text-amber-300"
        )}
      />
      <div>{children}</div>
    </div>
  );
}
