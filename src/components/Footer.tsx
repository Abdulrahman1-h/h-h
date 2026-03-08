import logo from "@/assets/logo.png";
import { Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="py-16 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <img src={logo} alt="H&H Fitness For Life" className="h-16 w-16 object-contain" />
            <div>
              <p className="font-display text-xl font-bold uppercase text-foreground">H&H Fitness For Life</p>
              <p className="font-body text-muted-foreground text-sm">Beirut, Lebanon</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 text-sm font-body text-muted-foreground">
            <a href="tel:+96181815858" className="flex items-center gap-2 hover:text-foreground transition-colors">
              <Phone className="h-4 w-4" /> +961 81 815 858
            </a>
            <a
              href="https://maps.google.com/?q=H%26H+Fitness+For+Life+Beirut"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <MapPin className="h-4 w-4" /> VGJ5+FX, Beirut
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="font-body text-muted-foreground text-sm">
            © {new Date().getFullYear()} H&H Fitness For Life. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
