window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  setTimeout(() => loader.classList.add('hidden'), 1000);
});

const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const savedTheme = localStorage.getItem('portfolio-theme');
if (savedTheme === 'light') body.classList.add('light');
updateThemeIcon();

themeToggle?.addEventListener('click', () => {
  body.classList.toggle('light');
  localStorage.setItem('portfolio-theme', body.classList.contains('light') ? 'light' : 'dark');
  updateThemeIcon();
});

function updateThemeIcon() {
  if (!themeToggle) return;
  themeToggle.textContent = body.classList.contains('light') ? '🌙' : '☀️';
}

const menuToggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');
menuToggle?.addEventListener('click', () => mobileNav.classList.toggle('open'));
document.querySelectorAll('.mobile-nav a').forEach(link => link.addEventListener('click', () => mobileNav.classList.remove('open')));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      if (entry.target.matches('.stat-card')) animateCounter(entry.target.querySelector('[data-count]'));
    }
  });
}, { threshold: 0.18 });

document.querySelectorAll('.reveal, .fade-up, .stat-card').forEach(el => observer.observe(el));

function animateCounter(el) {
  if (!el || el.dataset.done === '1') return;
  el.dataset.done = '1';
  const target = Number(el.dataset.count || 0);
  let current = 0;
  const duration = 1200;
  const stepTime = Math.max(12, Math.floor(duration / Math.max(target, 1)));
  const timer = setInterval(() => {
    current += 1;
    el.textContent = current;
    if (current >= target) clearInterval(timer);
  }, stepTime);
}

const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 500) backToTop.classList.add('show');
  else backToTop.classList.remove('show');
});
backToTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
