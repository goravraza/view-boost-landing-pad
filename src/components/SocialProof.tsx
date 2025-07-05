
import { Star } from "lucide-react";

export const SocialProof = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      channel: "@SarahCooks",
      text: "My cooking videos went from 200 views to 50K+ views! ViewBoostPro changed everything for my channel.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=64&h=64&fit=crop&crop=face"
    },
    {
      name: "Mike Chen",
      channel: "@TechReviewsMike",
      text: "Finally found a service that delivers real views. My subscriber count tripled in just 2 months!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face"
    },
    {
      name: "Lisa Rodriguez",
      channel: "@FitnessWithLisa",
      text: "The quality of views is amazing. Real engagement, real comments, real growth. Highly recommend!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face"
    }
  ];

  return (
    <section className="px-4 py-16 bg-black/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted by 10,000+ Creators
          </h2>
          <p className="text-white/70 text-lg">
            See what our satisfied customers have to say
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-white/90 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="text-white font-semibold">{testimonial.name}</div>
                  <div className="text-white/60 text-sm">{testimonial.channel}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center items-center gap-8 mt-16 pt-8 border-t border-white/10">
          <div className="text-white/60 text-sm font-semibold">TRUSTED BY</div>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">YT</span>
            </div>
            <span className="text-white/80">YouTube Certified</span>
          </div>
          <div className="text-white/80">SSL Secured</div>
          <div className="text-white/80">24/7 Support</div>
          <div className="text-white/80">Money Back Guarantee</div>
        </div>
      </div>
    </section>
  );
};
