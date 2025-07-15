import { Button } from "@/components/ui/button";
import { useState } from "react";

const PortfolioSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const portfolioImages = [
    {
      src: "https://zenfy-next-js.vercel.app/assets/img/home1/portfolio-img-01.jpg",
      category: "Marketing",
      title: "Management Consulting",
    },
    {
      src: "https://zenfy-next-js.vercel.app/assets/img/home1/portfolio-img-02.jpg",
      category: "Resources",
      title: "Human Resources Consulting",
    },
    {
      src: "https://zenfy-next-js.vercel.app/assets/img/home1/portfolio-img-04.jpg",
      category: "Technology",
      title: "IT Consulting",
    },
    {
      src: "https://zenfy-next-js.vercel.app/assets/img/home1/portfolio-img-05.jpg",
      category: "Marketing",
      title: "Digital Marketing",
    },
    {
      src: "https://zenfy-next-js.vercel.app/assets/img/home1/portfolio-img-06.jpg",
      category: "Development",
      title: "Web Development",
    },
  ];

  return (
    <section className="py-20 bg-hero-bg overflow-hidden">
      <div className="container mx-auto px-4 mb-16">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 text-primary text-sm font-medium mb-4">
              <span>⭐</span>
              <span>VISUAL EXCELLENCE</span>
              <span>⭐</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-text-primary">
              Our Creative Showcase
            </h2>
          </div>
          <Button variant="outline" className="hidden lg:flex">
            View All Portfolio
          </Button>
        </div>
      </div>

      {/* Sliding Portfolio */}
      <div className="relative">
        <div className="flex space-x-6 portfolio-slider">
          {/* Duplicate images for seamless loop */}
          {[...portfolioImages, ...portfolioImages].map((item, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-80 h-96 rounded-2xl overflow-hidden group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={item.src}
                alt={item.title}
                className={`w-full h-full object-cover transition-all duration-500 ${
                  hoveredIndex === index ? "scale-110" : "scale-100"
                }`}
              />
              
              {/* Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 ${
                hoveredIndex === index ? "opacity-100" : "opacity-0"
              }`}>
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-medium rounded-full mb-3">
                    {item.category}
                  </span>
                  <h3 className="text-white text-xl font-bold">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Swiper effect overlay */}
              <div className={`absolute inset-0 bg-primary/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${
                hoveredIndex === index ? "opacity-100 scale-100" : "opacity-0 scale-75"
              }`}>
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12L15 7H5l5 5z" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Portfolio Dots */}
      <div className="flex justify-center mt-12 space-x-2">
        {portfolioImages.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === 0 ? "bg-primary" : "bg-border"
            }`}
          />
        ))}
      </div>

      <div className="text-center mt-12 lg:hidden">
        <Button variant="outline">
          View All Portfolio
        </Button>
      </div>
    </section>
  );
};

export default PortfolioSection;