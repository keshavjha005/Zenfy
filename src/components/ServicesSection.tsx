import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Users, Shield, ShoppingCart, BarChart3, Cloud } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Globe,
      title: "Web & App Development",
      description: "Revolutionize your digital presence with our Web & App Development services—innovative solutions, user-centric experiences.",
    },
    {
      icon: Users,
      title: "Consulting Services",
      description: "Strategic guidance for success: Elevate your business with our expert Consulting Services, tailored for growth and innovation..",
    },
    {
      icon: Shield,
      title: "Cyber Security",
      description: "Guard your digital fortress with our Cyber Security solutions—ensuring robust protection against evolving threats.",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description: "Revolutionize retail with our E-commerce Solutions: seamless, secure, and tailored for your business's success.",
    },
    {
      icon: BarChart3,
      title: "Data Analytics",
      description: "Empower decision-making with insightful Data Analytics—uncover valuable insights for strategic business advancements.",
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      description: "Effortless data management with our Cloud Services—seamless, secure, and scalable solutions for modern businesses.",
    },
  ];

  return (
    <section className="py-20 bg-hero-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-primary text-sm font-medium mb-4">
            <span>⭐</span>
            <span>EXPERTISE YOU CAN TRUST</span>
            <span>⭐</span>
          </div>
          <div className="flex items-center justify-between">
            <h2 className="text-4xl lg:text-5xl font-bold text-text-primary">
              Explore Our Solutions
            </h2>
            <Button variant="outline" className="hidden lg:flex items-center gap-2">
              Explore More
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-blue-light rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <service.icon className="h-8 w-8" />
              </div>
              
              <h3 className="text-xl font-bold text-text-primary mb-4">
                {service.title}
              </h3>
              
              <p className="text-text-secondary leading-relaxed mb-6">
                {service.description}
              </p>
              
              <button className="flex items-center gap-2 text-primary font-medium group-hover:gap-4 transition-all duration-300">
                EXPLORE MORE
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 lg:hidden">
          <Button variant="outline" className="flex items-center gap-2 mx-auto">
            Explore More
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;