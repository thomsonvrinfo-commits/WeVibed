// ═══════════════════════════════════════════════════════════
// WEVIBED — Centralized project & content data
// No fabricated outcomes. Describe what was built, not unmeasured gains.
// ═══════════════════════════════════════════════════════════

export const WHATSAPP_NUMBER = "0718 268 729";
export const WHATSAPP_LINK = "https://wa.me/263718268729";

// ─── Real WeVibed Projects ───
export const projects = [
  {
    id: "harare-drip-store",
    name: "Harare Drip Store",
    category: "Retail",
    categorySlug: "retail",
    tagline: "Streetwear that needed a home, not just a feed.",
    business: "A streetwear and drip-culture retailer in Harare.",
    context: "Selling exclusively through Instagram posts and WhatsApp orders. New drops announced as stories that vanished in 24 hours.",
    friction: "Customers saw a product on Instagram, lost the post, couldn't find current stock, messaged for prices, and waited — sometimes days — for a reply. Many never came back.",
    intervention: "A digital storefront that organizes every product into a persistent, browsable catalog with a direct WhatsApp enquiry path on every item.",
    system: ["Product catalog with current stock", "Individual product pages with pricing", "WhatsApp enquiry button per product", "Mobile-first browsing experience"],
    result: "Customers browse the full collection, check stock, and enquire about a specific product — without waiting for someone to reply to a DM.",
    screenshot: null,
    liveUrl: null,
    mock: true,
    featured: true,
  },
  {
    id: "robbins-jewelry",
    name: "Robbins Jewelry",
    category: "Jewellery",
    categorySlug: "jewellery",
    tagline: "Trust you can see before you visit.",
    business: "A jeweller selling fine and custom pieces.",
    context: "Relying on word-of-mouth and occasional social posts. High-value purchases that demand trust.",
    friction: "Customers couldn't see the full collection, verify authenticity, or understand pricing without scheduling a visit. Many potential buyers dropped off before enquiring.",
    intervention: "A trust-first digital showcase with a portfolio of work, certifications, and a consultation booking path.",
    system: ["Collection gallery with detail views", "Craftsmanship and certification showcase", "WhatsApp consultation booking", "Enquiry path per piece"],
    result: "Customers browse the collection, build trust through visible craft, and book a consultation — before stepping into the store.",
    screenshot: null,
    liveUrl: null,
    mock: true,
    featured: false,
  },
  {
    id: "royal-home-atelier",
    name: "Royal Home Atelier",
    category: "Furniture",
    categorySlug: "furniture",
    tagline: "Craftsmanship that deserves to be seen.",
    business: "A bespoke furniture and interior design atelier.",
    context: "Showing work through scattered social posts. Each piece is custom, high-value, and process-driven.",
    friction: "Customers couldn't see the range of past work, understand the design and build process, or visualize pieces in context. The craft was invisible.",
    intervention: "A portfolio-driven digital presence that showcases the full body of work, the process behind it, and a clear enquiry path.",
    system: ["Project gallery with process stories", "Materials and finishes showcase", "Custom commission enquiry path", "Design process explanation"],
    result: "Customers understand the craft, see the range, and enquire about a custom piece with confidence.",
    screenshot: null,
    liveUrl: null,
    mock: true,
    featured: false,
  },
  {
    id: "city-showroom",
    name: "City Showroom",
    category: "Automotive",
    categorySlug: "automotive",
    tagline: "A showroom that never closes.",
    business: "A vehicle showroom selling cars in Harare.",
    context: "Cars listed on Facebook, enquiries handled on WhatsApp. Stock changed weekly.",
    friction: "Customers couldn't see current stock, compare vehicles, or get specifications without visiting in person. By the time they arrived, the car was often sold.",
    intervention: "A digital showroom with live vehicle listings, full specifications, and a direct enquiry path per vehicle.",
    system: ["Vehicle catalog with specs and photos", "Availability status per vehicle", "WhatsApp enquiry per listing", "Stock rotation system"],
    result: "Customers browse available vehicles, compare specs, and enquire — before the car they want is sold.",
    screenshot: null,
    liveUrl: null,
    mock: true,
    featured: false,
  },
  {
    id: "goldtech-electronics",
    name: "Goldtech Electronics",
    category: "Electronics",
    categorySlug: "electronics",
    tagline: "Specs, stock, and clarity — on demand.",
    business: "An electronics retailer.",
    context: "Products posted on social media, prices given on request. A wide catalog that was hard to communicate.",
    friction: "Customers couldn't compare products, check availability, or understand specifications without a long WhatsApp conversation. The owner answered the same questions daily.",
    intervention: "A product catalog with full specifications, availability, and a structured enquiry path.",
    system: ["Product pages with specifications", "Availability indicators", "Product comparison views", "WhatsApp order path"],
    result: "Customers research, compare, and enquire independently — the owner stops answering the same five questions.",
    screenshot: null,
    liveUrl: null,
    mock: true,
    featured: false,
  },
  {
    id: "celltrade",
    name: "Celltrade",
    category: "Electronics",
    categorySlug: "electronics",
    tagline: "Condition you can trust before you buy.",
    business: "A mobile phone trader.",
    context: "Phones posted on Facebook, deals closed on WhatsApp. Condition and pricing varied per unit.",
    friction: "Customers couldn't see current stock, understand condition grades, or trust the pricing without a conversation. Uncertainty killed deals.",
    intervention: "A digital catalog with transparent condition grading, specifications, and a trade-in enquiry path.",
    system: ["Phone listings with condition grades", "Spec sheets per device", "Trade-in enquiry path", "Stock visibility"],
    result: "Customers browse with clarity, understand what they're buying, and enquire with confidence.",
    screenshot: null,
    liveUrl: null,
    mock: true,
    featured: false,
  },
  {
    id: "tokyo-motors",
    name: "Tokyo Motors",
    category: "Automotive",
    categorySlug: "automotive",
    tagline: "Import vehicles, transparent process.",
    business: "A Japanese vehicle importer and dealer.",
    context: "Imports sold through social posts and WhatsApp. The process was complex but invisible.",
    friction: "Customers couldn't track available units, see what was being imported, or understand the timeline without repeated questions.",
    intervention: "A digital showroom with available units, an import timeline, and a structured enquiry path.",
    system: ["Available and incoming vehicle catalog", "Import process timeline", "Spec sheets per vehicle", "WhatsApp enquiry per unit"],
    result: "Customers browse units, understand the import process, and enquire about a specific vehicle.",
    screenshot: null,
    liveUrl: null,
    mock: true,
    featured: false,
  },
  {
    id: "rommstaworld",
    name: "Rommstaworld",
    category: "Retail",
    categorySlug: "retail",
    tagline: "A brand that needed a home.",
    business: "A lifestyle and apparel brand.",
    context: "Products shown through social media with no central place to browse or buy.",
    friction: "Customers discovered products on social but had nowhere persistent to browse the full range or make a purchase.",
    intervention: "A digital storefront with an organized product catalog and direct enquiry path.",
    system: ["Product catalog", "Brand story page", "WhatsApp order path", "Mobile-first storefront"],
    result: "Customers browse the full range and enquire or order through a single, persistent place.",
    screenshot: null,
    liveUrl: null,
    mock: true,
    featured: false,
  },
  {
    id: "fromeon",
    name: "Fromeon",
    category: "Technology",
    categorySlug: "technology",
    tagline: "A service business that needed to be understood.",
    business: "A technology services company.",
    context: "Services explained through individual conversations. No clear digital presence communicating what they do.",
    friction: "Potential clients couldn't understand the service offering, process, or value without a call. First impressions depended on who answered the phone.",
    intervention: "A digital presence system with clear service communication, process explanation, and an enquiry path.",
    system: ["Service pages with clear descriptions", "Process explanation", "Capability showcase", "WhatsApp enquiry path"],
    result: "Clients understand the offering and enquire — before the first conversation.",
    screenshot: null,
    liveUrl: null,
    mock: true,
    featured: false,
  },
  {
    id: "little-babies",
    name: "Little Babies",
    category: "Retail",
    categorySlug: "retail",
    tagline: "Products parents can trust.",
    business: "A baby and child product retailer.",
    context: "Products shown on social, orders taken on WhatsApp. Parents buying for their children demand trust.",
    friction: "Parents couldn't browse safely, check product details, or trust the products without extensive questions. Safety and quality concerns blocked purchases.",
    intervention: "A trust-first digital storefront with product details, safety information, and a clear order path.",
    system: ["Product pages with detail and safety info", "Trust signals and transparency", "WhatsApp order path", "Mobile-first browsing"],
    result: "Parents browse, trust, and order — with the information they need to feel confident.",
    screenshot: null,
    liveUrl: null,
    mock: true,
    featured: false,
  },
];

