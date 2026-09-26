import { salvarApoiador, recuperarApoiador } from "./storage.js";
export function configurarFormulario() {
    const formulario = document.getElementById("form-cadastro");
const campoNome = document.getElementById("nome");
const campoEmail = document.getElementById("email");
const campoCpf = document.getElementById("cpf");
const campoTelefone = document.getElementById("telefone");
const campoCep = document.getElementById("cep");

const mensagemNome = document.createElement("small");
mensagemNome.style.display = "block";
campoNome.insertAdjacentElement("afterend", mensagemNome);

const mensagemEmail = document.createElement("small");
mensagemEmail.style.display = "block";
campoEmail.insertAdjacentElement("afterend", mensagemEmail);

const mensagemCpf = document.createElement("small");
mensagemCpf.style.display = "block";
campoCpf.insertAdjacentElement("afterend", mensagemCpf);

const mensagemTelefone = document.createElement("small");
mensagemTelefone.style.display = "block";
campoTelefone.insertAdjacentElement("afterend", mensagemTelefone);

const mensagemCep = document.createElement("small");
mensagemCep.style.display = "block";
campoCep.insertAdjacentElement("afterend", mensagemCep);    

campoNome.addEventListener("input", function() {
    if (campoNome.value.length < 3) {
        campoNome.style.borderColor = "red";
        mensagemNome.textContent = "O nome deve ter pelo menos 3 caracteres.";
    } else {
        campoNome.style.borderColor = "green";
        mensagemNome.textContent = "";
    }
});

campoEmail.addEventListener("input", function() {
    if (!campoEmail.validity.valid) {
        campoEmail.style.borderColor = "red";
        mensagemEmail.textContent = "Digite um e-mail válido.";
    } else {
        campoEmail.style.borderColor = "green";
        mensagemEmail.textContent = "";
    }
});

campoCpf.addEventListener("input", function() {
    if (!campoCpf.validity.valid) {
        campoCpf.style.borderColor = "red";
        mensagemCpf.textContent = "Digite o CPF no formato 000.000.000-00.";
    } else {
        campoCpf.style.borderColor = "green";
        mensagemCpf.textContent = "";
    }
});

campoTelefone.addEventListener("input", function() {
    if (!campoTelefone.validity.valid) {
        campoTelefone.style.borderColor = "red";
        mensagemTelefone.textContent = "Digite o telefone no formato (00) 00000-0000.";
    } else {
        campoTelefone.style.borderColor = "green";
        mensagemTelefone.textContent = "";
    }
});

campoCep.addEventListener("input", function() {
    if (!campoCep.validity.valid) {
        campoCep.style.borderColor = "red";
        mensagemCep.textContent = "Digite o CEP no formato 00000-000.";
    } else {
        campoCep.style.borderColor = "green";
        mensagemCep.textContent = "";
    }
});


    const apoiador = recuperarApoiador();
    if (apoiador) {

    document.getElementById("nome").value = apoiador.nome;
    document.getElementById("email").value = apoiador.email;
    document.getElementById("nascimento").value = apoiador.nascimento;
    document.getElementById("cpf").value = apoiador.cpf;
    document.getElementById("telefone").value = apoiador.telefone;
    document.getElementById("cep").value = apoiador.cep;
    document.getElementById("endereco").value = apoiador.endereco;
    document.getElementById("numero").value = apoiador.numero;
    document.getElementById("complemento").value = apoiador.complemento;
    document.getElementById("cidade").value = apoiador.cidade;
    document.getElementById("estado").value = apoiador.estado;
}

  formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    if (formulario.checkValidity()) {

        const dadosApoiador = {
            nome: document.getElementById("nome").value,
            email: document.getElementById("email").value,
            nascimento: document.getElementById("nascimento").value,
            cpf: document.getElementById("cpf").value,
            telefone: document.getElementById("telefone").value,
            cep: document.getElementById("cep").value,
            endereco: document.getElementById("endereco").value,
            numero: document.getElementById("numero").value,
            complemento: document.getElementById("complemento").value,
            cidade: document.getElementById("cidade").value,
            estado: document.getElementById("estado").value
        };

        salvarApoiador(dadosApoiador);

        alert("Cadastro realizado com sucesso!");

    } else {
        formulario.reportValidity();
    }
});

} //fecha a função configurarFormulario