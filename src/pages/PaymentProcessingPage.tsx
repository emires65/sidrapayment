import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Building2, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import binanceLogo from "@/assets/binance-logo.png";
import jazzcashLogo from "@/assets/jazzcash-logo.png";
import googlepayLogo from "@/assets/googlepay-logo.png";
import gcashLogo from "@/assets/gcash-logo.png";
import paypalLogo from "@/assets/paypal-logo.png";

interface PaymentMethod {
  id: string;
  name: string;
  logo?: string;
  icon?: React.ComponentType<any>;
}

const PaymentProcessingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [dots, setDots] = useState("");
  
  const selectedMethod = location.state?.selectedMethod as PaymentMethod;

  // Map logo paths to imported assets
  const getLogoSrc = (method: PaymentMethod) => {
    if (method.logo && typeof method.logo === 'string') {
      // If it's already an imported asset path, use it
      if (method.logo.startsWith('/')) return method.logo;
      // Otherwise map the logo based on method id
      switch (method.id) {
        case 'binance': return binanceLogo;
        case 'jazzcash': return jazzcashLogo;
        case 'google-pay': return googlepayLogo;
        case 'gcash': return gcashLogo;
        case 'paypal': return paypalLogo;
        default: return method.logo;
      }
    }
    return method.logo;
  };

  // Redirect if no payment method selected
  useEffect(() => {
    if (!selectedMethod) {
      navigate('/payment-selection');
    }
  }, [selectedMethod, navigate]);

  // Animate dots for processing text
  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? "" : prev + ".");
    }, 500);

    return () => clearInterval(interval);
  }, []);

  if (!selectedMethod) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex flex-col items-center justify-center px-4 py-8 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-400/5 via-transparent to-blue-400/5"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-400/10 via-transparent to-transparent"></div>
      
      {/* Back button */}
      <div className="absolute top-8 left-8">
        <Button
          onClick={() => navigate('/payment-selection')}
          variant="ghost"
          className="text-gray-400 hover:text-white"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
      </div>

      <div className="w-full max-w-2xl relative z-10">
        {/* Selected Payment Method */}
        <div className="text-center mb-16">
          <div className="bg-gradient-to-b from-gray-800/80 to-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 mb-8 shadow-2xl">
            <h2 className="text-2xl font-semibold text-gray-300 mb-6">Selected Payment Method</h2>
            
            <div className="flex flex-col items-center">
              {selectedMethod.logo ? (
                <img 
                  src={getLogoSrc(selectedMethod)} 
                  alt={selectedMethod.name}
                  className="h-16 w-auto mb-4"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement?.querySelector('.fallback-icon')?.classList.remove('hidden');
                  }}
                />
              ) : selectedMethod.icon ? (
                <selectedMethod.icon className="w-16 h-16 text-blue-400 mb-4" />
              ) : null}
              
              <div className="fallback-icon hidden">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-2xl">
                    {selectedMethod.name.charAt(0)}
                  </span>
                </div>
              </div>

              <h3 className="text-3xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
                {selectedMethod.name}
              </h3>
            </div>
          </div>

          {/* Processing Animation */}
          <div className="bg-gradient-to-b from-green-800/20 to-green-900/20 backdrop-blur-xl border border-green-400/30 rounded-2xl p-12 shadow-2xl shadow-green-400/10">
            {/* Animated Green Lights */}
            <div className="flex justify-center items-center gap-4 mb-8">
              <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
              <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
              <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.8s' }}></div>
            </div>

            {/* Processing Text */}
            <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text mb-4">
              Payment Processing{dots}
            </h1>
            
            <p className="text-green-300 text-lg mb-8">
              Please wait while we process your transaction
            </p>

            {/* Spinning Loading Circle */}
            <div className="flex justify-center">
              <div className="w-16 h-16 border-4 border-green-400/30 border-t-green-400 rounded-full animate-spin"></div>
            </div>
          </div>

          {/* Status Messages */}
          <div className="mt-8 space-y-4">
            <div className="flex items-center justify-center gap-3 text-green-400">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm">Secure connection established</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-green-400">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <span className="text-sm">Validating payment information</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-green-400">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              <span className="text-sm">Processing through {selectedMethod.name}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentProcessingPage;