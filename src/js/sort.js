export default function sortPersons(array) {
  return array.sort((a, b) => {
    if (a.health > b.health) {
      return -1; // если первое значение больше второго
    }
    // if (a.health === b.health) {
    //   return 0; // если значения равны
    // }
    if (a.health < b.health) {
      return 1; // если первое значение меньше второго
    }
    return 0; // если значения равны
  });
}
