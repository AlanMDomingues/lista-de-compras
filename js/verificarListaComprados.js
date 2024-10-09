const listaComprados = document.getElementById("lista-comprados")

export function verificarListaComprados() {
    if (listaComprados.getElementsByTagName('li').length <= 0) {
        listaComprados.style.display = "none";
    } else {
        listaComprados.style.display = "block";
    }
}