const data = require('../data/zoo_data');

// 8. Calcule o valor total da entrada dos visitantes do zoológico.
// child: pessoas MENORES de 18 anos;
// adult: pessoas c/ idade MAIOR OU IGUAL a 18 anos e MENOR que 50 anos
// senior: pessoas c/ idade MAIOR OU IGUAL a 50 anos.

const entrants = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

// calcula a qt. de visitantes por faixa etária. Recebe array e retorna OBJETO do tipo: { child: 3, adult: 2, senior: 1 }
const countEntrants = (visitors) => {
  // mapear as idades de cada faixa etária retornando uma array com cada uma delas. Em cima do array aplicar length para saber a quantidade de pessoas em cada faixa etária.
  const getChildAges = visitors.filter(({ age }) => age < 18).length;
  // console.log(getChildAges);
  const getAdultAges = visitors.filter(({ age }) => age >= 18 && age < 50).length;
  // console.log(getAdultAges);
  const getSeniorAges = visitors.filter(({ age }) => age > 50 || age === 50).length;
  // console.log(getSeniorAges);

  // Atribuir valores acima à chaves dentro de um objeto
  const res = { child: getChildAges, adult: getAdultAges, senior: getSeniorAges };
  return res;
};
console.log(countEntrants(entrants));

// função que soma o valor da entrada das pessoas no zoo. Recebe array e retorna a SOMA TOTAL dos valores do ingresso. Retorna 0 se ão houver parâmetro(array vazio). Usa a função countEntrants para ter a quantidade total de pessoas por faixa etária. A soma dos valores devem ser por faixa etária. O retorno deve ser: 187.94.

const calculateEntry = (visitors) => {
  if (!visitors || Object.keys(visitors).length === 0) {
    return 0;
  }
  // chamar função de contagem c/ parametro visitors que retorna o objeto { child: 3, adult: 2, senior: 1 }
  const countEntrantsReturn = countEntrants(visitors);
  // desestruturando objeto acima
  const { child, adult, senior } = countEntrantsReturn;
  // multiplicar preços das faixas etárias(arquivo data) à qt. de visitantes de cada faixa etária(a qual foi desestruturada acima)
  const res = data.prices.child * child + data.prices.adult * adult + data.prices.senior * senior;
  return res;
};
console.log(calculateEntry(entrants));

module.exports = { calculateEntry, countEntrants };
