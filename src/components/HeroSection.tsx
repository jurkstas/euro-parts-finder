import { Button } from "@/components/ui/button";
import { CitroenBXModel } from "@/components/CitroenBXModel";
import heroImage from "@/assets/citroen-bx-hero.jpg";

export const HeroSection = () => {
  const scrollToSignup = () => {
    const signupElement = document.getElementById('signup-section');
    signupElement?.scrollIntoView({ behavior: 'smooth' });
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
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-accent rounded-full opacity-30 animate-float" style={{ animationDelay: '0s' }} />
      <div className="absolute top-40 right-20 w-16 h-16 bg-accent/30 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-primary/30 rounded-full animate-float" style={{ animationDelay: '4s' }} />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Text content */}
          <div className="animate-float">
            <h1 className="text-4xl md:text-6xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight text-left">
              The European <span className="bg-gradient-accent bg-clip-text text-transparent">Citroën BX</span><br />
              Parts Community
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 text-left leading-relaxed">
              From hydropneumatic struts to angular body panels, from BX 11 to GTi 16v. 
              Connect with BX enthusiasts across Europe and find those impossible-to-locate parts for your beloved wedge.
            </p>
          </div>
          
          {/* Right side - 3D Model */}
          <div className="animate-float" style={{ animationDelay: '0.5s' }}>
            <CitroenBXModel />
          </div>
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
            <div className="text-sm md:text-base">BXs Produced</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-white">27+</div>
            <div className="text-sm md:text-base">European Countries</div>
          </div>
        </div>
      </div>
    </section>
  );
};