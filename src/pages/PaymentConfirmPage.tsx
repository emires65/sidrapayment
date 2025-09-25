import { Button } from "@/components/ui/button";
import SidraLogo from "@/components/SidraLogo";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AlertTriangle, Shield, Lock } from "lucide-react";

const PaymentConfirmPage = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();

  const handleConfirmPayment = async () => {
    setIsProcessing(true);
    // Simulate processing
    setTimeout(() => {
      setIsProcessing(false);
      navigate('/payment-selection');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex flex-col items-center justify-center px-8 relative overflow-hidden">
      {/* Premium background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 via-transparent to-yellow-400/5"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-400/10 via-transparent to-transparent"></div>
      
      <div className="w-full max-w-md relative z-10">
        {/* Logo and main heading */}
        <div className="text-center mb-12">
          <SidraLogo />
          <div className="mb-6">
            <h1 className="text-2xl md:text-3xl font-bold text-transparent bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text mb-2 tracking-wide">
              CONFIRM PAYMENT FROM
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text tracking-wide">
              SIDRA BANK CHAIN
            </h2>
          </div>
        </div>

        {/* Premium card container */}
        <div className="bg-gradient-to-b from-gray-800/80 to-gray-900/80 backdrop-blur-xl border border-yellow-400/20 rounded-2xl p-8 shadow-2xl shadow-yellow-400/10">
          {/* Security badges */}
          <div className="flex justify-center items-center gap-4 mb-8">
            <div className="flex items-center gap-2 bg-yellow-400/10 px-3 py-1 rounded-full border border-yellow-400/30">
              <Shield className="w-4 h-4 text-yellow-400" />
              <span className="text-yellow-400 text-xs font-medium">SECURED</span>
            </div>
            <div className="flex items-center gap-2 bg-green-400/10 px-3 py-1 rounded-full border border-green-400/30">
              <Lock className="w-4 h-4 text-green-400" />
              <span className="text-green-400 text-xs font-medium">ENCRYPTED</span>
            </div>
          </div>

          {/* Confirm button */}
          <Button
            onClick={handleConfirmPayment}
            disabled={isProcessing}
            className="w-full bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-600 hover:to-yellow-500 text-black font-bold py-4 rounded-xl text-lg mb-8 transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-yellow-400/25"
          >
            {isProcessing ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                PROCESSING...
              </div>
            ) : (
              "CONFIRM"
            )}
          </Button>

          {/* Warning section */}
          <div className="bg-gradient-to-r from-red-900/30 to-red-800/30 border border-red-500/50 rounded-xl p-6 backdrop-blur-sm">
            {/* Warning icons */}
            <div className="flex justify-center items-center gap-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-red-400 animate-pulse" />
              <AlertTriangle className="w-8 h-8 text-red-500" />
              <AlertTriangle className="w-6 h-6 text-red-400 animate-pulse" />
            </div>
            
            {/* Warning text */}
            <p className="text-red-300 font-bold text-center text-sm leading-relaxed tracking-wide">
              REMEMBER ACCEPTING THIS PAYMENT AND TRYING TO CHEAT MAY CAUSE WE THE SIDRABANK CHAIN TO BLOCK YOUR ACCOUNT PERMANENTLY
            </p>
            
            {/* Additional warning symbols */}
            <div className="flex justify-center items-center gap-2 mt-4">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Footer elements */}
        <div className="text-center mt-8">
          <p className="text-gray-400 text-xs">
            Protected by Sidra Bank Chain Security Protocol
          </p>
          <div className="flex justify-center gap-1 mt-2">
            <div className="w-1 h-1 bg-yellow-400 rounded-full"></div>
            <div className="w-1 h-1 bg-yellow-400 rounded-full"></div>
            <div className="w-1 h-1 bg-yellow-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentConfirmPage;