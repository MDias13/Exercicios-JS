function carregar(){
let msg = window.document.querySelector('.msg');

let foto = window.document.querySelector('.foto img');

let data = new Date();
let hora = data.getHours();
let min = data.getMinutes();

if(hora > 6 && hora < 12){
    msg.innerHTML = ` Bom Dia , Agora São ${hora} Horas e ${min} min.`

    foto.src = 'img/manha.jpg.png'
    document.body.style.background = '#B2845C'
    

}else if(hora > 12 && hora <18){
    msg.innerHTML = ` Boa Tarde , Agora São ${hora} Horas e ${min} min.`

    foto.src = 'img/tarde.png'
    document.body.style.background = 'red'
    
} else{
    msg.innerHTML = ` Boa Noite , Agora São ${hora} Horas e ${min} min.`

    foto.src = 'img/Noite.png'
    document.body.style.background = 'blue'
    

}
    
}