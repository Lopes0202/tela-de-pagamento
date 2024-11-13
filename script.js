
document.getElementById('planForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário por padrão
    
    const plan = document.getElementById('plan').value;
    const name = document.getElementById('name').value;
    const cpf = document.getElementById('cpf').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const cardNumber = document.getElementById('cardNumber').value;
    const cardExpiry = document.getElementById('cardExpiry').value;
    const cardCvc = document.getElementById('cardCvc').value;

    // Validação básica para o exemplo
    if (cardNumber.length < 16 || cardCvc.length < 3 || cardExpiry.length < 5) {
        alert('Por favor, preencha todos os campos do cartão de crédito corretamente.');
        return;
    }

    // Aqui você pode adicionar lógica para validar o CPF, email, etc.

    console.log(`Plano escolhido: ${plan}`);
    console.log(`Nome: ${name}`);
    console.log(`CPF: ${cpf}`);
    console.log(`Email: ${email}`);
    console.log(`Telefone: ${phone}`);
    console.log(`Número do Cartão: ${cardNumber}`);
    console.log(`Data de Validade: ${cardExpiry}`);
    console.log(`Código de Segurança: ${cardCvc}`);

    alert('Obrigado por comprar o plano! Seus dados foram recebidos.');
});