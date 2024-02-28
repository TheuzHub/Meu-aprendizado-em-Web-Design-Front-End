function flipCard() {
    console.log("Função flipCard() chamada.");
    
    const card = document.querySelector('.card');
    if (card) {
        console.log("Elemento .card selecionado corretamente.");
    } else {
        console.error("Erro: Elemento .card não encontrado.");
        return; // Encerra a função se o elemento não for encontrado
    }
    
    card.classList.toggle('flipped');
}



document.addEventListener('DOMContentLoaded', function() {
    const messages = document.querySelectorAll('.message');
    let index = 0;
  
    function showMessage() {
      const currentMessage = messages[index];
      currentMessage.style.display = 'block'; // Exibe a mensagem
      currentMessage.classList.add('fadeIn'); // Aplica a animação de surgimento
  
      // Aplica a animação de desaparecimento após 3 segundos (duração da animação de surgimento)
      setTimeout(function() {
        currentMessage.classList.add('fadeOut');
      }, 3000);
  
      // Oculta a mensagem após 8 segundos (3 segundos para a animação de surgimento + 5 segundos para a animação de desaparecimento)
      setTimeout(function() {
        currentMessage.style.display = 'none';
        currentMessage.classList.remove('fadeIn', 'fadeOut');
        index = (index + 1) % messages.length; // Passa para a próxima mensagem no loop
        showMessage(); // Chama recursivamente para exibir a próxima mensagem
      }, 3000);
    }
  
    // Inicia o ciclo de exibição das mensagens
    showMessage();
  });
  
  
  
  
  
