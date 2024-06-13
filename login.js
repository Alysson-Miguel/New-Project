    const validarFormulario = () => {
        var email = document.getElementById('email').value;
        var senha = document.getElementById('senha').value;
        if (!validarEmail(email)) {
            alert("Por favor, insira um email válido.");
            return false; 
        }
        if (!validarSenha(senha)) {
            alert("A senha deve ter pelo menos 8 caracteres.");
            return false;
        }
        return window.location.href = '../Newpage/home.html';
    }
    const validarEmail = (email) => {
        var caracteres = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return caracteres.test(email);
    }

    const validarSenha = (senha) => {
        return senha.length >= 8;
    }


