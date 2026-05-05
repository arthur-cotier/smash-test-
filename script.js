// SMASH — interactions client

(function () {
  'use strict';

  // Mobile menu toggle
  const menuBtn = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', String(isOpen));
      document.body.classList.toggle('overflow-hidden', isOpen);
    });
    mobileMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('overflow-hidden');
      });
    });
  }

  // Réservation : date min = aujourd'hui
  const dateInput = document.getElementById('reservation-date');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
  }

  // Année dynamique en footer
  document.querySelectorAll('[data-current-year]').forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  // Validation soft du formulaire de réservation
  const form = document.getElementById('reservation-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      const consent = form.querySelector('input[name="consent"]');
      if (consent && !consent.checked) {
        e.preventDefault();
        alert('Merci de cocher la case de consentement avant d’envoyer.');
        consent.focus();
      }
    });
  }
})();
