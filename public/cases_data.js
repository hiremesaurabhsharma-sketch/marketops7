const CASES_DATA = [
  // --- ECOMMERCE SOLUTIONS (10 Cases) ---
  {
    id: 1,
    slug: "aura-lifestyle-quick-commerce",
    category: "ecommerce",
    categoryLabel: "Ecommerce Solutions",
    title: "How Aura Lifestyle Scaled to $180,000/mo on Amazon & Zepto",
    clientName: "Aura Lifestyle",
    niche: "Direct-to-Consumer Fashion & Apparel",
    metrics: { label: "Monthly Store Revenue", start: "$25,000", end: "$180,000", growth: "+620%" },
    adSpend: "$22,000/mo",
    roas: "4.8x ROAS",
    progress: 95,
    overview: "Aura Lifestyle struggled with stagnant marketplace visibility and high ACOS. By optimizing their listing architecture and launching aggressive quick-commerce campaigns on Zepto and Blinkit, we expanded their monthly sales dramatically in under 6 months.",
    challenge: "High ad spend leakage on generic terms, frequent out-of-stock penalties from Amazon, and an unoptimized storefront resulting in a low 1.4% conversion rate.",
    solution: [
      "Conducted a deep-dive keyword map focusing on highly specific long-tail buyer intent.",
      "Redesigned the storefront with premium A+ content and interactive cross-sell grids.",
      "Launched localized dark-store stock integrations on Blinkit, Swiggy Instamart, and Zepto to capitalize on 10-minute instant delivery options.",
      "Implemented a automated bid-scrubbing script to lower Amazon Sponsored Product ACOS by 57%."
    ],
    metricsDetail: {
      primary: "ACOS Reduced: from 42% down to 18%",
      secondary: "Conversion Rate Boosted: from 1.4% to 4.2%",
      tertiary: "Quick Commerce Contribution: 38% of total revenue"
    },
    takeaway: "Combining quick-commerce instant delivery options with hyper-targeted sponsored listing optimization unlocks massive compounding marketplace scaling."
  },
  {
    id: 2,
    slug: "nutri-bite-zepto-scaling",
    category: "ecommerce",
    categoryLabel: "Ecommerce Solutions",
    title: "NutriBite's 10-Minute Delivery Domination: +450% Sales Lift on Zepto & Blinkit",
    clientName: "NutriBite Snacks",
    niche: "Healthy D2C Packaged Foods",
    metrics: { label: "Monthly Orders", start: "1,200", end: "6,600", growth: "+450%" },
    adSpend: "$8,500/mo",
    roas: "3.9x ROAS",
    progress: 88,
    overview: "NutriBite wanted to dominate the instant-grocery snack category. We optimized their inventory forecasting and product display layouts across Zepto, Blinkit, and Swiggy Instamart, triggering a significant order spike.",
    challenge: "High cart abandonment rates on delivery apps and frequent stock-outs in critical high-density suburban dark stores.",
    solution: [
      "Designed clean, high-impact product thumbnails featuring bold benefit tags for mobile-first scrolling.",
      "Deployed local geo-targeted mobile search ads matching search phrases like 'healthy snacks late night' within active delivery radii.",
      "Integrated a real-time inventory API to automatically shift ad budget away from out-of-stock hubs and focus on stock-heavy warehouses."
    ],
    metricsDetail: {
      primary: "Dark Store Distribution: Raised to 150+ hubs",
      secondary: "Click-Through Rate (CTR): Raised from 0.8% to 2.9%",
      tertiary: "Organic Category Ranking: #3 in Healthy Snacks"
    },
    takeaway: "Quick commerce requires hyper-local stock synchronization; showing ads only where inventory exists prevents wasted marketing spend."
  },
  {
    id: 3,
    slug: "glam-glow-amazon-ppc",
    category: "ecommerce",
    categoryLabel: "Ecommerce Solutions",
    title: "GlamGlow Cosmetics Cuts ACOS by 64% While Doubling Search Share",
    clientName: "GlamGlow Makeup",
    niche: "Organic Cosmetics",
    metrics: { label: "Amazon Ad Profit", start: "$4,500/mo", end: "$26,000/mo", growth: "+477%" },
    adSpend: "$14,000/mo",
    roas: "4.5x ROAS",
    progress: 90,
    overview: "GlamGlow was bleeding money on broad-match Amazon PPC keywords with high bids. We restructured their ad campaigns into a single-intent keyword model and dramatically reduced wasted spend.",
    challenge: "Severe bid cannibalization where their own sponsored products competed with each other, leading to an unsustainable 48% ACOS.",
    solution: [
      "Restructured ad groups to segregate exact, phrase, and broad matches into isolated campaigns.",
      "Harvested high-converting search queries and added 1,200+ negative keywords to cut immediate waste.",
      "Launched Sponsored Brands video ads showcasing the product application texture directly on search result pages."
    ],
    metricsDetail: {
      primary: "ACOS Reduced: from 48% to 17%",
      secondary: "Ad-Attributed Revenue: Increased by 115%",
      tertiary: "Share of Voice (SOV): Doubled on top 10 keywords"
    },
    takeaway: "Rigorous negative keyword pruning and structural keyword isolation is the most effective lever to instantly boost e-commerce ad profitability."
  },
  {
    id: 4,
    slug: "terra-bottles-meesho-scaling",
    category: "ecommerce",
    categoryLabel: "Ecommerce Solutions",
    title: "TerraBottles Scales Local E-commerce on Meesho to 8,000 Orders/mo",
    clientName: "TerraBottles India",
    niche: "Eco-friendly Kitchenware",
    metrics: { label: "Monthly Wholesale Revenue", start: "$8,000", end: "$64,000", growth: "+700%" },
    adSpend: "$6,200/mo",
    roas: "5.1x ROAS",
    progress: 92,
    overview: "TerraBottles wanted to unlock Tier 2 and Tier 3 e-commerce markets in India. We repositioned their pricing strategy and catalog tags specifically for the highly cost-sensitive Meesho marketplace.",
    challenge: "High delivery returns (RTO - Return to Origin) and low profit margins due to high competitive pricing pressure.",
    solution: [
      "Bundle-packaged product listings to increase Average Order Value (AOV) and absorb shipping overheads.",
      "Developed high-converting Hindi and regional language listing variations.",
      "Optimized packaging sizes to fit standard low-cost logistics brackets, reducing shipping disputes."
    ],
    metricsDetail: {
      primary: "RTO Rates Slashed: from 28% down to 12%",
      secondary: "Average Order Value: Lifted by 45%",
      tertiary: "Profit Margin Restructured: +18% net improvement"
    },
    takeaway: "Tier-2/3 market scaling requires strict attention to logistical packaging costs and RTO mitigation strategies."
  },
  {
    id: 5,
    slug: "sleep-well-flipkart-boost",
    category: "ecommerce",
    categoryLabel: "Ecommerce Solutions",
    title: "SleepWell Mattresses Achieves +280% organic sales on Flipkart Big Billion Days",
    clientName: "SleepWell Furnishings",
    niche: "Premium Sleep Products",
    metrics: { label: "Big Billion Day Sales", start: "$45,000", end: "$171,000", growth: "+280%" },
    adSpend: "$19,000/mo",
    roas: "4.1x ROAS",
    progress: 85,
    overview: "SleepWell mattress listings were buried beneath legacy competitors. We executed a comprehensive catalog optimization and launched targeted display banners for Flipkart's marquee shopping event.",
    challenge: "High bounce rates on product pages and low rating visibility compared to heavily reviewed older competitors.",
    solution: [
      "Launched a customer feedback loop to safely collect organic 5-star reviews post-delivery.",
      "Created highly descriptive infographics explaining the multi-layer orthopaedic construction.",
      "Secured premium placements in Flipkart Search Suggested grids during high-traffic Big Billion Days slots."
    ],
    metricsDetail: {
      primary: "Listing Click-Through Rate: Raised from 1.1% to 3.4%",
      secondary: "Flipkart Assured Badge: Secured within 30 days",
      tertiary: "Conversion Lift: +85% during promotional peak"
    },
    takeaway: "Marquee marketplace sales events require pre-event review farming and clean visual infographics to maximize conversion spikes."
  },
  {
    id: 6,
    slug: "bold-fit-storefront-setup",
    category: "ecommerce",
    categoryLabel: "Ecommerce Solutions",
    title: "BoldFit's Multi-Channel Storefront Setup Drives +190% Direct Orders",
    clientName: "BoldFit Activewear",
    niche: "Fitness Accessories & Wearables",
    metrics: { label: "Direct Website Orders", start: "400/mo", end: "1,160/mo", growth: "+190%" },
    adSpend: "$5,000/mo",
    roas: "3.5x ROAS",
    progress: 80,
    overview: "BoldFit wanted to reduce their absolute dependency on Amazon. We built and launched a highly optimized direct-to-consumer Shopify storefront integrated with real-time warehouse logistics.",
    challenge: "Slow mobile loading speed (4.8s) on their legacy site and manual inventory tracking that caused accidental sales of out-of-stock items.",
    solution: [
      "Developed a custom-designed, fast-loading storefront with integrated instant checkout.",
      "Connected centralized warehouse APIs to sync inventory across Shopify, Amazon, and retail locations instantly.",
      "Implemented intelligent upsell drawers that recommend matching products at cart slide-out."
    ],
    metricsDetail: {
      primary: "Page Speed Optimized: Load time under 1.2s",
      secondary: "Average Order Value (AOV): Increased by 26%",
      tertiary: "Multi-channel Inventory Accuracy: 100%"
    },
    takeaway: "A premium direct-to-consumer experience must combine ultra-fast page speeds with seamless multi-channel logistics integrations."
  },
  {
    id: 7,
    slug: "vibe-tech-inventory-automation",
    category: "ecommerce",
    categoryLabel: "Ecommerce Solutions",
    title: "VibeTech automates e-commerce operations, cutting warehouse overheads by 42%",
    clientName: "VibeTech Electronics",
    niche: "Consumer Tech & Audio Accessories",
    metrics: { label: "Warehouse Overhead", start: "$12,000/mo", end: "$7,000/mo", growth: "-42%" },
    adSpend: "N/A",
    roas: "Operational efficiency focus",
    progress: 78,
    overview: "VibeTech faced high operating costs due to manual packaging queues and inefficient order dispatch tracking. We implemented full e-commerce supply chain automation.",
    challenge: "Delays in shipping out products during sales peaks led to seller penalty tags and reduced buy-box exposure.",
    solution: [
      "Built a custom warehouse management system (WMS) integrated directly with Shopify and Amazon seller central.",
      "Automated automated shipping label generation and courier allocation based on lowest transit times.",
      "Deployed automated WhatsApp order tracking notifications to keep customers informed and reduce support tickets."
    ],
    metricsDetail: {
      primary: "Dispatch Time: Cut from 24 hours to 4 hours",
      secondary: "Customer Support Tickets: Reduced by 68%",
      tertiary: "Order Processing Speed: +300% faster"
    },
    takeaway: "Back-end automation is the unsung hero of e-commerce scaling, keeping operations profitable when sales volume spikes."
  },
  {
    id: 8,
    slug: "pure-herbs-quick-commerce-launch",
    category: "ecommerce",
    categoryLabel: "Ecommerce Solutions",
    title: "PureHerbs Wellness Achieves 30% Market Share on Swiggy Instamart",
    clientName: "PureHerbs Wellness",
    niche: "Natural Health Drinks",
    metrics: { label: "Instamart Market Share", start: "2%", end: "30%", growth: "+1400%" },
    adSpend: "$9,000/mo",
    roas: "4.2x ROAS",
    progress: 89,
    overview: "PureHerbs launched a new range of wellness shots but struggled to gain brick-and-mortar shelf space. We launched them on quick-commerce apps, bypassing traditional retail bottlenecks.",
    challenge: "Customers were unfamiliar with wellness shots, requiring educational touchpoints in a fast-scrolling checkout environment.",
    solution: [
      "Created highly descriptive product titles like 'PureHerbs Immunity Shot - Ginger & Turmeric' rather than abstract brand names.",
      "Launched search ads targeting terms like 'hangover cure,' 'detox,' and 'immunity boost.'",
      "Offered targeted discount bundles to encourage trial conversions."
    ],
    metricsDetail: {
      primary: "Customer Retention Rate: 34% within 90 days",
      secondary: "Ad-Attributed Revenue Contribution: 45%",
      tertiary: "Monthly Sales: Scaled from $4,000 to $55,000"
    },
    takeaway: "Quick-commerce is modern impulse retail; optimizing titles for immediate consumer benefits triggers high impulsive test buys."
  },
  {
    id: 9,
    slug: "decor-deals-flipkart-ppc",
    category: "ecommerce",
    categoryLabel: "Ecommerce Solutions",
    title: "DecorDeals Scales to 5,000+ Orders/mo on Flipkart Home category",
    clientName: "DecorDeals Home",
    niche: "Trendy Home Furnishings",
    metrics: { label: "Monthly Orders", start: "650", end: "5,200", growth: "+700%" },
    adSpend: "$11,500/mo",
    roas: "4.6x ROAS",
    progress: 91,
    overview: "DecorDeals home decor products had high search volumes but suffered from low conversion rates due to generic main images. We overhauled their visual assets and Flipkart ad bidding.",
    challenge: "High competition in the home decor segment leading to rising cost-per-clicks (CPC) on generic keywords.",
    solution: [
      "Rendered custom 3D lifestyle shots showing the products styled in beautiful modern living rooms.",
      "Launched dayparting bidding schedules, raising bids during peak evening home-browsing hours (6 PM - 11 PM).",
      "Targeted competitor brand listings directly with Flipkart product display ads."
    ],
    metricsDetail: {
      primary: "Conversion Rate (CR): Raised from 1.6% to 3.8%",
      secondary: "Ad CTR: Increased from 0.95% to 2.45%",
      tertiary: "PPC Cost Efficiency: -30% lower average CPC"
    },
    takeaway: "In visual categories like home decor, premium lifestyle imagery and contextual competitor-targeting out-perform high keyword bidding."
  },
  {
    id: 10,
    slug: "sole-style-myntra-scaling",
    category: "ecommerce",
    categoryLabel: "Ecommerce Solutions",
    title: "SoleStyle Footwear Achieves $110,000/mo on Myntra Fashion Portal",
    clientName: "SoleStyle Footwear",
    niche: "Casual Footwear & Sneakers",
    metrics: { label: "Myntra Channel Revenue", start: "$15,000/mo", end: "$110,000/mo", growth: "+633%" },
    adSpend: "$16,500/mo",
    roas: "4.3x ROAS",
    progress: 93,
    overview: "SoleStyle footwear struggled to gain momentum on Myntra due to heavy dominance by international brands. We implemented a trend-focused cataloging framework and Myntra PLA ad structure.",
    challenge: "High return rates due to sizing issues and low visibility in Myntra search result grids.",
    solution: [
      "Developed a custom sizing chart widget and visual guidelines to reduce size-related returns.",
      "Participated strategically in Myntra's catalog search indexing boost campaigns.",
      "Utilized Myntra Product Listing Ads (PLA) targeting trending fashion keywords like 'chunky sneakers' and 'white casual shoes.'"
    ],
    metricsDetail: {
      primary: "Return Rate Reduced: from 38% down to 19%",
      secondary: "Conversion Rate Lift: +120%",
      tertiary: "Category Rank: Climbed to top 20 in Men's Casual Shoes"
    },
    takeaway: "Fashion e-commerce requires specialized return-mitigation assets and direct placement positioning on highly trendy keywords."
  },

  // --- PERFORMANCE MARKETING (10 Cases) ---
  {
    id: 11,
    slug: "fintech-lead-generation-dsp",
    category: "performance",
    categoryLabel: "Performance Marketing",
    title: "Fintech Lead Generation: 12,000+ Premium Investor Leads via Meta & Google",
    clientName: "Zenith Capital",
    niche: "Wealth Management & Investing",
    metrics: { label: "Monthly Certified Leads", start: "800", end: "12,200", growth: "+1425%" },
    adSpend: "$48,000/mo",
    roas: "38% CPL Reduction",
    progress: 97,
    overview: "Zenith Capital needed high-net-worth investor leads for their new portfolio fund. We bypassed standard demographics and implemented behavioral and financial interest targeting structures across Meta, Google Search, and LinkedIn DSP.",
    challenge: "High cost-per-lead (CPL) on generic investment terms and a high volume of low-quality, unverified lead inputs.",
    solution: [
      "Created dynamic landing pages with integrated API verification that validated lead phone numbers and financial criteria in real-time.",
      "Built custom audience profiles targeting individuals matching professional criteria like executive job roles and interest in high-tier luxury real estate.",
      "Developed interactive calculator tools as lead magnets ('Calculate Your Wealth Multiplier') to pre-qualify user intent."
    ],
    metricsDetail: {
      primary: "CPL Reduced: from $14.50 down to $8.90",
      secondary: "Lead-to-Meeting Conversion: Lifted by 180%",
      tertiary: "Total Asset Under Management (AUM) Attributed: $8.4M"
    },
    takeaway: "Pre-qualifying lead funnels with verification checks drastically reduces sales waste while lowering CPL on premium products."
  },
  {
    id: 12,
    slug: "d2c-apparel-roas-scaling",
    category: "performance",
    categoryLabel: "Performance Marketing",
    title: "D2C Apparel Brand Scales Daily Ad Spend to $10k/day at a Consistent 4.2x ROAS",
    clientName: "VogueThreads",
    niche: "Direct-to-Consumer Athleisure",
    metrics: { label: "Daily Store Revenue", start: "$4,200", end: "$42,000", growth: "+900%" },
    adSpend: "$10,000/day",
    roas: "4.2x ROAS",
    progress: 96,
    overview: "VogueThreads struggled to scale their Meta and Google campaigns past $1,000/day without ROAS crashing. We built a systematic creative testing pipeline and full-funnel custom audience retention setup.",
    challenge: "Severe ad fatigue within 4 days of creative launch and highly unstable performance spikes due to poor account structure.",
    solution: [
      "Consolidated account structures into broad targeting campaigns, letting the Meta machine learning algorithm optimize delivery.",
      "Launched a weekly creative testing pipeline, producing and launching 12 custom UGC video hook variations every Monday.",
      "Deployed automated Google Performance Max (PMax) campaigns with optimized video and shopping asset feeds."
    ],
    metricsDetail: {
      primary: "Scale Achieved: Scaled monthly ad spend from $30k to $300k",
      secondary: "Blended ROAS: Maintained at 4.2x (was 1.9x)",
      tertiary: "First-time Customer Acquisition Rate: +140%"
    },
    takeaway: "Scaling ad budget without performance dropping requires consolidated broad targeting campaigns and massive creative testing volume."
  },
  {
    id: 13,
    slug: "saas-inbound-google-ads",
    category: "performance",
    categoryLabel: "Performance Marketing",
    title: "B2B SaaS Portal Scales Demo Signups by 340% on Google Search Ads",
    clientName: "TaskFlow Systems",
    niche: "Enterprise Task Management Software",
    metrics: { label: "Monthly Demo Bookings", start: "80", end: "352", growth: "+340%" },
    adSpend: "$18,000/mo",
    roas: "35% Acquisition Cost Saving",
    progress: 92,
    overview: "TaskFlow's Google search ads were matching high-volume consumer queries, draining budget. We restructured their keyword bidding and built a friction-optimized conversion funnel.",
    challenge: "High cost-per-acquisition (CPA) on broad terms and low click-to-lead conversion rates on task software search queries.",
    solution: [
      "Transitioned account from broad matches to strictly controlled exact and phrase matches.",
      "Developed high-converting direct-response landing pages showcasing core software interface features and testimonials.",
      "Integrated HubSpot conversion trackers to feed offline conversion value data back to Google's smart bidding engine."
    ],
    metricsDetail: {
      primary: "CPA Reduced: from $120 to $78",
      secondary: "Landing Page Conversion Rate: Raised from 2.1% to 7.9%",
      tertiary: "Sales Qualified Lead (SQL) Conversion: +65%"
    },
    takeaway: "Feeding offline sales closing data back to ad networks teaches bidding algorithms to hunt for real buyers instead of window shoppers."
  },
  {
    id: 14,
    slug: "fintech-app-install-scale",
    category: "performance",
    categoryLabel: "Performance Marketing",
    title: "Fintech Mobile App Scales to 150k Installs under $0.85 Cost Per Install",
    clientName: "PaySplit App",
    niche: "Mobile Peer-to-Peer Payments",
    metrics: { label: "App Installs", start: "12,000", end: "150,000", growth: "+1150%" },
    adSpend: "$35,000/mo",
    roas: "CPI Reduced to $0.78",
    progress: 94,
    overview: "PaySplit wanted to scale their app install base in urban areas. We ran hyper-targeted mobile app install campaigns across Meta, TikTok, and Google App Campaigns (UAC) with engaging kinetic typography creatives.",
    challenge: "Low app retention rates and high post-install churn within the first 7 days.",
    solution: [
      "Optimized Google App Campaigns targeting 'in-app actions' (completing first split transaction) instead of simple install volume.",
      "Produced relatable short-form vertical videos demonstrating split bill struggles in restaurants.",
      "Deployed custom in-app push messages triggered by deep-links in ad creatives."
    ],
    metricsDetail: {
      primary: "Average CPI Achieved: $0.78 (was $1.90)",
      secondary: "7-Day App Retention Rate: Boosted from 14% to 41%",
      tertiary: "Cost Per Active User: Reduced by 58%"
    },
    takeaway: "App campaigns should optimize for down-funnel retention actions rather than cheap initial installs to drive real business value."
  },
  {
    id: 15,
    slug: "real-estate-facebook-ads",
    category: "performance",
    categoryLabel: "Performance Marketing",
    title: "Luxury Real Estate Developer Secures $14M in Bookings in 90 Days",
    clientName: "Vertex Residencies",
    niche: "Luxury Apartments & Villas",
    metrics: { label: "Attributed Bookings", start: "$0", end: "$14,000,000", growth: "New Launch" },
    adSpend: "$25,000 total",
    roas: "560x ad spend return",
    progress: 98,
    overview: "Vertex launched a high-end luxury villa project and needed wealthy property buyers. We bypassed generic interest target lists and launched an immersive video campaign targeted at high-net-worth individuals.",
    challenge: "Broad real estate interest lists attracted looky-loos and real estate agents rather than genuine wealthy buyers.",
    solution: [
      "Produced cinematic first-person walk-through drone videos showcasing luxury architectural elements.",
      "Created multi-page lead forms asking specific financial and timeline readiness questions.",
      "Set up dynamic remarketing ads showing villa floor plans and payment timelines to high-intent video viewers."
    ],
    metricsDetail: {
      primary: "Qualified Buyer Leads: 420 validated contacts",
      secondary: "Lead Verification Rate: 89% correct contact data",
      tertiary: "Property Bookings Closed: 11 luxury units in 90 days"
    },
    takeaway: "Premium real estate ads require cinematic video hooks and rigorous form qualifiers to weed out unqualified leads."
  },
  {
    id: 16,
    slug: "b2b-logistics-linkedin-ads",
    category: "performance",
    categoryLabel: "Performance Marketing",
    title: "B2B Logistics Giant Drives +210% Enterprise Contracts on LinkedIn Ads",
    clientName: "Global Link Logistics",
    niche: "Commercial Freight & Logistics",
    metrics: { label: "Enterprise Inquiries", start: "14/mo", end: "43/mo", growth: "+210%" },
    adSpend: "$15,000/mo",
    roas: "High-ticket enterprise focus",
    progress: 82,
    overview: "Global Link struggled to reach chief supply chain officers through search marketing. We executed a highly targeted account-based marketing (ABM) campaign on LinkedIn DSP.",
    challenge: "Extremely long sales cycles and a very small pool of high-value corporate decision makers.",
    solution: [
      "Exported target company lists containing the top 500 manufacturing corporations and uploaded them as custom audiences.",
      "Launched LinkedIn conversation ads sending personalized messages from Global Link's VP directly to supply managers.",
      "Sponsored downloadable whitepapers detailing commercial supply chain optimization."
    ],
    metricsDetail: {
      primary: "Lead Form Conversion Rate: 8.4% on LinkedIn",
      secondary: "Average Contract Value (ACV) Won: $1.2M",
      tertiary: "Cost Per Account Connection: Reduced by 34%"
    },
    takeaway: "LinkedIn account-based marketing (ABM) targeting is highly effective for long-cycle high-ticket B2B operations."
  },
  {
    id: 17,
    slug: "dental-clinic-local-meta-ads",
    category: "performance",
    categoryLabel: "Performance Marketing",
    title: "Multi-Location Dental Clinic Scales Monthly Patients by 180%",
    clientName: "Apex Dental Care",
    niche: "Local Dental & Orthodontic Clinics",
    metrics: { label: "New Patient Checkups", start: "120/mo", end: "336/mo", growth: "+180%" },
    adSpend: "$6,000/mo",
    roas: "3.8x ROI on treatments",
    progress: 81,
    overview: "Apex Dental wanted to fill open appointment slots across their 4 suburban clinic locations. We deployed local geofenced campaigns offering free dental checkups as a high-conversion hook.",
    challenge: "Low local search share and highly competitive local ad bids on Google dental keywords.",
    solution: [
      "Geofenced ad campaigns targeting residents living within a strict 3-mile radius of each clinic address.",
      "Offered an attractive entry-level checkup bundle to lower user resistance.",
      "Implemented a direct-booking scheduling widget integrated with clinic calendar systems."
    ],
    metricsDetail: {
      primary: "Cost Per Booking: $18.50 average",
      secondary: "Lead-to-Show-up Rate: 76% patient show-up",
      tertiary: "Lifetime Value (LTV) Attributed: $185,000"
    },
    takeaway: "Local brick-and-mortar marketing relies on geofenced radius targeting combined with friction-free calendar booking workflows."
  },
  {
    id: 18,
    slug: "b2b-saas-retargeting-pipeline",
    category: "performance",
    categoryLabel: "Performance Marketing",
    title: "B2B HR SaaS Cuts Trial-to-Paid Churn by 48% via Multi-Channel Retargeting",
    clientName: "TalentGrid SaaS",
    niche: "Human Resource & Payroll SaaS",
    metrics: { label: "Trial-to-Paid Conversions", start: "4.2%", end: "8.1%", growth: "+92% conversion lift" },
    adSpend: "$8,500/mo",
    roas: "6.2x LTV/CAC Ratio",
    progress: 87,
    overview: "TalentGrid registered thousands of free trial signups but struggled to convert them into paying subscribers. We launched a multi-channel retargeting campaign highlighting core product walkthroughs.",
    challenge: "Trial users forgot about the software within 3 days, leading to high trial abandonment and poor close rates.",
    solution: [
      "Created a retargeting audience segment of active free-trial users who hadn't logged in for 48 hours.",
      "Served educational Google Display and Meta carousel ads showing short 15-second product guides.",
      "Offered limited-time onboarding incentives during the final 3 days of the trial period."
    ],
    metricsDetail: {
      primary: "Trial-to-Paid Conversion Rate: Boosted to 8.1%",
      secondary: "Customer Acquisition Cost (CAC): Reduced by 28%",
      tertiary: "Trial Churn Rate: Cut by nearly half"
    },
    takeaway: "Remarketing shouldn't just pitch discounts; serving helpful walkthroughs during trial periods speeds up user onboarding."
  },
  {
    id: 19,
    slug: "gym-membership-leadgen",
    category: "performance",
    categoryLabel: "Performance Marketing",
    title: "Elite Fitness Club Scales Monthly Memberships by 220% in Under 60 Days",
    clientName: "IronHaven Gym",
    niche: "Premium Gyms & Health Clubs",
    metrics: { label: "New Member Signups", start: "45/mo", end: "144/mo", growth: "+220%" },
    adSpend: "$4,500/mo",
    roas: "4.2x ROI on annual plans",
    progress: 83,
    overview: "IronHaven Gym had high-end equipment but low local brand awareness. We created high-energy video creatives showcasing their group classes and launched local lead ads.",
    challenge: "Traditional lead ads generated fake phone numbers and high CPA on generic fitness terms.",
    solution: [
      "Produced fast-paced visual video reels featuring local trainers and members in action.",
      "Switched to Facebook instant lead forms with built-in email and phone format validation checks.",
      "Offered a free 3-day guest pass redeemable via dynamic QR codes texted instantly upon signup."
    ],
    metricsDetail: {
      primary: "Cost Per Qualified Lead: $5.20 average",
      secondary: "Guest Pass Activation Rate: 58% pass activation",
      tertiary: "Annual Gym Memberships Closed: 92 memberships"
    },
    takeaway: "High-energy localized visual reels paired with verified mobile number codes drive massive foot traffic to local businesses."
  },
  {
    id: 20,
    slug: "travel-portal-search-ads",
    category: "performance",
    categoryLabel: "Performance Marketing",
    title: "Luxury Travel Portal Achieves 6.8x ROAS on International Tour Bookings",
    clientName: "Wanderlust Safaris",
    niche: "Luxury Curated Travel Packages",
    metrics: { label: "Monthly Tour Bookings", start: "$35,000/mo", end: "$238,000/mo", growth: "+580%" },
    adSpend: "$14,000/mo",
    roas: "6.8x ROAS",
    progress: 95,
    overview: "Wanderlust Safaris wanted to drive tour packages to affluent clients. We launched highly targeted Google Search campaigns and Meta dynamic catalog ads displaying curated travel destinations.",
    challenge: "High cost-per-click on travel keywords and a very long purchase consideration window (avg. 45 days).",
    solution: [
      "Designed elegant landing pages with custom itinerary builder guides.",
      "Built Google Search ad structures matching specific search intents like 'luxury private safaris Kenya.'",
      "Deployed a 45-day sequential retargeting loop showing customer reviews, luxury amenities, and itinerary previews."
    ],
    metricsDetail: {
      primary: "Blended Return on Ad Spend: 6.8x ROAS",
      secondary: "Cost Per Lead: Reduced from $65 to $22",
      tertiary: "Total Attributed Bookings: $950,000 in 6 months"
    },
    takeaway: "High-ticket purchases with long consideration windows require long, structured remarketing sequences to build brand trust."
  },

  // --- WEBSITE & DEVELOPMENTS (8 Cases) ---
  {
    id: 21,
    slug: "headless-shopify-storefront-speed",
    category: "webdev",
    categoryLabel: "Website & Developments",
    title: "Re-Engineering a Custom Shopify Storefront: Reducing Load Times to 0.8 Seconds",
    clientName: "Luxe Thread co",
    niche: "Premium Apparel eCommerce",
    metrics: { label: "Mobile Page Load Speed", start: "4.2 seconds", end: "0.8 seconds", growth: "-80% Load Time" },
    adSpend: "N/A",
    roas: "+216% Conversion Increase",
    progress: 98,
    overview: "Luxe Thread co's e-commerce store suffered from high bounce rates due to a slow Shopify template with excessive app scripts. We rebuilt their storefront as a headless Shopify setup using Next.js and optimized Tailwind styling.",
    challenge: "Slow mobile load speed, bad mobile layout responsiveness, and poor Core Web Vitals rankings that limited organic search growth.",
    solution: [
      "Decoupled the front-end layout from the Shopify backend using Shopify's Storefront API.",
      "Developed a custom React/Next.js storefront hosted on fast global edge networks.",
      "Optimized and compressed all visual assets, loading images lazily and deferring unnecessary scripts.",
      "Designed a sleek, glassmorphic UI matching modern design standards with micro-interactions."
    ],
    metricsDetail: {
      primary: "Page Speed Score: Boosted from 31 to 98/100",
      secondary: "E-commerce Conversion Rate: Climbed from 1.2% to 3.8%",
      tertiary: "Organic Mobile Traffic: Increased by 112%"
    },
    takeaway: "Decoupling your storefront front-end from backend databases allows you to build incredibly fast, custom storefronts that double conversion rates."
  },
  {
    id: 22,
    slug: "react-corporate-portal",
    category: "webdev",
    categoryLabel: "Website & Developments",
    title: "Next.js Corporate Website Rebuild Drives 140% Lead Generation Lift",
    clientName: "Aegis Security Group",
    niche: "Enterprise Cybersecurity Firm",
    metrics: { label: "Monthly Contact Submissions", start: "65", end: "156", growth: "+140%" },
    adSpend: "N/A",
    roas: "High-performance framework",
    progress: 86,
    overview: "Aegis Security had an outdated website that failed to convey their technological expertise. We built a fast, interactive Next.js corporate portal with smooth scroll transitions and clean technical animations.",
    challenge: "High bounce rates on key services pages and low lead form submissions due to confusing user paths.",
    solution: [
      "Architected clean, modern user journeys dividing enterprise services into intuitive segments.",
      "Developed interactive cyber-threat visualization tools as lead capture assets.",
      "Implemented server-side rendering (SSR) for instant subpage loading."
    ],
    metricsDetail: {
      primary: "Bounce Rate Reduced: from 58% down to 24%",
      secondary: "Average Session Duration: Raised by 130%",
      tertiary: "Form Click-Through Rate: Boosted to 4.2%"
    },
    takeaway: "B2B enterprise websites must match the technical quality of the business to build trust with corporate decision makers."
  },
  {
    id: 23,
    slug: "agency-client-dashboard",
    category: "webdev",
    categoryLabel: "Website & Developments",
    title: "Custom SaaS Dashboard Cuts Customer Support Overhead by 55%",
    clientName: "ScaleUp Agency Group",
    niche: "Enterprise Professional Services",
    metrics: { label: "Support Tickets Filed", start: "450/mo", end: "202/mo", growth: "-55%" },
    adSpend: "N/A",
    roas: "Operational efficiency lift",
    progress: 89,
    overview: "ScaleUp Agency managed thousands of campaigns but faced high support ticket volumes due to manual status updates. We built a custom client portal displaying real-time campaign statistics.",
    challenge: "Clients filed high volumes of support tickets requesting campaign progress sheets, status tracking, and file downloads.",
    solution: [
      "Developed a custom React dashboard integrated directly with campaign management databases.",
      "Built automated status tracking grids and downloadable file repositories.",
      "Implemented a secure user authentication system with strict permissions structures."
    ],
    metricsDetail: {
      primary: "Client Retention Rate: Lifted by 18%",
      secondary: "Average Support Response Time: Reduced by 60%",
      tertiary: "Active Portal Adoption: 92% active clients"
    },
    takeaway: "Empowering customers with transparent self-service dashboards dramatically reduces support overhead while driving loyalty."
  },
  {
    id: 24,
    slug: "dental-clinic-optimized-landing-page",
    category: "webdev",
    categoryLabel: "Website & Developments",
    title: "Sleek Medical Landing Page Overhaul Boosts Conversions by 180%",
    clientName: "Smile Dental Group",
    niche: "Cosmetic Dentistry Clinics",
    metrics: { label: "Appointment Inquiries", start: "40/mo", end: "112/mo", growth: "+180%" },
    adSpend: "$3,000/mo (ad traffic)",
    roas: "3.7x ROAS treatment bookings",
    progress: 84,
    overview: "Smile Dental had high ad clicks but low appointment bookings due to a cluttered medical site. We designed a clean, conversions-focused landing page showcasing beautiful before/after results.",
    challenge: "Cluttered layouts and a lack of direct call-to-actions resulted in a low 1.8% conversion rate on Google search ad clicks.",
    solution: [
      "Designed a clean layout with prominent booking buttons, patient reviews, and simple forms.",
      "Showcased high-contrast before/after treatment transformations in a beautiful interactive slider.",
      "Optimized the page speed to load in under 1 second on mobile devices."
    ],
    metricsDetail: {
      primary: "Conversion Rate (CR): Raised from 1.8% to 5.0%",
      secondary: "Ad Clicks-to-Booking Speed: Cut in half",
      tertiary: "Mobile Bounce Rate: Slashed from 65% down to 28%"
    },
    takeaway: "Clean layouts focused on visual proof and simple call-to-actions out-convert complex websites in medical categories."
  },
  {
    id: 25,
    slug: "laravel-saas-billing-dashboard",
    category: "webdev",
    categoryLabel: "Website & Developments",
    title: "Laravel SaaS Billing Portal Automates Payments for 10k Users",
    clientName: "SaaSify Tech",
    niche: "Enterprise Software Billing Solutions",
    metrics: { label: "Manual Invoicing Overhead", start: "14 hours/week", end: "0 hours/week", growth: "-100% Manual Effort" },
    adSpend: "N/A",
    roas: "Operational scaling focus",
    progress: 79,
    overview: "SaaSify manually generated hundreds of custom corporate invoices every month. We built a Laravel-based automated billing dashboard with integrated Stripe and card payment gateways.",
    challenge: "High manual billing errors, delayed payments, and lack of customer self-service invoice downloads.",
    solution: [
      "Built a secure Laravel billing platform integrated with Stripe subscription billing engine.",
      "Developed a client portal where users can update payment cards, download invoices, and upgrade plans.",
      "Created automated email notification flows for card declines and billing alerts."
    ],
    metricsDetail: {
      primary: "Payment Failures Resolved: Reduced by 74%",
      secondary: "Invoice Generation Errors: Slashed to 0",
      tertiary: "Billing Portal Customer Adoption: 98%"
    },
    takeaway: "Automating subscription billing workflows prevents revenue leaks and frees up massive operational team capacity."
  },
  {
    id: 26,
    slug: "designer-portfolio-website",
    category: "webdev",
    categoryLabel: "Website & Developments",
    title: "Interior Design Portfolio Site Rebuild Secures +220% Direct Inquiries",
    clientName: "DecoSpace Studio",
    niche: "Luxury Interior Design Studio",
    metrics: { label: "Monthly High-Ticket Leads", start: "8", end: "25", growth: "+212%" },
    adSpend: "N/A",
    roas: "Brand positioning lift",
    progress: 88,
    overview: "DecoSpace had a basic, template-based portfolio website that failed to reflect their design standards. We built a highly aesthetic portfolio website with immersive full-screen grids and interactive showcase carousels.",
    challenge: "Low-quality client inquiries and poor page load performance on high-resolution image galleries.",
    solution: [
      "Developed a custom high-performance image optimization grid that pre-renders lightweight thumbnails and lazy-loads heavy images.",
      "Curated a premium typography hierarchy using elegant Google Fonts ('Outfit' and 'Inter').",
      "Integrated a simple visual questionnaire to qualify luxury project budgets during lead submission."
    ],
    metricsDetail: {
      primary: "Average Lead Budget Value: Raised by 140%",
      secondary: "Average Page Loading Time: Cut from 5.4s down to 1.1s",
      tertiary: "Image Gallery Bounce Rate: Reduced by 65%"
    },
    takeaway: "A highly aesthetic layout paired with visual speed is critical to position your business for luxury clients."
  },
  {
    id: 27,
    slug: "real-estate-lead-capture-landing-page",
    category: "webdev",
    categoryLabel: "Website & Developments",
    title: "Real Estate Property Page Re-engineering Drives +190% Lead Signups",
    clientName: "Horizon Properties",
    niche: "Premium Real Estate Brokerage",
    metrics: { label: "Property Lead Signups", start: "140/mo", end: "406/mo", growth: "+190%" },
    adSpend: "$5,000/mo (ad traffic)",
    roas: "4.8x ROI on ad spend",
    progress: 83,
    overview: "Horizon Properties' property listings page had a slow load speed, leading to high ad click bounces. We re-engineered the landing pages with optimized maps and visual asset delivery frameworks.",
    challenge: "Heavy imagery and interactive maps caused slow mobile loading, resulting in a high 4.2-second load delay.",
    solution: [
      "Deferred interactive Map integrations to only load after critical visual assets are displayed.",
      "Optimized property images into next-gen webp formats.",
      "Built clean, prominent contact sticky buttons for mobile screens."
    ],
    metricsDetail: {
      primary: "Page Speed Optimized: Mobile load under 1.2s",
      secondary: "Mobile Bounce Rate: Slashed from 58% down to 22%",
      tertiary: "Average Contact Inquiries: +190% higher"
    },
    takeaway: "Deferred loading of heavy scripts like interactive maps keeps pages snappy, preventing user drop-off on ads."
  },
  {
    id: 28,
    slug: "custom-membership-platform",
    category: "webdev",
    categoryLabel: "Website & Developments",
    title: "Custom Educational Platform Scales to 15,000 Active Members",
    clientName: "SkillHub Academy",
    niche: "Online Learning & Certifications",
    metrics: { label: "Active Student Portal Accounts", start: "2,500", end: "15,200", growth: "+508%" },
    adSpend: "N/A",
    roas: "Scalable tech framework",
    progress: 92,
    overview: "SkillHub used multiple disconnected learning plugins that crashed under peak user loads. We built a unified custom learning management platform (LMS) with scalable database architecture.",
    challenge: "Database slowdowns during video streaming spikes and user complaints regarding billing setup.",
    solution: [
      "Built a custom React and Node.js portal with separate database architecture.",
      "Implemented fast global CDN integrations for video streaming distribution.",
      "Integrated automated learning tracking grids and certificate generation triggers."
    ],
    metricsDetail: {
      primary: "Database Slowdowns: Slashed to 0",
      secondary: "Monthly Operating Cost: Reduced by 38%",
      tertiary: "Student Portal Engagement Score: +115%"
    },
    takeaway: "Unified custom database architecture scales securely without the performance limits of templates."
  },

  // --- SEO OPTIMIZATION (8 Cases) ---
  {
    id: 29,
    slug: "programmatic-seo-directory-scaling",
    category: "seo",
    categoryLabel: "SEO Optimization",
    title: "Programmatic SEO: Scaling Directory Traffic from 12k to 140k Monthly Visits",
    clientName: "HomePro Finder",
    niche: "Local Business Directory Portal",
    metrics: { label: "Monthly Organic Visits", start: "12,000", end: "140,000", growth: "+1066%" },
    adSpend: "Zero Ad Spend (SEO)",
    roas: "Organic Traffic Compounding",
    progress: 97,
    overview: "HomePro Finder wanted to rank for thousands of local home service keywords. Instead of writing pages manually, we built a database-driven programmatic SEO engine that generated 12,000 highly structured local search pages.",
    challenge: "Low crawl budgets, indexing blocks due to thin duplicate pages, and manual template generation limits.",
    solution: [
      "Designed a dynamic, high-performance database page template containing structured JSON-LD local schema.",
      "Deployed a programmatic page generator mapping service + location keywords (e.g., 'plumbers in Dallas').",
      "Automated internal linking grids to distribute site authority to programmatic subpages efficiently.",
      "Optimized Core Web Vitals across all generated pages to ensure high search ranking signals."
    ],
    metricsDetail: {
      primary: "Google Indexation Rate: Raised to 94% on programmatic pages",
      secondary: "Monthly Organic Lead Value: Equivalent to $35k/mo PPC ad budget",
      tertiary: "Top 3 Organic Search Results: 1,800+ local terms"
    },
    takeaway: "Programmatic SEO combined with clean structured schema and automated internal linking is the ultimate strategy to scale organic visibility."
  },
  {
    id: 30,
    slug: "saas-blog-inbound-engine",
    category: "seo",
    categoryLabel: "SEO Optimization",
    title: "SaaS Blog Inbound Engine Scales Inquiries by 240% in 120 Days",
    clientName: "DocuSign Pro",
    niche: "Enterprise Document Security Software",
    metrics: { label: "Organic Monthly Leads", start: "80", end: "272", growth: "+240%" },
    adSpend: "N/A",
    roas: "Compounding SEO asset value",
    progress: 89,
    overview: "DocuSign Pro had a product page that failed to attract organic traffic. We designed a content marketing engine targeted at transactional search terms and scaled their search rankings.",
    challenge: "High competitive keyword difficulty and poor conversion rates on informational blog posts.",
    solution: [
      "Conducted a comprehensive gap analysis targeting low-competition search phrases with high buyer intent.",
      "Published 48 high-quality, long-form guide variations answering specific operational security questions.",
      "Integrated smart middle-of-funnel lead capture widgets offering free document checklists."
    ],
    metricsDetail: {
      primary: "Organic Keyword Positions (Top 10): +380 keywords",
      secondary: "Inbound Lead Conversion Rate: Raised to 3.4%",
      tertiary: "Organic Site Authority (DR): Climbed from 24 to 45"
    },
    takeaway: "SEO isn't just about traffic; targeting transactional keywords and integrating lead magnets turns readers into buyers."
  },
  {
    id: 31,
    slug: "local-map-pack-positioning",
    category: "seo",
    categoryLabel: "SEO Optimization",
    title: "Local HVAC Service Business Secures #1 Map Pack Spot, Boosting Calls by 190%",
    clientName: "Apex Cooling Systems",
    niche: "Local Air Conditioning & Heating",
    metrics: { label: "Local Phone Inquiries", start: "45/mo", end: "130/mo", growth: "+188%" },
    adSpend: "N/A",
    roas: "Organic local map dominance",
    progress: 84,
    overview: "Apex Cooling systems was hidden below competitors on Google Maps search results. We executed local citation optimization and restructured their Google Business profile signals.",
    challenge: "Low local map pack rankings in highly populated suburban regions and lack of structured local reviews.",
    solution: [
      "Cleaned up listing citations across 150+ online directories, ensuring Name, Address, and Phone (NAP) consistency.",
      "Implemented a customer review request pipeline integrated with service dispatch SMS.",
      "Optimized Google Business category structures and published localized content posts daily."
    ],
    metricsDetail: {
      primary: "Google Map Pack Rank: Climbed from #11 to #1 spot",
      secondary: "Direct Map Direction Actions: Raised by 150%",
      tertiary: "Organic Lead Acquisition Cost: Slashed to $0"
    },
    takeaway: "Local map rankings rely on NAP consistency, directory citations, and a steady stream of positive local reviews."
  },
  {
    id: 32,
    slug: "structural-link-migration",
    category: "seo",
    categoryLabel: "SEO Optimization",
    title: "Enterprise Site Migration Retains 100% Traffic & Gains +45% organic visibility",
    clientName: "Vanguard Retail",
    niche: "Large Scale Furniture Retailer",
    metrics: { label: "Post-Migration Organic Traffic", start: "320,000/mo", end: "464,000/mo", growth: "+45%" },
    adSpend: "N/A",
    roas: "Zero traffic loss migration",
    progress: 93,
    overview: "Vanguard planned to migrate their corporate domain and restructuring 5,000 product URLs. We designed a search-safe URL mapping and 301 redirection blueprint that prevented traffic loss.",
    challenge: "High risk of indexation loss, broken internal link maps, and search rank drops during restructuring.",
    solution: [
      "Built a complete URL structural redirect map matching old product parameters with new clean paths.",
      "Audited and cleaned up all internal links to prevent redirect chains.",
      "Monitored Google Search Console crawl budget indicators daily post-launch."
    ],
    metricsDetail: {
      primary: "Search Rank Indexation Retention: 100% maintained",
      secondary: "Redirect Crawl Errors: Slashed to zero",
      tertiary: "Page Indexing Speed: +40% faster on new domain"
    },
    takeaway: "Restructuring enterprise sites requires planning redirectional maps down to individual URL parameters to protect traffic."
  },
  {
    id: 33,
    slug: "page-speed-core-web-vitals",
    category: "seo",
    categoryLabel: "SEO Optimization",
    title: "E-commerce Site Core Web Vitals Optimization Drives +40% Organic Traffic Lift",
    clientName: "TrendStudio Fashion",
    niche: "Direct-to-Consumer Shoe Brand",
    metrics: { label: "Organic Monthly Traffic", start: "55,000", end: "77,000", growth: "+40%" },
    adSpend: "N/A",
    roas: "+34% Conversion Lift",
    progress: 86,
    overview: "TrendStudio suffered from bad mobile rankings due to poor Google Core Web Vitals scores. We optimized code structures, image assets, and script loading schedules, lifting search positions.",
    challenge: "Slow Largest Contentful Paint (LCP) and high Cumulative Layout Shift (CLS) on product grids.",
    solution: [
      "Optimized layout dimensions to eliminate layout shifts when visual banners load.",
      "Deferred non-critical JavaScript execution until after main product grids are fully interactive.",
      "Compressed product images into lightweight modern formats."
    ],
    metricsDetail: {
      primary: "LCP Load Speed: Cut from 4.5s to 1.4s",
      secondary: "Google PageSpeed Mobile Score: Raised from 24 to 88/100",
      tertiary: "Organic Search CTR: Increased by 18%"
    },
    takeaway: "Google actively rewards fast-loading mobile pages; fixing Core Web Vitals directly raises your keyword positions."
  },
  {
    id: 34,
    slug: "ecommerce-brand-category-boost",
    category: "seo",
    categoryLabel: "SEO Optimization",
    title: "D2C Cosmetics Brand Achieves Rank #1 for Top Category Search terms",
    clientName: "OrganicGlow",
    niche: "Natural Makeup Products",
    metrics: { label: "Organic Category Sales", start: "$5,000/mo", end: "$32,000/mo", growth: "+540%" },
    adSpend: "N/A",
    roas: "Highly sustainable organic growth",
    progress: 91,
    overview: "OrganicGlow's product category pages were buried behind huge retail portals. We built an advanced topical authority link grid and targeted e-commerce category pages, bypassing giant competitors.",
    challenge: "High competitor domain authority scores and low direct ranking positions on key cosmetics categories.",
    solution: [
      "Restructured site hierarchy into clean silo hubs grouping product types logically.",
      "Developed comprehensive buyer guide content targeting category searches.",
      "Deployed high-quality, relevant editorial backlinks pointing to specific collection pages."
    ],
    metricsDetail: {
      primary: "Target Category Rankings: Climbed from #28 to #1 spot",
      secondary: "Organic Keyword Volume (Top 3): +140 terms",
      tertiary: "Organic Category Traffic: Lifted by 310%"
    },
    takeaway: "To beat retail giants on category terms, structure clean collection silos and support them with informative guide pages."
  },
  {
    id: 35,
    slug: "organic-site-recovery-core-update",
    category: "seo",
    categoryLabel: "SEO Optimization",
    title: "SaaS Website Recovers 100% Traffic Post Google Core Update Drop",
    clientName: "SecureFile Tech",
    niche: "Cloud Document Security Platforms",
    metrics: { label: "Daily Organic Visits", start: "2,200", end: "4,900", growth: "+122% recovery lift" },
    adSpend: "N/A",
    roas: "Search traffic recovery focus",
    progress: 88,
    overview: "SecureFile's search traffic dropped by 50% following a major Google core search update. We executed a complete E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) content overhaul and technical site audit.",
    challenge: "Low site quality indicators and unverified author profiles triggered indexing demotions during the update.",
    solution: [
      "Reviewed and updated outdated blog articles, adding unique data insights and updated developer sources.",
      "Built comprehensive author bio profiles detailing the professional certifications of content writers.",
      "Pruned low-quality duplicate pages and resolved internal indexation issues."
    ],
    metricsDetail: {
      primary: "Organic Traffic Recovered: 100% restored in 90 days",
      secondary: "Low Quality Pages Pruned: Slashed 30% fluff content",
      tertiary: "Average Search Ranking Position: Improved by 6 spots"
    },
    takeaway: "Recovering from core updates requires purging outdated low-value content and demonstrating absolute author authority."
  },
  {
    id: 36,
    slug: "multilingual-translation-indexing",
    category: "seo",
    categoryLabel: "SEO Optimization",
    title: "B2B Manufacturer Scales Global Traffic by +190% via Multilingual SEO",
    clientName: "OmniTech Parts",
    niche: "Industrial Machinery Manufacturer",
    metrics: { label: "Global Organic Sessions", start: "24,000/mo", end: "69,600/mo", growth: "+190%" },
    adSpend: "N/A",
    roas: "Global organic expansion",
    progress: 90,
    overview: "OmniTech wanted to attract industrial buyers across Europe and South America. We launched dynamic multilingual versions of their site and optimized search tags for regional terms.",
    challenge: "Confusing duplicate content flags from search engines and bad indexing across localized country domains.",
    solution: [
      "Implemented correct hreflang HTML tags directing search crawlers to specific language page variations.",
      "Developed high-quality, professional translations of technical product catalog listings.",
      "Built local backlinks from targeted international directory resources."
    ],
    metricsDetail: {
      primary: "Localized Rankings (Europe): +80% higher visibility",
      secondary: "International Leads Captured: Raised by 140%",
      tertiary: "Google Crawl Efficiency Score: +85%"
    },
    takeaway: "Hreflang validation and professional translation are the foundation of scaling organic search traffic internationally."
  },

  // --- MARKETING CREATIVE & UGC (7 Cases) ---
  {
    id: 37,
    slug: "fashion-ugc-meta-ads-scale",
    category: "creative",
    categoryLabel: "Marketing Creative",
    title: "Overhauling Ad Creatives: Boosting Thumb-Stop Hook Ratios to 48% on Meta",
    clientName: "Stella & Co",
    niche: "Direct-to-Consumer Fashion Accessories",
    metrics: { label: "Thumb-Stop Hook Ratio", start: "14%", end: "48%", growth: "+242% Engagement" },
    adSpend: "$16,000/mo",
    roas: "3.2x ROAS Scaling",
    progress: 94,
    overview: "Stella & Co's ad spend had stagnant ROAS because their Meta creatives looked like traditional TV ads. We restructured their creative strategy, producing raw UGC video hooks that fit native social feeds.",
    challenge: "High cost-per-click (CPC) rates and immediate user scrolling on the first 3 seconds of ad creatives.",
    solution: [
      "Launched a custom UGC network to produce real, relatable product application videos.",
      "Tested 8 different 3-second hook variations (e.g., text bubbles, unexpected actions, close-up product reveals).",
      "Created dynamic advertorial layouts combining customer review speech bubbles with product application overlays."
    ],
    metricsDetail: {
      primary: "Thumb-Stop Hook Ratio (3s view): Climbed to 48%",
      secondary: "Meta Ads Outbound CTR: Boosted from 0.7% to 2.2%",
      tertiary: "Cost Per Purchase: Reduced by 34%"
    },
    takeaway: "Ads that don't look like ads outperform polished commercials by blending into native organic feeds."
  },
  {
    id: 38,
    slug: "scroll-stopper-3d-animation",
    category: "creative",
    categoryLabel: "Marketing Creative",
    title: "Cinematic 3D Product Animations Drive 4.5x ROAS for Consumer Electronics Brand",
    clientName: "VoltCharge co",
    niche: "Premium Wireless Chargers",
    metrics: { label: "Creative Attribution ROAS", start: "2.1x", end: "4.5x", growth: "+114% ROAS Increase" },
    adSpend: "$25,000/mo",
    roas: "4.5x ROAS",
    progress: 91,
    overview: "VoltCharge wanted to showcase their multi-charger technology in action. We rendered premium 3D exploded-view animations explaining their interior layout and speed distribution features.",
    challenge: "Customers found standard static images confusing, leading to high return rates and low buyer confidence.",
    solution: [
      "Rendered custom 3D animations showcasing the internal charging coils and magnetic snap technology.",
      "Launched visual comparison ads directly pitting VoltCharge against standard slow charging cables.",
      "Optimized 3D animations into fast-loading GIF and lightweight HTML formats."
    ],
    metricsDetail: {
      primary: "Average Watch Time: Boosted by 150%",
      secondary: "Ad Clicks Outbound: Increased by 88%",
      tertiary: "Return Rate Reduction: -40% lower returns"
    },
    takeaway: "Using 3D exploded views to explain premium product features visually speeds up buyer trust and cuts return rates."
  },
  {
    id: 39,
    slug: "copy-overhaul-landing-page",
    category: "creative",
    categoryLabel: "Marketing Creative",
    title: "Landing Page Copywriting Overhaul Lift Conversions by +160%",
    clientName: "FitLife Supplements",
    niche: "Natural Fitness Nutrition",
    metrics: { label: "Landing Page Conversion Rate", start: "1.5%", end: "3.9%", growth: "+160% Conversion Lift" },
    adSpend: "$8,000/mo (ad traffic)",
    roas: "3.5x ROAS direct sales",
    progress: 88,
    overview: "FitLife Supplements' landing page was filled with dry scientific jargon that failed to connect with gym-goers. We rewrote their copy focusing on emotional benefits, clear objection handling, and bold guarantees.",
    challenge: "Complex product text and vague headlines resulted in a high bounce rate on paid traffic.",
    solution: [
      "Replaced dry headlines with emotional benefit-driven titles like 'Get Stronger in 30 Days - Guaranteed.'",
      "Structured a clear customer question section addressing ingredient safety and subscription terms.",
      "Implemented a direct comparison table comparing FitLife with cheap competitor brands."
    ],
    metricsDetail: {
      primary: "Conversion Rate (CR): Raised to 3.9%",
      secondary: "Average Page Time on Site: Increased by 45s",
      tertiary: "Customer Acquisition Cost: Reduced by 38%"
    },
    takeaway: "Emotional benefit-driven copywriting that directly resolves customer objections converts far better than scientific text."
  },
  {
    id: 40,
    slug: "tiktok-viral-challenge-hooks",
    category: "creative",
    categoryLabel: "Marketing Creative",
    title: "Viral TikTok ad hooks scale beauty brand to 2M+ organic views",
    clientName: "LumiSkin Care",
    niche: "Natural Facial Oils",
    metrics: { label: "Organic Video Views", start: "15,000", end: "2,200,000", growth: "+14500%" },
    adSpend: "$5,000 testing budget",
    roas: "Huge viral scaling lift",
    progress: 95,
    overview: "LumiSkin had a small social footprint and low advertising return. We designed native TikTok hook templates that targeted trending formats, setting off massive organic viral engagement.",
    challenge: "Stiff product ads failed to get engagement in high-speed, youth-dominated TikTok grids.",
    solution: [
      "Created relatable, raw video formats using trending voice-overs and text overlays.",
      "Coordinated with micro-creators to launch natural face-cleanse reviews.",
      "Optimized the first 2 seconds of ads using bold curiosity loops ('Stop washing your face like this')."
    ],
    metricsDetail: {
      primary: "Total Organic Video Engagements: 380k interactions",
      secondary: "Direct Store Orders Lift: +340% during campaign",
      tertiary: "Customer Acquisition Cost: Reduced by 68%"
    },
    takeaway: "Capturing social attention requires adapting native styling and using high-curiosity video loops."
  },
  {
    id: 41,
    slug: "b2b-whiteboard-explainer-videos",
    category: "creative",
    categoryLabel: "Marketing Creative",
    title: "Whiteboard Explainer Video Boosts SaaS Lead Conversions by +90%",
    clientName: "CloudVault SaaS",
    niche: "Enterprise Data Storage Systems",
    metrics: { label: "Sales Qualified Leads", start: "35/mo", end: "66/mo", growth: "+88%" },
    adSpend: "$10,000 total creation",
    roas: "SaaS Demo booking boost",
    progress: 81,
    overview: "CloudVault offered complex enterprise database services that were hard to explain on their homepage. We produced a simple 90-second animated whiteboard video explaining their security setups.",
    challenge: "Homepage visitors bounced because they couldn't quickly understand how the system worked.",
    solution: [
      "Drafted a simple script focused on direct problems ('Is your business data safe from threats?').",
      "Produced a high-quality 90-second animated whiteboard walkthrough.",
      "Placed the video front and center above-the-fold on their website homepage."
    ],
    metricsDetail: {
      primary: "Homepage Bounce Rate Reduced: from 52% down to 28%",
      secondary: "Demo Form Click-Throughs: Raised by 90%",
      tertiary: "Average Visitor Session Time: Increased by 82 seconds"
    },
    takeaway: "Simplifying complex technical products into easy whiteboard animations increases visitor session times and boosts demos."
  },
  {
    id: 42,
    slug: "product-photoshoot-overhaul",
    category: "creative",
    categoryLabel: "Marketing Creative",
    title: "Lifestyle Product Photoshoot Overhaul Drives +45% Direct Orders",
    clientName: "AeroWatches",
    niche: "Premium Wristwear & Watches",
    metrics: { label: "Direct Website Orders", start: "300/mo", end: "435/mo", growth: "+45%" },
    adSpend: "N/A",
    roas: "Direct organic brand lift",
    progress: 83,
    overview: "AeroWatches used dry, white-background catalog shots that made their premium products look cheap. We organized a lifestyle photo-shoot showing the watches styled in professional corporate and active sports settings.",
    challenge: "High website traffic but low buyer conversion due to uninspiring white-background product shots.",
    solution: [
      "Organized a lifestyle shoot featuring professional athletes and corporate models.",
      "Replaced website main images with beautiful lifestyle context pictures.",
      "Designed matching social media assets for ad campaigns."
    ],
    metricsDetail: {
      primary: "E-commerce Conversion Rate: Raised from 1.4% to 2.15%",
      secondary: "Ad Clicks Outbound: Increased by 38%",
      tertiary: "Product Detail Page Bounce Rate: Reduced by 30%"
    },
    takeaway: "Premium goods require contextual lifestyle imagery to justify high prices and drive conversions."
  },
  {
    id: 43,
    slug: "newsletter-template-sequences",
    category: "creative",
    categoryLabel: "Marketing Creative",
    title: "Retention Email Sequence Recovers 22% Abandoned Checkout Revenue",
    clientName: "PureSleep Pillows",
    niche: "Ergonomic Sleep Accessories",
    metrics: { label: "Recovered Cart Revenue", start: "4% recovery", end: "22% recovery", growth: "+450% Recovery Lift" },
    adSpend: "N/A",
    roas: "Operational retention scaling",
    progress: 89,
    overview: "PureSleep had high checkout abandonment rates but only sent a single boring reminder email. We designed a premium 3-part recovery sequence combining customer testimonials and simple incentives.",
    challenge: "Stagnant retention revenue and high checkout abandonments (74% drop-off).",
    solution: [
      "Designed a responsive, beautiful 3-part email template flow.",
      "Sent Email 1 (30 mins post-abandonment): Simple reminder ('Did you forget something?').",
      "Sent Email 2 (24 hours): Highlighted customer reviews and sleep benefits.",
      "Sent Email 3 (48 hours): Offered a small discount code and direct checkout links."
    ],
    metricsDetail: {
      primary: "Abandoned Cart Revenue Recovered: 22%",
      secondary: "Email Open Rates: Average 42% on recovery flow",
      tertiary: "Average Customer Lifetime Value: Increased by 18%"
    },
    takeaway: "A structured 3-part recovery sequence with customer reviews recovers far more revenue than single discount reminders."
  },

  // --- OVERSEAS BUSINESS DEV (7 Cases) ---
  {
    id: 44,
    slug: "spices-exporter-global-pipeline",
    category: "overseas",
    categoryLabel: "Overseas Business Dev",
    title: "Export Pipeline Design: Securing $2.4M in B2B Contracts for Spices Exporter",
    clientName: "Organic Spice India",
    niche: "Agricultural Commodities & Export",
    metrics: { label: "Export Contracts Won", start: "$0", end: "$2,400,000", growth: "New Export Market" },
    adSpend: "$12,000 total (outbound & SEO)",
    roas: "200x Contract Return",
    progress: 96,
    overview: "Organic Spice India wanted to export organic commodities to European food manufacturers. We restructured their global digital listings, built target buyer pipelines, and automated customized email pitch sequences.",
    challenge: "Zero international branding presence, low buyer trust, and lack of direct contact pipelines with European corporate purchasers.",
    solution: [
      "Built a professional B2B export website detailing international food safety certificates and lab reports.",
      "Compiled a highly targeted contact list of top food buyers across Europe and the US.",
      "Drafted customized email sequences showcasing pricing sheets and sample delivery offers.",
      "Optimized B2B directory listings on global platforms like Alibaba and TradeIndia."
    ],
    metricsDetail: {
      primary: "Corporate Inquiries Secured: 180+ verified import contacts",
      secondary: "Sample Delivery Requests: 45 international sample orders",
      tertiary: "Enterprise Contracts Won: 4 major European food chains"
    },
    takeaway: "B2B export scaling requires verified compliance documentation paired with targeted, customized buyer pipelines."
  },
  {
    id: 45,
    slug: "cross-border-localized-checkout",
    category: "overseas",
    categoryLabel: "Overseas Business Dev",
    title: "Cross-Border Store Checkout Optimization Raises Global Sales by +140%",
    clientName: "CraftIndia Artisans",
    niche: "Handicrafts & Luxury Home Decor",
    metrics: { label: "International Monthly Sales", start: "$12,000/mo", end: "$28,800/mo", growth: "+140%" },
    adSpend: "N/A",
    roas: "Operational checkout boost",
    progress: 87,
    overview: "CraftIndia had international visitors but suffered from high drop-offs at checkout. We integrated localized global checkout systems displaying taxes, duties, and local currencies.",
    challenge: "High cart abandonment rates from overseas shoppers due to unknown customs fees and lack of local currencies at checkout.",
    solution: [
      "Integrated cross-border payment processors displaying dynamic pricing in local currencies.",
      "Calculated and displayed international customs duties upfront at checkout (DDP - Delivered Duty Paid).",
      "Partnered with fast international shipping networks (DHL/FedEx) to offer reliable tracking."
    ],
    metricsDetail: {
      primary: "Checkout Conversion Rate: Raised from 0.8% to 2.2%",
      secondary: "International Shipping Returns: Slashed to 0",
      tertiary: "Average Order Value: Lifted by 32%"
    },
    takeaway: "To scale sales globally, eliminate checkout friction by showing exact shipping duties and local currencies upfront."
  },
  {
    id: 46,
    slug: "international-meta-ads-scaling",
    category: "overseas",
    categoryLabel: "Overseas Business Dev",
    title: "Scaling Luxury Jewelry Brand to European Markets at a 3.8x ROAS",
    clientName: "Amara Jewelry",
    niche: "Fine Handcrafted Jewelry",
    metrics: { label: "European Monthly Sales", start: "$5,000", end: "$45,000", growth: "+800%" },
    adSpend: "$12,000/mo",
    roas: "3.8x ROAS",
    progress: 92,
    overview: "Amara wanted to expand sales from India to Germany, France, and the UK. We localized their creative layouts and targeted high-income fashion buyer segments across Europe.",
    challenge: "Different regional tastes, high international ad competition, and high shipping costs.",
    solution: [
      "Developed ad creatives showing shipping speeds and easy return policies for European buyers.",
      "Targeted high-income suburbs and cities using Meta local geofencing.",
      "Offered free international shipping on orders over a specific value to absorb logistical overheads."
    ],
    metricsDetail: {
      primary: "Average ROAS Achieved: 3.8x ROAS",
      secondary: "Average Order Value (AOV): Increased by 65%",
      tertiary: "Customer Acquisition Cost: Kept under $24"
    },
    takeaway: "Cross-border e-commerce scales sustainably when you absorb shipping costs into higher average order values."
  },
  {
    id: 47,
    slug: "global-b2b-trade-listing",
    category: "overseas",
    categoryLabel: "Overseas Business Dev",
    title: "Industrial Parts Exporter Doubles Inquiries via Alibaba Optimization",
    clientName: "Veloce Forgings",
    niche: "Automotive & Industrial Components",
    metrics: { label: "Verified Global Inquiries", start: "28/mo", end: "62/mo", growth: "+121%" },
    adSpend: "$4,000/mo (Alibaba Ads)",
    roas: "B2B wholesale expansion",
    progress: 80,
    overview: "Veloce parts exporter had an unoptimized Alibaba portal that failed to rank on international searches. We overhauled their listings, catalog structure, and RFQ automated responses.",
    challenge: "Low ranking in Alibaba search grids and slow response times to buyer inquiries.",
    solution: [
      "Optimized listing keywords matching exact B2B search intents (e.g., 'custom steel forgings exporter').",
      "Designed detailed technical catalog sheets for their entire product range.",
      "Implemented a fast auto-response script to instantly acknowledge buyer inquiries 24/7."
    ],
    metricsDetail: {
      primary: "Alibaba Search Ranking Score: Raised from 3.2 to 4.8/5",
      secondary: "Average Inquiry Response Time: Reduced from 8 hours to 2 minutes",
      tertiary: "New Wholesale Contracts: 8 international clients"
    },
    takeaway: "B2B marketplaces reward listing detail and fast response times; automated acknowledgements build buyer trust instantly."
  },
  {
    id: 48,
    slug: "cold-email-export-pitch",
    category: "overseas",
    categoryLabel: "Overseas Business Dev",
    title: "Tea Brand Secures Middle-East Retail Shelves via Targeted Outbound Pits",
    clientName: "Royal Tea Exporters",
    niche: "Premium Assam & Darjeeling Tea",
    metrics: { label: "Middle-East Retail Partners", start: "0", end: "12 major chains", growth: "New Market Entry" },
    adSpend: "$5,000 total creation",
    roas: "B2B wholesale contract scaling",
    progress: 94,
    overview: "Royal Tea wanted to enter retail markets in Dubai and Saudi Arabia. We compiled targeted importer directory profiles and launched automated outbound cold-email pitch sequences.",
    challenge: "Traditional wholesale expos were slow and expensive, and buyers ignored generic sales messages.",
    solution: [
      "Researched and built direct contact lists of procurement managers at top Middle-East supermarkets.",
      "Drafted highly customized pitch sequences offering custom retail pricing and samples.",
      "Organized direct video calls to coordinate shipping terms and localized packaging rules."
    ],
    metricsDetail: {
      primary: "Email Response Rate: 28% positive responses",
      secondary: "Sample Boxes Shipped: 32 retail samples",
      tertiary: "Retail Store Locations Secured: 180+ store shelves"
    },
    takeaway: "Targeted, professional outbound sequences offering physical product samples bypass expensive B2B retail exhibitions."
  },
  {
    id: 49,
    slug: "multi-language-support-branding",
    category: "overseas",
    categoryLabel: "Overseas Business Dev",
    title: "Apparel Brand Scales LatAm Sales by +175% via Spanish Social Ads",
    clientName: "Estilo Apparel",
    niche: "Activewear & Outdoor Apparel",
    metrics: { label: "LatAm Monthly Orders", start: "280", end: "770", growth: "+175%" },
    adSpend: "$9,000/mo",
    roas: "3.6x ROAS",
    progress: 89,
    overview: "Estilo Apparel served ads in English to Spanish-speaking Latin American countries, resulting in low ad conversions. We localized their creative layouts and translated checkout pages.",
    challenge: "Language barriers at checkout caused high checkout drops (82%) on paid traffic.",
    solution: [
      "Translated and localized all ad copies and vertical video layouts into Spanish.",
      "Deployed a dynamic checkout router loading fully translated checkout forms.",
      "Established Spanish-language customer support email and messaging templates."
    ],
    metricsDetail: {
      primary: "Checkout Completion Rate: Raised from 1.1% to 3.1%",
      secondary: "Ad Clicks Outbound: Increased by 56%",
      tertiary: "Customer Support Tickets Resolved: 100% Spanish support"
    },
    takeaway: "Cross-border retail requires local language creatives and translated checkouts to prevent buyer drop-off."
  },
  {
    id: 50,
    slug: "legal-compliant-advertising-setup",
    category: "overseas",
    categoryLabel: "Overseas Business Dev",
    title: "Health Drink Brand Launches in Europe with 100% EFSA Compliance",
    clientName: "ActiveBio co",
    niche: "Probiotic Wellness Drinks",
    metrics: { label: "European Direct Sales", start: "$0", end: "$38,000/mo", growth: "New Market Entry" },
    adSpend: "$10,000/mo",
    roas: "3.2x ROAS",
    progress: 91,
    overview: "ActiveBio wanted to launch their health drink brand in the UK and Germany but faced strict European Food Safety Authority (EFSA) health-claim rules. We audited their visual assets and ad copies.",
    challenge: "High risk of ad account suspension and regulatory fines due to unverified medical health claims in ad scripts.",
    solution: [
      "Audited and rewrote all ad copies to comply with EFSA guidelines, replacing medical terms with validated wellness statements.",
      "Built landing pages displaying clear safety data and laboratory check reports.",
      "Secured localized European VAT registries and shipping hub arrangements."
    ],
    metricsDetail: {
      primary: "European Ad Accounts Setup: 100% active and compliant",
      secondary: "Regulatory Compliancy Disputes: 0 disputes",
      tertiary: "Average ROAS Secured: 3.2x ROAS"
    },
    takeaway: "Expanding health brands globally requires strict compliance reviews to prevent ad shutdowns and regulatory penalties."
  }
];

if (typeof module !== 'undefined') {
  module.exports = CASES_DATA;
} else {
  window.CASES_DATA = CASES_DATA;
}
