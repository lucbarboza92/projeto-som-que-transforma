import { paginas } from "./pages.js";
import { configurarFormulario } from "./form.js";

const conteudo = document.getElementById("conteudo");
const linksNavegacao = document.querySelectorAll("[data-page]");

linksNavegacao.forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();

        const pagina = this.dataset.page;

        console.log("Página selecionada:", pagina);
        carregarPagina(pagina);
    });
});

function carregarPagina(pagina) {
    conteudo.innerHTML = paginas[pagina];

    if (pagina === "cadastro") {
        configurarFormulario();
    }
}



console.log("JavaScript carregado com sucesso!");