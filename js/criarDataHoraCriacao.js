export function criarDataHoraCriacao() {
    return `${new Date().toLocaleDateString("pt-BR", { weekday: "long" })} (${new Date().toLocaleDateString()}) às ${new Date().toLocaleTimeString("pt-br", { hour: "numeric", minute: "numeric" })}`;
}