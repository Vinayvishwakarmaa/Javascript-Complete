
const marval_Heros = ["Thor", "IronMan", "Spiderman"];
const dc_heros = ["Superman", "flash", "batman"];


// marval_Heros.push(dc_heros);


// console.log(marval_Heros);
// console.log(marval_Heros[3][1]);


// const allHeros = marval_Heros.concat(dc_heros);
// console.log(allHeros);


const all_new_heros = [...marval_Heros, ...dc_heros];
// console.log(all_new_heros);

const AnotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = AnotherArray.flat(Infinity);

console.log(real_another_array);

console.log(Array.isArray("Vinay"));
console.log(Array.from({ name: "vinay" })); // Interesting


let score1 = 100;
let score2 = 200;
let score3 = 300;

// console.log(Array.of(score1,score2,score3));

// isArray from of

