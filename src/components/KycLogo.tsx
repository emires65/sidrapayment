const KycLogo = () => {
  return (
    <div className="flex flex-col items-center justify-center mb-8">
      <div className="relative">
        {/* Shield outline */}
        <svg 
          width="120" 
          height="140" 
          viewBox="0 0 120 140" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="text-white"
        >
          {/* Shield shape */}
          <path 
            d="M60 10 L110 30 L110 70 C110 100 85 125 60 130 C35 125 10 100 10 70 L10 30 L60 10 Z" 
            stroke="currentColor" 
            strokeWidth="3" 
            fill="none"
          />
          
          {/* Fingerprint lines */}
          <g stroke="currentColor" strokeWidth="2" fill="none">
            {/* Outer fingerprint lines */}
            <ellipse cx="60" cy="65" rx="35" ry="40" />
            <ellipse cx="60" cy="65" rx="30" ry="35" />
            <ellipse cx="60" cy="65" rx="25" ry="30" />
            <ellipse cx="60" cy="65" rx="20" ry="25" />
            <ellipse cx="60" cy="65" rx="15" ry="20" />
            <ellipse cx="60" cy="65" rx="10" ry="15" />
            
            {/* Fingerprint pattern breaks */}
            <path d="M25 65 L35 65" strokeWidth="3" />
            <path d="M85 65 L95 65" strokeWidth="3" />
            <path d="M40 45 L50 45" strokeWidth="2" />
            <path d="M70 45 L80 45" strokeWidth="2" />
            <path d="M45 85 L55 85" strokeWidth="2" />
            <path d="M65 85 L75 85" strokeWidth="2" />
          </g>
        </svg>
      </div>
      
      {/* KYC PORT Text */}
      <div className="text-center mt-4">
        <div className="text-white text-2xl font-bold tracking-wider">
          KYC PORT
        </div>
        <div className="bg-white text-gray-800 px-3 py-1 rounded-full text-sm font-semibold mt-1">
          .COM
        </div>
      </div>
    </div>
  );
};

export default KycLogo;