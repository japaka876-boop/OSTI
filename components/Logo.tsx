interface LogoProps {
  variant?: 'light' | 'dark';
}

export default function Logo({ variant = 'dark' }: LogoProps) {
  const textColor1 = variant === 'light' ? '#ffffff' : '#0a2540';
  const textColor2 = variant === 'light' ? '#cbd5e1' : '#64748b'; // slate-300 vs slate-500

  return (
    <svg width="220" height="50" viewBox="0 0 220 50" xmlns="http://www.w3.org/2000/svg" className="transform transition-transform hover:scale-105 duration-300">
      <defs>
        <linearGradient id={`logo-text-gradient-${variant}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={textColor1} />
          <stop offset="100%" stopColor="#00d4ff" />
        </linearGradient>
      </defs>
      <text
        x="0"
        y="24"
        dominantBaseline="middle"
        fill={`url(#logo-text-gradient-${variant})`}
        fontSize="24"
        fontWeight="800"
        fontFamily="system-ui, -apple-system, sans-serif"
        letterSpacing="-0.5"
      >
        Ocean Springs
      </text>
      <text
        x="2"
        y="42"
        fill={textColor2}
        fontSize="11"
        fontWeight="700"
        fontFamily="system-ui, -apple-system, sans-serif"
        letterSpacing="2.5"
      >
        TECH INC
      </text>
    </svg>
  );
}
