
export default function Logo() {
  return (
    <svg width="290" height="60" viewBox="0 0 290 60" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="logo-gradient" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#0a2540" />
          <stop offset="100%" stopColor="#00d4ff" />
        </linearGradient>
      </defs>
      <rect width="290" height="60" rx="10" ry="10" fill="url(#logo-gradient)" />
      <text
        x="50%"
        y="30"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="white"
        fontSize="20"
        fontWeight="bold"
        fontFamily="sans-serif"
      >
        Ocean Springs Tech Inc
      </text>
      <text
        x="50%"
        y="48"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="white"
        fontSize="12"
        fontFamily="sans-serif"
      >
        Pool Construction & Maintenance
      </text>
    </svg>
  );
}
