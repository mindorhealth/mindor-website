export default function NeuralWave() {
  return (
    <svg
      viewBox="0 0 480 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
      aria-hidden="true"
    >
      <style>{`
        @keyframes wave1 {
          0%, 100% { d: path("M 60 240 Q 150 140 240 240 Q 330 340 420 240"); }
          50%       { d: path("M 60 240 Q 150 320 240 240 Q 330 160 420 240"); }
        }
        @keyframes wave2 {
          0%, 100% { d: path("M 60 240 Q 150 180 240 240 Q 330 300 420 240"); }
          50%       { d: path("M 60 240 Q 150 290 240 240 Q 330 190 420 240"); }
        }
        @keyframes wave3 {
          0%, 100% { d: path("M 60 240 Q 150 110 240 240 Q 330 370 420 240"); }
          50%       { d: path("M 60 240 Q 150 360 240 240 Q 330 130 420 240"); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.5; r: 4; }
          50%       { opacity: 1; r: 6; }
        }
        .w1 { animation: wave1 6s ease-in-out infinite; }
        .w2 { animation: wave2 8s ease-in-out infinite 1s; }
        .w3 { animation: wave3 10s ease-in-out infinite 2s; }
        .p1 { animation: pulse 3s ease-in-out infinite; }
        .p2 { animation: pulse 3s ease-in-out infinite 1s; }
        .p3 { animation: pulse 3s ease-in-out infinite 2s; }
      `}</style>

      {/* Outer ring */}
      <circle cx="240" cy="240" r="180" stroke="#2D5F3F" strokeOpacity="0.06" strokeWidth="1" />
      <circle cx="240" cy="240" r="120" stroke="#2D5F3F" strokeOpacity="0.08" strokeWidth="1" />

      {/* Wave lines */}
      <path
        className="w3"
        d="M 60 240 Q 150 110 240 240 Q 330 370 420 240"
        stroke="#4A7C5C"
        strokeOpacity="0.18"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        className="w1"
        d="M 60 240 Q 150 140 240 240 Q 330 340 420 240"
        stroke="#2D5F3F"
        strokeOpacity="0.3"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        className="w2"
        d="M 60 240 Q 150 180 240 240 Q 330 300 420 240"
        stroke="#2D5F3F"
        strokeOpacity="0.5"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Node dots */}
      <circle className="p1" cx="60"  cy="240" r="4" fill="#2D5F3F" fillOpacity="0.5" />
      <circle className="p2" cx="240" cy="240" r="5" fill="#2D5F3F" fillOpacity="0.7" />
      <circle className="p3" cx="420" cy="240" r="4" fill="#2D5F3F" fillOpacity="0.5" />

      {/* Subtle connecting verticals */}
      <line x1="240" y1="80"  x2="240" y2="400" stroke="#2D5F3F" strokeOpacity="0.05" strokeWidth="1" />
      <line x1="80"  y1="240" x2="400" y2="240" stroke="#2D5F3F" strokeOpacity="0.05" strokeWidth="1" />
    </svg>
  )
}
