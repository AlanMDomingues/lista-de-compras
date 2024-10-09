import { editarItem } from "./editarItem.js";
import { excluirItem } from "./excluirItem.js";
import { verificarListaComprados } from "./verificarListaComprados.js";
import { verificarListaVazia } from "./verificarListaVazia.js";

const listaComprados = document.getElementById("lista-comprados")
const listaDeCompras = document.getElementById("lista-de-compras")

let contador = 0;

export function criarItemDaLista(item, dataHoraCriacao) {
    const itemDaLista = document.createElement("li")
    const containerItemLista = document.createElement("div")
    containerItemLista.classList.add("lista-item-container")

    const containerNomeDoItem = document.createElement("div")
    containerNomeDoItem.classList.add("container-nome-compra")

    const containerCheckbox = document.createElement("div")
    containerCheckbox.classList.add("checkbox-container")

    const inputCheckbox = document.createElement("input")
    inputCheckbox.type = "checkbox"
    inputCheckbox.classList.add("checkbox-input")
    inputCheckbox.id = "checkbox-" + contador++

    const checkboxLabel = document.createElement("label")
    checkboxLabel.setAttribute("for", inputCheckbox.id)

    checkboxLabel.addEventListener("click", function (evento) {
        const checkboxInput = evento.currentTarget.querySelector(".checkbox-input")
        const checkboxCustomizado = evento.currentTarget.querySelector(".checkbox-customizado")
        const itemTitulo = evento.currentTarget.closest("li").querySelector("#item-titulo")

        if (checkboxInput.checked) {
            checkboxCustomizado.classList.add("checked")
            itemTitulo.style.textDecoration = "line-through"
            listaComprados.appendChild(itemDaLista)
        }
        else {
            checkboxCustomizado.classList.remove("checked");
            itemTitulo.style.textDecoration = "none"
            listaDeCompras.appendChild(itemDaLista)
        }
        verificarListaVazia(listaDeCompras);
        verificarListaComprados();
    })

    const checkboxCustomizado = document.createElement("div")
    checkboxCustomizado.classList.add("checkbox-customizado")

    checkboxLabel.appendChild(inputCheckbox)
    checkboxLabel.appendChild(checkboxCustomizado)
    containerCheckbox.appendChild(checkboxLabel)
    containerNomeDoItem.appendChild(containerCheckbox)

    const nomeDoItem = document.createElement("p")
    nomeDoItem.id = "item-titulo"
    nomeDoItem.innerText = item;

    containerNomeDoItem.appendChild(nomeDoItem)

    const containerBotoes = document.createElement("div")
    containerBotoes.style.display = "flex";
    containerBotoes.style.gap = "5px";
    const botaoRemover = document.createElement("button")
    botaoRemover.classList.add("botao-acao")

    const imagemRemover = document.createElement("img")
    imagemRemover.src = "img/delete.svg"
    imagemRemover.alt = "Remover";

    botaoRemover.addEventListener("click", function () {
        excluirItem(itemDaLista)
    })

    botaoRemover.appendChild(imagemRemover)
    containerBotoes.appendChild(botaoRemover)

    const botaoEditar = document.createElement("button")
    botaoEditar.classList.add("botao-acao")

    const imagemEditar = document.createElement("img")
    imagemEditar.src = "img/edit.svg"
    imagemEditar.alt = "Editar"

    botaoEditar.addEventListener("click", function () {
        editarItem(itemDaLista);
    })

    botaoEditar.appendChild(imagemEditar);
    containerBotoes.appendChild(botaoEditar);

    containerItemLista.appendChild(containerNomeDoItem)
    containerItemLista.appendChild(containerBotoes)
    itemDaLista.appendChild(containerItemLista)

    const itemData = document.createElement("p")
    itemData.innerText = dataHoraCriacao;
    itemData.classList.add("item-lista-texto")
    itemDaLista.appendChild(itemData);

    return itemDaLista;
}