document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const valor = document.querySelector('#Valor').value;
    const de = document.querySelector('#De').value;
    const para = document.querySelector('#Para').value;
    const resultado = document.querySelector('#resultado');
    const aviso = document.querySelector('#Aviso');


    if (valor === '') {
        aviso.textContent = 'Por favor, insira um valor válido.';
        return;
    } else if (de === para) {
        aviso.textContent = 'As moedas devem ser diferentes.';
        return;
    }

    aviso.textContent = '';

    if (de === 'BRL' && para === 'USD') {
        const valorConvertido = valor * 5.5;
        resultado.textContent = `O valor de ${valor} USD é ${valorConvertido.toFixed(2)} BRL.`;
    } else if (de === 'USD' && para === 'BRL') {
        const valorConvertido = valor / 5.5;
        resultado.textContent = `O valor de ${valor} BRL é ${valorConvertido.toFixed(2)} USD.`;
    }
});
