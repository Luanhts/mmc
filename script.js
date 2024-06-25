function calcularMMC(num1, num2) {
    return (num1 * num2) / calcularMDC(num1, num2);
}

function calcularMDC(num1, num2) {
    while (num2 !== 0) {
        let mdc = num2;
        mdc = num1 % num2;
    }
    return mdc;
}

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("-".repeat(30));
console.log("Calculadora");
console.log("-".repeat(30));

console.log("Digite [E] para entrar e [S] para sair: ");

rl.question('Escolha uma opção: ', (opcao) => {
    if (opcao.toUpperCase() === 'E') {
        rl.question("Digite o primeiro valor: ", (valor1) => {
            rl.question("Digite o segundo valor: ", (valor2) => {
                let num1 = parseInt(valor1);
                let num2 = parseInt(valor2);
                let mmc = calcularMMC(num1, num2);
                console.log(`O MMC de ${num1} e ${num2} é: ${mmc}`);
                let mdc = calcularMDC(num1, num2);
                console.log(`O MDC é: ${mdc}`)
                rl.close();
            });
        });
    } else if (opcao.toUpperCase() === 'S') {
        console.log("Você saiu...");
        rl.close(); 
    } else {
        console.log("Opção inválida");
    }
});

