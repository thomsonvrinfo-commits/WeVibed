import {
  Code2, Palette, ShoppingBag, RefreshCw, Sparkles, Search, Wrench, Server,
  Globe, Bot, Workflow, Gauge, Calculator, Radar, Zap, ClipboardCheck, MessageSquare,
  Star, ShieldCheck, Target, TrendingUp, BarChart3, Hammer, Rocket, GraduationCap,
  Eye, UserSearch, UserCheck, MessageCircle, Share2, Droplets, FlaskConical,
  Armchair, Cctv, Wifi, CandlestickChart, Baby, Users, ArrowDown
} from "lucide-react";

// ─── The Customer Journey (Hero visual) ───
export const journeyFlow = [
  { label: "Stranger", icon: UserSearch },
  { label: "Website", icon: Globe },
  { label: "Trust", icon: ShieldCheck },
  { label: "WhatsApp", icon: MessageCircle },
  { label: "Customer", icon: UserCheck },
  { label: "Review", icon: Star },
  { label: "Referral", icon: Share2 },
];

// ─── The WeVibed Growth System ───
export const growthSystem = [
  { step: "Discover", icon: Search, desc: "We learn your business, market, and growth blockers." },
  { step: "Design", icon: Palette, desc: "We architect a system around your business goals." },
  { step: "Build", icon: Hammer, desc: "We engineer the digital assets that power it." },
  { step: "Automate", icon: Bot, desc: "We remove manual work with intelligent workflows." },
  { step: "Grow", icon: TrendingUp, desc: "We deploy systems that generate opportunities 24/7." },
  { step: "Measure", icon: BarChart3, desc: "We track what matters and prove what works." },
  { step: "Improve", icon: RefreshCw, desc: "We optimise continuously for compounding growth." },
];

// ─── Business Systems (never "services") ───
export const businessSystems = [
  { name: "Digital Presence System", icon: Globe, outcomes: "Be easier to discover.", items: ["Website", "Google Business", "SEO", "Analytics"] },
  { name: "Customer Trust System", icon: ShieldCheck, outcomes: "Be easier to trust.", items: ["Reviews", "Portfolio", "Brand Identity", "Case Studies"] },
  { name: "Lead Generation System", icon: Target, outcomes: "Be easier to choose.", items: ["Landing Pages", "WhatsApp", "Lead Forms", "Booking"] },
  { name: "Customer Communication System", icon: MessageSquare, outcomes: "Be easier to talk to.", items: ["AI Chatbots", "CRM", "Follow-up", "Email Automation"] },
  { name: "Business Automation System", icon: Workflow, outcomes: "Be easier to operate.", items: ["Business Workflows", "Dashboards", "Reporting", "Automation"] },
  { name: "Continuous Growth System", icon: TrendingUp, outcomes: "Be easier to scale.", items: ["Analytics", "Performance Reviews", "Training", "Continuous Optimisation"] },
];

// ─── Why WeVibed comparison ───
export const whyComparison = [
  { from: "We don't sell isolated services.", to: "We build complete systems." },
  { from: "We don't deliver projects.", to: "We create long-term business transformation." },
  { from: "We don't focus on technology.", to: "We focus on business growth." },
];

// ─── Industries We Understand ───
export const industries = [
  { name: "Plumbing", icon: Droplets },
  { name: "Construction & Metal Fabrication", icon: Hammer },
  { name: "Chemical Supply & Cleaning", icon: FlaskConical },
  { name: "Upholstery & Restoration", icon: Armchair },
  { name: "Smart Security & Home Automation", icon: Cctv },
  { name: "Connectivity & Network Infrastructure", icon: Wifi },
  { name: "Financial Trading Technology", icon: CandlestickChart },
  { name: "Child Safety & School Safety Technology", icon: Baby },
];

// ─── How We Work ───
export const howWeWork = [
  { step: "Understand", icon: Eye, desc: "We listen before we build." },
  { step: "Design", icon: Palette, desc: "We architect your system." },
  { step: "Build", icon: Hammer, desc: "We engineer every asset." },
  { step: "Launch", icon: Rocket, desc: "We go live with intent." },
  { step: "Train", icon: GraduationCap, desc: "We hand over with clarity." },
  { step: "Measure", icon: BarChart3, desc: "We prove what's working." },
  { step: "Improve", icon: RefreshCw, desc: "We optimise endlessly." },
];

