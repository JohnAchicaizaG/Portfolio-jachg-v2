export interface ProjectUI {
    'projects.title': string;
    'projects.card.title': string;
    'projects.card.brief': string;
    'projects.detail.description': string;
    'projects.detail.technologies': string;
    'projects.detail.contribution': string;
    'projects.detail.repo': string;
    'projects.detail.demo': string;
    'projects.detail.frontend': string;
    'projects.detail.backend': string;
    'projects.detail.youtube': string;
}

export const project: Record<'en' | 'es', ProjectUI> = {
    en: {
        'projects.title': 'Projects',
        'projects.card.title': 'Project Title',
        'projects.card.brief': 'Brief description',
        'projects.detail.description': 'Detailed Description',
        'projects.detail.technologies': 'Technologies Used',
        'projects.detail.contribution': 'Contribution',
        'projects.detail.repo': 'Repository',
        'projects.detail.demo': 'Live Demo',
        'projects.detail.frontend': 'Frontend Code',
        'projects.detail.backend': 'Backend Code',
        'projects.detail.youtube': 'Demo on YouTube',
    },
    es: {
        'projects.title': 'Proyectos',
        'projects.card.title': 'Título del Proyecto',
        'projects.card.brief': 'Descripción breve',
        'projects.detail.description': 'Descripción Detallada',
        'projects.detail.technologies': 'Tecnologías Usadas',
        'projects.detail.contribution': 'Contribución',
        'projects.detail.repo': 'Repositorio',
        'projects.detail.demo': 'Enlace en Producción',
        'projects.detail.frontend': 'Código Frontend',
        'projects.detail.backend': 'Código Backend',
        'projects.detail.youtube': 'Demo en YouTube',
    },
};