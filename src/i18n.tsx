import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
  .use(Backend) // Подключение бэкенда i18next
  .use(LanguageDetector) // Автоматическое определение языка
  .use(initReactI18next) // Модуль инициализации
  .init({
    fallbackLng: 'de', // Язык по умолчанию
    debug: true, // Включение отладки
    detection: {
      order: ['queryString', 'cookie'], // Порядок определения языка
      caches: ['cookie'], // Кэширование языка в cookie
    },
    interpolation: {
      escapeValue: false, // Не экранировать значения
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // Путь к файлам переводов
    },
  });

export default i18n;

