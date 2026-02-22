document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('lang-switch');
    const flag = document.getElementById('lang-flag');

    const POLAND_FLAG = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Flag_of_Poland.svg/640px-Flag_of_Poland.svg.png";
    const UKRAINE_FLAG = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/250px-Flag_of_Ukraine.svg.png";
    const rus_flag = ""

    let currentLang = document.documentElement.lang || 'pl';

    const setFlagFor = (langToSwitchTo) => {
        if (langToSwitchTo === 'ua') {
            flag.src = UKRAINE_FLAG;
            flag.alt = "Українська";
        } else if(langToSwitchTo === 'pl'){
            flag.src = POLAND_FLAG;
            flag.alt = "Polski";
        } else{
            flag.src = rus_flag;
            flag.alt = "русский";
        }
    };

    setFlagFor(currentLang === 'pl' ? 'ua'  ? 'ru': 'pl');

    btn.addEventListener('click', () => {
        const newLang = currentLang === 'pl' ? 'ua' ? 'ru' : 'pl';

        document.querySelectorAll('[data-lang]').forEach(el => {
            const text = el.getAttribute(`data-lang-${newLang}`);
            if (text !== null) el.textContent = text;
        });
        setFlagFor(currentLang);
        document.documentElement.lang = newLang;
        currentLang = newLang;
    });
});
