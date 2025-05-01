// src/scripts/typewriter.ts
import TypeIt from "typeit";
import { hero } from "../i18n/lang";

document.addEventListener("DOMContentLoaded", () => {
    const element = document.getElementById("typewriter");
    if (!element) return;

    // 📍 Detectamos el idioma desde la URL (ej: /es/ o /en/)
    const lang = (new URL(window.location.href).pathname.split("/")[1] as 'es' | 'en') || 'es';
    const heroContent = hero[lang];

    // 🔥 Inicializamos TypeIt
    new TypeIt("#typewriter", {
        speed: 100,
        loop: true,
        deleteSpeed: 50,
        breakLines: false,
    })
        .type(heroContent["hero.title"]) // 🎯 Título
        .pause(1000)
        .delete()
        .type(heroContent["hero.keywords"][0]) // 🔥 Primer keyword
        .pause(1000)
        .delete()
        .type(heroContent["hero.keywords"][1]) // 🔥 Segundo keyword
        .pause(1000)
        .go();
});