import { useState, useEffect, useRef  } from "react";
import { Button } from "@/components/ui/button";
import {
  Play, ArrowUpRight, Phone, Mail, MapPin, Star, CheckCircle, ArrowRight,ArrowLeft , Calendar, MessageSquare,
  ChevronLeft, ChevronRight, Sun, Moon, Globe, Users, Shield, ShoppingCart, BarChart3, Cloud
} from "lucide-react";


const Index = () => {
  // ============= STATE MANAGEMENT =============
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  // ============= DATA ARRAYS =============
  const bannerImages = [
    "https://zenfy-next-js.vercel.app/assets/img/home1/banner-img1.jpg",
    "https://zenfy-next-js.vercel.app/assets/img/home1/banner-img2.jpg",
    "https://zenfy-next-js.vercel.app/assets/img/home1/banner-img3.jpg",
  ];

  const marqueeTexts = [
    "Welcome to InnovateTech Solutions",
    "We thrive on creativity",
    "Your satisfaction is our priority",
    "We believe in the power of collaboration",
    "We invite you to join us on this exciting",
    "We thrive on creativity",
    "Welcome to InnovateTech Solutions",
  ];

  const stats = [
    { number: "150", label: "Project", subtitle: "We Have Completed" },
    { number: "90", label: "%", subtitle: "Customer Satisfaction" },
    { number: "3", label: "Mins", subtitle: "Average Answer Time" },
  ];

  const services = [
    { icon: Globe, title: "Web & App Development", description: "Revolutionize your digital presence with our Web & App Development services—innovative solutions, user-centric experiences." },
    { icon: Users, title: "Consulting Services", description: "Strategic guidance for success: Elevate your business with our expert Consulting Services, tailored for growth and innovation.." },
    { icon: Shield, title: "Cyber Security", description: "Guard your digital fortress with our Cyber Security solutions—ensuring robust protection against evolving threats." },
    { icon: ShoppingCart, title: "E-commerce Solutions", description: "Revolutionize retail with our E-commerce Solutions: seamless, secure, and tailored for your business's success." },
    { icon: BarChart3, title: "Data Analytics", description: "Empower decision-making with insightful Data Analytics—uncover valuable insights for strategic business advancements." },
    { icon: Cloud, title: "Cloud Services", description: "Effortless data management with our Cloud Services—seamless, secure, and scalable solutions for modern businesses." },
  ];


  // portfolioItems 
  const buttonGroups = [
    [0, 1, 2],
    [3, 4, 0],
    [1, 2, 3],
    [4, 0, 1],
    [2, 3, 4],
    [0, 2, 4],
  ];

  const portfolioItems = [
    { image: "https://zenfy-next-js.vercel.app/assets/img/home1/portfolio-img-01.jpg", title: "IT Consulting", category: "Technology" },
    { image: "https://zenfy-next-js.vercel.app/assets/img/home1/portfolio-img-02.jpg", title: "Finance Consulting", category: "Finance" },
    { image: "https://zenfy-next-js.vercel.app/assets/img/home1/portfolio-img-04.jpg", title: "Human Resources", category: "Consulting" },
    { image: "https://zenfy-next-js.vercel.app/assets/img/home1/portfolio-img-05.jpg", title: "Marketing Strategy", category: "Marketing" },
    { image: "https://zenfy-next-js.vercel.app/assets/img/home1/portfolio-img-06.jpg", title: "HR Solutions", category: "Resources" },
  ];

  const steps = [
    { number: "01", title: "Discovery & Consultation", image: "https://zenfy-next-js.vercel.app/assets/img/home1/approach-img1.png", description: "Foren your case studies issoni crucial touris then attention of your audience.", points: ["Brainstorming: Collaborate to generate and refine innovative ideas.", "Problem Identification: Identify market gaps and challenges your startup."] },
    { number: "02", title: "Planning and Strategy", image: "https://zenfy-next-js.vercel.app/assets/img/home1/approach-img2.png", description: "Strategic planning for optimal results in a concise, effective approach.", points: ["Collaborating: Work together to produce and improve creative concepts.", "Resource Allocation: Optimize planning by efficiently allocating resources and ensuring a streamlined approach.", "Problem Identification: Determine your startup's obstacles and market gaps.", "Solution Development: Translate identified challenges into strategic solutions and business growth."] },
    { number: "03", title: "Design & Development", image: "https://zenfy-next-js.vercel.app/assets/img/home1/approach-img3.png", description: "Crafting seamless experiences through innovative design and development.", points: ["Generating ideas: Come up with and work through creative ideas together.", "Prototyping Excellence: Transform ideas into tangible prototypes and user-centric"] },
    { number: "04", title: "Quality Assurance", image: "https://zenfy-next-js.vercel.app/assets/img/home1/approach-img4.png", description: "Ensuring excellence through meticulous testing and validation processes.", points: ["Idea generation: Collaborate together to generate and develop creative ideas.", "Continuous Testing: Rigorous quality assurance through ongoing testing ensures"] },
  ];



//operational blueprint steps
const items = [
    {
      icon: "https://cdn-icons-png.flaticon.com/512/3177/3177361.png", // Head with bulb icon (replace with actual icon URL used in your image)
      title: "Understanding Your Vision",
      description:
        "Unlocking insights, shaping solutions — comprehend complex ideas effortlessly with our vision for clarity and innovation.",
      features: [
        "Sustainability and Responsibility",
        "Customer-Centric Approach",
        "Businesses can partner with affiliates",
      ],
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/1041/1041916.png", // Handshake with bulb icon
      title: "Collaborative Planning",
      description:
        "Streamline teamwork with Collaborative Planning, fostering efficiency and synergy in achieving shared goals seamlessly.",
      features: [
        "Sustainability and Responsibility",
        "Customer-Centric Approach",
        "Businesses can partner with affiliates",
      ],
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/1259/1259764.png", // Gear and pencil icon
      title: "Customized Solutions",
      description:
        "Tailored solutions for your unique needs, delivering personalized results that elevate your experience and surpass expectations.",
      features: [
        "Sustainability and Responsibility",
        "Customer-Centric Approach",
        "Businesses can partner with affiliates",
      ],
    },
  ];
//operational blueprint steps


  const scrollRef = useRef<HTMLDivElement>(null);





  //logo slider
  const companyLogos = [
    "https://zenfy-next-js.vercel.app/assets/img/home1/company-logo-01.png",
    "https://zenfy-next-js.vercel.app/assets/img/home1/company-logo-02.png",
    "https://zenfy-next-js.vercel.app/assets/img/home1/company-logo-03.png",
    "https://zenfy-next-js.vercel.app/assets/img/home1/company-logo-04.png",
    "https://zenfy-next-js.vercel.app/assets/img/home1/company-logo-05.png",
    "https://zenfy-next-js.vercel.app/assets/img/home1/company-logo-06.png",
    "https://zenfy-next-js.vercel.app/assets/img/home1/company-logo-07.png",
  ];

  const blogPosts = [
    { image: "https://zenfy-next-js.vercel.app/assets/img/home1/blog-img1.jpg", category: "Development", title: "How to been population the Startup company of this.", date: "03 January, 2024", comments: 20 },
    { image: "https://zenfy-next-js.vercel.app/assets/img/home1/blog-img2.jpg", category: "Cyber Security", title: "How to Start and Grow your owner Startup company.", date: "05 January, 2024", comments: 12 },
    { image: "https://zenfy-next-js.vercel.app/assets/img/home1/blog-img3.jpg", category: "Consulting", title: "Innovation the power of an Startup company business.", date: "12 January, 2024", comments: 18 },
  ];

  // business transformations
const [caseStudyIndex, setCaseStudyIndex] = useState(0);
const caseStudiesPerPage = 2;

const caseStudies = [
  {
    title: "Navigating Growth A Startup Agency Success Story.",
    subtitle: "STARTUP COMPANY",
    image: "https://zenfy-next-js.vercel.app/assets/img/home1/case-study-img1.jpg",
    description:
      "In this case study, we dissect the challenges faced and the remarkable outcomes achieved through our collaborative efforts.",
  },
  {
    title: "Digital Transformation Unveiled The IT Farm Experience.",
    subtitle: "IT AGENCY",
    image: "https://zenfy-next-js.vercel.app/assets/img/home1/case-study-img2.jpg",
    description:
      "This case study unveils the strategic roadmap, the technology stack deployed, and the tangible benefits reaped by Egenslab.",
  },
  {
    title: "A Business Consulting to Increase Marketing Analyatic",
    subtitle: "MARKETING",
    image: "https://zenfy-next-js.vercel.app/assets/img/home1/case-study-img3.jpg",
    description:
      "This case study unveils the strategic roadmap, the technology stack deployed, and the tangible benefits reaped by Egenslab.",
  },
  {
    title: "Overcoming Expansion An Initial Agency's Triumph",
    subtitle: "CREATIVE AGENCY",
    image: "https://zenfy-next-js.vercel.app/assets/img/home1/case-study-img4.jpg",
    description:
      "In this case study, we dissect the challenges faced, the strategies employed, and the remarkable outcomes achieved through our collaborative efforts.",
  },
  {
    title: "Digital Transformation Unveiled The IT Farm Experience.",
    subtitle: "IT AGENCY",
    image: "https://zenfy-next-js.vercel.app/assets/img/home1/case-study-img5.jpg",
    description:
      "This case study unveils the strategic roadmap, the technology stack deployed, and the tangible benefits reaped by Egenslab.",
  },
  {
    title: "Overcoming Expansion An Initial Agency's Triumph",
    subtitle: "CREATIVE AGENCY",
    image: "https://zenfy-next-js.vercel.app/assets/img/home1/case-study-img1.jpg",
    description:
      "In this case study, we dissect the challenges faced, the strategies employed, and the remarkable outcomes achieved through our collaborative efforts.",
  },
];

const nextCaseStudies = () => {
  if (caseStudyIndex + caseStudiesPerPage < caseStudies.length) {
    setCaseStudyIndex(caseStudyIndex + caseStudiesPerPage);
  }
};

const prevCaseStudies = () => {
  if (caseStudyIndex - caseStudiesPerPage >= 0) {
    setCaseStudyIndex(caseStudyIndex - caseStudiesPerPage);
  }
};

const visibleCaseStudies = caseStudies.slice(caseStudyIndex, caseStudyIndex + caseStudiesPerPage);



  // ============= EFFECTS =============
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % bannerImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % buttonGroups.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const handleVideoPlay = () => setShowVideo(true);


  const [testimonialIndex, setTestimonialIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setTestimonialIndex((prev) => (prev + 1) % 3); // Assuming 3 testimonial cards
  }, 4000);
  return () => clearInterval(interval);
}, []);



  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ============= NAVBAR SECTION ============= */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <img 
                src="https://zenfy-next-js.vercel.app/assets/img/logo.svg" 
                alt="Zenfy" 
                className="h-8 w-auto"
              />
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
              <a href="#portfolio" className="text-foreground hover:text-primary transition-colors">Portfolio</a>
              <a href="#case-study" className="text-foreground hover:text-primary transition-colors">Case Study</a>
              <a href="#blog" className="text-foreground hover:text-primary transition-colors">Blog</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4" />
                <span>+990-737 621 432</span>
              </div>
              <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary-hover">
                Any Question
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* ============= HERO SECTION ============= */}
     <section className="relative min-h-screen bg-[#f8f9fc] overflow-hidden pt-16">
  <div className="container mx-auto px-4 pt-16 pb-20">
    <div className="grid lg:grid-cols-2 gap-10 items-center">
      {/* Left Content */}
      <div className="space-y-8">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-[#4F46E5] text-sm font-medium">
            <span>⭐</span>
            <span>EXPERTISE YOU CAN TRUST</span>
            <span>⭐</span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Empowering your brand
            <br />
            in the <span className="text-[#4F46E5]">digital universe</span>
          </h1>
        </div>

        <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
          Join us as we carve a path to success, driven by passion, powered by innovation, and
          fueled by the collective spirit of our team. We believe in the power of bold ideas,
          and we're here to turn them into reality.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-start">
          <Button size="lg" className="bg-[#4F46E5] hover:bg-[#4338ca] text-white rounded-full px-8">
            Free Consultation
          </Button>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Review On</span>
              <div className="flex text-yellow-400">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-4 w-4 fill-current" />
                ))}
              </div>
            </div>

            <div className="border-l border-gray-300 pl-3 flex items-center gap-2">
              <img
                src="https://zenfy-next-js.vercel.app/assets/img/home1/icon/clutch-logo.svg"
                alt="Clutch"
                className="h-6 w-auto"
              />
              <span className="text-xs text-gray-500">(50 reviews)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="relative">
        <div className="rounded-2xl overflow-hidden shadow-2xl">
          <img
            src={bannerImages[currentImageIndex]}
            alt={`Banner ${currentImageIndex + 1}`}
            className="w-full h-[500px] object-cover transition-all duration-1000"
          />
        </div>

      {/* Rotating Circle Play Button */}
