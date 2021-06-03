import calculate from '../logic/calculate';

describe('Testing Numbers Buttons ', () => {
  test('correctly adds the number 1 to total', () => {
    expect(calculate({ next: null, operation: null, total: null }, '1')).toStrictEqual({ next: null, operation: null, total: '1' });
  });
  test('correctly adds the number 1 to next', () => {
    expect(calculate({ next: null, operation: '+', total: '1' }, '1')).toStrictEqual({ next: '1', operation: '+', total: '1' });
  });

  test('correctly adds the number 2 to total', () => {
    expect(calculate({ next: null, operation: null, total: null }, '2')).toStrictEqual({ next: null, operation: null, total: '2' });
  });
  test('correctly adds the number 2 to next', () => {
    expect(calculate({ next: null, operation: '+', total: '1' }, '2')).toStrictEqual({ next: '2', operation: '+', total: '1' });
  });

  test('correctly adds the number 3 to total', () => {
    expect(calculate({ next: null, operation: null, total: null }, '3')).toStrictEqual({ next: null, operation: null, total: '3' });
  });
  test('correctly adds the number 3 to next', () => {
    expect(calculate({ next: null, operation: '+', total: '1' }, '3')).toStrictEqual({ next: '3', operation: '+', total: '1' });
  });

  test('correctly adds the number 4 to total', () => {
    expect(calculate({ next: null, operation: null, total: null }, '4')).toStrictEqual({ next: null, operation: null, total: '4' });
  });
  test('correctly adds the number 4 to next', () => {
    expect(calculate({ next: null, operation: '+', total: '1' }, '4')).toStrictEqual({ next: '4', operation: '+', total: '1' });
  });

  test('correctly adds the number 5 to total', () => {
    expect(calculate({ next: null, operation: null, total: null }, '5')).toStrictEqual({ next: null, operation: null, total: '5' });
  });
  test('correctly adds the number 5 to next', () => {
    expect(calculate({ next: null, operation: '+', total: '1' }, '5')).toStrictEqual({ next: '5', operation: '+', total: '1' });
  });

  test('correctly adds the number 6 to total', () => {
    expect(calculate({ next: null, operation: null, total: null }, '6')).toStrictEqual({ next: null, operation: null, total: '6' });
  });
  test('correctly adds the number 6 to next', () => {
    expect(calculate({ next: null, operation: '+', total: '1' }, '6')).toStrictEqual({ next: '6', operation: '+', total: '1' });
  });

  test('correctly adds the number 7 to total', () => {
    expect(calculate({ next: null, operation: null, total: null }, '7')).toStrictEqual({ next: null, operation: null, total: '7' });
  });
  test('correctly adds the number 7 to next', () => {
    expect(calculate({ next: null, operation: '+', total: '1' }, '7')).toStrictEqual({ next: '7', operation: '+', total: '1' });
  });

  test('correctly adds the number 8 to total', () => {
    expect(calculate({ next: null, operation: null, total: null }, '8')).toStrictEqual({ next: null, operation: null, total: '8' });
  });
  test('correctly adds the number 8 to next', () => {
    expect(calculate({ next: null, operation: '+', total: '1' }, '8')).toStrictEqual({ next: '8', operation: '+', total: '1' });
  });

  test('correctly adds the number 9 to total', () => {
    expect(calculate({ next: null, operation: null, total: null }, '9')).toStrictEqual({ next: null, operation: null, total: '9' });
  });
  test('correctly adds the number 9 to next', () => {
    expect(calculate({ next: null, operation: '+', total: '1' }, '9')).toStrictEqual({ next: '9', operation: '+', total: '1' });
  });

  test('correctly adds the number 0 to total', () => {
    expect(calculate({ next: null, operation: null, total: null }, '0')).toStrictEqual({ next: null, operation: null, total: '0' });
  });
  test('correctly adds the number 0 to next', () => {
    expect(calculate({ next: null, operation: '+', total: '1' }, '0')).toStrictEqual({ next: '0', operation: '+', total: '1' });
  });
});

describe('Testing Operations Buttons ', () => {
  test('correctly adds the two numbers together', () => {
    expect(calculate({ next: '5', operation: '+', total: '10' }, '=')).toStrictEqual({ next: '', operation: null, total: '15' });
  });

  test('correctly subtracts next from total', () => {
    expect(calculate({ next: '5', operation: '-', total: '10' }, '=')).toStrictEqual({ next: '', operation: null, total: '5' });
  });

  test('correctly multiplies the two numbers together', () => {
    expect(calculate({ next: '5', operation: '*', total: '10' }, '=')).toStrictEqual({ next: '', operation: null, total: '50' });
  });

  test('correctly divides next from total', () => {
    expect(calculate({ next: '5', operation: '/', total: '10' }, '=')).toStrictEqual({ next: '', operation: null, total: '2' });
  });

  test('correctly tests the result of the division of next from total', () => {
    expect(calculate({ next: '6', operation: '%', total: '10' }, '=')).toStrictEqual({ next: '', operation: null, total: '4' });
  });
});

describe('Testing Special Buttons and other functionality ', () => {
  test('correctly converts total from negative to positive', () => {
    expect(calculate({ next: null, operation: null, total: '-1' }, '+/-')).toStrictEqual({ next: null, operation: null, total: '1' });
  });

  test('correctly converts next from positive to negative', () => {
    expect(calculate({ next: '1', operation: '+', total: '-1' }, '+/-')).toStrictEqual({ next: '-1', operation: '+', total: '-1' });
  });

  test('correctly clears all the values', () => {
    expect(calculate({ next: '1', operation: '+', total: '-1' }, 'AC')).toStrictEqual({ next: null, operation: null, total: '' });
  });

  test('correctly tests that if both operation and next are not present, equal does nothing', () => {
    expect(calculate({ next: null, operation: '+', total: null }, '=')).toStrictEqual({ next: null, operation: '+', total: null });
  });

  test('correctly tests that you cannot divide by 0', () => {
    expect(calculate({ next: '0', operation: '/', total: '5' }, '=')).toStrictEqual({ next: null, operation: null, total: 'Can not divide by 0' });
  });

  test('correctly tests if a wrong button is entered', () => {
    expect(calculate({ next: null, operation: '+', total: null }, 'hey')).toStrictEqual({ next: null, operation: null, total: null });
  });

  test('correctly tests if a wrong button is entered', () => {
    expect(calculate({ next: null, operation: '+', total: null }, 'hey')).toStrictEqual({ next: null, operation: null, total: null });
  });

  test('correctly adds . to the total', () => {
    expect(calculate({ next: null, operation: null, total: '5' }, '.')).toStrictEqual({ next: null, operation: null, total: '5.' });
  });
  test('does not add . to the total if it already has it', () => {
    expect(calculate({ next: null, operation: null, total: '5.' }, '.')).toStrictEqual({ next: null, operation: null, total: '5.' });
  });

  test('correctly adds . to the next', () => {
    expect(calculate({ next: '4', operation: '+', total: '5' }, '.')).toStrictEqual({ next: '4.', operation: '+', total: '5' });
  });
  test('does not add . to the next if it already has it', () => {
    expect(calculate({ next: '4.', operation: '+', total: '5' }, '.')).toStrictEqual({ next: '4.', operation: '+', total: '5' });
  });
});
