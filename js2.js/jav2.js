 //Definir a lista de frases para alternar
    const frases = [
        "Dev Back-end jr!",
        "Dev Web!",
        "apaixonado por tecnologia!",
        "o mais preparado do mercado!"
    ];
    const textElement = document.getElementById("text-to-change");
    let currentPhraseIndex = 0;
    function changeText(){
        textElement.textContent = frases[currentPhraseIndex];
        currentPhraseIndex = (currentPhraseIndex + 1) % frases.length;
    }
    changeText();
    setInterval(changeText, 3000);

    // Texto sobre mim - exibe automaticamente
    const sobre = `Olá! Sou Lucas, um desenvolvedor Back-end Júnior apaixonado por criar soluções robustas e eficientes. Estou sempre buscando aprimorar minhas habilidades e contribuir para projetos inovadores. Minha jornada na programação começou com a curiosidade sobre como as coisas funcionam por trás das cenas, e desde então, tenho me dedicado a transformar ideias em código funcional.`;
    const text = document.getElementById('text');
    const cursorElement = document.getElementById('cursor');
    let aboutCharIndex = 0;
    function typeAboutMe(){
        if(aboutCharIndex < sobre.length){
            text.textContent += sobre.charAt(aboutCharIndex);
            aboutCharIndex++;
            setTimeout(typeAboutMe, 50);
        }else{
            if(cursorElement){
                cursorElement.style.display = 'none';
            }
        }
    }
    // Inicia a digitação automaticamente ao carregar a página
    typeAboutMe();

    // Modal para múltiplos projetos
document.querySelectorAll('.open-modal').forEach(btn => {
  btn.addEventListener('click', function() {
    const modalId = btn.getAttribute('data-modal');
    const modal = document.getElementById(modalId);
    if (modal) modal.style.display = 'block';
  });
});

// Fecha ao clicar no X, no span.close ou fora do modal
document.querySelectorAll('.modal').forEach(modal => {
  // Botão X
  const closeX = modal.querySelector('.close-modal-x');
  if (closeX) {
    closeX.onclick = () => { modal.style.display = 'none'; };
  }
  // Span close
  const closeSpan = modal.querySelector('.close');
  if (closeSpan) {
    closeSpan.onclick = () => { modal.style.display = 'none'; };
  }
  // Clique fora do modal-content
  modal.onclick = function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  };
});

// Fecha ao pressionar ESC
window.addEventListener('keydown', function(event) {
  if (event.key === "Escape") {
    document.querySelectorAll('.modal').forEach(modal => {
      if (modal.style.display === "block") {
        modal.style.display = "none";
      }
    });
  }
});



    // Menu sanduíche responsivo

    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');

function closeMenu() {
    navbar.classList.remove('show-menu');
    menuToggle.innerHTML = '&#9776;';
}

function openMenu() {
    navbar.classList.add('show-menu');
    menuToggle.innerHTML = '&#10006;';
}

menuToggle.addEventListener('click', () => {
    if (navbar.classList.contains('show-menu')) {
        closeMenu();
    } else {
        openMenu();
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth <= 574) {
        closeMenu();
    } else {
        navbar.classList.remove('show-menu');
        navbar.style.display = 'flex';
        menuToggle.innerHTML = '&#9776;';
    }
});

// Inicializa o estado correto ao carregar
if (window.innerWidth <= 574) {
    closeMenu();
} else {
    navbar.classList.remove('show-menu');
    navbar.style.display = 'flex';
    menuToggle.innerHTML = '&#9776;';
}