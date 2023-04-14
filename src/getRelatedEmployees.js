const data = require('../data/zoo_data');

// 4. Implemente a função getRelatedEmployees para verificar se uma pessoa colaboradora é gerente e quais pessoas ela lidera.
// Função isManager Retornar TRUE/FALSE se uma pessoa é ou não gerente
// Se a função isMAnager for TRUE, a Função getRelatedEmployees retorna um ARRAY com nome e sobrenome das pessoas lideradas pela gerência. Se a função isManager for FALSE, retorne uma msg de ERRO (throw new Error('O id inserido não é de uma pessoa colaboradora gerente!)

const isManager = (id) => {
  const getEmpl = data.employees.some(({ managers }) => managers.some((element) => element === id));
  return getEmpl;
};
console.log(isManager('9e7d4524-363c-416a-8759-8aa7e50c0992'));

const getRelatedEmployees = (managerId) => {
  if (isManager(managerId) === true) {
    return data.employees.filter(({ managers }) => managers.includes(managerId))
      .map(({ firstName, lastName }) => `${firstName} ${lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
};
console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));
// expected: [ 'Burl Bethea', 'Ola Orloff', 'Emery Elser' ]

module.exports = { isManager, getRelatedEmployees };

// 2a opcao isManager:
// const getEmployee = data.employees.some(({ managers }) => managers.includes(id));
// return getEmployee;
