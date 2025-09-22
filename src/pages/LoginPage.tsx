import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import KycLogo from "@/components/KycLogo";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { Eye, EyeOff } from "lucide-react";

interface LoginForm {
  email: string;
  password: string;
}

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const { toast } = useToast();
  const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>();

  const onSubmit = async (data: LoginForm) => {
    setIsVerifying(true);
    // Simulate verification
    setTimeout(() => {
      setIsVerifying(false);
      toast({
        title: "Login Successful",
        description: "Welcome to KYC PORT!",
      });
    }, 2000);
  };

  const handleSocialLogin = (provider: string) => {
    toast({
      title: "Not Available",
      description: `${provider} login is not available at the moment.`,
      variant: "destructive",
    });
  };

  return (
    <div className="min-h-screen bg-kyc-dark flex flex-col items-center justify-center px-8">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <KycLogo />
          <h1 className="text-xl font-bold text-white mb-4">
            LOGIN TO ACCEPT PAYMENT FROM BANK SIDRA CHAIN P2P
          </h1>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-white text-sm">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
              {...register("email", { 
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Please enter a valid email"
                }
              })}
            />
            {errors.email && (
              <p className="text-red-400 text-xs">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-white text-sm">
              Password
            </Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 pr-10"
                {...register("password", { 
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters"
                  }
                })}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-400 text-xs">{errors.password.message}</p>
            )}
          </div>

          <div className="text-left">
            <a href="#" className="text-kyc-blue text-sm hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Cloudflare verification simulation */}
          <div className="bg-gray-100 p-4 rounded-lg flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1">
                <div className="w-1 h-1 bg-gray-400 rounded-full animate-pulse"></div>
                <div className="w-1 h-1 bg-gray-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                <div className="w-1 h-1 bg-gray-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
              </div>
              <span className="text-gray-700 text-sm">
                {isVerifying ? "Verifying..." : "Verifying..."}
              </span>
            </div>
            <div className="text-orange-500 font-bold text-xs">
              CLOUDFLARE
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-kyc-purple hover:bg-kyc-purple/90 text-white py-3 rounded-lg font-medium"
            disabled={isVerifying}
          >
            {isVerifying ? "Logging in..." : "Login"}
          </Button>
        </form>

        <div className="mt-6 space-y-3">
          <Button
            onClick={() => handleSocialLogin("Google")}
            variant="outline"
            className="w-full bg-transparent border-slate-600 text-white hover:bg-slate-700 py-3"
          >
            <span className="mr-2">G</span>
            Sign in with Google
          </Button>

          <Button
            onClick={() => handleSocialLogin("Microsoft")}
            variant="outline"
            className="w-full bg-transparent border-slate-600 text-white hover:bg-slate-700 py-3"
          >
            <span className="mr-2">⊞</span>
            Sign in with Microsoft
          </Button>

          <Button
            onClick={() => handleSocialLogin("Email")}
            variant="outline"
            className="w-full bg-transparent border-slate-600 text-white hover:bg-slate-700 py-3"
          >
            <span className="mr-2">✉</span>
            Sign in with Email
          </Button>

          <Button
            onClick={() => handleSocialLogin("Apple")}
            className="w-full bg-black text-white hover:bg-gray-800 py-3"
          >
            <span className="mr-2">🍎</span>
            Sign in with Apple
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;