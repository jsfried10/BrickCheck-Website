/* ============================================
   SITE CONFIG — Edit all copy & images here
   ============================================

   Change any text or image path below and
   refresh the browser. That's it!
   ============================================ */

const SITE = {

  // ── Global ──────────────────────────────────
  name: "BrickCheck",
  tagline: "LEGO Price Tracker for Mac",
  downloadUrl: "https://github.com/jsfried10/LegoApp/releases/download/v1.0.0/BrickCheck.dmg",
  githubUrl: "https://github.com/jsfried10/LegoApp",
  year: "2025",

  // ── Header ──────────────────────────────────
  header: {
    buttonText: "Download for Mac",
  },

  // ── Hero ────────────────────────────────────
  hero: {
    headline: "Never overpay for LEGO again.",
    subtitle: "BrickCheck lives in your menu bar, tracking prices across Amazon, Target, and more. Sync your LEGO.com wishlist and get notified the instant prices drop.",
    primaryCta: "Download Free",
    secondaryCta: "See How It Works",
    // Replace with a real screenshot path, e.g. "assets/images/hero-screenshot.png"
    image: null,
    imageAlt: "BrickCheck menu bar app showing LEGO set prices",
  },

  // ── Trust Strip ─────────────────────────────
  trustItems: [
    { icon: "store",     label: "2+ Retailers" },
    { icon: "sync",      label: "Wishlist Sync" },
    { icon: "clock",     label: "Background Checks" },
    { icon: "bell",      label: "Instant Alerts" },
  ],

  // ── Features ────────────────────────────────
  // badge color options: "yellow", "red", "blue", "green", "orange"
  features: [
    {
      badge: "Wishlist Sync",
      badgeColor: "yellow",
      headline: "Your wishlist, always up to date.",
      description: "Connect your LEGO.com wishlist and BrickCheck automatically syncs it in the background. New sets you add appear instantly — no manual entry needed.",
      // Replace with real path, e.g. "assets/images/feature-wishlist.png"
      image: null,
      imageAlt: "LEGO.com wishlist synced into BrickCheck",
    },
    {
      badge: "Price Tracking",
      badgeColor: "red",
      headline: "Every retailer. One glance.",
      description: "Compare prices across Amazon, Target, and more for every set in your collection. See exactly where to buy for the best deal, right from your menu bar.",
      image: null,
      imageAlt: "Price comparison across multiple retailers",
    },
    {
      badge: "Alerts",
      badgeColor: "blue",
      headline: "Never miss a deal.",
      description: "Set custom price thresholds for any set. BrickCheck watches prices in the background and sends a Mac notification the moment a set drops below your target.",
      image: null,
      imageAlt: "Mac notification for a LEGO price drop",
    },
    {
      badge: "Organization",
      badgeColor: "green",
      headline: "Your collection, your way.",
      description: "Sort your tracked sets by date added, discount percentage, or alphabetically. Quickly find the sets with the biggest savings or the ones you added most recently.",
      image: null,
      imageAlt: "Sortable set list with discount percentages",
    },
    {
      badge: "Scheduling",
      badgeColor: "orange",
      headline: "Set it and forget it.",
      description: "Configure how often BrickCheck checks prices — from every 5 minutes to every 6 hours. It runs quietly in your menu bar, using minimal resources while keeping prices fresh.",
      image: null,
      imageAlt: "Background scheduling settings panel",
    },
  ],

  // ── How It Works ────────────────────────────
  howItWorks: {
    headline: "Up and running in minutes.",
    steps: [
      {
        title: "Download & Install",
        description: "Drag BrickCheck to your Applications folder. It lives in your menu bar, ready when you are.",
      },
      {
        title: "Sync Your Wishlist",
        description: "Connect your LEGO.com account and your wishlist imports automatically.",
      },
      {
        title: "Get Price Alerts",
        description: "BrickCheck monitors prices in the background and notifies you when they drop.",
      },
    ],
  },

  // ── Final CTA ───────────────────────────────
  finalCta: {
    headline: "Start saving on LEGO sets today.",
    subtitle: "BrickCheck is free to download. No account required.",
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
