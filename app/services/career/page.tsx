import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Briefcase, GraduationCap, MapPin, FileText } from "lucide-react";

export default function CareerCounselingPage() {
  return (
    <ServicePageTemplate
      title="Career Counseling"
      description="Personalized career guidance to shape your future"
      heroImage="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1920"
      icon={Briefcase}
      features={[
        "One-on-one career counseling sessions",
        "Aptitude and psychometric testing",
        "Industry-specific career path guidance",
        "Resume and LinkedIn profile building",
        "Interview preparation and coaching",
        "Job search strategies and networking tips",
      ]}
      benefits={[
        "Discover career paths aligned with your strengths",
        "Make informed decisions about your future",
        "Gain competitive edge in job market",
        "Access to global career opportunities",
        "Professional resume that gets noticed",
        "Confidence to ace job interviews",
      ]}
      process={[
        {
          step: "Career Assessment",
          description: "Evaluate your skills, interests, and goals.",
        },
        {
          step: "Path Exploration",
          description: "Explore various career options and industries.",
        },
        {
          step: "Skill Development",
          description: "Identify and work on required skills.",
        },
        {
          step: "Action Plan",
          description: "Create roadmap to achieve career goals.",
        },
      ]}
      relatedServices={[
        { title: "Education Consultancy", href: "/services/education", icon: GraduationCap },
        { title: "Post Study Work / PR Visa", href: "/services/pr-visa", icon: MapPin },
        { title: "Application Formalities", href: "/services/application", icon: FileText },
      ]}
    />
  );
}
