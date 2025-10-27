import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Globe2, Award, Target, Heart } from "lucide-react";

export default function AboutPage() {
  const team = [
    {
      name: "Michael Anderson",
      role: "Founder & CEO",
      image:
        "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      name: "Priya Sharma",
      role: "Head of Education Consultancy",
      image:
        "https://images.pexels.com/photos/3765140/pexels-photo-3765140.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      name: "David Martinez",
      role: "Visa & Immigration Expert",
      image:
        "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      name: "Lisa Thompson",
      role: "IELTS Training Director",
      image:
        "https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ];

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To empower individuals with the knowledge and support needed to achieve their international education and career goals.",
    },
    {
      icon: Heart,
      title: "Our Vision",
      description:
        "To be the most trusted partner for students and professionals seeking opportunities abroad.",
    },
    {
      icon: Award,
      title: "Our Commitment",
      description:
        "We are committed to providing personalized, ethical, and result-oriented services to every client.",
    },
  ];

  const achievements = [
    { number: "5000+", label: "Successful Visa Applications" },
    { number: "15+", label: "Years of Experience" },
    { number: "50+", label: "Partner Universities" },
    { number: "98%", label: "Client Satisfaction Rate" },
  ];

  const whyChooseUs = [
    "Expert team with 15+ years of experience",
    "Personalized guidance for each client",
    "Partnerships with top universities worldwide",
    "High success rate in visa applications",
    "Comprehensive post-arrival support",
    "Transparent pricing with no hidden fees",
  ];

  return (
    <div className="min-h-screen">
      <section
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1920')",
        }}
      >
        <div className="text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">About Us</h1>
          <p className="text-xl md:text-2xl text-gray-200">
            Your trusted partner in global education and travel
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Who We Are
              </h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                GlobalJourney is a leading consultancy firm specializing in
                education, visa services, and travel solutions. With over 15
                years of experience, we have helped thousands of students and
                professionals achieve their dreams of studying and working
                abroad.
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Our team of experienced consultants provides personalized
                guidance throughout your journey, from selecting the right
                university to securing your visa and settling in your new
                destination.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We pride ourselves on our ethical approach, transparent
                processes, and commitment to excellence. Your success is our
                success, and we work tirelessly to ensure you receive the best
                possible service.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <Card
                  key={index}
                  className="text-center border-2 border-orange-100"
                >
                  <CardContent className="pt-6">
                    <p className="text-4xl font-bold text-orange-600 mb-2">
                      {achievement.number}
                    </p>
                    <p className="text-gray-700 font-medium">
                      {achievement.label}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="border-2 hover:border-orange-600 transition-colors"
                >
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <Icon className="h-8 w-8 text-orange-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">
                      {value.title}
                    </h3>
                    <p className="text-gray-700 text-center leading-relaxed">
                      {value.description}
                    </p>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Here's what sets us apart from other consultancies
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-700">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">
              Experienced professionals dedicated to your success
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="overflow-hidden border-2 hover:border-orange-600 transition-colors"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="text-center pt-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-orange-600 font-medium">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
