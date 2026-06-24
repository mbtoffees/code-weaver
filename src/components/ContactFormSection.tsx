import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, CheckCircle } from "lucide-react";

const API_URL = import.meta.env.VITE_API_URL || "https://code-weaver-nine.vercel.app";

type ContactFormSectionProps = {
  heading?: string;
  messagePlaceholder?: string;
  submitLabel?: string;
};

const ContactFormSection = ({
  heading = "Tell me about the problems slowing your team down.",
  messagePlaceholder = "Tell me what is annoying, slow or error-prone in your business.",
  submitLabel = "Get my free task review",
}: ContactFormSectionProps) => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to send");

      setStatus("sent");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 px-4">
      <div className="container max-w-xl">
        <div className="text-center mb-12">
          <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-4">
            // Contact
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            {heading}
          </h3>
        </div>

        {status === "sent" ? (
          <div className="text-center py-12">
            <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
            <p className="text-lg font-medium mb-2">Message sent!</p>
            <p className="text-muted-foreground">I'll get back to you soon.</p>
            <Button
              variant="ghost"
              className="mt-6"
              onClick={() => setStatus("idle")}
            >
              Send another message
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder={messagePlaceholder}
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
            </div>

            {status === "error" && (
              <p className="text-sm text-red-400">
                Something went wrong. Please try again or email me directly.
              </p>
            )}

            <Button
              type="submit"
              size="lg"
              disabled={status === "sending"}
              className="w-full glow-primary-sm hover:glow-primary transition-all duration-300 text-base py-6"
            >
              {status === "sending" ? (
                "Sending..."
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  {submitLabel}
                </>
              )}
            </Button>

          </form>
        )}
      </div>
    </section>
  );
};

export default ContactFormSection;
