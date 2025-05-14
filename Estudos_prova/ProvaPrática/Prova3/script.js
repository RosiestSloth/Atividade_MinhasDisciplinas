document.addEventListener('DOMContentLoaded', () => {
    const valorContadorElement = document.getElementById('valor-contador');
    console.log("valorContadorElement :", valorContadorElement)      

    function atualizarContador() {
        console.log("Vc esta aqui!!")      
    }

    incrementarBtn.addEventListener('click', () => {
        console.log("Aqui vc Incrementa!!")      
    });

    // Inicializa o contador na página
    atualizarContador();
});