export default function getHealthStatus(person) {
  let result = '';
  if (person.health > 50) {
    result = 'healthy';
  } else if (person.health >= 15 && person.health <= 50) {
    result = 'wounded';
  } else {
    result = 'critical';
  }
  return result;
}
