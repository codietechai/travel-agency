import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Globe, Plane, MapPin, GraduationCap } from "lucide-react";

export default function TravelHelpPage() {
  return (
    <ServicePageTemplate
      title="Travel & Abroad Help"
      description="24/7 support for travelers and students living abroad"
      heroImage="https://images.pexels.com/photos/1059078/pexels-photo-1059078.jpeg?auto=compress&cs=tinysrgb&w=1920"
      icon={Globe}
      features={[
        "Accommodation assistance and housing guidance",
        "Airport pickup and local transportation support",
        "Banking and SIM card setup assistance",
        "Emergency support hotline available 24/7",
        "Local orientation and area familiarization",
        "Cultural adaptation and integration support",
      ]}
      benefits={[
        "Smooth transition to life abroad",
        "Reduced stress with expert local guidance",
        "Safety and security assurance",
        "Quick resolution of any issues",
        "Connect with other students and expats",
        "Continuous support throughout your stay",
      ]}
      process={[
        {
          step: "Pre-Arrival Planning",
          description: "Coordinate accommodation and travel arrangements.",
        },
        {
          step: "Airport Reception",
          description: "Meet and greet at airport, transport to housing.",
        },
        {
          step: "Settlement Support",
          description: "Help with banking, mobile, and registration.",
        },
        {
          step: "Ongoing Assistance",
          description: "24/7 helpline for emergencies and queries.",
        },
      ]}
      relatedServices={[
        { title: "Visa Services", href: "/services/visa", icon: Plane },
        { title: "Education Consultancy", href: "/services/education", icon: GraduationCap },
        { title: "Post Study Work / PR Visa", href: "/services/pr-visa", icon: MapPin },
      ]}
    />
  );
}
