import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, FileText, Plane, Globe, BookOpen, Briefcase, MapPin, Ticket, Star } from "lucide-react";

export default function Home() {
  const services = [
    {
      icon: GraduationCap,
      title: "Education Consultancy",
      description: "Expert guidance for studying abroad at top universities worldwide.",
      href: "/services/education",
    },
    {
      icon: FileText,
      title: "Application Formalities",
      description: "Complete assistance with university and college application processes.",
      href: "/services/application",
    },
    {
      icon: Plane,
      title: "Visa Services",
      description: "Comprehensive visa processing and documentation support.",
      href: "/services/visa",
    },
    {
      icon: Globe,
      title: "Travel & Abroad Help",
      description: "24/7 support for travelers and students living abroad.",
      href: "/services/travel-help",
    },
    {
      icon: BookOpen,
      title: "IELTS Training",
      description: "Professional coaching to achieve your target IELTS score.",
      href: "/services/ielts",
    },
    {
      icon: Briefcase,
      title: "Career Counseling",
      description: "Personalized career guidance to shape your future.",
      href: "/services/career",
    },
    {
      icon: MapPin,
      title: "Post Study Work / PR Visa",
      description: "Assistance with work permits and permanent residency applications.",
      href: "/services/pr-visa",
    },
    {
      icon: Ticket,
      title: "Travel & Ticketing",
      description: "Best deals on flights, hotels, and travel packages.",
      href: "/services/ticketing",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Student, University of Toronto",
      content: "GlobalJourney made my dream of studying in Canada a reality. Their team handled everything from university selection to visa processing professionally.",
      rating: 5,
    },
    {
      name: "Rajesh Patel",
      role: "Software Engineer, Australia",
      content: "Thanks to their career counseling and PR visa services, I successfully relocated to Australia. Highly recommend their services!",
      rating: 5,
    },
    {
      name: "Emily Chen",
      role: "IELTS Student",
      content: "The IELTS training program was exceptional. I achieved a band score of 8.5 and got into my dream university in the UK.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      <section
        className="relative h-[600px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=1920')",
        }}
      >
        <div className="text-center text-white px-4 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Your Gateway to Global Opportunities
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Expert guidance for education, visa, and travel solutions worldwide
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-lg px-8 py-6">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions tailored to help you achieve your international dreams
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link key={index} href={service.href}>
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border-2 hover:border-red-600">
                    <CardHeader>
                      <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                        <Icon className="h-7 w-7 text-red-600" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {service.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link href="/services">
              <Button variant="outline" size="lg" className="border-red-600 text-red-600 hover:bg-red-50">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">
              Success stories from students and professionals we've helped
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-2 hover:border-red-600 transition-colors">
                <CardHeader>
                  <div className="flex mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{testimonial.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 text-red-100">
            Get in touch with our expert team for a free consultation
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="bg-white text-red-600 hover:bg-gray-100 text-lg px-8 py-6">
              Contact Us Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
