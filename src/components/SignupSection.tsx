import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronsUp, Heart } from "lucide-react";

export const SignupSection = () => {



  return (
    <section id="signup-section" className="py-24 bg-background min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Early Access • Limited Rollout 
          </h2>
          <p className="text-xl max-w-2xl mx-auto mx-auto leading-relaxed">
            Help shape the future of BX Central.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Form */}
          <Card className="shadow-premium border-0 bg-gradient-subtle">
            <CardContent className="p-6">
              <div className="space-y-6">


                <div className="w-full flex justify-center">
                  <iframe
                    className="w-full aspect-[16/9] min-h-[420px] max-w-md mx-auto rounded-lg border"
                    src="https://8d73fc69.sibforms.com/serve/MUIFAPD3Epnfl_Pl2zpJT6is0KkUGrp1cg3IOSJBFIJ5dL14AEotMSlL324_TCp3HOLAEHmw6Fz1Hfz00CYoPoZXuixN6BCQ12IsFE6z85lswN4mvIOPA4mp_6-ZBItOJrULgdLJPQ-Vod7Y--kwmzyhhjiHLhvb9QNZal3TiWQnXnlDuOsCS1PydbKMtYkL6NNGIbZHzpaTLDxA"
                    allowFullScreen
                    title="Signup Form"
                  ></iframe>
                </div>



                <p className="text-xs text-muted-foreground text-center">
                  We’ll use your details only for launch updates and early access. Unsubscribe anytime.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Benefits */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Join the waitlist today
              </h3>
              <div className="space-y-4">
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
