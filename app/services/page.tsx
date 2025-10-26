import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, FileText, Plane, Globe, BookOpen, Briefcase, MapPin, Ticket, ArrowRight } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      icon: GraduationCap,
      title: "Education Consultancy",
      description: "Expert guidance for studying abroad at top universities worldwide. We help you choose the right course and institution.",
      href: "/services/education",
    },
    {
      icon: FileText,
      title: "Application Formalities",
      description: "Complete assistance with university applications, documentation, and submission processes to ensure success.",
      href: "/services/application",
    },
    {
      icon: Plane,
      title: "Visa Services",
      description: "Comprehensive visa processing and documentation support with high success rates across multiple countries.",
      href: "/services/visa",
    },
    {
      icon: Globe,
      title: "Travel & Abroad Help",
      description: "24/7 support for travelers and students living abroad. We assist with accommodation, local setup, and emergencies.",
      href: "/services/travel-help",
    },
    {
      icon: BookOpen,
      title: "IELTS Training",
      description: "Professional coaching to achieve your target IELTS score with experienced instructors and proven methods.",
      href: "/services/ielts",
    },
    {
      icon: Briefcase,
      title: "Career Counseling",
      description: "Personalized career guidance to shape your future. Expert advice on career paths and professional development.",
      href: "/services/career",
    },
    {
      icon: MapPin,
      title: "Post Study Work / PR Visa",
      description: "Assistance with work permits and permanent residency applications in countries like Canada, Australia, and more.",
      href: "/services/pr-visa",
    },
    {
      icon: Ticket,
      title: "Travel & Ticketing",
      description: "Best deals on flights, hotels, and travel packages. Comprehensive travel planning and booking services.",
      href: "/services/ticketing",
    },
  ];

  const prOptions = [
    {
      country: "Canada",
      programs: ["Express Entry", "Provincial Nominee Program", "Study-to-PR Pathway"],
    },
    {
      country: "Australia",
      programs: ["Skilled Migration", "Post-Study Work Visa", "State Nomination"],
    },
    {
      country: "Investor Visa",
      programs: ["Business Immigration", "Entrepreneur Visa", "Investment Programs"],
    },
  ];

  return (
    <div className="min-h-screen">
      <section
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1920')",
        }}
      >
        <div className="text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Services</h1>
          <p className="text-xl md:text-2xl text-gray-200">
            Comprehensive solutions for your global journey
          </p>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From education to immigration, we provide end-to-end solutions for your international aspirations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="border-2 hover:border-red-600 transition-all duration-300 hover:shadow-xl">
                  <CardHeader>
                    <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-8 w-8 text-red-600" />
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-6 text-gray-700">
                      {service.description}
                    </CardDescription>
                    <Link href={service.href}>
                      <Button className="w-full bg-red-600 hover:bg-red-700 group">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Permanent Residency Options</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore immigration pathways to establish your future abroad
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {prOptions.map((option, index) => (
              <Card key={index} className="border-2 border-gray-200">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <MapPin className="h-8 w-8 text-red-600" />
                  </div>
                  <CardTitle className="text-2xl">{option.country}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {option.programs.map((program, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{program}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-red-100">
            Book a free consultation with our expert team today
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="bg-white text-red-600 hover:bg-gray-100 text-lg px-8 py-6">
              Schedule Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
