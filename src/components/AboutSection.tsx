import { Star, Clock, MapPin, Phone } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-secondary font-body uppercase tracking-[0.2em] text-sm mb-3">About Us</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold uppercase text-foreground">
            Your Fitness Family
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-6">
              At H&H Fitness For Life, we believe fitness is more than lifting weights — it's about building a community. 
              Located in the heart of Beirut, our gym has become a second home for fitness enthusiasts of all levels.
            </p>
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-8">
              With friendly coaches, top-notch equipment, and an atmosphere that feels like family, 
              we're here to support your fitness journey every step of the way.
            </p>

            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                ))}
                <Star className="h-5 w-5 fill-secondary/40 text-secondary" />
              </div>
              <span className="font-display text-2xl font-bold text-foreground">4.3</span>
              <span className="text-muted-foreground font-body">(30 reviews)</span>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-start gap-4">
                <Clock className="h-6 w-6 text-primary mt-1 shrink-0" />
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground uppercase mb-2">Hours</h3>
                  <div className="font-body text-muted-foreground space-y-1">
                    <p>Monday – Saturday: 7:00 AM – 10:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-primary mt-1 shrink-0" />
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground uppercase mb-2">Location</h3>
                  <p className="font-body text-muted-foreground">VGJ5+FX, Beirut, Lebanon</p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-primary mt-1 shrink-0" />
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground uppercase mb-2">Contact</h3>
                  <a href="tel:+96181815858" className="font-body text-primary hover:text-secondary transition-colors">
                    +961 81 815 858
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