<div className="absolute -bottom-8 -left-[55px] w-32 h-32 flex items-center justify-center">
  <div className="relative w-full h-full">
    {/* Rotating Circle */}
    <div className="absolute inset-0 animate-spin-slow">
      <svg viewBox="0 0 100 100" className="w-full h-full text-[#18181a]">
        <defs>
          <path
            id="circlePath"
            d="M50,50 m-45,0 a45,45 0 1,1 90,0 a45,45 0 1,1 -90,0"
          />
        </defs>
        <text fill="currentColor" fontSize="12" fontWeight="bold">
          <textPath href="#circlePath" startOffset="0%">
            SCALE • STRATEGY • DESIGN • SCALE • STRATEGY • DESIGN •
          </textPath>
        </text>
      </svg>
    </div>

    {/* Centered Play Button */}
    <button
      onClick={handleVideoPlay}
      className="absolute inset-0 flex items-center justify-center bg-[#8f8e9b] text-white rounded-full w-12 h-12 m-auto hover:scale-110 transition-transform duration-300"
    >
      <Play className="h-4 w-4" fill="currentColor" />
    </button>
  </div>
</div>

      </div>
    </div>
  </div>

  {/* Marquee Text Below */}
  <div className="absolute bottom-0 left-0 w-full z-10 bg-[#101011] text-white py-3 overflow-hidden">
    <div className="animate-marquee whitespace-nowrap">
      {marqueeTexts.map((text, index) => (
        <span key={index} className="mx-8 text-sm font-medium">
          {text}
        </span>
      ))}
    </div>
  </div>
