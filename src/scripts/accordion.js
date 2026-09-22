// Hairline disclosure rows. One panel open at a time per accordion.
document.querySelectorAll('.accordion').forEach((accordion) => {
  const items = Array.from(accordion.querySelectorAll('.accordion-item'));

  items.forEach((item) => {
    const trigger = item.querySelector('.accordion-trigger');
    if (!trigger) return;

    trigger.addEventListener('click', () => {
      const willOpen = !item.classList.contains('is-open');

      items.forEach((other) => {
        other.classList.remove('is-open');
        const otherTrigger = other.querySelector('.accordion-trigger');
        if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
      });

      if (willOpen) {
        item.classList.add('is-open');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });
});
