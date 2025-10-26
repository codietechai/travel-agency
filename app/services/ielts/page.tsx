import ServicePageTemplate from "@/components/ServicePageTemplate";
import { BookOpen, GraduationCap, Plane, Briefcase } from "lucide-react";

export default function IELTSTrainingPage() {
  return (
    <ServicePageTemplate
      title="IELTS Training"
      description="Professional coaching to achieve your target IELTS score"
      heroImage="https://images.pexels.com/photos/5212653/pexels-photo-5212653.jpeg?auto=compress&cs=tinysrgb&w=1920"
      icon={BookOpen}
      features={[
        "Comprehensive training for all four modules (Listening, Reading, Writing, Speaking)",
        "Experienced instructors with proven track records",
        "Small batch sizes for personalized attention",
        "Regular mock tests and performance analysis",
        "Flexible class timings (weekday and weekend batches)",
        "Study materials and practice resources included",
      ]}
      benefits={[
        "Achieve band score of 7+ with our proven methods",
        "Structured curriculum covering all test formats",
        "Individual feedback and improvement plans",
        "Access to online learning portal",
        "Test registration and booking assistance",
        "Money-back guarantee for score improvement",
      ]}
      process={[
        {
          step: "Assessment Test",
          description: "Evaluate your current proficiency level.",
        },
        {
          step: "Customized Training",
          description: "Tailored lessons focusing on weak areas.",
        },
        {
          step: "Mock Tests",
          description: "Regular practice tests in exam conditions.",
        },
        {
          step: "Final Preparation",
          description: "Last-minute tips and exam day strategies.",
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
