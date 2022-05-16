let bacon = document.getElementById('1');
let calabresa = document.getElementById('2');
let portuguesa = document.getElementById('3');
let queijos4 = document.getElementById('4');
let pepperoni = document.getElementById('5');
let mangueira = document.getElementById('6');
let qtdpedido = document.getElementById('qtd');
let carrinho = document.getElementById('carrinho');
let navbar = document.getElementsByTagName('nav')[0];
let ativar = 0;

let adicionadas = [] //Array com os pedidos adicionados

function identificarId(elemento) { //identifica ID de um Elemento
    let identidade = elemento.id;
    return identidade;
}

function adicionarPizza(elemento) { //Adiciona pedido a lista
    let addPedido = identificarId(elemento);
    adicionadas.push(addPedido);
    mudarCarrinho();
}

function mudarCarrinho() {     //Altera quantidade de produtos no carrinho
    if (adicionadas.length != 0) {
        if(adicionadas.length <= 5) {
            qtdpedido.style.display = 'flex';
            qtdpedido.innerHTML = `${adicionadas.length}` ; 
        } else {
            qtdpedido.style.display = 'flex';
            qtdpedido.innerHTML = `5+`;
        }
    } else {
        qtdpedido.style.display = 'none';
        qtdpedido.innerHTML = `${adicionadas.length}` ;
    }
}

//função que cria a janela de pedidos
function criarCarrinho() {
    let container = document.createElement('div');

    if(ativar == 0) { //se ativer igual a zero abre a janela quando a função é executada
        ativar++
        container.classList.add('container-carrinho');
        container.id = 'container-carrinho';
        qtdpedido.appendChild(container);

        // função que cria os elementos adicionados
        for(let i of adicionadas) { 
            let containerex = document.createElement('div');
            let sabor = document.createElement('p');
            let x = document.createElement('p');

    
            x.id = `${i}del`;
            containerex.id = `${i}c`;
            //função que remove os elementos adicionados
            x.onclick = function () {
                let recuperarId = this.id;

                recuperarId = recuperarId.split('');
                
                for(let i = 1; i <= 3; i++) {
                    recuperarId.pop();
                }

                recuperarId = recuperarId.join('');
                
                container.removeChild((document.getElementById(`${recuperarId}c`)));
                //filter ou slice;
                adicionadas.splice(adicionadas.indexOf(recuperarId),1);
            }
            containerex.style.display = 'flex';
            containerex.style.justifyContent = 'space-between';
            containerex.style.padding = '0 10px';

            containerex.appendChild(sabor);
            containerex.appendChild(x);
            container.appendChild(containerex);

            x.innerHTML = 'X';
            sabor.innerHTML = `${i}`;
        }

    } else { //se ativar igual a um fecha a janela quando a função é executada
        ativar--;
        let container = document.getElementById('container-carrinho');
        qtdpedido.removeChild(container);
        mudarCarrinho();
    }
}

//função que verifica caso todos os pedidos adicionados sejam retirados
setInterval(function carrinhoMenor(){
    if(adicionadas.length == 0){
        mudarCarrinho();
    }
}, 500)
carrinho.addEventListener('click', criarCarrinho);




