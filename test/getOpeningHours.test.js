const getOpeningHours = require('../src/getOpeningHours');

// 12 e 13. Implemente os testes da função getOpeningHours para obter ao menos 95% de cobertura. Esta função recebe como argumentos um dia da semana e um horário, e retorna uma mensagem informando se o zoológico está aberto ou não naquela data e hora.
// O nome do dia da semana passado como argumento tem que ser em inglês;
// O horário precisa ter a seguinte formatação 'XX:XX-XM';
// As horas serão validadas na nomenclatura 'AM' e 'PM';
// A função não faz diferenciação entre maiúsculas e minúsculas;

describe('Testes da função getOpeningHours', () => {
  test('retorna mensagem dizendo que está aberto o zoo', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
    expect(getOpeningHours('Wednesday', '09:00-AM')).toBe('The zoo is open');
  });

  test('retorna mensagem dizendo que está fechado o zoo', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
  });

  test('retorna mensagem dizendo que está fechado o zoo', () => {
    expect(() => getOpeningHours('inválido', '09:00-AM')).toThrow('The day must be valid. Example: Monday');
  });

  test('retorna erro quando AM/PM não existir', () => {
    expect(() => getOpeningHours('Monday', '10:00-')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });

  test('retorna erro quando a hora for menor que 0 ou maior que 12', () => {
    expect(() => getOpeningHours('Monday', '13:00-AM')).toThrow('The hour must be between 0 and 12');
  });

  test('retorna erro quando os minutos não estiverem entre 0 e 59', () => {
    expect(() => getOpeningHours('Monday', '09:60-AM')).toThrow('The minutes must be between 0 and 59');
  });

  test('retorna erro quando a hora e/ou min estiverem fora de formatação', () => {
    expect(() => getOpeningHours('Monday', '0940-AM')).toThrow('The minutes should represent a number');
  });

  test('retorna todos os dias da semana e horários quando não tiver parâmetro', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });
});
