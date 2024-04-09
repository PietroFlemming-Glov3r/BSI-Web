var listaTarefa = [];

function criaDesc() {
    let descTarefa = document.getElementById("descTarefa").value;
    return descTarefa.trim() !== "" ? descTarefa : "";
}

function criaData() {
    let dataLimite = document.getElementById("dataLimite").value;
    return dataLimite.trim() !== "" ? dataLimite : "";
}

function adicionarTarefaNaLista(tarefa) {
    var novoLi = document.createElement("li");
    var botao = document.createElement("button");
    var lblText = `Nome: ${tarefa.nome}`;

    if (tarefa.dataLimite !== "") {
        lblText += `, Data Limite: ${tarefa.dataLimite}`;
    }

    var lbl = document.createTextNode(lblText);
    botao.appendChild(lbl);

    if (tarefa.descricao) {
        var div = document.createElement("div");
        var caixa = document.createElement('p');
        caixa.textContent = `Descrição: ${tarefa.descricao}`;
        div.appendChild(caixa);
        div.setAttribute('class', 'invisivel');
        botao.onclick = function () {
            div.classList.toggle('invisivel');
        };
        novoLi.appendChild(div);
    }

    novoLi.appendChild(botao);

    var lista = document.getElementById("listaTarefas");
    lista.appendChild(novoLi);
    atualizaListaTarefas();
}





function adicionaTarefa() {
    let nomeTarefa = document.getElementById("nomeTarefa").value;
    let verificaData = document.getElementById("verificaData").checked;
    let verificaDesc = document.getElementById("verificaDesc").checked;

    if (verificaData && criaData() === "") {
        alert("Falha ao criar tarefa: Data limite não pode estar vazia.");
        return;
    }

    if (verificaDesc && criaDesc() === "") {
        alert("Falha ao criar descrição: Descrição não pode estar vazia.");
        return;
    }

    let tarefa = {
        nome: nomeTarefa,
        dataLimite: verificaData ? criaData() : "",
        descricao: verificaDesc ? criaDesc() : "",
    };

    listaTarefa.push(tarefa);

    document.getElementById("nomeTarefa").value = "";
    document.getElementById("descTarefa").value = "";
    document.getElementById("dataLimite").value = "";
    document.getElementById("verificaData").checked = false;
    document.getElementById("verificaDesc").checked = false;

    adicionarTarefaNaLista(tarefa);

    alert("Tarefa adicionada com sucesso!");
}

function apareceData() {
    let verificaData = document.getElementById("verificaData").checked;
    let divData = document.getElementById("divData");

    if (verificaData) {
        divData.classList.remove("invisivel");
    } else {
        divData.classList.add("invisivel");
    }
}

function apareceDesc() {
    let verificaDesc = document.getElementById("verificaDesc").checked;
    let divDesc = document.getElementById("divDesc");

    if (verificaDesc) {
        divDesc.classList.remove("invisivel");
    } else {
        divDesc.classList.add("invisivel");
    }
}

function excluirTarefa(index) {
    listaTarefa.splice(index, 1);
    atualizaListaTarefas();
}


function marcarComoConcluida(index) {
    listaTarefa[index].concluida = true;
    atualizaListaTarefas();
    var tarefaConcluida = document.getElementById("listaTarefas").children[index];
    tarefaConcluida.classList.add("tarefa-concluida");
}

function atualizaListaTarefas() {
    var lista = document.getElementById("listaTarefas");
    lista.innerHTML = "";

    listaTarefa.forEach(function(tarefa, index) {
        var novoLi = document.createElement("li");
        var botao = document.createElement("button");
        var lblText = `${tarefa.nome}`;
        botao.classList.add("item-lista"); 

        if (tarefa.dataLimite.trim() !== "") {
            lblText += `    Data Limite: ${tarefa.dataLimite}`;
        }
        
        var lbl = document.createTextNode(lblText);
        botao.appendChild(lbl);
        
        var div = document.createElement("div");
        var caixa = document.createElement('p');
        caixa.textContent = `Descrição: ${tarefa.descricao}`;
        caixa.classList.add("descricao");
        div.appendChild(caixa);
        div.setAttribute('class', 'invisivel');
        botao.onclick = function() {
            div.classList.toggle('invisivel');
        };
        novoLi.appendChild(botao);
        novoLi.appendChild(div);

        var btnExcluir = document.createElement("button");
        btnExcluir.textContent = "Excluir";
        btnExcluir.classList.add("botao-excluir");

        btnExcluir.onclick = function() {
            excluirTarefa(index);
        
        };
        novoLi.appendChild(btnExcluir);

        var btnConcluir = document.createElement("button");
        btnConcluir.textContent = "Concluir";
        btnConcluir.classList.add("botao-concluir")
        btnConcluir.onclick = function() {
            marcarComoConcluida(index);
        };
        novoLi.appendChild(btnConcluir);

        if (tarefa.concluida) {
            novoLi.classList.add("concluida");
        }

        lista.appendChild(novoLi);
    });
}   