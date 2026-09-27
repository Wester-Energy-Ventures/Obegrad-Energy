export function formatNepaliCrs(cr: number): string {
  const inLakh = cr * 100;
  return inLakh.toLocaleString("en-IN") + " lakh";
}

export function formatCr(value: number): string {
  return `NPR ${value} crore`;
}

export type Page<TParams extends Record<string, string>> = {
  params: Promise<TParams>;
};

export type SearchParamsPage = {
  params: Promise<Record<string, string | string[]>>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};
