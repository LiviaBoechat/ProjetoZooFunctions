const data = require('../data/zoo_data');

// 3. Implemente a função getEmployeeByName que deve buscar por pessoas colaboradoras através de seu primeiro ou último nome.

const getEmployeeByName = (eN) => {
  if (!eN) {
    return {};
  }
  return data.employees.find((elemento) => elemento.firstName === eN || elemento.lastName === eN);
};

console.log(getEmployeeByName('Emery'));

module.exports = getEmployeeByName;
