import i18n from "i18next";
import { initReactI18next } from "react-i18next";



const resources = {
  en: {
    translation: {
      tegA1: "Home",
      tegA2: "Menu",
      tegA3: "Features",
      tegA4: "Delivery",
      tegA5: "News",
      tegA6: "Pages",
      HeaderBTN: "Table Booking",
     Sec1H1: 'Foody Love',
     Sec1BTN: 'Click here',
     Sec2H2: 'About us',
      Sec2H1: 'WE ARE TASTY',
      Sec2P: 'dard dummy text ever since the 1500s,when an unknownprinter took a galley of type and scrambled it to make a typespecimen book. It has survived not only five centuries, butalso the leap into electronic typesettingdard dummy text eversince the 1500s,when an unknown printer took a galley oftype and scrambled it to make a type specimen book. It hassurvived not only five centuries, but also the leap intoelectronic typesetting',
      Sec2BTN: 'CLICK HERE',
      Sec3H2: 'Special Recipes',
      Sec3H1: 'Taste of Precious',
      Sec4H2: 'Delightful',
      Sec4H1: 'Experience',
      Sec4TEXT: 'ITALIAN SOURCE MUSHROOM',
      Sec4MONEY: '12$',
      Sec4or5H2: 'Amazing',
      Sec4or5H1: 'Delicious',
      Sec4or5TEXT: 'Drinks',
      Sec4or5TEXT2: 'Tuna Roast',
      Sec4or5TEXT3: 'Source........................................................$24.5',
      Sec4or5TEXT4: 'Main course',
      Sec4or5TEXT5: 'Desserts',
      Sec5H2: 'Happy to Announce',
      Sec5H1: 'MOBILE APP',
      Sec5P: 'IS AVAILABLE IN EVERY OS PLATFORM.',
      FooterH2: 'Take it easy with location',
      FooterH3: 'Monday To Friday',
      FooterH32: 'Saturday & Sunday'

    },
  },
  
  ru: {
    translation: {
        tegA1: "Дом",
      tegA2: "Меню",
      tegA3: "Функции",
      tegA4: "Доставка",
      tegA5: "Новости",
      tegA6: "Страницы",
      HeaderBTN: "Бронирование столиков",
      Sec1H1: 'Гурманская любовь',
      Sec1BTN: 'Кликните сюда',
      Sec2H2: 'О нас',
      Sec2H1: 'У НАС ВКУСНО',
      Sec2P: 'Это ужасный пустынный текст, начиная с 1500-х годов, когда неизвестный типограф взял гранку шрифтов и переделал ее, чтобы сделать книгу образцов шрифтов. Он пережил не только пять столетий, но и скачок в электронный набор текста-пустышки начиная с 1500-х годов, когда неизвестный типограф взял гранку шрифта и переработал ее, чтобы сделать книгу образцов шрифта. Он пережил не только пять столетий, но и скачок в электронную верстку.',
      Sec2BTN: 'КЛИКНИТЕ СЮДА',
      Sec3H2: 'Специальные рецепты',
      Sec3H1: 'Вкус драгоценности',
      Sec4H2: 'Восхитительный',
      Sec4H1: 'Опыт',
      Sec4TEXT: 'ИТАЛЬЯНСКИЙ ГРИБ',
      Sec4MONEY: '1 074₽',
      Sec4or5H2: 'Удивительный',
      Sec4or5H1: 'Вкусный',
      Sec4or5TEXT: 'Напитки',
      Sec4or5TEXT2: 'Тунец жареный',
      Sec4or5TEXT3: 'Источник..................................................2 171₽',
      Sec4or5TEXT4: 'Основное блюдо',
      Sec4or5TEXT5: 'Десерты',
      Sec5H2: 'Рад сообщить',
      Sec5H1: 'МОБИЛЬНОЕ ПРИЛОЖЕНИЕ',
      Sec5P: 'ДОСТУПЕН НА КАЖДОЙ ПЛАТФОРМЕ ОС.',
      FooterH2: 'Будьте проще с местоположением',
      FooterH3: 'C понедельника по пятницу',
      FooterH32: 'Cуббота и воскресенье'
    },
  },
  uz: {
    translation: {

      HeaderBTN: "Table Booking",
     Sec1H1: 'Foody Love',
     Sec1BTN: 'Click here',
     Sec2H2: 'About us',
      Sec2H1: 'WE ARE TASTY',
      Sec2P: 'dard dummy text ever since the 1500s,when an unknownprinter took a galley of type and scrambled it to make a typespecimen book. It has survived not only five centuries, butalso the leap into electronic typesettingdard dummy text eversince the 1500s,when an unknown printer took a galley oftype and scrambled it to make a type specimen book. It hassurvived not only five centuries, but also the leap intoelectronic typesetting',
      Sec2BTN: 'CLICK HERE',
      Sec3H2: 'Special Recipes',
      Sec3H1: 'Taste of Precious',
      Sec4H2: 'Delightful',
      Sec4H1: 'Experience',
      Sec4TEXT: 'ITALIAN SOURCE MUSHROOM',
      Sec4MONEY: '12$',
      Sec4or5H2: 'Amazing',
      Sec4or5H1: 'Delicious',
      Sec4or5TEXT: 'Drinks',
      Sec4or5TEXT2: 'Tuna Roast',
      Sec4or5TEXT3: 'Source........................................................$24.5',
      Sec4or5TEXT4: 'Main course',
      Sec4or5TEXT5: 'Desserts',
      Sec5H2: 'Happy to Announce',
      Sec5H1: 'MOBILE APP',
      Sec5P: 'IS AVAILABLE IN EVERY OS PLATFORM.',
      FooterH2: 'Take it easy with location',
      FooterH3: 'Monday To Friday',
      FooterH32: 'Saturday & Sunday'
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;