export const projectCategories = [
  { slug: "retail", label: "Retail" },
  { slug: "jewellery", label: "Jewellery" },
  { slug: "furniture", label: "Furniture" },
  { slug: "automotive", label: "Automotive" },
  { slug: "electronics", label: "Electronics" },
  { slug: "technology", label: "Technology" },
];

// ─── Six Connected Systems ───
export const systems = [
  {
    n: "01",
    name: "Digital Presence",
    flow: "Presence",
    desc: "Be easier to discover.",
    detail: "A storefront, website, and Google presence that makes your business findable — and gives customers somewhere persistent to land.",
    projectTag: "harare-drip-store",
  },
  {
    n: "02",
    name: "Customer Trust",
    flow: "Trust",
    desc: "Be easier to trust.",
    detail: "Portfolio, reviews, brand identity, and clear information that make customers confident before they ever contact you.",
    projectTag: "robbins-jewelry",
  },
  {
    n: "03",
    name: "Lead Generation",
    flow: "Leads",
    desc: "Be easier to choose.",
    detail: "Landing pages, WhatsApp, and lead forms that capture demand and turn interest into enquiries.",
    projectTag: "goldtech-electronics",
  },
  {
    n: "04",
    name: "Customer Communication",
    flow: "Communication",
    desc: "Be easier to talk to.",
    detail: "Structured communication paths so customers can reach you, get answers, and move forward — without you answering the same questions all day.",
    projectTag: "celltrade",
  },
  {
    n: "05",
    name: "Business Automation",
    flow: "Automation",
    desc: "Be easier to operate.",
    detail: "Workflows and systems that remove manual work — so the business runs even when you're not holding the phone.",
    projectTag: "tokyo-motors",
  },
  {
    n: "06",
    name: "Continuous Growth",
    flow: "Growth",
    desc: "Be easier to scale.",
    detail: "Analytics, review, and improvement that compound — so the system gets better the longer it runs.",
    projectTag: "fromeon",
  },
];