</section>


       {/* ============= EXPERTISE SECTION 1============= */}
 
<section className="py-20 bg-section-bg">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-primary text-sm font-medium">
                  <span>⭐</span>
                  <span>EXPERTISE YOU CAN TRUST</span>
                  <span>⭐</span>
                </div>
                <h2 className="text-4xl lg:text-4xl font-bold text-text-primary leading-tight">
                  We are a Startup agency working with young talents on delivering unique 
                  <span className="text-primary"> ideas and creative work.</span>
                </h2>
              </div>
              <p className="text-lg text-text-secondary leading-relaxed">
                Where innovation meets passion in a journey that started with a simple idea and a shared dream. 
                Founded in recent year we embarked on a mission to bring the new innovation and introduce the technology. 
                From humble beginnings to our current aspirations, every step has been fueled by a relentless commitment.
              </p>
            </div>

            {/* Right Content - Stats */}
            <div className="space-y-6 pt-12 pl-60">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center space-x-5">
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-light rounded-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">
                        {stat.number}
                      </div>
                      <div className="text-xs text-primary font-medium">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary">
                      {stat.subtitle}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Feature Highlights Grid */}
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "https://zenfy-next-js.vercel.app/assets/img/home1/icon/about-feature-card-icon1.svg",
                title: "Expertise and Innovation",
                description: "We bring cutting-edge solutions to drive your business forward."
              },
              {
                icon: "https://zenfy-next-js.vercel.app/assets/img/home1/icon/about-feature-card-icon2.svg",
                title: "Transparent Process",
                description: "Clear communication and transparency in every project phase."
              },
              {
                icon: "https://zenfy-next-js.vercel.app/assets/img/home1/icon/about-feature-card-icon3.svg",
                title: "Client-Centric Approach",
                description: "Your success is our priority with personalized solutions."
              },
              {
                icon: "https://zenfy-next-js.vercel.app/assets/img/home1/icon/about-feature-card-icon4.svg",
                title: "Cost-Effective",
                description: "Quality solutions that fit your budget and timeline."
              }
            ].map((item, index) => (
              <div key={index} className="bg-card rounded-xl p-8 shadow-card hover:shadow-hover transition-shadow duration-300 image-hover">
                <div className="w-16 h-16 mb-6">
                  <img src={item.icon} alt={item.title} className="w-full h-full object-contain" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-4">{item.title}</h3>
                <p className="text-text-secondary leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

  {/* ============= EXPERTISE YOU CAN TRUST(Experties) ============= */}
 <section className="py-20 bg-[#F2F6FF]">
      <div className="container mx-auto px-4">
        <div className="text mb-16">
          <div className="flex items-center  gap-2 text-primary text-sm font-medium mb-4">
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


 

      {/* ============= VISUAL EXCELLENCE SECTION ============= */}
<section id="portfolio" className="py-20 bg-[#EEF5FB]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 text-primary text-sm font-medium mb-3">
              <span>⭐</span>
              <span>VISUAL EXCELLENCE</span>
              <span>⭐</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-text-primary">
              Our Creative Showcase
            </h2>
          </div>
          <Button className="mt-6 lg:mt-0 bg-black text-white hover:bg-gray-900">
            View All Portfolio
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {buttonGroups[activeIndex].map((itemIdx) => {
            const item = portfolioItems[itemIdx];
            return (
              <div
                key={item.title}
                className="relative rounded-xl overflow-hidden shadow-lg group"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-6 left-6">
                  <div className="bg-white/10 backdrop-blur-md border border-white text-white text-sm px-3 py-1 rounded-full mb-2 inline-block">
                    {item.category}
                  </div>
                  <h3 className="text-white text-xl font-semibold drop-shadow">
                    {item.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center gap-2">
          {buttonGroups.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full transition duration-300 ${
                activeIndex === idx ? "bg-blue-600" : "bg-gray-300"
              }`}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>

      {/* ============= OPERATIONAL BLUEPRINT SECTION ============= */}
      <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text mb-16">
          <div className="flex items-center  gap-2 text-primary text-sm font-medium mb-4">
            <span>⭐</span>
            <span>HOW WE DO</span>
            <span>⭐</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary">
            Our Operational Blueprint
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: "https://zenfy-next-js.vercel.app/assets/img/home1/approach-img1.png",
              title: "Understanding Your Vision",
              description:
                "Unlocking insights, shaping solutions — comprehend complex ideas effortlessly with our vision for clarity and innovation.",
              features: [
                "Sustainability and Responsibility",
                "Customer-Centric Approach",
                "Businesses can partner with affiliates",
              ],
            },
            {
              icon: "https://zenfy-next-js.vercel.app/assets/img/home1/approach-img2.png",
              title: "Collaborative Planning",
              description:
                "Streamline teamwork with Collaborative Planning, fostering efficiency and synergy in achieving shared goals seamlessly.",
              features: [
                "Sustainability and Responsibility",
                "Customer-Centric Approach",
                "Businesses can partner with affiliates",
              ],
            },
            {
              icon: "https://zenfy-next-js.vercel.app/assets/img/home1/approach-img3.png",
              title: "Customized Solutions",
              description:
                "Tailored solutions for your unique needs, delivering personalized results that elevate your experience and surpass expectations.",
              features: [
                "Sustainability and Responsibility",
                "Customer-Centric Approach",
                "Businesses can partner with affiliates",
              ],
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-8 shadow-card hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-20 h-20 mb-6 group">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-4">
                {item.title}
              </h3>
              <p className="text-text-secondary mb-6">{item.description}</p>
              <ul className="space-y-3">
                {item.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                    <span className="text-sm text-text-secondary">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* ============= BUSINESS TRANSFORMATIONS SECTION ============= */}
<section id="case-study" className="bg-[#1B1B1B] text-white">
  <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[800px]">
    {/* Left image full height and touching top, bottom, left */}
    <div
      className="relative h-full lg:col-span-4"
      style={{
        backgroundImage: `url(https://zenfy-next-js.vercel.app/assets/img/home1/case-study-banner-img.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center p-8">
        <div className="flex items-center gap-2 pb- text-blue-500 text-sm font-medium mb-2">
          <span>✦</span>
          <span>BUSINESS TRANSFORMATIONS</span>
          <span>✦</span>
        </div>
        <h2 className="text-4xl lg:text-5xl pb-80 font-bold mb-4 leading-tight">
          Success in the Field
        </h2>
        <p className="text-gray-300 text-base lg:text-lg mb-6 max-w-md">
          Dive into the success story of [Client/Project Name] and witness firsthand the transformative journey that exemplifies the impact of Zenfy solutions.
        </p>
        <button className="bg-blue-600 hover:bg-white text-black  px-8 py-3 rounded-lg font-medium w-fit">
          View All Stories
        </button>
      </div>
    </div>

    {/* Right cards column */}
    <div className="lg:col-span-8 px-6 py-16">
      <div className="flex flex-wrap gap-6 justify-between">
        {visibleCaseStudies.map((item, index) => (
          <div
            key={index}
            className="w-[calc(50%-0.75rem)] bg-[#121212] rounded-2xl overflow-hidden flex flex-col transition-transform hover:scale-[1.02]"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5 flex flex-col justify-between h-[280px]">
              <div>
                <span className="text-blue-500 text-xs font-semibold uppercase">
                  {item.subtitle}
                </span>
                <h3 className="text-lg font-semibold text-white mt-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400 mt-2">
                  {item.description}
                </p>
              </div>
              <div className="mt-4 text-blue-500 text-sm font-medium flex items-center cursor-pointer hover:underline">
                <span>LEARN MORE</span>
                <ArrowRight className="h-4 w-4 ml-1" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows directly below the right cards */}
      <div className="mt-10 flex justify-center lg:justify gap-6">
        <button
          onClick={prevCaseStudies}
          className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full transition-all"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextCaseStudies}
          className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-all"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  </div>
</section>





{/* =============Workflow Insights ============= */}

<section className="py-20 bg-[#F9FAFB] relative overflow-hidden">
  <div className="container mx-auto px-4">
    {/* Section Header */}
    <div className="text mb-16 text-center">
      <div className="flex items-center justify-center gap-2 text-[#0066FF] text-sm font-semibold mb-4 uppercase tracking-wider">
        <span>✦</span>
        <span>Workflow Insights</span>
        <span>✦</span>
      </div>
      <h2 className="text-4xl lg:text-5xl font-bold text-[#101828]">The Zenfy Approach</h2>
    </div>

    {/* Top Images with Solid Line */}
    <div className="relative flex justify-between items-center max-w-6xl mx-auto mb-16 px-4">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="z-10 w-28 h-28 bg-white rounded-full overflow-hidden border-[5px] border-white shadow-lg">
          <img
            src={
              [
                "/images/step1.jpg",
                "/images/step2.jpg",
                "/images/step3.jpg",
                "/images/step4.jpg",
              ][i]
            }
            alt={`Step ${i + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      <div className="absolute top-1/2 left-14 right-14 h-1 bg-[#E5E7EB] z-0"></div>
    </div>

    {/* Step Cards */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        {
          step: "STEP 01",
          title: "Discovery & Consultation",
          description: "Foren your case studies issoni crucial touris then attention of your audience.",
          points: [
            "Brainstorming: Collaborate to generate and refine innovative ideas.",
            "Problem Identification: Identify market gaps and challenges your startup.",
            "Strategic Planning: Develop a roadmap by strategically aligning innovative ideas.",
            "Solution Proposals: Offer specialised remedies based on identified market gaps."
          ]
        },
        {
          step: "STEP 02",
          title: "Planning and Strategy",
          description: "Strategic planning for optimal results in a concise, effective approach.",
          points: [
            "Collaborating: Work together to produce and improve creative concepts.",
            "Resource Allocation: Optimize planning by efficiently allocating resources and ensuring a streamlined approach.",
            "Problem Identification: Determine your startup's obstacles and market gaps.",
            "Solution Development: Translate identified challenges into strategic solutions and business growth."
          ]
        },
        {
          step: "STEP 03",
          title: "Design & Development",
          description: "Crafting seamless experiences through innovative design and development.",
          points: [
            "Generating ideas: Come up with and work through creative ideas together.",
            "Prototyping Excellence: Transform ideas into tangible prototypes and user-centric design.",
            "Iterative Development: Continuously refine and enhance solutions based on identified problems.",
            "Problem Identification: Identify market gaps and challenges your startup."
          ]
        },
        {
          step: "STEP 04",
          title: "Quality Assurance",
          description: "Ensuring excellence through meticulous testing and validation processes.",
          points: [
            "Idea generation: Collaborate together to generate and develop creative ideas.",
            "Continuous Testing: Rigorous quality assurance through ongoing testing ensures robust solutions.",
            "Performance Testing: Rigorously evaluate the functionality and efficiency of your startup's systems.",
            "Problem Identification: Identify market gaps and challenges your startup."
          ]
        }
      ].map((card, index) => (
        <div
          key={index}
          className="relative bg-[#F9FBFF] rounded-2xl p-6 shadow-[0_4px_24px_rgba(0,102,255,0.08)] transition-all duration-500 group"
        >
          <div className="text-center mb-2">
            <span className="text-[#0066FF] text-sm font-bold">{card.step}</span>
          </div>
          <h3 className="text-xl font-semibold text-[#101828] text-center mb-4">{card.title}</h3>
          <p className="text-sm text-[#475467] text-center mb-4">{card.description}</p>

          {/* Always-visible points */}
          <div className="space-y-3">
            {card.points.slice(0, 2).map((point, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-[#0066FF] rounded-full mt-2" />
                <p className="text-sm text-[#475467]">{point}</p>
              </div>
            ))}
          </div>

          {/* Slide-up points on hover */}
          <div className="overflow-hidden max-h-0 group-hover:max-h-96 transition-all duration-500 ease-in-out">
            <div className="space-y-3 mt-4 animate-slide-up">
              {card.points.slice(2).map((point, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#0066FF] rounded-full mt-2" />
                  <p className="text-sm text-[#475467]">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>

</section>










      {/* ============= LOGO SLIDER SECTION ============= */}
      <section className="py-16 bg-section-bg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">
              WE WORKED WITH GLOBAL LARGEST BRAND
            </h2>
          </div>
          
          <div className="relative overflow-hidden">
            <div className="logo-slider flex items-center gap-16">
              {[...companyLogos, ...companyLogos].map((logo, index) => (
                <div key={index} className="flex-shrink-0 h-12 w-32">
                  <img
                    src={logo}
                    alt={`Company ${index + 1}`}
                    className="h-full w-full object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============= CLIENT FEEDBACK SECTION ============= */}
 <section className="py-20 bg-[#e6effa] min-h-[700px] relative overflow-hidden">
  <div className="container mx-auto px-4">
    <div className="grid lg:grid-cols-2 gap-12 items-start">
      {/* Left Side Content */}
      <div className="mt-[-40px]">
        <div className="flex items-center gap-2 text-blue-600 text-sm font-medium mb-4 mt-28">
          <span>⭐</span>
          <span>CLIENT FEEDBACK</span>
          <span>⭐</span>
        </div>
        <h2 className="text-4xl lg:text-5xl font-bold text-[#101828] mb-6">
          Happy Client Stories
        </h2>
        <p className="text-lg text-[#475467] mb-10 leading-relaxed">
          These voices echo the confidence and satisfaction of clients who've witnessed firsthand
          the impact of our solutions. At Zenfy, our clients aren't just partners.
        </p>

        {/* Review Ratings */}
        <div className="flex items-center gap-10">
          {/* Clutch Review */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="text-sm text-[#475467]">Review On</span>
              <div className="flex text-yellow-400">
                {[...Array(4)].map((_, i) => (
                  <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l2.39 6.78H21l-5.45 3.96L17.61 21 12 16.77 6.39 21l1.06-8.26L2 8.78h6.61z" />
                  </svg>
                ))}
                {/* Half Star */}
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="half-grad">
                      <stop offset="50%" stopColor="currentColor" />
                      <stop offset="50%" stopColor="transparent" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M12 2l2.39 6.78H21l-5.45 3.96L17.61 21 12 16.77 6.39 21l1.06-8.26L2 8.78h6.61z"
                    fill="url(#half-grad)"
                  />
                </svg>
              </div>
            </div>
            <img
              src="https://zenfy-next-js.vercel.app/assets/img/home1/icon/clutch-logo.svg"
              alt="Clutch"
              className="h-5"
              
            />
            <span className="text-sm text-[#475467]"></span>
          </div>

          {/* Google Review */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="text-sm text-[#475467]">Review On</span>
              <div className="flex text-yellow-400">
                {[...Array(4)].map((_, i) => (
                  <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l2.39 6.78H21l-5.45 3.96L17.61 21 12 16.77 6.39 21l1.06-8.26L2 8.78h6.61z" />
                  </svg>
                ))}
                {/* Half Star */}
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path
                    d="M12 2l2.39 6.78H21l-5.45 3.96L17.61 21 12 16.77 6.39 21l1.06-8.26L2 8.78h6.61z"
                  />
                </svg>
              </div>
            </div>
            <img
              src="https://zenfy-next-js.vercel.app/assets/img/home1/icon/google-logo.svg"
              alt="Google"
              className="h-5"
            />
            <span className="text-sm text-[#475467]"></span>
          </div>
        </div>
      </div>

      {/* Right Side - Auto Rotating Testimonials */}
      <div className="relative h-[520px] flex items-center">
        {[
          {
            title: 'Great Consulting!',
            content:
              '“The line\'s length and style can be changed to better fit your document\'s general layout and style. Stars, dashes, or even a graphical element are some other divider alternatives.”',
            name: 'Flurance Miyagi',
            role: 'CEO At astra.com',
            avatar:
              'https://zenfy-next-js.vercel.app/assets/img/home1/icon/testimonial-card-logo3.svg',
            logo:
              'https://zenfy-next-js.vercel.app/assets/img/home1/icon/testimonial-card-logo1.svg',
          },
          {
            title: 'Amazing Consulting Support',
            content:
              '“They exceeded expectations by tailoring solutions for our brand. The results were beyond what we had envisioned. Highly recommend!”',
            name: 'Sarah Thompson',
            role: 'Marketing Head at Finify',
            avatar:
              'https://zenfy-next-js.vercel.app/assets/img/home1/icon/testimonial-card-logo4.svg',
            logo:
              'https://zenfy-next-js.vercel.app/assets/img/home1/icon/testimonial-card-logo4.svg',
          },
          {
            title: 'Incredible Results!',
            content:
              '“Our business grew by 40% in 3 months! Their approach was sharp, strategic, and always on time. True digital partners.”',
            name: 'Daniel Scoot',
            role: 'CTO at Skybits',
            avatar:
              'https://zenfy-next-js.vercel.app/assets/img/home1/icon/testimonial-card-logo3.svg',
            logo:
              'https://zenfy-next-js.vercel.app/assets/img/home1/icon/testimonial-card-logo3.svg',
          },
        ].map((t, i) => (
          <div
            key={i}
            className={`absolute w-full transition-all duration-700 ease-in-out ${
              i === testimonialIndex
                ? 'opacity-100 translate-y-0 z-10'
                : 'opacity-0 translate-y-5 z-0'
            }`}
          >
            <div className="bg-white rounded-2xl p-10 shadow-xl min-h-[340px] flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">{t.title}</h3>
                <p className="text-[17px] text-gray-600 mb-6 leading-relaxed">{t.content}</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src={t.avatar}
                    className="w-12 h-12 rounded-full border bg-gray-100"
                    alt="avatar"
                  />
                  <div>
                    <h4 className="font-semibold text-[#101828]">{t.name}</h4>
                    <p className="text-sm text-blue-600">{t.role}</p>
                  </div>
                </div>
                <img src={t.logo} alt="Logo" className="h-8 object-contain" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>



      {/* ============= BLOG SECTION ============= */}
      <section id="blog" className="py-20 bg-section-bg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 text-primary text-sm font-medium mb-4">
              <span>⭐</span>
              <span>EXPLORE OUR THOUGHTS</span>
              <span>⭐</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-text-primary">
              The Innovation Diaries
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="swiper-slide bg-card rounded-xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 group"
                data-swiper-slide-index={index}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white text-xs px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <span className="bg-black/80 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-text-primary mb-4 leading-tight">
                    {post.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <button className="text-primary font-medium hover:underline flex items-center gap-1">
                      Read More
                      <ArrowRight className="h-4 w-4" />
                    </button>
                    <div className="flex items-center gap-1 text-sm text-text-secondary">
                      <MessageSquare className="h-4 w-4" />
                      <span>Comment ({post.comments})</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============= CONTACT SECTION ============= */}
    <section id="contact" className="py-20 bg-gray-900">
  <div className="container mx-auto px-4">
    <div className="grid lg:grid-cols-2 gap-12">
      {/* Left Side */}
      <div className="text-white space-y-10">
        <div className="flex items-center gap-2 text-blue-400 text-sm font-semibold">
          <span>⭐</span>
          <span>DROP US A LINE</span>
          <span>⭐</span>
        </div>
        <h2 className="text-4xl lg:text-5xl font-bold text-white">
          Connect with Zenfy
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
          Ready to take the first step towards unlocking opportunities, realizing goals, and embracing innovation? We're here and eager to connect.
        </p>

        <div className="space-y-6">
          {/* Phone */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
              <Phone className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-400">To More Inquiry</p>
              <p className="text-lg font-semibold text-white">+990-737 621 432</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
              <Mail className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-400">To Send Mail</p>
              <p className="text-lg font-semibold text-white">info@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="text-white font-semibold mb-4 underline underline-offset-4">
            Social Just You Connected Us!
          </h3>
          <div className="flex gap-6">
            {[
              { name: "LinkedIn", icon: "linkedin" },
              { name: "Facebook", icon: "facebook" },
              { name: "Twitter", icon: "twitter" },
              { name: "Instagram", icon: "instagram" }
            ].map((social, index) => (
              <div key={index} className="text-center">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center mb-2 hover:bg-blue-500 transition-colors cursor-pointer">
                  {/* Replace this with actual icons if needed */}
                  <span className="text-white text-sm">□</span>
                </div>
                <span className="text-xs text-gray-400">{social.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side - Contact Form */}
      <div className="bg-gradient-to-br from-[#f6f9fe] to-[#edf4fc] rounded-2xl p-10 shadow-xl">
        <h3 className="text-2xl font-bold text-gray-800 mb-8">Your Success Starts Here!</h3>
        <form className="space-y-6">
          {/* Row 1 */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Company / Organization *</label>
              <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
              <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Company email *</label>
              <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>
          </div>

          {/* Subject */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Your Subject *</label>
            <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
            <textarea rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"></textarea>
          </div>

          {/* Submit Button */}
          <Button className="bg-gray-800 text-white hover:bg-gray-700 px-8 py-3 rounded-lg w-full">
            Submit Now
          </Button>
        </form>
      </div>
    </div>
  </div>
</section>


      {/* ============= FOOTER SECTION ============= */}
  <section className="bg-[#fefaf8] pt-20 pb-10 text-[#111827] relative">
  <div className="container mx-auto px-4">
    <div className="grid lg:grid-cols-3 gap-12 items-start mb-16">
      {/* Our Solutions */}
      <div>
        <h3 className="font-bold text-5xl pl-5 mb-6">Our Solutions</h3>
        <ul className="space-y-3 pl-9 text-[#4B5563] text-5sm">
          <li>Managed Services</li>
          <li>Cloud Services</li>
          <li>IT Consulting & Advisory</li>
          <li>Network Connectivity</li>
          <li>Cyber Security</li>
          <li>ERP Solutions</li>
          <li>Web Development</li>
          <li>Mobile Development</li>
        </ul>
      </div>

      {/* Centered Logo */}
      <div className="flex justify-center">
        <div className="relative w-[600px] h-[300px] bg-center bg-no-repeat bg-contain" style={{
          backgroundImage: 'url(https://zenfy-next-js.vercel.app/assets/img/home1/footer-logo-bg.png)'
        }}>
          <img
            src="https://zenfy-next-js.vercel.app/assets/img/footer-logo.svg"
            alt="Zenfy Logo"
            className="absolute inset-0 m-auto w-[100px] h-[100px]"
          />
        </div>
      </div>

      {/* What Sets Us Apart */}
      <div>
        <div className="flex items-center gap-2 text-blue-600  text-3xl font-medium mb-2">
          <span>⭐</span>
          <span>THEY TOLD ABOUT</span>
          <span>⭐</span>
        </div>
        <h3 className="font-bold text-3xl mb-4">What Sets Us Apart?</h3>
        <p className="text-[#4B5563]  text-1xl mb-6">
          Welcome to Zenfy, where innovation meets our passion in a journey that started with a simple idea and a shared dream.
        </p>

        {/* Reviews */}
        <div className="space-y-4">
          {/* Clutch */}
          <div className="flex items-center gap-2">
            <span className="text-5sm text-[#6B7280]">Review On</span>
            <div className="flex text-yellow-400">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2l2.39 6.78H21l-5.45 3.96L17.61 21 12 16.77 6.39 21l1.06-8.26L2 8.78h6.61z" />
                </svg>
              ))}
            </div>
            <img src="https://zenfy-next-js.vercel.app/assets/img/home1/icon/clutch-logo.svg" alt="Clutch" className="h-5 ml-1" />
            <span className="text-sm text-[#6B7280]">(50 reviews)</span>
          </div>

          {/* Google */}
          <div className="flex items-center gap-2">
            <span className="text-5sm text-[#6B7280]">Review On</span>
            <div className="flex text-yellow-400">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2l2.39 6.78H21l-5.45 3.96L17.61 21 12 16.77 6.39 21l1.06-8.26L2 8.78h6.61z" />
                </svg>
              ))}
            </div>
            <img src="https://zenfy-next-js.vercel.app/assets/img/home1/icon/google-logo.svg" alt="Google" className="h-5 ml-1" />
            <span className="text-sm text-[#6B7280]">(50 reviews)</span>
          </div>
        </div>
      </div>
    </div>

    {/* Contact Info Row */}
    <div className="grid md:grid-cols-3 gap-8 text-sm text-[#4B5563] mb-8">
      <div className="flex items-center gap-2">
        <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m4 0v2m4 14v-6a2 2 0 00-2-2h-4a2 2 0 00-2 2v6"></path>
        </svg>
        <div>
          <p className="font-semibold text-2xl  text-[#111827]">Call Any Time</p>
          <p>2-965-871-8617</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-4-4h-1M9 20H4v-2a4 4 0 014-4h1m4 0a4 4 0 00-4-4V4a2 2 0 014 0v4m4 4a4 4 0 014 4v4a2 2 0 01-2 2h-4a2 2 0 01-2-2v-4"></path>
        </svg>
        <div>
          <p className="font-semibold text-2xl  text-[#111827]">Address</p>
          <p>Dhaka, Bangladesh</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 12H8m0 0l4-4m-4 4l4 4"></path>
        </svg>
        <div>
          <p className="font-semibold text-2xl text-[#111827]">Say Hello</p>
          <p>info@example.com</p>
        </div>
      </div>
    </div>

    {/* Bottom Links */}
    <div className="border-t border-[#E5E7EB] pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-[#6B7280]">
      <p className="text-center mb-2 md:mb-0">
        Copyright 2024 <span className="text-[#111827] font-semibold">Zenfy</span> | Design By <span className="text-blue-600 font-semibold">CloudTrains</span>
      </p>
      <div className="flex gap-6">
        <a href="#" className="hover:text-blue-600">Support Policy</a>
        <a href="#" className="hover:text-blue-600">Terms & Conditions</a>
        <a href="#" className="hover:text-blue-600">Privacy Policy</a>
      </div>
    </div>
  </div>
</section>



      {/* ============= THEME TOGGLE BUTTON ============= */}
      <div className="fixed top-1/2 right-4 transform -translate-y-1/2 z-50">
    <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="w-12 h-12 bg-primary text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
        >
          {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </button>
      </div>

      {/* ============= SCROLL TO TOP BUTTON ============= */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="scroll-to-top visible"
        >
          <ArrowUpRight className="h-5 w-5" />
        </button>
      )}

      {/* ============= VIDEO MODAL ============= */}
      {showVideo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="relative w-full max-w-4xl mx-4">
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-12 right-0 text-white hover:text-primary text-xl"
            >
              ✕
            </button>
            <div className="relative pb-[56.25%] h-0">
              <iframe
                src="https://www.youtube.com/embed/r4KpWiK08vM?autoplay=1"
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                allowFullScreen
                allow="autoplay"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;