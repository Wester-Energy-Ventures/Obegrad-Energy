import { ImageResponse } from "next/og";

export const alt =
  "Western Energy and Ventures Pvt. Ltd. — Hydropower & Renewable Energy";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        background:
          "linear-gradient(135deg, #031E2C 0%, #073C57 50%, #0A4D6F 100%)",
        padding: "56px 64px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "linear-gradient(135deg, #0A4D6F, #1A9A52)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg viewBox="0 0 40 40" width="40" height="40" fill="none">
              <path
                d="M7 26 L15 14 L21 21 L26 16 L33 26 Z"
                stroke="white"
                strokeWidth="2.5"
                strokeLinejoin="round"
              />
              <path
                d="M11 31 C 17 27.5, 23 34.5, 29 29.5"
                stroke="#ADE0C3"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 24, fontWeight: 700, color: "#fff" }}>
              Western Energy and Ventures
            </span>
            <span style={{ fontSize: 14, letterSpacing: 4, color: "#8DBCD9" }}>
              PVT. LTD.
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontSize: 52, fontWeight: 800, color: "#FFFFFF" }}>
            Powering Nepal&rsquo;s Future
          </span>
          <span
            style={{
              fontSize: 52,
              fontWeight: 800,
              color: "#7DCBA0",
              marginTop: 4,
            }}
          >
            Through Clean Energy
          </span>
          <span
            style={{
              marginTop: 20,
              fontSize: 20,
              color: "#DFEDF6",
              maxWidth: 760,
            }}
          >
            9 MW Obregad Hydropower Project · Jumla, Karnali Province, Nepal
          </span>
        </div>
      </div>
    </div>,
    size
  );
}
