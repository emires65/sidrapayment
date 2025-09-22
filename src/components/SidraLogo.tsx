const SidraLogo = () => {
  return (
    <div className="flex items-center justify-center w-20 h-20 mb-8">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Outer star points */}
        <path
          d="M50 5 L56 26 L78 18 L66 36 L90 46 L68 54 L78 82 L56 74 L50 95 L44 74 L22 82 L34 54 L10 46 L32 36 L22 18 L44 26 Z"
          fill="url(#goldGradient1)"
        />
        {/* Inner star */}
        <path
          d="M50 15 L55 32 L70 28 L62 42 L80 50 L62 58 L70 72 L55 68 L50 85 L45 68 L30 72 L38 58 L20 50 L38 42 L30 28 L45 32 Z"
          fill="url(#goldGradient2)"
        />
        {/* Central number 3 */}
        <text
          x="50"
          y="58"
          fontSize="24"
          fontWeight="bold"
          textAnchor="middle"
          fill="url(#goldGradient3)"
        >
          3
        </text>
        <defs>
          <linearGradient id="goldGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#B8860B" />
          </linearGradient>
          <linearGradient id="goldGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFD700" />
            <stop offset="100%" stopColor="#DAA520" />
          </linearGradient>
          <linearGradient id="goldGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B4513" />
            <stop offset="100%" stopColor="#654321" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default SidraLogo;