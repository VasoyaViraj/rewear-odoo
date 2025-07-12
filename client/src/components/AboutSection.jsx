import { Upload, RefreshCw, Gift } from "lucide-react";

const AboutSection = () => {
  const steps = [
    {
      icon: Upload,
      title: "Upload",
      description: "Share photos and details of clothes you no longer wear"
    },
    {
      icon: RefreshCw,
      title: "Swap or Earn Points",
      description: "Exchange directly with others or earn points for your items"
    },
    {
      icon: Gift,
      title: "Redeem",
      description: "Use your points to get new-to-you pieces from the community"
    }
  ];

  return (
    <section className="py-16 px-6 bg-background eco-texture">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold text-charcoal mb-4">
          How ReWear Works
        </h2>
        <p className="text-ash-gray mb-12 text-lg max-w-2xl mx-auto">
          Join thousands of fashion-conscious individuals making sustainable choices through our simple three-step process.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center group">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-4 group-hover:bg-moss-green transition-colors duration-300">
                <step.icon className="h-8 w-8 text-charcoal group-hover:text-white transition-colors duration-300" />
              </div>
              
              <h3 className="text-xl font-semibold text-charcoal mb-2">
                {step.title}
              </h3>
              
              <p className="text-ash-gray leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;