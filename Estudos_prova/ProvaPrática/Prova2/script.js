document.addEventListener('DOMContentLoaded', () => {
    const inputNovaTarefa = document.getElementById('nova-tarefa');
    console.log("Vc esta aqui!!")
    
    btnAdicionarTarefa.addEventListener('click', adicionarTarefa);

    inputNovaTarefa.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            adicionarTarefa();
        }
    });

    function adicionarTarefa() {
    
        btnConcluir.addEventListener('click', () => {
            tarefaTextoSpan.classList.toggle('concluida');
        });

        inputNovaTarefa.value = '';
    }
});