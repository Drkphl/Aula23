const prompt = require('prompt-sync')();

function fat(num) {
    if (isNaN(num) || num < 0) {
        console.log('Por favor, insira um número inteiro não negativo válido.');
    } else {
        let fatorial = 1;
        for (let i = 1; i <= num; i++) {
            fatorial *= i;
        }
        return fatorial;
    }

    let numero = prompt('Insira o número que será calculado o fatorial? ');

    console.log(`O fatorial de ${numero} é ${fat}.`);
}
