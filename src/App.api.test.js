import dataCruncher, { calcSingleRewards, calcDblRewards, objToArray } from './App.api';

describe('test app api', () => {
  test('single reward pts for amt >= 100', () => {
    const result = calcSingleRewards(120);
    const expected = 50;

    expect(result).toBe(expected);
  });

  test('single reward pts for amt < 100', () => {
    const result = calcSingleRewards(80);
    const expected = 30;

    expect(result).toBe(expected);
  });

  test('single reward pts for amt < 50', () => {
    const result = calcSingleRewards(30);
    const expected = 0;

    expect(result).toBe(expected);
  });

  test('dbl reward pts > 100', () => {
    const result = calcDblRewards(103);
    const expected = 6;

    expect(result).toBe(expected);
  });

  test('dbl reward pts < 100', () => {
    const result = calcDblRewards(99);
    const expected = 0;

    expect(result).toBe(expected);
  });

  test('obj to array formatted correctly', () => {
    const obj = {
      foo: { pts: 1, total: 2 },
      bar: { pts: 3, total: 1 }
    };
    const result = objToArray(obj);
    const expected = [
      { name: 'foo', pts: 1, total: 2 },
      { name: 'bar', pts: 3, total: 1 }
    ];

    expect(result).toEqual(expected);
  });

  test('final data to be formatted/calculated correctly', () => {
    const list = [
      { name: 'foo', amt: 50},
      { name: 'bar', amt: 110 },
      { name: 'foo', amt: 55 }
    ];
    const result = dataCruncher(list);
    const expected = [
      { name: 'foo', pts: 5, total: 105 },
      { name: 'bar', pts: 70, total: 110 }
    ];

    expect(result).toEqual(expected);
  });
});
