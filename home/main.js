// ── Nav scroll effect ──
const nav = document.getElementById('main-nav');
window.addEventListener('scroll', () => {
  nav.style.background = window.scrollY > 40
    ? 'rgba(8,11,20,0.96)'
    : 'rgba(8,11,20,0.72)';
});

// ── Mobile hamburger ──
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

// ── FAQ accordion ──
document.querySelectorAll('.faq-item').forEach(item => {
  item.querySelector('.faq-q').addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

// ── Animate ring in mockup ──
const mockRing = document.querySelector('.ring-fill');
if (mockRing) {
  const circumference = 2 * Math.PI * 32; // ~201
  let pct = 0;
  const target = 78;
  const interval = setInterval(() => {
    pct += 1;
    mockRing.style.strokeDashoffset = circumference - (pct / 100) * circumference;
    document.querySelector('.mockup-pct').textContent = pct + '%';
    if (pct >= target) clearInterval(interval);
  }, 18);
}

// ── Intersection Observer for fade-in animations ──
const observerOpts = { threshold: 0.15, rootMargin: '0px 0px -40px 0px' };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOpts);

// Add CSS for the animation
const style = document.createElement('style');
style.textContent = `
  .feature-card, .step, .faq-item, .privacy-card, .privacy-text {
    opacity: 0;
    transform: translateY(24px);
    transition: opacity 0.55s ease, transform 0.55s ease;
  }
  .feature-card.visible, .step.visible, .faq-item.visible,
  .privacy-card.visible, .privacy-text.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;
document.head.appendChild(style);

document.querySelectorAll('.feature-card, .step, .faq-item, .privacy-card, .privacy-text')
  .forEach((el, i) => {
    el.style.transitionDelay = (i % 4) * 0.08 + 's';
    observer.observe(el);
  });

// ── SVG gradient for mockup ring ──
const svg = document.querySelector('.mockup-ring');
if (svg) {
  const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
  defs.innerHTML = `
    <linearGradient id="mockRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#3b82f6"/>
      <stop offset="100%" style="stop-color:#8b5cf6"/>
    </linearGradient>`;
  svg.prepend(defs);
}
