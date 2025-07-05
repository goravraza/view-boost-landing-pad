
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Are the views real people or bots?",
      answer: "All our views come from real YouTube users, not bots or fake accounts. We use YouTube's advertising platform to promote your videos to genuine users who are interested in your content type."
    },
    {
      question: "Is this service safe for my YouTube channel?",
      answer: "Yes, absolutely! Our service is 100% compliant with YouTube's terms of service. We use legitimate advertising methods that YouTube officially supports, so there's no risk to your channel."
    },
    {
      question: "How long does it take to see results?",
      answer: "You'll start seeing views within 24-48 hours for most packages. Our fastest delivery option can begin showing results within 6-12 hours. The views are delivered gradually to look natural."
    },
    {
      question: "Can I target specific audiences?",
      answer: "Yes! We offer targeting options based on demographics, interests, geographic location, and viewing habits. This ensures your video reaches people who are most likely to engage with your content."
    },
    {
      question: "What if I'm not satisfied with the results?",
      answer: "We offer a 30-day money-back guarantee. If you're not completely satisfied with the quality of views or results, we'll provide a full refund, no questions asked."
    },
    {
      question: "Will this help my video rank better on YouTube?",
      answer: "Yes! Increased views can help improve your video's ranking in YouTube search results and suggested videos. More views signal to YouTube's algorithm that your content is engaging and worth promoting."
    },
    {
      question: "Do you provide views for any type of content?",
      answer: "We support most content types that comply with YouTube's community guidelines. However, we cannot promote content that violates YouTube's terms of service or contains inappropriate material."
    },
    {
      question: "Can I track the progress of my campaign?",
      answer: "Yes! All our packages include access to a real-time analytics dashboard where you can track your view count, audience demographics, and campaign performance."
    }
  ];

  return (
    <section id="faq" className="px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-white/80">
            Got questions? We've got answers. Here are the most common questions about our service.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 overflow-hidden"
            >
              <button
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="text-white font-semibold text-lg pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-white/60 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-white/60 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-white/80 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-white/70 mb-4">
            Still have questions?
          </p>
          <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">
            Contact Support
          </Button>
        </div>
      </div>
    </section>
  );
};
