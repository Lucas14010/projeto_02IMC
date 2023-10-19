
let calcular =  document.getElementById('calcular');


function imc () {
    let nome =  document.getElementById('nome').value;
    let altura =  document.getElementById('altura').value;
    let peso =  document.getElementById('peso').value;
    let resultado =  document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '') {

        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = '';

        if(valorIMC < 18.5){
            classificacao = 'Abaixo do peso';
        }else if (valorIMC < 25) {
            classificacao = 'Esta peso ideal. Parabéns';
        }else if (valorIMC < 30) {
            classificacao = 'Você esta levemente acima do peso.';
        }else if (valorIMC < 35) {
            classificacao =  'Você está com obesidade grau I.';
        }else if (valorIMC < 40) {
            classificacao = 'Você está com obesidade grau II,';
        }else {
            classificacao = 'Com obesidade grau III, cuidado!';
        }
        resultado.textContent = `${nome} seu IMC é ${valorIMC} e ${classificacao}`;


    }else {
       resultado.textContent = 'Preencha todos os campos!!'
    }

   
}

calcular.addEventListener('click', imc );

