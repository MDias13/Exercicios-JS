function verificar() {
    let data = new Date();
    let ano = data.getUTCFullYear();
    let fano = document.getElementById('txtano');
    let res = document.querySelector('.res');
    let foto = document.querySelector('.foto');

    if (fano.value.lenght == 0 || fano.value > ano || fano.value < 0) {
        window.alert('ERRO Informe um ano Válido');
    }else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value);
        let genero = ''
        if(fsex[0].checked) {
            genero = 'Homem';
        } else {
            genero = 'Mulher';
        }
        res.innerHTML =  `Detectamos ${genero} de ${idade} Anos`;
        
        if(idade <=13 && genero == 'Mulher'){
            foto.src = 'img/CM.png'
        }else if(idade <=13 && genero == 'Homem'){
            foto.src = 'img/CH.png'
        } else if(idade >13 && idade < 18 && genero == 'Homem'){
            foto.src = 'img/JH.png'
        }else if(idade >13 && idade < 18 && genero == 'Mulher'){
            foto.src = 'img/JM.png'
        }else if(idade >18 && idade < 59 && genero == 'Homem'){
            foto.src = 'img/AH.png'
        }else if(idade >18 && idade < 59 && genero == 'Mulher'){
            foto.src = 'img/AM.png'
        }else if(idade >59 &&  genero == 'Mulher'){
            foto.src = 'img/IM.png'
        }else if(idade >59 &&  genero == 'Homem'){
            foto.src = 'img/IH.png'
        }
        


    }


}