import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-europe-connectivity.jpg";

export const HeroSection = () => {
  const scrollToSignup = () => {
    const signupElement = document.getElementById("signup-section");
    signupElement?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />

      {/* Floating Elements */}
      <div
        className="absolute top-20 left-10 w-20 h-20 bg-gradient-accent rounded-full opacity-30 animate-float"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="absolute top-40 right-20 w-16 h-16 bg-accent/30 rounded-full animate-float"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute bottom-40 left-20 w-12 h-12 bg-primary/30 rounded-full animate-float"
        style={{ animationDelay: "4s" }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="mb-8 animate-float">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            A Dedicated <span className="bg-gradient-accent bg-clip-text">Citroën BX</span>
            <br />
            Community
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            A space built for structure, search, and cross-border BX connections.
            Share hydropneumatic know-how, find rare parts, and keep knowledge organized for the long run.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            variant="hero"
            size="lg"
            onClick={scrollToSignup}
            className="text-lg px-8 py-4 h-auto"
          >
            Get Early Access
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-lg px-8 py-4 h-auto bg-white/10 border-white/30 text-white hover:bg-white/20"
          >
            Learn More
          </Button>
        </div>

        {/* Stats */}
        <div className="flex justify-center space-x-8 md:space-x-16 text-white/80">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-white">1982-1994</div>
            <div className="text-sm md:text-base">Production Years</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-white">2.3M+</div>
            <div className="text-sm md:text-base">BXs Built</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-white">40+</div>
            <div className="text-sm md:text-base">Countries Reached</div>
          </div>
        </div>
      </div>
    </section>
  );
};
