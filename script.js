document.addEventListener('DOMContentLoaded', () => {
  // Seleciona todos os links do menu e os títulos da página
  const botoesMenu = document.querySelectorAll('.btn-scroll');
  const titulos = document.querySelectorAll('.secao-titulo');

  botoesMenu.forEach(botao => {
    botao.addEventListener('click', (evento) => {
      evento.preventDefault();
      
      // Pega o texto do atributo data-alvo do botão
      const alvo = botao.getAttribute('data-alvo').toLowerCase();

      // Procura o título que contém o texto correspondente
      titulos.forEach(titulo => {
        if (titulo.textContent.toLowerCase().includes(alvo)) {
          // Rola a tela suavemente até o elemento encontrado
          titulo.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          });
        }
      });
    });
  });
});

// Seleciona o botão pela ID ou Classe
const botaoHistoria = document.querySelector('#btn-historia');

botaoHistoria.addEventListener('click', () => {
  // Abre o site em uma nova aba
window.open('https://pt.wikipedia.org/wiki/Volkswagen_Fusca', '_blank');
});