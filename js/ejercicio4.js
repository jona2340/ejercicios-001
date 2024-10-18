let numero;
numero = prompt('ingrese un numero:')
if (numero<0) {
    console.log('el numero:' +numero+ ' '+  'es negativo');
}else if(numero>0){
    console.log('el numero es:' + numero +' '+ 'positivo');
}else{
    console.log("el numero es cero")
}