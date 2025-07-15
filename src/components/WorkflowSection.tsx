import { ArrowRight, ArrowLeft } from "lucide-react";
import { useState } from "react";

const WorkflowSection = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      number: "01",
      title: "Discovery & Consultation",
      image: "https://zenfy-next-js.vercel.app/assets/img/home1/approach-img1.png",
      description: "Foren your case studies issoni crucial touris then attention of your audience.",
      points: [
        "Brainstorming: Collaborate to generate and refine innovative ideas.",
        "Problem Identification: Identify market gaps and challenges your startup.",
      ],
    },
    {
      number: "02",
      title: "Planning and Strategy",
      image: "https://zenfy-next-js.vercel.app/assets/img/home1/approach-img2.png",
      description: "Strategic planning for optimal results in a concise, effective approach.",
      points: [
        "Collaborating: Work together to produce and improve creative concepts.",
        "Resource Allocation: Optimize planning by efficiently allocating resources and ensuring a streamlined approach.",
        "Problem Identification: Determine your startup's obstacles and market gaps.",
        "Solution Development: Translate identified challenges into strategic solutions and business growth.",
      ],
    },
    {
      number: "03",
      title: "Design & Development",
      image: "https://zenfy-next-js.vercel.app/assets/img/home1/approach-img3.png",
      description: "Crafting seamless experiences through innovative design and development.",
      points: [
        "Generating ideas: Come up with and work through creative ideas together.",
        "Prototyping Excellence: Transform ideas into tangible prototypes and user-centric",
      ],
    },
    {
      number: "04",
      title: "Quality Assurance",
      image: "https://zenfy-next-js.vercel.app/assets/img/home1/approach-img4.png",
      description: "Ensuring excellence through meticulous testing and validation processes.",
      points: [
        "Idea generation: Collaborate together to generate and develop creative ideas.",
        "Continuous Testing: Rigorous quality assurance through ongoing testing ensures",
      ],
    },
  ];

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length);
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);
  };

  return (
    <section className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-primary text-sm font-medium mb-4">
            <span>⭐</span>
            <span>HOW WE DO</span>
            <span>⭐</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-8">
            Our Operational Blueprint
          </h2>
          
          {/* Navigation */}
          <div className="flex justify-center space-x-4">
            <button
              onClick={prevStep}
              className="w-12 h-12 bg-border hover:bg-primary hover:text-white rounded-full flex items-center justify-center transition-all duration-300"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextStep}
              className="w-12 h-12 bg-border hover:bg-primary hover:text-white rounded-full flex items-center justify-center transition-all duration-300"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Step Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-8 transition-all duration-300 ${
                index === currentStep
                  ? "shadow-hover scale-105 border-2 border-primary"
                  : "shadow-card hover:shadow-hover"
              }`}
            >
              {/* Step Image */}
              <div className="w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Step Number */}
              <div className="text-center mb-4">
                <span className="text-primary text-sm font-bold">
                  STEP {step.number}
                </span>
              </div>

              <h3 className="text-xl font-bold text-text-primary text-center mb-4">
                {step.title}
              </h3>

              <p className="text-text-secondary text-center text-sm leading-relaxed mb-6">
                {step.description}
              </p>

              {/* Points */}
              <div className="space-y-3">
                {step.points.map((point, pointIndex) => (
                  <div key={pointIndex} className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <p className="text-xs text-text-secondary leading-relaxed">
                      {point}
                    </p>
                  </div>
                ))}
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;