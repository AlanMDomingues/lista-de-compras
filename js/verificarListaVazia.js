const mensagemListaVazia = document.getElementById("mensagem-lista-vazia")

export function verificarListaVazia(lista) {
    const tamanhoLista = lista ? lista.getElementsByTagName('li').length : undefined;
    if (tamanhoLista === 0 || tamanhoLista === undefined) {
        mensagemListaVazia.style.display = "block"
    } else {
        mensagemListaVazia.style.display = "none"
    }
}