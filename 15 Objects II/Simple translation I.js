import translations from "./translations.js";

/**
 * @param {string} language
 */
export const getTranslation = (language) => {
    console.log(translations);
    console.log(language);
    return translations.welcome[language]
}
