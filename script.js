const btn = document.getElementById('celebrateBtn');
const initialState = document.getElementById('initialState');
const birthdayMessage = document.getElementById('birthdayMessage');
const card = document.getElementById('card');

btn.addEventListener('click', () => {
    // 1. Efeito de Confete Profissional
    const count = 200;
    const defaults = { origin: { y: 0.7 } };

    function fire(particleRatio, opts) {
        confetti({
            ...defaults,
            ...opts,
            particleCount: Math.floor(count * particleRatio),
            colors: ['#ff3385', '#7000ff', '#ffd700']
        });
    }

    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2, { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });

    // 2. Transição Organizada de Conteúdo
    initialState.style.display = 'none';
    birthdayMessage.classList.remove('hidden');
    birthdayMessage.classList.add('fade-in');

    // 3. Ajuste Dinâmico do Card
    card.style.borderColor = 'var(--primary)';
});