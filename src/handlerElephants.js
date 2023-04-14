const { species } = require('../data/zoo_data');

// função retorna o objeto inteiro que tenha chave com nome de elephant.     name: 'elephant'
const getElephants = () =>
  species.find((currentSpecies) => currentSpecies.name === 'elephants');
console.log(getElephants());

// função retorna média das idades dos elefantes qd o parâmetro passado é o objeto retornado pela função getElephants. Valor inicial da contagem é 0.
const averageAge = ({ residents }) =>
  residents.reduce((acc, elephant) => acc + elephant.age, 0) / residents.length;
console.log(averageAge(getElephants()));

// Dependendo do parâmetro (param), ele retorna ou a qt. de elefantes(count), ou um array c/ nome dos elephantes(names), ou a média de idade dos elefantes(averageAge). Além desse parâmetro, tem a chamada da função getElephant que retorna o objeto inteiro dos elefantes
const computeData = (param, elephants) => {
  switch (param) {
  case 'count':
    return elephants.residents.length;
  case 'names':
    return elephants.residents.map((elephant) => elephant.name);
  case 'averageAge':
    return averageAge(elephants);
  default:
    return null;
  }
};
console.log(computeData('averageAge', getElephants()));

// Essa função junta todas as de cima e ainda serve para expor os valores das chaves do objeto elefantes. Se o parametro(param) estiver incluso em algumas das chaves(se for igual a alguma chave), entao será retornado o valor dessa chave. Senão, a função computeData(que retorna ou count ou array de names ou averageAge) vai ser chamada c/ esse parâmetro, caso sejam inseridas uma dessas strings(count, name, averageAge).
const handlerElephants = (param) => {
  if (param === undefined) {
    return undefined;
  }
  if (typeof param !== 'string') {
    return 'Parâmetro inválido, é necessário uma string';
  }
  const elephants = getElephants(); // a const elephants vai ser o objeto inteiro
  if (Object.keys(elephants).includes(param)) {
    return elephants[param];
  }
  return computeData(param, elephants);
};
console.log(handlerElephants('location'));

module.exports = handlerElephants;
