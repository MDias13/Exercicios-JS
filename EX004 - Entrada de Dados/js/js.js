 function Verificar(){
     let vel = document.querySelector('input.velocidade');
     let res = document.querySelector('div#res');
     vel = Number(vel.value);

     if(vel > 80){
         res.innerHTML = 'Você está acima do Limite (Multado)';

     } else{
        res.innerHTML = 'Carro Em VELOCIDADE NORMAL';
    }

 }