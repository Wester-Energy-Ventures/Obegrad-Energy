export default function HeroVisual({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 820"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-labelledby="hero-visual-title hero-visual-desc"
    >
      <title id="hero-visual-title">
        Conceptual illustration of a Himalayan river valley
      </title>
      <desc id="hero-visual-desc">
        An illustrative mountain landscape with a flowing river, representing
        clean hydropower on a Himalayan river. Not a photograph of the actual
        project site.
      </desc>
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#052F44" />
          <stop offset="55%" stopColor="#0A4D6F" />
          <stop offset="100%" stopColor="#145F8A" />
        </linearGradient>
        <linearGradient id="river" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7DCBA0" />
          <stop offset="100%" stopColor="#1A9A52" />
        </linearGradient>
        <linearGradient id="mountainBack" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3F8CB5" />
          <stop offset="100%" stopColor="#145F8A" />
        </linearGradient>
        <linearGradient id="mountainMid" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#145F8A" />
          <stop offset="100%" stopColor="#094462" />
        </linearGradient>
        <linearGradient id="mountainFront" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0A4D6F" />
          <stop offset="100%" stopColor="#052F44" />
        </linearGradient>
        <radialGradient id="glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#ADE0C3" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#ADE0C3" stopOpacity="0" />
        </radialGradient>
        <clipPath id="riverClip">
          <rect x="0" y="0" width="1200" height="820" />
        </clipPath>
      </defs>

      <rect width="1200" height="820" fill="url(#sky)" />

      {/* Glow */}
      <circle
        cx="920"
        cy="150"
        r="130"
        fill="url(#glow)"
        opacity="0.55"
        className="animate-float"
      />
      <circle cx="920" cy="150" r="30" fill="#D6F0DF" opacity="0.9" />

      {/* Stars */}
      <g fill="#D6F0DF" opacity="0.55">
        <circle cx="120" cy="90" r="2" />
        <circle cx="260" cy="140" r="1.5" />
        <circle cx="420" cy="70" r="2" />
        <circle cx="560" cy="120" r="1.5" />
        <circle cx="700" cy="60" r="2" />
        <circle cx="1080" cy="90" r="1.5" />
        <circle cx="60" cy="200" r="1.5" />
      </g>

      {/* Back mountains */}
      <path
        d="M0 560 L180 300 L300 440 L430 240 L560 430 L700 210 L820 400 L980 260 L1200 480 L1200 820 L0 820 Z"
        fill="url(#mountainBack)"
        opacity="0.85"
      />

      {/* Mid mountains */}
      <path
        d="M0 620 L220 380 L360 520 L520 330 L680 540 L820 350 L1010 540 L1200 420 L1200 820 L0 820 Z"
        fill="url(#mountainMid)"
      />

      {/* Snow caps */}
      <g fill="#D6F0DF" opacity="0.75">
        <path d="M416 250 L430 240 L444 250 L452 248 L430 226 L408 248 Z" />
        <path d="M684 224 L700 210 L716 224 L728 220 L700 192 L672 220 Z" />
        <path d="M962 274 L980 260 L998 274 L1008 270 L980 242 L952 270 Z" />
      </g>

      {/* Valley floor */}
      <path
        d="M0 700 L0 820 L1200 820 L1200 640 C 1050 690 880 660 760 700 C 640 740 520 690 420 720 C 300 752 160 700 0 700 Z"
        fill="url(#mountainFront)"
      />

      {/* River */}
      <path
        d="M545 330 C 560 400 620 470 590 530 C 560 590 580 640 610 700 C 640 762 660 800 680 820"
        stroke="url(#river)"
        strokeWidth="34"
        strokeLinecap="round"
        fill="none"
        opacity="0.9"
      />
      <path
        d="M545 330 C 560 400 620 470 590 530 C 560 590 580 640 610 700 C 640 762 660 800 680 820"
        stroke="#D6F0DF"
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray="14 26"
        fill="none"
        opacity="0.8"
        className="animate-flow"
      />

      {/* Foreground silhouette */}
      <path
        d="M0 820 L0 760 C 200 720 340 780 520 750 C 700 720 860 800 1200 720 L1200 820 Z"
        fill="#031E2C"
        opacity="0.9"
      />

      {/* Tiny community lights */}
      <g fill="#ADE0C3" opacity="0.8">
        <circle cx="470" cy="655" r="2.5" />
        <circle cx="486" cy="648" r="2.5" />
        <circle cx="502" cy="660" r="2.5" />
      </g>
    </svg>
  );
}
