let quantidade = document.getElementById('qtd');
let jogos = document.getElementById('jogos');

let numerosConteudo1 =  [];
let numerosConteudo2 =  [];
let numerosConteudo3 =  [];


// Inicia os numeros para o usuário

function gerar() {                              
    limparDados(numerosConteudo1, numerosConteudo2, numerosConteudo3);
    numerosConteudo1 = [];
    numerosConteudo2 = [];
    numerosConteudo3 = [];

    if(quantidade.value >= 6 && quantidade.value <= 15 ) {
        numerosConteudo1 = sortearNum(quantidade.value);
        numerosConteudo2 = sortearNum(quantidade.value);
        numerosConteudo3 = sortearNum(quantidade.value);

        if(jogos.value > 0 && jogos.value < 4) {
           if(jogos.value == 1) {
               preencherCheck(numerosConteudo1);
           } else if (jogos.value == 2) {
                preencherCheck(numerosConteudo1, numerosConteudo2);
           } else {
                preencherCheck(numerosConteudo1, numerosConteudo2, numerosConteudo3);
           }
        } else {
            alert('Preencha 1, 2 ou 3 para o numero de Jogos!');
        }
    } else {
        alert('Valor inválido, digite um numero de 6 a 15!');
    }
}


//Função para Sortar numeros de forma aleatória

function sortearNum(quantidade) { 
    let arr = [];
    while(arr.length < quantidade) {
        var num = Math.ceil(Math.random()*60);
        if(arr.indexOf(num) < 0 && num != 61) { //O numero sorteado não deve pertecer ao array
            arr.push(num);                      // != 61 pois como o arredondamento é sempre pra cima pode-se sair um 61!
        }
    }
    console.log(arr)
    return arr;
}


 //função que preenche os numeros sorteados

function preencherCheck (arr, arr2=0, arr3=0) {
    for(let i of arr){
        let elemento = document.getElementById(`${i}`)
        elemento.classList.add('mark');
    }

    if(arr2.length != 0) {
        for(let i of arr2){
            let elemento = document.getElementById(`${i}a`)
            elemento.classList.add('mark');
        }
    }
    
    for(let i of arr3){
        let elemento = document.getElementById(`${i}b`)
        elemento.classList.add('mark');
    }
}


//função que limpa as marcações para serem geradas novas

function limparDados (arr, arr2, arr3) { 
    for(let i of arr){
        let elemento = document.getElementById(`${i}`)
        elemento.classList.remove('mark');
    }

    for(let i of arr2){
        let elemento = document.getElementById(`${i}a`)
        elemento.classList.remove('mark');
    }

    for(let i of arr3){
        let elemento = document.getElementById(`${i}b`)
        elemento.classList.remove('mark');
    }
}