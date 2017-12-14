const tick = () => {
    const clocks = Array.from(document.getElementsByClassName('clock'));
    const now = new Date().toISOString();
    clocks.forEach(clock => clock.innerHTML = now);
};

window.addEventListener('DOMContentLoaded', tick);
setInterval(tick, 1000);
