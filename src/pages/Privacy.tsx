
import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Navigation */}
      <nav className="px-4 py-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-white">
            <span className="text-red-500">PEEK</span>Q
          </Link>
          <Link to="/">
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </nav>

      {/* Content */}
      <div className="px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <div className="flex items-center mb-8">
              <Shield className="w-8 h-8 text-blue-400 mr-3" />
              <h1 className="text-4xl font-bold text-white">Privacy Policy</h1>
            </div>

            <div className="text-white/80 space-y-6 leading-relaxed">
              <div className="mb-6">
                <p className="text-white/60 mb-2"><strong>Effective Date:</strong> May 5, 2021</p>
                <p className="text-white/60"><strong>Website:</strong> https://peekq.com</p>
              </div>

              <p>
                Peekq.com ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, store, and share your information when you use our website and services, including YouTube video promotion through YouTube advertising.
              </p>

              <p>By accessing Peekq.com, you agree to the terms of this Privacy Policy.</p>

              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
                  
                  <h3 className="text-xl font-semibold text-white mb-2">a. Personal Information</h3>
                  <p className="mb-4">When you use our services, we may collect:</p>
                  <ul className="list-disc list-inside space-y-1 mb-4">
                    <li>Name</li>
                    <li>Email address</li>
                    <li>Payment details (processed securely via third-party payment processors)</li>
                    <li>YouTube channel or video links</li>
                    <li>Contact or support messages</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-white mb-2">b. Non-Personal Information</h3>
                  <p className="mb-4">We may collect non-identifiable data such as:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>IP address</li>
                    <li>Browser type and device</li>
                    <li>Referral URL</li>
                    <li>Usage behavior on our site (via cookies and analytics)</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
                  <p className="mb-4">We use the collected information to:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Deliver YouTube promotion services</li>
                    <li>Process payments and send invoices</li>
                    <li>Communicate with you regarding your campaigns</li>
                    <li>Improve our website and user experience</li>
                    <li>Prevent fraud or abuse of our services</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">3. Cookies and Tracking Technologies</h2>
                  <p className="mb-4">We use cookies and similar technologies for:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Analytics (e.g., Google Analytics)</li>
                    <li>Remembering your preferences</li>
                    <li>Improving website performance</li>
                  </ul>
                  <p className="mt-4">You can manage or disable cookies through your browser settings.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">4. Data Sharing and Disclosure</h2>
                  <p className="mb-4">We do not sell your personal information. We may share your data with:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Advertising partners (to run campaigns on YouTube)</li>
                    <li>Payment processors (e.g., Stripe, Razorpay)</li>
                    <li>Third-party tools (for analytics, automation, or CRM)</li>
                    <li>Authorities or legal bodies, if required by law</li>
                  </ul>
                  <p className="mt-4">All shared parties are bound by confidentiality and data protection agreements.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">5. Data Retention</h2>
                  <p className="mb-4">We retain your personal data only as long as necessary:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>To fulfill our services</li>
                    <li>To meet legal and tax obligations</li>
                    <li>Or until you request deletion</li>
                  </ul>
                  <p className="mt-4">You can request data deletion anytime by contacting us.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">6. Your Rights</h2>
                  <p className="mb-4">You have the right to:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Access your personal data</li>
                    <li>Correct inaccurate data</li>
                    <li>Request data deletion</li>
                    <li>Withdraw consent</li>
                    <li>File a complaint with a data protection authority (if applicable)</li>
                  </ul>
                  <p className="mt-4">Please email us at support@peekq.com for any privacy-related requests.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">7. Security</h2>
                  <p>We implement industry-standard security practices to protect your data from unauthorized access, alteration, or disclosure. However, no online platform can be 100% secure.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">8. Children's Privacy</h2>
                  <p>Peekq.com is not intended for use by children under the age of 13. We do not knowingly collect personal information from children.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">9. Changes to This Privacy Policy</h2>
                  <p>We may update this Privacy Policy from time to time. All changes will be posted on this page with a revised effective date. Continued use of our site after any changes means you accept the new terms.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">10. Contact Us</h2>
                  <p className="mb-4">If you have questions about this Privacy Policy, please contact:</p>
                  <div className="bg-white/10 rounded-lg p-4 flex items-center">
                    <Mail className="w-5 h-5 text-blue-400 mr-3" />
                    <div>
                      <p className="font-semibold text-white">PEEKQ Support</p>
                      <p className="text-white/80">Email: support@peekq.com</p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
