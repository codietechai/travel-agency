import Link from "next/link";
import { Mail, Phone, MapPin, Plane } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-orange-50 via-white to-orange-100 text-gray-800">
      {/* Subtle top divider glow */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-orange-300 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-32">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-5">
              <Plane className="h-8 w-8 text-orange-600" />
              <span className="text-2xl font-bold">
                Global<span className="text-orange-600">Journey</span>
              </span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Your trusted partner for education consultancy, visa assistance,
              and travel solutions — connecting dreams with destinations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Services" },
                { href: "/contact", label: "Contact" },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-orange-600 hover:translate-x-1 inline-block transition-all duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">
              Our Services
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/services/education", label: "Education Consultancy" },
                { href: "/services/visa", label: "Visa Services" },
                { href: "/services/ielts", label: "IELTS Training" },
                { href: "/services/career", label: "Career Counseling" },
              ].map((service, i) => (
                <li key={i}>
                  <Link
                    href={service.href}
                    className="text-gray-600 hover:text-orange-600 hover:translate-x-1 inline-block transition-all duration-300"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                <span>123 Business Avenue, City Center, State 12345</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-600 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-600 flex-shrink-0" />
                <span>info@globaljourney.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-orange-200 mt-12 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-orange-600 font-semibold">GlobalJourney</span>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
