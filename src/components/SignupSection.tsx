import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronsUp, Heart } from "lucide-react";

export const SignupSection = () => {



  return (
    <section id="signup-section" className="py-24 bg-background min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Early Access
          </h2>
          <p className="text-xl max-w-2xl mx-auto mx-auto leading-relaxed">
            Help shape the future of BX Central.
          </p>
        </div>

        <div className="grid gap-12 items-center">
          {/* Benefits */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                Register now to join the early access community
              </h3>
              
              <div className="space-y-4">
                <div className="text-center mb-6">
                                  <a
                    href="https://forum.bxcentral.eu/?tl=en"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition"
                  >
                    BX Central Forum
                  </a>
                  </div>
                  <div className="space-y-4 items-center">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-hero rounded-full flex items-center justify-center flex-shrink-0">
                    <ChevronsUp className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Founder Badge</h4>
                    <p className="text-muted-foreground">Display early status on your profile.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-hero rounded-full flex items-center justify-center flex-shrink-0">
                    <ChevronsUp className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Feature Trials</h4>
                    <p className="text-muted-foreground">Test new tools before launch.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-hero rounded-full flex items-center justify-center flex-shrink-0">
                    <ChevronsUp className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Your Voice</h4>
                    <p className="text-muted-foreground">Help shape rules and features.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-hero rounded-full flex items-center justify-center flex-shrink-0">
                    <ChevronsUp className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Priority Invitations</h4>
                    <p className="text-muted-foreground">Join BX Central before others.</p>
                  </div>
                </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-hero rounded-xl p-6 text-white">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-semibold">Built by a BX Owner</h4>
              </div>
              <p className="text-white/90">
                I’ve run BX groups online and watched good info get buried by noise and scams.
                BX Central is my attempt to fix that - a high-quality, structured community dedicated to the car we love.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
