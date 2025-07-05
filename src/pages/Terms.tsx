
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileText, Mail, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const Terms = () => {
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
              <FileText className="w-8 h-8 text-green-400 mr-3" />
              <h1 className="text-4xl font-bold text-white">Terms and Conditions</h1>
            </div>

            <div className="text-white/80 space-y-6 leading-relaxed">
              <div className="mb-6">
                <p className="text-white/60 mb-2"><strong>Effective Date:</strong> July 5, 2025</p>
                <p className="text-white/60"><strong>Website:</strong> https://peekq.com</p>
              </div>

              <p>
                Welcome to Peekq.com ("Peekq", "we", "us", or "our"). These Terms and Conditions ("Terms") govern your use of our website and services, including YouTube video promotion via YouTube (Google Ads) advertising.
              </p>

              <p>By using Peekq.com, you agree to be bound by these Terms. If you do not agree, please do not use our services.</p>

              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">1. Eligibility</h2>
                  <p className="mb-4">By using our services, you confirm that:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>You are at least 18 years old, or using the service with parental/legal guardian consent.</li>
                    <li>You are legally permitted to use our services in your country.</li>
                    <li>You own or have full rights to promote the content (videos) submitted to us.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">2. Services</h2>
                  <p className="mb-4">Peekq.com offers YouTube video promotion using legitimate YouTube advertising (Google Ads).</p>
                  <p className="mb-4">You understand and agree that:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>We run ad campaigns directly through YouTube/Google Ads.</li>
                    <li>We do not sell fake views, bots, or violate YouTube's terms of service.</li>
                    <li>We are not affiliated with Google or YouTube.</li>
                    <li>Promotion results (views, engagement, watch time, etc.) may vary depending on your content, targeting, audience, and budget.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">3. Refunds & Ad Policy</h2>
                  
                  <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 mb-6">
                    <h3 className="text-xl font-semibold text-green-400 mb-2">✅ Refund Eligibility</h3>
                    <p className="mb-4">You may be eligible for a full or partial refund if:</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Your video is disapproved by YouTube Ads before the campaign starts.</li>
                      <li>The disapproval is due to content violations as per Google/YouTube policies.</li>
                      <li>Technical issues on our side prevent your campaign from being delivered.</li>
                    </ul>
                    <p className="mt-4 font-semibold">We do not offer refunds for:</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Campaigns that have already started or been completed.</li>
                      <li>Poor audience retention or engagement (which is beyond our control once views are delivered).</li>
                    </ul>
                  </div>

                  <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 mb-6">
                    <h3 className="text-xl font-semibold text-red-400 mb-2 flex items-center">
                      <AlertTriangle className="w-5 h-5 mr-2" />
                      ❌ YouTube Ads Disapproval – Common Reasons
                    </h3>
                    <p className="mb-4">YouTube strictly reviews ad content. Below are types of content that may lead to disapproval:</p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-white mb-2">1. Inappropriate or Harmful Content</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Nudity or sexually suggestive material</li>
                          <li>Violence, gore, or shocking visuals</li>
                          <li>Hate speech or discriminatory content</li>
                          <li>Self-harm, dangerous challenges, pranks</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-white mb-2">2. Misleading or Clickbait Material</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Deceptive titles/thumbnails</li>
                          <li>Fake claims (e.g., "Get rich quick", fake giveaways)</li>
                          <li>False urgency or exaggerated benefits</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-white mb-2">3. Prohibited Products or Services</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Alcohol, tobacco, or recreational drugs</li>
                          <li>Weapons or explosives</li>
                          <li>Gambling or betting services</li>
                          <li>Adult content or escort services</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-white mb-2">4. Copyrighted Content</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Unlicensed music or visuals</li>
                          <li>Reused content without rights</li>
                          <li>TV shows, movie clips, game footage without permission</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-white mb-2">5. Technical Violations</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Poor video quality or unclear visuals</li>
                          <li>Broken links or misleading landing pages</li>
                          <li>Political ads without proper verification</li>
                        </ul>
                      </div>
                    </div>

                    <p className="mt-4 font-semibold text-yellow-300">
                      You are responsible for ensuring your video complies with YouTube and Google Ads policies before submitting.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">4. Payments</h2>
                  <ul className="list-disc list-inside space-y-1">
                    <li>All payments are to be made in advance.</li>
                    <li>We use third-party processors (e.g., Stripe, Razorpay) to securely handle transactions.</li>
                    <li>Currency conversion or transaction fees may be applied by your bank or card provider.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">5. User Responsibilities</h2>
                  <p className="mb-4">By using Peekq.com, you agree to:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Provide accurate and true information</li>
                    <li>Use the services legally and ethically</li>
                    <li>Submit only original or authorized content</li>
                    <li>Not misuse or attempt to hack/manipulate the platform</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">6. Prohibited Content</h2>
                  <p className="mb-4">You agree not to submit or promote content that:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Violates YouTube or Google Ads guidelines</li>
                    <li>Infringes on copyrights or trademarks</li>
                    <li>Promotes illegal or unethical activity</li>
                    <li>Contains malware, scams, or deceptive practices</li>
                  </ul>
                  <p className="mt-4">We reserve the right to reject or remove any campaign without notice if it violates our or YouTube's policies.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">7. Intellectual Property</h2>
                  <p>All website content, including logos, text, visuals, and code, belongs to Peekq.com unless otherwise stated. You may not copy, modify, or redistribute our content without permission.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">8. Limitation of Liability</h2>
                  <p className="mb-4">Peekq.com is not liable for:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Indirect, incidental, or consequential damages</li>
                    <li>Account actions by YouTube or Google (e.g., demonetization, strikes)</li>
                    <li>Engagement quality (watch time, likes, subs), which are user-driven</li>
                    <li>Delays or issues caused by YouTube Ads review system</li>
                  </ul>
                  <p className="mt-4">Our total liability shall not exceed the total amount paid by you for the affected service.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">9. Disclaimer of Warranties</h2>
                  <p>Our services are provided "as is" without any express or implied warranties. We do not guarantee specific results or engagement performance.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">10. Modifications to Terms</h2>
                  <p>We may update these Terms at any time. Updated Terms will be posted on this page with a new effective date. Continued use of the website constitutes acceptance of these changes.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">11. Governing Law</h2>
                  <p>These Terms shall be governed and interpreted according to the laws of India. Any disputes will be subject to the jurisdiction of the courts of India.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">12. Contact Information</h2>
                  <p className="mb-4">For any questions, concerns, or support requests, please contact:</p>
                  <div className="bg-white/10 rounded-lg p-4 flex items-center">
                    <Mail className="w-5 h-5 text-green-400 mr-3" />
                    <div>
                      <p className="font-semibold text-white">PEEKQ Support</p>
                      <p className="text-white/80">📧 Email: support@peekq.com</p>
                      <p className="text-white/80">🌐 Website: https://peekq.com</p>
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

export default Terms;
