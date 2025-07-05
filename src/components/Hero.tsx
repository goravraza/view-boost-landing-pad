
import { Button } from "@/components/ui/button";
import { Play, TrendingUp, Users, Zap, BarChart3 } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative px-4 py-20 md:py-32 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-red-500/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-blue-500/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-pink-500/20 rounded-full animate-ping"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-lg rounded-full border border-white/20 mb-8 animate-fade-in">
              <Zap className="w-4 h-4 text-yellow-400 mr-2" />
              <span className="text-white/90 text-sm font-medium">
                #1 YouTube Growth Service
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in">
              Skyrocket Your
              <br />
              <span className="bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-transparent">
                YouTube Views
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto lg:mx-0 leading-relaxed animate-fade-in">
              Get real, high-quality YouTube ad views that boost your video's reach, 
              increase engagement, and grow your channel organically.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 mb-12">
              <div className="text-center animate-scale-in">
                <div className="text-3xl md:text-4xl font-bold text-white">500K+</div>
                <div className="text-white/60">Views Delivered</div>
              </div>
              <div className="text-center animate-scale-in">
                <div className="text-3xl md:text-4xl font-bold text-white">10K+</div>
                <div className="text-white/60">Happy Creators</div>
              </div>
              <div className="text-center animate-scale-in">
                <div className="text-3xl md:text-4xl font-bold text-white">98%</div>
                <div className="text-white/60">Satisfaction Rate</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-16">
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold shadow-2xl hover:shadow-red-500/25 transition-all duration-300 hover:scale-105 animate-fade-in"
              >
                <Play className="w-5 h-5 mr-2" />
                Start Growing Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg backdrop-blur-sm animate-fade-in"
              >
                See How It Works
              </Button>
            </div>
          </div>

          {/* Right side - Analytics Images */}
          <div className="relative">
            {/* YouTube Analytics Dashboard */}
            <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 animate-fade-in hover:scale-105 transition-transform duration-300">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=entropy"
                alt="YouTube Analytics Dashboard"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <div className="flex items-center justify-between text-white">
                <div>
                  <div className="text-2xl font-bold">2.5M</div>
                  <div className="text-white/60 text-sm">Total Views</div>
                </div>
                <div className="text-green-400">
                  <TrendingUp className="w-6 h-6" />
                </div>
              </div>
            </div>

            {/* Floating metrics cards */}
            <div className="absolute -top-4 -right-4 bg-green-500/90 backdrop-blur-lg rounded-xl p-4 text-white animate-bounce">
              <div className="flex items-center">
                <BarChart3 className="w-5 h-5 mr-2" />
                <div>
                  <div className="font-bold">+547%</div>
                  <div className="text-xs opacity-80">Growth</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-blue-500/90 backdrop-blur-lg rounded-xl p-4 text-white animate-pulse">
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                <div>
                  <div className="font-bold">12.3K</div>
                  <div className="text-xs opacity-80">New Subs</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-20">
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:scale-105 transition-all duration-300 animate-fade-in">
            <TrendingUp className="w-8 h-8 text-green-400 mb-4 mx-auto" />
            <h3 className="text-white font-semibold mb-2">Real Growth</h3>
            <p className="text-white/70 text-sm">
              100% authentic views from real users, not bots
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:scale-105 transition-all duration-300 animate-fade-in">
            <Zap className="w-8 h-8 text-yellow-400 mb-4 mx-auto" />
            <h3 className="text-white font-semibold mb-2">Fast Delivery</h3>
            <p className="text-white/70 text-sm">
              See results within 24-48 hours of campaign start
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:scale-105 transition-all duration-300 animate-fade-in">
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
