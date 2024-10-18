let num1, num2;
num1 = prompt('ingrese un numero');
num2 = prompt('ingrese otro numero');
if (num1>num2) {
    console.log('el numero:'+num1+ 'es menor que'+ num2);
} else if(num1<num2) {
    console.log('el numero:'+num1+ 'es mayor que'+ num2);
}else {
    console.log('los dos numeros son iguales');
}