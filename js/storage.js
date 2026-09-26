export function salvarApoiador(dadosApoiador) {
    localStorage.setItem(
        "apoiador",
        JSON.stringify(dadosApoiador)
    );
}

export function recuperarApoiador() {
    const dadosSalvos = localStorage.getItem("apoiador");

    if (dadosSalvos) {
        return JSON.parse(dadosSalvos);
    }

    return null;
}