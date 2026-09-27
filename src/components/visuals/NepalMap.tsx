export default function NepalMap({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 640 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-labelledby="nepal-map-title nepal-map-desc"
    >
      <title id="nepal-map-title">Indicative location map of Nepal</title>
      <desc id="nepal-map-desc">
        A stylized, indicative map of Nepal highlighting the Karnali Province /
        Jumla region. General location only; exact project coordinates are not
        published.
      </desc>
      <defs>
        <linearGradient id="map-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F1F7FB" />
          <stop offset="100%" stopColor="#F4F8FA" />
        </linearGradient>
        <linearGradient id="map-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#DFEDF6" />
          <stop offset="100%" stopColor="#8DBCD9" />
        </linearGradient>
        <linearGradient id="highlight" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1A9A52" />
          <stop offset="100%" stopColor="#4BB37C" />
        </linearGradient>
      </defs>

      {/* Background card */}
      <rect
        x="10"
        y="10"
        width="620"
        height="400"
        rx="24"
        fill="url(#map-bg)"
      />
      <rect x="10" y="10" width="620" height="400" rx="24" stroke="#E0EAEF" />

      {/* Stylized Nepal silhouette — flattened abstraction, not cartographically exact */}
      <path
        d="M120 250 C 90 235 90 200 130 185 C 170 170 190 150 210 130
           C 225 115 235 90 265 80 C 300 68 330 40 355 55
           C 380 70 405 95 430 110 C 455 125 485 120 510 135
           C 535 150 560 190 555 230 C 550 275 520 320 475 330
           C 430 340 390 325 350 315 C 310 305 265 300 225 290
           C 185 280 150 265 120 250 Z"
        fill="url(#map-fill)"
        stroke="#5298C2"
        strokeWidth="2"
      />

      {/* Relatives underneath: province boundary hint */}
      <path
        d="M175 250 C 210 232 260 225 320 228 C 380 231 430 245 470 262"
        stroke="#5298C2"
        strokeWidth="1.5"
        strokeDasharray="5 6"
        opacity="0.5"
        fill="none"
      />

      {/* Highlighted Karnali / Jumla region (indicative) */}
      <ellipse
        cx="250"
        cy="225"
        rx="58"
        ry="44"
        fill="url(#highlight)"
        opacity="0.35"
      />
      <circle
        cx="250"
        cy="225"
        r="11"
        fill="#1A9A52"
        stroke="#ECF8F0"
        strokeWidth="3"
      />

      {/* Pulsing marker ring */}
      <circle
        cx="250"
        cy="225"
        r="18"
        fill="none"
        stroke="#1A9A52"
        strokeWidth="2"
        opacity="0.4"
      />

      {/* Labels */}
      <g fontFamily="ui-sans-serif, system-ui, sans-serif">
        <rect
          x="270"
          y="196"
          width="150"
          height="58"
          rx="12"
          fill="#ffffff"
          stroke="#E0EAEF"
        />
        <text x="285" y="216" fontSize="13" fontWeight="700" fill="#0C232E">
          Karnali Province
        </text>
        <text x="285" y="237" fontSize="12" fill="#55676F">
          Jumla District (general)
        </text>
      </g>

      <text x="140" y="120" fontSize="13" fontWeight="600" fill="#55676F">
        NEPAL
      </text>

      <text x="30" y="392" fontSize="11" fill="#55676F">
        Indicative map — not to scale. Exact project coordinates to be confirmed
        through official documentation.
      </text>
    </svg>
  );
}
