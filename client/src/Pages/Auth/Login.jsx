import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Login = () => {

  let navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const signin = async(formData) => {
    try{
      await account.createEmailPasswordSession(formData.email, formData.password);

      console.log("login succedfully")
      navigate('/');
    }catch(e){
      console.log(e);
      alert(e);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempt:", formData);
    
    signin()
    
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-background eco-texture flex items-center justify-center p-6">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-secondary/5 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent/5 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <Card className="w-full max-w-md relative z-10 shadow-lg border-0 bg-card/95 backdrop-blur-sm">
        <CardHeader className="text-center pb-6">
          <div className="text-3xl font-bold text-moss-green mb-2">ReWear</div>
          <CardTitle className="text-2xl text-charcoal">Welcome Back</CardTitle>
          <CardDescription className="text-ash-gray">
            Sign in to your ReWear account
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-charcoal font-medium">
                Email Address
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-ash-gray h-4 w-4" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="pl-10 border-border/50 focus:border-moss-green focus:ring-moss-green/20"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-charcoal font-medium">
                Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-ash-gray h-4 w-4" />
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="pl-10 pr-10 border-border/50 focus:border-moss-green focus:ring-moss-green/20"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-ash-gray hover:text-charcoal transition-colors"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <Link 
                to="/forgot-password" 
                className="text-moss-green hover:text-moss-green/80 transition-colors"
              >
                Forgot password?
              </Link>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-moss-green hover:bg-moss-green/90 text-white font-medium py-2.5 animate-glow"
            >
              Sign In
            </Button>

            <div className="text-center text-sm text-ash-gray">
              Don't have an account?{" "}
              <Link 
                to="/register" 
                className="text-moss-green hover:text-moss-green/80 font-medium transition-colors"
              >
                Sign up
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;