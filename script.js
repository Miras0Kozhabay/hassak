// навбар
const navbar = document.querySelector('.navbar');

// Функция для отслеживания прокрутки
function handleScroll() {
    if (window.scrollY > navbar.offsetHeight) {
        navbar.classList.add('fixed');
    } else {
        navbar.classList.remove('fixed');
    }
}

window.addEventListener('scroll', handleScroll);

// Попап окошко
const serviceItems = document.querySelectorAll('.service-item');

if (serviceItems.length) {
    serviceItems.forEach(item => {
        item.addEventListener('click', () => {
            const popup = document.querySelector('.popup');
            const overlay = document.querySelector('.popup-overlay');
            const content = item.getAttribute('data-content');

            popup.querySelector('.popup-content').innerHTML = content; 
            popup.classList.add('open');
            overlay.classList.add('open');
        });
    });
}

const closePopup = () => {
    document.querySelector('.popup').classList.remove('open');
    document.querySelector('.popup-overlay').classList.remove('open');
};

document.querySelector('.popup .close').addEventListener('click', closePopup);
document.querySelector('.popup-overlay').addEventListener('click', closePopup);


//switcher

document.getElementById('ru').addEventListener('click', () => switchLanguage('ru'));
document.getElementById('en').addEventListener('click', () => switchLanguage('en'));

function switchLanguage(lang) {
    const texts = document.querySelectorAll('.text');
    
    texts.forEach(text => {
        if (text.getAttribute('data-lang') === lang) {
            text.style.display = 'block';
        } else {
            text.style.display = 'none';
        }
    });
}
