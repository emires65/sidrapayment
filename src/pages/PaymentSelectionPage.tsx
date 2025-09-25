import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AlertTriangle, Building2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
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

const PaymentSelectionPage = () => {
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  const paymentMethods: PaymentMethod[] = [
    { id: "binance", name: "Binance", logo: binanceLogo },
    { id: "bank-transfer", name: "Bank Transfer", icon: Building2 },
    { id: "jazzcash", name: "JazzCash", logo: jazzcashLogo },
    { id: "google-pay", name: "Google Pay", logo: googlepayLogo },
    { id: "gcash", name: "GCash", logo: gcashLogo },
    { id: "paypal", name: "PayPal", logo: paypalLogo },
  ];

  const handleAcceptPayment = () => {
    console.log('Accept Payment clicked, selected method:', selectedMethod);
    if (selectedMethod) {
      console.log('Navigating to payment processing with method:', selectedMethod);
      navigate('/payment-processing', { 
        state: { selectedMethod } 
      });
    } else {
      toast({
        variant: "destructive",
        title: "Payment Method Required",
        description: "Please select a payment method before proceeding",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex flex-col items-center justify-center px-4 py-8">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/5 via-transparent to-purple-400/5"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-400/10 via-transparent to-transparent"></div>
      
      <div className="w-full max-w-4xl relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text mb-4 tracking-wide">
            SidraCoin Bank Processing Payments
          </h1>
          <p className="text-gray-400 text-lg">Select your preferred payment method</p>
        </div>

        {/* Payment Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {paymentMethods.map((method) => (
            <Card
              key={method.id}
              className={`p-6 cursor-pointer transition-all duration-300 transform hover:scale-105 border-2 ${
                selectedMethod?.id === method.id
                  ? "border-blue-400 bg-blue-400/10 shadow-lg shadow-blue-400/25"
                  : "border-gray-700 bg-gray-800/50 hover:border-gray-600"
              } backdrop-blur-sm`}
              onClick={() => {
                console.log('Selected payment method:', method);
                setSelectedMethod(method);
              }}
            >
              <div className="flex flex-col items-center justify-center h-32">
                {method.logo ? (
                  <img 
                    src={method.logo} 
                    alt={method.name}
                    className="h-12 w-auto mb-4"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement?.querySelector('.fallback-icon')?.classList.remove('hidden');
                    }}
                  />
                ) : method.icon ? (
                  <method.icon className="w-12 h-12 text-blue-400 mb-4" />
                ) : null}
                <div className="fallback-icon hidden">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white font-bold text-lg">
                      {method.name.charAt(0)}
                    </span>
                  </div>
                </div>
                <span className="text-white font-semibold text-center">
                  {method.name}
                </span>
              </div>
            </Card>
          ))}
        </div>

        {/* Accept Payment Button */}
        <div className="flex justify-center mb-8">
          <Button
            onClick={handleAcceptPayment}
            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-4 px-12 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25"
          >
            Accept Payment {selectedMethod ? `(${selectedMethod.name})` : '(Select Payment Method)'}
          </Button>
        </div>

        {/* Warning Message */}
        <div className="bg-gradient-to-r from-red-900/40 to-red-800/40 border border-red-500/50 rounded-xl p-6 backdrop-blur-sm">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
            <p className="text-red-300 font-semibold leading-relaxed">
              <span className="text-red-200">Please be notified:</span> Once you accept payments and you do not send the SidraCoin, your account will get permanently banned. Please take note of this.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSelectionPage;