


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

let tentativasRestantes = 3;

function validaSenha() {
    const senhaCorreta = "123";
    const senha = document.getElementById('password').value;

    if (tentativasRestantes > 0) {
        if (senha === senhaCorreta) {
            document.getElementById('senha-result').innerText = "Acesso permitido";
            document.getElementById('btn-senha').disabled = true;
            document.getElementById('password').disabled = true;
        } else {
            tentativasRestantes--;
            document.getElementById('senha-result').innerText = "Senha incorreta";
            document.getElementById('tentativas').innerText = tentativasRestantes;
            if (tentativasRestantes === 0) {
                document.getElementById('senha-result').innerText = "Acesso bloqueado";
                document.getElementById('btn-senha').disabled = true;
                document.getElementById('password').disabled = true;
            }
        }
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





let numerosMedia = [];

function mediaAritmetica() {
    const input = document.getElementById('media-input').value.trim();
    let numerosDiv = document.getElementById('media-numeros');
    let resultadoDiv = document.getElementById('media-resultado');

    if (input.toLowerCase() === "fim") {
        if (numerosMedia.length === 0) {
            resultadoDiv.innerText = "Nenhum número inserido.";
            return;
        }
        let soma = 0;
        let i = 0;
        while (i < numerosMedia.length) {
            soma += numerosMedia[i];
            i++;
        }
        let media = soma / numerosMedia.length;
        resultadoDiv.innerText = `Média: ${media}`;
        numerosMedia = [];
        numerosDiv.innerText = "";
    } else {
        let numero = Number(input);
        if (!isNaN(numero)) {
            numerosMedia.push(numero);
            numerosDiv.innerText = `Números: ${numerosMedia.join(", ")}`;
            resultadoDiv.innerText = "";
        } else {
            resultadoDiv.innerText = 'Por favor, digite um número válido ou "fim".';
        }
    }
    document.getElementById('media-input').value = "";
    document.getElementById('media-input').focus();
}
function finalizarMediaAritmetica(){
    document.getElementById('media-input').value = "fim"; 
    mediaAritmetica()
}




function contadorRegressivo() {
    const num = Number(document.getElementById('contador-num').value);
    let resultado = '';

    if (!Number.isInteger(num) || num <= 0) {
        resultado = 'Por favor, insira um número inteiro maior que zero.';
    } else {
        let i = num;
        while (i >= 0) {
            resultado += i + (i > 0 ? '... ' : '');
            i--;
        }
    }

    let i2 = num;
     function atualizarContador() {
          if (i2 >= 0) {
                document.getElementById('contador-result-segundos').innerText = i2 + (i2 > 0 ? '... ' : '');
                i2--;
                setTimeout(atualizarContador, 1000);
          } else {
                document.getElementById('contador-result-segundos').innerText = 'Contagem finalizada!';
          }
     }
     atualizarContador();


    document.getElementById('contador-result').innerText = resultado;
}



function verificarMultiplosCriterios() {
    const inicio = Number(document.getElementById('criterios-inicio').value);
    const fim = Number(document.getElementById('criterios-fim').value);
    let encontrados = [];

    if (isNaN(inicio) || isNaN(fim)) {
        document.getElementById('criterios-result').innerText = 'Por favor, insira números válidos.';
        return;
    }

    for (let i = inicio; i <= fim; i++) {
        if (i % 2 === 0 && i % 3 === 0) {
            encontrados.push(i);
        }
    }

    if (encontrados.length > 0) {
        document.getElementById('criterios-result').innerText = `Números pares e múltiplos de 3: ${encontrados.join(', ')}`;
    } else {
        document.getElementById('criterios-result').innerText = 'Nenhum número atende aos critérios.';
    }
}
