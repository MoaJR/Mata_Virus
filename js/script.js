/*--------------- variaveis ---------------*/
let altura = document.querySelector(".container").clientHeight;
let largura = document.querySelector(".container").clientWidth;
let vidas = 5;
let tempoMax = 20;


// funções
function resize(){
    altura = document.querySelector(".container").clientHeight;
    largura = document.querySelector(".container").clientWidth;
    console.log(altura, largura);
}

function virusAleatorio(){
    var rdn = Math.ceil(Math.random()*10);
    return "img/virus"+rdn+".png";
}

function ladoAleatorio(){
    var rdn = Math.ceil(Math.random()*2);

    if (rdn == 1) {
        return 'scaleX(1)'
    } else {
        return 'scaleX(-1)'
    }
}

function rotacaoAleatoria(){
    var graus = Math.ceil(Math.random()*45)
    var sinalRnd = Math.ceil(Math.random()*2)
    var sinal = sinalRnd = 1 ? "-" : "+";
    
    return 'rotate(' + sinal + graus + 'deg)'
}

function tamanhoAleatorio(){
    var tam = Math.ceil(Math.random()*60)
    return 'scale('+ (40+tam) +'%)'
}

//virus aleatorio
function virus(){
    let gen = document.querySelector(".container");
    let img = gen.appendChild(document.createElement("img"));
    let verificador = document.getElementById("virus")
    
    

    if(verificador){
        verificador.remove()
        
        if(vidas==0){
            clearInterval(timer)
            clearInterval(virusTimer)
            document.querySelector(".gameover").style.zIndex = 0;
        }else{
            document.querySelector("#v"+vidas).src="img/empty.png";
            vidas--;
        }
    }else{
        console.log('ganha')
    }

    img.src = virusAleatorio();
    img.style.position = 'absolute';
    img.id = 'virus';

    img.onclick = function(){
        this.remove()
    }

    img.style.transform = rotacaoAleatoria() +" "+ ladoAleatorio() + " " + tamanhoAleatorio();
    img.style.top = Math.ceil(Math.random()*(altura-220)) + "px"
    img.style.left = Math.ceil(Math.random()*(largura-220)) + "px"

}

function tempo(){ 
    if (tempoMax<0) {

        clearInterval(timer)
        clearInterval(virusTimer)
        document.querySelector(".vitoria").style.zIndex = 0;
    } else {
        document.querySelector(".tempo").innerHTML = "Tempo Restante: "+tempoMax+"s";
        tempoMax --;
    }   
    
}

var virusTimer = setInterval(function() {
    virus()
}, 1000);

var timer = setInterval(function() {
    tempo()
}, 1000);