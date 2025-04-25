export interface HeadUI {
    'head.title': string;
}

export const head: Record<'en' | 'es', HeadUI> = {
    en: {
        'head.title': 'My Portfolio',
    },
    es: {
        'head.title': 'Mi Portafolio',
    },
};