const tabs = document.querySelectorAll('nav ul li');
const sections = document.querySelectorAll('section');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const targetId = tab.querySelector('a').getAttribute('href');
        sections.forEach(section => {
            section.classList.remove('active');
        });
        document.querySelector(targetId).classList.add('active');
    });
});