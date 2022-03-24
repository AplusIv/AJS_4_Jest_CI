import getHealthStatus from '../damages';

test.each([
  [{ name: 'Маг', health: 90 }, 'healthy'],
  [{ name: 'Маг', health: 50 }, 'wounded'],
  [{ name: 'Маг', health: 30 }, 'wounded'],
  [{ name: 'Маг', health: 15 }, 'wounded'],
  [{ name: 'Маг', health: 5 }, 'critical'],
])('should show health status of person', (person, expected) => {
  const result = getHealthStatus(person);
  expect(result).toBe(expected);
});
