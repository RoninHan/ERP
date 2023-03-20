import  i18n  from "i18next";
import {initReactI18next} from "react-i18next";
import {scTranslation} from "./sc"
import {tsTranslation} from "./ts"
import {enTranslation} from "./en"

const resources = {
    en: {translation: {...enTranslation}},
    sc: {translation: {...scTranslation}},
    ts: {translation: {...tsTranslation}}
};

i18n.use(initReactI18next).init({
    resources,
    lng: localStorage.getItem("language")||"sc",
    fallbackLng: "sc",
    interpolation: {
        escapeValue: false
    }
})

export default i18n;