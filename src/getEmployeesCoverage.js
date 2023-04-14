const data = require('../data/zoo_data');

// 11. Implemente a função getEmployeesCoverage que deverá retornar as informações sobre a pessoa colaboradora e por quais espécies ela é responsável.
// recebe OBJETO como PARÂMETRO e RETORNA um OBJETO
/* {
id: "4b40a139-d4dc-4f09-822d-ec25e819a5ad", // id da pessoa
fullName: "Sharonda Spry", // nome completo: firstName + lastName
species: [ "otters", "frogs" ], // espécies as quais a pessoa é responsável
locations: [ "SE", "SW" ], // Um array contendo todas as localizações das espécies
} */
// A função, caso o objeto passado por parâmetro tenha a propriedade name, deverá retornar somente a pessoa correspondente;
// ATENÇÃO: A função poderá receber como parâmetro um objeto com a propriedade name recebendo o lastName como valor;
// A função, caso o objeto passado por parâmetro tenha a propriedade id, deverá retornar somente a pessoa correspondente;
// A função, caso não receba parâmetros, deverá retornar uma lista com a cobertura de todas as pessoas colaboradoras;
// A função, caso não haja nenhuma pessoa com o name ou id especificados deverá lançar um error.

// função p/ testar nome, sobrenome e id
const isColaborator = (object) => {
  const getEmployee = data.employees.some(({ id, firstName, lastName }) =>
    id === object.id || firstName === object.name || lastName === object.name);
  return getEmployee;
};
console.log(isColaborator({ name: 'Sharonda' }));

// função busca o nome das espécies pela qual a pessoa é responsável
const getSpecies = (object) => {
  const pesonObject = data.employees.find(({ id, firstName, lastName }) =>
    id === object.id || firstName === object.name || lastName === object.name);
  const species = pesonObject.responsibleFor;
  const speciesObj = data.species.filter(({ id, name }) => species.includes(id));
  const getNames = speciesObj.map(({ name }) => name);
  return getNames;
};
// console.log(getSpecies({ name: 'Sharonda' }));

// função busca locations de cada espécie dentro de um array
const getLocations = (object) => {
  const getSpeciesObjects = data.species.filter(({ id, name }) =>
    getSpecies(object).includes(id) || getSpecies(object).includes(name));
  return getSpeciesObjects.map(({ location }) => location);
};
// console.log(getLocations({ name: 'Sharonda' }));

// função retorna todos os colaboradores caso o parametro for vazio
const returnAll = () => {
  // retorna array c/ tds objetos dos employees
  const getObjectEmployee = data.employees.map((eachEmployee) => {
    const res = {
      id: eachEmployee.id,
      fullName: `${eachEmployee.firstName} ${eachEmployee.lastName}`,
      species: getSpecies(eachEmployee),
      locations: getLocations(eachEmployee),
    };
    return res;
  });
  return getObjectEmployee;
};
console.log(returnAll());

const getEmployeesCoverage = (object) => {
  if (!object) {
    return returnAll();
  }
  if (isColaborator(object) === true) {
    const personObject = data.employees.find(({ id, firstName, lastName }) =>
      id === object.id || firstName === object.name || lastName === object.name);
    return {
      id: personObject.id,
      fullName: `${personObject.firstName} ${personObject.lastName}`,
      species: getSpecies(object),
      locations: getLocations(object),
    };
  }
  throw new Error('Informações inválidas');
};
console.log(getEmployeesCoverage());

module.exports = getEmployeesCoverage;
