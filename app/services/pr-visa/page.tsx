import ServicePageTemplate from "@/components/ServicePageTemplate";
import { MapPin, Plane, Briefcase, Globe } from "lucide-react";

export default function PRVisaPage() {
  return (
    <ServicePageTemplate
      title="Post Study Work / PR Visa"
      description="Assistance with work permits and permanent residency applications"
      heroImage="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920"
      icon={MapPin}
      features={[
        "Post-study work visa application assistance",
        "Permanent residency pathway consultation",
        "Express Entry and Provincial Nominee Program (Canada)",
        "Skilled Migration Program (Australia)",
        "Points assessment and eligibility evaluation",
        "Document preparation and submission support",
      ]}
      benefits={[
        "Expert guidance on complex immigration laws",
        "Maximize your points for PR applications",
        "Higher success rate with professional support",
        "Navigate country-specific requirements easily",
        "Support for spouse and family applications",
        "Post-approval settlement assistance",
      ]}
      process={[
        {
          step: "Eligibility Check",
          description: "Assess your eligibility for work permit or PR.",
        },
        {
          step: "Documentation",
          description: "Prepare and verify all required documents.",
        },
        {
          step: "Application Filing",
          description: "Submit applications to immigration authorities.",
        },
        {
          step: "Approval & Settlement",
          description: "Support through approval and relocation.",
        },
      ]}
      relatedServices={[
        { title: "Visa Services", href: "/services/visa", icon: Plane },
        { title: "Career Counseling", href: "/services/career", icon: Briefcase },
        { title: "Travel & Abroad Help", href: "/services/travel-help", icon: Globe },
      ]}
    />
  );
}
