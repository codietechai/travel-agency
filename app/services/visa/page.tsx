import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Plane, FileText, Globe, MapPin } from "lucide-react";

export default function VisaServicesPage() {
  return (
    <ServicePageTemplate
      title="Visa Services"
      description="Comprehensive visa processing with high success rates"
      heroImage="https://images.pexels.com/photos/730778/pexels-photo-730778.jpeg?auto=compress&cs=tinysrgb&w=1920"
      icon={Plane}
      features={[
        "Student visa assistance for USA, UK, Canada, Australia, Europe",
        "Complete documentation and form filling support",
        "Visa interview preparation and mock sessions",
        "Financial documentation guidance",
        "Visa slot booking and appointment scheduling",
        "Post-visa approval travel planning",
      ]}
      benefits={[
        "98% visa success rate across all countries",
        "Expert guidance on complex visa requirements",
        "Reduced chance of visa rejection",
        "Time-saving with streamlined processes",
        "Support even after visa approval",
        "Guidance on visa extensions and renewals",
      ]}
      process={[
        {
          step: "Documentation",
          description: "Collect and prepare all required visa documents.",
        },
        {
          step: "Application Filing",
          description: "Complete visa forms and submit applications.",
        },
        {
          step: "Interview Prep",
          description: "Mock interviews and preparation sessions.",
        },
        {
          step: "Visa Approval",
          description: "Support through approval and travel planning.",
        },
      ]}
      relatedServices={[
        { title: "Application Formalities", href: "/services/application", icon: FileText },
        { title: "Travel & Abroad Help", href: "/services/travel-help", icon: Globe },
        { title: "Post Study Work / PR Visa", href: "/services/pr-visa", icon: MapPin },
      ]}
    />
  );
}
