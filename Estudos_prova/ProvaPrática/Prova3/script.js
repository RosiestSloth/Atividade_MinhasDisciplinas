document.addEventListener('DOMContentLoaded', () => {
    const valorContadorElement = document.getElementById('valor-contador');
    console.log("valorContadorElement :", valorContadorElement)     

    function atualizarContador() {
        console.log("Vc esta aqui!!")      
    }

    //Inicializa o contador na página
    atualizarContador();
});

let incremento = 0;
const valorContadorElement = document.querySelector("#valor-contador");

function incrementar() {
    incremento += 1;
    valorContadorElement.textContent = incremento;

}

function decrementar() {
    incremento -= 1;
    valorContadorElement.textContent = incremento
}

function resetar() {
    incremento = 0;
    valorContadorElement.textContent = incremento;
}