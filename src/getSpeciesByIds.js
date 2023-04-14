const data = require('../data/zoo_data');

// tudo está dentro de um objeto data
// cada espécie é um objeto dentro de um array species. Cada animal residente é um objeto dentro de um array redidents que, por sua vez, está dentro do array species
// cada empregado é um objeto dentro de um  array employees
// cada dia da semana é uma chave dentro do objeto hours
// cada valor de ingresso é uma chave dentro do objeto prices

// 1. Implemente a função getSpeciesByIds para buscar as espécies dos animais por meio de um ID e retorne um array contendo todos os animais dessa espécie.

const getSpeciesByIds = (...ids) => {
  // o find dentro do filter está funcionando como um for dentro de for. Preciso percorre tanto o objeto, quanto o parametro ids(que é array), para depois impor condição para a filtragem
  const filterId = data.species.filter((object) => ids.find((element) => object.id === element));
  return filterId;
};

console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));
module.exports = getSpeciesByIds;

// const getSpeciesByIds = (...ids) => {
//   // filtrando dentro do array species o objeto c/ id igual ao id do parâmetro, mas tbm tem que percorrer o parametro ids pq ele é um array
//   const filterId = data.species.filter((object) => ids.find((element) => object.id === element));
//   return filterId;
// };
