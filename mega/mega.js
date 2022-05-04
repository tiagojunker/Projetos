let quantidade = document.getElementById('qtd');
let numerosConteudo1 =  [];
let numerosConteudo2 =  [];
let numerosConteudo3 =  [];

function gerar() {
    if(quantidade.value >= 6 && quantidade.value <= 15 ) {
        //Pensar como sortear para cada jogo
    } else {
        alert('Valor inválido, digite um numero de 6 a 15!');
    }
}

function sortearNum(quantidade) {
    let arr = [];
    for(let i = 1; i <= quantidade; i++) {
        var num = Math.ceil(Math.random()*60);
        if(arr.indexOf(num) < 0) { //O numero sorteado não deve pertecer ao array
            arr.push(num); 
        }
    }
}