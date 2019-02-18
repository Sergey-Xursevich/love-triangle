/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  var count = 0, arr = [];
 
  for (var i = 0; i < preferences.length; i++) {

    var spichoneeB = preferences[i] - 1;
    var spichoneeC = preferences[spichoneeB] - 1;
    var spichoneeA = preferences[spichoneeC] - 1;

    if (spichoneeB != i && spichoneeC != i && spichoneeA == i && arr.indexOf(i) == -1) {
      arr.push(spichoneeA);
      arr.push(spichoneeB);
      arr.push(spichoneeC);
      count++;
    }

  }

  return count;
};
