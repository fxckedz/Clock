const hora = document.querySelector("#hora");
const minuto = document.querySelector("#minuto");
const segundo = document.querySelector("#segundo");
const tempoAtual = new Date();
const horario = [hora, minuto, segundo];

var intervalo = setInterval(atualiza,1000);

setTime()

function setTime(){
    hora.innerHTML = tempoAtual.getHours();
    minuto.innerHTML = tempoAtual.getMinutes();
    segundo.innerHTML = tempoAtual.getSeconds();
    checkTime();
}

function checkTime(){
    
    horario.forEach(element => {
        if(element.innerHTML < 10){
            element.innerHTML = "0" + element.innerHTML
        }
    });

}

function atualiza(){
    window.location.reload();
}