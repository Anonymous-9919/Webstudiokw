export const SITE = {
  name: "WebStudioKW",
  title: "Web Development Kuwait | Website Design & Ecommerce — WebStudioKW",
  description:
    "Web development agency in Kuwait. We design and build professional business websites, ecommerce stores, and custom web apps. Packages from 150 KWD. Get a free quote.",
  url: "https://webstudiokw.com",
  phone: "+965 65664793",
  phoneRaw: "+96565664793",
  whatsapp: "https://wa.me/96565664793",
  email: "info@webstudiokw.com",
  founder: "Osama Shah",
  location: "Kuwait City, Kuwait",
  brand: "WebStudioKW",
  tagline: "Websites That Convert. Built For Growth.",
} as const

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const

export const HERO_STATS = [
  { value: "50+", label: "Projects Delivered" },
  { value: "5.0", label: "Client Rating" },
  { value: "7", label: "Days Avg. Delivery" },
] as const

export const SERVICES = [
  {
    id: "web-development",
    number: "01",
    title: "Web Design & Development",
    shortTitle: "Business Websites",
    description:
      "Professional business websites that build trust and attract customers. From corporate sites to landing pages, we create platforms that work for your business 24/7.",
    subServices: [
      "Professional company websites",
      "Landing pages",
      "Booking websites",
      "Corporate websites",
      "Mobile responsive design",
      "SEO optimization",
    ],
    icon: "Globe",
  },
  {
    id: "ecommerce-development",
    number: "02",
    title: "Ecommerce Development",
    shortTitle: "Ecommerce Stores",
    description:
      "Complete online stores with product management, secure payment integration, and order systems. Sell your products to customers across Kuwait.",
    subServices: [
      "Online stores",
      "Product management",
      "Shopping cart & checkout",
      "Payment integration",
      "Order management",
      "Customer accounts",
    ],
    icon: "ShoppingCart",
  },
  {
    id: "custom-web-apps",
    number: "03",
    title: "Custom Web Applications",
    shortTitle: "Custom Applications",
    description:
      "Tailored web applications built for your specific business needs. Dashboards, admin systems, SaaS platforms, and custom software solutions.",
    subServices: [
      "Admin dashboards",
      "SaaS platforms",
      "Custom software",
      "Database systems",
      "API development",
      "Third-party integrations",
    ],
    icon: "Code",
  },
] as const

export const PACKAGES = [
  {
    name: "Business Website Package",
    originalPrice: 300,
    offerPrice: 150,
    description: "Perfect for businesses that need a professional online presence",
    features: [
      "Professional website design",
      "Mobile responsive design",
      "SEO setup",
      "Contact forms",
      "WhatsApp integration",
      "Hosting assistance",
      "Basic support",
    ],
    cta: "Start My Website",
    popular: false,
    whatsappMessage: "Hi WebStudioKW! I'm interested in the Business Website Package (150 KWD). I'd like to get started.",
  },
  {
    name: "Ecommerce Website Package",
    originalPrice: 750,
    offerPrice: 450,
    description: "Everything you need to start selling online in Kuwait",
    features: [
      "Complete ecommerce website",
      "Product management",
      "Shopping cart",
      "Payment integration",
      "Customer accounts",
      "Order management",
      "SEO setup",
    ],
    cta: "Build My Ecommerce Store",
    popular: true,
    whatsappMessage: "Hi WebStudioKW! I'm interested in the Ecommerce Website Package (450 KWD). Let's discuss my online store.",
  },
  {
    name: "Full Stack Ecommerce Platform",
    originalPrice: 1250,
    offerPrice: 750,
    description: "A complete custom platform for serious businesses",
    features: [
      "Custom frontend",
      "Custom backend",
      "Admin dashboard",
      "Inventory management",
      "User management",
      "Advanced features",
      "Ongoing support",
    ],
    cta: "Discuss My Project",
    popular: false,
    whatsappMessage: "Hi WebStudioKW! I'm interested in the Full Stack Ecommerce Platform (750 KWD). Let's discuss my project requirements.",
  },
] as const

