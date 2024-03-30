const sr = ScrollReveal ({
    distance: '50px',
    duration: 2550,
    reset: true
});

sr.reveal('.home-text span', {delay:150});
sr.reveal('.home-text h1', {delay:300, origin: 'left'});

// Funcție pentru a bloca scroll-ul în jos
function blockScrollDown(e) {
    // Verificăm dacă evenimentul este asociat cu defilarea în jos
    if (e.key === "ArrowDown" || e.deltaY > 0) {
        // Anulăm evenimentul implicit asociat defilării în jos
        e.preventDefault();
    }
}

// Adăugăm ascultători de evenimente pentru diferite metode de defilare
window.addEventListener('wheel', blockScrollDown); // Pentru scroll cu mouse-ul
window.addEventListener('keydown', blockScrollDown); // Pentru tastele săgeți

// Opțional: Blochează scroll-ul folosind bara de defilare
// document.documentElement.style.overflowY = 'hidden';
// document.body.style.overflowY = 'hidden';
