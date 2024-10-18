
const arreglo = ['pedro', 'juan', 'pablo', 'luis', 'diego'];

console.log("Array original: " + arreglo);

arreglo[3] = 'carlos';

console.log("Array después de la modificación:");

for (let i = 0; i < arreglo.length; i++) {
    console.log(arreglo[i]);
}
