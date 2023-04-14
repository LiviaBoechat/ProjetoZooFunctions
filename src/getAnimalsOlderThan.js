const data = require('../data/zoo_data');

// 2. Implemente a função getAnimalsOlderThan que deve receber uma espécie e uma idade como parâmetro, e então retornar se todos os animais dessa espécie possuem essa idade ou são mais velhos.

const getAnimalsOlderThan = (animal, idade) => {
  // captura o objeto referente ao animal dado no parametro
  const getObject = data.species.filter((elemento) => elemento.name === animal);
  console.log(getObject[0].residents);
  // retorna true/false caso tds cumpram a condição
  return getObject[0].residents.every(({ age }) => age === idade || age > idade);
};
console.log(getAnimalsOlderThan('otters', 7));

module.exports = getAnimalsOlderThan;

// const getObject = data.species.filter((elemento) => elemento.name === animal);
// console.log(getObject);
// return getObject.every((filteredObject) => filteredObject.resident.age > idade);
// };

// return data.species.map((objeto) => objeto.name === animal);
// return targetObject.every((elemento) => elemento.resident.age === idade || elemento.resident.age > idade);
// };
