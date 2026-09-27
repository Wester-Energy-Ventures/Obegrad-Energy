// Generates clearly-marked placeholder PDFs for the /downloads page.
// Run: node scripts/gen-placeholder-pdfs.mjs
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "public", "documents");
mkdirSync(outDir, { recursive: true });

function pdfEscape(text) {
  return text
    .replace(/\\/g, "\\\\")
    .replace(/\(/g, "\\(")
    .replace(/\)/g, "\\)");
}

function buildPdf(rows) {
  const objects = [];
  // Page content stream text
  const textOps = rows
    .map(
      (r, i) =>
        `BT /F1 ${r.size} Tf 72 ${792 - 90 - i * r.lineHeight} Td (${pdfEscape(
          r.text
        )}) Tj ET`
    )
    .join("\n");
  const content = `${textOps}\n`;

  objects.push("<< /Type /Catalog /Pages 2 0 R >>");
  objects.push("<< /Type /Pages /Kids [3 0 R] /Count 1 >>");
  objects.push(
    "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>"
  );
  objects.push(
    `<< /Length ${Buffer.byteLength(content, "ascii")} >>\nstream\n${content}endstream`
  );
  objects.push("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>");

  let pdf = "%PDF-1.4\n";
  const offsets = [];
  objects.forEach((obj) => {
    offsets.push(Buffer.byteLength(pdf, "ascii"));
    pdf += `${objects.indexOf(obj) + 1} 0 obj\n${obj}\nendobj\n`;
  });

  const xrefStart = Buffer.byteLength(pdf, "ascii");
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  offsets.forEach((offset) => {
    pdf += String(offset).padStart(10, "0") + " 00000 n \n";
  });
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF\n`;
  return pdf;
}

const docs = [
  {
    file: "investor-booklet.pdf",
    lines: [
      { text: "Western Energy and Ventures Pvt. Ltd.", size: 16, lineHeight: 34 },
      { text: "INVESTOR BOOKLET - PLACEHOLDER", size: 22, lineHeight: 30 },
      { text: "", size: 12, lineHeight: 24 },
      { text: "This is a placeholder document.", size: 12, lineHeight: 24 },
      {
        text: "Obregad Hydropower Project - 9 MW Run-of-River",
        size: 12,
        lineHeight: 24,
      },
      {
        text: "The official Investor Booklet will be uploaded by the company.",
        size: 12,
        lineHeight: 24,
      },
      {
        text: "Placeholder content only - contains no official data.",
        size: 12,
        lineHeight: 24,
      },
    ],
  },
  {
    file: "project-overview.pdf",
    lines: [
      { text: "Western Energy and Ventures Pvt. Ltd.", size: 16, lineHeight: 34 },
      { text: "PROJECT OVERVIEW - PLACEHOLDER", size: 22, lineHeight: 30 },
      { text: "", size: 12, lineHeight: 24 },
      {
        text: "Obregad Hydropower Project, 9 MW, Run-of-River",
        size: 12,
        lineHeight: 24,
      },
      {
        text: "Placeholder document - to be replaced by the official overview.",
        size: 12,
        lineHeight: 24,
      },
    ],
  },
  {
    file: "company-profile.pdf",
    lines: [
      { text: "Western Energy and Ventures Pvt. Ltd.", size: 16, lineHeight: 34 },
      { text: "COMPANY PROFILE - PLACEHOLDER", size: 22, lineHeight: 30 },
      { text: "", size: 12, lineHeight: 24 },
      {
        text: "Placeholder document - corporate profile to be provided.",
        size: 12,
        lineHeight: 24,
      },
    ],
  },
];

for (const doc of docs) {
  const pdf = buildPdf(doc.lines);
  const file = join(outDir, doc.file);
  writeFileSync(file, pdf, "ascii");
  console.log(`Wrote ${file} (${Buffer.byteLength(pdf, "ascii")} bytes)`);
}
