n1 = parseInt(window.prompt('Digite o dividendo'))
n2 = parseInt(window.prompt('Digite o divisor'))

try {
    if (n2 === 0) {
        throw new Error('Divisão por zero não é permitida.');
    }
    const resultado = n1 / n2;
    window.alert('Resultado da divisão: ' + resultado);
    } catch (error) {
    window.alert('Ocorreu um erro: ' + error.message);
    } finally {
    window.alert('Fim do programa.');
    }