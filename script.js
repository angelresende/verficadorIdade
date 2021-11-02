function verificar(){
   var data = new Date();
   var ano = data.getFullYear();
   var fAno = document.getElementById('txtAno');
   var res = document.querySelector('div#res'); 

   if(fAno.value <= 0 || Number(fAno.value) > ano){
        window.alert('[ERRO] Verfique o ano informado!')
   } else{
        var fSex = document.getElementsByName('radSex');
        var idade = ano - Number(fAno.value);
        var gen = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');

        if(fSex[0].checked){
            gen = 'homem'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src','images/menino.jpg')
            } else if (idade < 30){
                img.setAttribute('src','images/homemJovem.jpg')
            } else if(idade < 50){
                img.setAttribute('src','images/homemAdulto.jpg')
            }else{
                img.setAttribute('src','images/idoso.jpg')
            }

        }else if(fSex[1].checked){
            gen = 'mulher'
            if (idade >=0 && idade < 10){
                img.setAttribute('src','images/menina.jpg')
            } else if (idade < 30){
                img.setAttribute('src','images/mulherJovem.jpg')
            } else if(idade < 50){
                img.setAttribute('src','images/mulherAdulta.jpg')
            }else{
                img.setAttribute('src','images/idosa.jpg')
            }
        }else {
            gen = 'não Binário'
            if (idade >=0 && idade < 10){
                img.setAttribute('src','images/nBiCriança.jpg' )
            } else if (idade < 30){
                img.setAttribute('src','images/nBiJovem.jpg' )
            } else if(idade < 50){
                img.setAttribute('src','images/nBiAdulto.jpg' )
            }else{
                img.setAttribute('src','images/nBiIdoso.jpg' )
            }
        }
        res.innerHTML = `Detectamos um ${gen} com ${idade} anos.`;
        res.appendChild(img);
    }
    

    
   
}