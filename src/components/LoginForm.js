
export default function LoginForm() {
    const formulario = document.createElement('form');
    formulario.className = 'd-flex flex-column';

    const email = document.createElement
    ('input');
    email.className = 'input';
    email.type = 'email';
    email.placeholder = "Digite seu e-mail";
    formulario.appendChild(email);

    const senha = document.createElement('input');
    senha.className = 'input';
    senha.type = 'password';
    senha.placeholder = "Digite sua senha: ";
    formulario.appendChild(senha);

    const entrar = document.createElement('button');
    entrar.type = 'submit';
    entrar.className = 'input';
    entrar.textContent = "Entrar";
    formulario.appendChild(entrar);
    return formulario;

}