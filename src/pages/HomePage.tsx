import { Button } from "@/components/ui/button";
import SidraLogo from "@/components/SidraLogo";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleKycPortLogin = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-sidra-dark flex flex-col items-center justify-center px-8">
      <div className="text-center max-w-md w-full">
        <SidraLogo />
        
        <h1 className="text-4xl font-bold text-sidra-gold mb-2">
          Sidra Chain
        </h1>
        
        <p className="text-sidra-gray text-sm mb-12">
          Secure. Decentralized. Future.
        </p>
        
        <p className="text-sidra-gray text-base mb-8 leading-relaxed">
          Welcome back! Please login with your KYCPORT account to continue.
        </p>
        
        <Button
          onClick={handleKycPortLogin}
          className="w-full bg-sidra-brown hover:bg-sidra-brown/90 text-white py-3 px-6 rounded-lg font-medium text-base mb-8"
        >
          🔒 Login with KYCPORT
        </Button>
        
        <div className="text-xs text-sidra-gray space-x-2">
          <span>By logging in, you agree to our</span>
          <a href="#" className="underline hover:text-white transition-colors">
            Terms of Service
          </a>
          <span>and</span>
          <a href="#" className="underline hover:text-white transition-colors">
            Privacy Policy
          </a>
          <span>.</span>
        </div>
      </div>
    </div>
  );
};

export default HomePage;