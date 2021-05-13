// in this exampe we can see the number 2 in the seccion b dont change because we use Immutable in that map
const Immutable = require('immutable');
var map1 = Immutable.Map({ a: 1, b: 2, c: 3 });
console.log(map1);
const map2 = map1.set('b', 50);
console.log(map1.get('b') + " vs. " + map2.get('b'));


// In this second exercise we want extract the number with module different than zero of tha list and later multiply that number for the same number
const { Seq } = require('immutable');
const startSeq = Seq([ 1, 2, 3, 4, 5, 6, 7, 8 ]);
const oddSquares = startSeq
  .filter(x => x % 2 !== 0)
  .map(x => x * x);

  console.log("secuencia inicial"+ startSeq );
  
  console.log("secuencia salida" + oddSquares );

  //other method to make immutable something us with freeze we have two profile1 one with freeze and other profile2 this profile can be change
  const profile = {
      name : "David",
      age: 28
  }
  const profile2 = {
    name : "maria",
    age: 30
}
console.log("profile1 no change never "+ "_name: "+profile.name+ " _age: " +profile.age);
console.log("profile2 change later "+ "_name: "+profile2.name+ " _age: " +profile2.age);
Object.freeze(profile);
profile.name = "Antonio";
profile.age = 58;
profile2.name = "Angela";
profile2.age = 48;
console.log("profile1 no modified "+ "_name:"+profile.name+ " _age:" +profile.age);
console.log("profile2 modified "+ "_name:"+profile2.name+ " _age:" +profile2.age);

