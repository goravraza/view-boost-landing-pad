
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Star, Zap, ToggleLeft, ToggleRight } from "lucide-react";

export const Pricing = () => {
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');

  const handleOrderNow = (packageName: string) => {
    const message = `Hi! I'm interested in ordering the ${packageName} package. Please provide more details.`;
    const whatsappUrl = `https://wa.me/919878895926?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const convertPrice = (inrPrice: number) => {
    if (currency === 'USD') {
      return Math.round(inrPrice / 83); // Approximate conversion rate
    }
    return inrPrice;
  };

  const getCurrencySymbol = () => currency === 'INR' ? '₹' : '$';

  const skipAdsPlans = [
    {
      name: "100K YouTube Skip Ads Views",
      price: 4000,
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
      price: 16000,
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
      price: 30000,
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

  const displayAdsPlans = [
    {
      name: "100K YouTube Display Ads",
      price: 10000,
      views: "100K",
      popular: false,
      features: [
        "Real Views Through Ads",
        "Worldwide/Targeted View",
        "Upto 10% Organic Likes, Subscribers and watchtime",
        "Increase Watchtime",
        "Engaging audience for your channel"
      ],
      note: "Video Length Should be under 20 minutes"
    },
    {
      name: "500K YouTube Display Ads",
      price: 40000,
      views: "500K",
      popular: true,
      features: [
        "Real Views Through Ads",
        "Worldwide/Targeted View",
        "Upto 10% Organic Likes, Subscribers and watchtime",
        "Increase Watchtime",
        "Engaging audience for your channel"
      ],
      note: "Video Length Should be under 20 minutes"
    },
    {
      name: "1M YouTube Display Ads",
      price: 90000,
      views: "1M",
      popular: false,
      features: [
        "Real Views Through Ads",
        "Worldwide/Targeted View",
        "Upto 10% Organic Likes, Subscribers and watchtime",
        "Increase Watchtime",
        "Engaging audience for your channel"
      ],
      note: "Video Length Should be under 20 minutes"
    }
  ];

  const PackageCard = ({ plan, isDisplayAds = false }: { plan: any, isDisplayAds?: boolean }) => (
    <div
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

      {/* Currency Toggle */}
      <div className="flex justify-center mb-4">
        <div className="flex items-center space-x-2 bg-white/10 rounded-full p-1">
          <span className={`px-3 py-1 rounded-full text-sm transition-colors ${currency === 'INR' ? 'bg-red-500 text-white' : 'text-white/60'}`}>
            INR
          </span>
          <button
            onClick={() => setCurrency(currency === 'INR' ? 'USD' : 'INR')}
            className="text-white/80 hover:text-white"
          >
            {currency === 'INR' ? <ToggleLeft className="w-5 h-5" /> : <ToggleRight className="w-5 h-5" />}
          </button>
          <span className={`px-3 py-1 rounded-full text-sm transition-colors ${currency === 'USD' ? 'bg-red-500 text-white' : 'text-white/60'}`}>
            USD
          </span>
        </div>
      </div>

      <div className="text-center mb-8">
        <h3 className="text-xl font-bold text-white mb-4 leading-tight">{plan.name}</h3>
        <div className="mb-4">
          <span className="text-4xl md:text-5xl font-bold text-white">{getCurrencySymbol()}{convertPrice(plan.price).toLocaleString()}</span>
          <span className="text-white/60 ml-2">one-time</span>
        </div>
        <div className="text-red-400 font-semibold text-lg mb-6">
          {plan.views} Views
        </div>
      </div>

      <ul className="space-y-4 mb-8">
        {plan.features.map((feature: string, featureIndex: number) => (
          <li key={featureIndex} className="flex items-start">
            <Check className="w-5 h-5 text-green-400 mt-0.5 mr-3 flex-shrink-0" />
            <span className="text-white/80">{feature}</span>
          </li>
        ))}
      </ul>

      {plan.note && (
        <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-3 mb-6">
          <p className="text-yellow-300 text-sm">
            <strong>Note:</strong> {plan.note}
          </p>
        </div>
      )}

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
  );

  return (
    <section id="pricing" className="px-4 py-20 bg-black/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Choose Your YouTube Growth Package
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Get real YouTube views through our professional advertising campaigns. 
            All packages include detailed reports and guaranteed delivery.
          </p>
        </div>

        {/* YouTube Skip Ads Views Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              YouTube Skip Ads Views
            </h3>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Fast delivery views through YouTube's skip ads format. Perfect for quick growth and visibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {skipAdsPlans.map((plan, index) => (
              <PackageCard key={`skip-${index}`} plan={plan} />
            ))}
          </div>
        </div>

        {/* YouTube Display Ads Views Section */}
        <div className="mb-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              YouTube Display Ads Views
            </h3>
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-4">
              Premium engagement package that increases watchtime, likes, comments and subscribers
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-white/60">
              <div className="flex items-center">
                <Check className="w-4 h-4 text-green-400 mr-2" />
                Increase Watchtime
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 text-green-400 mr-2" />
                Boost Likes & Comments
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 text-green-400 mr-2" />
                Gain Subscribers
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {displayAdsPlans.map((plan, index) => (
              <PackageCard key={`display-${index}`} plan={plan} isDisplayAds={true} />
            ))}
          </div>
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
              Professional delivery
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
