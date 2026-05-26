import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export default function Logo({ className = "w-12 h-12", showText = false }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      <svg
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full filter drop-shadow-md"
      >
        {/* Background Shield/Circle Base */}
        <circle cx="250" cy="250" r="230" fill="#1C2230" stroke="#E5C77F" strokeWidth="2" />
        
        {/* Sunburst Rays Behind Maple Leaf */}
        <g stroke="#F4F4F4" strokeWidth="1.2" opacity="0.3">
          <line x1="250" y1="250" x2="250" y2="40" />
          <line x1="250" y1="250" x2="145" y2="70" />
          <line x1="250" y1="250" x2="70" y2="145" />
          <line x1="250" y1="250" x2="40" y2="250" />
          <line x1="250" y1="250" x2="70" y2="355" />
          <line x1="250" y1="250" x2="145" y2="430" />
          <line x1="250" y1="250" x2="355" y2="70" />
          <line x1="250" y1="250" x2="430" y2="145" />
          <line x1="250" y1="250" x2="460" y2="250" />
          <line x1="250" y1="250" x2="430" y2="355" />
          <line x1="250" y1="250" x2="355" y2="430" />
          
          <line x1="250" y1="250" x2="197" y2="55" />
          <line x1="250" y1="250" x2="107" y2="107" />
          <line x1="250" y1="250" x2="55" y2="197" />
          <line x1="250" y1="250" x2="303" y2="55" />
          <line x1="250" y1="250" x2="393" y2="107" />
          <line x1="250" y1="250" x2="445" y2="197" />
        </g>

        {/* Big Crimson Maple Leaf */}
        <path
          d="M250 50 
             L285 110 L315 105 L310 145 L355 140 L380 180 
             L410 160 L395 210 L440 220 L400 270 L425 310
             L370 305 L340 350 L310 330 L320 380
             L250 365 
             L180 380 L190 330 L160 350 L130 305 L75 310
             L100 270 L60 220 L105 210 L90 160 L120 180
             L145 140 L190 145 L185 105 L215 110 
             Z"
          fill="#B12B2B"
          stroke="#F3EDE2"
          strokeWidth="4"
          strokeLinejoin="round"
        />

        {/* Small Outer Rays highlights */}
        <path d="M250 30 L250 45" stroke="#FFFFFF" strokeWidth="3" />
        <path d="M190 90 L200 100" stroke="#FFFFFF" strokeWidth="3" />
        <path d="M310 90 L300 100" stroke="#FFFFFF" strokeWidth="3" />

        {/* Traditional House Outline & Scaffolding */}
        {/* Scaffolding on Left */}
        <g stroke="#F3EDE2" strokeWidth="2.5" strokeLinecap="round">
          <line x1="150" y1="250" x2="150" y2="175" />
          <line x1="175" y1="250" x2="175" y2="175" />
          <line x1="200" y1="250" x2="200" y2="175" />
          {/* Horizontals */}
          <line x1="145" y1="180" x2="205" y2="180" />
          <line x1="145" y1="205" x2="205" y2="205" />
          <line x1="145" y1="230" x2="205" y2="230" />
          {/* Crosses */}
          <line x1="150" y1="180" x2="175" y2="205" />
          <line x1="175" y1="180" x2="150" y2="205" />
          <line x1="175" y1="205" x2="200" y2="230" />
          <line x1="200" y1="205" x2="175" y2="230" />
          <line x1="175" y1="180" x2="200" y2="205" />
          <line x1="200" y1="180" x2="175" y2="205" />
          <line x1="150" y1="205" x2="175" y2="230" />
          <line x1="175" y1="205" x2="150" y2="230" />
        </g>

        {/* Gable Cabin/House */}
        <path
          d="M205 250 L205 185 L260 155 L340 195 L340 250 Z"
          fill="#1C2230"
          stroke="#F3EDE2"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        {/* Gable End Front Roofline */}
        <path d="M250 150 L345 198" stroke="#F3EDE2" strokeWidth="4.5" strokeLinecap="round" />
        <path d="M251 150 L200 188" stroke="#F3EDE2" strokeWidth="4.5" strokeLinecap="round" />
        {/* House Details: Window & Siding stripes */}
        <g stroke="#F3EDE2" strokeWidth="2.5" opacity="0.8">
          {/* Windows */}
          <rect x="290" y="200" width="30" height="35" rx="2" fill="#1C2230" />
          <line x1="305" y1="200" x2="305" y2="235" />
          <line x1="290" y1="217" x2="320" y2="217" />

          <rect x="220" y="205" width="20" height="25" rx="2" fill="#1C2230" />
          <line x1="230" y1="205" x2="230" y2="230" />

          {/* Siding lines on House */}
          <line x1="252" y1="168" x2="258" y2="171" />
          <line x1="250" y1="178" x2="265" y2="185" />
          <line x1="250" y1="188" x2="280" y2="202" />
          <line x1="205" y1="240" x2="340" y2="240" />
        </g>

        {/* Central Black Banner for "TURMS" */}
        <g filter="url(#drop-shadow)">
          <path
            d="M50 220 
               L450 220 
               A5 5 0 0 1 455 225
               L455 315
               A5 5 0 0 1 450 320
               L50 320
               A5 5 0 0 1 45 315
               L45 225
               A5 5 0 0 1 50 220 Z"
            fill="#121824"
            stroke="#F3EDE2"
            strokeWidth="5.5"
          />
          {/* Subtle wood lines on banner */}
          <line x1="55" y1="235" x2="445" y2="235" stroke="#F3EDE2" strokeWidth="1" opacity="0.3" />
          <line x1="55" y1="305" x2="445" y2="305" stroke="#F3EDE2" strokeWidth="1" opacity="0.3" />
          {/* Inner borders */}
          <rect x="52" y="227" width="396" height="86" rx="2" stroke="#F3EDE2" strokeWidth="1.5" fill="none" opacity="0.3" />
        </g>

        {/* Text "TURMS" (Slab-Serif Type) */}
        <text
          x="250"
          y="278"
          fill="#F3EDE2"
          fontSize="66"
          fontWeight="900"
          letterSpacing="0.08em"
          fontFamily="'Georgia', 'Times New Roman', serif"
          textAnchor="middle"
        >
          TURMS
        </text>

        {/* Text "CONSTRUCTION" */}
        <text
          x="250"
          y="306"
          fill="#FFFFFF"
          fontSize="21"
          fontWeight="800"
          letterSpacing="0.22em"
          fontFamily="'Inter', 'Space Grotesk', sans-serif"
          textAnchor="middle"
        >
          CONSTRUCTION
        </text>

        {/* Bottom Shield for "RENOVATION" */}
        <path
          d="M102 322 
             C 102 322, 170 435, 250 445 
             C 330 435, 398 322, 398 322
             Z"
          fill="#B12B2B"
          stroke="#F3EDE2"
          strokeWidth="4"
          strokeLinejoin="round"
        />

        {/* Curved Path for "RENOVATION" text */}
        <path
          id="renovation-text-path"
          d="M135 348 C 160 415, 340 415, 365 348"
          fill="none"
          stroke="none"
        />

        {/* Text on Path: "RENOVATION" */}
        <text fill="#FFFFFF" fontSize="22" fontWeight="800" letterSpacing="0.25em">
          <textPath href="#renovation-text-path" startOffset="50%" textAnchor="middle">
            RENOVATION
          </textPath>
        </text>

        {/* Small White Maple Leaf Outline at bottom inside shield */}
        <path
          d="M250 361 L257 375 L263 371 L262 381 L270 380 L275 390 L268 394 T273 402 L260 401 L256 412 L250 409 L244 412 L240 401 L227 402 T232 394 L225 390 L230 380 L238 381 L237 371 L243 375 Z"
          fill="#FFFFFF"
          stroke="#B12B2B"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />

        {/* Small helmet icon at the absolute peak of bottom leaf shield */}
        <circle cx="250" cy="433" r="10" fill="#F3EDE2" />
        <path d="M245 433 C245 428, 255 428, 255 433 L250 436 Z" fill="#B12B2B" />

        {/* Filters */}
        <defs>
          <filter id="drop-shadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="8" stdDeviation="5" floodColor="#000000" floodOpacity="0.5" />
          </filter>
        </defs>
      </svg>
      {showText && (
        <div className="flex flex-col">
          <span className="font-serif text-xl tracking-wider font-extrabold text-[#FBF9F1]">
            TURMS
          </span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#E5C77F] font-bold">
            CONSTRUCTION
          </span>
        </div>
      )}
    </div>
  );
}
