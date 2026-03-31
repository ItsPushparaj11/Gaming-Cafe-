import { MapPin, Phone, Clock, MessageCircle, Mail, Instagram } from "lucide-react";

const contactMethods = [
  {
    icon: MapPin,
    title: "Visit Us",
    primary: "PixelArena Gaming Cafe",
    secondary: "123, 5th Block, Koramangala, Bengaluru - 560095",
    action: {
      label: "Get Directions",
      href: "https://maps.google.com/?q=Koramangala+5th+Block+Bengaluru",
    },
  },
  {
    icon: Phone,
    title: "Call Us",
    primary: "+91 98765 43210",
    secondary: "Available during business hours",
    action: {
      label: "Call Now",
      href: "tel:+919876543210",
    },
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    primary: "+91 98765 43210",
    secondary: "Quick responses, booking confirmations",
    action: {
      label: "Chat on WhatsApp",
      href: "https://wa.me/919876543210?text=Hi%20PixelArena!%20I%27d%20like%20to%20know%20more%20about%20your%20gaming%20cafe.",
    },
  },
  {
    icon: Mail,
    title: "Email",
    primary: "hello@pixelarena.in",
    secondary: "For partnerships and inquiries",
    action: {
      label: "Send Email",
      href: "mailto:hello@pixelarena.in",
    },
  },
  {
    icon: Clock,
    title: "Opening Hours",
    primary: "10:00 AM - 12:00 AM",
    secondary: "Open all days including holidays",
    action: null,
  },
  {
    icon: Instagram,
    title: "Social Media",
    primary: "@pixelarena.blr",
    secondary: "Follow for updates and offers",
    action: {
      label: "Follow Us",
      href: "https://instagram.com/pixelarena.blr",
    },
  },
];

export function ContactInfo() {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {contactMethods.map((method) => (
            <div
              key={method.title}
              className="bg-background border border-border rounded-xl p-6 hover:border-primary/50 transition-colors group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <method.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">
                    {method.title}
                  </h3>
                  <p className="font-semibold text-foreground mb-1">
                    {method.primary}
                  </p>
                  <p className="text-sm text-muted-foreground mb-3">
                    {method.secondary}
                  </p>
                  {method.action && (
                    <a
                      href={method.action.href}
                      target={method.action.href.startsWith("http") ? "_blank" : undefined}
                      rel={method.action.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                      {method.action.label}
                      <span className="ml-1">&rarr;</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
