export interface ChallengeUI {
    'challenges.title': string;
    'challenges.description': string;
    'challenges.card.title': string;
    'challenges.card.brief': string;
}

export const challenge: Record<'en' | 'es', ChallengeUI> = {
    en: {
        'challenges.title': 'Tech Challenges',
        'challenges.description': 'Technical tests I\'ve worked on.',
        'challenges.card.title': 'Challenge Title',
        'challenges.card.brief': 'Short description',
    },
    es: {
        'challenges.title': 'Pruebas Técnicas',
        'challenges.description': 'Pruebas técnicas que he desarrollado.',
        'challenges.card.title': 'Título de la Prueba',
        'challenges.card.brief': 'Descripción breve',
    },
};