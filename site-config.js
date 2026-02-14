/* ============================================
   SITE CONFIG — Edit all copy & images here
   ============================================

   Change any text or image path below and
   refresh the browser. That's it!
   ============================================ */

const SITE = {

  // ── Global ──────────────────────────────────
  name: "BrickChecker",
  tagline: "LEGO Price Tracker for Mac",
  downloadUrl: "https://github.com/jsfried10/LegoApp/releases/latest/download/BrickCheck.dmg",
  githubUrl: "https://github.com/jsfried10/LegoApp",
  year: "2025",

  // ── Header ──────────────────────────────────
  header: {
    buttonText: "Download for Mac",
  },

  // ── Hero ────────────────────────────────────
  hero: {
    headline: "Never overpay for LEGO again.",
    subtitle: "BrickChecker lives in your Mac menu bar, tracking prices across Amazon, Target, and more. Sync your LEGO.com wishlist or add a set. Then get notified the instant prices drop.",
    primaryCta: "Download Free",
    secondaryCta: "See How It Works",
    image: "assets/images/App.png",
    imageAlt: "BrickChecker menu bar app showing LEGO set prices",
  },

  // ── Trust Strip ─────────────────────────────
  trustItems: [
    { icon: "store",     label: "Multiple Retailers" },
    { icon: "sync",      label: "Wishlist Sync" },
    { icon: "bell",      label: "Instant Alerts" },
  ],

  // ── Features ────────────────────────────────
  // badge color options: "yellow", "red", "blue", "green", "orange"
  features: [
    {
      badge: "Wishlist Sync",
      badgeColor: "blue",
      headline: "Your wishlist, always up to date.",
      description: "Connect your LEGO.com wishlist and BrickChecker automatically syncs it in the background. New sets you add appear instantly — no manual entry needed.",
      image: "assets/images/Wish.png",
      imageAlt: "LEGO.com wishlist synced into BrickChecker",
    },
    {
      badge: "Price Tracking",
      badgeColor: "red",
      headline: "Every retailer. One glance.",
      description: "Compare prices across Amazon, Target, and more for every set in your collection. See exactly where to buy for the best deal, right from your menu bar.",
      image: "assets/images/Prices.png",
      imageAlt: "Price comparison across multiple retailers",
    },
    {
      badge: "Alerts",
      badgeColor: "blue",
      headline: "Never miss a deal.",
      description: "Set custom price thresholds for any set. BrickChecker watches prices in the background and sends a Mac notification the moment a set drops below your target.",
      image: null,
      imageAlt: "Mac notification for a LEGO price drop",
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
    subtitle: "BrickChecker is free to download. No account required.",
    buttonText: "Download for Mac",
    footnote: "Requires Mac 14 or later",
  },

  // ── Footer ──────────────────────────────────
  footer: {
    links: [
      { label: "GitHub",  url: "https://github.com/jsfried10/LegoApp" },
      { label: "Privacy", url: "#" },
      { label: "Contact", url: "#" },
    ],
  },
};
