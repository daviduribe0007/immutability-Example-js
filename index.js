// in this exampe we can see the number 2 in the seccion b dont change because we use Immutable in that map
const Immutable = require('immutable');
var map1 = Immutable.Map({ a: 1, b: 2, c: 3 });
console.log(map1);
const map2 = map1.set('b', 50);
console.log(map1.get('b') + " vs. " + map2.get('b'));


// In this second exercise we want extract the number with module different than zero of tha list and later multiply that number for the same number
const startSeq = Seq([ 1, 2, 3, 4, 5, 6, 7, 8 ])
const oddSquares = startSeq
  .filter(x => x % 2 !== 0)
  .map(x => x * x);

  console.log("secuencia inicial"+ startSeq );
  
  console.log("secuencia salida" + oddSquares );