import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useState } from "react";

const CaseStudySection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const caseStudies = [
    {
      image: "https://zenfy-next-js.vercel.app/assets/img/home1/case-study-img4.jpg",
      category: "IT COMPANY",
      title: "Accelerating Growth A Startup Company Success Story.",
      description: "In this case study, we dissect the challenges faced and the strategic outcomes achieved through our collaborative journey with Egenslab.",
    },
    {
      image: "https://zenfy-next-js.vercel.app/assets/img/home1/case-study-img5.jpg",
      category: "IT AGENCY",
      title: "Digital Transformation Unveiled The IT Farm Experience.",
      description: "This case study unveils the strategic roadmap, the technology stack deployed, and the tangible benefits reaped by Egenslab.",
    },
    {
      image: "https://zenfy-next-js.vercel.app/assets/img/home1/case-study-img1.jpg",
      category: "MARKETING",
      title: "A Business Consulting to Increase Marketing Analytic",
      description: "This case study unveils the strategic roadmap, the technology stack deployed, and the tangible benefits reaped by Egenslab.",
    },
    {
      image: "https://zenfy-next-js.vercel.app/assets/img/home1/case-study-img2.jpg",
      category: "CREATIVE AGENCY",
      title: "Overcoming Expansion An Initial Agency's Triumph",
      description: "In this case study, we dissect the challenges faced, the strategies employed, and the remarkable outcomes achieved through our collaborative efforts.",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-2 text-primary text-sm font-medium mb-4">
                <span>⭐</span>
                <span>BUSINESS TRANSFORMATIONS</span>
                <span>⭐</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Success in the Field
              </h2>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed">
              Dive into the success story of [Client/Project Name] and witness firsthand the transformative journey that exemplifies the impact of Zenfy solutions.
            </p>

            <Button size="lg" className="bg-primary hover:bg-primary-hover text-white">
              View All Stories
            </Button>
          </div>

          {/* Right Content - Case Study Cards */}
          <div className="relative">
            <div className="space-y-6">
              {caseStudies.slice(currentSlide, currentSlide + 2).map((study, index) => (
                <div
                  key={currentSlide + index}
                  className="bg-gray-800 rounded-2xl overflow-hidden group hover:bg-gray-700 transition-all duration-300"
                >
                  <div className="flex">
                    <div className="w-1/3">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-32 object-cover"
                      />
                    </div>
                    <div className="w-2/3 p-6">
                      <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-medium rounded-full mb-3">
                        {study.category}
                      </span>
                      <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                        {study.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        {study.description}
                      </p>
                      <button className="flex items-center gap-2 text-primary font-medium group-hover:gap-4 transition-all duration-300">
                        LEARN MORE
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex justify-center space-x-4 mt-8">
              <button
                onClick={prevSlide}
                className="w-12 h-12 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-all duration-300"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-all duration-300"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Left Side Image */}
        <div className="mt-16">
          <img
            src="https://zenfy-next-js.vercel.app/assets/img/home1/case-study-banner-img.jpg"
            alt="Case Study Banner"
            className="w-full h-64 lg:h-96 object-cover rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;