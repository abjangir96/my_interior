document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');

  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  const page = body.dataset.page;
  const navLinks = document.querySelectorAll('.main-nav a');
  navLinks.forEach((link) => {
    const href = link.getAttribute('href');
    if (page && href && href.includes(page + '.html')) {
      link.classList.add('is-active');
    }
    if (!page && href && href === 'index.html') {
      link.classList.add('is-active');
    }
  });

  const revealItems = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealItems.forEach((item) => observer.observe(item));

  const backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    });

    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  const filterButtons = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;

      filterButtons.forEach((btn) => btn.classList.toggle('active', btn === button));

      portfolioItems.forEach((item) => {
        const category = item.dataset.category;
        const shouldShow = filter === 'all' || category === filter;
        item.classList.toggle('hidden', !shouldShow);
      });
    });
  });

  const lightbox = document.querySelector('.lightbox');
  const lightboxImage = document.querySelector('.lightbox-content img');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxTriggerButtons = document.querySelectorAll('.lightbox-trigger');
  const closeLightboxButton = document.querySelector('.lightbox-close');

  if (lightbox && lightboxImage && lightboxTitle) {
    lightboxTriggerButtons.forEach((button) => {
      button.addEventListener('click', () => {
        lightboxImage.src = button.dataset.image || '';
        lightboxTitle.textContent = button.dataset.title || 'Project details';
        lightbox.classList.add('open');
        lightbox.setAttribute('aria-hidden', 'false');
      });
    });

    const closeLightbox = () => {
      lightbox.classList.remove('open');
      lightbox.setAttribute('aria-hidden', 'true');
    };

    closeLightboxButton?.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (event) => {
      if (event.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && lightbox.classList.contains('open')) {
        closeLightbox();
      }
    });
  }

  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const submitButton = contactForm.querySelector('button[type="submit"]');
      if (submitButton) {
        const original = submitButton.textContent;
        submitButton.textContent = 'Request Sent';
        submitButton.disabled = true;
        setTimeout(() => {
          submitButton.textContent = original;
          submitButton.disabled = false;
          contactForm.reset();
        }, 2000);
      }
    });
  }
});
