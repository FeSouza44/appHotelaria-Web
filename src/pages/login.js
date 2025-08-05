import LoginForm from "../components/LoginForm.js";

export default function renderLoginPage() {
    const divRoot = document.getElementById('root');
    divRoot.innerHTML = '';

    const container = document.createElement('div');
    container.className = 'card p-4 shadow-lg';
    container.style.width = '100%'; //Container com 100% de largura na div para ocupar a tela 
    container.style.maxWidth = '400px'; // Até que atinja o limite de 400px
    divRoot.appendChild(container);

    const formulario = LoginForm();
    container.appendChild(formulario);
}
