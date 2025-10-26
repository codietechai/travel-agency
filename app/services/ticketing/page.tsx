import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Ticket, Plane, Globe, MapPin } from "lucide-react";

export default function TicketingPage() {
  return (
    <ServicePageTemplate
      title="Travel & Ticketing"
      description="Best deals on flights, hotels, and travel packages"
      heroImage="https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=1920"
      icon={Ticket}
      features={[
        "Flight booking at competitive prices",
        "Hotel reservations worldwide",
        "Travel insurance assistance",
        "Customized travel packages",
        "Group booking discounts",
        "24/7 travel support and assistance",
      ]}
      benefits={[
        "Exclusive deals and discounts on flights",
        "Save time with one-stop travel solutions",
        "Trusted partnerships with airlines and hotels",
        "Flexible booking and cancellation policies",
        "Expert advice on travel routes and timings",
        "Special rates for students and groups",
      ]}
      process={[
        {
          step: "Travel Planning",
          description: "Discuss your travel requirements and preferences.",
        },
        {
          step: "Quote Comparison",
          description: "Compare options and select best deals.",
        },
        {
          step: "Booking Confirmation",
          description: "Secure bookings and send confirmations.",
        },
        {
          step: "Travel Support",
          description: "Provide support during your entire journey.",
        },
      ]}
      relatedServices={[
        { title: "Visa Services", href: "/services/visa", icon: Plane },
        { title: "Travel & Abroad Help", href: "/services/travel-help", icon: Globe },
        { title: "Post Study Work / PR Visa", href: "/services/pr-visa", icon: MapPin },
      ]}
    />
  );
}
