const data = require('../data/zoo_data');

// 10. Implemente a função getOldestFromFirstSpecies que deverá encontrar o animal mais velho da espécie gerenciado por uma pessoa colaboradora.
// Passado o ID de uma PESSOA colaboradora, a função getOldestFromFirstSpecies deverá encontrar a PRIMEIRA espécie de animal gerenciado por essa pessoa, e retornar um ARRAY com nome, sexo e idade do animal mais velho dessa espécie.

const getOldestFromFirstSpecies = (idPessoa) => {
  // captura o objeto da pessoa do parametro
  const pessoa = data.employees.find(({ id }) => id === idPessoa);
  // capturar array c/ espécies cuidadas pela pessoa
  const speciesList = pessoa.responsibleFor;
  // encontrar objeto da PRIMEIRA espécie gerenciada
  const findObject = data.species.find((object) => object.id === speciesList[0]);
  // capturar array dos residentes
  const residentAnimals = findObject.residents;
  // encontrando residente mais velho
  const sortResidents = residentAnimals.sort((a, b) => b.age - a.age); // b-a ordem decrescente
  const oldestResident = sortResidents[0]; // captura o 1o
  const res = Object.values(oldestResident);
  return res;
};
console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
// expecterd: ['Maxwell', 'male', 15]

module.exports = getOldestFromFirstSpecies;

// tentando com reduce
// const oldestResident = residentAnimals.reduce((acc, curr) => {
//   if (acc.length === 0) {
//     return acc.push(curr.name, curr.sex, curr.age);
//   }
//   if (acc[2] < curr.age) {
//     return acc.push(curr.name, curr.sex, curr.age);
//   }
//   return acc;
// }, []);
// return oldestResident;
// };
