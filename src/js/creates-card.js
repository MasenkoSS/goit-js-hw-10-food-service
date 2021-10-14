// шаблон
import cardsSample from '../sample/cards.hbs';
//  массив
import menu from '../menu.json'

// массив данных (шаблон)
const scheme = cardsSample(menu);

// из DOM-элементов в разметку
const menuRef = document.querySelector('.js-menu');
menuRef.insertAdjacentHTML('beforeend', scheme);