export const PORTFOLIO_PROJECTS = [
  {
    id: "kuwait-clinic",
    title: "Kuwait Clinic Website",
    category: "Healthcare",
    description: "A modern appointment booking website for a dental clinic in Kuwait City.",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    id: "kuwait-restaurant",
    title: "Kuwait Restaurant Website",
    category: "Restaurant",
    description: "An elegant restaurant website with menu showcase and online reservation system.",
    gradient: "from-orange-500 to-red-500",
  },
  {
    id: "kuwait-ecommerce",
    title: "Kuwait Ecommerce Store",
    category: "Ecommerce",
    description: "A full-featured online fashion store with product catalog and secure checkout.",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    id: "car-detailing",
    title: "Car Detailing Website",
    category: "Automotive",
    description: "A premium car detailing service website with booking system and service showcase.",
    gradient: "from-blue-500 to-indigo-600",
  },
] as const

export const TESTIMONIALS = [
  {
    name: "Ahmed Al-Rashid",
    business: "Al-Rashid Dental Clinic",
    text: "WebStudioKW built our clinic website in just 5 days. The design is modern and our patients love the online booking feature. Highly recommended!",
    rating: 5,
    date: "2 weeks ago",
  },
  {
    name: "Fatima Al-Sabah",
    business: "Blossom Restaurant",
    text: "Our new website looks incredible. WebStudioKW understood exactly what we needed and delivered a beautiful restaurant website that gets us more reservations.",
    rating: 5,
    date: "1 month ago",
  },
  {
    name: "Mohammed Al-Kandari",
    business: "Precision Auto Detailing",
    text: "Professional, fast, and affordable. WebStudioKW transformed our online presence. We now get more inquiries through our website every week.",
    rating: 5,
    date: "3 weeks ago",
  },
] as const

export const FAQS = [
  {
    question: "How long does it take to build a website?",
    answer:
      "Most business websites are completed within 5-7 working days. Ecommerce stores typically take 7-14 days depending on the number of products and features required.",
  },
  {
    question: "Do you offer hosting and domain services?",
    answer:
      "Yes, we help you set up reliable hosting and register your domain name. We recommend the best hosting solution based on your website needs and budget.",
  },
  {
    question: "Will my website be mobile-friendly?",
    answer:
      "Absolutely. Every website we build is fully responsive and looks great on all devices — phones, tablets, and desktops. Mobile-first design is our standard.",
  },
  {
    question: "Do you provide ongoing support after the website is launched?",
    answer:
      "Yes, we offer ongoing support and maintenance packages to keep your website updated, secure, and running smoothly.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept KWD bank transfers, Kuwaiti debit/credit cards, and can arrange payment plans for larger projects. Contact us on WhatsApp to discuss payment options.",
  },
  {
    question: "Can I update my website content myself?",
    answer:
      "Yes, we build websites with user-friendly content management so you can update text, images, and blog posts without technical knowledge.",
  },
] as const

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery",
    description: "We learn about your business, goals, and requirements to create the perfect strategy.",
  },
  {
    step: "02",
    title: "Design",
    description: "We design a modern, professional website that matches your brand and impresses your customers.",
  },
  {
    step: "03",
    title: "Development",
    description: "We build your website with clean code, fast performance, and mobile-first responsive design.",
  },
  {
    step: "04",
    title: "Launch",
    description: "We deploy your website, set up hosting, and ensure everything works perfectly before going live.",
  },
] as const

export const WHY_CHOOSE_US = [
  {
    title: "Custom-Built",
    description: "Every website is built from scratch, tailored to your brand and business goals. No templates, no shortcuts.",
    icon: "Shield",
  },
  {
    title: "Fast Delivery",
    description: "Most projects completed within 5-7 days. We respect your time and deliver on schedule, every time.",
    icon: "Clock",
  },
  {
    title: "Mobile-First",
    description: "Every website is designed mobile-first, ensuring it looks and works perfectly on all devices.",
    icon: "Smartphone",
  },
  {
    title: "Ongoing Support",
    description: "We don't disappear after launch. We provide ongoing support and maintenance to keep your site running.",
    icon: "Headphones",
  },
] as const
