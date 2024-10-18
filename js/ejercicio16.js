let palabra = prompt("Ingresa una palábra o frase");
const palindroma = (palabra = "") => {
    if (!palabra) return console.warn("No ingresaste ninguna palábra o frase");
 
    palabra = palabra.toLowerCase();
    let alReves = palabra.split("").reverse().join("");
 
    return (palabra === alReves)
        ? console.info(`Sí es palindroma, palábra original: ${palabra}, palábra al revés ${alReves}`)
        : console.info(`No es palindroma, palábra original: ${palabra}, palábra al revés ${alReves}`);
}
 
palindroma(palabra);