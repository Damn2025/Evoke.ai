import { Mail, MessageSquare, BookOpen, ShieldCheck } from 'lucide-react';

export const MILESTONES = [
  { t: 0.15, id: "about", label: "About", title: "About Us", category: "Evolution" },
  { t: 0.35, id: "features", label: "Features", title: "Unrivaled Power", category: "Smarter tools. Better results." },
  { t: 0.55, id: "agents", label: "Agents", title: "AI Agents", category: "Autonomous Units" },
  { t: 0.75, id: "social", label: "Social", title: "Partner Echoes", category: "Social Proof" },
  { t: 0.85, id: "contact", label: "Contact", title: "Get In Touch", category: "AI Driven Future" },
  { t: 0.95, id: "faq", label: "FAQ", title: "All You Need to Know", category: "Knowledge Base" }
];

export const TESTIMONIALS = [
  { quote: "AEON’s chatbot builder helped us deploy a multilingual AI assistant in days. Smooth UX and excellent customization.", username: "@rahuldev_ai", name: "Rahul Verma" },
{ quote: "AEON delivers the perfect balance between design and intelligence. Our customer support automation feels premium.", username: "@supportlabs_in", name: "Ananya Sharma" },

{ quote: "ORION transformed how we build and manage courses. Structuring, publishing, and scaling content is now effortless.", username: "@edtech_ops", name: "Rohit Mehta" },
{ quote: "With ORION, our internal training went fully automated. It’s ideal for fast-growing teams.", username: "@learninghub_in", name: "Pooja Nair" },

{ quote: "NOVA’s email marketing workflows are incredibly smart. We saw higher open rates within the first week.", username: "@marketingstack_in", name: "Kunal Agarwal" },
{ quote: "NOVA makes personalization simple and scalable. A powerful tool for modern growth teams.", username: "@brandpulse_ai", name: "Sneha Iyer" },

{ quote: "CIPHER gave us clear, actionable insights into application vulnerabilities. The extraction accuracy is impressive.", username: "@secops_lead", name: "Arjun Reddy" },
{ quote: "CIPHER simplifies cybersecurity analysis for both developers and security teams. Highly reliable.", username: "@cyberguard_in", name: "Neha Kulkarni" },

{ quote: "AEON made our chatbot deployment seamless. The flow builder and UI polish really stand out.", username: "@vikas_ai", name: "Vikas Malhotra" },
{ quote: "Building intelligent chat experiences with AEON feels intuitive and fast. Great for product teams.", username: "@uxlabs_in", name: "Ritika Kapoor" },

{ quote: "ORION helped us convert complex training material into structured courses effortlessly.", username: "@corporate_lnd", name: "Sandeep Joshi" },
{ quote: "CIPHER delivers actionable cybersecurity insights without unnecessary noise.", username: "@securestack_in", name: "Kavya Rao" },

{ quote: "NOVA’s automation workflows saved us countless hours. Campaign management is now frictionless.", username: "@growthops_india", name: "Amit Singhal" },
{ quote: "NOVA brings clarity to email marketing with smart targeting and analytics.", username: "@crmstack", name: "Nidhi Bansal" },

{ quote: "CIPHER’s vulnerability extraction helped our security team prioritize real threats quickly.", username: "@infosec_lead", name: "Pranav Kulkarni" },

{ quote: "ORION is perfect for scaling internal and external learning programs. Clean and powerful.", username: "@edutech_in", name: "Meenal Shah" },
{ quote: "AEON integrates beautifully into our existing systems. Deployment was smooth and fast.", username: "@saasfounder_in", name: "Harish Patel" },
{ quote: "ORION reduced our onboarding time drastically. A game-changer for training teams.", username: "@hrtech_india", name: "Swati Choudhary" },

{ quote: "NOVA’s personalization features helped us build meaningful customer journeys.", username: "@digitalgrowth_in", name: "Ramesh Iyer" },
{ quote: "CIPHER gives developers clarity on security risks early in the build cycle.", username: "@devsecops_in", name: "Aakash Gupta" },

{ quote: "AEON helped DamnArt automate customer conversations without writing a single line of code. We saw better engagement and higher-quality inquiries within the first few weeks.", username: "@damnart", name: "Vishal Sood" },

{ quote: "For Meddevices, accuracy and compliance are critical. AEON’s chatbot handles medical queries efficiently while maintaining data protection and reducing our response time drastically.", username: "@meddevices", name: "Sukhpal Singh" },

{ quote: "AEON streamlined Eurocert’s certification support end-to-end. From application guidance to document queries, the chatbot reduced manual effort and improved turnaround time.", username: "@eurocert", name: "Nikhil Arora" },

{ quote: "AEON enabled Astro Remedies to launch a Kundali analysis chatbot with ease. Users now receive instant, personalized astrological insights and remedies without manual consultation.", username: "@astroremedies", name: "Satyam" },

{ quote: "The AEON no-code builder integrated seamlessly with Zoho for Sipcoin. We automated lead handling, ticket routing, and follow-ups in hours instead of days.", username: "@sipcoin", name: "Pawan Wadhawan" },

{ quote: "AEON’s property chatbot transformed how Grnata engages buyers. It filters high-intent leads and provides instant responses, making property discovery faster and smarter.", username: "@grnata", name: "Sadeeq" },

{ quote: "AEON plays a critical role in ITC India’s compliance and testing workflows. The chatbot assists clients with standards, documentation, and testing processes, ensuring clarity while reducing turnaround time.", username: "@itc_india", name: "Manish Vig" },

{ quote: "Eduonix uses AEON to guide learners to the right courses instantly. The chatbot handles course discovery, enrollments, and FAQs at scale, improving learner engagement and reducing support load.", username: "@eduonix", name: "Sayem" }

];

