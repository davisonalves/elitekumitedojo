// Adiciona um listener de evento a todos os links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      // Impede o comportamento padrão do link
      e.preventDefault();

      // Obtém o destino do link
      const target = document.querySelector(this.getAttribute('href'));

      // Verifica se o destino existe
      if (target) {
          // Calcula a posição de rolagem do destino
          const top = target.getBoundingClientRect().top + window.pageYOffset;

          // Usa a função animate() para rolar suavemente até o destino
          window.scrollTo({
              top,
              behavior: 'smooth'
          });
      }
  });
});
