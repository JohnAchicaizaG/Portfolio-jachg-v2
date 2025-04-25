export interface HeroUI {
    'hero.title': string;
    'hero.keywords': string[];
}

export const hero: Record<'en' | 'es', HeroUI> = {
    en: {
        'hero.title': 'Web Developer',
        'hero.keywords': ['Efficient Solutions', 'Transforming Ideas'],
    },
    es: {
        'hero.title': 'Desarrollador Web',
        'hero.keywords': ['Soluciones Eficientes', 'Transformando Ideas'],
    },
};