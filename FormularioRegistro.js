var currentStep = 1; // Etapa atual do formulário

// Função para avançar para a próxima etapa do formulário
function nextStep() {
    // Verifica se todos os campos da etapa atual foram preenchidos corretamente
    if (!validateStep(currentStep)) {
        // Exibe a mensagem de erro
        document.getElementById('error-message').style.display = 'block';
        return;
    }

    // Esconde a mensagem de erro
    document.getElementById('error-message').style.display = 'none';

    // Esconde a etapa atual e mostra a próxima etapa
    document.getElementById('step' + currentStep).style.display = 'none';
    currentStep++;
    document.getElementById('step' + currentStep).style.display = 'block';

    // Se a próxima etapa for a última, exibe o botão de cadastro
    if (currentStep === 4) {
        document.getElementById('next-btn').style.display = 'none';
        document.getElementById('signup-btn').style.display = 'block';
    }
}

// Função para validar os campos da etapa atual
function validateStep(step) {
    // Implemente a validação dos campos de acordo com a etapa do formulário
    // Por exemplo, para a etapa 1 (username), você pode verificar se o campo está vazio
    // e se o formato do nome de usuário é válido.
    // Retorna true se os campos estiverem preenchidos corretamente, caso contrário, retorna false.
    return true; // Por padrão, retorna true para fins de demonstração
}

// Função para fechar o pop-up de idade
function closePopup() {
    document.getElementById('age-popup').style.display = 'none';
}

// Função para retornar à página de login
function returnToLogin() {
    window.location.href = 'login.html'; // Substitua 'login.html' pelo caminho da sua página de login
}

