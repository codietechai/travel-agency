import ServicePageTemplate from "@/components/ServicePageTemplate";
import { GraduationCap, FileText, Plane, BookOpen } from "lucide-react";

export default function EducationConsultancyPage() {
  return (
    <ServicePageTemplate
      title="Education Consultancy"
      description="Expert guidance to help you choose the right university and course for your future"
      heroImage="https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1920"
      icon={GraduationCap}
      features={[
        "Personalized university and course selection based on your profile",
        "Guidance on top universities in USA, UK, Canada, Australia, and Europe",
        "Profile evaluation and course matching",
        "Scholarship and financial aid guidance",
        "Pre-departure briefing and orientation",
        "Career-focused program recommendations",
      ]}
      benefits={[
        "Save time with expert recommendations tailored to your goals",
        "Access to exclusive partnerships with 50+ universities worldwide",
        "Increased chances of admission to top-tier institutions",
        "Guidance on maximizing scholarship opportunities",
        "End-to-end support from selection to enrollment",
        "Free career counseling sessions included",
      ]}
      process={[
        {
          step: "Initial Consultation",
          description: "We assess your academic background, career goals, and preferences.",
        },
        {
          step: "University Selection",
          description: "Receive curated list of universities matching your profile.",
        },
        {
          step: "Application Support",
          description: "Assistance with applications, essays, and documentation.",
        },
        {
          step: "Acceptance & Enrollment",
          description: "Guide you through acceptance and enrollment procedures.",
        },
      ]}
      relatedServices={[
        { title: "Application Formalities", href: "/services/application", icon: FileText },
        { title: "Visa Services", href: "/services/visa", icon: Plane },
        { title: "IELTS Training", href: "/services/ielts", icon: BookOpen },
      ]}
    />
  );
}
