import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="py-24 px-4">
      <div className="container max-w-3xl text-center">
        <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-4">
          // Contact
        </h2>
        
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 tracking-tight">
          What do you need to build?
        </h3>
        
        <p className="text-muted-foreground text-base sm:text-lg mb-10 max-w-xl mx-auto">
          When you work with Brooker Systems, you aren't passed off to a junior account manager. 
          You speak directly with the engineers building your project.
        </p>
        
        <Button 
          size="lg" 
          className="glow-primary-sm hover:glow-primary transition-all duration-300 text-base px-8 py-6"
          asChild
        >
          <a href="mailto:max@brookersystems.com.au?subject=Project%20Inquiry%20-%20[Company%20Name]&body=Hi%20Brooker%20Systems%2C%0A%0AI'm%20looking%20for%20help%20with..." className="inline-flex items-center gap-2">
            <Mail className="w-5 h-5" />
            Get in Touch
          </a>
        </Button>

        <div className="mt-20 pt-8 border-t border-border">
          <p className="font-mono text-xs text-muted-foreground">
            © 2026 Brooker Systems — All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
