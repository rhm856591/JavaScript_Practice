const marvel_hero = ["Thor", "Ironman", "spiderman"]
const dc_hero = ["superman", "batman", "flash"]

// marvel_hero.push(dc_hero)
// console.log(marvel_hero);

// let all_hero = marvel_hero.concat(dc_hero)
// console.log(all_hero);
// console.log(all_hero.length);

// spread operator

const allHeros = [...dc_hero,...marvel_hero]
// console.log(allHeros);

// rest operator

let A1 = [1,2,3,4];
let A2 = [5,6,7];

function sum(...num){
    return num.reduce((total,sum) => (total += sum),0)
}

// let allSum = sum(...A1, ...A2);
let allSum = sum(...A2);
// let allSum = sum(1,2,3,4)
console.log(allSum)

// const multiArrau = [ 1, 2, 3, [ 4, 5 ], 6, [ 7, 8, [ 9 ] ] ]
// const simpleArray = multiArrau.flat(Infinity)
// console.log(simpleArray);

// console.log(Array.isArray("Hitesh"))
// console.log(Array.from("Hitesh"))
// console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

// console.log(Array.of(score1, score2, score3));