var enterButton = document.getElementById('enter');
var input = document.getElementById('userInput');
var ul = document.getElementById('ul');
var item = document.getElementsByTagName('li');


function inputLength() { 
    return input.value.length;
} //verifica se uma nova tarefa foipreenchida

function createListElement() {
    var li = document.createElement('li');
    var txt = document.createTextNode(input.value); //coloca o nome da tarefa em uma variavel
    li.appendChild(txt); //coloca o texto na TAG li
    ul.appendChild(li);
    input.value = ''

    
    function crossOut() {
        li.classList.toggle('done'); //cria ou exclui a classe done na TAG li
    }

    li.addEventListener('click', crossOut);

    var dBtn = document.createElement('button'); //cria botão de axcluir a tarefa
    dBtn.appendChild(document.createTextNode("x"));
    li.appendChild(dBtn);
    dBtn.addEventListener('click', deleteListItem);

    function deleteListItem() {
        li.classList.add('delete');
    }
}

enterButton.addEventListener('click', addListAfterClick);
input.addEventListener('keypress', addListAfterKeypress);

function addListAfterClick() { //função para criar tarefa pelo lapis
    if(inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress() {
    if(inputLength() > 0 && event.which === 13) { //função para criar tarefa pelo clicando enter
        createListElement();
    }
}

