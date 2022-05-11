let bacon = document.getElementById('1');
let calabresa = document.getElementById('2');
let portuguesa = document.getElementById('3');
let queijos4 = document.getElementById('4');
let pepperoni = document.getElementById('5');
let mangueira = document.getElementById('6');
let qtdpedido = document.getElementById('qtd');
let carrinho = document.getElementById('carrinho');
let navbar = document.getElementsByTagName('nav')[0];
let ativar = 0

let adicionadas = []

function identificarId(elemento) { //identifica ID de um Elemento
    let identidade = elemento.id;
    return identidade;
}

function adicionarPizza(elemento) { //Adiciona pedido a lista
    let addPedido = identificarId(elemento);
    adicionadas.push(addPedido);
    mudarCarrinho();
}

function mudarCarrinho() {     //Mostra quantidade de produtos no carrinho
    if (adicionadas.length != 0) {
        if(adicionadas.length <= 5) {
            qtdpedido.style.display = 'flex';
            qtdpedido.innerHTML = `${adicionadas.length}` ; 
        } else {
            qtdpedido.style.display = 'flex';
            qtdpedido.innerHTML = `5+`;
        }
    }
}

function criarCarrinho() {
    if(ativar == 0) {
        ativar ++
        let container = document.createElement('div');
        container.classList.toggle('container-carrinho');
        qtdpedido.appendChild(container);
    }

    for(let i of adicionadas) {
        let sabor = document.createElement('p');
        container.appendChild(sabor);
        sabor.innerHTML = `${i}`;
    }
}

function fecharCarrinho() {
    let containerC = document.getElementsByClassName('.container-carrinho');
    containerC.style.display = 'none'
}

if(!criarCarrinho) {
    carrinho.addEventListener('click', criarCarrinho)
} else {
    carrinho.addEventListener('click', fecharCarrinho)
}

