
import { Youtube, Mail, MessageCircle, Shield } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="px-4 py-16 bg-black/40 backdrop-blur-sm border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold text-white mb-4">
              ViewBoost<span className="text-red-500">Pro</span>
            </div>
            <p className="text-white/70 mb-6">
              The most trusted YouTube growth service for creators and businesses worldwide.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                <Youtube className="w-5 h-5 text-red-500" />
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">YouTube Views</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Targeted Campaigns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Analytics Dashboard</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Custom Solutions</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Live Chat</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Status Page</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Refund Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center items-center gap-8 py-8 border-t border-white/10 mb-8">
          <div className="flex items-center text-white/60">
            <Shield className="w-4 h-4 mr-2" />
            <span className="text-sm">SSL Secured</span>
          </div>
          <div className="text-white/60 text-sm">YouTube Compliant</div>
          <div className="text-white/60 text-sm">30-Day Guarantee</div>
          <div className="text-white/60 text-sm">24/7 Support</div>
        </div>

        {/* Copyright */}
        <div className="text-center text-white/50 text-sm">
          <p>&copy; 2024 ViewBoostPro. All rights reserved.</p>
          <p className="mt-2">
            Disclaimer: This service uses YouTube's advertising platform to promote videos. 
            Results may vary based on content quality and targeting.
          </p>
        </div>
      </div>
    </footer>
  );
};