// ─── Growth Loop ───
export const growthLoop = [
  { n: "01", label: "Built", desc: "We design and build the system around your business." },
  { n: "02", label: "Used", desc: "Customers discover, browse, and enquire through it." },
  { n: "03", label: "Measured", desc: "We track what's working and what isn't." },
  { n: "04", label: "Improved", desc: "We refine the system based on real behaviour." },
  { n: "05", label: "Expanded", desc: "We add new capabilities as the business grows." },
];

// ─── How to Start ───
export const startSteps = [
  { n: "01", label: "Tell us about the business", desc: "A short conversation about what you do and what's not working." },
  { n: "02", label: "We identify the opportunity", desc: "We map where customers are getting lost and what a system would fix." },
  { n: "03", label: "We design the system", desc: "We architect the connected digital experience around your goals." },
  { n: "04", label: "We build it", desc: "We engineer every piece — storefront, communication, automation." },
  { n: "05", label: "You launch", desc: "Your system goes live and starts working." },
  { n: "06", label: "We improve it", desc: "We measure, refine, and expand — continuously." },
];

// ─── Industries (mapped to real projects) ───
export const industries = [
  { name: "Retail", projectId: "harare-drip-store" },
  { name: "Jewellery", projectId: "robbins-jewelry" },
  { name: "Furniture", projectId: "royal-home-atelier" },
  { name: "Automotive", projectId: "tokyo-motors" },
  { name: "Electronics", projectId: "goldtech-electronics" },
  { name: "Technology", projectId: "fromeon" },
];

// ─── Storefront Offer ───
export const storefrontOffer = {
  name: "Digital Storefront",
  price: "$5",
  period: "month",
  setup: "No setup fee",
  includes: [
    "A real digital storefront",
    "Product pages with photos",
    "WhatsApp enquiry path on every product",
    "Mobile-first design",
    "Your business, persistent and findable",
  ],
};

// ─── Objections (answered naturally, not as FAQ dump) ───
export const objections = [
  { q: "I already have Instagram.", a: "Instagram is a feed, not a storefront. Posts disappear, stock isn't organized, and customers can't browse. A storefront gives them somewhere persistent to land." },
  { q: "My customers use WhatsApp.", a: "We don't replace WhatsApp — we connect it. Every product page has a WhatsApp enquiry button. Customers arrive informed, not starting from zero." },
  { q: "My business is too small.", a: "The $5 storefront is built for small businesses. It gives you the same digital foundation as larger retailers — without the complexity." },
  { q: "I don't need a website.", a: "You need a system, not a website. A storefront that connects to WhatsApp, organizes your products, and gives customers a place to browse — that's a system." },
  { q: "Will people actually use it?", a: "Your customers are already searching for you. Right now they find scattered posts. A storefront gives them a clear path from discovery to enquiry." },
  { q: "Can I update my products?", a: "Yes. The system is built so you can add, update, and manage products without depending on anyone else." },
  { q: "What happens after launch?", a: "The system doesn't end at launch. We measure how it's used, improve it, and expand it as your business grows." },
  { q: "Can this work for my type of business?", a: "We've built systems for retail, jewellery, furniture, automotive, electronics, and technology. The framework adapts to your business — not the other way around." },
];

export function getProject(id) {
  return projects.find((p) => p.id === id);
}

export function getProjectsByCategory(slug) {
  return projects.filter((p) => p.categorySlug === slug);
}