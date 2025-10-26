import Link from "next/link";
import { Mail, Phone, MapPin, Plane } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Plane className="h-8 w-8 text-red-600" />
              <span className="text-2xl font-bold">
                Global<span className="text-red-600">Journey</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Your trusted partner for education consultancy, visa services, and travel solutions worldwide.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-red-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-red-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-red-600 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-red-600 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/education" className="text-gray-400 hover:text-red-600 transition-colors">
                  Education Consultancy
                </Link>
              </li>
              <li>
                <Link href="/services/visa" className="text-gray-400 hover:text-red-600 transition-colors">
                  Visa Services
                </Link>
              </li>
              <li>
                <Link href="/services/ielts" className="text-gray-400 hover:text-red-600 transition-colors">
                  IELTS Training
                </Link>
              </li>
              <li>
                <Link href="/services/career" className="text-gray-400 hover:text-red-600 transition-colors">
                  Career Counseling
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">123 Business Avenue, City Center, State 12345</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-red-600 flex-shrink-0" />
                <span className="text-gray-400 text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-red-600 flex-shrink-0" />
                <span className="text-gray-400 text-sm">info@globaljourney.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} GlobalJourney. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
