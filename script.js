document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os botões "Investir"
    const investirButtons = document.querySelectorAll('.floating-window .investir');

    investirButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Encontra a janela flutuante pai do botão clicado
            const parentWindow = button.closest('.floating-window');
            
            // Encontra o input de quantidade dentro da janela pai
            const amountInput = parentWindow.querySelector('.investment-amount');
            
            // Obtém o valor digitado do input
            const amount = parseFloat(amountInput.value); // Converte para número decimal

            // Obtém o título do tipo de investimento
            const investmentType = parentWindow.querySelector('h2').textContent;

            // --- Validação da Quantia ---
            if (isNaN(amount) || amount <= 0) {
                // Se não for um número ou for zero/negativo
                alert('Por favor, digite uma quantia válida e positiva para investir.');
                amountInput.focus(); // Coloca o foco de volta no campo para correção
                return; // Para a execução da função
            }

            // --- Simulação do Investimento ---
            // Em uma aplicação real, aqui você faria uma chamada a uma API de backend,
            // processaria a transação, atualizaria o saldo do usuário, etc.
            
            // Para esta simulação, vamos apenas exibir uma mensagem de sucesso:
            const formattedAmount = amount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            
            alert(`Parabéns! Você simulou um investimento de ${formattedAmount} em ${investmentType}. Sua transação foi processada.`);
            
            console.log(`Simulação de Investimento: ${formattedAmount} em ${investmentType}.`);

            // Opcional: Limpar o campo após a "simulação" bem-sucedida
            amountInput.value = '';
        });
    });
});
