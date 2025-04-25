export interface NavbarUI {
    'nav.projects': string;
    'nav.about': string;
    'nav.challenges': string;
}

export const navbar: Record<'en' | 'es', NavbarUI> = {
    en: {
        'nav.projects': 'Projects',
        'nav.about': 'About Me',
        'nav.challenges': 'Tech Challenges',
    },
    es: {
        'nav.projects': 'Proyectos',
        'nav.about': 'Sobre mí',
        'nav.challenges': 'Pruebas Técnicas',
    },
};