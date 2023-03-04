// 1 - Crie a função ligarDesligar, que ligue e desligue um motor de um carro.
function ligarDesligar(modo) {
  let status = modo === 'ligado' ? 'desligado' : 'ligado';
  console.log(`O motor está ${status}`);
  return status;
} 
// 2 - Crie a função circleArea, que calcule a área de um círculo.
const circleArea = (raio) => {
  if (typeof raio === 'number') {
    let area = raio * raio * 3.14; 
    return `Essa é a área do círculo: ${area}`;
  }
  return 'O parâmetro radius deve ser um número';
};

// 3 - Crie a função longestWord, que receba uma frase como parâmetro e retorne a maior palavra da frase.
const longestWord = (frase) => {
  let fraseSeparada = frase.split(' ');
  let maiorPalavra = '';

  for (let palavra of fraseSeparada) {
    if (palavra.length > maiorPalavra.length) {
      maiorPalavra = palavra;
    }
  }
  return maiorPalavra;
};
