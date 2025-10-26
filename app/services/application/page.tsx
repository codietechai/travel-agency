import ServicePageTemplate from "@/components/ServicePageTemplate";
import { FileText, GraduationCap, Plane, Briefcase } from "lucide-react";

export default function ApplicationFormalitiesPage() {
  return (
    <ServicePageTemplate
      title="Application Formalities"
      description="Complete assistance with university applications and documentation"
      heroImage="https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1920"
      icon={FileText}
      features={[
        "Complete application form filling and submission",
        "Statement of Purpose (SOP) and Letter of Recommendation (LOR) guidance",
        "Document preparation and verification",
        "Application fee payment assistance",
        "Multiple application tracking and follow-up",
        "Interview preparation for universities requiring it",
      ]}
      benefits={[
        "Error-free applications with higher acceptance rates",
        "Professional SOP and LOR that stand out",
        "Timely submission meeting all deadlines",
        "Real-time application status tracking",
        "Expert review of all documents before submission",
        "Support for applications to multiple universities",
      ]}
      process={[
        {
          step: "Document Collection",
          description: "Gather all necessary academic and personal documents.",
        },
        {
          step: "Application Drafting",
          description: "Prepare SOPs, LORs, and fill application forms.",
        },
        {
          step: "Review & Submission",
          description: "Thorough review and submission to universities.",
        },
        {
          step: "Follow-Up",
          description: "Track applications and communicate with universities.",
        },
      ]}
      relatedServices={[
        { title: "Education Consultancy", href: "/services/education", icon: GraduationCap },
        { title: "Visa Services", href: "/services/visa", icon: Plane },
        { title: "Career Counseling", href: "/services/career", icon: Briefcase },
      ]}
    />
  );
}
