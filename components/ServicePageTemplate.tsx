import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle, ArrowRight } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface ServicePageTemplateProps {
  title: string;
  description: string;
  heroImage: string;
  icon: LucideIcon;
  features: string[];
  benefits: string[];
  process?: { step: string; description: string }[];
  relatedServices: { title: string; href: string; icon: LucideIcon }[];
}

export default function ServicePageTemplate({
  title,
  description,
  heroImage,
  icon: Icon,
  features,
  benefits,
  process,
  relatedServices,
}: ServicePageTemplateProps) {
  return (
    <div className="min-h-screen">
      <section
        className="relative h-[500px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('${heroImage}')`,
        }}
      >
        <div className="text-center text-white px-4 max-w-4xl">
          <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center mb-6 mx-auto">
            <Icon className="h-10 w-10" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">{title}</h1>
          <p className="text-xl md:text-2xl text-gray-200">{description}</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                What We Offer
              </h2>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
                    <p className="text-lg text-gray-700">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Key Benefits
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
                    <p className="text-lg text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {process && process.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Our Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((step, index) => (
                <Card
                  key={index}
                  className="border-2 hover:border-orange-600 transition-colors"
                >
                  <CardHeader>
                    <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mb-4 text-white font-bold text-xl">
                      {index + 1}
                    </div>
                    <CardTitle className="text-xl">{step.step}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Related Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedServices.map((service, index) => {
              const ServiceIcon = service.icon;
              return (
                <Link key={index} href={service.href}>
                  <Card className="border-2 hover:border-orange-600 transition-all duration-300 hover:shadow-lg cursor-pointer h-full">
                    <CardHeader>
                      <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                        <ServiceIcon className="h-7 w-7 text-orange-600" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center text-orange-600 font-medium group">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Begin?</h2>
          <p className="text-xl mb-8 text-orange-100">
            Book your free consultation and let us guide you to success
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-6"
            >
              Book Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
