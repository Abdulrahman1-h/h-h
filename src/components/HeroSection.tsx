import gymHero from "@/assets/gym-hero.jpg";
import { Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${gymHero})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-fade-in-up">
        <p className="font-body text-secondary uppercase tracking-[0.3em] text-sm mb-4">
          Beirut, Lebanon
        </p>
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold uppercase leading-[0.9] mb-6 text-foreground">
          H&H <br />
          <span className="text-primary">Fitness</span>{" "}
          <span className="text-secondary">For Life</span>
        </h1>
        <p className="font-body text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10">
          More than a gym — a family. Join Beirut's most welcoming fitness community.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground font-display text-lg uppercase tracking-wider px-8 py-6 animate-pulse-glow"
            asChild
          >
            <a href="tel:+96181815858">
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-border text-foreground font-display text-lg uppercase tracking-wider px-8 py-6 hover:bg-muted"
            asChild
          >
            <a href="https://maps.google.com/?q=H%26H+Fitness+For+Life+Beirut" target="_blank" rel="noopener noreferrer">
              <MapPin className="mr-2 h-5 w-5" />
              Get Directions
            </a>
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-muted-foreground rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