// ─── Current Transformation Projects ───
export const transformationProjects = [
  { name: "Ultimate Plumbing Solutions", desc: "Building a digital business system for continuous lead generation.", tag: "Plumbing" },
  { name: "Garnet Fencing & Metal Fabrication", desc: "Designing a trust-first digital growth system.", tag: "Construction" },
  { name: "Trapchem", desc: "Building a digital customer acquisition ecosystem.", tag: "Chemical Supply" },
  { name: "Zalnet Technologies", desc: "Building connectivity and infrastructure growth systems.", tag: "Connectivity" },
  { name: "SafeTrack AI", desc: "Building a child protection platform that enables parents and schools to monitor and safeguard children through intelligent tracking systems.", tag: "Child Safety" },
  { name: "SynthEdge", desc: "Building a trading development platform focused on market replay, backtesting, journaling, trader psychology and long-term trader development.", tag: "Trading Technology" },
];

// ─── Stats ───
export const stats = [
  { value: "24", suffix: "/7", label: "Systems that never sleep" },
  { value: "8", suffix: "", label: "Industries understood" },
  { value: "8", suffix: "", label: "Active transformations" },
  { value: "100", suffix: "%", label: "Business-focused" },
];

// ─── Legacy (other pages) ───
export const services = [
  { icon: Globe, title: "Digital Presence", desc: "Websites, Google Business, and SEO that make you discoverable.", tags: ["Website", "SEO", "Google"] },
  { icon: ShieldCheck, title: "Customer Trust", desc: "Reviews, portfolio, and brand identity that build credibility.", tags: ["Reviews", "Brand", "Portfolio"] },
  { icon: Target, title: "Lead Generation", desc: "Landing pages, WhatsApp, and lead forms that capture demand.", tags: ["Landing", "WhatsApp", "Forms"] },
  { icon: MessageSquare, title: "Communication", desc: "AI chatbots, CRM, and follow-up automation that never miss a lead.", tags: ["AI", "CRM", "Automation"] },
  { icon: Workflow, title: "Business Automation", desc: "Workflows and dashboards that remove manual work.", tags: ["Workflows", "Dashboards"] },
  { icon: TrendingUp, title: "Continuous Growth", desc: "Analytics, reviews, and optimisation that compound results.", tags: ["Analytics", "Optimisation"] },
  { icon: Bot, title: "AI Integration", desc: "Intelligent systems that qualify leads and support customers.", tags: ["AI", "Chatbots"] },
  { icon: Gauge, title: "Performance", desc: "Fast, reliable infrastructure that keeps your system running.", tags: ["Speed", "Cloudflare"] },
  { icon: Palette, title: "Brand Design", desc: "Visual identities that command attention and build trust.", tags: ["Logo", "Identity"] },
  { icon: Zap, title: "Landing Pages", desc: "High-impact pages engineered to convert traffic into leads.", tags: ["CRO", "Conversion"] },
  { icon: Server, title: "Infrastructure", desc: "Premium hosting with global CDN and edge caching.", tags: ["Hosting", "CDN"] },
  { icon: Search, title: "SEO & Discovery", desc: "Technical and content SEO that drives organic growth.", tags: ["Technical", "Content"] },
];

export const portfolio = [
  { name: "Ultimate Plumbing Solutions", industry: "Plumbing", services: ["Digital Presence", "Lead Generation", "WhatsApp"], tech: ["Discovery", "Trust"], result: "Active", image: 0 },
  { name: "Garnet Fencing & Metal Fabrication", industry: "Construction", services: ["Customer Trust", "Brand Design", "SEO"], tech: ["Trust", "Growth"], result: "Active", image: 0 },
  { name: "Trapchem", industry: "Chemical Supply", services: ["Lead Generation", "Communication", "CRM"], tech: ["Acquisition", "Ecosystem"], result: "Active", image: 1 },
  { name: "Zalnet Technologies", industry: "Connectivity", services: ["Growth System", "Lead Gen", "Web"], tech: ["Connectivity", "Growth"], result: "Active", image: 1 },
  { name: "SafeTrack AI", industry: "Child Safety", services: ["Platform", "AI", "Safety"], tech: ["AI", "Tracking"], result: "Active", image: 0 },
  { name: "SynthEdge", industry: "Trading Technology", services: ["Platform", "AI", "Automation"], tech: ["Trading", "Psychology"], result: "Active", image: 1 },
];

