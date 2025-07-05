
import { Shield, Target, BarChart3, Clock, Users, Zap, CheckCircle, TrendingUp } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: Target,
      title: "Targeted Campaigns",
      description: "Reach your ideal audience with precision targeting based on demographics, interests, and viewing habits."
    },
    {
      icon: Shield,
      title: "100% Safe & Compliant",
      description: "All our methods comply with YouTube's terms of service. Your channel stays safe and secure."
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description: "Track your campaign performance with detailed analytics and insights dashboard."
    },
    {
      icon: Clock,
      title: "Fast Delivery",
      description: "See results within 24-48 hours. Our campaigns start working immediately after setup."
    },
    {
      icon: Users,
      title: "Genuine Viewers",
      description: "Real people, real engagement. No bots or fake accounts - just authentic YouTube users."
    },
    {
      icon: Zap,
      title: "Instant Setup",
      description: "Get started in minutes. Simply provide your video URL and watch your views grow."
    },
    {
      icon: CheckCircle,
      title: "Quality Guarantee",
      description: "We guarantee high-quality views that contribute to your channel's long-term growth."
    },
    {
      icon: TrendingUp,
      title: "Organic Growth",
      description: "Our views help trigger YouTube's algorithm, leading to more organic reach and discovery."
    }
  ];

  return (
    <section id="features" className="px-4 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose ViewBoostPro?
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            We provide the most effective and safe YouTube ad view services 
            to help creators and businesses grow their presence on the platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-3">
                  {feature.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* How it works */}
        <div className="mt-20">
          <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            How It Works
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h4 className="text-white font-semibold text-xl mb-4">Choose Your Package</h4>
              <p className="text-white/70">
                Select the view package that fits your needs and budget from our pricing options.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h4 className="text-white font-semibold text-xl mb-4">Provide Video URL</h4>
              <p className="text-white/70">
                Share your YouTube video link and let us know your target audience preferences.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h4 className="text-white font-semibold text-xl mb-4">Watch Views Grow</h4>
              <p className="text-white/70">
                Sit back and watch as your video gains real views from genuine YouTube users.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
