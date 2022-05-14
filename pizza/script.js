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
    let container = document.createElement('div');

    if(ativar == 0) {
        ativar++
        container.classList.add('container-carrinho');
        container.id = 'container-carrinho';
        qtdpedido.appendChild(container);

        for(let i of adicionadas) {
            let containerex = document.createElement('div');
            let sabor = document.createElement('p');
            let x = document.createElement('p');

    
            x.id = `${i}del`;
            containerex.id = `${i}c`;
            x.onclick = function () {
                let recuperarId = this.id;

                recuperarId = recuperarId.split('');
                
                for(let i = 1; i <= 3; i++) {
                    recuperarId.pop();
                }

                recuperarId = recuperarId.join('');
                
                container.removeChild((document.getElementById(`${recuperarId}c`)));
                //filter ou slice;

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

    } else {
        ativar--;
        let container = document.getElementById('container-carrinho');
        qtdpedido.removeChild(container);
    }
}


carrinho.addEventListener('click', criarCarrinho);




