/* ============================================
   BrickChecker — Populates page from SITE config
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ── SVG icon library (for trust strip) ──
  const ICONS = {
    store: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"/><path d="M3 9V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4"/></svg>',
    sync: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48 2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48 2.83-2.83"/></svg>',
    clock: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
    bell: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>',
    cloud: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>',
  };

  // ── Helper: image or placeholder ──
  function imageHTML(src, alt, lazy = false) {
    if (src) {
      const loading = lazy ? ' loading="lazy"' : '';
      return `<img src="${src}" alt="${alt}" width="800" height="500"${loading}>`;
    }
    return `<div class="placeholder-img" data-label="${alt}"></div>`;
  }

  // ── Header ──
  document.getElementById('header-name').textContent = SITE.name;
  const headerDl = document.getElementById('header-download');
  headerDl.textContent = SITE.header.buttonText;
  headerDl.href = SITE.downloadUrl;

  // ── Hero ──
  document.getElementById('hero-headline').textContent = SITE.hero.headline;
  document.getElementById('hero-subtitle').textContent = SITE.hero.subtitle;

  const heroPrimary = document.getElementById('hero-primary-cta');
  heroPrimary.textContent = SITE.hero.primaryCta;
  heroPrimary.href = SITE.downloadUrl;

  document.getElementById('hero-secondary-cta').textContent = SITE.hero.secondaryCta;
  // Dual hero images (Mac + iPhone side by side) or single image
  const heroContainer = document.getElementById('hero-image-container');
  if (SITE.hero.image2) {
    heroContainer.classList.add('hero-image--dual');
    heroContainer.innerHTML = `
      <img src="${SITE.hero.image2}" alt="${SITE.hero.image2Alt}" class="hero-img-secondary">
      <img src="${SITE.hero.image}" alt="${SITE.hero.imageAlt}" class="hero-img-primary">
    `;
  } else {
    heroContainer.innerHTML = imageHTML(SITE.hero.image, SITE.hero.imageAlt);
  }

  // ── Trust Strip ──
  const trustContainer = document.getElementById('trust-strip-container');
  trustContainer.innerHTML = SITE.trustItems.map(item => `
    <div class="trust-item fade-up">
      <span class="trust-icon">${ICONS[item.icon] || ''}</span>
      <span class="trust-label">${item.label}</span>
    </div>
  `).join('');

  // ── Features ──
  const featuresSection = document.getElementById('features');
  featuresSection.innerHTML = SITE.features.map((f, i) => `
    <div class="feature${i % 2 === 1 ? ' feature--reversed' : ''}${f.hideImage ? ' feature--text-only' : ''}">
      <div class="container ${f.hideImage ? '' : 'feature-grid'}">
        <div class="feature-text">
          <h2 class="fade-up">${f.headline}</h2>
          <p class="fade-up">${f.description}</p>
        </div>
        ${f.hideImage ? '' : `<div class="feature-image fade-up">
          ${imageHTML(f.image, f.imageAlt, true)}
        </div>`}
      </div>
    </div>
  `).join('');

  // ── How It Works (optional section) ──
  const howHeadline = document.getElementById('how-headline');
  const stepsContainer = document.getElementById('steps-container');
  if (howHeadline && stepsContainer) {
    howHeadline.textContent = SITE.howItWorks.headline;
    stepsContainer.innerHTML = SITE.howItWorks.steps.map((step, i) => `
      <div class="step fade-up">
        <div class="step-number">${i + 1}</div>
        <h3>${step.title}</h3>
        <p>${step.description}</p>
      </div>
    `).join('');
  }

  // ── Final CTA ──
  document.getElementById('cta-headline').textContent = SITE.finalCta.headline;
  document.getElementById('cta-subtitle').textContent = SITE.finalCta.subtitle;
  const ctaBtn = document.getElementById('cta-button');
  ctaBtn.textContent = SITE.finalCta.buttonText;
  ctaBtn.href = SITE.downloadUrl;
  document.getElementById('cta-footnote').textContent = SITE.finalCta.footnote;

  // ── Footer ──
  document.getElementById('footer-copy').innerHTML = `&copy; ${SITE.year} ${SITE.name}`;
  const footerLinks = document.getElementById('footer-links');
  footerLinks.innerHTML = SITE.footer.links.map(link =>
    `<a href="${link.url}">${link.label}</a>`
  ).join('');

  // ── Page title ──
  document.title = `${SITE.name} — ${SITE.tagline}`;

  // ============================================
  //  Animations & interactions (unchanged)
  // ============================================

  // --- Scroll-triggered fade-in animations ---
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

  // --- Header shadow on scroll ---
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 10);
  }, { passive: true });

  // --- Track download clicks in Google Analytics ---
  document.querySelectorAll(`a[href="${SITE.downloadUrl}"]`).forEach(link => {
    link.addEventListener('click', () => {
      if (typeof gtag === 'function') {
        gtag('event', 'download', {
          event_category: 'App',
          event_label: link.textContent.trim(),
          value: 1
        });
      }
    });
  });

  // --- Smooth scroll for anchor links ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

});
