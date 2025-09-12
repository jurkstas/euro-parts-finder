import { MessageSquareWarning, ImageOff, Search, Globe2, Wrench, Gem, ChevronsUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export const BenefitsSection = () => {
  const benefits = [
    {
      icon: <MessageSquareWarning className="w-8 h-8" />,
      title: "Social Media is messy",
      description: "Scammers, lost posts, no search."
    },
    {
      icon: <ImageOff className="w-8 h-8" />,
      title: "Old forums are fading",
      description: "Broken images, few new members."
    },
    {
      icon: <ChevronsUp className="w-8 h-8" />,
      title: "BX deserves better", 
      description: "Structured, searchable, model-specific spaces."
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Practical parts search", 
      description: "Filter by type, condition, location, and seller. Include part numbers when available."
    },
    {
      icon: <Globe2 className="w-8 h-8" />,
      title: "Europe-wide Community", 
      description: "Connect from UK to Ukraine, Norway to Italy — and beyond."
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Hydropneumatic Know-How", 
      description: "Structured, searchable, model-specific spaces.."
    }
  ];

  const scrollToSignup = () => {
    const signupElement = document.getElementById('signup-section');
    signupElement?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="benefits-section" className="py-24 bg-gradient-subtle min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why <span className="text-primary">BX Central</span>?
          </h2>
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
            variant="hero" 
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
