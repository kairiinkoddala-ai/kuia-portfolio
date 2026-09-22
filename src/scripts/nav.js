// Mobile menu toggle.
const header = document.getElementById('siteHeader');
const toggle = document.getElementById('navToggle');

if (header && toggle) {
  const close = () => {
    header.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.textContent = 'Menu';
  };

  toggle.addEventListener('click', () => {
    const open = header.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.textContent = open ? 'Close' : 'Menu';
  });

  header.querySelectorAll('.site-nav a').forEach((link) => {
    link.addEventListener('click', close);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && header.classList.contains('open')) {
      close();
      toggle.focus();
    }
  });
}

// Local time in the header — a small studio signal.
const clock = document.getElementById('localTime');

if (clock) {
  const tick = () => {
    clock.textContent = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Europe/Tallinn',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    }).format(new Date());
  };

  tick();
  setInterval(tick, 30000);
}
