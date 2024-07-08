const marvel_hero = ["Thor", "Ironman", "spiderman"]
const dc_hero = ["superman", "batman", "flash"]

// spread operator

const allHeros = [...dc_hero,...marvel_hero]
console.log(allHeros);

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