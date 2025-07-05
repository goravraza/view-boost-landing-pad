
import { Button } from "@/components/ui/button";
import { Play, TrendingUp, Users, Zap } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative px-4 py-20 md:py-32">
      <div className="max-w-7xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-lg rounded-full border border-white/20 mb-8">
          <Zap className="w-4 h-4 text-yellow-400 mr-2" />
          <span className="text-white/90 text-sm font-medium">
            #1 YouTube Growth Service
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Skyrocket Your
          <br />
          <span className="bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-transparent">
            YouTube Views
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
          Get real, high-quality YouTube ad views that boost your video's reach, 
          increase engagement, and grow your channel organically.
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white">500K+</div>
            <div className="text-white/60">Views Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white">10K+</div>
            <div className="text-white/60">Happy Creators</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white">98%</div>
            <div className="text-white/60">Satisfaction Rate</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold shadow-2xl hover:shadow-red-500/25 transition-all duration-300 hover:scale-105"
          >
            <Play className="w-5 h-5 mr-2" />
            Start Growing Now
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg backdrop-blur-sm"
          >
            See How It Works
          </Button>
        </div>

        {/* Feature highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
            <TrendingUp className="w-8 h-8 text-green-400 mb-4 mx-auto" />
            <h3 className="text-white font-semibold mb-2">Real Growth</h3>
            <p className="text-white/70 text-sm">
              100% authentic views from real users, not bots
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
            <Zap className="w-8 h-8 text-yellow-400 mb-4 mx-auto" />
            <h3 className="text-white font-semibold mb-2">Fast Delivery</h3>
            <p className="text-white/70 text-sm">
              See results within 24-48 hours of campaign start
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
            <Users className="w-8 h-8 text-blue-400 mb-4 mx-auto" />
            <h3 className="text-white font-semibold mb-2">Safe & Secure</h3>
            <p className="text-white/70 text-sm">
              YouTube compliant methods that protect your channel
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
