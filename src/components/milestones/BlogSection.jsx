import { useState, useRef } from 'react';
import { Calendar, Clock, ExternalLink, ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from 'lucide-react';

const BlogSection = ({ milestone, theme }) => {
  const isDark = theme === 'dark';
  const [expandedPost, setExpandedPost] = useState(null);
  const scrollContainerRef = useRef(null);
  const brandGradient = "bg-gradient-to-br from-[#0eaac8] via-[#27bce2] to-[#1dc393]";
  const textGradient = "text-transparent bg-clip-text bg-gradient-to-r from-[#0eaac8] to-[#1dc393]";

  const slideLeft = () => {
    if (scrollContainerRef.current) {
      const cardWidth = 480; // Match the md:w-[480px] width
      const gap = 40; // Match gap-10 (2.5rem = 40px)
      const scrollAmount = cardWidth + gap;
      scrollContainerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const slideRight = () => {
    if (scrollContainerRef.current) {
      const cardWidth = 480; // Match the md:w-[480px] width
      const gap = 40; // Match gap-10 (2.5rem = 40px)
      const scrollAmount = cardWidth + gap;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Blog posts data with full content
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Enterprise AI: Trends and Predictions",
      category: "AI Insights",
      date: "January 1, 2026",
      readTime: "5 min read",
      color: "#0eaac8",
      content: [
        "Enterprise AI is rapidly evolving, transforming how businesses operate and compete. As we look ahead, several key trends are shaping the future of AI in enterprise environments.",
        "First, we're seeing a shift toward no-code and low-code AI platforms that democratize access to intelligent automation. Tools like EVOKE AI enable teams to build sophisticated AI workflows without deep technical expertise.",
        "Second, the integration of AI agents across business functions—from customer support to internal training—is becoming standard practice. These agents handle repetitive tasks, allowing human teams to focus on strategic initiatives.",
        "Third, we're witnessing increased emphasis on explainable AI and ethical considerations. Enterprises need AI systems that are transparent, compliant, and aligned with business values.",
        "Looking forward, we predict that by 2025, over 80% of enterprises will have deployed at least one AI agent in production. The key to success lies in choosing platforms that offer flexibility, scalability, and ease of integration."
      ]
    },
    {
      id: 2,
      title: "Building No-Code Chatbots: A Complete Guide",
      category: "Tutorial",
      date: "January 10, 2026",
      readTime: "8 min read",
      color: "#1dc393",
      content: [
        "Creating powerful chatbots doesn't require extensive programming knowledge anymore. Modern no-code platforms like AEON make it possible to build sophisticated conversational interfaces in hours, not weeks.",
        "The first step is defining your chatbot's purpose. Are you automating customer support, qualifying leads, or providing information? Clear objectives guide your design decisions.",
        "Next, map out conversation flows. Start with common user intents and create logical paths that guide users to their goals. Remember to include fallback responses for unexpected queries.",
        "Training your chatbot is crucial. Provide it with relevant knowledge bases, FAQs, and examples of typical interactions. The more context you give, the better it performs.",
        "Integration is key. Connect your chatbot to existing systems like CRMs, ticketing platforms, or databases to enable seamless data flow and personalized responses.",
        "Finally, test thoroughly and iterate based on real user interactions. Monitor performance metrics and continuously improve your chatbot's responses and capabilities."
      ]
    },
    {
      id: 3,
      title: "Automating Customer Support with AI Agents",
      category: "Case Study",
      date: "December 25, 2025",
      readTime: "6 min read",
      color: "#27bce2",
      content: [
        "Customer support automation is revolutionizing how businesses handle inquiries and resolve issues. AI agents can handle a significant portion of support tickets, reducing response times and operational costs.",
        "One of our clients, a leading healthcare device manufacturer, implemented AEON to handle medical equipment inquiries. The chatbot now resolves 70% of common questions instantly, freeing support staff to focus on complex technical issues.",
        "The key to successful automation is understanding your support patterns. Analyze your ticket data to identify frequently asked questions, common issues, and typical resolution paths.",
        "AI agents excel at providing instant responses 24/7, maintaining consistency, and handling multiple conversations simultaneously. They can also escalate complex issues to human agents when needed.",
        "Best practices include maintaining a human-like conversational tone, providing clear escalation paths, and continuously training the agent based on real interactions. Regular updates ensure accuracy and relevance.",
        "The result? Faster response times, improved customer satisfaction, and significant cost savings—all while maintaining the quality of support your customers expect."
      ]
    },
    {
      id: 4,
      title: "Scaling Your Business with Intelligent Automation",
      category: "Business",
      date: "December 30, 2025",
      readTime: "7 min read",
      color: "#7fe7ce",
      content: [
        "Intelligent automation is no longer a luxury—it's a necessity for businesses looking to scale efficiently. The right automation strategy can help you grow without proportionally increasing your team size.",
        "Start by identifying repetitive, rule-based tasks that consume significant time. These are prime candidates for automation. Common areas include data entry, email responses, report generation, and routine customer interactions.",
        "Choose automation tools that scale with your business. Platforms like EVOKE AI offer modular solutions that grow with your needs—from simple chatbots to complex multi-agent workflows.",
        "Implement automation incrementally. Begin with high-impact, low-risk processes. As you gain confidence and see results, expand to more complex workflows. This approach minimizes disruption while maximizing value.",
        "Measure and optimize. Track metrics like time saved, error reduction, and customer satisfaction. Use these insights to refine your automation strategy and identify new opportunities.",
        "Remember, automation isn't about replacing your team—it's about empowering them. By handling routine tasks, automation frees your team to focus on strategic work that drives growth and innovation."
      ]
    },
    {
      id: 5,
      title: "Security Best Practices for AI-Powered Applications",
      category: "Security",
      date: "January 20, 2026",
      readTime: "9 min read",
      color: "#dc2626",
      content: [
        "As AI becomes integral to business operations, security must be a foundational consideration, not an afterthought. AI-powered applications handle sensitive data and make critical decisions, making security paramount.",
        "Data protection is the first priority. Ensure all data—both in transit and at rest—is encrypted. Implement access controls and role-based permissions to limit who can view or modify sensitive information.",
        "Regular security audits are essential. Tools like CIPHER can help identify vulnerabilities in your applications before they become threats. Schedule regular scans and address issues promptly.",
        "Be mindful of AI model security. Protect your training data, model files, and API endpoints. Implement rate limiting and monitoring to detect unusual patterns that might indicate attacks.",
        "Compliance matters. Depending on your industry, you may need to meet GDPR, HIPAA, or other regulatory requirements. Choose AI platforms that are designed with compliance in mind.",
        "Finally, maintain transparency. Document your AI systems, their data sources, and decision-making processes. This not only helps with compliance but also builds trust with stakeholders and customers."
      ]
    },
    {
      id: 6,
      title: "The Rise of Conversational AI in Modern Business",
      category: "AI Insights",
      date: "January 5, 2026",
      readTime: "5 min read",
      color: "#0eaac8",
      content: [
        "Conversational AI is fundamentally changing how businesses interact with customers, employees, and partners. From chatbots to voice assistants, these technologies are becoming ubiquitous in modern business operations.",
        "The appeal is clear: conversational AI provides instant, personalized interactions at scale. Customers get immediate answers, employees receive quick assistance, and businesses reduce operational overhead.",
        "We're seeing adoption across industries. Healthcare organizations use conversational AI for appointment scheduling and patient inquiries. E-commerce platforms deploy chatbots for product recommendations and order tracking.",
        "The technology has matured significantly. Modern conversational AI understands context, maintains conversation history, and can handle complex multi-turn dialogues. Natural language processing has improved to the point where interactions feel genuinely human-like.",
        "Integration is key to success. The most effective implementations connect conversational AI to existing business systems—CRMs, databases, payment processors—enabling seamless end-to-end experiences.",
        "Looking ahead, we expect conversational AI to become even more sophisticated, with better understanding of intent, emotion, and context. Businesses that adopt these technologies early will have a significant competitive advantage."
      ]
    }
  ];

  return (
    <div className="relative w-full py-10 sm:py-16 lg:py-20 px-3 sm:px-6">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 sm:mb-6 lg:mb-8 relative overflow-hidden group shiny-badge">
            {/* Gradient background */}
            <div className={`absolute inset-0 ${brandGradient} opacity-30 rounded-full`}></div>
            
            {/* Shiny overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out rounded-full"></div>
            
            {/* Pulsing dot */}
            <span className="relative z-10 w-2 h-2 rounded-full bg-[#00d2ff] animate-pulse shadow-lg shadow-[#00d2ff]/60"></span>
            
            {/* Category text with gradient */}
            <span 
              className={`relative z-10 ${textGradient} text-xs sm:text-sm font-bold tracking-[0.15em] uppercase`}
              style={{ fontFamily: '"Poppins", "Montserrat", "Inter", sans-serif' }}
            >
              {milestone.category}
            </span>
            
            {/* Glowing border */}
            <div className="absolute inset-0 rounded-full border-2 border-[#00d2ff]/40 group-hover:border-[#27bce2]/60 transition-all duration-300 shadow-lg shadow-[#00d2ff]/20"></div>
          </div>
          
          <h2 className={`text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-black mb-4 sm:mb-6 lg:mb-8 uppercase tracking-tighter italic ${isDark ? 'text-white' : 'text-black'}`}>
            {milestone.title.split(' ').map((word, index) => {
              if (index === 0) {
                return (
                  <span 
                    key={index}
                    className="text-transparent bg-clip-text bg-gradient-to-r from-[#0eaac8] to-[#1dc393]"
                  >
                    {word}
                  </span>
                );
              }
              return <span key={index}> {word}</span>;
            })}
          </h2>
          
          <p className={`text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed ${isDark ? 'text-white/80' : 'text-black/70'}`}>
            Stay updated with the latest insights, tutorials, and stories about AI, automation, and enterprise technology.
          </p>
        </div>

        {/* Blog Posts Row with Navigation */}
        <div className="relative">
          {/* Left Navigation Button */}
          <button
            onClick={slideLeft}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg ${
              isDark
                ? 'bg-black/80 border border-white/20 hover:bg-black/90 text-white'
                : 'bg-white/90 border border-black/10 hover:bg-white text-black'
            } backdrop-blur-sm`}
            aria-label="Slide left"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Right Navigation Button */}
          <button
            onClick={slideRight}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg ${
              isDark
                ? 'bg-black/80 border border-white/20 hover:bg-black/90 text-white'
                : 'bg-white/90 border border-black/10 hover:bg-white text-black'
            } backdrop-blur-sm`}
            aria-label="Slide right"
          >
            <ChevronRight size={24} />
          </button>

          {/* Blog Posts Row */}
          <div 
            ref={scrollContainerRef}
            className="flex flex-row gap-6 sm:gap-8 lg:gap-10 overflow-x-auto pb-4 scrollbar-hide scroll-smooth px-12"
          >
            {blogPosts.map((post) => (
            <article
              key={post.id}
              className={`group relative flex-shrink-0 w-[350px] sm:w-[420px] md:w-[480px] rounded-2xl sm:rounded-3xl border transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 overflow-hidden ${
                isDark 
                  ? 'bg-black/50 border-white/10 hover:border-emerald-500/50' 
                  : 'bg-white/80 border-black/5 shadow-2xl shadow-black/5'
              }`}
            >
            {/* Gradient Border Effect on Hover */}
            <div
              className="absolute -inset-[1px] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden"
              style={{
                background: `linear-gradient(90deg, ${post.color}, ${post.color}80, ${post.color})`,
                backgroundSize: '200% 100%',
                animation: 'shimmer 2.5s ease-in-out infinite'
              }}
            >
              <div className={`absolute inset-[1px] rounded-3xl ${
                isDark ? 'bg-black/50' : 'bg-white/80'
              }`}></div>
            </div>

            <div className="relative z-10 p-6 sm:p-8 flex flex-col h-full">
              {/* Category Badge */}
              <div className="mb-4">
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
                  style={{
                    backgroundColor: `${post.color}20`,
                    color: post.color,
                    borderColor: `${post.color}40`,
                    borderWidth: '1px'
                  }}
                >
                  {post.category}
                </span>
              </div>

              {/* Title */}
              <h3 className={`text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 leading-tight ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                {post.title}
              </h3>

              {/* Content Preview */}
              <div className={`text-sm sm:text-base leading-relaxed mb-4 ${
                isDark ? 'text-white/70' : 'text-gray-600'
              }`}>
                {post.content && post.content.length > 0 && (
                  <p className="mb-3">
                    {post.content[0]}
                  </p>
                )}
              </div>

              {/* Expandable Full Content */}
              {expandedPost === post.id && post.content && (
                <div className={`mt-4 space-y-3 text-sm sm:text-base leading-relaxed transition-all duration-300 ${
                  isDark ? 'text-white/80' : 'text-gray-700'
                }`}>
                  {post.content.slice(1).map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              )}

              {/* Expand/Collapse Button */}
              {/* {post.content && post.content.length > 1 && (
                <button
                  onClick={() => setExpandedPost(expandedPost === post.id ? null : post.id)}
                  className={`mt-4 flex items-center gap-2 text-sm font-semibold transition-all duration-300 ${
                    isDark 
                      ? 'text-emerald-400 hover:text-emerald-300' 
                      : 'text-emerald-600 hover:text-emerald-700'
                  }`}
                >
                  {expandedPost === post.id ? (
                    <>
                      Show Less
                      <ChevronUp size={16} />
                    </>
                  ) : (
                    <>
                      Read More
                      <ChevronDown size={16} />
                    </>
                  )}
                </button>
              )} */}

              {/* Meta Information */}
              <div className={`flex items-center gap-4 text-xs sm:text-sm mt-auto pt-4 ${
                isDark ? 'text-white/60' : 'text-gray-500'
              }`}>
                <div className="flex items-center gap-1.5">
                  <Calendar size={14} />
                  <span>{post.date}</span>
                </div>
                {/* <div className="flex items-center gap-1.5">
                  <Clock size={14} />
                  <span>{post.readTime}</span>
                </div> */}
              </div>
            </div>
          </article>
          ))}
          </div>
        </div>

        {/* View All Button */}
        {/* <div className="text-center mt-12 sm:mt-16">
          <a
            href="#"
            className={`inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 ${
              isDark
                ? 'bg-gradient-to-r from-[#0eaac8] to-[#1dc393] text-white shadow-lg shadow-cyan-500/30'
                : 'bg-gradient-to-r from-[#0eaac8] to-[#1dc393] text-white shadow-lg shadow-cyan-500/20'
            }`}
          >
            View All Posts
            <ExternalLink size={18} />
          </a>
        </div> */}

        <style>{`
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>
    </div>
  );
};

export default BlogSection;
