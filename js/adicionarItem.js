import { criarDataHoraCriacao } from "./criarDataHoraCriacao.js";
import { criarItemDaLista } from "./criarItemDaLista.js";
import { verificarListaVazia } from "./verificarListaVazia.js";

const texto = document.getElementById("input-item")
const listaDeCompras = document.getElementById("lista-de-compras")

export function adicionarItem(evento) {
    evento.preventDefault()

    if (texto.value === "") {
        alert("Por favor, insira um item!")
        return;
    }

    const itemDaLista = criarItemDaLista(texto.value, criarDataHoraCriacao())
    listaDeCompras.appendChild(itemDaLista)
    verificarListaVazia(listaDeCompras)
    texto.value = ""
}