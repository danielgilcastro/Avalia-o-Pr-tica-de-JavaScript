


function calculadoraAvancada() {

    let n1 = Number(document.getElementById('num1').value);
    let n2 = Number(document.getElementById('num2').value);
    let operacao = document.getElementById('operation').value;

    let resultado = 0;
    if (operacao === 'soma') {
        resultado = n1 + n2;
    } else if (operacao === 'subtracao') {
        resultado = n1 - n2;
    } else if (operacao === 'multiplicacao') {
        resultado = n1 * n2;
    } else if (operacao === 'divisao') {
        resultado = n1 / n2;
    } else if (operacao === 'modulo') {
        resultado = n1 % n2;
    } else if (operacao === 'potencia') {
        resultado = Math.pow(n1, n2);
    } else {
        console.log('Operação inválida');
        return null;
    }

    document.getElementById('calc-result').innerText = `Resultado: ${resultado}`;

}

function classificarIdade() {
    let idade = Number(document.getElementById('idade').value);
    let classificacao = "";

    if (idade >= 0 && idade <= 12) {
        classificacao = "Criança";
    } else if (idade >= 13 && idade <= 17) {
        classificacao = "Adolescente";
    } else if (idade >= 18 && idade <= 59) {
        classificacao = "Adulto";
    } else if (idade >= 60 && idade <= 100) {
        classificacao = "Idoso";
    } else if (idade > 100 && idade <= 200) {
        classificacao = "Centenário";
    } else if (idade > 200) {
        classificacao = "Imortal";
    } else {
        classificacao = "Idade inválida";
    }

    document.getElementById('idade-result').innerText = `Classificação: ${classificacao}`;
}


function tabuadaPersonalizada() {
    const base = Number(document.getElementById('tabuada-base').value);
    const limite = Number(document.getElementById('tabuada-limite').value);
    let resultado = '';

    if (isNaN(base) || isNaN(limite)) {
        resultado = 'Por favor, insira números válidos.';
    } else {
        for (let i = 1; i <= limite; i++) {
            resultado += `${base} x ${i} = ${base * i}<br>`;
        }
    }

    document.getElementById('tabuada-result').innerHTML = resultado;
}


function somaParesWhile() {
    const limite = Number(document.getElementById('limite-pares').value);
    let soma = 0;
    let i = 2;
    while (i <= limite) {
        soma += i;
        i += 2;
    }
    document.getElementById('pares-result').innerText = `Soma dos pares: ${soma}`;
}



function validaSenha() {
    const senhaCorreta = "123";
    let tentativas = 0;
    let acesso = false;

    const senha = document.getElementById('password').value;
    if (senha === senhaCorreta) {
        acesso = true;
    }
    tentativas++;

    if (acesso) {
        document.getElementById('senha-result').innerText = "Acesso permitido";
    } else {
        document.getElementById('senha-result').innerText = "Acesso bloqueado";
    }
}

function calcularFatorial() {
    const num = Number(document.getElementById('fatorial-num').value);
    let resultado = '';
    let formula = '';

    if (!Number.isInteger(num) || num < 0) {
        resultado = 'Por favor, insira um número inteiro positivo.';
        formula = '';
    } else {
        let fatorial = 1;
        let partes = [];
        for (let i = num; i >= 1; i--) {
            fatorial *= i;
            partes.push(i);
        }
        formula = partes.join(' x ') + (num > 0 ? ' = ' + fatorial : '1');
        resultado = `Fatorial de ${num} é ${fatorial}`;
    }

    document.getElementById('fatorial-formula').innerText = formula;
    document.getElementById('fatorial-result').innerText = resultado;
}



function verificarPrimo() {
    const num = Number(document.getElementById('primo-num').value);
    let mensagem = '';

    if (!Number.isInteger(num) || num < 2) {
        mensagem = 'Por favor, insira um número inteiro maior ou igual a 2.';
    } else {
        let primo = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                primo = false;
                break;
            }
        }
        mensagem = primo ? `${num} é um número primo.` : `${num} não é um número primo.`;
    }

    document.getElementById('primo-result').innerText = mensagem;
}