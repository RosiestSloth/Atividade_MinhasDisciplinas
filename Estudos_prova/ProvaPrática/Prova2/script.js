let tarefas = [];

function renderizarTarefas() {
    const erro = document.querySelector('#erro-input');
    const ul = document.querySelector('#tarefas');
    ul.innerHTML = '';

    for (let i = 0; i < tarefas.length; i++) {
        const li = document.createElement('li');

        // Cria o <span> com a classe tarefa-texto
        const span = document.createElement('span');
        span.classList.add('tarefa-texto');
        span.textContent = tarefas[i];

        // Cria a div com as ações
        const acoes = document.createElement('div');
        acoes.classList.add('acoes');

        // Botão concluir
        const botaoConcluir = document.createElement('button');
        botaoConcluir.textContent = 'Concluir';
        botaoConcluir.style.width = '100px';
        botaoConcluir.style.marginRight = '1em';
        botaoConcluir.style.backgroundColor = 'var(--cor-botao-concluir)';
        botaoConcluir.onclick = function () {
            span.classList.toggle('concluida');
        };

        // Botão remover
        const botaoRemover = document.createElement('button');
        botaoRemover.textContent = 'Remover';
        botaoRemover.style.width = '100px';
        botaoRemover.style.backgroundColor = 'var(--cor-botao-remover)';
        botaoRemover.onclick = function () {
            removerTarefa(i);
        };

        // Monta os elementos
        acoes.appendChild(botaoConcluir);
        acoes.appendChild(botaoRemover);
        li.appendChild(span);
        li.appendChild(acoes);
        ul.appendChild(li);
    }
}

function adicionarTarefa() {
    const tarefa = document.querySelector('#nova-tarefa');
    const texto = tarefa.value.trim();
    const erro = document.querySelector('#erro-input');

    erro.textContent = '';

    if (texto === '') {
        erro.textContent = 'Você não pode adicionar um valor vazio.';
        return;
    }

    for (let i = 0; i < tarefas.length; i++) {
        if (tarefas[i] === texto) {
            erro.textContent = 'Este valor já foi adicionado.';
            return;
        }
    }

    tarefas.push(texto);
    tarefa.value = '';
    renderizarTarefas();
}

function removerTarefa(index) {
    tarefas.splice(index, 1);
    renderizarTarefas();
}
