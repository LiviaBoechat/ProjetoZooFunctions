const handlerElephants = require('../src/handlerElephants');

// 6 e 7. Implemente os testes da função handlerElephants para obter ao menos 80% de cobertura.

describe('Testes da função HandlerElephants', () => {
  test('retorna o valor das chaves, a quantidade de elefantes, a média deidade deles e o nome de todos os residentes', () => {
    expect(handlerElephants('count')).toBe(4);
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
    expect(handlerElephants('averageAge')).toBe(10.5);
    expect(handlerElephants('popularity')).toBe(5);
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
    expect(handlerElephants('location')).toBe('NW');
    expect(handlerElephants(0)).toBe('Parâmetro inválido, é necessário uma string');
    expect(handlerElephants('inválido')).toBe(null);
    expect(handlerElephants()).toBe(undefined);
    expect(handlerElephants('residents')).toEqual([
      {
        name: 'Ilana',
        sex: 'female',
        age: 11,
      },
      {
        name: 'Orval',
        sex: 'male',
        age: 15,
      },
      {
        name: 'Bea',
        sex: 'female',
        age: 12,
      },
      {
        name: 'Jefferson',
        sex: 'male',
        age: 4,
      },
    ]);
  });
});
