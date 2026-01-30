export function formatarPeso(texto) {
    const numeros = texto.replace(/\D/g, "");
    if (!numeros) return "";
    let valor = parseInt(numeros, 10);
    if (valor > 10000) valor = 10000;
    return valor.toLocaleString("pt-BR");
}