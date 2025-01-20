const menuLinks = document.querySelectorAll('.menu-link');

// Функція для визначення активного посилання
function setActiveLink(link) {
  menuLinks.forEach(l => l.classList.remove('active')); // Видаляємо клас з усіх
  link.classList.add('active'); // Додаємо клас до обраного
}

// Додаємо обробник подій для кліку на кожне посилання
menuLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    setActiveLink(this); // Робимо посилання активним
  });
});

// Слухаємо події прокрутки, щоб визначити активну секцію
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;

  menuLinks.forEach(link => {
    const section = document.querySelector(link.getAttribute('href')); // Знаходимо секцію
    if (
      section.offsetTop <= scrollPosition + 100 && // Верхній край секції
      section.offsetTop + section.offsetHeight > scrollPosition + 100 // Нижній край секції
    ) {
      setActiveLink(link); // Робимо посилання активним
    }
  });
});
