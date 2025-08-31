import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Mail, User, Car } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const SignupSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    carModel: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.carModel) {
      toast({
        title: "Please fill in all fields",
        description: "We need your name, email, and car model to get started.",
        variant: "destructive"
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid email address",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      toast({
        title: "Welcome to the community!",
        description: "You'll be among the first to know when we launch.",
      });
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <section id="signup-section" className="py-24 bg-background">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="mb-8">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-foreground mb-4">You're In!</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Welcome to the future of European Citroën BX parts trading, <strong>{formData.name}</strong>!
              </p>
          </div>

          <Card className="bg-gradient-subtle border-0 shadow-premium">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4">What happens next?</h3>
              <div className="space-y-4 text-left">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>You'll receive launch updates via email</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Early access invitation before public launch</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Special founder member benefits</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Connect with {formData.carModel} enthusiasts across Europe</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="signup-section" className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 text-sm font-semibold">
            Early Access • Limited Spots
          </Badge>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Be Among the <span className="bg-gradient-accent bg-clip-text text-transparent">First</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join the waitlist and get exclusive early access to Europe's dedicated 
            Citroën BX community platform.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Form */}
          <Card className="shadow-premium border-0 bg-gradient-subtle">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">
                Secure Your Spot
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="h-12 transition-smooth focus:shadow-glow"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="h-12 transition-smooth focus:shadow-glow"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="carModel" className="text-sm font-medium flex items-center gap-2">
                    <Car className="w-4 h-4" />
                    Your BX Model
                  </Label>
                  <Input
                    id="carModel"
                    name="carModel"
                    type="text"
                    placeholder="e.g., BX 16 TRS, BX GTi, BX Break 19 TZD, BX 4TC"
                    value={formData.carModel}
                    onChange={handleInputChange}
                    className="h-12 transition-smooth focus:shadow-glow"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="electric" 
                  size="lg"
                  className="w-full h-12 text-lg font-semibold"
                >
                  Get Early Access
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By signing up, you agree to receive updates about our platform launch. 
                  Unsubscribe anytime.
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Benefits */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Early Access Benefits
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-hero rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Founder Member Status</h4>
                    <p className="text-muted-foreground">Special badge and privileges in the community</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-hero rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Free Premium Features</h4>
                    <p className="text-muted-foreground">3 months of advanced search and alerts</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-hero rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Shape the Platform</h4>
                    <p className="text-muted-foreground">Direct input on features and community guidelines</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-hero rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Launch Day Priority</h4>
                    <p className="text-muted-foreground">First to access all features when we go live</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-accent rounded-xl p-6 text-white">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold">!</span>
                </div>
                <h4 className="font-semibold">Limited Time Offer</h4>
              </div>
              <p className="text-white/90">
                Early access is limited to the first 1,000 BX enthusiasts. Join now to secure your spot 
                in Europe's premier Citroën BX community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};