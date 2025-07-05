
import { Button } from "@/components/ui/button";
import { Check, Star, Zap } from "lucide-react";

export const Pricing = () => {
  const handleOrderNow = (packageName: string) => {
    const message = `Hi! I'm interested in ordering the ${packageName} package. Please provide more details.`;
    const whatsappUrl = `https://wa.me/919878895926?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const plans = [
    {
      name: "100K YouTube Skip Ads Views",
      price: "4,000",
      currency: "₹",
      views: "100K",
      popular: false,
      features: [
        "Worldwide/Targeted Views",
        "Real Views Through Ads",
        "Complete under 72 Hours",
        "Ads Reports Available"
      ]
    },
    {
      name: "500K YouTube Skip Ads Views",
      price: "16,000",
      currency: "₹",
      views: "500K",
      popular: true,
      features: [
        "Worldwide/Targeted Views",
        "Real Views Through Ads",
        "Complete under 72 Hours",
        "Ads Reports Available"
      ]
    },
    {
      name: "1M YouTube Skip Ads Views",
      price: "30,000",
      currency: "₹",
      views: "1M",
      popular: false,
      features: [
        "Worldwide/Targeted Views",
        "Real Views Through Ads",
        "Complete under 72 Hours",
        "Ads Reports Available"
      ]
    }
  ];

  return (
    <section id="pricing" className="px-4 py-20 bg-black/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            YouTube Skip Ads Views Packages
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Get real YouTube views through skip ads campaigns. 
            All packages include worldwide/targeted options and detailed reports.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                plan.popular
                  ? "border-red-500 bg-gradient-to-b from-red-500/10 to-transparent"
                  : "border-white/10 hover:border-white/20"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-white mb-4 leading-tight">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl md:text-5xl font-bold text-white">{plan.currency}{plan.price}</span>
                  <span className="text-white/60 ml-2">one-time</span>
                </div>
                <div className="text-red-400 font-semibold text-lg mb-6">
                  {plan.views} Views
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="w-5 h-5 text-green-400 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-white/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => handleOrderNow(plan.name)}
                className={`w-full py-3 text-lg font-semibold ${
                  plan.popular
                    ? "bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white shadow-2xl hover:shadow-red-500/25"
                    : "bg-white/10 hover:bg-white/20 text-white border border-white/20"
                } transition-all duration-300`}
              >
                {plan.popular && <Zap className="w-5 h-5 mr-2" />}
                Order Now
              </Button>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="text-center mt-12">
          <p className="text-white/70 mb-4">
            Need custom packages or bulk orders? Contact us directly on WhatsApp.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/60">
            <div className="flex items-center">
              <Check className="w-4 h-4 text-green-400 mr-2" />
              Real YouTube ad views
            </div>
            <div className="flex items-center">
              <Check className="w-4 h-4 text-green-400 mr-2" />
              72-hour delivery
            </div>
            <div className="flex items-center">
              <Check className="w-4 h-4 text-green-400 mr-2" />
              Detailed reports included
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
