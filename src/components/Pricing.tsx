
import { Button } from "@/components/ui/button";
import { Check, Star, Zap } from "lucide-react";

export const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: 29,
      views: "5,000",
      popular: false,
      features: [
        "5,000 real YouTube views",
        "24-48 hour delivery",
        "Basic targeting",
        "Email support",
        "Money back guarantee"
      ]
    },
    {
      name: "Growth",
      price: 79,
      views: "15,000",
      popular: true,
      features: [
        "15,000 real YouTube views",
        "12-24 hour delivery",
        "Advanced targeting",
        "Priority support",
        "Analytics dashboard",
        "Money back guarantee"
      ]
    },
    {
      name: "Pro",
      price: 199,
      views: "50,000",
      popular: false,
      features: [
        "50,000 real YouTube views",
        "6-12 hour delivery",
        "Premium targeting",
        "24/7 priority support",
        "Advanced analytics",
        "Campaign optimization",
        "Money back guarantee"
      ]
    },
    {
      name: "Enterprise",
      price: 499,
      views: "150,000",
      popular: false,
      features: [
        "150,000 real YouTube views",
        "Instant delivery start",
        "Custom targeting",
        "Dedicated account manager",
        "White-label reporting",
        "A/B testing included",
        "Money back guarantee"
      ]
    }
  ];

  return (
    <section id="pricing" className="px-4 py-20 bg-black/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Choose Your Growth Plan
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Flexible pricing options to fit every creator's needs and budget. 
            All plans include real views from genuine YouTube users.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl md:text-5xl font-bold text-white">${plan.price}</span>
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
                className={`w-full py-3 text-lg font-semibold ${
                  plan.popular
                    ? "bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white shadow-2xl hover:shadow-red-500/25"
                    : "bg-white/10 hover:bg-white/20 text-white border border-white/20"
                } transition-all duration-300`}
              >
                {plan.popular && <Zap className="w-5 h-5 mr-2" />}
                Get Started
              </Button>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="text-center mt-12">
          <p className="text-white/70 mb-4">
            Need more than 150,000 views? Contact us for custom enterprise solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/60">
            <div className="flex items-center">
              <Check className="w-4 h-4 text-green-400 mr-2" />
              30-day money back guarantee
            </div>
            <div className="flex items-center">
              <Check className="w-4 h-4 text-green-400 mr-2" />
              No monthly contracts
            </div>
            <div className="flex items-center">
              <Check className="w-4 h-4 text-green-400 mr-2" />
              SSL secured checkout
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