export const caseStudies = [
  { name: "Ultimate Plumbing Solutions", challenge: "No consistent lead pipeline for a growing plumbing business.", result: "Building a system for continuous lead generation", metric: "24/7", metricLabel: "Lead Generation" },
  { name: "Garnet Fencing", challenge: "Low trust and visibility in a competitive construction market.", result: "Designing a trust-first digital growth system", metric: "Trust", metricLabel: "Growth System" },
  { name: "SynthEdge", challenge: "Building a complete trading development platform from scratch.", result: "Market replay, backtesting, journaling, psychology", metric: "Full", metricLabel: "Platform" },
];

export const pricing = [
  {
    name: "Starter",
    price: "$5",
    period: "month",
    popular: false,
    desc: "For small businesses that need a clear, professional digital storefront.",
    features: [
      "Digital storefront",
      "Mobile-first responsive design",
      "Business information",
      "WhatsApp integration",
      "Social links",
      "Cloudflare hosting",
      "Simple, clear customer journey",
    ],
    timeline: "Fast setup",
    support: "Ongoing",
  },
  {
    name: "Business",
    price: "Custom",
    period: "quote",
    popular: true,
    desc: "For growing businesses that need a more complete digital business system.",
    features: [
      "Custom digital presence",
      "Premium custom design",
      "Lead generation",
      "Analytics",
      "WhatsApp integration",
      "Customer trust systems",
      "Automation options",
      "Growth-focused setup",
    ],
    timeline: "Tailored",
    support: "Ongoing",
  },
  {
    name: "Custom Project",
    price: "Request a quote",
    period: "",
    popular: false,
    desc: "For businesses that need a complete digital system built around their specific goals.",
    features: [
      "Custom business system",
      "Advanced functionality",
      "Automation",
      "AI integration",
      "Custom dashboards",
      "Advanced workflows",
      "Industry-specific systems",
      "Dedicated project planning",
    ],
    timeline: "Tailored",
    support: "Tailored",
  },
];

export const testimonials = [];

export const blogPosts = [
  { category: "Business Systems", title: "Why Your Business Should Work Even When You Aren't", excerpt: "How digital systems multiply time, trust, and opportunities — automatically.", date: "Aug 2026", readTime: "5 min" },
  { category: "Automation", title: "The Quiet Power of Business Automation", excerpt: "Why removing manual work is the highest-leverage thing you can do.", date: "Jul 2026", readTime: "6 min" },
  { category: "Trust", title: "Trust Is the New Marketing", excerpt: "Why reviews, clarity, and consistency beat ads every time.", date: "Jul 2026", readTime: "7 min" },
];

export const freeTools = [
  { icon: Calculator, title: "Business System Calculator", desc: "Estimate the system your business needs to grow." },
  { icon: Radar, title: "Visibility Audit", desc: "Discover how easy you are to find online." },
  { icon: Zap, title: "Growth Gap Checker", desc: "Find where your business is leaking opportunities." },
  { icon: ClipboardCheck, title: "Business Readiness Quiz", desc: "See how ready your business is to scale in 2 minutes." },
  { icon: MessageSquare, title: "AI Business Consultant", desc: "Chat with our AI advisor about your growth system." },
  { icon: Globe, title: "Discovery Score", desc: "Measure how discoverable your business really is." },
];

export const technologies = [
  "React", "Next.js", "AI", "WhatsApp", "Automation", "Cloudflare", "Analytics", "CRM", "SEO", "Workflows"
];

export const faqs = [
  { q: "Do you build websites?", a: "We build complete digital business systems. A website is one component of that system — but we start with your business goals, not a template." },
  { q: "What is a digital business system?", a: "It's the combination of your digital presence, customer trust assets, lead generation, communication, automation, and continuous growth — all working together to help your business grow 24/7." },
  { q: "How long does it take?", a: "Foundation systems launch in 2 weeks, Growth systems in 4 weeks, and full Transformation systems in 6-8 weeks. We provide a tailored timeline after understanding your business." },
  { q: "Do you offer payment plans?", a: "Yes. We typically split payments into a deposit and milestones, with custom plans available for larger transformations." },
  { q: "What industries do you understand?", a: "Plumbing, construction, chemical supply, restoration, smart security, connectivity, financial trading technology, and child safety — with more added as our Industry Playbooks grow." },
  { q: "Is this a one-time project or ongoing?", a: "We build for long-term transformation. Systems are designed to keep working and improving long after the initial launch." },
];