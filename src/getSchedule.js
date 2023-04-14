const data = require('../data/zoo_data');

// 9. Implemente a função getSchedule que irá disponibilizar um cronograma com os HORÁRIOS de visita da semana disponíveis para CADA ESPÉCIE de animal. As informações dos horários dos animais devem ser disponibilizadas em uma CONSULTA para as pessoas que estão visitando o zoológico, que podem querer ter acesso ao cronograma da SEMANA, de UM DIA ou de um ANIMAL ESPECÍFICO.
// Retorne um ARRAY com os dias da semana em que um animal está disponível para visitação caso o PARÂMETRO da função seja um ANIMAL. Por exemplo:  getSchedule('lions'); // o retorno será [ 'Tuesday', 'Thursday', 'Saturday', 'Sunday' ];
// Retorne um OBJETO com TODOS os horários disponíveis para cada dia da semana caso a função não receba parâmetro ou o parâmetro passado para a função não seja um animal ou um dia. Exemplo:
/* {
  Tuesday: { // Dia da semana
    officeHour: 'Open from 8am until 6pm',
    exhibition: [ 'lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes' ],
  },
  Wednesday: {
    officeHour: 'Open from 8am until 6pm',
    exhibition: [ 'tigers', 'bears', 'penguins', 'otters', 'frogs', 'giraffes' ],
  },
  // [...]
}
*/

// função retorna os dias em que o animal passado vai estar
const animalDia = (schedTarget) => {
  // filter vai gerar um array de objeto. 1o percorre o array c/ find p/ pegar o objeto e depois acessa a chave objeto
  const getObj = data.species.filter(({ name }) => name === schedTarget)
    .find((object) => object);
  return getObj.availability;
};
// console.log(animalDia('lion'));

// função gerar exhibition
const exhibition = (dayWeek) => {
  const animalName = data.species.map(({ name }) => name);
  const animalDays = data.species.map(({ availability }) => availability);
  // console.log(animalDays);
  return animalDays.reduce((acc, curr, index) => {
    if (dayWeek === 'Monday') {
      return 'The zoo will be closed!';
    }
    if (curr.includes(dayWeek)) {
      acc.push(animalName[index]);
    }
    return acc;
  }, []);
};
// console.log(exhibition('Sunday'));

// função gerar officeHours
const officeHour = (dayWeek) => {
  // capurar as horas desestruturando o objeto hours
  const { hours } = data;
  if (dayWeek === 'Monday') {
    return 'CLOSED';
  }
  const frase = `Open from ${hours[dayWeek].open}am until ${hours[dayWeek].close}pm`;
  return frase;
};
// console.log(officeHour('Sunday'));

// função gerar objeto com officeHours, exhibition. Considerando tb qd um dia da semana for passado por parâmetro
const generateObject = (dayWeek) => dayWeek.reduce((acc, curr) => {
  acc[curr] = {
    officeHour: officeHour(curr),
    exhibition: exhibition(curr),
  };
  return acc;
}, {});
// console.log(generateObject(['Monday']));

const getSchedule = (schedTarget) => {
  // capturar em array nome de todos os animais do zoo
  const getAnim = data.species.map(({ name }) => name);
  // console.log(getAnim);
  if (getAnim.includes(schedTarget)) {
    return animalDia(schedTarget);
  }
  // guardar dias da semana em um array
  const days = Object.keys(data.hours);
  let arraySpecies = [schedTarget];
  if (!days.includes(schedTarget) && !getAnim.includes(schedTarget)) {
    arraySpecies = days;
  }
  return generateObject(arraySpecies);
};
console.log(getSchedule('Monday'));

module.exports = getSchedule;
