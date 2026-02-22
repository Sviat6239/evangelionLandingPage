document.addEventListener('DOMContentLoaded', () => {

    const toggleBtn = document.getElementById('lang-toggle');
    const menu = document.getElementById('lang-menu');
    const menuItems = document.querySelectorAll('[data-set-lang]');
    const translatable = document.querySelectorAll('[data-lang]');

    let currentLang = document.documentElement.lang || 'pl';

    function applyLanguage(lang) {
        translatable.forEach(el => {
            const text = el.getAttribute(`data-lang-${lang}`);
            if (text) el.textContent = text;
        });

        document.documentElement.lang = lang;
        toggleBtn.textContent = lang.toUpperCase();
        currentLang = lang;
    }

    toggleBtn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });


    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            const selectedLang = item.getAttribute('data-set-lang');
            applyLanguage(selectedLang);
            menu.classList.add('hidden');
        });
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.lang-wrapper')) {
            menu.classList.add('hidden');
        }
    });

    applyLanguage(currentLang);
});