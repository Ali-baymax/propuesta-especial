const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const musicToggleBtn = document.getElementById('musicToggleBtn');
const bgMusic = document.getElementById('bgMusic');

// --- REPRODUCTOR DE MÚSICA ---
let isPlaying = false;
musicToggleBtn.addEventListener('click', () => {
  if (isPlaying) {
    bgMusic.pause();
    musicToggleBtn.textContent = '▶️ Música 💖';
  } else {
    bgMusic.play().then(() => {
      musicToggleBtn.textContent = '⏸️ Pausar Música 💖';
    }).catch(() => {
      alert("Asegúrate de colocar tu archivo MP3 con el nombre 'musica.mp3' en la carpeta.");
    });
  }
  isPlaying = !isPlaying;
});

// --- FUNCIÓN PARA ABRIR/CERRAR CAJITAS ANIMADAS ---
function toggleNote(boxElement) {
  // Alterna la clase 'open' para que la cajita despliegue el texto suavemente con animación
  boxElement.classList.toggle('open');
}

// --- BOTÓN "NO" JUGUETÓN ---
const moveNoButton = () => {
  const x = Math.floor(Math.random() * (window.innerWidth - 100));
  const y = Math.floor(Math.random() * (window.innerHeight - 40));
  
  noBtn.style.position = 'fixed';
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
  noBtn.style.zIndex = '1000';
};

noBtn.addEventListener('mouseover', moveNoButton);
noBtn.addEventListener('touchstart', (e) => {
  e.preventDefault();
  moveNoButton();
});

// --- RESPUESTA "SÍ" ---
yesBtn.addEventListener('click', () => {
  confetti({
    particleCount: 180,
    spread: 80,
    colors: ['#ff70a6', '#ff97b7', '#ffffff', '#2a2b2e'],
    origin: { y: 0.6 }
  });

  const proposalCard = document.getElementById('proposalCard');
  proposalCard.innerHTML = `
    <div class="gap-badge">¡Contrato Aceptado! 💖</div>
    <h1 class="question-title" style="color: #880e4f; margin-top: 15px;">¡Me haces la persona más feliz! ✨</h1>
    <p style="font-size: 0.95rem; color: #4a4a5a; margin-top: 15px; line-height: 1.6;">
      No importan los kilómetros entre Coahuila y el Estado de México... 
      <i>Nuestra propia Pink Theory ya empezó.</i> 🌸
    </p>
    <p style="margin-top: 25px; font-size: 0.9rem; color: #ff70a6; font-weight: bold;">
      ¡Abre tu WhatsApp, te envié un mensaje especial! 📲
    </p>
  `;

  // Cambia por tu número real de WhatsApp (ej. México: 52...)
  const tuTelefono = "525560609648"; 
  const mensaje = encodeURIComponent("¡Dije que SÍ! 💕 Te quiero muchísimo, sigamos escribiendo nuestra historia.");
  
  setTimeout(() => {
    window.location.href = `https://wa.me/${tuTelefono}?text=${mensaje}`;
  }, 3500);
});