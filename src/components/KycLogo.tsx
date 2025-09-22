const KycLogo = () => {
  return (
    <div className="flex items-center justify-center w-16 h-16 mb-8">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Shield background */}
        <path
          d="M50 10 L80 25 L80 60 Q80 75 50 90 Q20 75 20 60 L20 25 Z"
          fill="#2A3B5C"
          stroke="#4A90E2"
          strokeWidth="2"
        />
        {/* Fingerprint pattern */}
        <g stroke="#8FA3C4" strokeWidth="1" fill="none">
          <ellipse cx="50" cy="45" rx="8" ry="10" />
          <ellipse cx="50" cy="45" rx="12" ry="15" />
          <ellipse cx="50" cy="45" rx="16" ry="20" />
          <path d="M35 35 Q42 28 50 35" />
          <path d="M50 35 Q58 28 65 35" />
          <path d="M38 50 Q45 43 50 50" />
          <path d="M50 50 Q55 43 62 50" />
        </g>
        {/* Text */}
        <text
          x="50"
          y="75"
          fontSize="8"
          fontWeight="bold"
          textAnchor="middle"
          fill="#8FA3C4"
        >
          KYC PORT
        </text>
        <line x1="40" x2="60" y1="78" y2="78" stroke="#8FA3C4" strokeWidth="1" />
      </svg>
    </div>
  );
};

export default KycLogo;