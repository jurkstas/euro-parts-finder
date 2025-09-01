import { CheckCircle, MapPin, Users, Zap, Globe, Shield } from "lucide-react";
import partsImage from "@/assets/citroen-bx-parts.jpg";
import { Button } from "@/components/ui/button";

export const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Europe-Wide Community",
      description: "Easier cross-border connections — UK to Poland, Germany to Italy — with threads and tags that surface nearby buyers and sellers."
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
            Why Leave <span className="text-accent">Facebook Groups</span> Behind?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Facebook groups are great for quick updates and reach. This platform complements them with structure,
            search, and a long-term home for BX knowledge and classifieds.
          </p>
        </div>

        {/* Comparison */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Facebook Notes */}
          <div className="bg-card rounded-2xl p-8 shadow-automotive border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-6">Facebook BX Groups (At a Glance)</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-muted-foreground rounded-full mt-2 flex-shrink-0" />
                <span className="text-muted-foreground">Multiple regional groups make it easy to miss posts across borders</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-muted-foreground rounded-full mt-2 flex-shrink-0" />
                <span className="text-muted-foreground">Single feed view — harder to keep model/engine topics organized</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-muted-foreground rounded-full mt-2 flex-shrink-0" />
                <span className="text-muted-foreground">Older hydropneumatic advice and part references can be difficult to find later</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-muted-foreground rounded-full mt-2 flex-shrink-0" />
                <span className="text-muted-foreground">Part numbers and compatibility often repeat with no central record</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-muted-foreground rounded-full mt-2 flex-shrink-0" />
                <span className="text-muted-foreground">Rare trims can get buried under general discussion</span>
              </li>
            </ul>
          </div>

          {/* Our Solution */}
          <div className="bg-gradient-hero rounded-2xl p-8 shadow-premium text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <img src={partsImage} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-6">Our European Platform</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Cross-border visibility across Europe with location and category tags</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Structured listings: title, price, currency, location, condition, category, images, and clear marketplace rules</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Search and browse by tags (e.g., for-sale, location:oslo, condition:good) with thumbnails and status chips</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Quick actions: mark Sold/Withdrawn or Price drop; auto-tag/banner; optional auto-close after 30 days</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Basic reputation: opt-in ratings/badges shown on profiles and listings</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Private DMs for offers and questions; optional “Verified” badge for ID-checked members</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>EU-first privacy: GDPR-aligned, no sale of personal data, clear controls over what’s visible</span>
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
