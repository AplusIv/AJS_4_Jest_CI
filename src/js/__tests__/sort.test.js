import sortPersons from '../sort';

test('should sort persons healths in descending order', () => {
  const expected = [
    { name: 'маг', health: 100 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 20 },
    { name: 'маг', health: 1 },
  ];

  const result = sortPersons([
    { name: 'маг', health: 1 },
    { name: 'мечник', health: 20 },
    { name: 'маг', health: 100 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ]);
  expect(result).toEqual(expected);
});
