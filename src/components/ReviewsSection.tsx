import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Marwan",
    badge: "Local Guide · 406 reviews",
    time: "6 years ago",
    text: "The most friendly staff/coaches ever! You feel like entering a huge family house in which everyone knows each other!",
    rating: 5,
  },
  {
    name: "Inderjot Thind",
    badge: "12 reviews",
    time: "6 months ago",
    text: "H&H fitness for life had an amazing customer experience. During my trip to Lebanon, I did not feel like I was missing any amenities when using the gym. Dani and Hani were both amazing. I would definitely come back when I visit Lebanon again!",
    rating: 5,
  },
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-secondary font-body uppercase tracking-[0.2em] text-sm mb-3">Testimonials</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold uppercase text-foreground">
            What Members Say
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-background border border-border rounded-lg p-8 relative group hover:border-primary/50 transition-colors"
            >
              <Quote className="h-8 w-8 text-primary/20 absolute top-6 right-6" />
              
              <div className="flex mb-2">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-secondary text-secondary" />
                ))}
              </div>

              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                "{review.text}"
              </p>

              <div>
                <p className="font-display text-foreground font-semibold uppercase">{review.name}</p>
                <p className="font-body text-muted-foreground text-sm">{review.badge} · {review.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
