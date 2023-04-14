const data = require('../data/zoo_data');

// 5. Implemente a função countAnimals que deverá contabilizar a quantidade de espécies residentes no zoológico.
// Retorne a QUANTIDADE de animais residentes por espécie caso não seja passado nenhum parÂmetro. O retorno deverá ser um OBJETO cujo o NOME de cada espécie é a CHAVE e o TOTAL de animais residentes dessa espécie é o VALOR.
// Retorne a QUANTIDADE de animais RESIDENTES no zoológico da espécie passada por PARÂMETRO. Exemplo: ao receber { species: 'penguins' }, retorna a QUANTIDADE DE PINGUINS e ao receber { species: 'giraffes', sex: 'female' }, retorna apenas a QUANTIDADE DE GIRAFAS FÊMEAS que residem no zoológico.

const countAnimals = (animal) => {
  if (animal === undefined) {
    return data.species.reduce((acc, curr) => {
      // acc é o objeto{} e atribui-se uma chave à ele a cada iteração objeto[chave] = valor. Qt ao valor, como residents é array, usa length p/ medir qts residentes tem.
      acc[curr.name] = curr.residents.length;
      return acc;
    }, {});
  }

  // desestruturando a chave name dos objetos percorridos pelo find dentro do array species é igual a fazer const { name } = objeto, pois está igualando da msm forma. Depois impõe condição de que o name seja igual ao valor da chave species que será passado no parâmetro animal (que sempre será um objeto, nesse caso). Filtragem retorna o OBJETO do animal referido no parâmetro.
  const findResident = data.species.find(({ name }) => name === animal.species);

  // se existir a chave sex no parâmetro(que é objeto) animal, filtra os residents c/ a CONDIÇÃO de que tenham o mesmo sexo do que está no parâmetro. Como o filter retorna um array, conte a quantidade de elementos que terá nesse array com length.
  if (animal.sex) {
    const filterSex = findResident.residents.filter((resident) => resident.sex === animal.sex);
    return filterSex.length;
  }
  // senão, retorna a quantidade de residentes do animal passado em parâmetro. Como a chave residens é um array, conte a quantidade de elementos que terá nele com lenght.
  return findResident.residents.length;
};

console.log(countAnimals({ species: 'giraffes', sex: 'female' }));

module.exports = countAnimals;
