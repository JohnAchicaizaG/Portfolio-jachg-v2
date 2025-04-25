import { navbar, hero, project, challenge, footer } from './lang';
import { head } from './lang/head';

export const languages = {
    en: 'English',
    es: 'Español',
};

export const defaultLang = 'es';

export const ui = {
    en: {
        ...head.en,
        ...navbar.en,
        ...hero.en,
        ...project.en,
        ...challenge.en,
        ...footer.en,
    },
    es: {
        ...head.es,
        ...navbar.es,
        ...hero.es,
        ...project.es,
        ...challenge.es,
        ...footer.es,
    },
} as const;