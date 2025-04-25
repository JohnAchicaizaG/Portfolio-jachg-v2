// src/scripts/theme.ts
export function setThemeMode(mode: 'light' | 'dark') {
    const root = document.documentElement;

    if (mode === 'dark') {
        root.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    } else {
        root.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    }
}

export function toggleTheme() {
    const current = localStorage.getItem('theme');
    setThemeMode(current === 'dark' ? 'light' : 'dark');
}

export function initTheme() {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (saved === 'dark' || (!saved && prefersDark)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
}