export const AGENTS = [
  { name: "NOVA", role: "Email Marketer", desc: "Advanced linguistic strategist designed to craft high-conversion sequences.", icon: Mail },
  { name: "AEON", role: "ChatBot Builder", desc: "Conversational architect for 24/7 engagement and response trees.", icon: MessageSquare },
  { name: "ORION", role: "Course Creator", desc: "Synthesizes knowledge bases into structured educational modules.", icon: BookOpen },
  { name: "CIPHER", role: "Cyber Security", desc: "Scans web and mobile APK to identify vulnerabilities and security threats.", icon: ShieldCheck }
];

export const FAQ_CATEGORIES = ["General", "AEON", "NOVA", "ORION", "CIPHER", "Platform & Scalability"];

// Category color mapping - each category has one consistent color
const CATEGORY_COLORS = {
  "General": "#00d2ff",              // Cyan
  "AEON": "#FED335",                  // Yellow
  "NOVA": "#12B9A7",                  // Teal
  "ORION": "#1dc393",                 // Emerald
  "CIPHER": "#dc2626",                // Red
  "Platform & Scalability": "#27bce2" // Light Cyan
};

export const FAQ_DATA = [
  // General
  {
    category: "General",
    question: "What is EVOKE AI?",
    answer: "EVOKE AI is a comprehensive enterprise AI platform that helps businesses adopt intelligent automation, streamline workflows, and scale operations using a suite of specialized AI agents.",
    color: CATEGORY_COLORS["General"]
  },
  {
    category: "General",
    question: "Who is EVOKE AI built for?",
    answer: "EVOKE AI is designed for startups, enterprises, educators, security teams, and growing businesses looking to adopt AI without complexity.",
    color: CATEGORY_COLORS["General"]
  },
  {
    category: "General",
    question: "Do I need technical expertise to use EVOKE AI?",
    answer: "No. EVOKE AI offers no-code and low-code tools that are easy to use for non-technical teams while remaining flexible for developers.",
    color: CATEGORY_COLORS["General"]
  },
  {
    category: "General",
    question: "How quickly can I get started with EVOKE AI?",
    answer: "Most teams can deploy their first AI workflow or chatbot within a few hours, without lengthy setup processes.",
    color: CATEGORY_COLORS["General"]
  },
  {
    category: "General",
    question: "Can EVOKE AI be customized for my business?",
    answer: "Yes. EVOKE AI supports deep customization, branding, workflows, and integrations to fit unique business needs.",
    color: CATEGORY_COLORS["General"]
  },
  // AEON (Yellow)
  {
    category: "AEON",
    question: "What is AEON used for?",
    answer: "AEON is a no-code/low-code chatbot builder used to automate customer support, lead qualification, onboarding, compliance queries, and domain-specific conversations.",
    color: CATEGORY_COLORS["AEON"]
  },
  {
    category: "AEON",
    question: "Do I need coding skills to use AEON?",
    answer: "No. AEON is designed for non-technical teams while still offering customization and integrations for developers.",
    color: CATEGORY_COLORS["AEON"]
  },
  {
    category: "AEON",
    question: "Can AEON handle industry-specific use cases?",
    answer: "Yes. AEON is used across healthcare, education, real estate, compliance, astrology, and SaaS—handling structured, sensitive, and multilingual queries efficiently.",
    color: CATEGORY_COLORS["AEON"]
  },
  {
    category: "AEON",
    question: "How fast can AEON be deployed?",
    answer: "Most teams deploy production-ready chatbots within hours or days, not weeks.",
    color: CATEGORY_COLORS["AEON"]
  },
  {
    category: "AEON",
    question: "Does AEON support integrations?",
    answer: "Yes. AEON integrates seamlessly with tools like Zoho, CRMs, ticketing systems, and internal workflows.",
    color: CATEGORY_COLORS["AEON"]
  },
  {
    category: "AEON",
    question: "Is AEON secure for sensitive data?",
    answer: "Absolutely. AEON is built with data protection, compliance, and role-based access in mind, making it suitable for regulated industries.",
    color: CATEGORY_COLORS["AEON"]
  },
  
  // ORION
  {
    category: "ORION",
    question: "What problems does ORION solve?",
    answer: "ORION simplifies course creation, training automation, onboarding, and learning management for teams and institutions.",
    color: CATEGORY_COLORS["ORION"]
  },
  {
    category: "ORION",
    question: "Who should use ORION?",
    answer: "EdTech platforms, HR teams, enterprises, and fast-growing startups looking to scale training and learning programs.",
    color: CATEGORY_COLORS["ORION"]
  },
  {
    category: "ORION",
    question: "Can ORION handle complex training material?",
    answer: "Yes. ORION structures complex content into scalable, easy-to-consume courses.",
    color: CATEGORY_COLORS["ORION"]
  },
  {
    category: "ORION",
    question: "Does ORION support internal and external training?",
    answer: "Yes. ORION works for employee onboarding, internal L&D, and customer or partner education.",
    color: CATEGORY_COLORS["ORION"]
  },
  
  // NOVA
  {
    category: "NOVA",
    question: "What makes NOVA different from traditional email tools?",
    answer: "NOVA uses intelligent automation, personalization, and smart workflows instead of manual campaign setup.",
    color: CATEGORY_COLORS["NOVA"]
  },
  {
    category: "NOVA",
    question: "Can NOVA improve engagement metrics?",
    answer: "Yes. Users report higher open rates, better targeting, and more meaningful customer journeys within weeks.",
    color: CATEGORY_COLORS["NOVA"]
  },
  {
    category: "NOVA",
    question: "Is NOVA suitable for growth teams?",
    answer: "Absolutely. NOVA is designed for marketing, growth, and CRM teams that want speed and clarity.",
    color: CATEGORY_COLORS["NOVA"]
  },
  {
    category: "NOVA",
    question: "Does NOVA support scalable campaigns?",
    answer: "Yes. NOVA handles both small campaigns and large-scale automation with ease.",
    color: CATEGORY_COLORS["NOVA"]
  },
  
  // CIPHER (Red)
  {
    category: "CIPHER",
    question: "What is CIPHER used for?",
    answer: "CIPHER extracts, analyzes, and prioritizes vulnerabilities from applications, helping teams focus on real security risks.",
    color: CATEGORY_COLORS["CIPHER"]
  },
  {
    category: "CIPHER",
    question: "Who should use CIPHER?",
    answer: "Security teams, developers, DevSecOps teams, and enterprises focused on proactive cybersecurity.",
    color: CATEGORY_COLORS["CIPHER"]
  },
  {
    category: "CIPHER",
    question: "How does CIPHER help developers?",
    answer: "CIPHER provides early visibility into security risks during the build cycle, reducing costly fixes later.",
    color: CATEGORY_COLORS["CIPHER"]
  },
  {
    category: "CIPHER",
    question: "Does CIPHER reduce noise in vulnerability reports?",
    answer: "Yes. CIPHER filters unnecessary alerts and delivers clear, actionable insights.",
    color: CATEGORY_COLORS["CIPHER"]
  },
  {
    category: "CIPHER",
    question: "Can CIPHER be integrated into existing workflows?",
    answer: "Yes. CIPHER fits seamlessly into modern security and development pipelines.",
    color: CATEGORY_COLORS["CIPHER"]
  },
  
  // Platform & Scalability
  {
    category: "Platform & Scalability",
    question: "Can these products be used together?",
    answer: "Yes. AEON, ORION, NOVA, and CIPHER are modular but work seamlessly together on the Evoke AI platform.",
    color: CATEGORY_COLORS["Platform & Scalability"]
  },
  {
    category: "Platform & Scalability",
    question: "Is Evoke AI suitable for enterprises?",
    answer: "Yes. The platform is already used in enterprise, compliance-heavy, and high-scale environments.",
    color: CATEGORY_COLORS["Platform & Scalability"]
  },
  {
    category: "Platform & Scalability",
    question: "How customizable is the platform?",
    answer: "Highly customizable—both visually and functionally—without compromising ease of use.",
    color: CATEGORY_COLORS["Platform & Scalability"]
  },
  {
    category: "Platform & Scalability",
    question: "How quickly can businesses see results?",
    answer: "Most teams see measurable impact—reduced manual effort, faster response times, and higher engagement—within weeks.",
    color: CATEGORY_COLORS["Platform & Scalability"]
  }
];

