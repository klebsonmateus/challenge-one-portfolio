document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();


    var nome = document.getElementById('nome').value.trim();
    var email = document.getElementById('email').value.trim();
    var assunto = document.getElementById('assunto').value.trim();
    var mensagem = document.getElementById('mensagem').value.trim();


    if (nome === "") {
        alert("Por favor, preencha o campo Nome.");
        return;
    }

    if (email === "") {
        alert("Por favor, preencha o campo E-mail.");
        return;
    }


    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Por favor, insira um endereço de e-mail válido.");
        return;
    }

    if (assunto === "") {
        alert("Por favor, preencha o campo Assunto.");
        return;
    }

    if (mensagem === "") {
        alert("Por favor, preencha o campo Mensagem.");
        return;
    }


    alert("Formulário enviado com sucesso!");

});
