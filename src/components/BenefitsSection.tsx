import { CheckCircle, MapPin, Users, Zap, Globe, Shield } from "lucide-react";
import partsImage from "@/assets/citroen-bx-parts.jpg";
import { Button } from "@/components/ui/button";

export const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Europe-Wide Community",
      description: "Easier cross-border connections — UK to Poland, Germany to Italy — with threads and tags that surface nearby owners and enthusiasts."
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Hydropneumatic Know-How",
      description: "Keep suspension tips and fixes findable over time, rather than lost in a fast-moving feed."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Model-Specific Spaces", 
      description: "From BX 11 to GTi 16v, Break estates to 4TC — categories and tags help each variant get attention."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Practical Parts Search",
      description: "Filter listings by type, condition, location, and seller. Search titles/tags; include part numbers when provided."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "EU-First Privacy",
      description: "GDPR-aligned approach, EU-friendly hosting options, no selling personal data. Verified badges without exposing sensitive info."
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Phase I & II Coverage",
      description: "From early cars to the facelift era — organize posts and listings by production phase when relevant."
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
            Why Leave <span className="text-accent">Social Media</span> Behind?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here you will find structure, search, and a long-term home for BX knowledge and classifieds.
          </p>
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
