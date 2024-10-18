let tiempo=0;
pago=0;

let i=1;
for (let i = 1; i<= Infinity;) {
    tiempo= prompt("ingresa la cantidad de horas ejemplo: 0.5");
    if (isNaN(tiempo)){
        console.log('lo que se ha ingresado no es un numero');
    }
    else{
        if(tiempo<=0.5){
            console.log('su tiempo: '+ tiempo+', no se le cobrara')
        
        }else if(tiempo >=0.5 && tiempo<=2){
            pago= tiempo*10;
            console.log('su tiempo: '+ tiempo+ ', y su paga'+ pago)
        
        }else if(tiempo>=2 && tiempo<=3){
            pago= tiempo*25
            console.log('su tiempo: '+ tiempo+ ', y su paga'+ pago)
        
        }else if(tiempo>=3){
            pago= tiempo*30
            console.log('su tiempo :'+ tiempo+ ', y su paga'+ pago)
        }   
    }
    
}
