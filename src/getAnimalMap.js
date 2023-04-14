const data = require('../data/zoo_data');

// 14. Faça o MAPEAMENTO GEOGRÁFICO dos animais de cada espécie e realize filtros de LOCALIZAÇÃO, NOME EM ORDEM alfabética e SEXO.
// A função getAnimalMap é responsável por categorizar os animais por localização, além de filtrá-los por REGIÃO, NOME e SEXO a partir de um parâmetro. A estrutura do retorno da função é baseada na localização das espécies:

// A função, caso não receba parâmetros, deverá retornar animais categorizados por localização;
// A função, caso receba parâmetro sem a opção includeNames especificada, deverá retornar animais categorizados por localização;
// A função, caso receba parâmetro com a opção includeNames: true especificada, deverá retornar nomes de animais;
// A função, caso receba parâmetro com a opção sorted: true especificada, deverá retornar nomes de animais ordenados;
// A função, caso receba parâmetro com a opção sex: 'female' ou sex: 'male' especificada, deverá retornar somente nomes de animais macho/fêmea;
// A função, caso receba parâmetro com a opção sex: 'female' ou sex: 'male' especificada e a opção sorted: true especificada, deverá retornar somente nomes de animais macho/fêmea com os nomes dos animais ordenados;

const getAnimalMap = (options) => {
  if (!options || !Object.keys(options).includes('includeNames')) {
    // retornar animais categorizados por localização
  } else {
    // retornar NOMES de animais de cada espécie categorizados por localização de cada espécie
  }
  if (Object.keys(options).includes('sex')) {
    // retorna somente nomes de animais fêmea/macho  categorizados por localização
  }
  if (Object.keys(options).includes('sorted')) {
    // retorna ordenado
  }
};

module.exports = getAnimalMap;
