export interface FooterUI {
    'footer.message': string;
}

export const footer: Record<'en' | 'es', FooterUI> = {
    en: {
        'footer.message': 'Transforming ideas into code.',
    },
    es: {
        'footer.message': 'Transformando ideas en código.',
    },
};