import AOS from 'aos';
import 'aos/dist/aos.css';

export function initializeAOS() {
    if (typeof window !== "undefined") {
        AOS.init({
            duration: 1200,
            once: true,
            offset: 100,
        });
    }
}