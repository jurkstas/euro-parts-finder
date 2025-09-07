import { CheckCircle, MapPin, Users, Zap, Globe, Shield } from "lucide-react";
import carPartsImage from "@/assets/car-parts-floating.jpg";
import { Button } from "@/components/ui/button";

export const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Pan-European Reach",
      description: "Access sellers and buyers from UK to Poland, Germany to Italy. No more geographic limitations."
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Local Knowledge",
      description: "Connect with experts who know the best salvage yards, specialty shops, and hidden gems in each country."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Dedicated Community",
      description: "Purpose-built platform vs. Facebook's limitations. Better search, organization, and user experience."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Instant Matching",
      description: "Smart algorithms connect your specific part requests with available inventory across Europe."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Verified Sellers",
      description: "Rating system and verification process ensures quality transactions and trustworthy community members."
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Model-Specific Focus",
      description: "Specialized categories and filters for your exact car model, year, and specifications."
    }
  ];

  const scrollToSignup = () => {
    const signupElement = document.getElementById('signup-section');
    signupElement?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Leave <span className="text-accent">Facebook Groups</span> Behind?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Facebook groups served us well, but it's time for something better. A platform designed 
            specifically for automotive enthusiasts with European-wide reach.
          </p>
        </div>

        {/* Comparison */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Facebook Limitations */}
          <div className="bg-card rounded-2xl p-8 shadow-automotive border border-border">
            <h3 className="text-2xl font-bold text-destructive mb-6">Facebook Group Limitations</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
                <span className="text-muted-foreground">Limited to local/regional groups</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
                <span className="text-muted-foreground">Poor search functionality</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
                <span className="text-muted-foreground">No verification system</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
                <span className="text-muted-foreground">Posts get buried quickly</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
                <span className="text-muted-foreground">Language barriers</span>
              </li>
            </ul>
          </div>

          {/* Our Solution */}
          <div className="bg-gradient-hero rounded-2xl p-8 shadow-premium text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <img src={carPartsImage} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-6">Our European Platform</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>27+ European countries connected</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Advanced search & categorization</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Verified seller ratings</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Persistent listings & alerts</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Multi-language support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-card rounded-xl p-6 shadow-automotive border border-border hover:shadow-glow transition-smooth hover:-translate-y-1">
              <div className="text-primary mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            variant="premium" 
            size="lg"
            onClick={scrollToSignup}
            className="text-lg px-8 py-4 h-auto"
          >
            Join the Movement
          </Button>
        </div>
      </div>
    </section>
  );
};