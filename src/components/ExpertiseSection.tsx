const ExpertiseSection = () => {
  const features = [
    {
      icon: "https://zenfy-next-js.vercel.app/assets/img/home1/icon/about-feature-card-icon1.svg",
      title: "Expertise and Innovation",
      description: "We pride ourselves staying at the front of innovation, constantly pushing boundaries a redefining what's possible.",
    },
    {
      icon: "https://zenfy-next-js.vercel.app/assets/img/home1/icon/about-feature-card-icon2.svg",
      title: "Transparent Process",
      description: "Our transparent process is designed to demystify the journey from concept to delivery.",
    },
    {
      icon: "https://zenfy-next-js.vercel.app/assets/img/home1/icon/about-feature-card-icon3.svg",
      title: "Client-Centric Approach",
      description: "Our dedicated team takes the time to listen, & collaborate, ensuring that every interaction a step towards your success.",
    },
    {
      icon: "https://zenfy-next-js.vercel.app/assets/img/home1/icon/about-feature-card-icon4.svg",
      title: "Cost-Effective",
      description: "Our commitment to providing cost-effective solutions is ingrained in our mission.",
    },
  ];

  const stats = [
    { number: "150", label: "Project", subtitle: "We Have Completed" },
    { number: "90", label: "%", subtitle: "Customer Satisfaction" },
    { number: "3", label: "Mins", subtitle: "Average Answer Time" },
  ];

  return (
    <section className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-primary text-sm font-medium">
                <span>⭐</span>
                <span>EXPERTISE YOU CAN TRUST</span>
                <span>⭐</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-text-primary leading-tight">
                We are a Startup agency working with young talents on delivering unique 
                <span className="text-primary"> ideas and creative work.</span>
              </h2>
            </div>

            <p className="text-lg text-text-secondary leading-relaxed">
              Where innovation meets passion in a journey that started with a simple idea and a shared dream. 
              Founded in recent year we embarked on a mission to bring the new innovation and introduce the technology. 
              From humble beginnings to our current aspirations, every step has been fueled by a relentless commitment
            </p>

            {/* Feature Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="group">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-light rounded-lg flex items-center justify-center">
                      <img
                        src={feature.icon}
                        alt={feature.title}
                        className="w-6 h-6"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-text-primary mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="space-y-8">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center space-x-4">
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
      </div>
    </section>
  );
};

export default ExpertiseSection;