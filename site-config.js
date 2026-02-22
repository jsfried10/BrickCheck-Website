/* ============================================
   SITE CONFIG — Edit all copy & images here
   ============================================

   Change any text or image path below and
   refresh the browser. That's it!
   ============================================ */

const SITE = {

  // ── Global ──────────────────────────────────
  name: "BrickChecker",
  tagline: "LEGO Price Tracker for Mac, iPhone & iPad",
  downloadUrl: "https://apps.apple.com/us/app/brickchecker/id6759080866?mt=12",
  githubUrl: "https://github.com/jsfried10/LegoApp",
  year: "2026",

  // ── Header ──────────────────────────────────
  header: {
    buttonText: "Download for iOS and Mac",
  },

  // ── Hero ────────────────────────────────────
  hero: {
    headline: "Never overpay for LEGO again.",
    subtitle: "BrickChecker tracks LEGO prices across Amazon, Target, and more on your Mac, iPhone, and iPad. Sync your LEGO.com wishlist, compare prices, and get notified the instant they drop — with iCloud keeping everything up to date across all your devices.",
    primaryCta: "Download for iOS and Mac",
    secondaryCta: "See How It Works",
    image: "assets/images/Mac.png",
    imageAlt: "BrickChecker Mac app showing LEGO set prices",
    image2: "assets/images/Iphone.png",
    image2Alt: "BrickChecker iPhone app showing LEGO set prices",
  },

  // ── Trust Strip ─────────────────────────────
  trustItems: [
    { icon: "store",     label: "Multiple Retailers" },
    { icon: "sync",      label: "Wishlist Sync" },
    { icon: "bell",      label: "Instant Alerts" },
    { icon: "cloud",     label: "iCloud Sync" },
  ],

  // ── Features ────────────────────────────────
  // badge color options: "yellow", "red", "blue", "green", "orange"
  features: [
    {
      badge: "Wishlist Sync",
      badgeColor: "blue",
      headline: "Your wishlist, always up to date.",
      description: "Connect your LEGO.com wishlist and BrickChecker automatically syncs it in the background. New sets you add appear instantly — no manual entry needed.",
      image: "assets/images/sync.png",
      imageAlt: "Wishlist sync across Mac and iPhone",
    },
    {
      badge: "Price Tracking",
      badgeColor: "red",
      headline: "Every retailer. One glance.",
      description: "Compare prices across Amazon, Target, and more for every set in your collection. See exactly where to buy for the best deal, right from your menu bar.",
      image: "assets/images/Main.png",
      imageAlt: "LEGO set price tracking with retailer comparison",
    },
    {
      badge: "Alerts & Sync",
      badgeColor: "blue",
      headline: "Never miss a deal — on any device.",
      description: "Set custom price thresholds for any set and get notified the moment prices drop. Your tracked sets, price history, and settings sync automatically via iCloud across your Mac, iPhone, and iPad.",
      image: null,
      imageAlt: "Price alerts and iCloud sync across devices",
      hideImage: true,
    },
  ],

  // ── How It Works ────────────────────────────
  howItWorks: {
    headline: "Up and running in minutes.",
    steps: [
      {
        title: "Download & Install",
        description: "Drag BrickChecker to your Applications folder. It lives in your menu bar, ready when you are.",
      },
      {
        title: "Sync Your Wishlist",
        description: "Connect your LEGO.com account and your wishlist imports automatically.",
      },
      {
        title: "Get Price Alerts",
        description: "BrickChecker monitors prices in the background and notifies you when they drop.",
      },
    ],
  },

  // ── Final CTA ───────────────────────────────
  finalCta: {
    headline: "Start saving on LEGO sets today.",
    subtitle: "Free on the App Store. Available on Mac, iPhone, and iPad.",
    buttonText: "Get BrickChecker",
    footnote: "Requires macOS 14 or iOS 17 or later",
  },

  // ── Footer ──────────────────────────────────
  footer: {
    links: [
      { label: "GitHub",  url: "https://github.com/jsfried10/LegoApp" },
      { label: "Privacy", url: "privacy.html" },
    ],
  },
};
